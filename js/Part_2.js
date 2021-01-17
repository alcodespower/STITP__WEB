
function sendAjaxGet_data_set() {
  $.ajax({
    type: "GET",
    // sync: false,
    // async: false,
    url: "https://stitp.iweb365.top/nowConfirm",
    success: function (res) {
      //请求成功时执行该函数内容，result即为服务器返回的json对象
      var mydataset = JSON.parse(res)


      var Part_2 = echarts.init(document.getElementById('Part_2'), "dark");
      // var mydata =[{'name':'上海'}]
      var Part_2_option = {
        title: {
          text: '世界人口总量',
          subtext: '数据来自网络'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

        legend: {
          data: ['2011年', '2012年']
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },

        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },

        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },

        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      };
      Part_2.setOption(Part_2_option);
    },
    error: function (errorMsg) {
      //请求失败时执行该函数
      alert("图表请求数据失败!");
    }
  })
}
sendAjaxGet_data_set()
setInterval(sendAjaxGet_data_set, 1000 * 30);