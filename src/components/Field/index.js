import './Field.css'

const Field = (props) => {

    const aoDigitado = (evento) => {
        props.onChanged(evento.target.value)
    }

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className={`field field-${props.type}`}>
            <label>
                {props.label}
            </label>
            <input type={props.type} 
            value={props.valor} 
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={placeholderModificada} />
        </div>
    )
}

export default Field