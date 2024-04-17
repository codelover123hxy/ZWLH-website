import React from "react"
import '../../styles/category.scss'

export default class Category extends React.Component {
    state = {
        category: [
            {
                name: '认证学习',
                include: '理学/工学/经济学'
            },
            {
                name: '计算机',
                include: '大数据与人工智能'
            },
            {
                name: '认证学习',
                include: '理学/工学/经济学'
            },
            {
                name: '计算机',
                include: '大数据与人工智能'
            },
            {
                name: '认证学习',
                include: '理学/工学/经济学'
            },
            {
                name: '计算机',
                include: '大数据与人工智能'
            },
            {
                name: '认证学习',
                include: '理学/工学/经济学'
            },
            {
                name: '计算机',
                include: '大数据与人工智能'
            }
        ]
    }

    render() {
        return <div className="container">
            <h2 style={{textAlign: "left"}}>课程分类</h2>
            <div className="list">
            {
                this.state.category.map((item, key) => 
                    <div className="item" key={key}>
                        <span className="name">{item.name}</span>
                        <span className="include">{item.include}</span>
                    </div>
                )
            }
            </div>
        </div>
    }
}
