import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import classNames from "classnames"
import '../../styles/tool.scss'

export default function Tool() {

    const navigate = useNavigate()

    function navToSuggestion() {
        navigate('/suggestion')
    }
   
    return (
        <div className="tool">
            <div>
                <img className="icon" src={require('../../../../assets/image/个人中心（web）9.png')}></img>
                <Link className="link" to="/settings/personalInfo">信息修改</Link>
            </div>
            <div>
                <img className="icon" src={require('../../../../assets/image/个人中心（web）10.png')}></img>
                <div>讨论</div>
            </div>
            <div>
                <img className="icon" src={require('../../../../assets/image/个人中心（web）11.png')}></img>
                <div onClick={navToSuggestion}>建议箱</div>
            </div>
            <div>
                <img className="icon" src={require('../../../../assets/image/个人中心（web）12.png')}></img>
                <Link className="link" to="/course/material">我的资料</Link>
            </div>
        </div>
    )
}