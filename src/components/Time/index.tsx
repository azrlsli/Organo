import { ICollaborator } from '../../shared/interfaces/ICollaborator';
import Collaborate from '../Collaborate';
import './Time.css';

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    collaborators: ICollaborator[]
}

const Time = (props: TimeProps) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.collaborators.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='collaborates'>
                {props.collaborators.map( collaborator => 
                    <Collaborate 
                        corDeFundo={props.corPrimaria} 
                        key={collaborator.nome} 
                        nome={collaborator.nome} 
                        cargo={collaborator.cargo} 
                        imagem={collaborator.imagem}
                    />)}
            </div>
        </section> : <></>
    )
}

export default Time;