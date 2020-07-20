export default [{
	name: "login", 
  url: "/api/user/login", //登录
  backData: 'allData'
}, {
	name: "getSideBar",
	url: "/api/user/menu"  //获取侧边栏菜单
}, {
	name: "changePassword", 
	url: "/api/user/password/update" // 修改密码
}]