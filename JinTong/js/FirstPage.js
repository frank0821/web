			// 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('line-text'));

// 异步数据加载
//       $.get('data.json').done(function (data) {
//		myChart.setOption({
//			title: {
//				text: '异步数据加载示例'
//			},
//			tooltip: {},
//			legend: {
//				data:['销量']
//			},
//			xAxis: {
//				data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//			},
//			yAxis: {},
//			series: [{
//				name: '销量',
//				type: 'bar',
//				data: [5, 20, 36, 10, 10, 20]
//			}]
//		});
//	});


// 指定图表的配置项和数据
      var option = {

tooltip: {
	trigger: 'axis'
},
// legend: {
// 	data:['成交','预购','意向']
// },
grid: {
	left: '1%',
	right: '1%',
	bottom: '1%',
	containLabel: true
},
toolbox: {
	feature: {
		saveAsImage: {}
	}
},
xAxis: {
	type: 'category',
	boundaryGap: false,
	data: ['2018-05-23','2018-05-24','2018-05-25','2018-05-26','2018-05-27','2018-05-28','2018-05-29']
},
yAxis: {
	type: 'value'
},
series: [
	{
		name:'成交',
		type:'line',
itemStyle: {
	normal: {
		color: "green",
		lineStyle: {
			color: "green"
		}
	}
},
		stack: '总量',
		data:[120, 132, 101, 134, 90, 230, 210]
	},
	
	{
		name:'预购',
		type:'line',
		itemStyle: {
			normal: {
				color: "blue",
				lineStyle: {
					color: "blue"
				}
			}
		},
		stack: '总量',
		data:[220, 182, 191, 234, 290, 330, 310]
	},
	
	{
		name:'意向',
		type:'line',
		itemStyle: {
			normal: {
				color: "red",
				lineStyle: {
					color: "red"
				}
			}
	},
		stack: '总量',
		data:[150, 232, 201, 154, 190, 330, 400]
	}

]
};

	// 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


$("#line-text>div:first").css("width","100%")
$("#line-text>div:first>canvas").css("width","100%")
// console.log($("body").height())