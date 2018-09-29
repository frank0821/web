$.ajax({
	type:"get",
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	success:function(obj){
		weather=obj.data
		console.log(weather)
		update(weather)
	}
})
	
function update(weather)
{
	// 位置
	$(".header1>h3").html("<div class='iconfont icon-weizhi weizhi'></div>"+ weather.city)
	// 空气情况
	$(".header2>div>span").html(weather.weather.quality_level)
	// 温度
	$(".header3>h2").html('&nbsp;'+weather.weather.current_temperature +"°")
	// 天气状况
	$(".header3>h4").html(weather.weather.current_condition)
	// 湿度
	$(".header3>p>span").html(weather.weather.aqi)
	
	
	// 今天天气
	$(".today>div:first>span").html(weather.weather.dat_condition)
	$(".today>div:last>p").html(weather.weather.dat_high_temperature+"/"+weather.weather.dat_low_temperature+"°C")
	$(".today>div:last>img").attr("src","img/"+weather.weather.dat_weather_icon_id+".png")
	
	// 明天天气
	$(".tomorrow>div:first>span").html(weather.weather.tomorrow_condition)
	$(".tomorrow>div:last>p").html(weather.weather.tomorrow_high_temperature+"/"+weather.weather.tomorrow_low_temperature+"°C")
	$(".tomorrow>div:last>img").attr("src","img/"+weather.weather.tomorrow_weather_icon_id+".png")
	
	
	let hour_condition=weather.weather.hourly_forecast
	hour_condition.forEach((val,index)=>{
		let str=`<li>
					<h6>${val.hour}:00</h6>
					<img src="img/${val.weather_icon_id}.png" alt="">
					<span>${val.temperature}°</span>
				</li>`
		$("menu>ul").append(str)
				
	})
	
	
	
	
		
	let forecast=weather.weather.forecast_list
	forecast.forEach((v,i)=>{
		
// 		dates_num=v.date.getDay()
// 		let week
// 		Dates(dates_num)
// 		function Dates(num)
// 		{
// 			switch(num)
// 			{
// 				case 0:week="星期天";break;
// 				case 1:week="星期一";break;
// 				case 2:week="星期二";break;
// 				case 3:week="星期三";break;
// 				case 4:week="星期四";break;
// 				case 5:week="星期五";break;
// 				case 6:week="星期六";break;
// 			}
// 		}
		v.date=v.date.slice(5).replace("-","/")
		let str=`<li>
				<h4></h4>
				<h5>${v.date}</h5>
				<h3>${v.condition}</h3>
				<img src="img/${v.weather_icon_id}.png" alt="">
				<span>${v.high_temperature}°</span>
				<span>${v.low_temperature}°</span>
				<img src="img/${v.weather_icon_id}.png" >
				<h3>${v.condition}</h3>
				<h5>${v.wind_direction}</h5>
				<h4>${v.wind_level}</h4>
			</li>`
		$("content>ul").append(str)
	})
	
}
	
	
	
	
// 搜索页项目开始	

$(".header1>h3").click(function(){
	$("article").css({"display":"block"})
	$(".page1").css("display","none")
	$("article > section > ul> span").click(function(){
		$("body,html").animate({scrollTop:$(".search-container>div>span").eq($(this).index()).offset().top-70},500)
		console.log($(".search-container>div>h4").eq($(this).index()).offset().top)
	})
	
	$(".search-container > ul > li").click(function(){
		let con=$(this).html()
		ajaxs(con)
		$("article").css({"display":"none"}).prev().css({"display":"block"}),
		$("body,html").animate({"scrollTop":0},0)
		$("menu>ul").html("")
		$("content>ul").html("")
	})
	$("input").focus(function(){
		$("button").html("搜索")
	})
	
})

$.ajax({
	type:"get",
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	success:function(obj){
		city=obj.data
		updateProvince(city)
		updateCity(city)
	}
	
})


function updateProvince(city)
{
	for(let i in city)
	{
		let strp=`<span>${i}</span>`
		$("article > section >ul").append(strp)
	}
}




function updateCity(city)
{
	let k=0
	for(let i in city){
		
		let strp=`<li class="search-container">
					<div>
						<h4>${i}</h4>
						<span></span>
					</div>
					<ul>
					</ul>
				</li>`
		$("article > ul").append(strp)
		for(let j in city[i])
		{
			let strc=`<li>${j}</li>`
			$(".search-container>ul").eq(k).append(strc)
		}
		k++;
	}
}




function ajaxs(str)
{
	let url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`
	$.ajax({
		type:"get",
		url:url1,
		dataType:"jsonp",
		success:function(obj){
			let tianqi2=obj.data
			update(tianqi2)
		}
	})
}


$("input").focus(function(){
	$("button").html("搜索")
})


$("input").blur(function(){
	if($("input").val()=="")
	{
		$("button").html("取消")
	}
})


$("button").click(function(){
	
	let text=$("input").val()
	// console.log($(".search-container>ul>li").val())
	if($("input").val()=="")
	{
		$("article").css({"display":"none"}).prev().css({"display":"block"})
		return
	}
	console.log(again(text))
	if(again(text))
	{	
		$("menu>ul").html("")
		$("content>ul").html("")
		ajaxs(text)
		$("article").css({"display":"none"}).prev().css({"display":"block"}),
		$("body,html").animate({"scrollTop":0},0)
	}
	else {
		alert("Wrong Location Entered , Please Type The Right Location Like: “ 上海 ” ")
		$("input").val("")
		return;
	}
	
})

function again(text)
{
	let x
	$(".search-container>ul>li").each(function(t){
		if($(".search-container>ul>li").eq(t).html()==text) return x=true;
	})
	if(x==true) return true;
	return false;
}