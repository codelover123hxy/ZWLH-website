import React, { useState, useRef } from "react"
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../services/user/user'
import Button from "../../components/Button";
import CaptchaInput from "../../components/CaptchaInput";
import '../../assets/styles/login.scss'
import { Set_Token } from "../../store/actions";
import store from "../../store";
import { message } from "antd"

export default function Login(props) {    

    const navigate = useNavigate()
    const [ loginMethod, setLoginMethod ] = useState(0)
    const [ loginForm, setLoginForm ] = useState({})
    const loginFormRef = useRef()

    useState(() => {
        loginFormRef.current = loginForm
    }, [loginForm])

    function onKeyDownchange(e){
        if (e.keyCode === 13) {
            handleLogin()
        }
    }

    async function handleLogin() {
        const res = await loginAPI(loginForm)
        if (res.code === 200) {
            console.log(res)
            console.log(res.data)
            const token = res.data.token
            localStorage.setItem("token", token)
            localStorage.setItem("role", res.data.role)
            localStorage.setItem("userInfo", JSON.stringify(res.data))
            console.log("token", token)
            message.success("登录成功")
            navigate("/personalCenter")
        }
    }
   
    return (
        <div className="login">
            <div className="login-box">
                <h2>用户登录</h2>
                {
                    loginMethod === 0 ?
                    <>
                        <input className="input" type="text" value={loginFormRef.current.username} 
                            placeholder="请输入用户名" 
                            onChange={(e) => setLoginForm(prev => ({...prev, username: e.target.value}))}>
                        </input>
                        <input className="input" value = {loginFormRef.current.password} 
                            placeholder="请输入密码" type="password" 
                            onKeyDown={e=> onKeyDownchange(e)}
                            onChange={(e) => setLoginForm(prev => ({...prev, password: e.target.value}))}>    
                        </input>
                    </>
                    :
                    <CaptchaInput interval={10}></CaptchaInput>
                }         
                <Button action={handleLogin} btnName="登录"></Button>
                <div>
                    {
                        loginMethod === 0?
                        <span className="tip" onClick={()=>setLoginMethod(1)}>手机号一键登录</span>
                        :
                        <span className="tip" onClick={()=>setLoginMethod(0)}>账号密码登录</span>
                    }
                    <span className="tip" onClick={()=>navigate("/register")}>没有账号，去注册</span>
                </div>
            </div>
        </div>
    )
}