/*
* @Author: Lenovo
* @Date:   2017-08-10 15:19:38
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-19 19:47:01
*/

'use strict';
window.onload=function(){
	//导航
	let down=$('#down')
	let wod61=$('#wod61')
	console.log(down)
	let wodcude =$('#wod-cude')
	let idwod =$('#idwod')

	let wod4 =$('#idwod4')
	let erweima =$('#erweima')
	let wod1p=document.querySelector('.wod1p')
	console.log(wod1p)
	let flag=true
	wod61.onmouseenter=function(){
		down.style.display='block'
	}
	wod61.onmouseleave=function(){
		down.style.display='none'
	}
	idwod.onmouseover=function(){
		wodcude.style.display='block'
		wod1p.style.background='#fff'
	}
	idwod.onmouseleave=function(){
		wodcude.style.display='none'
		wod1p.style.background='none'
	}

	idwod4.onmouseenter=function(){
		erweima.style.height='160px'
	}
	idwod4.onmouseleave=function(){
		erweima.style.height=0
	}
 //商家支持
 let wod333=document.querySelector('.wod3-3')
 let wod333down=document.querySelector('.wod33-down')
 // console.log(wod333,wod333down)
wod333.onmouseenter=function(){
	wod333down.style.display='block'
}
wod333.onmouseleave=function(){
	wod333down.style.display='none'
}
	///////////////////////////banner//////////////////////////////////////
	let ban=$('.banner')
	let imgs=$('.imgbox')
	let btn=$('.dian1')
	let now=0
	let next=0
	let widths=imgs[now].offsetWidth
	console.log(widths)
	let num=0

	
	/////////////////////////////自动轮播//////////////////////////////////
	function move(){
		next++
		if(next==imgs.length){
			next=0
		}
		imgs[next].style.left=`${widths}px`
		animate(imgs[now],{left:-widths})
		animate(imgs[next],{left:0})
		now=next
	}


	let t                          ////////鼠标移入停止轮播
	t=setInterval(move, 2000)

	ban[0].onmouseenter=function(){
		clearInterval(t)
	}
	ban[0].onmouseleave= function(){
		t=setInterval(move, 2000)
	}
/////////////////////////////轮播点////////////////////
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			if(now<i){
				imgs[i].style.left=`${widths}px`
				animate(imgs[now],{left:-widths})
				animate(imgs[i],{left:0})
				
			}else if(now>i){
				imgs[i].style.left=`${-widths}px`
				animate(imgs[now],{left:widths})
				animate(imgs[i],{left:0})
			}
			now=next=i
		}
	}

	////////////////////////////////slide////////////////////////////////////////
	let ch=window.innerHeight   //获取浏览器高度
	let Floor=document.querySelectorAll('.floor')
	let sul=document.querySelector('.Topleft')
	let Toptop=document.querySelector('.Toptop')
	let sli=document.querySelectorAll('.Tleft1')
	let totop=document.querySelector('.totop')
	let Sflag=true
	let nth=0
	let posArr=[]  
	                               //用来存放ul 距离
	Floor.forEach(element=>{                          //遍历ul 放到数组中
		posArr.push(element.offsetTop)	              // body超出浏览器的距离
	})

	sli.forEach(function(element,index){               //遍历li
		element.onclick=function(){
			animate(document.body,{scrollTop:posArr[index]})      //scroll没有延迟，只能用动画
			           //动画体     移动的距离        
		} 
	})
	window.onscroll=function(){
		let st=document.body.scrollTop      //body到浏览器制左上角的距离
		posArr.forEach((element,index)=>{
			if(ch+st>element+300){

			sli[nth].classList.remove('active')        //右侧页码随滚动条移动显示不同位置
			sli[index].classList.add('active')
			nth=index
			}
		})
	if(st>600){
		if(Sflag){
			Sflag=false
			animate(sul,{left:5})   //侧边栏
			animate(Toptop,{top:0})
		}
	}else{
		if(!Sflag){
			Sflag=true
			animate(sul,{left:-41})   //侧边栏
			animate(Toptop,{top:-50})
		}
	}
	totop.onclick=function(){
		animate(document.body,{scrollTop:0})
	}	
	}
	/////////////////aside///////////////////
	let side=document.querySelectorAll('.side')
	let cdh=document.querySelectorAll('.cdh')
	for(let i=0;i<cdh.length;i++){
		cdh[i].onmouseenter=function(){
			side[i].style.display='block'
		}
		cdh[i].onmouseleave=function(){
			side[i].style.display='none'
		}
	}

}