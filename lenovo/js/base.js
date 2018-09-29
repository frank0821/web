window.onload=function(){
	
//	轮播图
	let banner=document.querySelector(".banner")
	let banner_list=document.querySelectorAll(".lunbo>a")
	let buttons=document.querySelectorAll(".button>a")
	let circle=document.querySelectorAll(".circle>div")
	console.log(banner,banner_list,buttons,circle)
	Banner(banner,banner_list,buttons,circle)
	


//滚动时事件
	
	//导航栏定位
	let body=document.querySelector("body")
	let imgs=document.querySelector(".tm")
	let nav=document.querySelector(".nav")
	let rightside=document.querySelector(".floatlist2")
	let leftside=document.querySelector(".floatlist1")
	let leftsides=document.querySelectorAll(".floatwords1")
	Navscroll(body,imgs,nav,leftside,rightside,leftsides)


	
	let main_select=document.querySelectorAll(".listinner")
	let main_list=document.querySelectorAll(".listinner>div")
	Selector(main_select,main_list)
	
	
	
	
	let spans=document.querySelectorAll(".jinrimiaosha >span");
	console.log(spans)
	let future=new Date();
		future.setHours(23,59,59);
	let futuretime=future.getTime()
	let t=setInterval(function(){
		let nowday=new Date();
		let nowtime=nowday.getTime();
		let times=Math.round((futuretime-nowtime)/1000)
		let minute= Math.floor(times/60%60)
		let hour= Math.floor(times/60/60%24)
		let second=Math.floor(times%60)
		console.log((spans[2]).innerHTML)
		// console.log(day,hour,minute,second)
		
		spans[0].innerHTML=hour;
		spans[1].innerHTML=minute;
		spans[2].innerHTML=second
		spans.forEach((time1,indx)=>{
			if(indx==0&&time1.innerHTML<10) spans[0].innerHTML="0"+hour;
			if(indx==1&&time1.innerHTML<10) spans[1].innerHTML="0"+minute;
			if(indx==2&&time1.innerHTML<10) spans[2].innerHTML="0"+second;
			
		})
		
		
		
		if(spans[0]==0&&spans[1]==0&&spans[2]==0) clearInterval(t)
		
	},1)

		


}



