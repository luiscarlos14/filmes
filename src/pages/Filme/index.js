import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';

function Filme (){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"7b9c0f3b5cf82b98453dd8360b90eebc",
                    language: "pt-BR"
                }
            }).then((response)=>{
                setFilme(response.data);
                setLoading(false);
            }).catch(()=>{
                console.log('Filme não encontrado')
            })
        }


        loadFilmes();

        return () =>{
            console.log("Componente foi desmontado!")
        }
    }, [])

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>


        <div className='area-buttons'>
            <button>Salvar</button>
            <button>
                <a href='#'>Trailer</a>
            </button>

        </div>

        </div>
    )
}

export default Filme;