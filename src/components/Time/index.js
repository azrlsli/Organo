import Collaborate from '../Collaborate';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corPrimaria }

    return (
        (props.collaborators.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='collaborates'>
                {props.collaborators.map( collaborator => <Collaborate corDeFundo={props.corPrimaria} key={collaborator.nome} nome={collaborator.nome} cargo={collaborator.cargo} imagem={collaborator.imagem} /> )}
            </div>
        </section> : ''
    )
}

export default Time;