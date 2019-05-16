import React, { useState, useEffect } from 'react';
import { Form, Select, InputNumber, Input, DatePicker, Switch, Slider, Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import Yui from '@/assets/js';
// import { createHashHistory } from 'history';

// const history = createHashHistory();

const { Option } = Select;

const App = () => {
  async function test1() {
    // history.push("/page4")
    // let param = {
    //   dataSource: "WEB_HUAWEI",
    //   appName: "",
    //   startAndEndTime: [Yui.$util.getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6), Yui.$util.getFormatDate("yyyy-mm-dd")],
    //   startTime: Yui.$util.getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6),
    //   endTime: Yui.$util.getFormatDate("yyyy-mm-dd"),
    //   pageIndex: 1,
    //   pageSize: 10,
    //   totalCount: 0
    // }
    // let res = await Yui.$api.AdAnalysis.getAdEffectList(param);
    setAppListe([{ id: 152380980, appName: "腾讯视频极速版", appId: "100618333", customerName: "腾讯科技（北京）有限公司" },
    { id: 152380981, appName: "流量雷锋", appId: "10286720", customerName: "北京骏伯网络科技有限公司", customerId: 64568137 },
    { id: 152380979, appName: "QQ音乐", appId: "10220136", customerName: "深圳市腾讯计算机系统有限公司" }])
    // console.log(res);
  }
  function test2() {
    setValue(Yui.$util.getFormatDate())
  }
  const [value, setValue] = useState('');

  const [appvalue, setAppvalue] = useState('10220136');

  const [appList, setAppListe] = useState([]);
  
  useEffect(() => {
    console.log('test1211');
    if (appList.length === 0) test1();
  });
  return (
    <div className="mg20">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item> Application Center</Breadcrumb.Item>
        <Breadcrumb.Item> Application List</Breadcrumb.Item>
        <Breadcrumb.Item>{appvalue}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="text-center">
        <Button type="primary" className="mg20" onClick={test1}>test1</Button>
        <Button type="primary" className="mg20" onClick={test2}>获取当前时间</Button>
      </div>
      <Form style={{ marginTop: 32 }}>
        <Form.Item
          label="数字输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input placeholder="time" value={value} onChange={v => setValue(v.target.value)} />
        </Form.Item>
        <Form.Item
          label="数字输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>
        <Form.Item
          label="开关"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item
          label="滑动输入条"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item
          label="选择器"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select value={appvalue} onChange={selectedItems => setAppvalue(selectedItems)} style={{ width: 192 }}>
            {
              appList.map(item => (
                <Option key={item.id} value={item.appId}>{item.appName}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          label="日期选择框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Link to="/page6">
            <Button type="primary" htmlType="submit">
              确定
          </Button>
          </Link>

          <Button style={{ marginLeft: 8 }}>
            取消
        </Button>
        </Form.Item>
      </Form>
    </div>

  );
}

export default App;