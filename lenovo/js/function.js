
//轮播图
function Banner(banner,banner_list,buttons,circle)
{
	
//	初始值
	banner_list[0].style.opacity=1
	circle[0].style.background="white"
	banner_list[0].style.zIndex=2
	let num=0;
	
//	鼠标单击轮播点
	circle.forEach((cirk,i)=>{
		cirk.onclick=function(){
			circle.forEach((cirk2,j)=>{
				banner_list[j].style.opacity=0
				cirk2.style.background="rgba(0,0,0,0.6)"
				banner_list[j].style.zIndex=1
			})
			banner_list[i].style.opacity=1
			cirk.style.background="white"
			banner_list[i].style.zIndex=2
			num=i;
		}
	})
	
	
//	鼠标单击右箭头
	buttons[1].onclick=next;
	
	
//	鼠标单击左箭头
	buttons[0].onclick=back;


//	自动播放
	let times=setInterval(next,2000)


//	移入停止
	banner.onmouseover=function(){
		clearInterval(times)
	}
	
	
//	移出继续
	banner.onmouseout=function(){
		times=setInterval(next,2000)
	}


//	向后移动函数
	function next()
	{
		num++;
		if(num>=banner_list.length) num=0;
		banner_list.forEach((val,index)=>{
			val.style.opacity=0;
			circle[index].style.background="rgba(0,0,0,0.6)"
			val.style.zIndex=1
		})
		banner_list[num].style.opacity=1;
		circle[num].style.background="white";
		banner_list[num].zIndex=2;
	}
	
	
	
	
//	向前移动函数
	function back()
	{
		num--;
		if(num<0) num=banner_list.length-1;
		banner_list.forEach((val,index)=>{
			val.style.opacity=0;
			circle[index].style.background="rgba(0,0,0,0.6)"
			val.style.zIndex=1
		})
		banner_list[num].style.opacity=1;
		circle[num].style.background="white";
		banner_list[num].zIndex=2;
	}

}


//滚动时集体
	function Navscroll(body,imgs,nav,leftside,rightside,leftsides)
	{	
		let bodyheight=body.offsetHeight
		let navtop=nav.offsetTop
		let longimg=imgs.getAttribute("src");
		let shortimg=imgs.getAttribute("imgsrc")
		
		let content=document.querySelector(".content")
		let content2=document.querySelectorAll(".content2")
		let bottomimg=document.querySelector(".bottomimg")
		
		
//		侧边栏鼠标悬停
//		leftsides.forEach((vals,indexs)=>{
//			vals.onmouseover=function(){
//				left_remove();
//				if(indexs==0)
//				{
//					vals.setAttribute("style","")
//					vals.classList.remove("iconfont")
//					vals.classList.remove("icon-xingxing")
//					vals.classList.remove("floatwords1")
//					vals.classList.add("left-active")
//					vals.innerHTML="闪购"
//				}
//				else {
//					vals.classList.remove("floatwords1")
//					vals.classList.add("left-active")
//					vals.innerHTML="Lenove 电脑"
//					if(indexs==1) vals.innerHTML="Lenove 电脑"
//					else if(indexs==2) vals.innerHTML="手机产品"
//					else if(indexs==3) vals.innerHTML="Think 电脑"
//					else if(indexs==4) vals.innerHTML="平板电脑"
//					else if(indexs==5) vals.innerHTML="选件"
//					else if(indexs==6) vals.innerHTML="服务"
//				}
//			
//			}
//			
//			vals.onmouseout=function(){
//				left_remove();
//				
//			}
//		
//		})
		
		
		
		
		
		window.onscroll=function(){
			
//			滚动时整体效果
			let bodytop=document.documentElement.scrollTop||document.body.scrollTop
			let lefts=document.querySelector(".floorcontent").offsetLeft
			leftside.style.left=lefts-60+"px"
			
		
			if(bodytop>=navtop)
			{	
				imgs.setAttribute("src",shortimg);
				imgs.setAttribute("imgsrc",longimg)
				imgs.classList.add("tm1")
				imgs.classList.remove("tm")
				nav.classList.add("nav-active")
			}
			
			if(bodytop<navtop)
			{	
				imgs.setAttribute("imgsrc",shortimg);
				imgs.setAttribute("src",longimg)
				imgs.classList.add("tm")
				imgs.classList.remove("tm1")
				nav.classList.remove("nav-active")
			}
			
			
//			左边导航栏事件
			if((bodytop>=navtop+406)&&(bodytop+window.innerHeight<=bodyheight-577))
			{
				leftside.style.display="block"
			}
			
			else{
				leftside.style.display="none"
			}
			
			
//			右边导航栏事件
			if((bodytop+window.innerHeight<=bodyheight-577)&&(bodytop>=navtop))
			{
				rightside.style.display="block"
			}
			
			else{
				rightside.style.display="none"
			}
		
		
		
//			滚动时侧边栏效果
			if(bodytop+50>=content.offsetTop && bodytop<content2[0].offsetTop)
			{
				left_remove()
				leftsides[0].setAttribute("style","")
				leftsides[0].classList.remove("iconfont")
				leftsides[0].classList.remove("icon-xingxing")
				leftsides[0].classList.remove("floatwords1")
				leftsides[0].classList.add("left-active")
				leftsides[0].innerHTML="闪购"
			}
			
			
			if(bodytop+100>=content2[0].offsetTop && bodytop<content2[1].offsetTop)
			{
				left_remove()
				leftsides[1].classList.remove("floatwords1")
				leftsides[1].classList.add("left-active")
				leftsides[1].innerHTML="Lenove 电脑"
			}
			
			
			if(bodytop+100>=content2[1].offsetTop && bodytop<content2[2].offsetTop)
			{
				left_remove()
				leftsides[2].classList.remove("floatwords1")
				leftsides[2].classList.add("left-active")
				leftsides[2].innerHTML="手机产品"
			}
			
			
			if(bodytop+100>=content2[2].offsetTop && bodytop<content2[3].offsetTop)
			{
				left_remove()
				leftsides[3].classList.remove("floatwords1")
				leftsides[3].classList.add("left-active")
				leftsides[3].innerHTML="Think 电脑"
			}
			
			if(bodytop+100>=content2[3].offsetTop && bodytop<content2[4].offsetTop)
			{
				left_remove()
				leftsides[4].classList.remove("floatwords1")
				leftsides[4].classList.add("left-active")
				leftsides[4].innerHTML="平板电脑"
			}
			
			
			if(bodytop+100>=content2[4].offsetTop && bodytop<content2[5].offsetTop)
			{
				left_remove()
				leftsides[5].classList.remove("floatwords1")
				leftsides[5].classList.add("left-active")
				leftsides[5].innerHTML="选件"
			}
			
			
			if(bodytop+100>=content2[5].offsetTop && bodytop<bottomimg.offsetTop)
			{
				left_remove()
				leftsides[6].classList.remove("floatwords1")
				leftsides[6].classList.add("left-active")
				leftsides[6].innerHTML="服务"
			}
			
			
//			侧边栏点击效果
			leftsides.forEach((val1,index1)=>{
				
				val1.onclick=function(){
					
					if(index1==0) animate(document.documentElement,{scrollTop:content.offsetTop-80})
					
					else animate(document.documentElement,{scrollTop:(content2[index1-1].offsetTop-80)})
					console.log("haha")
				}
				
				
				
			})
		
		}
		
		




//		左边栏隐藏效果
		function left_remove()
			{
				leftsides.forEach((val,index)=>{
					val.classList.remove("left-active")
					
					if(index==0) 
					{
						val.setAttribute("style","font-size: 20px")
						val.classList.add("iconfont")
						val.classList.add("icon-xingxing")
						val.classList.add("floatwords1")
						val.innerHTML=""
						
					}
					
					else {
						val.classList.add("floatwords1")
						val.innerHTML=index+"F"
					}
				})
			}
	
		

	
	
	}


//	选项卡
	function Selector(main_select,main_list)
	{
		
	
		for(let i=0;i<main_select.length;i++)
		{
			main_select[i].onmouseover=function(){
				for(let j=0;j<main_select.length;j++)
				{
					main_list[j].style.display="none";
				}
				main_list[i].style.display="flex";
			}
			main_select[i].onmouseout=function(){
				main_list[i].style.display="none";
			}
		}
	
	}