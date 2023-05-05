import React from 'react'
import { memo } from 'react';
import { Link } from 'react-router-dom'
import { Col, Card } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import './CatalogMovie.scss'

import { PropTypes } from 'prop-types';
export const CatalogMovie = (({ movies: { results } }) => {



    return results.map(movie => (
        <Col key={movie.id} xs={4} className="movie-catalog">
            <MovieCard key={movie.id} movie={movie} />
        </Col>
    ));
})


const MovieCard = memo(({ movie: { id, title, poster_path } }) => {

    const { Meta } = Card;
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`

    return (


        <Link to={`/movie/${id}`}>


            <Card hoverable
                style={{ width: 240 }}
                cover={<img alt={title} src={posterPath}></img>}
                actions={[<EyeOutlined />]}>
                <Meta title={title} />
            </Card>
        </Link>
    )



}
)

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }).isRequired
};

CatalogMovie.propTypes = {
    movies: PropTypes.shape({
        results: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                poster_path: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
};