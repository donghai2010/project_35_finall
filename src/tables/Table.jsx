import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Space, Table, Tag } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import EditTable from './EditTable';
import { NavLink } from "react-router-dom";
const { confirm } = Modal;



const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];





const TableCp = () => {
    const [data, setDateTable] = useState ([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemDetail, setItemDetail] = useState({});
    // const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';
    const api = 'https://651ffc11906e276284c3d6cc.mockapi.io/api/v1/rocket35';
    const apiCall = () => {
        axios.get(api)
        .then(res => {
            console.log(res,'res =====');
            setDateTable(res?.data);
        })
        .catch(err => console.log('Đã có lỗi call api' + err))
    }

    useEffect(() => {
        apiCall();
    }, []);





    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, itemTable) => (
            <Space size="middle">
            <Tag color={'green'} onClick={ () => showEdit(itemTable)}>
                Edit
            </Tag>
            <Tag color={'red'} onClick={ () => showDeleteConfirm(itemTable)}>
                Delete
            </Tag>
            </Space>
          ),
        },
      ];


      const showDeleteConfirm = (item) => {
        confirm({
          title: 'Are you sure delete this task?',
          icon: <ExclamationCircleFilled />,
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            deleteTb(item)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

      const showEdit = (item) => {
            console.log(item);
            setItemDetail(item)
            setIsModalOpen(true);
      }

    const  deleteTb = (itemTable) => {
            console.log(itemTable, 'itemTable');
            if(itemTable?.id) {
                axios.delete( api +`/${itemTable?.id}`).then((res) => {
                    apiCall();
                }).catch(err => console.log('xóa ban ghi khong thanh cong'+ err))
            }
    };
    const editTable = (item) => {
      const {id, name, address, age, tags, key} = item;
      if(id) {
          axios.put(api +`/${id}`, {
            name,
            address,
            age,
            tags,
            key,
          }).then((res) => {
            setIsModalOpen(false);
              apiCall();
          }).catch(err => console.log('sửa ban ghi khong thanh cong'+ err))
      }
    }




    return <>
            <div style={{display : 'flex', justifyContent: 'space-between'}}>
            <span >Danh sách  sản phẩm</span>
            <NavLink
                to="/addItemTable"
              >
                <Tag color='blue'>
                  Thêm mới
                </Tag>
            </NavLink>
            </div >
            <Table columns={columns} dataSource={data} />
            {/* show modal */}
            <EditTable 
              isModalOpen = {isModalOpen} 
              setIsModalOpen = {setIsModalOpen} 
              itemDetail = {itemDetail}
              setItemDetail = {setItemDetail}
              callBackUpdate={editTable}
            />
        </>
    
};
export default TableCp;