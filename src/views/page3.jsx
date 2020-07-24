import React, { useState, useEffect } from 'react';
import { Table, Divider, Tag, Breadcrumb, Form, Input, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { getFormatDate } from '@/utils/index';
import { AdAnalysis } from '@/api/index'

const Page3 = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
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
      render: tags => (
        <span>
          {tags.map(tag => {
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
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <span>
          <a href="#/page3">Invite {record.name}</a>
          <Divider type="vertical" />
          <Button type="link" onClick={() => handleDelete(index)}>Delete</Button>
        </span>
      ),
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) getCustomerList();
  })

  async function getCustomerList() {
    let param = {
      startTime: getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6),
      endTime: getFormatDate("yyyy-mm-dd"),
    }
    let res = await AdAnalysis.getCustomerList(param);
    setData(res.list || [])
  }

  function handleDelete(index) {
    console.log(index);
    // data.splice(index,1);
    // console.log(data);
    // setData(data)
  }

  
  return (
    <div className="mg20">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item> Application Center</Breadcrumb.Item>
        <Breadcrumb.Item> Application List</Breadcrumb.Item>
      </Breadcrumb>
      <div className="mg-t20">
        <Form layout="inline">
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<HomeOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Address"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
      </div>
      <Table pagination={{ showSizeChanger: true }} columns={columns} dataSource={data} className="mg-t10" />
    </div>
  )
}



export default Page3;