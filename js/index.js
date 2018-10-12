/**
 * Created by me on 2018/10/12.
 */
$(function(){
  //一进入页面，请求数据，动态渲染页面
  //1.导航菜单栏渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getindexmenu",
    type:"get",
    dataType: "json",
    success: function(info){
      console.log(info);
      //绑定模板，渲染页面
      var htmlStr = template("menuTmp",info);
      $("#menu").html(htmlStr);
    }
  })

  //2.折扣推荐商品列表渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getmoneyctrl",
    type: "get",
    dataType: "json",
    success: function(info){
      console.log(info);
      var htmlStr = template("recTmp",info);
      $("#recList").html(htmlStr);
    }
  })




})