import { useState, useEffect, useRef } from "react"

export default function CaptchaInput(props) {

    const [ time, setTime ] = useState(props.interval)
    const [ phoneNum, setPhoneNum ] = useState("")
    const timeRef = useRef()

    function getCaptcha() {
        const regex = /^1[3456789]\d{9}$/ 
        if (!regex.test(phoneNum)) {
            alert("请输入正确的手机号")
            return
        }
        let timer = setInterval(()=>{
            if (timeRef.current > 0) {
                setTime(prevTime => prevTime - 1)
            } else {
                clearInterval(timer)
                setTime(props.interval)
            }
        }, 1000)
    }

    useEffect(() => {
        timeRef.current = time
    }, [time])

    return (
        <> 
            <div className="captcha">
                <input className="captcha-input" value={phoneNum} placeholder="手机号"
                 onChange={(e)=> setPhoneNum(e.target.value)}
                ></input>
                {
                    time === props.interval?
                    <span className="submit-btn" onClick={()=>getCaptcha()}>获取验证码</span>
                    :
                    <span className="submit-btn grey" >{ time }秒后重新发送</span>
                }   
            </div> 
            <input className="input" 
                placeholder="验证码">    
            </input>
        </>
    )
}