import React, { Component, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import classNames from "classnames"
import '../../styles/my-course.scss'
import Label from "../../../../components/Label"
import '../../../../assets/styles/common.scss'
import Button from '../../../../components/Button/index'
import { message } from "antd"
import HistoryCourse from "../HistoryCourse"


export default function MyCourse(props) {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    function navigateToCourse() {
        navigate('/course/task')
    }

    function addCourse() {
        setShow(true)
    }

    function createCourse() {
        message.success('创建课程成功!');
        setShow(false)
    }

    function Dialog(props) {
        return (
            <div className="dialog">
                <Label text="新建课程"></Label>
                <div><label className="label">课程名称：</label><input className="input" placeholder="请输入课程名"></input></div>
                <div><label className="label">课程章节数：</label><input className="input" placeholder="请输入章节数"></input></div>
                <label className="label">请选择大语言模型：</label>
                <select className="select">
                    <option className="option">ChatGLM4</option>
                    <option className="option">ChatGLM3.5</option>
                    <option className="option">星火大语言模型</option>
                </select>
                <br></br>
                <Button action={createCourse} btnName="创建课程"></Button>
            </div>
        )
    }

    return (
        <div className="my-course">
            <div style={{textAlign: 'left'}}>
            <h2 style={{textAlign: 'left'}}>{ props.title }</h2>
            学期: <select>
                <option>2023-2024(2)</option>
                <option>2023-2024(1)</option>
                <option>2022-2023(2)</option>
                <option>2022-2023(1)</option>
                <option>2021-2022(2)</option>
                <option>2021-2022(1)</option>
            </select>
            </div>
            <div className="my-course-box">
            {   
                props.list.map((item, key) =>
                    <div key={key} className="item" onClick={navigateToCourse}>
                        <img 
                            className="course-image"
                            src={require(`../../../../assets/image/${item.imgUrl}`)}>
                        </img>
                        <div className="right">
                            <div className="course-name">
                                { item.text }
                            </div>
                            <div className="course-teacher">
                                { item.teacher }
                            </div>
                        </div>
                        <div className="right-arrow">
                            >
                        </div>
                    </div> 
                )
            }
            {
                show && <Dialog></Dialog>
            }
            {
                props.showAddBtn &&
                <div className="item add" onClick={addCourse}>
                    {/* <img 
                        className="course-image"
                        src={require(`../../../../assets/image/${item.imgUrl}`)}>
                    </img> */}
                    <div className="add-btn">
                        +
                    </div>
                </div> 
                // <div className="add-course">+</div>
            }
            </div>   
        </div>
    )
}