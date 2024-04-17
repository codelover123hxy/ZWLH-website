import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import classNames from "classnames"
import '../../styles/info.scss'

export default function Info(props) {
    
    return ( 
        <div className="info">
            <div className="left">
                <img className="avatar-url" src={props.info.avatarUrl}></img>
                <div className="basic">
                    <div className="nickname">{ props.info.nickname }</div>
                    <div>ID: { props.info.id }</div>
                    <div>{ props.info.role === 1? '学生': '教师' }</div>
                </div>
            </div>
            <div className="self-data">
                <div>
                    <div className="title">积分</div>
                    <div className="value">{ props.info.credit }</div>
                </div>
                <div>
                    <div className="title">学习时长</div>
                    <div className="value">{ props.info.learningHour }</div>
                </div>
            </div>
        </div>
    )
}