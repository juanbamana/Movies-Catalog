import React from 'react'
import { Link } from 'react-router-dom'
import { Menu as MenuTop } from 'antd';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import './Menu.scss'

export const Menu = () => {
    return (
        <div className='menu-top'>
            <div className='menu-top__logo'>

                <Logo />

            </div>
            <MenuTop theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>

                <MenuTop.Item key="1">
                    <Link to="/">Home</Link>
                </MenuTop.Item>
                <MenuTop.Item key="2">
                    <Link to="/newMovies">Ultimos Lanzamientos</Link>
                </MenuTop.Item>

                <MenuTop.Item key="3">
                    <Link to="/popularMovies">Populares</Link>
                </MenuTop.Item>

                <MenuTop.Item key="4">
                    <Link to="/searchMovies">Buscador</Link>
                </MenuTop.Item>

            </MenuTop>


        </div>
    )
}
