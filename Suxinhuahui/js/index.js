// window.onload=function(){

//	轮播图
	let container1=document.querySelectorAll("#bg-img>img")
	let container=document.querySelector("#bg-img")
	let container_bts1=document.querySelectorAll("#button>a")
	let container_width= parseInt(getComputedStyle(container,null).width)
	let container_circle1=document.querySelectorAll("#bg-img>div>div")
	let span=document.querySelectorAll("#bg-img>span")
	Banner(container1,container_bts1,container_circle1,container_width,container,span)
//	console.log(container1,container_bts1,container_circle1,container_width,container)
	
	function Banner(container,button,circle,widths,contain,span)
	{
	let now=0;
	let next=0;
	circle[next].style.background="rgba(255,255,255,.3)";
	container[next].style.left=0
	span[next].style.bottom="50px"
	
//	自动播放
	let t=setInterval(right,2000)
	contain.onmouseover=function(){
		clearInterval(t)
	}
	
	contain.onmouseout=function(){
		t=setInterval(right,2000)
	}
	
	
	button[0].onmouseover=function(){
		clearInterval(t)
	}
	
	button[0].onmouseout=function(){
		t=setInterval(right,2000)
	}
	
	button[1].onmouseover=function(){
		clearInterval(t)
	}
	
	button[1].onmouseout=function(){
		t=setInterval(right,2000)
	}
	
//	右键单击
	button[1].onclick=right
	function right()
	{
		next++;
		if(next==container.length) {next=0}
		container[now].style.left=0;
		container[next].style.left=widths+"px";
		animate(container[now],{left:-widths},function(){
			for(let i=0;i<circle.length;i++)
			{
				circle[i].style.background="rgba(0,0,0,.3)";
				container[i].style.left=widths+"px"
			}
		
		})
		animate(container[next],{left:0},function(){
			circle[next].style.background="rgba(255,255,255,.3)";
			
		})
		animate(span[now],{left:-widths,opacity:0},function(){
			for(let i=0;i<circle.length;i++)
			{
				span[i].style.left=0
				span[i].style.bottom="-40px"
			}
		})
		animate(span[next],{bottom:50,opacity:1})
		now=next;
	}


//	左键单击
	button[0].onclick=left
	function left()
	{
		next--;
		if(next<0) {next=container.length-1}
		container[now].style.left=0;
		container[next].style.left=-widths+"px";
		animate(container[now],{left:widths},function(){
			for(let i=0;i<circle.length;i++)
			{
				circle[i].style.background="rgba(0,0,0,.3)";
				
			}
		
		})
		animate(container[next],{left:0},function(){
			circle[next].style.background="rgba(255,255,255,.3)";
			
		})
		
		animate(span[now],{left:widths,opacity:0},function(){
			for(let i=0;i<circle.length;i++)
			{
				span[i].style.left=0
				span[i].style.bottom="-40px"
			}
		})
		animate(span[next],{bottom:50,opacity:1})
		now=next;
	}

	
//	底部按钮鼠标单击		
	for(let i=0;i<circle.length;i++)
	{
		circle[i].onmouseover=function(){
			while(i<next) {left()}
			while(i>next) {right()}
		
		}
	}
	
	
}
	
	

	
	
//	导航栏
	let nav=document.querySelector(".nav")
	let navword=document.querySelectorAll(".nav>div>a")
	let img_block=document.querySelectorAll(".img-block")
	let title=document.querySelectorAll(".title")
	let words=document.querySelectorAll("h6")
	console.log(words)
	Navscroll(nav,navword,title,img_block,words)
	
	function Navscroll(nav,navword,title,img_block,words)
	{	
		let navtop=nav.offsetTop
		
		window.onscroll=function(){
			let bodytop=document.documentElement.scrollTop
			
			if(bodytop>1)
			{
				nav.style.background="white"
				navword.forEach((val,index)=>{
					if(index!=0) val.style.color="black"
				})
			}
			else{
				nav.style.background="rgba(0,0,0,0.2)"
				navword.forEach((val,index)=>{
					if(index!=0) val.style.color="white"
				})
			}
			
			title.forEach((heights,i)=>{
				if(heights.offsetTop<bodytop+window.innerHeight-200)
				{
					heights.style.transform="translateX(0px)"
					heights.style.opacity=1
				}
			})
			
			img_block.forEach((block,j)=>{
				if(block.offsetTop<bodytop+window.innerHeight-100)
				{
					block.style.transform="translateX(0px)";
					block.style.opacity=1
				}
			})
			
			
			words.forEach((word,j)=>{
				if(word.offsetTop<bodytop+window.innerHeight-100)
				{
					word.style.transform="translateY(0px)";
					word.style.opacity=1
				}
			})
			
		}
	
	}
	
// 	
// 	
// //	section轮播图
// 	let section1=document.querySelector("#banner-window")
// 	let section_list=document.querySelectorAll("#second-block")
// 	let section1_list=document.querySelector("#second-block")
// 	let button1=document.querySelectorAll(".button1")
// 	let section_width=parseInt(getComputedStyle(section1_list,null).width)/3
// 	
// 	console.log(section_list,button1,section_width,section1)
// 	Section_Banner(section_list,button1,section_width,section1)
// 
// 	
// 	function Section_Banner(container,button,widths,contain)
// 	{
// 	let m=3,n=0;
// 	let now=0;
// 	let next=1;
// 	let z
// 	let flag=true;
// 	container[next].style.left=widths*3
// 	
// 	
// //	自动播放
// 	let times=setInterval(right,2000)
// 	contain.onmouseover=function(){
// 		clearInterval(times)
// 	}
// 	
// 	// contain.addEventListener("mouseover",clearInterval(times),false)
// 	
// 	contain.onmouseout=function(){
// 		times=setInterval(right,2000)
// 	}
// 	
// 	// contain.addEventListener("mouseout",times,false)
// 	
// 	button[0].onmouseover=function(){
// 		clearInterval(times)
// 	}
// 	
// // 	button.forEach((bts,i)=>{
// // 		bts.addEventListener("mouseover",clearInterval(times),false)
// // 		bts.addEventListener("mouseout",times,false)
// // 	})
// 	
// 	button[0].onmouseout=function(){
// 		times=setInterval(right,2000)
// 	}
// 	
// 	button[1].onmouseover=function(){
// 		clearInterval(times)
// 	}
// 	
// 	button[1].onmouseout=function(){
// 		t=setInterval(right,2000)
// 	}
// 	
// //	右键单击
// 	button[1].onclick=right
// 	function right()
// 	{
// 		if(!flag) return
// 		else 
// 		{	flag=false
// 			
// 			// container[next].style.opacity=1
// 			container[now].style.left=-widths*n;
// 			container[next].style.left=widths*m+"px";
// 			m--;
// 			n++;
// 			animate(container[now],{left:-widths*n},function(){
// 				flag=true
// 			})
// 			animate(container[next],{left:widths*m},function(){
// 				flag=true
// 			})
// 			if(m==0&&n==3)
// 			{
// 				m=3;
// 				n=0;
// 				
// 				z=now;
// 				now=next;
// 				next=z
// 				// container[next].style.opacity=0
// 			}
// 		}
// 		
// 	}
// 
// 
// //	左键单击
// 	button[0].onclick=left
// 	function left()
// 	{
// 		if(!flag) return
// 		else 
// 		{	flag=false
// 			
// 			// container[next].style.opacity=1
// 			container[now].style.left=widths*n;
// 			container[next].style.left=-widths*m+"px";
// 			m--;
// 			n++
// 			animate(container[now],{left:widths*n},function(){
// 				flag=true
// 			})
// 			animate(container[next],{left:-widths*m},function(){
// 				flag=true
// 			})
// 			if(m==0&&n==3)
// 			{
// 				m=3;
// 				n=0;
// 				
// 				z=now;
// 				now=next;
// 				next=z
// 				// container[next].style.opacity=0
// 			}
// 		}
// 		
// 	}
// }
// 	

























// 	Recommand(button1,section1,section_width,section_list)
// 	
// 	function Recommand(recommand_button,recommand_list,recommand_width,section)
// 	{	
// 		k=0;
// 		let section_window=document.querySelector("#banner-window")
// 		
// 		let section_window_left=section_window.offsetLeft
// 		let section_window_right=window.innerWidth-section_window.offsetWidth-section_window_left
// 		recommand_button[0].style.left=section_window_left-60+"px"
// 		recommand_button[1].style.right=section_window_right-60+"px"
// 		console.log(section_window_left,section_window_right)
// 		recommand_button[1].onclick=section_right
// 		function section_right()
// 		{
// 			k++;
// 			if(k==section.length-2){
// 				k=section.length-3;
// //				recommand_button[1].style.color="rgba(0,0,0,0.1)"
// 				return
// 			}
// //			recommand_button[0].style.color="rgba(0,0,0,1)"
// 			recommand_list.style.transform="translateX("+(-recommand_width*k)+"px)";
// 		}
// 		
// 		recommand_button[0].onclick=section_left
// 		function section_left()
// 		{
// 			k--;
// 			if(k<0){
// 				k=0;
// //				recommand_button[0].style.color="rgba(0,0,0,0.1)"
// 				return;
// 			}
// //			recommand_button[1].style.color="rgba(0,0,0,1)"
// 			recommand_list.style.transform="translateX("+(-recommand_width*k)+"px)";
// 		}
// 		
// 		let t=setInterval(section_right,2000)
// 		recommand_list.onmouseover=function(){
// 			clearInterval(t)
// 		}
// 		
// 		recommand_list.onmouseout=function(){
// 			t=setInterval(section_right,2000)
// 		}
// 		
// 		recommand_button.forEach((btns)=>{
// 			btns.onmouseover=function(){
// 				clearInterval(t)
// 			}
// 			btns.onmouseout=function(){
// 				t=setInterval(section_right,2000)
// 			}
// 		})
// 		
// 	}
	
	
	

	
	
	
	
	
// }
