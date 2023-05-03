import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { SliderMovies } from '../components/SliderMovies/SliderMovies'
import { URL_API } from '../utils/constants'
import { API_KEY } from '../utils/constants'
import { ListMovies } from '../components/ListMovies/ListMovies'
import { Row, Col } from 'antd';
import { Footer } from '../components/Footer/Footer'


export const Home = () => {

  const newNmovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
  const popular = useFetch(`${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  const topRate = useFetch(`${URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)


  return (
    <><SliderMovies movies={newNmovies} />

      <Row>
        <Col span={12}>
          <ListMovies movies={popular} title={'Peliculas Populares'} />
        </Col>
        <Col span={12}>
          <ListMovies movies={topRate} title={'Mejores Peliculas'} />
        </Col>
      </Row>

      <Footer/>

    </>

  )
}
