import React, { Component } from "react";
import ChatCommon from "../../../../components/ChatCommon";
import SideBar from "../../../../components/SideBar";
import { courseChatSideBarList } from '../../../../config/config'

export default function CourseChat() {

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
        '请分析这张图中描绘了什么，是哪一首诗词中的场景？',
        '这张图中描绘了在一个寒冷的冬天，一个老人乘舟在江中孤独地钓鱼，和《江雪》中描绘的场景一致'
    ]

    return (
        <div style={{display: 'flex'}}>
            <SideBar
                className="side-bar"
                list = {courseChatSideBarList}
                color = {modeList[mode].fontColor}
                backgroundColor = {modeList[mode].color1}
                chat = {true}
                titleStyle = {{
                    margin: '0 8px', fontWeight: 'bold'
                }}
                arrow = {true}
                barWidth="200px"
                avatar = {false}
            >
            </SideBar>
            <ChatCommon
                width="1100px"
                option={2}
                questionColor={modeList[mode].questionColor}
                avatarUrl="https://image.familystudy.cn/image/kgqa/logo.png"
                backgroundColor = {modeList[mode].color2}
                color={modeList[mode].fontColor}
                dialogs={dialogs}
                static={true}
            >
            </ChatCommon>
        </div>
    )
}