import './Collaborate.css';

const Collaborate = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='base-card'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Collaborate;