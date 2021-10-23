
const TextArea = ({className, rows, id, onChange}) => {
    return (
        <textarea id={id} rows={rows} className={className} onChange={onChange}/>
    )
}

export default TextArea