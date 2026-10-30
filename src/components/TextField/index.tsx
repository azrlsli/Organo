import './TextField.css'

interface TextFieldProps {
    onChanged: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

const TextField = ({ onChanged, label, obrigatorio, placeholder, valor } : TextFieldProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        onChanged(evento.target.value)
    }

    const placeholderModificada = `${placeholder}...`

    return (
        <div className="text-field">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada} 
            />
        </div>
    )
}

export default TextField