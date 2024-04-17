import React,{ useEffect, useState }  from "react"
import { useHistory, useNavigate } from 'react-router-dom'
import '../../styles/recommend.scss'

export default function Recommend() {
    const navigate = useNavigate()
    const navigateToCourse = () => {
        navigate("/course/intro")
    }

    const recommendList = [
        {
            imgUrl: '首页web3.jpg',
            title: '个人知识管理',
            college: '同济大学',
            teacher: 'xxx'
        },
        {
            imgUrl: '首页web4.jpg',
            title: '科举与中国文化',
            college: '同济大学',
            teacher: 'xxx'
        },
        {
            imgUrl: '首页web5.jpg',
            title: '新闻传播技能',
            college: '同济大学',
            teacher: 'xxx'
        },
        {
            imgUrl: '首页web6.jpg',
            title: 'python数据分析',
            college: '同济大学',
            teacher: 'xxx'
        }
    ]
      
    return (
        <div className="recommend">
            <h2 style={{textAlign: 'left'}}>课程推荐</h2>
            <div className="recommend-list">
                {
                    recommendList.map((item, key) => 
                        <div className="item" key={key}
                        onClick={navigateToCourse}>
                            <img className="thumb-nail" src={require(`../../../../assets/image/${item.imgUrl}`)}/>
                            <div className="item-right">
                                <div className="title">{item.title}</div>
                                <div>{item.college} {item.teacher}</div>
                                <div>xxxx人参加</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
