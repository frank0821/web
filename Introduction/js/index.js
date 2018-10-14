
// 第二页效果
$(".page-when li").click(function(){
	$(".page-when.active .blacks").css({"transform":"scale(1,1)","opacity":"1"}),
	$(".page-when.active ul").css({"filter":"blur(10px)"}),
	$(".page-when.active .blacks p").css("opacity",1).html($(this).children("span").html())
	$(".page-when.active .blacks img").attr("src",$(this).children("img").attr("src")).css({"width":$(this).children("img").width()*3,"height":$(this).children("img").height()*3})
	$(".slide-show").css({"filter":"blur(10px)"}),
	$(".header").css({"filter":"blur(10px)"}),
	$(".p-footer").css({"filter":"blur(10px)"}),
	$(".nav-left").css({"filter":"blur(10px)"}),
	$(".header-top").css({"filter":"blur(10px)"}),
	$(".page-footer").css({"filter":"blur(10px)"})
})

$(".blacks button").click(function(){
	$(".slide-show").css({"filter":"blur(0px)"}),
	$(".page-footer").css({"filter":"blur(0px)"})
	$(".header-top").css({"filter":"blur(0px)"})
	$(".nav-left").css({"filter":"blur(0px)"})
	$(".header").css({"filter":"blur(0)"}),
	$(".p-footer").css({"filter":"blur(0px)"}),
	$(".page-when.active .blacks").css({"transform":"scale(0,0)","opacity":"0"})	
	// $(".page-when.active .blacks p").css({"opacity":0)}.html($(""))
	$(".page-when.active ul").css({"filter":"blur(0)"}),
	$(".page-when.active .blacks img").animate({"width":0,"height":0},slow).attr("src","")

	
})

setInterval(function(){
	if($(".page-when").hasClass("active")!=true)
	{
		$(".header").css({"filter":"blur(0)"}),
		$(".page-footer").css({"filter":"blur(0px)"})
		$(".header-top").css({"filter":"blur(0px)"})
		$(".nav-left").css({"filter":"blur(0px)"})
		$(".slide-show").css({"filter":"blur(0)"}),
		$(".p-footer").css({"filter":"blur(0)"}),
		// $(".page-when. .blacks p").css("opacity",0).html($(""))
		$(".blacks img").attr("src","").css({"width":0,"height":0,"transition":0})
		$(".page-when .blacks").css({"transform":"scale(0,0)","opacity":"0","transition":0}),
		$(".page-when ul").css({"filter":"blur(0)"})
		
	}
},1)
	


// 第三页效果
 var i=0;
 var menuButton = document.querySelector('.swiper-slide .menu-button');
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        init: function () {
          var slider = this;
		  $(".swiper-slide .menu-button").triggerHandler("click")
          menuButton.addEventListener('click', function () {
			  // console.log(slider.activeIndex)
//             if (slider.activeIndex === 0) {
//               slider.slideNext();
//             } else {
//               slider.slidePrev();
//             }
		   if (i === 1) {
		     slider.slideNext();
			 i=0;
		   } else {
		     slider.slidePrev();
			 i=1;
		   }

          }, true);
        },
        slideChange: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
          } else {
            menuButton.classList.remove('cross');
          }
        },
      }
    });
	
	
	
	
	
	console.log("a")
	let urls=["https://frank0821.github.io/web/MI/index.html",
			"https://frank0821.github.io/web/lenovo/lenovo.html",
			"https://frank0821.github.io/web/JinTong/FirstPage.html",
			"https://frank0821.github.io/web/Suxinhuahui/index.html",
			"https://frank0821.github.io/web/hungry/index.html",
			"https://frank0821.github.io/web/weatherlive/index.html"
			]
	let colors=["rgba(255,103,0,.8)","rgba(229,31,5,.8)","rgba(140,200,255,.8)","rgba(200,175,200,.8)","rgba(57,160,255,.8)","rgba(145,174,45,.8)"]
	$(".page-about .swiper-slide.menu h4").click(function(){
		console.log($(this).index())
		$(this).css({"background":colors[$(this).index()],"color":"white","font-size":"22px"}).siblings().css({"background":"rgba(0,0,0,.4)","color":"rgba(255,255,255,.6)","font-size":"20px"})
		$(".page-about iframe").attr("src",urls[$(this).index()])
		$(".iframe-button").attr("href",urls[$(this).index()])
	})
	
	$(".page-about .swiper-slide.menu h4").triggerHandler("click")
	
	
	
	
	
	
	//第四页
	
var myChart1 = echarts.init(document.getElementById('chart1'));

    // 指定图表的配置项和数据
    var option = {
//     title : {
//         text: '设计软件',
// //         subtext: '纯属虚构',
//         x:'center'
//     },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//     },
    textStyle:{
    	fontSize: 18,
    	backgroundColor:'transparent',
    	color:'rgba(255,255,255,.8)'
    },
	series : [
        {
            name: '设计软件',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:35, name:'PhotoShop'},
                {value:35, name:'Premiere'},
                {value:10, name:'AfterEffects'},
				{value:20, name:'Axure'}
                
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

    // 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option);





var myChart3 = echarts.init(document.getElementById('chart3'));

    // 指定图表的配置项和数据
    var option = {
//     title : {
//         text: '办公软件',
//         // subtext: '纯属虚构',
//         x:'center'
//     },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//     },
	textStyle:{
		fontSize: 18,
		backgroundColor:'transparent',
		color:'rgba(255,255,255,.8)'
	},
    series : [
        {
            name: '办公软件',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:30, name:'Word'},
                {value:30, name:'Excel'},
                {value:40, name:'PowerPoint'},
				// {value:20, name:'Axure'}
                
            ],
			
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

    // 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option);





var myChart2 = echarts.init(document.getElementById('chart2'));

    // 指定图表的配置项和数据
    var option = {
//     title: {
//         text: '前端技能',
// 		x:'center',
// 		y:'top'
//     },
    tooltip: {
		 trigger: 'axis'
	},
//     legend: {
//         data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
//     },
    textStyle:{
		fontSize: 18,
		backgroundColor:'transparent',
		color:'rgba(255,255,255,.8)'
	},
	radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: 'rgba(255,255,255,.8)',
                backgroundColor: 'transparent',
                borderRadius: 3,
                padding: [3, 5],
				fontSize: 18,
           },
		   
        },
        indicator: [
           { name: 'HTML', max: 100},
           { name: 'CSS', max: 100},
           { name: 'JAVASCRIPT', max: 100},
           { name: 'JQUERY', max: 100},
           { name: 'PHP', max: 100},
           // { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '前端技能',
        type: 'radar',
        areaStyle: {normal: {}},
        data : [
            {
                value : [90, 85, 80, 80, 70],
                name : ''
            },
//              {
//                 value : [5000, 14000, 28000, 31000, 42000, 21000],
//                 name : '实际开销（Actual Spending）'
//             }
        ]
    }]
};

    // 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option);

$(".page-contact .chart canvas").css({"width":"600px","height":"430px"})