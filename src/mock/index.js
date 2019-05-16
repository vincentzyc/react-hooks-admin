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

Mock.mock("getuserinfo", {
  name: "@cname",
  "age|10-76": 20
});

Mock.mock("login", {
  code: 0,
  name: "@cname",
  "age|10-76": 20
});

Mock.mock("api/user", {
  code: 0,
  name: "@cname",
  "age|10-76": 20
});

Mock.mock("supermarketloan/homepage/allviews", {
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

Mock.mock("supermarketloan/mgr/loanapply/getuserloanapply", {
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