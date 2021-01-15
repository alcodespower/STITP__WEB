var ec_center = echarts.init(document.getElementById('c2'), "dark");
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
            color: '#fff',
            fontSize: 12,
            
        },
        splitList: [{
            start: 1,
            end: 9
        },
            {
                start: 10,
                end: 99
            },
            {
                start: 100,
                end: 999
            },
            {
                start: 1000,
                end: 9999
            },
            {
                start: 10000
            },
        ],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '当前确诊人数',
        type: 'map',
        mapType: 'china',
        drawOutOfBound:true,
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
                areaColor: '#fff',
            },
            textStyle: {
                color: '#fff',
                fontSize: 12
            }

        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 12,
            },
            emphasis: {
                show: true,
                fontSize: 12,
                color: '#fff'
            },
            textStyle: {
                color: '#fff',
                fontSize: 12,
                
            }
        },
        data: [] //数据
    }]
};
ec_center.setOption(ec_center_option)
