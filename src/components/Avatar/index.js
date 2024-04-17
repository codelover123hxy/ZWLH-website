import React, { Component, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import '../../assets/styles/avatar.scss'
import classNames from "classnames"
export default function Avatar(props) {

    const navigate = useNavigate()

    function navigateToMe() {
        navigate("/personalCenter")
    }

    const [avatar, setAvatar] = useState("新用户")
    const [nickname, setNickname] = useState("新用户")

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        setAvatar(userInfo.avatarUrl)
        setNickname(userInfo.nickname)
    },[])

    const styles = {
        left: '20%'
    }   

    return (
        <div className="avatar"
            onClick={navigateToMe}
            style={{
                position: (props.position === 'bottom'? 'absolute': 'relative'),
                bottom:   (props.position === 'bottom'? '50px': '0'),
                ...styles
            }}
        > 
            <img className="avatar-box"
                style={{ width: props.radius, height: props.radius }}
                src={ props.avatarUrl || avatar }>    
            </img>
            <span className="nickname" 
            style={{color: props.color}}
            >{ props.nickname || nickname }</span>
        </div>
    )
}