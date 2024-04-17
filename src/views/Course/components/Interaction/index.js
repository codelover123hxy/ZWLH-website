import React,  {useEffect, useState} from "react"
import ReactDOM from 'react-dom/client'
import '../../styles/course.scss'
import Label from "../../../../components/Label"
import Button from "../../../../components/Button"
import '../../../../assets/styles/common.scss'
import Dialog from "../../../../components/Dialog"
import { message } from "antd"

export function QAItem(props) {
    
    const [ role,setRole] = useState(1)

    function answerByTeacher(item) {
        props.answerByTeacher(item)
    }

    useEffect(() => {
        const role = Number(localStorage.getItem("role"))
        console.log("role", role)
        setRole(role)
    })

    return (
        <div className="qa-item">
            <div className="title" >
                {`${props.index}${props.item.question}`} {}
            </div>
            <div className="bottom">
                <div className="item"> 
                    <div className="label">
                        问题
                    </div>
                    <div className="text">
                        {props.item.question} 
                    </div>
                </div>
                <div className="item">
                    <div className="label">
                        AI回答
                    </div>
                    <div className="text">
                        {props.item.aiAnswer} 
                    </div>
                </div>

                {
                role === 1 &&
                <div className="item">
                    <div className="label">
                        教师答疑
                    </div>
                    <div className="text">
                        {props.item.teacherAnswer} 
                    </div>
                </div>
                }
                {
                    role === 2 && 
                    <div className="label">
                    <Button btnName="人工回答" 
                    size="small" colorStyle="green"
                    action={()=>answerByTeacher(props.item)}
                    ></Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default function Interaction(props) {

    const [show,setShow] = useState(false)
    const [item,setItem] = useState({})

    function answerByTeacher(item) {
        console.log(item)
        setShow(true)
        setItem(item)
    }

    const list = [
        {
            question: '被称为“亚圣“的先秦哲人是谁?',
            aiAnswer: '被称为“亚圣”的先秦哲人是孔子。',
            teacherAnswer: '此处AI的回答错误。被称为“亚圣”的应该是孟子。孟子，名轲，字子舆，是战国时期的重要思想家和教育家，是儒家学派的代表人物之一。他与孔子并称为“孔孟”，宣扬“仁政”思想，并最早提出了“民贵君轻”的观点。'
        },
        {
            question: '沈从文作品中最突出的意象是什么',
            aiAnswer: '沈从文作品中最突出的意象是“夜”和“水”',
            teacherAnswer: 'AI回答不够准确，事实上，沈从文作品中最突出的意象是水，其作品中水有清美的德行、坚韧的生命力、孕育万物的母性和生命的无常与不定等特征。'
        },
        {
            question: '道德经的中心思想是什么',
            aiAnswer: '道德经的中心思想是“道中庸”,强调在道德和行为上要遵循中庸之道，即在过与不过、白与黑、阴与阳之间保持平衡和谐。',
            teacherAnswer: 'AI回答不够准确，《道德经》的核心思想是"道"，它是宇宙中无所不在的原始力量，是一切事物的根源。道是超越言语和概念的，无法准确言说或理解，只能通过直观体验来感知。'
        }
    ]

    function onSubmit() {
        setShow(false)
        message.success("提交成功")
    }
    
    return (
        <div className="interaction common">
            <div style={{marginLeft: '40px'}} >
                <Label width="100px" text={`知识问答: ${list.length}项`}></Label>
            </div>
            {/* <div>知识问答：{}项</div> */}
            <div className="content">
            {
                list.map((item, key) => (
                    <QAItem item={item} index={key + 1} key={key}
                    answerByTeacher={answerByTeacher}
                    ></QAItem>
                ))
            }
            </div>
            {
                show && (
                    <Dialog
                    style={{padding: '40px'}}>
                        <div className="text"
                        style={{textAlign: 'left'}}
                        ><span style={{marginRight: '20px'}}>问题:</span><label>{ item.question }</label></div>
                        <div className="text"
                        style={{textAlign: 'left', marginTop: '10px'}}
                        ><span style={{marginRight: '20px'}}>回答:</span><textarea className="textarea"></textarea></div>
                        <Button size="large" 
                        btnName="提交" action={onSubmit}
                        colorStyle="green"></Button>
                    </Dialog>
                )
            }
        </div>
    )
}