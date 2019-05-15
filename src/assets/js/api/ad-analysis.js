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
}, {
  name: "getAdTaskName",
  url: "/api/beacon/report_ad_task/popularize_name"  //获取推广任务名称
}, {
  name: "getAdTaskList",
  url: "/api/beacon/report_ad_task/list", //推广任务列表
  backData: "getError"
}, {
  name: "getAdTaskCharts",
  url: "/api/beacon/report_ad/position_list",  //查询广告计划榜单推广
  backData: "getError"
}, {
  name: "updateCount",
  url: "/api/beacon/report_ad_analysis/update_count",  //修改广告效果分析报表数值
  backData: "getError"
}, {
  name: "updatePrice",
  url: "/api/beacon/update_price"  //修改推广任务价格
}, {
  name: "updateKeywords",
  url: "/api/beacon/update_keyword"  //修改关键词出价
}, {
  name: "updateBudget",
  url: "/api/beacon/update-daily-limit" //修改每日预算
}, {
  name: "updatePutinTime",
  url: "/api/beacon/update-time" //修改投放时间
}, {
  name: "getSearchList",
  url: "/api/beacon/report_ad/search_list",  //获取广告搜索报表
  backData: "getError"
}, {
  name: "getSearchKey",
  url: "/api/beacon/report_ad/search_key"  //广告计划获取关键词
}, {
  name: "getGroupName",
  url: "/api/beacon/report_ad/get_group_name"  //广告计划榜单获取人群组
}, {
  name: "exportAnalysis",
  url: "/api/beacon/report_ad_analysis/export"  //广告分析报表导出接口
}, {
  name: "exportAdTask",
  url: "/api/beacon/report_ad_task/export"   //广告任务报表导出
}, {
  name: "exportAdPosition",
  url: "/api/beacon/report_ad/position_export"   //广告榜单报表导出接口
}, {
  name: "exportAdSearch",
  url: "/api/beacon/report_ad/search_export"   //广告搜索报表导出接口
}]