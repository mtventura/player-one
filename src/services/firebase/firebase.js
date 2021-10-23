import * as firebase from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, doc, getDoc, getDocs, query, Timestamp, where, writeBatch } from '@firebase/firestore'

//#region Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDr4V5AbBCWI0RSWB15RhbhHbeWm8iZbjw",
  authDomain: "player-one-ecommerce.firebaseapp.com",
  projectId: "player-one-ecommerce",
  storageBucket: "player-one-ecommerce.appspot.com",
  messagingSenderId: "310998195566",
  appId: "1:310998195566:web:8e9fafc9015bfdf16a757f"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)
//#endregion

//#region Menu
export const getMenuOptions = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, 'categories')).then((querySnapshot) => {
      const menuOptions = querySnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      resolve(menuOptions)
    }).catch((error) => {
      reject(`Error obteniendo los menúes: ${error}`)
    })
  })
}
//#endregion

//#region Users
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, 'users')).then((querySnapshot) => {
      const users = querySnapshot.docs.map(doc => {
           return {...doc.data()}
       })
       resolve(users)
    }).catch((error) => {
      reject(`Error obteniendo los usuarios: ${error}`)
    })
  })
}

export const createUser = (newUser) =>{
  return new Promise((resolve, reject) => {
    getUsers().then(users => {
      if(!users.some(user => user.email === newUser.email))
      {
        const batch = writeBatch(db)
        addDoc(collection(db, 'users'), newUser).then(() => {
          batch.commit().then(() => {
            resolve()
          })
        }).catch((error) => {
          reject(`Error creando el usuario: ${error}`)
        })
      }
      else
        reject('Cuenta de email en uso')
    }).catch((error) => {
      reject(`Error creando el usuario: ${error}`)
    })
  })
}
//#endregion

//#region Items
export const getItems = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionQuery = !categoryId ? collection(db, 'items') : query(collection(db, 'items'), where('categoryId', '==', categoryId))
    
    getDocs(collectionQuery).then((querySnapshot) => {
      const items = querySnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      resolve(items)
    }).catch((error) => {
      reject(`Error obteniendo los items: ${error}`)
    })
  })
}

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, 'items', id)).then((querySnapshot) => {
      const item = {id: querySnapshot.id, ...querySnapshot.data()}
      resolve(item)
    }).catch((error) => {
      reject(`Error obteniendo el item: ${error}`)
    })
  })
}

export const CreateItem = (item) => {
  return new Promise ((resolve, reject) => {
    const batch = writeBatch(db)
    addDoc(collection(db, 'items'), item).then(() => {
      batch.commit().then(() => {
        resolve()
      })
    }).catch((error) => {
      reject(`Error creando el item: ${error}`)
    })
  })
}
//#endregion

//#region Orders
export const newOrder = (order) => {
  return new Promise((resolve, reject) => {

    order = {
      ...order, 
      date: Timestamp.fromDate(new Date())
    }
    const batch = writeBatch(db)
    const itemsWithoutStock = []

    order.items.forEach((item) => {
      getDoc(doc(db, 'items', item.id)).then(documentSnapshot => {
          if(documentSnapshot.data().stock >= item.quantity)
              batch.update(doc(db, 'items', documentSnapshot.id), {
                  stock: documentSnapshot.data().stock - item.quantity
              })
          else
              itemsWithoutStock.push({...documentSnapshot.data(), id: documentSnapshot.id}) 
      }).catch((error) => {
        reject('error: ', error)
      })
    })
    
    if(itemsWithoutStock.length === 0){
      addDoc(collection(db, 'orders'), order).then((docRef) => {
          batch.commit().then(() => {
              resolve(docRef.id)
          })
      }).catch((error) => {
          reject('error: ', error)
      })
    }   
  })
}

export const getOrder = (id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, 'orders', id)).then((querySnapshot) => {
      const order = {id: querySnapshot.id, ...querySnapshot.data()}
      resolve(order)
    }).catch((error) => {
      reject(`Error obteniendo la órden: ${error}`)
    })
  })
}
//#endregion