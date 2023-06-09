import React from 'react'
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    return (
        <RootBox>
            <img src={require('../images/logo.png')} alt="logo"/>
            <NavLink className="item" to="/guide">使用說明</NavLink>
            <NavLink className="item" to="/pricing">收費方式</NavLink>
            <NavLink className="item" to="/stationinfo">站點資訊</NavLink>
            <NavLink className="item" to="/news">最新消息</NavLink>
            <NavLink className="item" to="/event">活動專區</NavLink>
            <div className="login">登入</div>
        </RootBox>
    )
}

const RootBox = styled('div')(() => `
    width: 100vw;
    height: 80px;
    padding: 20px 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(240, 240, 240) ;
        .item {
            margin: 20px;
            color: rgb(108, 129, 0);
            text-decoration: none;
            font-weight: 500;
        }
        .active {
            color: rgb(182, 218, 0);
        }
        .login {
            width: 80px;
            height: 40px;
            border-radius: 20px;
            margin-left: auto;
            background: rgba(172, 211, 0);
            text-align: center;
            line-height: 40px;
            color: white;
        }
        img {
            width: 10%;
            margin-right: 60px; 
        }
`)

export default Navbar