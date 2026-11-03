import './Collaborate.css';

interface CollaborateProps {
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
}

const Collaborate = ({nome, cargo, imagem, corDeFundo}: CollaborateProps) => {
    return (
        <div className='collaborate'>
            <div className='header' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Collaborate;