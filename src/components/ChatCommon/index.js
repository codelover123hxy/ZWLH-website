import React,  { useState, useEffect, useRef } from "react"
import ReactDOM from 'react-dom/client'
import Sidebar from "../SideBar"
import Avatar from "../Avatar"
import '../../assets/styles/chat.scss'
import axios from 'axios'
import request from '../../utils/request'
import MyButton from "../Button"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactComponent as CopySvg } from '../../assets/svg/copy.svg';
import { ReactComponent as CopySvgWhite } from '../../assets/svg/copy-white.svg';
import { Upload, Button, message as messageAnt } from 'antd';
import { ReactComponent as Microphone } from '../../assets/svg/microphone.svg';
import { ReactComponent as FileUploader } from '../../assets/svg/uploader.svg';
import { ReactComponent as MicrophoneWhite } from '../../assets/svg/microphone-white.svg';
import { ReactComponent as FileUploaderWhite } from '../../assets/svg/uploader-white.svg';
import { PlusOutlined } from '@ant-design/icons';

function ModelSelect(props) {

    const [ selectedModel, setSelectedModel ] = useState({})
    const [ show, setShow] = useState(false)

    const modelList = [
        {
            name: '自动(推荐)',
            imgUrl: ''
        },
        {
            name: 'Chatgpt4',
            imgUrl: ''
        },
        {
            name: 'ChatGLM4',
            imgUrl: ''
        },
        {
            name: 'ChatGLM3',
            imgUrl: ''
        },
        {
            name: '星火',
            imgUrl: ''
        },
        {
            name: '文心一言',
            imgUrl: ''
        },
    ]

    function showMenu() {
        setShow(true)
    }

    const ref = useRef(null);

    function select(item) {
        setSelectedModel(item)
        messageAnt.success(`你已选择模型:${item.name}`);
        setTimeout(()=>{
            setShow(false)
        }, 200)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    function handleOutsideClick(event) {
        console.log("e", event.target)
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
    };

    return (
        <div className="model-select"
        ref={ref}>
            <div className="selected-model" onClick={showMenu}
             style={{ backgroundColor: "#2D3748", color: 'white' }}
            >
                {selectedModel.name || modelList[0].name}
            </div>
            {  show && <div className="models"
             style={{ backgroundColor: props.backgroundColor, border: "1px solid white"}}>
                {
                    (props.modelList || modelList).map((item, key) => (
                        <div className="model-item" key={key}
                        style={{backgroundColor: "#2D3748", color: 'white'}}
                        onClick={() => select(item)}
                        >{item.name}</div>
                    ))
                }
            </div>}
        </div>
    )
}

function ChatBox(props) {

    const [copied, setCopied] = useState(false);

    const codeRegex = /```/;

    const [parts, setParts] = useState(null)
    useEffect(()=> {
        const parts = props.text.split("```");
        console.log(parts)
        setParts(parts)
    },[props.text])

    function copy() {
        messageAnt.success('复制成功');
        setCopied(true)
    }

    const logoUrl = "https://image.familystudy.cn/image/kgqa/our-logo.svg"

    return (
        <div style={{display: 'flex', alignItems: 'self-start', marginLeft: '40px'}}>
            {
                props.text !== '' &&   
            <>   
            <div style={{ marginTop: '12px', fontWeight: 'bold' }}>
            {
                props.index % 2 === 1 && <>
                <Avatar 
                    color={ props.color }
                    nickname="ZWLH"
                    avatarUrl={ logoUrl } absolute={false}
                    radius="40px" />
                </>
            }
            </div>
            <div className={ props.index % 2 === 1? 'chat-box-item': 'chat-box-item right-green' }>
                {parts != null && parts.map((part, index) => {
                    if (index % 2 === 0) {
                    // 渲染文字部分
                        return <p key={index} style={{color: 'black'}}>{part}</p>;
                    } else {
                    // 渲染代码部分
                        // 检查是否处于代码块中
                        return (
                        <div key={index} style={{ backgroundColor: 'black', padding: '10px' }}>                              
                                <CopyToClipboard text={part} onCopy={copy}>
                                    <div style={{cursor: 'pointer'}}>
                                        <CopySvgWhite height='15px' width='15px'></CopySvgWhite>  复制代码
                                    </div>
                                </CopyToClipboard> 
                            <SyntaxHighlighter language="javascript" style={materialDark}>
                                {part}
                            </SyntaxHighlighter>
                        </div>
                        );
                }})}
            </div>
            <CopyToClipboard text={props.text} onCopy={copy}>
                <CopySvg  height='15px' width='15px'/>
            </CopyToClipboard>
            <div style={{ marginTop: '12px', marginRight: '100px', fontWeight: 'bold' }}>
            {
                props.index % 2 === 0 && <><Avatar 
                color={ props.color }
                avatarUrl={ props.avatarUrl } absolute={false}
                radius="40px" />
                <div style={{ borderRadius: '10px', marginTop: '10px',
                 padding: '1px 0'}}
                 onClick={()=>messageAnt.success("已提交教师")}
                 >
                <p style={{color: 'white', marginRight: '5px',fontSize: '10px', display: 'inline'}}>问老师</p>
                <img style={{verticalAlign: 'middle',}}
                width='20px'
                src="https://image.familystudy.cn/image/kgqa/icon-training.png"></img>
             </div></>
            }
            </div>
            </>  
            }
        </div>
    )
}

export default function ChatCommon(props) { 
    const messagesEndRef = React.createRef(); // 创建一个ref以便能够滚动到消息的末尾

    function scrollToBottom() {
        // 使用current来访问DOM节点，并执行滚动操作
        messagesEndRef.current.scrollIntoView({ });
    }
    
    useEffect(() => {
        scrollToBottom()
    })

    function initMessage() {
        setText("")
        setMessage("")
    }

    const [ count, setCount ] = useState(0)
    const [ dialogs, setDialogs ] = useState([])
    const [ message, setMessage ] = useState("")
    const [ text, setText ] = useState("")
    const [ docs, setDocs ] = useState("")
    const dialogsRef = useRef()
    const messageRef = useRef()
    const countRef = useRef()
    const docsRef = useRef()

    useEffect(() => {
        if (props.static) {
            // let dialogs = props.dialogs 
            let dialogs = [
                // '请分析这张图中描绘了什么，是哪一首诗词中的场景？',
                // '这张图中描绘了在一个寒冷的冬天，一个老人乘舟在江中孤独地钓鱼，和《江雪》中描绘的场景一致',
                // '',
                // '推荐题目1: 补全《江雪》中的诗句 “千山鸟飞绝， _____________。\n 答案： 万径人踪灭',
                // '',
                // '推荐题目2: 请说出其他描写雪的诗句。\n 答案： （示例）昔去雪如花，今来花似雪（《别诗二首》 范云）'
                '中华传统诗词的风格有哪些',
                '中华传统诗词的风格主要有现实主义和浪漫主义两种，现实主义诗词注重表现社会生活和自然风光。描绘人物形象，反映社会现实。浪漫主义诗词则强调个人情感的表达，追求个性和主观性，常常包含想象和夸张元素。除了这两类主要的风格，中华传统诗词还包括许多其他风格和流派，如婉约派，豪放派，山水诗，田园诗、词等。',
                '阐述豪放派和婉约派的区别','豪放派和婉约派是唐代诗歌创作中两种主要的风格。它们的区别主要体现在创作手法、艺术特征和表达情感的方式上。首先，在创作手法上，豪放派注重个性的表现，勇于创新，用词豪放，表达方式直接，他们倾向于 在诗中展现自己的豪情壮志，以及对于人生的热爱和追求。而婉约派则更加注重诗歌。',
                '',
                `推荐题目:以下词人中属于豪放派的有()。
                A.  
                苏轼
                B.  
                柳永
                C.  
                辛弃疾
                D.  
                张孝祥
                E.  
                李清照`,
                '',
                '答案: ACD。解析:苏轼、辛弃疾和张孝祥属于豪放派词人。柳永、李清照是婉约派代表词人。'
            ]
            dialogsRef.current = dialogs
            messageRef.current = message
            countRef.current = count
            docsRef.current = docs
        } else {
            dialogsRef.current = dialogs
            messageRef.current = message
            countRef.current = count
            docsRef.current = docs
        }
    }, [dialogs, message, count, docs])

    async function submitChat() {
        // if (props.static) return
        const query = text
        const option = props.option
        var requestBody = {}
        if (option == 1) {
            requestBody =
            {
                "query": query,
                "conversation_id": "",
                "history_len": -1,
                "history": [
                ],
                "stream": true,
                "model_name": "chatglm3-6b",
                "temperature": 0.7,
                "max_tokens": 0,
                "prompt_name": "default"
            }
        } else if (option == 2) {
            requestBody = {
                "query": query,
                "knowledge_base_name": "传统文化",
                "top_k": 3,
                "score_threshold": 0.6,
                "history": [
                ],
                "stream": true,
                "model_name": "chatglm3-6b",
                "temperature": 0.7,
                "max_tokens": 0,
                "prompt_name": "default"
            }
        }

        setCount(prev => prev + 1)
        initMessage()
        dialogs[countRef.current] = query
        setDialogs(dialogs)
        setCount(prev => prev + 1)
        const baseUrl = "http://api.familystudy.cn:85"
        var url =  `${baseUrl}${option === 1? '/chat/chat': '/chat/knowledge_base_chat'}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const reader = response.body.getReader();
        let responseData = '';
        var lastValue= ""
        var docs = []
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                let resData = new TextDecoder().decode(lastValue);
                const jsonString = resData.substring(resData.indexOf('{'));
                const jsonObj = JSON.parse(jsonString)
                docs = jsonObj.docs
                console.log(docs)
                // dialogs[countRef.current] = docs
                // setDialogs(dialogs)
                // setCount(prev => prev + 1)
                break; // 流结束
            } else {
                lastValue = value
            }
            responseData += new TextDecoder().decode(value); // 累积数据
            // 处理累积的数据，尝试解析JSON
            try {
                const jsonString = responseData.substring(responseData.indexOf('{'));
                const jsonObj = JSON.parse(jsonString)
                if (jsonString) {
                    const textValue = (option === 1? jsonObj.text: jsonObj.answer);
                    setMessage(prev => prev + textValue)
                    dialogs[countRef.current - 1] = messageRef.current
                    setDialogs(dialogs)
                }               
                responseData = ''; // 清空累积的数据以准备下一个JSON对象
            } catch (error) {
                // JSON未完成，继续累积数据
            }
        }         
    }
       
    function handleChange(event) {
        setText(event.target.value)
    }

      // 处理回车键的按下事件
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            submitChat(); // 如果按下的是回车键，则调用点击事件处理函数
        }
    }
    
    const recommendList = [
        {
            keywords: '沈从文的生平 沈从文的散文特点',
            question: '沈从文的散文有哪些特点？'
        },
        {
            keywords: '沈从文的生平 沈从文的散文特点',
            question: '沈从文的散文有哪些特点？'
        },
    ]

    function handleFileChange() {
        // setText("计算机网络中数据链路层有哪些协议，各自有哪些作用")
        messageAnt.success("上传成功")
        // console.log("123123123123")
    }

    const logoUrl = "https://image.familystudy.cn/image/kgqa/our-logo.svg"

    return ( 
        <div className="chat" style={{ width: props.width, backgroundColor: props.backgroundColor }}>
            <ModelSelect modelList={props.modelList}
                backgroundColor={props.backgroundColor}
            ></ModelSelect>       
        <div className="chat-right" style={{ backgroundColor: 
            props.backgroundColor }}>
            <div className="chat-box">
            {
                Array.from({ length: countRef.current }, ( _, index ) => 
                    <ChatBox 
                    avatarUrl={props.avatarUrl}
                    color={props.color}
                    key={index}  
                    index={index} 
                    text={dialogsRef.current[index]} 
                    />,
                )   
            }

            <div ref={ messagesEndRef }></div>
            </div>
            <div className="question-div">
                <div className="question"
            style={{backgroundColor: props.questionColor, height: '70px'}}
                >
                {
                    <div style={{display: 'flex',
                        position: 'relative',alignItems: 'center',
                        color: 'white', fontSize: '5px'}}>
                        <div style={{width: '55px'}}>
                            <MicrophoneWhite style={{width: '20px', height: '30px'}}/>
                            <div>语音输入</div>
                        </div>
                        <div style={{width: '55px'}}>
                            <FileUploaderWhite style={{width: '20px', height: '30px'}}/>
                            <div>文件输入</div>
                        </div>
                        <input type="file" style={{
                            zIndex: 3,
                            width: '1px',  position: 'absolute', left: '70px'}} onChange={handleFileChange} 
                        />
                    </div>
                }
                <input placeholder="提问" 
                    onKeyDown={ handleKeyDown }
                    onChange={ handleChange } value={ text }></input>
                <MyButton action={submitChat}
                    btnName="发送"
                    width="80px" height="30px"
                >
                </MyButton>
                </div>               
            </div>            
        </div>           
    </div>
    )
}