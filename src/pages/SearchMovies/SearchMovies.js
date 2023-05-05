import React, { useState, useEffect } from 'react'
import { Row, Col, Input } from 'antd'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CatalogMovie } from '../../components/CatalogMovie/CatalogMovie'
import queryString from 'query-string'
import { Footer } from '../../components/Footer/Footer'
import { API_KEY, URL_API } from '../../utils/constants'

import './SearchMovies.scss'

export default function SearchMovies() {

  const location = useLocation();
  const history = useNavigate();

  const [movieList, setMovieList] = useState([])
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => {

    (async () => {
      const searchValue = queryString.parseUrl(location.search)
      const { s } = searchValue.query
      const response = await fetch(`${URL_API}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${s}`)

      const movies = await response.json()
      setSearchValue(s)
      setMovieList(movies)
    })()
  }, [location.search])

 const onChangeSearch = (e) => {

  const urlParams = queryString.parse(location.search)

    urlParams.s = e.target.value
    history(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);

 }

  return (
<Row>
<Col span={12} offset={6} className='search'>

  <h1>Buscador</h1>
  <Input value={searchValue} onChange={onChangeSearch}></Input>
</Col>

{movieList.results && (


<Row>


    <CatalogMovie movies={movieList}/>

  </Row>
)}

<Col span={24}>

  <Footer/>
</Col>
</Row>

    )
}


