import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../../assets/styles/footer.scss'
import classNames from "classnames"
export default class Footer extends React.Component {
    
    state = {
        activeIndex: 0,
        imgs: [
            
        ]
    }

    componentDidMount() {
        this.setState({
            imgs: this.props.imgList
        })
    }

    render() {
        return <div className="footer">
            <div className="box">
                <div>友情链接:</div>
                <div className="link">
                    <a href="https://www.icourse163.org/;">中国大学mooc官网</a>
                    <br></br>
                    <a href="https://www.chaoxing.com/">超星官网</a>
                </div>
            </div>
            <div>版权所有Copyright@本团队</div>
        </div>
    }
}