import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Image from '../images/music.png'

function Home() {
    return (
        <>
            <Menu />

            <div>
                <h1>Bem-vindo a aplicação de pesquisa por top artistas</h1>
                <img src={Image}></img>
            </div>
        </>
    )
}

export default Home