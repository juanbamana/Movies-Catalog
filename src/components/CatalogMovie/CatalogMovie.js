import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Icon } from 'antd'
import {EyeOutlined} from '@ant-design/icons'
import './CatalogMovie.scss'
export const CatalogMovie = ({ movies }) => {

    const { results } = movies


    return results.map(movie => (
        <Col key={movie.id} xs={4} className="movie-catalog">
          <MovieCard movie={movie} />
        </Col>
      ));
    }


function MovieCard({ movie }) {

    const {  id, title, poster_path  } = movie
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