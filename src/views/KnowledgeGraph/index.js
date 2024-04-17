import React, { useEffect, useState, useRef } from "react"
import SideBar from '../../components/SideBar'
import Graph from './components/Graph'
import { graphSideBarList }  from '../../config/config'
import { getConnectedNodesAPI } from "../../services/graph/graph"
import { getUserAPI } from "../../services/user/user"

export default function KnowledgeGraph() {    

    const initialGraphData = [{
    //     nodes: [
    //       { id: "1", name: "Node 1", category: 0 },
    //       { id: "2", name: "Node 2", category: 1 },
    //       { id: "3", name: "Node 3", category: 1 },
    //       // 其他节点...
    //     ],
    //     links: [
    //       { source: "1", target: "2", type: '属于' },
    //       { source: "2", target: "3", type: '属于'},
    //       // 其他关系...
        
    //     ],
    //     categories: [
    //       { name: "Category 1" },
    //       { name: "Category 2" },
    //       // 其他类别...
    //     ]
    // }
            categories: [ 
                {name: "Philosophy"},
                {name: "Music"},
                {name: "Category"},
                {name: "Domain"},
                {name: "Custom"},
                {name: "Architecture"},
                {name: "Cuisine"},
                {name: "Festival"},
                {name: "Literature"},
                {name: "Art"}
            ],
            links:[
                {source: "125", target: "117", type: "属于"},
                {source: "130", target: "119", type: "属于"},
                {source: "120", target: "117", type: "属于"},
                {source: "137", target: "121", type: "属于"},
                {source: "142", target: "123", type: "属于"},
                {source: "135", target: "121", type: "属于"},
                {source: "145", target: "125", type: "属于"},
                {source: "118", target: "117", type: "属于"},
                {source: "128", target: "118", type: "属于"},
                {source: "132", target: "120", type: "属于"},
                {source: "127", target: "118", type: "属于"},
                {source: "134", target: "120", type: "属于"},
                {source: "122", target: "117", type: "属于"},
                {source: "141", target: "123", type: "属于"},
                {source: "136", target: "121", type: "属于"},
                {source: "119", target: "117", type: "属于"},
                {source: "121", target: "117", type: "属于"},
                {source: "144", target: "124", type: "属于"},
                {source: "133", target: "120", type: "属于"},
                {source: "139", target: "122", type: "属于"},
                {source: "124", target: "117", type: "属于"},
                {source: "138", target: "122", type: "属于"},
                {source: "146", target: "125", type: "属于"},
                {source: "143", target: "124", type: "属于"},
                {source: "140", target: "122", type: "属于"},
                {source: "123", target: "117", type: "属于"},
                {source: "129", target: "119", type: "属于"},
                {source: "131", target: "119", type: "属于"},
                {source: "126", target: "118", type: "属于"}],
            nodes: [
                {id: "139", name: "武术", category: 4},
                {id: "143", name: "古琴", category: 1},
                {id: "129", name: "诗歌", category: 8},
                {id: "141", name: "长城", category: 5},
                {id: "117", name: "中国传统文化", category: 2},
                {id: "124", name: "音乐", category: 3},
                {id: "123", name: "建筑", category: 3},
                {id: "131", name: "四大名著", category: 8},
                {id: "133", name: "国画", category: 9},
                {id: "142", name: "故宫", category: 5},
                {id: "125", name: "美食", category: 3},
                {id: "126", name: "儒家", category: 0},
                {id: "120", name: "艺术", category: 3},
                {id: "122", name: "习俗", category: 3},
                {id: "138", name: "茶道", category: 4},
                {id: "119", name: "文学", category: 3},
                {id: "135", name: "春节", category: 7},
                {id: "140", name: "风水", category: 4},
                {id: "130", name: "小说", category: 8},
                {id: "118", name: "哲学", category: 3},
                {id: "137", name: "端午节", category: 7},
                {id: "144", name: "琵琶", category: 1},
                {id: "128", name: "佛教", category: 0},
                {id: "134", name: "戏曲", category: 9},
                {id: "136", name: "中秋节", category: 7},
                {id: "145", name: "北京烤鸭", category: 6},
                {id: "127", name: "道家", category: 0},
                {id: "146", name: "点心", category: 6},
                {id: "132", name: "书法", category: 9},
                {id: "121", name: "节日", category: 3}
            ] },
            {
                "nodes": [
                    {
                        "id": "112",
                        "name": "Web服务",
                        "category": 4
                    },
                    {
                        "id": "91",
                        "name": "传输层",
                        "category": 0
                    },
                    {
                        "id": "116",
                        "name": "计算机网络",
                        "category": 2
                    },
                    {
                        "id": "111",
                        "name": "无线接入点",
                        "category": 1
                    },
                    {
                        "id": "90",
                        "name": "应用层",
                        "category": 0
                    },
                    {
                        "id": "100",
                        "name": "UDP",
                        "category": 3
                    },
                    {
                        "id": "105",
                        "name": "WiFi",
                        "category": 3
                    },
                    {
                        "id": "92",
                        "name": "网络层",
                        "category": 0
                    },
                    {
                        "id": "115",
                        "name": "文件分享服务",
                        "category": 4
                    },
                    {
                        "id": "104",
                        "name": "Ethernet",
                        "category": 3
                    },
                    {
                        "id": "101",
                        "name": "IP",
                        "category": 3
                    },
                    {
                        "id": "114",
                        "name": "邮件服务",
                        "category": 4
                    },
                    {
                        "id": "107",
                        "name": "路由器",
                        "category": 1
                    },
                    {
                        "id": "108",
                        "name": "交换机",
                        "category": 1
                    },
                    {
                        "id": "113",
                        "name": "DNS服务",
                        "category": 4
                    },
                    {
                        "id": "93",
                        "name": "数据链路层",
                        "category": 0
                    },
                    {
                        "id": "102",
                        "name": "ICMP",
                        "category": 3
                    },
                    {
                        "id": "94",
                        "name": "物理层",
                        "category": 0
                    },
                    {
                        "id": "99",
                        "name": "TCP",
                        "category": 3
                    },
                    {
                        "id": "96",
                        "name": "HTTPS",
                        "category": 3
                    },
                    {
                        "id": "109",
                        "name": "个人电脑",
                        "category": 1
                    },
                    {
                        "id": "95",
                        "name": "HTTP",
                        "category": 3
                    },
                    {
                        "id": "106",
                        "name": "Bluetooth",
                        "category": 3
                    },
                    {
                        "id": "98",
                        "name": "DNS",
                        "category": 3
                    },
                    {
                        "id": "103",
                        "name": "ARP",
                        "category": 3
                    },
                    {
                        "id": "110",
                        "name": "服务器",
                        "category": 1
                    },
                    {
                        "id": "97",
                        "name": "FTP",
                        "category": 3
                    }
                ],
                "links": [
                    {
                        "source": "111",
                        "target": "105",
                        "type": "支持"
                    },
                    {
                        "source": "91",
                        "target": "116",
                        "type": "属于"
                    },
                    {
                        "source": "114",
                        "target": "96",
                        "type": "使用"
                    },
                    {
                        "source": "95",
                        "target": "90",
                        "type": "属于"
                    },
                    {
                        "source": "110",
                        "target": "95",
                        "type": "支持"
                    },
                    {
                        "source": "114",
                        "target": "95",
                        "type": "使用"
                    },
                    {
                        "source": "93",
                        "target": "116",
                        "type": "属于"
                    },
                    {
                        "source": "105",
                        "target": "94",
                        "type": "属于"
                    },
                    {
                        "source": "102",
                        "target": "92",
                        "type": "属于"
                    },
                    {
                        "source": "109",
                        "target": "99",
                        "type": "支持"
                    },
                    {
                        "source": "90",
                        "target": "116",
                        "type": "属于"
                    },
                    {
                        "source": "97",
                        "target": "90",
                        "type": "属于"
                    },
                    {
                        "source": "107",
                        "target": "101",
                        "type": "支持"
                    },
                    {
                        "source": "100",
                        "target": "91",
                        "type": "属于"
                    },
                    {
                        "source": "115",
                        "target": "97",
                        "type": "使用"
                    },
                    {
                        "source": "112",
                        "target": "95",
                        "type": "使用"
                    },
                    {
                        "source": "96",
                        "target": "90",
                        "type": "属于"
                    },
                    {
                        "source": "99",
                        "target": "91",
                        "type": "属于"
                    },
                    {
                        "source": "113",
                        "target": "98",
                        "type": "使用"
                    },
                    {
                        "source": "92",
                        "target": "116",
                        "type": "属于"
                    },
                    {
                        "source": "106",
                        "target": "94",
                        "type": "属于"
                    },
                    {
                        "source": "103",
                        "target": "92",
                        "type": "属于"
                    },
                    {
                        "source": "108",
                        "target": "104",
                        "type": "支持"
                    },
                    {
                        "source": "94",
                        "target": "116",
                        "type": "属于"
                    },
                    {
                        "source": "98",
                        "target": "90",
                        "type": "属于"
                    },
                    {
                        "source": "109",
                        "target": "100",
                        "type": "支持"
                    },
                    {
                        "source": "104",
                        "target": "93",
                        "type": "属于"
                    },
                    {
                        "source": "101",
                        "target": "92",
                        "type": "属于"
                    }
                ],
                "categories": [
                    {
                        "name": "Layer"
                    },
                    {
                        "name": "Device"
                    },
                    {
                        "name": "Category"
                    },
                    {
                        "name": "Protocol"
                    },
                    {
                        "name": "Service"
                    }
                ]
            }
        
        
        ]
      
    const [ graphData, setGraphData ] = useState(initialGraphData[0])
    const graphRef = useRef(initialGraphData[0])

    useEffect(()=> {
        const initGraph = async () => {
            const name = "计算机网络"
            // const res = await getConnectedNodesAPI({name: name})
            // console.log(res.data)
            // setGraphData(res.data);
            graphRef.current = initialGraphData[0]
        }
        graphRef.current = initialGraphData[0]
        // initGraph()
    }, [])

    const [name, setName] = useState("")
    const [index, setIndex] = useState(0)

    function handleChildChange(data) {
        console.log("data", data)
        if (data === '中华传统文化的知识图谱') {
            setGraphData(initialGraphData[0])
            setIndex(0)
        } else {
            setGraphData(initialGraphData[1])
            setIndex(1)
        }
    }

    return (
        <div className="knowledge-graph">
            <div style={{display: 'flex'}}>
                <SideBar
                title = "我的知识图谱"
                list  = { graphSideBarList }
                arrow = {true}
                barHeight = '800px'
                barWidth = '300px'
                fontSize = '15px'
                avatar = {true}
                titleColor = "white"
                handleChange={handleChildChange}
                >
                </SideBar>
                <Graph graphData={graphData} name={name} index={index}
                ></Graph>
            </div>
        </div>
    )
}
