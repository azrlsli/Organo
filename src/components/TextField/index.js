import './TextField.css'

const TextField = (props) => {

    const aoDigitado = (evento) => {
        props.onChanged(evento.target.value)
    }

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default TextField