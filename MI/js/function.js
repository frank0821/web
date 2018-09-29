
	

	

//哈利波特开始


function Harrypotter(container,button,circle,widths)
{
	let now=0;
	let next=0;
	circle[next].style.border="2px rgb(255,103,0)  solid";
	circle[next].style.background="white";
	circle[next].style.width="10px";
	circle[next].style.height="10px";
	
	
//	右键单击
	button[1].onclick=right
	function right()
	{
		next++;
		if(next==container.length) {next=container.length-1;return}
		container[now].style.left=0;
		container[next].style.left=widths+"px";
		animate(container[now],{left:-widths},function(){
			for(let i=0;i<circle.length;i++)
			{
				circle[i].style.border="none";
				circle[i].style.background="gray";
				circle[i].style.width="6px";
				circle[i].style.height="6px";
			}
		
		})
		animate(container[next],{left:0},function(){
			circle[next].style.border="1px rgb(255,103,0)  solid";
			circle[next].style.background="white";
			circle[next].style.width="10px";
			circle[next].style.height="10px";
		})
		now=next;
	}


//	左键单击
	button[0].onclick=left
	function left()
	{
		next--;
		if(next<0) {next=0;return}
		container[now].style.left=0;
		container[next].style.left=-widths+"px";
		animate(container[now],{left:widths},function(){
			for(let i=0;i<circle.length;i++)
			{
				circle[i].style.border="none";
				circle[i].style.background="gray";
				circle[i].style.width="6px";
				circle[i].style.height="6px";
			}
		
		})
		animate(container[next],{left:0},function(){
			circle[next].style.border="2px rgb(255,103,0)  solid";
			circle[next].style.background="white";
			circle[next].style.width="10px";
			circle[next].style.height="10px";
		})
		now=next;
	}

	
//	底部按钮鼠标单击		
	for(let i=0;i<circle.length;i++)
	{
		circle[i].onclick=function(){
//			for(let j=0;j<circle.length;j++)
//			{
//				container[j].style.left=widths+"px";
//				circle[j].style.border="none";
//				circle[j].style.background="gray";
//				circle[j].style.width="6px";
//				circle[j].style.height="6px";
//			}
//			container[i].style.left=0;
//			circle[i].style.border="2px rgb(255,103,0) solid";
//			circle[i].style.background="white";
//			circle[i].style.width="10px";
//			circle[i].style.height="10px";
//			now=i;
//			next=i;
			while(i<next) {left()}
			while(i>next) {right()}
		
		}
	}
	

//	底部按钮鼠标移入
	for(let i=0;i<circle.length;i++)
	{
		circle[i].onmouseover=function(){
			if(next==i) circle[i].style.background="white";
			else{
				for(let j=0;j<circle.length;j++)
				{
					if(j!=next) circle[j].style.background="gray";
				}
				circle[i].style.background="rgb(255,103,0)";
			}
			
		}
		circle[i].onmouseout=function(){
			if(next==i) circle[i].style.background="white";
			else {
				circle[i].style.background="gray";
			}
		}
	}
	
	
//	图片鼠标移入
	for(let i=0;i<button.length;i++)
	{
		button[i].onmouseover=function(){
			for(let j=0;j<button.length;j++)
			{
				button[j].style.background="rgba(0,0,0,0.2)"
			}
			button[i].style.background="gray"
		}
		button[i].onmouseout=function(){
			button[0].style.background="rgba(0,0,0,0)"
			button[1].style.background="rgba(0,0,0,0)"
		}
		for(let j=0;j<container.length;j++)
		{
			container[j].onmouseout=function(){
			button[0].style.background="rgba(0,0,0,0)"
			button[1].style.background="rgba(0,0,0,0)"
			}
			container[j].onmouseover=function(){
			button[0].style.background="rgba(0,0,0,0.2)"
			button[1].style.background="rgba(0,0,0,0.2)"
		}
		}
		

	}
	
	
}
//哈利波特结束