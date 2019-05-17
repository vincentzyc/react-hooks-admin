export default [{
  name: "getAppNameList",
  url: "/api/beacon/report_ad_analysis/app_name" //获取应用名称列表
}, {
  name: "getAdEffectList",
  url: "/api/beacon/report_ad_analysis/list", //广告效果分析报表列表
  backData: "getError"
}, {
  name: "getCustomerList",
  url: "/api/beacon/report_ad_customer/list", //查询广告客户报表列表
  backData: "getError"
}]