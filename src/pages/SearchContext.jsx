import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
import '../styles/searchStyles.css'
import Menu from '../components/Menu';
function SearchContext() {
    const [termo, setTermoPesquisado] = useState('');
    const [topArtistas, setTopArtists] = useState([]);
    const [button_click, setOnClick] = useState(false);
    const [pesquisa, setPesquisa] = useState(false);
    const api_Key = 'COLOQUE SUA API KEY AQUI'

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (button_click && termo) {
                    const response = await fetch(`https://api.7digital.com/1.2/genre/topArtists?tags=${termo}&oauth_consumer_key=${api_Key}`);
                    if (response.status === 200) {
                        const data = await response.json();
                        setTopArtists(data.response.topartists.artist);
                        setPesquisa(false)
                    } else {
                        console.log('Erro ao buscar os artistas. Verifique se sua chave de API é válida e tente novamente.');
                    }
                }
            } catch (error) {
                console.log('Erro ao buscar os artistas. Contate o suporte para resolver o problema: ', error);
            }
        };

        fetchData();
    }, [termo]);

    const pesquisarTermos = () => {
        setOnClick(true);
    };

    return (
        <>
            <Menu />
            <div className='search_container'>
                <h1 className='search_titles'>Busca de Gêneros Musicais</h1>
                <input
                    type="text"
                    placeholder="Digite os gêneros separados por vírgula."
                    value={termo}
                    onChange={(e) => setTermoPesquisado(e.target.value)}
                />
                <button onClick={pesquisarTermos}>Buscar</button>
                <div>
                    <h2 className='search_titles'>Top Artistas</h2>
                    <ul>
                        {topArtistas.map((artist) => (
                            <li key={artist.id}>{artist.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchContext