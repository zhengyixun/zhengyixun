/*
* @Author: Lenovo
* @Date:   2017-08-10 19:20:01
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-14 22:56:10
*/

'use strict';
$(window).ready(function(){
	let ul1=$('.ul1')
	let nav1=$('#nav1')
	let li1=$('li')

//	for(let i=0;i<li1.length;i++){
//		li1[i].onmouseenter=function(){
//			ul1[i].style.height="270px"
//		}
//		li1[i].onmouseleave=function(){
//			ul1[i].style.height="0px"
//		}
//	 }
	li1.mouseenter(function(){
		ul1.eq($(this).index()).css('height','270px')
	}).mouseleave(function(){
		ul1.eq($(this).index()).css('height',0)
	})
/////////////////////////////轮播图/////////////////////////////
//自动轮播
	let imgs=$('.imgbox')
	let ban=$('.zuanzhan')[0]
	let num=0
	let now=0,next=0
	function move(){
		next++
		if(next==imgs.length){
			next=0
		}
		let widths=imgs[now].offsetWidth
		imgs[next].style.left=`${widths}px`
		animate(imgs[now], {left:-widths})
		animate(imgs[next], {left:0})
		now=next
	}
	let t=setInterval(move, 2000)
	ban.onmouseenter=function(){
		clearInterval(t)
	}
	ban.onmouseleave=function(){
		t=setInterval(move, 2000)
	}
//箭头
	let ban0=$('.ban')[0]
	let ban1=$('.ban1')[0]
	console.log(ban1)
	ban1.onclick=move

	function move1(){
		let widths=imgs[now].offsetWidth
		next--
		if(next==-1){
			next=imgs.length-1
		}
		imgs[next].style.left=`${-widths}px`
		animate(imgs[now], {left:widths})
		animate(imgs[next], {left:0})
		now=next
	}
	ban0.onclick=move1
	//轮播点
	let btns=$('.btn1')
	for(let i=0;i<imgs.length;i++){
		let widthss=imgs[now].offsetWidth;
		btns[i].onclick=function (){
		imgs[i].style.left=`${widthss}px`
		animate(imgs[now], {left:-widthss})
		animate(imgs[i], {left:0})               //用i不是 next
		now=next=i
		}
	}
})