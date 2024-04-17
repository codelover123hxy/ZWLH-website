import { useEffect, useState, useRef } from "react";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import './styles/settings.scss'

export default function Settings() {

    const list = [
        {
            name: '设置',
            data:
            [
                {
                    text: '个人资料',
                    link: '/settings/personalInfo'
                },
                {
                    text: '修改密码',
                    link: '/settings/changePwd'
                },
                {
                    text: '账号绑定',
                    link: '/settings/account'
                }
            ],
        }
    ]
    
    return (
        <div>
            <SideBar backgroundColor="#FCFCFC"
            color="black"
            lineHeight="40px"
            list={list}
            activeColor="#F0F0F0"
            marginTop="30px"
            affix="left"
            borderRadius="0"
            ></SideBar>
            <Outlet></Outlet>
        </div>
    )
}