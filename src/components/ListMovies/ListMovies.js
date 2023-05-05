import React from 'react'
import { List, Avatar, Button } from 'antd';
import { Loading } from '../Loading/Loading';
import { Link } from'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import './ListMovies.scss';
import {PropTypes} from 'prop-types';
import { memo } from 'react';



export const ListMovies = ({ movies: { loading, result = { results: [] } } = {}, title }) => {
    if (loading || !result.results.length) {
      return <Loading />;
    }

    if (!result.results.length) {
        return <div>No movies to display</div>;
      }
    return (



        <List className='movie-list'
            size='default'
            header={<h2>{title}</h2>}
            bordered
            dataSource={result.results}
            renderItem={movie => <RenderMovie movie={movie} />}
        />
    )
}



const RenderMovie = memo(({ movie: { poster_path, title, id } }) => {


        const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`


    return (
        <List.Item className='movie-list__movie'>


            <List.Item.Meta
            avatar={<Avatar src={posterPath} /> }
            title={<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
            <Button type='primary' shape='square' icon={<ArrowRightOutlined/>}/>
            </Link>

        </List.Item>
    )
})


ListMovies.propTypes = {
    movies: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      result: PropTypes.shape({
        results: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  };
  RenderMovie.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};
