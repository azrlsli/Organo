import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.registeredEmployee({nome, cargo, imagem, time})

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
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
