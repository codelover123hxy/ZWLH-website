import React,  { useState, useEffect } from "react"
import ReactDOM from 'react-dom/client'
import ChatCommon from "../../components/ChatCommon"
import axios from 'axios'
import request from '../../utils/request'
import SideBar from "../../components/SideBar"
import { chatSideBarList } from "../../config/config"
import { getLlmsAPI } from "../../services/chat/llm" 

export default function Chat(props) {

    var modelList;

    const init = async () => {
        // const res = await getLlmsAPI({
        //     "controller_address": "http://127.0.0.1:20001",
        //     "placeholder": "string"
        // })
        // console.log(res.data)
        // modelList = res.data
    }

    useEffect(()=> {
        init()
    },[])

    const modeList = [
        {
            color1: '#2D3748',
            color2: '#1A202C',
            fontColor: 'white'
        },
        {
            color1: '#F6FBFF',
            color2: '#F2F5F8',
            fontColor: 'black',
            questionColor: '#99D9EA'
        }
    ]

    const mode = 0

    let dialogs = [
        '请问计算机网络中传输层有哪些协议？',
        '1、传输控制协议TCP 2、用户数据报协议UDP',
        'TCP和UDP的区别是什么?',            
        'TCP和UDP是两种不同的传输协议，适用于不同的应用场景。TCP提供可靠性和顺序性，适合数据完整性要求高、顺序处理的应用；而UDP提供快速传输和较低的开销，适用于实时性要求高、对数据可靠性要求较低的应用。',
        '',
        '推荐知识点： 传输层的主要协议、TCP协议的概念、UDP协议的概念、可靠传输的实现原理'
    ]

    return (
        <div>
            <SideBar
                list = {chatSideBarList}
                barHeight="800px"
                barWidth="300px"
                avatar={true}
                arrow={true}
                title="Lele"
            >
            </SideBar>
            <ChatCommon 
                modelList={modelList}
                option={1}
                dialogs={dialogs}
                static={false}
                questionColor={modeList[mode].questionColor}
                backgroundColor={modeList[mode].color2}
                color={modeList[mode].fontColor}
                avatarUrl="https://image.familystudy.cn/image/jxfruit/%E7%99%BD%E7%93%9C.webp"
            ></ChatCommon>
        </div>
    )
}