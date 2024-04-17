import React, { Component, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../../assets/styles/side-bar.scss'
import classNames from "classnames"
import Avatar from '../Avatar'

export default function SideBar(props) {
    
    function changeActiveItem(item) {
        setActiveItem(item)
        if ('handleChange' in props) {
            props.handleChange(item.text)
        }
    }
    
    const info = {
        name: '我的知识图谱',
        nickname: 'hxy',
        avatarUrl: 'https://image.familystudy.cn/image/jxfruit/%E7%99%BD%E7%93%9C.webp',
    }
    const defaultColor = "#31E8C7"
    const [activeItem, setActiveItem] = useState({})
    
    return ( 
        <div className="side-bar" 
            style={{
                backgroundColor: props.backgroundColor,
                height: props.barHeight,
                width: props.barWidth
            }}
        >
        {
            props.title && <div className="title"
            style = {{color: props.titleColor }}
            >{props.title}</div>
        }
        {
            props.chat && <div className="new-chat"
             style={{color: props.color, borderColor: props.color}}> + New chat</div>
        }
        {
            props.list.map((item, key) => <div key={key}>
                <div className="subtitle" style = {{margin: '0 30px', ...props.titleStyle}}>
                    { item.name }
                </div >
                {
                    props.imgUrl && 
                    <div style={{height: '100px', width: '160px'}}>
                        <img src={props.imgUrl}
                        height={props.imgHeight}
                        width={props.imgWidth}
                        style={{borderRadius: '20px', height: '100%', width: '100%'}}
                        ></img>
                    </div>
                }
                <div className="box" style={{
                    height: (props.list.length > 1? '300px': '100%'),
                    marginTop: props.marginTop
                }}>
                {
                    item.data.map((item, key) => <div key={key} onClick={() => changeActiveItem(item)}
                        onMouseOver={() => changeActiveItem(item)}
                    >
                    <Link to={item.link} className={classNames({"active": item === activeItem }, "item")}
                     style =
                     {{
                         color: props.color,
                         lineHeight: props.lineHeight,
                         fontSize: props.fontSize,
                         backgroundColor: (item === activeItem? (props.activeColor): ''),
                         borderRadius: props.borderRadius,
                         borderLeft: (item === activeItem && props.affix === 'left')? `solid ${defaultColor} 2px`: '',
                         borderRight: (item === activeItem && props.affix === 'right')? `solid ${defaultColor} 2px`: ''
                     }}
                    >
                        <img src={item.icon} style={{width: '15px',marginRight: '10px'}}></img>
                        { item.text }
                        { props.arrow && <i className="right-arrow">&gt;</i>}
                    </Link>
                </div>
                )}
                </div>
            </div>)
        }
        {
            props.avatar && 
            <Avatar
            className="avatar-bottom"
            position='bottom'
            radius='40px'
            ></Avatar>
        }
        </div>
    )
}