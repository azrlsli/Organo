import './DropDown.css';

interface DropDownProps {
    onChanged: (valor: string) => void;
    label: string;
    obrigatorio: boolean;
    valor: string;
    itens: string[];
}

const DropDown = (props: DropDownProps) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={evento => 
                    props.onChanged(evento.target.value)} 
                    required={props.obrigatorio} 
                    value={props.valor}
                >
                    <option value=""></option>
                    {props.itens.map((item) => {
                        return <option key={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}

export default DropDown;