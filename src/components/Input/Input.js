
const Input = ({className, type, id, name, placeHolder, onChange, required}) => {

    return(
        <input className={className} type={type} id={id} name={name} placeholder={placeHolder} onChange={onChange} required={required}/>
    )
}

export default Input