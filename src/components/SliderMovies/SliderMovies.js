import React from 'react'
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom'

import './SliderMovies.scss'
import { Loading } from '../Loading/Loading';




export const SliderMovies = ({ movies }) => {

    if (movies.loading || !movies.result) {

        return <Loading/>
    }

    const { results } = movies.result
    return (
        <Carousel  effect="fade" autoplay className='slider-movies'>
            {

                results.map(movie => (

                    <Movie movie={movie} key={movie.id} />
                ))
            }
        </Carousel>


    )
}

const Movie = ({ movie: { id, title, overview, backdrop_path } }) => {


    const backdropPath = ` https://image.tmdb.org/t/p/w500/${backdrop_path}`
    return (

        <div className='slider-movies__movie'

            style={{ backgroundImage: `url(${backdropPath})` }}>
            <div className='slider-movies__movie-info'>
                <div>

                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type='primary'>Ver Mas</Button>
                    </Link>
                </div>
            </div>
        </div>
    )

}
