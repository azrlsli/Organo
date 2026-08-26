import "./Form.css";
import Field from "../Field";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

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
        <Field 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          valor={nome} 
          onChanged={valor => setNome(valor)} 
        />
        <Field 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          valor={cargo} 
          onChanged={valor => setCargo(valor)}
        />
        <Field 
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

      <form onSubmit={(event) => {
        event.preventDefault()
        props.registerTeam({nome: nomeTime, cor: corTime})
      }}>
        <h2>Preencha os dados para criar um novo time:</h2>
        <Field 
          obrigatorio
          label="Nome" 
          placeholder="Digite o nome do time" 
          valor={nomeTime} 
          onChanged={valor => setNomeTime(valor)} 
        />
        <Field 
          obrigatorio
          type="color" 
          label="Cor" 
          placeholder="Digite a cor do time" 
          valor={corTime} 
          onChanged={valor => setCorTime(valor)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
