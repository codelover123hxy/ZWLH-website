import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Info from './components/Info/info'
import HistoryCourse from "./components/HistoryCourse"
import MyCourse from "./components/MyCourse"
import Graph from "./components/Graph"
import Tool from "./components/Tool"
import { getSelf } from "../../services/user/user"
import './styles/personal-center.scss'

export default function PersonalCenter() {

    const [ info, setInfo ] = useState({})
    
    const list = [
        {
            text: '高等数学',
            imgUrl: '首页web3.jpg'
        },
        {
            text: '高等数学',
            imgUrl: '首页web3.jpg'
        },
        {
            text: '高等数学',
            imgUrl: '首页web3.jpg'
        }
    ]


    const teacherCourseList = [
        {
            text: '中华文化通识名师精品课程',
            teacher: '王老师',
            imgUrl: 'culture.png'
        },
    ]
    const myCourseList = [
        {
            text: '中华文化通识教程',
            teacher: '张老师',
            imgUrl: 'culture.png'
        },
        {
            text: '计算机网络',
            teacher: '吴老师',
            imgUrl: 'network.png'
        },
        // {
        //     text: '高等数学',
        //     teacher: '吴飞',
        //     imgUrl: '首页web3.jpg'
        // },
        // {
        //     text: '线性代数',
        //     teacher: '吴飞',
        //     imgUrl: '首页web3.jpg'
        // }
    ]
            // {
            //     text: '高等数学',
            //     teacher: '吴飞',
            //     imgUrl: '首页web3.jpg'
            // },
            // {
            //     text: '高等数学',
            //     teacher: '吴飞',
            //     imgUrl: '首页web3.jpg'
            // }

    async function init() {
        const res = await getSelf()
        console.log(res)
        setInfo(res.data)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            <Info info={info}></Info>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                 <div className="back"></div>
                 <div className="left-back"></div>
                <div>
                    {/* <HistoryCourse 
                    list={this.list}></HistoryCourse> */}
                    {
                        info.role === 2 &&
                        <MyCourse
                        title={'我教的课'}
                        list={myCourseList}
                        showAddBtn={info.role === 2}></MyCourse>
                    }
               
                    <MyCourse
                    title={'我学的课'}
                    list={info.role === 1? myCourseList: teacherCourseList}
                    ></MyCourse>
                </div>
                <div className="right">
                    <Graph height="450px"></Graph>
                    <Tool></Tool>
                </div>
            </div>
        </div>
    )
}