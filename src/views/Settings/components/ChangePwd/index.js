import { useEffect, useState } from "react";
import Button from "../../../../components/Button";

export default function ChangePwd() {
    
    function modify() {

    }

    const [ pwdForm, setPwdForm ] = useState({})
 
    return (
        <div className="change-pwd">
            <div className="change-pwd-box">
                <h2>修改密码</h2>
                <input className="input" type="text" value={pwdForm.oldPwd} 
                    placeholder="请输入旧密码" 
                    onChange={(e) => setPwdForm(prev => ({...prev, oldPwd: e.target.value}))}>    
                </input>
                <input className="input" value = {pwdForm.newPwd} 
                    placeholder="请输入新密码" type="password" 
                    onChange={(e) => setPwdForm(prev => ({...prev, newPwd: e.target.value}))}>
                </input>
                <input className="input" value = {pwdForm.rePwd} 
                    placeholder="请输入重复密码" type="password" 
                    onChange={(e) => setPwdForm(prev => ({...prev, rePwd: e.target.value}))}>
                </input>
                <Button btnName="确定修改" action={modify}></Button>
            </div>
        </div>
    )
}