import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../../assets/styles/swiper.scss'
import classNames from "classnames"
export default class Swiper extends React.Component {
    
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
        return <div className="images">
            {
                this.state.imgs.map((item, key) => 
                    <img className="image" key={key} src={require(`../../assets/image/${item.imgUrl}`)}></img>
                ) 
            }
        </div>
    }
}