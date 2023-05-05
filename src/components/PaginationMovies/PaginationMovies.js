import React from 'react'
import Pagination from 'rc-pagination'
import './PaginationMovies.scss'
export const PaginationMovies = ({ currentPage, totalItems, onChangePage }) => {





  return (


    <Pagination
      className='pagination'
      pageSize={20}
      current={currentPage}
      total={totalItems}
      onChange={onChangePage}
    />

  )
}
