/**
 * Created by me on 2018/10/12.
 */
$(function () {
  //获取地址栏参数
  var obj = getSearch();
  //console.log(obj);
  var productid = obj.productid;
  //console.log(productid);
  //功能1：商品详情渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getproduct",
    type: "get",
    data: {
      productid: productid
    },
    dataType: "json",
    success: function (info) {
      console.log(info);
      var categoryid = getCateId(info);
      //功能2.面包屑导航二级分类渲染
      //获取categoryId  ,通过页面渲染时请求返回的数据拿到
      $.ajax({
        url: "http://127.0.0.1:9090/api/getcategorybyid",
        type: "get",
        data: {
          categoryid: categoryid
        },
        dataType: "json",
        success: function (info) {
          console.log(info);

          //功能3：面包屑导航商品名称渲染
          $.ajax({
            url: "http://127.0.0.1:9090/api/getproductlist",
            type: "get",
            data: {
              categoryid: categoryid,
              pageid: 1
            },
            dataType: "json",
            success: function (info) {
              console.log(info);
              var htmlStr = template("productNameTmp", info);
              $(".mmm-main .title .cate").next().html(htmlStr);
            }
          })


          var htmlStr = template("secondNavTmp", info);
          $(".mmm-main .title").html(htmlStr);
        }
      })


      var htmlStr = template("productTmp", info);
      $(".product").html(htmlStr);
    }
  })


//获取categoryId函数
  function getCateId(info) {
    var result = info.result;
    //console.log(result);
    var obj = result[0];
    //console.log(obj);
    for (var key in obj) {
      if (key == "categoryId") {
        //console.log(key);
        return obj[key];
        //console.log(obj[key]);
      }
    }
  }


//功能4：商品评论渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getproductcom",
    get: "type",
    data: {
      productid: productid,
    },
    dataType: "json",
    success: function(info){
      console.log(info);
      var htmlStr = template("commTmp",info);
      $(".mmm-main .commonList").html(htmlStr);
    }
  })


})