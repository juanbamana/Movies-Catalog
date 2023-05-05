import React from 'react'
import { Row, Col } from 'antd'
import { useState, useEffect } from 'react'
import { URL_API } from '../utils/constants'
import { API_KEY } from '../utils/constants'
import { Footer } from '../components/Footer/Footer'
import { Loading } from '../components/Loading/Loading'
import { CatalogMovie } from '../components/CatalogMovie/CatalogMovie'
import { PaginationMovies } from '../components/PaginationMovies/PaginationMovies'









export const NewMovies = () => {

  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    (async () => {

      const response = await fetch(`${URL_API}/movie/now_playing?api_key=${API_KEY}&page=${page}`)

      const movies = await response.json()

      setMovieList(movies)
    })()


  }, [page])



  const onChangePage = (page) => {



    setPage(page)
  }




  return (


    <Row>
      <Col span={24} style={{ textAlign: 'center', marginTop: 25 }}>

        <h1 style={{ fontSize: 35, fontWeight: 'bold' }}> Ultimas Peliculas</h1>

      </Col>
      {movieList.results ? (
     
      <Row>
          <CatalogMovie movies={movieList}/>

          <Col span={24}>
          <PaginationMovies currentPage={movieList.page} totalItems={movieList.total_results} onChangePage={onChangePage}/>
          </Col>

          </Row>


        ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}

      <Col span={24}>
        <Footer />
      </Col>


    </Row>
  )
}
