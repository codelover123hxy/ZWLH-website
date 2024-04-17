import React,  {useEffect, useRef, useState} from "react"
import ReactDOM from 'react-dom/client'
import { Table } from "antd"
import '../../styles/course.scss'
import Label from "../../../../components/Label"
import Button from "../../../../components/Button"
import { getFilesAPI } from "../../../../services/course/student"
import { ReactComponent as Uploader } from "../../../../assets/svg/uploader.svg"
import { message } from "antd"
import axios from "axios"

export default function CourseMaterial() {

  var rowSelection = {
    onSelect: function(record, selected, selectedRows) {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: function(selected, selectedRows) {
      console.log(selected, selectedRows);
    }
  };

  async function download() {
    try {
        // 发送请求获取文件数据，这里的URL需替换为你的API地址
        // const response = await fetch('https://api.familystudy.cn:8085/api/file/download?filename=%E9%A6%96%E9%A1%B59.jpg',
        const filename = '试卷库(excel).zip'

        let myurl = `https://api.familystudy.cn:8085/api/file/download?filename=${filename}`
        const resp = await fetch(myurl, {
            mode: 'no-cors' 
        })


        console.log("response", resp)

      // 获取文件流
      const blob = await resp.blob();
      // 创建一个隐藏的链接并触发下载
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // 这里可以设置下载文件的默认名称
      a.download = filename // .ext 替换为文件的扩展名
      document.body.appendChild(a); // Append the link to the body
      a.click(); // Simulate click on the link to download the file
      a.remove(); // Then remove the link from the body
      window.URL.revokeObjectURL(url); // Clean up the URL object
  } catch (error) {
      console.error('Download error:', error);
  }
};

  const [ role, setRole] = useState(null) 

  useEffect(() => {
    // window.location.reload();
    tableInfoRef.current = tableInfo
    const role = Number(localStorage.getItem("role"))
    console.log("role", role)
    setRole(role)
    // getFiles()
  })

  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    message.success("上传成功")
    setFile(event.target.files[0]); // Set the selected file
  };

  var initialTableInfo = {
        dataSource: [
            {
              key: '1',
              name: '课件.rar',
              size: '267.3MB',
              creator: '教师1',
              createDate: '2024-04-15 11:55:55'
            },
            {
              key: '2',
              name: '试卷库（excel).zip',
              size: '44.0KB',
              creator: '教师1',
              createDate: '2024-04-15 12:01:44'
            },
            {
              key: '3',
              name: '作业库(excel).zip',
              size: '1.1MB',
              creator: '教师1',
              createDate: '2024-04-15 12:01:48'
            }
          ], 
        columns: [
            {
              title: '文件名',
              dataIndex: 'name',
              key: 'filename',
              render: function(text) {
                return <a href="javascript:;">{text}</a>;
              }
            },

            {
              title: '大小',
              dataIndex: 'size',
              key: 'size',
            },
            {
              title: '创建者',
              dataIndex: 'creator',
              key: 'creator',
            },
            {
              title: '创建日期',
              dataIndex: 'createDate',
              key: 'createDate',
            },
            {
              title: '操作',
              dataIndex: 'method',
              render: function(text, record) {
                return <span>
                  <Button btnName="下载"
                  action={download}
                  size="small"></Button>
                  { role === 2 &&
                  <Button btnName="删除"
                   colorStyle="red"
                  size="small"></Button>}
                </span>
              }
            }
        ]
    }

    const tableInfoRef = useRef(initialTableInfo)

    // Function to handle file upload
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // 'file' is the key expected by the server
    formData.append("courseId", 1)
    try {
      const response = await fetch('https://api.familystudy.cn:8085/api/file/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json(); // Assuming server responds with JSON
        console.log(responseData)
        alert('File uploaded successfully: ' + responseData.message);
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error uploading file');
    }
  };

    async function getFiles() {
      const pageQuery = {
        pageSize: 10, 
        pageNum: 1
      }
      const courseId = 1
      const res = await getFilesAPI(pageQuery, courseId)
      let records = res.data.records
      records.forEach((item, index) =>{
        item.key = index
      })
      console.log(records)
      let newtableInfo = tableInfo
      newtableInfo.dataSource = records
      // console.log(tableInfo)
      setTableInfo(newtableInfo)
    }

    const [ tableInfo, setTableInfo ] = useState(initialTableInfo)

    // getFiles()
    // function handleFileChange() {
    //   tableInfo.dataSource.push({
    //     key: '4',
    //     filename: '作业库',
    //     size: '44.3KB',
    //     creator: '教师2',
    //     createDate: '2024-03-13 13:31'
    //   })
    //   console.log(tableInfo.dataSource)
    //   setTableInfo(tableInfo)
    //   message.success("上传成功")
    // }

    return (
      <div className="course-material common">
       <div className="content">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Label text={`资料清单: ${3}项`}></Label>
            {
              role === 2 && 
              <>
                <label style={{marginLeft: '30px'}}>      
                  <Uploader
                  onClick={handleUpload}
                    style={{ width: '40px', height: '30px', display: 'inline-block' }}
                  /> 
                   <input 
                    style={{ backgroundColor: 'white', 
                    color: 'white',
                    width: '0px'
                    }}
                    type="file" onChange={handleFileChange} />
                </label>
                上传资料
              </>
            }
            </div>    
            { role !== null &&
              <Table
                pagination={true}
                shouldCellUpdate={true}
                rowSelection={rowSelection}
                dataSource={tableInfoRef.current.dataSource} 
                columns={tableInfoRef.current.columns} 
              />
            }
       </div>
      </div>
    )
}
