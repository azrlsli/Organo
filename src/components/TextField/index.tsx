import './TextField.css'

interface TextFieldProps {
    onChanged: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'number' | 'email'
}

const TextField = ({ onChanged, label, obrigatorio = false, placeholder, valor, tipo = 'text' } : TextFieldProps) => {

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
                type={tipo}
            />
        </div>
    )
}

export default TextField