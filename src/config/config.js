export const chatSideBarList = [
    {
        name: '近一周',
        data:
        [
            {
                text: '中华传统文化'
            },
            {
                text: '计算机网络'
            },
            {
                text: '高等数学的复习资料'
            },
            {
                text: '线性代数的复习'
            },
            {
                text: '雅思复习指南'
            }
        ],
    },
    {
        name: '近一个月',
        data: [
            {
                text: '中华上下五千年'
            },
            {
                text: '论文写作格式'
            },
            {
                text: '人机工程学与设计学'
            },
            {
                text: '濒危物种'
            },
            {
                text: '全球赤潮危机与治理'
            },
            {
                text: '人工智能与大数据模型学习'
            }
        ]
    }
] 

export const graphSideBarList = [
    {
        name: '历史创建的图谱',
        data:
        [
            {
                text: '中华传统文化的知识图谱'
            },
            {
                text: '计算机网络的知识图谱'
            },
            {
                text: '专业英语的知识图谱'
            },
            {
                text: '数据结构的知识图谱'
            },
            {
                text: '高等数学的知识图谱'
            },
            {
                text: '线性代数的知识图谱'
            },
        ],
    },
    {
        name: '收藏的图谱',
        data: [
            {
                text: '线性代数的知识图谱'
            },
            {
                text: '人机工程学发展史的知识图谱'
            }
        ]
    }
]

export const courseChatSideBarList = [
    {
        name: '最近提问',
        data:
        [
            {
                text: '中华传统文化'
            },
            {
                text: '近现代散文'
            },
            {
                text: '诗经的内容'
            },
            {
                text: '古诗词赏析'
            },
            {
                text: '中国古代历史'
            },
            {
                text: '六艺是哪些'
            }
        ],
    }
]

// export const option = {
//     series: [
//       {
//         type: 'graph',
//         layout: 'force',
//         categories: graphData.categories,
//         data: graphData.nodes.map(node => ({
//           ...node,
//         //   symbolSize: 40 // 节点大小
//         })),
//         links: graphData.links.map(link => ({
//             ...link,
//             label: {
//                 show: true,
//                 formatter: link => link.data.type
//             }
//         })),
//         roam: true, // 开启缩放和平移
//         draggable: true,
//         label: {
//           position: 'inside',
//           show: 'true',
//           formatter: '{b}' // 节点上的标签显示配置
//         },
//         force: {
//           repulsion: 300, // 节点之间的斥力
//           edgeLength: [80, 160] // 边的长度范围
//         },
//         edgeSymbol: ['circle', 'arrow'],
//         edgeSymbolSize: [4, 10] // 边箭头的大小
//       }
//     ]
//   }


// export const graphData = {
//     categories: [ 
//         {name: "Philosophy"},
//         {name: "Music"},
//         {name: "Category"},
//         {name: "Domain"},
//         {name: "Custom"},
//         {name: "Architecture"},
//         {name: "Cuisine"},
//         {name: "Festival"},
//         {name: "Literature"},
//         {name: "Art"}
//     ],
//     links:[
//         {source: "125", target: "117", type: "属于"},
//         {source: "130", target: "119", type: "属于"},
//         {source: "120", target: "117", type: "属于"},
//         {source: "137", target: "121", type: "属于"},
//         {source: "142", target: "123", type: "属于"},
//         {source: "135", target: "121", type: "属于"},
//         {source: "145", target: "125", type: "属于"},
//         {source: "118", target: "117", type: "属于"},
//         {source: "128", target: "118", type: "属于"},
//         {source: "132", target: "120", type: "属于"},
//         {source: "127", target: "118", type: "属于"},
//         {source: "134", target: "120", type: "属于"},
//         {source: "122", target: "117", type: "属于"},
//         {source: "141", target: "123", type: "属于"},
//         {source: "136", target: "121", type: "属于"},
//         {source: "119", target: "117", type: "属于"},
//         {source: "121", target: "117", type: "属于"},
//         {source: "144", target: "124", type: "属于"},
//         {source: "133", target: "120", type: "属于"},
//         {source: "139", target: "122", type: "属于"},
//         {source: "124", target: "117", type: "属于"},
//         {source: "138", target: "122", type: "属于"},
//         {source: "146", target: "125", type: "属于"},
//         {source: "143", target: "124", type: "属于"},
//         {source: "140", target: "122", type: "属于"},
//         {source: "123", target: "117", type: "属于"},
//         {source: "129", target: "119", type: "属于"},
//         {source: "131", target: "119", type: "属于"},
//         {source: "126", target: "118", type: "属于"}],
//     nodes: [
//         {id: "139", name: "武术", category: 4},
//         {id: "143", name: "古琴", category: 1},
//         {id: "129", name: "诗歌", category: 8},
//         {id: "141", name: "长城", category: 5},
//         {id: "117", name: "中国传统文化", category: 2},
//         {id: "124", name: "音乐", category: 3},
//         {id: "123", name: "建筑", category: 3},
//         {id: "131", name: "四大名著", category: 8},
//         {id: "133", name: "国画", category: 9},
//         {id: "142", name: "故宫", category: 5},
//         {id: "125", name: "美食", category: 3},
//         {id: "126", name: "儒家", category: 0},
//         {id: "120", name: "艺术", category: 3},
//         {id: "122", name: "习俗", category: 3},
//         {id: "138", name: "茶道", category: 4},
//         {id: "119", name: "文学", category: 3},
//         {id: "135", name: "春节", category: 7},
//         {id: "140", name: "风水", category: 4},
//         {id: "130", name: "小说", category: 8},
//         {id: "118", name: "哲学", category: 3},
//         {id: "137", name: "端午节", category: 7},
//         {id: "144", name: "琵琶", category: 1},
//         {id: "128", name: "佛教", category: 0},
//         {id: "134", name: "戏曲", category: 9},
//         {id: "136", name: "中秋节", category: 7},
//         {id: "145", name: "北京烤鸭", category: 6},
//         {id: "127", name: "道家", category: 0},
//         {id: "146", name: "点心", category: 6},
//         {id: "132", name: "书法", category: 9},
//         {id: "121", name: "节日", category: 3}
//     ] }