import React, { useState, useEffect, useRef, useLayoutEffect } from "react"

import '../styles/graph.scss'
import MyGraph from "../../../../components/MyGraph";
import classNames from "classnames"


function Label(props) {
    return <div className="label-content" style={{ backgroundColor: props.backgroundColor,
        height: `${props.height}px`, lineHeight: `${props.height}px`,
        borderRadius: `${props.height}px` }}>
        { props.label }
    </div>
}

function ScaleBtn(props) {
    return <div className="scale-btn"
    style={{...props.style}}>
        <div className="add">+</div>
        <div className="sub">-</div>
    </div>
}

export default function Graph(props) {
    const colorList = ['#B5E61D', '#F09B59', '#FFFD55', '#75FA8D']
    const initialList = [[
            {
                label: '中华传统文化'
            },
            {
                label: '美食'
            },
            {
                label: '音乐'
            },
            {
                label: '建筑'
            },
            {
                label: '节日'
            }
    ],
    [
        {
            label: '课程名'
        },
        {
            label: '层'
        },
        {
            label: '协议'
        },

        {
            label: '服务'
        }
    ]
]

    const labelList =  [
        {
            imgUrl: '知识图谱1.png',
            name: 'Graph'
        },
        {
            imgUrl: '知识图谱2.png',
            name: 'Table'
        },
        {
            imgUrl: '知识图谱3.png',
            name: 'Text'
        },
        {
            imgUrl: '知识图谱4.png',     
            name: 'Code'  
        }
    ]

    const [ activeItem, setActiveItem ] = useState({})
    const [ inited, setInited ] = useState(false)
    const [list, setList] = useState(initialList[0])
    const listRef = useRef()

    useEffect(() => {
        let list = initialList[props.index]
        list.forEach((item, Item) => item.color = colorList[Item % colorList.length])
        setList(list)
        setInited(true)
    }, [props.index])

    return (
        <div className="graph">
            <div className="left">
                <div className="switch">
                    {
                        labelList.map((item, key) => (
                            <span key={key}
                                className={`item ${item === activeItem? "active-item": ""}`}
                                onMouseOver={()=>setActiveItem(item)}        
                                onClick={()=>setActiveItem(item)}              
                            >
                                <img className="img" src={require(`../../../../assets/image/${item.imgUrl}`)}></img>
                                <div>{item.name}</div>
                            </span>
                        ))
                    }
                </div>
                <div className="overview">
                    <div className="label">overview <span className="right-arrow">></span></div>
                    <div className="label">Node labels</div>
                    <div className="labels">
                    { 
                        list.map((item, key) => {
                            return  <Label key={key}
                                className="label-item" 
                                height='12' label={item.label}
                                backgroundColor={item.color} >
                            </Label>
                            }
                        ) 
                    }
                    </div>
                    <div className="label">Relationship types</div>
                    <Label 
                        className="label-item" 
                        height='12' label='Directed'
                        backgroundColor='#E3E3E3' >
                    </Label>
                </div>
            </div>
            <ScaleBtn style={{position: 'absolute', right: '30px', bottom: '100px',
                backgroundColor: 'E8F7FD'}}></ScaleBtn>
            <MyGraph 
            // showImage={true} 
            graphData={props.graphData} 
            height='800px' 
            width='800px' ></MyGraph>
        </div>
    )
}
