import Button from "../../components/Button"
import CaptchaInput from "../../components/CaptchaInput"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [ registerForm, setRegisterForm ] = useState({})
    const navigate = useNavigate()

    return (
        <div className="login">
            <div className="login-box register">
                <h2>用户注册</h2>
                <input className="input" type="text" value={registerForm.username} 
                    placeholder="请输入用户名" 
                    onChange={(e) => setRegisterForm(prev => ({...prev, username: e.target.value}))}>    
                </input>
                <CaptchaInput interval={10}></CaptchaInput>
                <input className="input" value = {registerForm.password} 
                    placeholder="请输入密码" type="password" 
                    onChange={(e) => setRegisterForm(prev => ({...prev, password: e.target.value}))}>
                </input>
                <input className="input" value = {registerForm.password} 
                    placeholder="请输入确认密码" type="password" 
                    onChange={(e) => setRegisterForm(prev => ({...prev, rePassword: e.target.value}))}>
                </input>
                <Button btnName="注册"></Button>
                <div className="tip" onClick={()=>navigate("/login")}>有账号，去登录</div>
            </div>
        </div>
    )
}