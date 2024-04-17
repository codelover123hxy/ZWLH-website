import React, { Component, useEffect, useState } from "react";
import '../../styles/course.scss'
import Label from '../../../../components/Label/index'
import { getCourseByIdAPI } from "../../../../services/course/course";
import Button from "../../../../components/Button";

function FlexLayout(props) {
    return (
        <div className="flex-layout">
            {props.children}
        </div>
    )
}

export default function CourseIntro() {

    const courseIntro = {
        target: `1.通过对中国文学经典的教学，提升学生对中国语言文学的热爱之情。 2.通过对中国文学经典的教学，陶冶学生精神情操，提高其文化素养。3.中国文学经典是中国文化的主要载体，通过对中国文学经典的教学，启发学生寻找中华民族的精神家园。`,
        list: [
            '第一讲：有用之用与无用之用', 
            '第二讲：弱德之美——上善若水，道法自然',
            '第三讲：仁和精神与文明对话（上）', 
            '第四讲：“礼乐文化”与“知行合一”',
            '第五讲：务本固本+内圣外王', 
            '第六讲：周易的基本人文精神',
            '第七讲：禅观自在+禅悦人生+无动画版', 
            '第八讲：以史为鉴——历史的星空',
            '第九讲：生命境界的盲瞽与醒悟',   
            '第十讲：东方神韵——古典服饰中的美学元素（4）', 
            '第十讲：花木诗词鉴赏（2）', 
            '第十讲：诗心与诗境（3）', 
            '第十讲：风骨与情韵——走向振奋的大唐诗歌（1）', 
            '第十一讲：世界记忆之《黄帝内经》与《本草纲目》（3）', 
            '第十一讲：中医学与中华文明（2）', 
            '第十一讲：太极与养生（1）', 
            '第十二讲：六艺的启示——内外兼修与全息养成',
            '第十三讲：匠人匠心——中华传统工艺精神'
        ],
        preKnowledge: '基本的中华传统文化常识',
        references: [
            '徐中玉《大学语文》，华东师范大学出版社2005年6月第一版',
            '王步高《大学语文》全编本第四版 ，南京大学出版社2008年6月第一版',
            '周先慎，何九盈等《中国语文》，重庆出版社2009年4月第一版',
            '张天来《大学语文读本》，东南大学出版社2005年7月修订版',
            '张天来《大学语文教学参考资料》，南京大学出版社2004年8月',
            '张天来《应用写作》，东南大学出版社2010年1月第一版',        
        ]
    }

    useEffect(() => {
        // getCourseById(2)
    })

    async function getCourseById(id) {
        const res = await getCourseByIdAPI(id)
        console.log(res)
    }

    function modifyInfo() {

    }

    const [ role,setRole] = useState(1) 

    useEffect(() => {
        const role = Number(localStorage.getItem("role"))
        console.log("role", role)
        setRole(role)
    })
    
    return (
        <div className="course-intro common">
           <span style={{fontWeight: 'bold'}}>中华文化通识教程  </span>
           {role === 2 && <Button action={modifyInfo} btnName="修改课程信息" colorStyle="green" size="small"></Button>}
            <FlexLayout>
                <Label text="课程概述" width="60px"></Label>
                <div className="right">{ courseIntro.target } </div> 
            </FlexLayout>

            <FlexLayout>
                <Label text="课程大纲" width="60px"></Label>
                <div className="right">
                    {
                        courseIntro.list.map((item, key) => <div className="chapter" key={key}>
                            {item}
                        </div>
                        )
                    }
                </div>
            </FlexLayout>
            <FlexLayout>
                <Label text="预备知识" width="60px"></Label>
                <div className="right">{ courseIntro.preKnowledge }</div>
            </FlexLayout>
            <FlexLayout>
                <Label text="参考资料" width="60px"></Label>
                <div className="right">
                {
                    courseIntro.references.map((item, key) => <div className="chapter" key={key}>
                    {item}
                    </div>
                    )
                }
                </div>
            </FlexLayout>   
        </div>
    )
}