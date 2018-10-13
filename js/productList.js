/**
 * Created by me on 2018/10/12.
 */
$(function () {
  //获取地址栏参数
  var obj = getSearch();
  //console.log(obj);
  var categoryid = obj.categoryid;
  //console.log(categoryid);
  //功能1：商品列表渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getproductlist",
    type: "get",
    data: {
      categoryid: categoryid,
      pageid: 1
    },
    dataType: "json",
    success: function(info){
      console.log(info);
      var htmlStr = template("productListTmp",info);
      $(".mmm-main .content ul").html(htmlStr);
    }
  })
  //功能2：面包屑导航渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    type: "get",
    data: {
      categoryid: categoryid
    },
    dataType: "json",
    success: function(info){
      //console.log(info);
      var htmlStr = template("navTmp",info);
      $(".mmm-main .title").html(htmlStr);
    }
  })


  /*mui.init({
    pullRefresh: {
      container: '#refreshContainer', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
      auto: true, // 可选,默认false.自动上拉加载一次
      height: 50,
      up: {
        callback: function () {
          pages++;
          showajax(pages);
          mui('#refreshContainer').pullRefresh().endPullupToRefresh();

        } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
      }
    }
  })*/



})