import Mock from "mockjs";

// Mock.mock(/supermarketloan/, {}) //正则 所有包含supermarketloan的url

Mock.setup({
  timeout: "30-500"
});


Mock.mock('/api/beacon/report_ad_analysis/list', {
  "list|5-100": [{
    "id|1-100000000": 11,
    appName: "@cname",
    "appId|1-9999999": 123
  }]
})

Mock.mock('/api/beacon/report_ad_customer/list', {
  "list|5-50": [{
    "key|1-100000000": 11,
    "age|1-100": 11,
    name: "@name",
    'tags': ()=>{
      let arr = ['nice', 'developer','loser','cool', 'teacher'];
      let index = Math.floor(Math.random()*5);
      return [arr[index]]
    },
    'address|1-3': 'New York Lake Park',
  }]
})


Mock.mock("/api/beacon/allviews", {
  "list|1-10": [{
    widgetName: "@name",
    "widgetCate|1": ["输入框", "单选框", "下拉框"],
    "widgetState|1": ["0", "1"]
  }]
});
Mock.mock("supermarketloan/getlist", {
  "list|1-10": [{
    widgetName: "@name"
  }]
});

Mock.mock("/api/beacon/getuserloanapply", {
  code: '0',
  "data|1-10": [{
    "applyId|1-99999": 1,
    productName: '@name',
    productType: '@name',
    phone: '@name',
    amount: '@name',
    deadline: '@name',
    applyTime: '@name',
    platformType: '@name',
    promotionChannel: '@name',
    applyResultStatus: '@name'
  }],
  "totalCount|1-500": 1
});