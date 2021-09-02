const Button = ({className, buttonLabel, onClick}) => {
    return <button className={className} onClick={onClick}>{buttonLabel}</button>
}

export default Button; 