window.onload=function(){
//头部开始
let shop_car=document.querySelector("#shop-car > div");
let shop=document.querySelector("#shop-car");
//console.log(shop,shop_car);
shop.onmouseover=function(){
//	shop_car.style.display="block"
	shop_car.style.height="100px"
	shop_car.style.boxShadow="0 15px 15px rgba(0,0,0,0.1)"
	shop_car.style.color="rgba(0,0,0,.6)"
	shop.style.background="white"
	shop.style.color="rgb(255,103,0)"
}

shop.onmouseleave=function(){
//	shop_car.style.display="none"
	shop_car.style.height="0"
	shop_car.style.boxShadow="none"
	shop.style.background="rgb(66,66,66)"
	shop.style.color="rgb(176,176,176"
}
//头部结束


//导航栏开始
let nav_all=document.querySelector("#nav-select")
let nav=document.querySelectorAll("#nav-select>li")
let nav_lists=document.querySelector(".nav-list")
let nav_list=document.querySelectorAll(".nav-list")
console.log(nav_list)
for(let i=0;i<nav.length-2;i++)
{
	
	nav[i].onmouseover=function(){
		for(let j=0;j<nav.length-2;j++)
		{
			nav_list[j].style.borderTop="solid 1px rgba(245,245,245,0)"
			nav_list[j].style.display="none"
			nav_list[j].style.boxShadow="0 0 0px rgba(215,215,215,0)";
//			nav_list[j].style.opacity=0;
//			nav_list[j].style.zIndex=9;
		}
		
		nav_list[i].style.borderTop="solid 1px rgba(245,245,245,0.6)"
//		nav_list[i].style.height="230px";
		nav_list[i].style.display="flex"
//		nav_list[i].style.opacity=1;
		nav_list[i].style.boxShadow="0 15px 15px rgba(0,0,0,0.1)"
//		nav_list[i].style.zIndex=10;
		
	}
//	nav_all.onmouseover=function(){nav_list[i].style.height="230px"}
	
	
	nav[i].onmouseout=function(){
//		nav_list[i].style.height="0";
		
//		nav_list[i].style.opacity=0;
		nav_list[i].style.boxShadow="0 0 0px rgba(215,215,215,0)";
		nav_list[i].style.borderTop="solid 1px rgba(245,245,245,0)"
		nav_list[i].style.zIndex=9;
		nav_list[i].style.display="none"
	}
//	nav_all.onmouseout=function(){nav_list[i].style.height="0px"}
}
//导航栏结束




//垂直选项卡开始
let main_select=document.querySelectorAll(".main-select")
let main_list=document.querySelectorAll(".main-list")
console.log(main_list,main_select)
for(let i=0;i<main_select.length;i++)
{
	main_select[i].onmouseover=function(){
		for(let j=0;j<main_select.length;j++)
		{
			main_select[j].style.background="rgba(0,0,0,0)";
			main_list[j].style.display="none";
			main_list[j].style.boxShadow="1px 1px 5px rgba(0,0,0,0)";
			main_list[j].style.border="solid 1px rgba(245,245,245,0)"
		}
		main_select[i].style.background="rgba(255,103,0,1)";
		main_list[i].style.display="flex";
		main_list[i].style.boxShadow="0 15px 15px rgba(0,0,0,0.1)";
		main_list[i].style.border="solid 1px rgba(245,245,245,0.8)"
	}
	main_select[i].onmouseout=function(){
		main_select[i].style.background="rgba(0,0,0,0)";
		main_list[i].style.display="none";
		main_list[i].style.boxShadow="1px 1px 5px rgba(0,0,0,0)";
		main_list[i].style.border="solid 1px rgba(245,245,245,0)"
	}
}

//垂直选项卡结束




//banner开始
let num=0;
let banner=document.querySelector("#main-banner")
let banner_list=document.querySelectorAll(".main-bg")
let banner_bts=document.querySelectorAll("#main-circle>div")
let banner_left=document.querySelector(".banner-left")
let banner_right=document.querySelector(".banner-right")



banner_list[0].style.opacity=0;
banner_bts[0].style.background="#fff"
banner_list[0].style.zIndex=2
for(let i=0;i<banner_list.length;i++)
{
	banner_bts[i].onmouseover=function(){
		for(let j=0;j<banner_list.length;j++)
		{
			
			banner_list[j].style.opacity=0;
			banner_bts[j].style.background="rgb(0,0,0,0.6)"
			banner_list[j].style.zIndex=1;
		}
		
		banner_list[i].style.opacity=1;
		banner_bts[i].style.background="#fff"
		banner_list[i].style.zIndex=2;
		num=i;
	}
}


let t=setInterval(move,2000)
	function move()
	{
		num++;
		if(num==5) num=0;
		for(let i=0;i<banner_list.length;i++)
		{
			
			banner_list[i].style.opacity=0;
			banner_bts[i].style.background="rgb(0,0,0,0.6)";
			banner_list[i].style.zIndex=1;
		}
		
		banner_list[num].style.opacity=1;
		banner_bts[num].style.background="#fff";
		banner_list[num].style.zIndex=2;
	
	}
	
	
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	
	banner.onmouseout=function(){
		t=setInterval(move,2000);
	}
	banner_right.onmouseover=function(){
		clearInterval(t);
	}
	banner_left.onmouseover=function(){
		clearInterval(t);
	}
	banner_right.onmouseout=function(){
		t=setInterval(move,2000);
	}
	banner_left.onmouseout=function(){
		t=setInterval(move,2000);
	}


banner_right.onclick=function(){move();}
banner_left.onclick=function(){move_reverse()}


function move_reverse()
{
	num--;
	if(num<0) num=4;
	for(let i=0;i<banner_list.length;i++)
	{
		
		banner_list[i].style.opacity=0;
		banner_bts[i].style.background="rgb(0,0,0,0.6)";
		banner_list[i].style.zIndex="1";
	}

	banner_list[num].style.opacity=1;
	banner_bts[num].style.background="#fff"	
	banner_list[num].style.zIndex="2";
}


window.onblur=function(){
	clearInterval(t)
}

window.onfocus=function(){
	setInterval(move(),2000)
}
//banner结束



//内容选项卡开始

let section_word=document.querySelectorAll("#sectionwords")
let section_list=document.querySelectorAll(".section-list")
console.log(section_list)


	section_list[1].style.display="flex";
	section_word[0].style.color="rgb(255,103,0)";
	section_word[0].style.borderBottom="1px solid rgb(255,103,0)"
for(let i=0;i<4;i++)
{
	
	
	section_word[i].onmouseover=function(){
		for(let j=0;j<4;j++)
		{
			section_list[j+1].style.display="none";
			section_word[j].style.color="black";
			section_word[j].style.border="none";
		}
		section_list[i+1].style.display="flex";
		section_word[i].style.color="rgb(255,103,0)"
		section_word[i].style.borderBottom="1px solid rgb(255,103,0)"
	}
	
}

section_list[5].style.display="flex";
	section_word[4].style.color="rgb(255,103,0)";
	section_word[4].style.borderBottom="1px solid rgb(255,103,0)"
for(let i=4;i<8;i++)
{
	section_word[i].onmouseover=function(){
		for(let j=4;j<8;j++)
		{
			section_list[j+1].style.display="none";
			section_word[j].style.color="black";
			section_word[j].style.border="none";
		}
		section_list[i+1].style.display="flex";
		section_word[i].style.color="rgb(255,103,0)";
		section_word[i].style.borderBottom="1px solid rgb(255,103,0)"
	}
	
}

//内容选项卡结束



//秒杀滑动开始

let miaosha_button=document.querySelectorAll("#miaosha > div:first-child > div >button")
let miaosha=document.querySelectorAll(".miaosha-class")
let miaosha1=document.querySelector(".miaosha-class")
let miaosha_widths=parseInt(getComputedStyle(miaosha1,null).width) 
console.log(miaosha_widths)
let before=0;
let after=0;

if(after==0) {
		after=0;
		miaosha_button[0].style.color="rgba(0,0,0,0.1)"
		}

miaosha_button[1].onclick=function(){
	after++;
	if(after>=miaosha.length){
		after=miaosha.length-1;
		miaosha_button[1].style.color="rgba(0,0,0,0.1)"
		miaosha_button[0].style.color="rgba(0,0,0,1)"
		return
	}
	miaosha[before].style.left=0;
	miaosha[after].style.left=miaosha_widths+"px";
	animate(miaosha[before],{left:-miaosha_widths})
	animate(miaosha[after],{left:0})
	miaosha_button[0].style.color="rgba(0,0,0,1)"
	before=after;
	
	console.log(before,after)
}

miaosha_button[0].onclick=function(){
	after--
	if(after<0) {
		after=0;
		miaosha_button[0].style.color="rgba(0,0,0,0.1)"
		miaosha_button[1].style.color="rgba(0,0,0,1)"
		return
	}
	miaosha[before].style.left=0;
	miaosha[after].style.left=-miaosha_widths+"px";
	animate(miaosha[before],{left:miaosha_widths})
	animate(miaosha[after],{left:0})
	miaosha_button[1].style.color="rgba(0,0,0,1)"
	before=after;
	
	console.log(before,after)
}




//秒杀结束



//哈利波特开始
	let container1=document.querySelectorAll(".container-list:first-child>div")
	let container=document.querySelector(".container-list")
	let container_bts1=document.querySelectorAll(".container-list:first-child>button")
	let container_width= parseInt(getComputedStyle(container,null).width)
	let container_circle1=document.querySelectorAll(".container-list:first-child>ul>li")
	Harrypotter(container1,container_bts1,container_circle1,container_width)
	
//	
	let container2=document.querySelectorAll(".container-list:nth-child(2)>div")
	let container_bts2=document.querySelectorAll(".container-list:nth-child(2)>button")
	let container_circle2=document.querySelectorAll(".container-list:nth-child(2)>ul>li")
	Harrypotter(container2,container_bts2,container_circle2,container_width)
//
	let container3=document.querySelectorAll(".container-list:nth-child(3)>div")
	let container_bts3=document.querySelectorAll(".container-list:nth-child(3)>button")
	let container_circle3=document.querySelectorAll(".container-list:nth-child(3)>ul>li")
	Harrypotter(container3,container_bts3,container_circle3,container_width)
//
	let container4=document.querySelectorAll(".container-list:nth-child(4)>div")
	let container_bts4=document.querySelectorAll(".container-list:nth-child(4)>button")
	let container_circle4=document.querySelectorAll(".container-list:nth-child(4)>ul>li")
	Harrypotter(container4,container_bts4,container_circle4,container_width)

//哈利波特结束



//横向平移开始
let recommand_list=document.querySelector(".recommand-list>div")
let recommand_button=document.querySelectorAll("#recommand>div:first-child>div>button")
let recommand_width=parseInt(getComputedStyle(recommand_list,null).width)/3;
console.log(recommand_list,recommand_button,recommand_width)
let k=0;
recommand_button[1].onclick=function(){
	k++;
	if(k==3){
		k=2;
		recommand_button[1].style.color="rgba(0,0,0,0.1)"
		return
	}
	recommand_button[0].style.color="rgba(0,0,0,1)"
	recommand_list.style.transform="translateX("+(-recommand_width*k)+"px)";
}

recommand_button[0].onclick=function(){
	k--;
	if(k<0){
		k=0;
		recommand_button[0].style.color="rgba(0,0,0,0.1)"
		return;
	}
	recommand_button[1].style.color="rgba(0,0,0,1)"
	recommand_list.style.transform="translateX("+(-recommand_width*k)+"px)";
}
//横向平移结束
}