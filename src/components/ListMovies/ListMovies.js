import React from 'react'
import { List, Avatar, Button } from 'antd';
import { Loading } from '../Loading/Loading';
import { Link } from'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import './ListMovies.scss';



export const ListMovies = ({ movies, title }) => {

    if(movies.loading || !movies.result){

        return <Loading/>
    }
    return (



        <List className='movie-list'
            size='default'
            header={<h2>{title}</h2>}
            bordered
            dataSource={movies.result.results}
            renderItem={movie => <RenderMovie movie={movie} />}
        />
    )
}



function RenderMovie({ movie }) {

    const { poster_path, title, id} = movie

        const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`


    return (
        <List.Item className='movie-list__movie'>


            <List.Item.Meta
            avatar={<Avatar src={posterPath} /> }
            title={<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
            <Button type='primary' shape='square' icon={<ArrowRightOutlined/>}></Button>
            </Link>

        </List.Item>
    )
}


