import React from 'react'
import { Layout } from 'antd'
import './Footer.scss'




export const Footer = () => {

  const { Footer } = Layout
  const currentYear = new Date().getFullYear();

  return (
    <Footer className='footer'>


<p> @ Juan Bautista Martin Navarro {currentYear}</p>

    </Footer>
  )
}
