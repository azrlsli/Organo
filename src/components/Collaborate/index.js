import './Collaborate.css';
import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Collaborate = ({id, nome, cargo, imagem, corDeFundo, aoDeletar, favorite, toFavorite}) => {
    
   function handleFavorite() {
        toFavorite(id)
    }

    const propsFavorite = {
        size: 25,
        onClick: handleFavorite
    }

    return (
        <div className='collaborator'>
            <IoIosCloseCircle size={25} className='delete' onClick={() => aoDeletar({ id: id })} />
            <div className='header' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='base-card'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favorite'>
                    {favorite 
                    ? <IoIosHeart {...propsFavorite} color='#ff0000'/> 
                    : <IoIosHeartEmpty {...propsFavorite}/>}
                </div>
            </div>
        </div>
    )
}

export default Collaborate;