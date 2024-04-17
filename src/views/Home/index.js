import React , { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Category from "./components/Category/category"
import Recommend from "./components/Recommend/recommend"
import Swiper from "../../components/Swiper"
import Button from "../../components/Button"
import '../../assets/styles/home.scss'
export default function Home() {

    const navigate = useNavigate()

    function navToChat() {
        setTimeout(()=>{
            navigate("/chat")
        }, 500)
        
    }

    const imgs = [
        {
            id: 1,
            imgUrl: '首页web3.jpg'
        },
        {
            id: 2,
            imgUrl: '首页web4.jpg'
        },
        {
            id: 3,
            imgUrl: '首页web5.jpg'
        },
    ]

    const [flag, setFlag] = useState(false)

    function handleChange() {
        setFlag(!flag)
    }

    return (
        <div className="home">
            <div className={`background ${flag? 'scroll': ''}`}></div>
            <div className="switch">
                <div className="round" onClick={()=>handleChange()}> &lt; </div>
                <div className="round" onClick={()=>handleChange()}> &gt; </div>
            </div>
        </div>
    )
}
