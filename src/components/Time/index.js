import Collaborate from '../Collaborate';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const css = { backgroundImage: 'url(images/fundo.png)', backgroundColor: hexToRgba(`${props.cor}`, 0.6) }

    return (
        (props.collaborators.length > 0) ? <section className='time' style={css}>
            <input type='color' className='input-color' value={props.cor} onChange={(event) => props.changeColor({ cor: event.target.value, id: props.id })} />
            <h3 style={{ borderBottomColor: props.cor }}>{props.nome}</h3>
            <div className='collaborates'>
                {props.collaborators.map( collaborator => {
                    return <Collaborate 
                        id={collaborator.id} 
                        corDeFundo={props.cor} 
                        key={collaborator.id} 
                        nome={collaborator.nome} 
                        cargo={collaborator.cargo} 
                        imagem={collaborator.imagem} 
                        aoDeletar={props.aoDeletar}
                        toFavorite={props.toFavorite}
                        favorite={collaborator.favorite}
                    />
                } )}
            </div>
        </section> : ''
    )
}

export default Time;