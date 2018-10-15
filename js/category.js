/**
 * Created by me on 2018/10/12.
 */
$(function () {
  //功能1：进入页面渲染一级分类页面
  $.ajax({
    url: "http://127.0.0.1:9090/api/getcategorytitle",
    type: "get",
    dataType: "json",
    success: function (info) {
      console.log(info);
      var htmlStr = template("firstCateTmp", info);
      $(".mmm-main .category-title").html(htmlStr);
    }
  })


  //功能2：点击一级分类目录，渲染二级分类
  $(".mmm-main .category-title").on("click", ".first", function () {
    //点击时获取当前li的id
    var titleId = $(this).data("id");
    console.log(titleId);
    var that = $(this);
    //通过切换类名实现隐藏显示
    $(this).find(".category-content").toggleClass("current");
    $.ajax({
      url: "http://127.0.0.1:9090/api/getcategory",
      type: "get",
      data: {
        titleid: titleId
      },
      dataType: "json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("secondCateTmp", info);
        console.log(titleId);
        that.find('ul').html(htmlStr);
        //console.log($('div[data-id='+titleId+']'))
      }
    })
  })



})

