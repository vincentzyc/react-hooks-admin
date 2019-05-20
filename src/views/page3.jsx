import React, { useState, useEffect } from 'react';
import { Table, Divider, Tag,Breadcrumb,Form,Input,Icon,Button } from 'antd';
import Yui from '@/assets/js';
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
    render: (text, record) => (
      <span>
        <a href="#/page3">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="#/page3">Delete</a>
      </span>
    ),
  },
];

const Page3 = () => {
  async function test1() {
    let param = {
      startTime: Yui.$util.getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6),
      endTime: Yui.$util.getFormatDate("yyyy-mm-dd"),
    }
    let res = await Yui.$api.AdAnalysis.getCustomerList(param);
    console.log(res);
    setData(res.list || [])
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) test1();
  })

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
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
          </Form.Item>
          <Form.Item> 
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Address"
              />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit"> 查询</Button>
          </Form.Item>
        </Form>
      </div>
      <Table pagination={{showSizeChanger:true}} columns={columns} dataSource={data} className="mg-t10"/>
    </div>
  )
}



export default Page3;