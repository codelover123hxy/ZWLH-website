import Label from "../../components/Label";
import { Rate } from 'antd';
import React, { useState } from 'react';
import '../../assets/styles/suggestion.scss'
import Button from "../../components/Button";

export default function Suggestion() {

    const [rating, setRating] = useState(0); // 初始化评分为0

    const handleRatingChange = value => {
      // 处理评分变化事件
      setRating(value);
    };

    const suggestionList = [
        {
            text: '课程问答十分好用，对大学学习非常有帮助。但问答准确率还需提高',
            nickname: '某某'
        },
        {
            text: 'UI设计可以更精细一点。',
            nickname: '某某'
        },
        {
            text: '推荐效果还可以进一步提升，推荐的内容有效性需增强',
            nickname: '某某'
        },
        {
            text: '中华文化通识课程教学计划太紧。',
            nickname: '某某'
        }
    ]

    function submit() {
        // message.success("提交成功")
    }

    const submitIconUrl="../../../assets/icons/Vector (4).png"

    return (<div className="common suggestion" style={{textAlign: 'left',
    paddingLeft: '40px'}}>
        {/* <div style={{fontWeight: 'bold'}}>建议箱</div> */}
      
        <div style={{display: 'flex', gap: '100px'}}>
            <div className="left">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Label text="建议箱（问题：5个）"></Label>
                    <Label text="提交" borderRadius="5px" color="#DFDFDF" className="submit-btn" onClick={submit}></Label>
                </div>
                <div  style={{display: 'flex', gap: '30px'}}>
                    <div>
                        <div className="title"><span className="number">01</span>您对智能问答系统的建议</div>
                        <textarea className="textarea" 
                        ></textarea>
                        <div className="title"><span className="number">02</span>您对智能实时推荐系统的建议</div>
                        <textarea className="textarea" draggable="false"
                        ></textarea>
                        <div className="title"><span className="number">03</span>您对智问领航系列产品的总体建议</div>
                        <textarea className="textarea" draggable="false"
                        ></textarea>
                    </div>
                    <div>
                        <div className="title"><span className="number">04</span>您对目前的课程教学安排的建议（反馈至教务处）</div>
                        <textarea className="textarea" draggable="false"
                        ></textarea>

                        <div className="title"><span className="number">05</span>您对智问领航系列产品的总体评分</div>
                        <div className="rating">
                            <span>您的评分：</span>
                            <Rate  value={rating} onChange={handleRatingChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <Label text="用户建议(32条)"></Label>        
                {
                    suggestionList.map((item, key) => <div key={key}
                    className="suggestion-item"
                    >
                        {item.text}
                        <div style={{textAlign: 'right', marginTop: '10px'}}>————{item.nickname}用户</div>
                    </div>)
                }
                …………
            </div>
        </div>
    </div>)
}