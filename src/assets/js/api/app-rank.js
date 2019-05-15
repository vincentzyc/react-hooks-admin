export default [{
	name: "getReportList",
  url: "/api/beacon/report_list",  //获取榜单报表接口
  backData:"getError"
}, {
	name: "getAppNameList",
	url: "/api/beacon/app_name_list"  //获取app名称列表
}, {
	name: "getTagNameList",
	url: "/api/beacon/tag_name_list"  //获取分类列表
}, {
	name: "getAddressDescList",
	url: "/api/beacon/address_desc_list"  //获取榜单列表
},{
	name: "getDetailsReportList",
  url: "/api/beacon/details_report_list",  //获取榜单详情报表接口
  backData:"getError"
},{
	name: "getDetailsAddressDescList",
	url: "/api/beacon/details_address_desc_list"  //获取榜单详情位置接口
},{
  name:"exportRankDetails",
  url:"/api/beacon/report_position/export"   //榜单详情导出接口
}]