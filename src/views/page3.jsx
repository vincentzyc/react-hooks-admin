import React, { useEffect, useContext } from 'react';
import { Table, Divider, Tag, Breadcrumb, Form, Input, Button, Modal } from 'antd';
import { HomeOutlined, UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getFormatDate } from '@/utils/index';
import { AdAnalysis } from '@/api/index'
import Store from "@/store/context";


const { confirm } = Modal;

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
  // const [data, setData] = useState([]);
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.page3List.length === 0) getCustomerList();
  })

  async function getCustomerList() {
    let param = {
      startTime: getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6),
      endTime: getFormatDate("yyyy-mm-dd"),
    }
    let res = await AdAnalysis.getCustomerList(param);
    // setData(res.list || [])
    dispatch({ func: "setPage3List", data: { type: "INIT_DATA", payload: res.list || [] } })
  }

  function handleDelete(index) {
    confirm({
      title: '确定删除这条数据吗？',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      cancelText: '取消',
      // content: 'Some descriptions',
      onOk() {
        // setData(data.filter((item,i)=>i!==index))
        dispatch({ func: "setPage3List", data: { type: "COMPLETE", payload: index } })
      },
      // onCancel() {
      //   console.log('Cancel');
      // },
    });
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
      <Table pagination={{ showSizeChanger: true }} columns={columns} dataSource={state.page3List} className="mg-t10" />
    </div>
  )
}



export default Page3;