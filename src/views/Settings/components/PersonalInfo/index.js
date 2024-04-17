import { useEffect, useState } from "react";
import Avatar from "../../../../components/Avatar";
import { getSelf } from "../../../../services/user/user";
import Button from "../../../../components/Button";
import '../../styles/settings.scss'
import { info } from "sass";
import { message } from "antd";

export default function PersonalInfo() {

    const avatarUrl = "https://image.familystudy.cn/image/kgqa/a51fabe4c5fc5bc6d0768a99238a349.jpg"

    const [ info, setInfo ] = useState({

    })

    async function init() {
        const res = await getSelf()
        console.log("123123123123123123123", res)
        setInfo(res.data)
    }

    useEffect(() => {
        init()
    }, [])

    function save() {
        message.success("保存成功")
    }

    function changeRadio(e) {
        setInfo(oldInfo => {
            oldInfo.role = Number(e.target.value)
            console.log(oldInfo)
            return oldInfo
        })
    }

    return (
        <div className="personal-info">
            <form className="form">
                <div className="avatar item">
                    <span className="label">头像</span>
                    <Avatar avatarUrl={info.avatarUrl || ''}
                    radius="50px">
                    </Avatar>
                </div>
                <div className="item">
                    <span className="label">昵称</span>
                    <input className="text-input" type="text" value={info.nickname}></input>
                </div>
                <div className="item">
                    <span className="label">手机号</span>{ info.phoneNum }
                </div>
                <div className="item">
                    <span className="label">姓名</span>
                    <input className="text-input" type="text" value={info.name}></input>
                </div>
                <div className="item">
                    <span className="label">身份类型</span>
                    <input 
                    onChange={changeRadio}
                    checked={info.role===1} className="radio" type="radio" name="role" value={1}/>学生
                    <input checked={info.role===2} className="radio" type="radio" name="role" value={2}/>教师
                </div>
                <Button
                btnName="保存" action={save}></Button>
            </form>            
        </div>
    )
}