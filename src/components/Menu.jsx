import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homeStyles.css'

function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link to="/home">Home</Link></li>
                <li> <Link to="/search">Pesquisar</Link></li>
            </ul>
        </nav>
    )
}

export default Menu