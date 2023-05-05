import React from 'react'
import { Layout } from 'antd'
import './Footer.scss'




export const Footer = () => {

  const { Footer } = Layout

  return (
    <Footer className='footer'>
<p> @ Juan Bautista Martin Navarro {new Date().getFullYear()}</p>

    </Footer>
  )
}
