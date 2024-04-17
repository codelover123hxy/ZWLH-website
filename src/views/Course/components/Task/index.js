import React,  {useEffect, useState} from "react"
import ReactDOM from 'react-dom/client'
import '../../styles/course.scss'
import Label from "../../../../components/Label"
import Button from "../../../../components/Button"
import '../../../../assets/styles/common.scss'
import Dialog from "../../../../components/Dialog"
import { ReactComponent as Refresh }  from '../../../../assets/svg/refresh.svg'

import { message } from "antd"


export default function Task() {
    const list1 = [
        {
            title: '第二次课反馈问题及解决情况',
            date: '03-17 22:00'
        },
        {
            title: '第一次课反馈问题及解决情况',
            date: '03-17 22:00'
        }
    ]

    const list2 = [
        {
            title: '你觉得儒家文化对社会进步的影响是什么?',
            date: '03-27 24:00'
        },
        {
            title: '请讲一讲你对中华传统音乐的特点的理解',
            date: '03-27 24:00'
        },
        {
            title: '中华传统建筑具有哪些经典风格',
            date: '03-28 24:00'
        },
    ]

    const [ role,setRole] = useState(1) 

    useEffect(() => {
        const role = Number(localStorage.getItem("role"))
        console.log("role", role)
        setRole(role)
    })
    
    const [show,setShow] = useState(false)
    const [item,setItem] = useState({})

    function onSubmit() {
        setShow(false)
        message.success("提交成功")
    }

    function submitTalk() {
            console.log(item)
            setShow(true)
            setItem(item)
    }

    return (
        <div className="task common">
            <div className="title">中华文化通识教程</div>
            
            <div style={{display: 'flex', gap: '20px', marginLeft: '40px', alignItems: 'center'}}>
             <Label width="100px" text={`进行中: ${list1.length}个`}></Label>
            </div>
            <div className="running">
            {
                list1.map((item, key) => (
                   <div key={key} className="item"><span>{item.title}</span> <span>结束时间:{item.date}</span></div>
                ))
            }
            </div>
            <div style={{display: 'flex', gap: '20px', marginLeft: '40px', alignItems: 'center'}}>
             <Label width="100px" text={`已完成: ${list2.length}个`}></Label>
            {role === 2 && <Button
            
            action={submitTalk}
            btnName="发布讨论" colorStyle="green" size="small"></Button>}
            </div>

            <div className="complete">
            {
                list2.map((item, key) => (
                    <div key={key} className="item"><span>{item.title}</span> <span>结束时间:{item.date}</span></div>
                ))
            }
            </div>

            {
                show && (
                    <Dialog
                    style={{padding: '40px'}}>
                        <div className="text"
                        style={{textAlign: 'left'}}
                        >
                        <Label width="100px" text={`发布新讨论`}></Label>   
                            <span style={{marginRight: '20px'}}>主题:<span style={{marginLeft: '50px'}}>中华传统文化</span></span>
                     
                        <div style={{marginRight: '20px', marginTop: '20px'}}><span style={{marginRight: '20px'}}>讨论问题:</span>
                        <textarea className="textarea"
                            style={{height: '150px'}}
                            ></textarea></div>
                        </div>
                           
                        <Button size="large" 
                        btnName="提交" action={onSubmit}
                        colorStyle="green"></Button>
                    </Dialog>
                )
            }

            
        </div>
    )
}