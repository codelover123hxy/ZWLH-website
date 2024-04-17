import React from "react"
import router from '../../router';
import { BrowserRouter as Router, useRoutes, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import SideBar from "../../components/SideBar";
import Label from "../../components/Label";
export default function PersonalCenter() {
    const course = {
        sidebarList: [
            {
                name: '中华文化通识教程',
                data: [
                    {
                        text: '任务',
                        link: '/course/task',
                        icon: 'https://image.familystudy.cn/image/kgqa/course-intro.png'
                    },
                    {
                        text: '课程简介',
                        link: '/course/intro',
                        icon: 'https://image.familystudy.cn/image/kgqa/course-intro.png'
                    },
                    {
                        text: '智能问答',
                        link: '/course/chat',
                        icon: 'https://image.familystudy.cn/image/kgqa/qa.png'
                    },
                    {
                        text: '教师互动',
                        link: '/course/interaction',
                        icon: 'https://image.familystudy.cn/image/kgqa/interaction.png'
                    },
                    {
                        text: '资料',
                        link: '/course/material',
                        icon: 'https://image.familystudy.cn/image/kgqa/upload.png'
                    },
                    {
                        text: '知识图谱',
                        link: '/course/graph',
                        icon: 'https://image.familystudy.cn/image/kgqa/course.png'
                    },
                    {
                        text: '知识点推荐',
                        link: '/course/recommend',
                        icon: 'https://image.familystudy.cn/image/kgqa/recommend.png'
                    }
                ]
            }
        ],
        courseImgUrl: 'https://image.familystudy.cn/image/kgqa/logo.png',
        courseName: '中华文化通识教程'
    }
    
    return (
        <div style={{display: 'flex'}}>
            <SideBar
                className="side-bar"
                list = {course.sidebarList}
                backgroundColor = "black"
                barWidth = "200px" barHeight = "800px"
                lineHeight = "30px"
                fontSize = "15px"
                arrow = {true}
                imgUrl = "https://image.familystudy.cn/image/kgqa/chinese.png"
                // imgWidth = "160px" imgHeight = "100px"
                avatar = {true}
                titleStyle = {
                    {
                        color: 'white',
                        fontWeight: 'bold',
                        margin: '10px auto'
                    }
                }
            >
            </SideBar>
            <Outlet></Outlet>
        </div>
    )
}