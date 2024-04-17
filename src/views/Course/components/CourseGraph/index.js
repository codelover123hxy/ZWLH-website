import React, { useEffect, useState, useRef }from "react";
import SideBar from "../../../../components/SideBar";
import MyGraph from "../../../../components/MyGraph";

export default function CourseGraph() {



    const initial = {
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
        ] 
    }

    const initialGraphData = [
        {
            "nodes": [
                {
                    "id": "234",
                    "name": "颐和园",
                    "category": 0
                },
                {
                    "id": "233",
                    "name": "故宫",
                    "category": 0
                },
                {
                    "id": "257",
                    "name": "中国传统建筑",
                    "category": 0
                },
                {
                    "id": "235",
                    "name": "布达拉宫",
                    "category": 0
                },
                {
                    "id": "248",
                    "name": "承德避暑山庄",
                    "category": 0
                },
                {
                    "id": "249",
                    "name": "武当山",
                    "category": 0
                },
                {
                    "id": "237",
                    "name": "天坛",
                    "category": 0
                },
                {
                    "id": "246",
                    "name": "长城",
                    "category": 0
                },
                {
                    "id": "236",
                    "name": "太和殿",
                    "category": 0
                },
                {
                    "id": "247",
                    "name": "悬空寺",
                    "category": 0
                }
            ],
            "links": [
                {
                    "source": "257",
                    "target": "234",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "237",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "248",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "235",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "246",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "249",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "236",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "247",
                    "type": "包含"
                },
                {
                    "source": "257",
                    "target": "233",
                    "type": "包含"
                }
            ],
            "categories": [
                {
                    "name": "建筑"
                }
            ]
        },
        {
            "nodes": [
                {
                    "id": "275",
                    "name": "琵琶行",
                    "category": 2
                },
                {
                    "id": "268",
                    "name": "《全唐诗》",
                    "category": 1
                },
                {
                    "id": "262",
                    "name": "李白",
                    "category": 3
                },
                {
                    "id": "276",
                    "name": "浣溪沙",
                    "category": 2
                },
                {
                    "id": "271",
                    "name": "《辛文房间诗集》",
                    "category": 1
                },
                {
                    "id": "261",
                    "name": "中华经典诗词",
                    "category": 0
                },
                {
                    "id": "263",
                    "name": "杜甫",
                    "category": 3
                },
                {
                    "id": "270",
                    "name": "《白氏长庆集》",
                    "category": 1
                },
                {
                    "id": "273",
                    "name": "望岳",
                    "category": 2
                },
                {
                    "id": "265",
                    "name": "白居易",
                    "category": 3
                },
                {
                    "id": "272",
                    "name": "静夜思",
                    "category": 2
                },
                {
                    "id": "266",
                    "name": "辛弃疾",
                    "category": 3
                },
                {
                    "id": "267",
                    "name": "《唐诗三百首》",
                    "category": 1
                }
            ],
            "links": [
                {
                    "source": "265",
                    "target": "270",
                    "type": "创作于"
                },
                {
                    "source": "270",
                    "target": "275",
                    "type": "收录了"
                },
                {
                    "source": "261",
                    "target": "267",
                    "type": "包含"
                },
                {
                    "source": "263",
                    "target": "268",
                    "type": "创作于"
                },
                {
                    "source": "268",
                    "target": "273",
                    "type": "收录了"
                },
                {
                    "source": "266",
                    "target": "271",
                    "type": "创作于"
                },
                {
                    "source": "261",
                    "target": "268",
                    "type": "包含"
                },
                {
                    "source": "261",
                    "target": "270",
                    "type": "包含"
                },
                {
                    "source": "261",
                    "target": "271",
                    "type": "包含"
                },
                {
                    "source": "271",
                    "target": "276",
                    "type": "收录了"
                },
                {
                    "source": "262",
                    "target": "267",
                    "type": "创作于"
                },
                {
                    "source": "267",
                    "target": "272",
                    "type": "收录了"
                }
            ],
            "categories": [
                {
                    "name": "中心节点"
                },
                {
                    "name": "诗集"
                },
                {
                    "name": "诗词内容"
                },
                {
                    "name": "诗人"
                }
            ]
        }
    ]

    const [ graphData, setGraphData ] = useState(initialGraphData[0])

    const smallGraph = {
        "nodes": [
            {
                "id": "234",
                "name": "颐和园",
                "category": 0
            },
            {
                "id": "233",
                "name": "故宫",
                "category": 0
            },
            {
                "id": "257",
                "name": "中国传统建筑",
                "category": 0
            },
            {
                "id": "235",
                "name": "布达拉宫",
                "category": 0
            },
            {
                "id": "248",
                "name": "承德避暑山庄",
                "category": 0
            },
            {
                "id": "249",
                "name": "武当山",
                "category": 0
            },
            {
                "id": "237",
                "name": "天坛",
                "category": 0
            },
            {
                "id": "246",
                "name": "长城",
                "category": 0
            },
            {
                "id": "236",
                "name": "太和殿",
                "category": 0
            },
            {
                "id": "247",
                "name": "悬空寺",
                "category": 0
            }
        ],
        "links": [
            {
                "source": "257",
                "target": "234",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "237",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "248",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "235",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "246",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "249",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "236",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "247",
                "type": "包含"
            },
            {
                "source": "257",
                "target": "233",
                "type": "包含"
            }
        ],
        "categories": [
            {
                "name": "建筑"
            }
        ]
    }

    const smallGraph2 = {
        "nodes": [
            {
                "id": "275",
                "name": "琵琶行",
                "category": 2
            },
            {
                "id": "268",
                "name": "《全唐诗》",
                "category": 1
            },
            {
                "id": "262",
                "name": "李白",
                "category": 3
            },
            {
                "id": "276",
                "name": "浣溪沙",
                "category": 2
            },
            {
                "id": "271",
                "name": "《辛文房间诗集》",
                "category": 1
            },
            {
                "id": "261",
                "name": "中华经典诗词",
                "category": 0
            },
            {
                "id": "263",
                "name": "杜甫",
                "category": 3
            },
            {
                "id": "270",
                "name": "《白氏长庆集》",
                "category": 1
            },
            {
                "id": "273",
                "name": "望岳",
                "category": 2
            },
            {
                "id": "265",
                "name": "白居易",
                "category": 3
            },
            {
                "id": "272",
                "name": "静夜思",
                "category": 2
            },
            {
                "id": "266",
                "name": "辛弃疾",
                "category": 3
            },
            {
                "id": "267",
                "name": "《唐诗三百首》",
                "category": 1
            }
        ],
        "links": [
            {
                "source": "265",
                "target": "270",
                "type": "创作于"
            },
            {
                "source": "270",
                "target": "275",
                "type": "收录了"
            },
            {
                "source": "261",
                "target": "267",
                "type": "包含"
            },
            {
                "source": "263",
                "target": "268",
                "type": "创作于"
            },
            {
                "source": "268",
                "target": "273",
                "type": "收录了"
            },
            {
                "source": "266",
                "target": "271",
                "type": "创作于"
            },
            {
                "source": "261",
                "target": "268",
                "type": "包含"
            },
            {
                "source": "261",
                "target": "270",
                "type": "包含"
            },
            {
                "source": "261",
                "target": "271",
                "type": "包含"
            },
            {
                "source": "271",
                "target": "276",
                "type": "收录了"
            },
            {
                "source": "262",
                "target": "267",
                "type": "创作于"
            },
            {
                "source": "267",
                "target": "272",
                "type": "收录了"
            }
        ],
        "categories": [
            {
                "name": "中心节点"
            },
            {
                "name": "诗集"
            },
            {
                "name": "诗词内容"
            },
            {
                "name": "诗人"
            }
        ]
    }

    const list = [
        {
            name: '历史创建的图谱',
            data:
            [
                {
                    text: '第一章知识图谱'
                },
                {
                    text: '第二章知识图谱'
                },
                {
                    text: '第三章知识图谱'
                },
                {
                    text: '第四章知识图谱'
                },
                {
                    text: '第五章知识图谱'
                },
                {
                    text: '第六章知识图谱'
                },
                {
                    text: '第七章知识图谱'
                },
                {
                    text: '第八章知识图谱'
                },
                {
                    text: '第九章知识图谱'
                },
                {
                    text: '第十章知识图谱'
                },
         
            ],
        }
    ]

    function handleChildChange(data) {
        console.log("data", data)
        if (data === '第一章知识图谱') {
            setGraphData(initialGraphData[0])
            setIndex(0)
        } else {
            setGraphData(initialGraphData[1])
            setIndex(1)
        }
    }

    const [name, setName] = useState("")
    const [index, setIndex] = useState(0)

    return (
        <div style={{display: 'flex'}}>
            <SideBar
                list  = {list}
                arrow = {true}
                barHeight = '800px'
                barWidth = '280px'
                fontSize = '15px'
                backgroundColor = "#FCFCFC"
                color = "black"
                titleStyle = {{
                    margin: '0 8px', 
                    fontWeight: 'bold'
                }}
                handleChange={handleChildChange}
            ></SideBar>

            <MyGraph
                showImage={true} 
                graphData={graphData} 
                height='800px' 
                width='1100px' 
                showImage={false} 
            >
            </MyGraph>
        </div>
    )
}
