import React, { Component, useEffect, useRef, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import '../../assets/styles/home.scss'
import classNames from "classnames"
import Avatar from "../Avatar"
import { Set_Token } from "../../store/actions"
import store from "../../store"
import { ReactComponent as Logo }  from '../../assets/svg/our-logo.svg'

function Menu(props) {
    function quit() {
        props.quit()
    }

    return (
        <div className="menu">
            <Link className="item" to="personalCenter">个人中心</Link>
            <Link className="item" to="settings/personalInfo">设置</Link>
            <Link className="item" onClick={quit}>退出登录</Link>
        </div>
    )
}

export default function Navbar(props) {

    const [ loginState, setLoginState ] = useState(0)
    const [ activeIndex, setActiveIndex ] = useState(0)
    const loginStateRef = useRef(0)
    const name = "智问领航"
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("token", token)
        let currentLoginState = (token === null? 0: 1)
        setLoginState(currentLoginState)
        loginStateRef.current = loginState
        console.log("loginState", loginState)
    })

    function quit() {
        localStorage.removeItem('token')
        navigate("/home")
        // localStorage.clear()
    }

    function activate(index) {
        setActiveIndex(index)
    }
    
    return ( 
        //   <div>欢迎来到我们的平台</div>
        <div className="outer">
        <div className="nav-bar">  
            <Link to="home" className="left-logo" >
             <Logo width="50px" height="50px" style={{position: 'absolute', left: '180px', top: '50%', transform: 'translateY(-50%)'}} />
              <span style={{fontFamily: '微软雅黑'}}> { name }</span> 
            </Link>
            <Link onMouseOver={()=>activate(0)}
             onClick={()=>activate(0)}  className={classNames({"active": activeIndex === 0}, "nav")} to="home">首页</Link> 
            <Link onMouseOver={()=>activate(1)}
            onClick={()=>activate(1)}  className={classNames({"active": activeIndex === 1}, "nav")} to="knowledgeGraph">知识图谱</Link> 
            <Link onMouseOver={()=>activate(2)}
            onClick={()=>activate(2)}  className={classNames({"active": activeIndex === 2}, "nav")} to="chat">问答</Link> 
            <input type="text" className="search" placeholder="搜索想要的知识"></input>
            { 
             loginState === 0?
             <Link to="login" className="to-login">登录/注册</Link>
             :
            <span className="menu-bar">
                {/* <Link onClick={()=>this.activate(3)} className={classNames({"active": activeIndex === 3}, "nav")} to="personalCenter">个人中心</Link>  */}
                {/* <div className="menu-bar"> */}
                <Avatar radius="40px"/>
                <Menu className="menu-bar-item" quit = {quit}></Menu>
                {/* </div> */}
            </span>
            }
        </div>
        </div> 
    )
}
