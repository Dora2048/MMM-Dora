/**
 * Created by me on 2018/10/12.
 */
$(function () {
//区域滚动
  //纵向
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });


  //横向
  mui('.mui-scroll-wrapper-cross').scroll({
    deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    options: {
      scrollY: false, //是否竖向滚动
      scrollX: true //是否横向滚动
    }
  });

})


//获取地址栏参数的封装
function getSearch() {
//获取地址栏全部地址
  var search = location.search;
  //console.log(search);   //?key=%E5%8C%A1%E5%A8%81
  // 解码为中文
  search = decodeURI(search);  //decodeURI 将转码后的中文解码
  //console.log(search);   //?key=匡威
  //去掉?
  search = search.slice(1);
  //用&切割
  var arr = search.split("&");
  var obj = {};
  //遍历数组，转为对象
  arr.forEach(function (item, index) {
    var key = item.split("=")[0];
    var value = item.split("=")[1];
    obj[key] = value;
  })
  //一般我们需要的是value,返回value即可
  return obj;
}

