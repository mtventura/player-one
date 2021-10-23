import { useContext } from "react"
import NotificationContext from "../../context/NotificationContext"

const Notification = ({className}) => {
    const { notification } = useContext(NotificationContext)

    if(notification.message === '')
        return null

    return (<div className={className} style={{backgroundColor: notification.severity === 'error' ? "red" : "green"}}>
        {notification.message}
    </div>)
}

export default Notification