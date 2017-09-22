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
	li1.mouseenter(function(){
		ul1.eq($(this).index()).css('height','270px')
	}).mouseleave(function(){
		ul1.eq($(this).index()).css('height',0)
	})
/////////////////////////////轮播图/////////////////////////////
//自动轮播
	let imgs=$('.imgbox')
	let ban=$('.zuanzhan')
	let flag=true
	let num=0
	let now=0,next=0
	let widths=imgs[now].offsetWidth
	function move(){
		next++
		if(next==imgs.length){
			next=0
		}
	
		imgs.eq(next).css('left',`${widths}px`)
		imgs.eq(now).animate({'left':`${-widths}px`})
		imgs.eq(next).animate({'left':0})
		now=next
	}
	let t=setInterval(move, 2000)
	ban.mouseenter(function(){
		clearInterval(t)
	}).mouseleave(function(){
		t=setInterval(move, 2000)
	})
//箭头
	let ban0=$('.ban')
	let ban1=$('.ban1')
	
	if(flag){
		ban1.click(function(){
			move()
		})
		flag=false
	}

	function move1(){
		let widths=imgs[now].offsetWidth
		next--
		if(next==-1){
			next=imgs.length-1
		}
		imgs.eq(next).css('left',`${-widths}px`)
		imgs.eq(now).animate({'left':`${widths}px`})
		imgs.eq(next).animate({'left':0})
		now=next
	}
	if(flag){
		ban0.click(function(){
			move1()
		})
		flag=false
	}
	
	//轮播点
	let btns=$('.btn1')
	let widthss=imgs[now].offsetWidth;
//	for(let i=0;i<imgs.length;i++){
//		btns[i].onclick=function (){
//		imgs[i].style.left=`${widthss}px`
//		animate(imgs[now], {left:-widthss})
//		animate(imgs[i], {left:0})               //用i不是 next
//		now=next=i
//		}
//	}
	
	btns.click(function(){
		var aa=$(this).index()
		
		imgs.eq(aa).css('left',`${widthss}px`).animate({'left':0}).siblings('.imgbox').css('left',`${widthss}px`)
	})

	
})