import React,  {useEffect, useState} from "react"
import ReactDOM from 'react-dom/client'
import '../../styles/course.scss'
import Label from "../../../../components/Label"
import Button from "../../../../components/Button"
import '../../../../assets/styles/common.scss'
import Dialog from "../../../../components/Dialog"
import { ReactComponent as Refresh }  from '../../../../assets/svg/refresh.svg'

import { message } from "antd"

export function RecommendItem(props) {
    
    const [ role, setRole ] = useState(1)

    function answerByTeacher(item) {
        props.answerByTeacher(item)
    }

    const [liked, setLiked] = useState(0)

    const [disliked, setDisLiked] = useState(0)

    useEffect(() => {
        const role = Number(localStorage.getItem("role"))
        console.log("role", role)
        setRole(role)
    })

    function like() {
        if (liked) {
            setLiked(0)
            message.success("取消点赞")
        } else {
            setLiked(1)
            setDisLiked(0)
            message.success("点赞成功")
        }
    }

    function dislike() {
        if (disliked) {
            setDisLiked(0)
            message.success("取消点踩")
        } else {
            setDisLiked(1)
            setLiked(0)
            message.success("点踩成功")
        }
    }

    return (
        <div className="qa-item">
            <div className="title">
                {`${props.index} ${props.item.title}`}
            </div>
            <div className="bottom">
                <div className="item"> 
                    <div className="label">
                        知识点阐述
                    </div>
                    <div className="text">
                        {props.item.knowledge} 
                    </div>
                </div>
                <div className="item">
                    <div className="label">
                        推荐题目
                    </div>
                    <div className="text">
                        {
                            props.item.question.map((it, key) => <div key={key}> 
                                <div>{key + 1}.{it.name}</div>
                                <div>{it.choices}</div>
                                <div>答案: {it.answer}</div>
                            </div>)
                        }
                        {props.item.aiAnswer} 
                    </div>
                </div>
                <div className="item">
                    <div className="labels">
                        { 
                            props.item.label.map((item, key) => {
                                return  <Label key={key}
                                    className="label-item" 
                                    height='12' label={item.label}
                                    // backgroundColor={item.color} 
                                    >
                                </Label>
                                }
                            ) 
                        }
                    </div>
                </div>

                <div style={{paddingLeft: '20px', display: 'flex', gap: '10px'}}>                    
                <img onClick={() => like()}
                style={{verticalAlign: 'middle', 
                backgroundColor: `${liked === 1? '#31E8C7': ''}`,
                borderRadius: '10px',
                padding: '3px'
            }} width={'30px'} height={'30px'} 
                src="https://image.familystudy.cn/image/kgqa/like.png"></img>

                <img onClick={() => dislike()}
                style={{verticalAlign: 'middle',
                backgroundColor: `${disliked === 1? 'darkgrey': ''}`,
                borderRadius: '10px',
                padding: '3px'
            }} width={'28px'} height={'28px'} 
                src="https://image.familystudy.cn/image/kgqa/dislike.png"></img>
                </div>
            </div>
        </div>
    )
}

export default function Recommend(props) {

    const [show,setShow] = useState(false)
    const [item,setItem] = useState({})

    function answerByTeacher(item) {
        console.log(item)
        setShow(true)
        setItem(item)
    }

    useEffect(()=> {
        refresh()
    },[])
    
    const list = [
        {
            title: '论语的知识',
            knowledge: '《论语》是孔子及其弟子的语录结集，由孔子弟子及再传弟子编写而成，至战国前期成书。全书共20篇492章，以语录体为主，叙事体为辅，主要记录孔子及其弟子的言行，较为集中地体现了孔子的政治主张、伦理思想、道德观念及教育原则等。此书是儒家学派的经典着作之一，与《大学》《中庸》《孟子》并称“四书”，再加上《诗经》《尚书》《礼记》《周易》《春秋》，总称“四书五经”。',
            question: [{
                name: '己欲立而立人, ___________',
                choices: '',
                answer: '己欲达而达人'
            },
            {
                name: '___________, 小人长戚戚',
                choices: '',
                answer: '君子坦荡荡'
            }],
            // label: []
        },
        {
            title: '意象的概念',
            knowledge: '意象中，“意”通常指的是人的主观情感、思想或意志活动，而“象”则指的是客观存在的物象。在文学和艺术中，意象是创作主体（如诗人或艺术家）通过自己的情感活动对客观物象进行独特的诠释和创造，从而形成的一种富有象征意义和文学价值的艺术形象。这种结合不仅体现在视觉艺术中，也体现在文学作品中，如诗歌、散文等。意象可以是对现实物体的描述，也可以是对抽象概念的具体化表达，如梦境、感觉、氛围等。',
            question: [{
                name: '沈从文作品中最突出的意象是什么',
                choices: 'A. 火 B.山 C.夜 D.水',
                answer: 'D',
            }],
            // label: []
        },
        {
            title: '道德经的相关知识',
            knowledge: '《道德经》是中国古代哲学经典之一，被认为是道家学派的重要经典，由老子所著。其主要思想是关于道、德、无为等问题的探讨，强调了“道”作为宇宙万物的本源和规律，强调了“无为”、“自然”、“柔弱胜刚强”等观念。',
            question: [{
                name: '__________，水善利物而不争',
                choice: '',
                answer: '上善若水',
            }],
            // label: []
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '习近平：正是中国传统文化中的精华',
            question: [{
                name: '王阳明的代表作是《    》',
                choices: 'A. 王阳明心学 B.程朱理学 C.清代朴学 D.王安石新学',
                answer: 'A',
            }],
            // label: []
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '《论语》是儒家经典之一，记录了孔子及其弟子的言行。其中，"学而时习之，不亦说乎"的开篇语被认为是孔子核心思想的集中体现。',
            question: [{
                name: '孔子的《论语》中哪一章节被认为是他的核心思想的集中体现？',
                choices: 'A. 学而篇 B. 为政篇 C. 八佾篇 D. 泰伯篇',
                answer: 'A',
            }],
            // label: []
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '中国古代的指南针最早应用于航海领域，帮助航海家确定方向，提高航海的准确性和安全性。',
            question: [{
                name: '中国古代四大发明之一的指南针最早被应用于哪个领域？',
                choices: 'A. 航海 B. 农业 C. 医学 D. 建筑',
                answer: 'A',
            }],
            // label: []
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '京剧是中国古典戏曲的代表之一，起源于北京地区，是中国传统文化的重要组成部分，以唱、念、做、打四种表演方式著称，被誉为"华夏艺术之花"。',
            question: [{
                name: '在中国古代传统戏曲中，下列哪个是京剧的代表剧种？',
                choices: 'A. 学而篇 B. 为政篇 C. 八佾篇 D. 泰伯篇',
                answer: 'C',
            }]
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '李白是中国唐代著名的诗人，他的诗作豪放奔放，意境深远，被誉为"诗仙"，对后世诗人产生了深远的影响。',
            question: [{
                name: '以下哪位古代诗人被誉为"诗仙"？',
                choices: 'A. 李白 B. 杜甫 C. 白居易 D. 王维',
                answer: 'A',
            }]
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '剪纸是中国传统的民间艺术形式之一，起源于古代，通过剪刀在纸张上剪出各种图案和造型，具有丰富的文化内涵和艺术价值。',
            question: [{
                name: '在中国传统文化中，以下哪种传统艺术形式是以纸为材料，通过剪、贴、折等手法进行创作的？',
                choices: 'A. 书法 B. 园林艺术 C. 剪纸 D. 国画',
                answer: 'C',
            }]
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '春节是中国最重要的传统节日之一，也是中国的农历新年，通常在农历正月初一庆祝，是中国人民欢度新春的重要时刻，有着悠久的历史和丰富的文化内涵。',
            question: [{
                name: '在中国传统文化中，以下哪个节日被称为中国的传统农历新年？',
                choices: 'A. 清明节 B. 端午节 C. 中秋节 D. 春节',
                answer: 'D',
            }]
        },
        {
            title: '中国传统文化基本知识',
            knowledge: '剪纸是中国传统的民间艺术形式之一，起源于古代，通过剪刀在纸张上剪出各种图案和造型，具有丰富的文化内涵和艺术价值。',
            question: [{
                name: '在中国传统文化中，以下哪种传统艺术形式是以纸为材料，通过剪、贴、折等手法进行创作的？',
                choices: 'A. 书法 B. 园林艺术 C. 剪纸 D. 国画',
                answer: 'C',
            }]
        },
        {
            title: "中国的四大发明之一：造纸术",
            knowledge: "造纸术是中国古代的一项重要发明，通过将植物纤维制成纸张，改变了人类书写和记录信息的方式。造纸术的发明极大地促进了知识的传播和文化的发展。",
            "question": [{
                "name": "造纸术是中国古代的四大发明之一，它最早的原材料通常是什么？",
                "choices": "A. 竹 B. 木 C. 麻 D. 棉",
                "answer": "A"
            }]
        },
        {
            title: "中国的四大发明之一：火药",
            knowledge: "火药是中国古代的一项重要发明，最初用于民用和烹饪，后来被用于军事目的。火药的发明对战争方式和社会发展产生了深远影响。",
            "question": [{
                "name": "火药是中国古代的四大发明之一，它最初的用途是什么？",
                "choices": "A. 农业 B. 民用 C. 烹饪 D. 艺术",
                "answer": "B"
            }]
        },
        {
            title: "中国的四大发明之一：活字印刷术",
            knowledge: "活字印刷术是中国古代的一项重要发明，由毕昇发明。它通过排版，使印刷变得更加高效，极大地促进了书籍的传播和印刷业的发展。",
            "question": [{
                "name": "活字印刷术是中国古代的四大发明之一，它是由哪位发明家发明的？",
                "choices": "",
                "answer": "毕昇"
            }]
        },
        {
            title: "中国的四大发明之一：指南针",
            knowledge: "指南针是中国古代的一项重要发明，最早应用于航海领域。它通过指示地球磁场方向的磁针，帮助航海家确定方向，提高航海的准确性和安全性。",
            "question": [{
                "name": "中国古代四大发明之一的指南针最早被应用于哪个领域？",
                "choices": "A. 航海 B. 农业 C. 医学 D. 建筑",
                "answer": "A"
            }]
        },
        {
            title: "中国的传统节日：端午节",
            knowledge: "端午节是中国的传统节日之一，通常在农历五月初五庆祝。端午节有吃粽子、赛龙舟等习俗，也是为了纪念中国古代爱国诗人屈原。",
            "question": [{
                "name": "在中国传统节庆中，端午节主要是为了纪念哪位历史人物？",
                "choices": "A. 孔子 B. 屈原 C. 孙中山 D. 刘邦",
                "answer": "B"
            }]
        },
        {
            title: "中国的传统节日：中秋节",
            knowledge: "中秋节是中国的传统节日之一，通常在农历八月十五庆祝。中秋节有赏月、吃月饼等习俗，也是为了庆祝丰收和家庭团聚。",
            "question": [{
                "name": "在中国传统节庆中，中秋节通常是在农历几月几日庆祝？",
                "choices": "A. 正月十五 B. 二月十五 C. 八月十五 D. 十月十五",
                "answer": "C"
            }]
        },
        {
            title: "中国的传统节日：春节",
            knowledge: "春节是中国最重要的传统节日之一，也是中国的农历新年，通常在农历正月初一庆祝。春节有贴春联、放鞭炮、拜年等习俗，也是中国人民欢度新春的重要时刻。",
            "question": [{
                "name": "在中国传统文化中，以下哪个节日被称为中国的传统农历新年？",
                "choices": "A. 清明节 B. 端午节 C. 中秋节 D. 春节",
                "answer": "D"
            }]
        },
        {
            title: "中国的传统节日：清明节",
            knowledge: "清明节是中国的传统节日之一，通常在阳历4月4日至6日之间，是祭祖和扫墓的日子，也是缅怀先人、追思往事的时刻。",
            "question": [{
                "name": "在中国传统节庆中，清明节主要是为了做什么？",
                "choices": "A. 赏花 B. 登山 C. 祭祖扫墓 D. 放风筝",
                "answer": "C"
            }]
        },
        {
            title: "中国的传统节日：元宵节",
            knowledge: "元宵节是中国的传统节日之一，通常在农历正月十五庆祝。元宵节有吃元宵、观灯会等习俗，也是中国人民欢度新春的重要时刻。",
            "question": [{
                "name": "以下哪个节日通常被称为中国的元宵节？",
                "choices": "A. 正月初一 B. 正月十五 C. 二月初二 D. 五月初五",
                "answer": "B"
            }]
        },
        {
            title: "中国的传统节日：重阳节",
            knowledge: "重阳节是中国的传统节日之一，通常在农历九月初九庆祝。重阳节有登高、赏菊、饮菊花酒等习俗，也是为了庆祝丰收和祈求平安。",
            "question": [{
                "name": "在中国传统节庆中，重阳节主要有哪些习俗？",
                "choices": "A. 点灯 B. 赏月 C. 拜神 D. 烧香",
                "answer": "B"
            }]
        },
        {
            title: "中国的传统节日：中元节",
            knowledge: "中元节是中国的传统节日之一，通常在农历七月十五庆祝。中元节有祭祖和敬鬼、放水灯等习俗，也是为了缅怀先人和祈求平安。",
            "question": [{
                "name": "以下哪个节日通常被称为中国的中元节？",
                "choices": "A. 春节 B. 清明节 C. 中秋节 D. 元宵节",
                "answer": "B"
            }]
        },
        {
            title: "中国的传统节日：龙舟节",
            knowledge: "龙舟节是中国的传统节日之一，通常在农历五月初五庆祝。龙舟节有划龙舟、吃粽子等习俗，也是为了纪念中国古代爱国诗人屈原。",
            "question": [{
                "name": "在中国传统节庆中，龙舟节主要是为了纪念哪位历史人物？",
                "choices": "A. 孔子 B. 屈原 C. 孙中山 D. 刘邦",
                "answer": "B"
            }]
        }
    ]


    function onSubmit() {
        setShow(false)
        message.success("提交成功")
    }

    const [selectedItems, setSelectedItems] = useState([]);

    function refresh() {
        const numToPick = 4; // 随机选择的元素数量
        const randomItems = [];
        for (let i = 0; i < numToPick; i++) {
          const randomIndex = Math.floor(Math.random() * list.length);
          randomItems.push(list[randomIndex]);
        }
        setSelectedItems(randomItems);
    }
    
    return (
        <div className="interaction common">
            <div style={{display: 'flex', gap: '20px', marginLeft: '40px', alignItems: 'center'}}>
             <Label width="100px" text={`推荐知识点: ${selectedItems.length}项`}></Label>
             <Refresh width={'25px'} height={'25px'} onClick={refresh} />
            </div>
            <div className="content">
            {
                selectedItems.map((item, key) => (
                    <RecommendItem item={item} index={key + 1} key={key}
                    answerByTeacher={answerByTeacher}
                    ></RecommendItem>
                ))
            }
            </div>
            {
                show && (
                    <Dialog>
                        <div className="text">问题:<label>{ item.quesion }</label></div>
                        <div className="text">回答:<textarea className="textarea"></textarea></div>
                        <Button size="small" 
                        btnName="提交" action={onSubmit}
                        colorStyle="green"></Button>
                    </Dialog>
                )
            }
        </div>
    )
}























// import React,  {useEffect, useState} from "react"
// import ReactDOM from 'react-dom/client'
// import '../../styles/course.scss'
// import Label from "../../../../components/Label"
// import Button from "../../../../components/Button"
// import '../../../../assets/styles/common.scss'
// import Dialog from "../../../../components/Dialog"
// import { ReactComponent as Refresh }  from '../../../../assets/svg/refresh.svg'

// import { message } from "antd"

// export function QAItem(props) {
    
//     const [ role ,setRole] = useState(1)

//     function answerByTeacher(item) {
//         props.answerByTeacher(item)
//     }

//     useEffect(() => {
//         const role = Number(localStorage.getItem("role"))
//         console.log("role", role)
//         setRole(role)
//     })

//     return (
//         <div className="qa-item">
//             <div className="title">
//                 {`${props.index} ${props.item.title}`}
//             </div>
//             <div className="bottom">
//                 <div className="item"> 
//                     <div className="label">
//                         知识点阐述
//                     </div>
//                     <div className="text">
//                         {props.item.knowledge} 
//                     </div>
//                 </div>
//                 <div className="item">
//                     <div className="label">
//                         推荐题目
//                     </div>
//                     <div className="text">
//                         {
//                             props.item.question.map((it, key) => <div key={key}> 
//                                 <div>{key+1}.{it.name}</div>
//                                 <div>{it.choices}</div>
//                                 <div>答案: {it.answer}</div>
//                             </div>)
//                         }
//                         {props.item.aiAnswer} 
//                     </div>
//                 </div>

//                 <div className="item" style={{alignItems: 'center'}}>
//                     <div className="label">
//                         关键词
//                     </div>
//                     <div className="labels" style={{display: 'flex', 
//                     gap: '8px', 
//                     verticalAlign: 'middle'}}>
//                         { 
//                             props.item.label.map((it, key) => <Label key={key}
//                                     className="label-item" 
//                                     height='12' text={it}
//                                     backgroundColor={it.color} 
//                                     >
//                                 </Label>
//                             ) 
//                         }
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default function Interaction(props) {

//     const [show,setShow] = useState(false)
//     const [item,setItem] = useState({})


//     function answerByTeacher(item) {
//         console.log(item)
//         setShow(true)
//         setItem(item)
//     }

//     const list = [
//         {
//             title: '论语的知识',
//             label: ['论语','孔子'],
//             knowledge: '《论语》是孔子及其弟子的语录结集，由孔子弟子及再传弟子编写而成，至战国前期成书。全书共20篇492章，以语录体为主，叙事体为辅，主要记录孔子及其弟子的言行，较为集中地体现了孔子的政治主张、伦理思想、道德观念及教育原则等。此书是儒家学派的经典着作之一，与《大学》《中庸》《孟子》并称“四书”，再加上《诗经》《尚书》《礼记》《周易》《春秋》，总称“四书五经”。',
//             question: [{
//                 name: '己欲立而立人, ___________',
//                 choices: '',
//                 answer: '己欲达而达人'
//             },
//             {
//                 name: '___________, 小人长戚戚',
//                 choices: '',
//                 answer: '君子坦荡荡'
//             }]
//         },
//         {
//             title: '意象的概念',
//             label: ['意向'],
//             knowledge: '意象中，“意”通常指的是人的主观情感、思想或意志活动，而“象”则指的是客观存在的物象。在文学和艺术中，意象是创作主体（如诗人或艺术家）通过自己的情感活动对客观物象进行独特的诠释和创造，从而形成的一种富有象征意义和文学价值的艺术形象。这种结合不仅体现在视觉艺术中，也体现在文学作品中，如诗歌、散文等。意象可以是对现实物体的描述，也可以是对抽象概念的具体化表达，如梦境、感觉、氛围等。',
//             question: [{
//                 name: '沈从文作品中最突出的意象是什么',
//                 choices: 'A. 火 B.山 C.夜 D.水',
//                 answer: 'D',
//             }]
//         },
//         {
//             title: '道德经的相关知识',
//             label: ['《道德经》','传统典籍'],
//             knowledge: '《道德经》是中国古代哲学经典之一，被认为是道家学派的重要经典，由老子所著。其主要思想是关于道、德、无为等问题的探讨，强调了“道”作为宇宙万物的本源和规律，强调了“无为”、“自然”、“柔弱胜刚强”等观念。',
//             question: [{
//                 name: '__________，水善利物而不争',
//                 choice: '',
//                 answer: '上善若水',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['王阳明'],
//             knowledge: '王阳明是我国著名政治家、思想家、哲学家',
//             question: [{
//                 name: '王阳明的代表作是《    》',
//                 choices: 'A. 王阳明心学 B.程朱理学 C.清代朴学 D.王安石新学',
//                 answer: 'A',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['论语','孔子'],
//             knowledge: '《论语》是儒家经典之一，记录了孔子及其弟子的言行。其中，"学而时习之，不亦说乎"的开篇语被认为是孔子核心思想的集中体现。',
//             question: [{
//                 name: '孔子的《论语》中哪一章节被认为是他的核心思想的集中体现？',
//                 choices: 'A. 学而篇 B. 为政篇 C. 八佾篇 D. 泰伯篇',
//                 answer: 'A',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['四大发明'],
//             knowledge: '中国古代的指南针最早应用于航海领域，帮助航海家确定方向，提高航海的准确性和安全性。',
//             question: [{
//                 name: '中国古代四大发明之一的指南针最早被应用于哪个领域？',
//                 choices: 'A. 航海 B. 农业 C. 医学 D. 建筑',
//                 answer: 'A',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['戏剧','中华传统文化'],
//             knowledge: '京剧是中国古典戏曲的代表之一，起源于北京地区，是中国传统文化的重要组成部分，以唱、念、做、打四种表演方式著称，被誉为"华夏艺术之花"。',
//             question: [{
//                 name: '在中国古代传统戏曲中，下列哪个是京剧的代表剧种？',
//                 choices: 'A. 学而篇 B. 为政篇 C. 八佾篇 D. 泰伯篇',
//                 answer: 'C',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['李白','诗仙'],
//             knowledge: '李白是中国唐代著名的诗人，他的诗作豪放奔放，意境深远，被誉为"诗仙"，对后世诗人产生了深远的影响。',
//             question: [{
//                 name: '以下哪位古代诗人被誉为"诗仙"？',
//                 choices: 'A. 李白 B. 杜甫 C. 白居易 D. 王维',
//                 answer: 'A',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['剪纸','中华传统文化'],
//             knowledge: '剪纸是中国传统的民间艺术形式之一，起源于古代，通过剪刀在纸张上剪出各种图案和造型，具有丰富的文化内涵和艺术价值。',
//             question: [{
//                 name: '在中国传统文化中，以下哪种传统艺术形式是以纸为材料，通过剪、贴、折等手法进行创作的？',
//                 choices: 'A. 书法 B. 园林艺术 C. 剪纸 D. 国画',
//                 answer: 'C',
//             }]
//         },
//         {
//             title: '中国传统文化基本知识',
//             label:  ['春节','中华传统文化'],
//             knowledge: '春节是中国最重要的传统节日之一，也是中国的农历新年，通常在农历正月初一庆祝，是中国人民欢度新春的重要时刻，有着悠久的历史和丰富的文化内涵。',
//             question: [{
//                 name: '在中国传统文化中，以下哪个节日被称为中国的传统农历新年？',
//                 choices: 'A. 清明节 B. 端午节 C. 中秋节 D. 春节',
//                 answer: 'D',
//             }]
//         },
//         {
//             title: "中国的四大发明之一：造纸术",
//             label:  ['造纸术','四大发明'],
//             knowledge: "造纸术是中国古代的一项重要发明，通过将植物纤维制成纸张，改变了人类书写和记录信息的方式。造纸术的发明极大地促进了知识的传播和文化的发展。",
//             "question": [{
//                 "name": "造纸术是中国古代的四大发明之一，它最早的原材料通常是什么？",
//                 "choices": "A. 竹 B. 木 C. 麻 D. 棉",
//                 "answer": "A"
//             }]
//         },
//         {
//             title: "中国的四大发明之一：火药",
//             label:  ['火药','四大发明'],
//             knowledge: "火药是中国古代的一项重要发明，最初用于民用和烹饪，后来被用于军事目的。火药的发明对战争方式和社会发展产生了深远影响。",
//             "question": [{
//                 "name": "火药是中国古代的四大发明之一，它最初的用途是什么？",
//                 "choices": "A. 农业 B. 民用 C. 烹饪 D. 艺术",
//                 "answer": "B"
//             }]
//         },
//         {
//             title: "中国的四大发明之一：活字印刷术",
//             label:  ['活字印刷术','四大发明'],
//             knowledge: "活字印刷术是中国古代的一项重要发明，由毕昇发明。它通过排版，使印刷变得更加高效，极大地促进了书籍的传播和印刷业的发展。",
//             "question": [{
//                 "name": "活字印刷术是中国古代的四大发明之一，它是由哪位发明家发明的？",
//                 "choices": "",
//                 "answer": "毕昇"
//             }]
//         },
//         {
//             title: "中国的四大发明之一：指南针",
//             label:  ['指南针','四大发明'],
//             knowledge: "指南针是中国古代的一项重要发明，最早应用于航海领域。它通过指示地球磁场方向的磁针，帮助航海家确定方向，提高航海的准确性和安全性。",
//             "question": [{
//                 "name": "中国古代四大发明之一的指南针最早被应用于哪个领域？",
//                 "choices": "A. 航海 B. 农业 C. 医学 D. 建筑",
//                 "answer": "A"
//             }]
//         },
//         {
//             title: "中国的传统节日：端午节",
//             label:  ['端午节','中华传统文化'],
//             knowledge: "端午节是中国的传统节日之一，通常在农历五月初五庆祝。端午节有吃粽子、赛龙舟等习俗，也是为了纪念中国古代爱国诗人屈原。",
//             "question": [{
//                 "name": "在中国传统节庆中，端午节主要是为了纪念哪位历史人物？",
//                 "choices": "A. 孔子 B. 屈原 C. 孙中山 D. 刘邦",
//                 "answer": "B"
//             }]
//         },
//         {
//             title: "中国的传统节日：中秋节",
//             label:  ['中秋节','中华传统文化'],
//             knowledge: "中秋节是中国的传统节日之一，通常在农历八月十五庆祝。中秋节有赏月、吃月饼等习俗，也是为了庆祝丰收和家庭团聚。",
//             "question": [{
//                 "name": "在中国传统节庆中，中秋节通常是在农历几月几日庆祝？",
//                 "choices": "A. 正月十五 B. 二月十五 C. 八月十五 D. 十月十五",
//                 "answer": "C"
//             }]
//         },
//         {
//             title: "中国的传统节日：春节",
//             label:  ['春节','中华传统文化'],
//             knowledge: "春节是中国最重要的传统节日之一，也是中国的农历新年，通常在农历正月初一庆祝。春节有贴春联、放鞭炮、拜年等习俗，也是中国人民欢度新春的重要时刻。",
//             "question": [{
//                 "name": "在中国传统文化中，以下哪个节日被称为中国的传统农历新年？",
//                 "choices": "A. 清明节 B. 端午节 C. 中秋节 D. 春节",
//                 "answer": "D"
//             }]
//         },
//         {
//             title: "中国的传统节日：清明节",
//             label:  ['清明节','中华传统文化'],
//             knowledge: "清明节是中国的传统节日之一，通常在阳历4月4日至6日之间，是祭祖和扫墓的日子，也是缅怀先人、追思往事的时刻。",
//             "question": [{
//                 "name": "在中国传统节庆中，清明节主要是为了做什么？",
//                 "choices": "A. 赏花 B. 登山 C. 祭祖扫墓 D. 放风筝",
//                 "answer": "C"
//             }]
//         },
//         {
//             title: "中国的传统节日：元宵节",
//             label:  ['元宵节','中华传统文化'],
//             knowledge: "元宵节是中国的传统节日之一，通常在农历正月十五庆祝。元宵节有吃元宵、观灯会等习俗，也是中国人民欢度新春的重要时刻。",
//             "question": [{
//                 "name": "以下哪个节日通常被称为中国的元宵节？",
//                 "choices": "A. 正月初一 B. 正月十五 C. 二月初二 D. 五月初五",
//                 "answer": "B"
//             }]
//         },
//         {
//             title: "中国的传统节日：重阳节",
//             label:  ['重阳节','中华传统文化'],
//             knowledge: "重阳节是中国的传统节日之一，通常在农历九月初九庆祝。重阳节有登高、赏菊、饮菊花酒等习俗，也是为了庆祝丰收和祈求平安。",
//             "question": [{
//                 "name": "在中国传统节庆中，重阳节主要有哪些习俗？",
//                 "choices": "A. 点灯 B. 赏月 C. 拜神 D. 烧香",
//                 "answer": "B"
//             }]
//         },
//         {
//             title: "中国的传统节日：中元节",
//             label:  ['中元节','中华传统文化'],
//             knowledge: "中元节是中国的传统节日之一，通常在农历七月十五庆祝。中元节有祭祖和敬鬼、放水灯等习俗，也是为了缅怀先人和祈求平安。",
//             "question": [{
//                 "name": "以下哪个节日通常被称为中国的中元节？",
//                 "choices": "A. 春节 B. 清明节 C. 中秋节 D. 元宵节",
//                 "answer": "B"
//             }]
//         },
//         {
//             title: "中国的传统节日：龙舟节",
//             label:  ['端午节','中华传统文化'],
//             knowledge: "龙舟节是中国的传统节日之一，通常在农历五月初五庆祝。龙舟节有划龙舟、吃粽子等习俗，也是为了纪念中国古代爱国诗人屈原。",
//             "question": [{
//                 "name": "在中国传统节庆中，龙舟节主要是为了纪念哪位历史人物？",
//                 "choices": "A. 孔子 B. 屈原 C. 孙中山 D. 刘邦",
//                 "answer": "B"
//             }]
//         }
//     ]

//     function onSubmit() {
//         setShow(false)
//         message.success("提交成功")
//     }

    
//     return (
//         <div className="interaction common">
//             <div style={{display: 'flex', gap: '20px', marginLeft: '40px', alignItems: 'center'}}>
//              <Label width="100px" text={`推荐知识点: ${list.length}项`}></Label>
//              <Refresh width={'25px'} height={'25px'} />
//             </div>
//             <div className="content">
//             {
//                 list.map((item, key) => (
//                     <QAItem item={item} index={key + 1} key={key}
//                     answerByTeacher={answerByTeacher}
//                     ></QAItem>
//                 ))
//             }
//             </div>
//             {
//                 show && (
//                     <Dialog>
//                         <div className="text">问题:<label>{ item.quesion }</label></div>
//                         <div className="text">回答:<textarea className="textarea"></textarea></div>
//                         <Button size="small" 
//                         btnName="提交" action={onSubmit}
//                         colorStyle="green"></Button>
//                     </Dialog>
//                 )
//             }
//         </div>
//     )
// }