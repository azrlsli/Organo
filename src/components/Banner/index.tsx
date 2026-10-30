import './Banner.css'

import React from 'react';

export interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    return (
            <header className='banner'>
                {/* <img src="/images/banner.png" alt="O banner principal da pagina do Organo"/> */}
                <img src={enderecoImagem} alt={textoAlternativo}/>
            </header>
        )
}

export default Banner;