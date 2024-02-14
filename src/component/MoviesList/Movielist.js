
import React, { useEffect, useState } from 'react'
import "./movieslist.css"
import Card from '../cards/card'
import { useParams } from 'react-router-dom'


function Movielist() {
    const [movielist, setmovielist] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => res.json())
            .then((data) => { setmovielist(data.results) })
            .catch((err) => console.log(err))
    }

    return (
        <div className='movie__list'>
            <h2 className='list__title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className='list__cards'>
                {
                    movielist.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))


                }
            </div>
        </div>
    )
}

export default Movielist
