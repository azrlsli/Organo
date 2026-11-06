import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";
import ICollaborator from "../../shared/interfaces/ICollaborator";

interface FormProps {
  registeredEmployee: (collaborator: ICollaborator) => void;
  times: string[];
}

const Form = (props: FormProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [data, setData] = useState('')

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.registeredEmployee({nome, cargo, imagem, time, data})

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setData('')
  }

  return (
    <section className="form">
      <form onSubmit={event => onSave(event)}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          valor={nome} 
          onChanged={valor => setNome(valor)} 
        />
        <TextField 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          valor={cargo} 
          onChanged={valor => setCargo(valor)}
        />
        <TextField 
          label="Image" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem} 
          onChanged={valor => setImagem(valor)}
        />
        <TextField 
          label="Data de entrada no time"
          placeholder='Selecione a data'
          valor={data} 
          onChanged={valor => setData(valor)}
          tipo="date"
        />
        <DropDown 
          obrigatorio={true} 
          label="Time" 
          itens={props.times} 
          valor={time} 
          onChanged={valor => setTime(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
