import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';

import image from '../../assets/image/drawing.png'
import image2 from '../../assets/image/calligraphy.png'
import image3 from '../../assets/image/archietecture.png'

import { getConnectedNodesAPI } from '../../services/graph/graph.js'

export default function MyGraph(props) {

    var graphData = props.graphData

    const getNodes = async () => {
       const res = await getConnectedNodesAPI({
        name: '计算机网络'
       })
       console.log(res.data)
       graphData = res.data
    }

    const sizeMapping = {
        "0": 40, // Category 1
        "1": 40, // Category 2
        // 其他类别的大小...
        "2": 50,
        "3": 45,
        "4": 40, // Category 1
        "5": 40, // Category 2
        // 其他类别的大小...
        "6": 40,
        "7": 40,
        "8": 40,
        "9": 40
      };

 
      function getOption() {
        // getNodes()
        graphData.nodes.forEach(node => {
        node.symbolSize = sizeMapping[node.category.toString()] || 10; // 如果未找到匹配项，则使用默认大小
        });    
        var option = {
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
        return option
      }

      return (
        <div>
          {
            props.showImage &&
            <>
          <img src={image} height="80px" 
          style={{position: 'absolute',
          right: '130px', top: '300px'}}></img>
          <img src={image2} height="80px" 
          style={{position: 'absolute',
          right: '230px', top: '150px'}}></img>

        <img src={image3} height="80px" 
          style={{position: 'absolute',
          right: '630px', top: '600px'}}></img>
          </>
        }

          <ReactECharts className="echarts" style={{height: props.height, width: props.width}} option={getOption()} />
        </div>
      )
}