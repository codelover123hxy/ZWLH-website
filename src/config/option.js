export const option = {
    series: [
      {
        type: 'graph',
        layout: 'force',
        categories: graphData.categories,
        data: graphData.nodes.map(node => ({
          ...node,
        //   symbolSize: 40 // 节点大小
        })),
        links: graphData.links.map(link => ({
            ...link,
            label: {
                show: true,
                formatter: link => link.data.type
            }
        })),
        roam: true, // 开启缩放和平移
        draggable: true,
        label: {
          position: 'inside',
          show: 'true',
          formatter: '{b}' // 节点上的标签显示配置
        },
        force: {
          repulsion: 300, // 节点之间的斥力
          edgeLength: [80, 160] // 边的长度范围
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10] // 边箭头的大小
      }
    ]
  }