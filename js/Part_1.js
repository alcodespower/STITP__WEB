function sendAjaxGet_data_set() {
  $.ajax({
    type: "GET",
    sync: false,
    async: false,
    url: "https://stitp.iweb365.top/nowConfirm",
    success: function (res) {
      //请求成功时执行该函数内容，result即为服务器返回的json对象
      var mydataset = JSON.parse(res)

      if (mydataset) {
        console.log(mydataset[1])
        // var name = new Array();
        // var values = new Array();
        // for (var i = 0; i < mydataset.length; i++) {
        // 	name.push(mydataset[i].name); //挨个取出类别并填入类别数组
        // }
        // for (var i = 0; i < mydataset.length; i++) {
        // 	values.push(mydataset[i].nowConfirm); //挨个取出销量并填入销量数组
        // }
        // console.log(values)
        // console.log(name)
      }
      var ec_center = echarts.init(document.getElementById('main'), "dark");
      // var mydata =[{'name':'上海'}]
      var ec_center_option = {
        // bgColor: '#354e90',
        // backgroundColor: '#FFFFFF',
        title: {
          text: '',
          subtext: '',
          x: 'left'
        },
        tooltip: {
          trigger: 'item'
        },
        //左侧小导航图标
        visualMap: {
          show: true,
          x: 'left',
          y: 'bottom',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          },
          splitList: [{
            start: 0,
            end: 9
          },
          {
            start: 10,
            end: 199
          },
          {
            start: 200,
            end: 399
          },
          {
            start: 400,
            end: 499
          },
          {
            start: 500
          },
          ],
          color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
        },
        //配置属性
        series: [{
          name: '当前确诊人数',
          type: 'map',
          mapType: 'china',
          drawOutOfBound: true,
          roam: false, //拖动和缩放
          itemStyle: {
            normal: {
              borderWidth: .5, //区域边框宽度
              borderColor: '#009fe8', //区域边框颜色
              areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
              borderWidth: .5,
              borderColor: '#4b0082',
              areaColor: "#fff",
              fontSize: 12

            }
          },
          label: {
            normal: {
              show: true, //省份名称
              fontSize: 9,
              color: '#555555'
            },
            emphasis: {
              show: true,
              fontSize: 12,
            }
          },
          data: [] //数据
        }]
      };
      ec_center_option.series[0].data = mydataset;

      ec_center.setOption(ec_center_option)
    },
    error: function (errorMsg) {
      //请求失败时执行该函数
      alert("图表请求数据失败!");
    }
  })
}
sendAjaxGet_data_set()
setInterval(sendAjaxGet_data_set, 1000 * 30);