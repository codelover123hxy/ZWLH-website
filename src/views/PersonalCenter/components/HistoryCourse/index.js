import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import classNames from "classnames"
import '../../styles/history-course.scss'

export default class HistoryCourse extends React.Component {
    state = {
      list: []
    }

    componentDidMount() {
        this.setState({
            list: this.props.list
        })
    }
    
    render() {
        return (
            <div className="container">
                <h2 style={{textAlign: 'left'}}>历史课程</h2>
                <div className="course-box">
                {   
                    this.state.list.map((item, key) =>
                        <div className="right" key={key}>
                            <img 
                                className="course-image"
                                src={require(`../../../../assets/image/${item.imgUrl}`)}>
                            </img>
                            <div className="course-name">
                                { item.text }
                            </div>
                        </div> 
                    )
                }
                </div>
            </div>
        )
    }
}