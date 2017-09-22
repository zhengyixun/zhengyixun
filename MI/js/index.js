/*
* @Author: Lenovo
* @Date:   2017-08-10 18:14:18
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-19 11:19:00
*/

'use strict';
window.onload=function(){

//侧边栏
	$('#bleft li').each(function(){
		$(this).mouseenter(function(){
			$(this).find('.iterm').css({display:'block'})
		}).mouseleave(function(){
			$(this).find('.iterm').css({display:'none'})
		})	
	})
 //下拉框
	$('#ul2 li').each(function(){
		$(this).mouseenter(function(){
			$(this).find('.Down').css({display:'block'})
		}).mouseleave(function(){
			$(this).find('.Down').css({display:'none'})
		})	
	})
	
	/////////////////////////搜索框//////
	$('.inp').focus(function(){
		$('.inp-down').css({display:'block'})
		$('.nav1-right').css({borderColor:'#ff6700'})
		$('.nav1-right1').css({borderColor:'#ff6700'})
	}).blur(function(){
		$('.inp-down').css({display:'none'})
		$('.nav1-right').css({borderColor:'#e0e0e0'})
		$('.nav1-right1').css({borderColor:'#e0e0e0'})
	})
	///////////////////////////////轮播图////////////////////////////////////////////////

	let btns=$('.yuandian1')	
	let next=0,now=0;
	let t
	
	t=setInterval(move, 2000)           //自动轮播

	function move(dir='l'){
		var lins=$('.imgbox')
		if(dir=='l'){
			next++
			if(next==lins.length){
				next=0
			}
		lins.eq(next).css({opacity:'1'}).siblings().css({opacity:'0'})
		$('.yuandian1').eq(next).css({background:'lightgray'}).siblings().css({background:'rgba(0,0,0,0.7)'})
		}else if(dir=='r'){
			next--
			if(next==0){
				next=lins.length-1
			}
		lins.eq(next).css({opacity:'1'}).siblings().css({opacity:'0.1'})
		}
		
	}
//箭头	
	$('.jiantou2').click(function(){
		move('l')
	})
	$('.jiantou1').click(function(){
		move('r')
	})
//鼠标移入，停止轮播		
	$('#Right').mouseenter(function(){
		clearInterval(t)
	}).mouseleave(function(){
		t=setInterval(move, 2000)
	})
/////////////////////////////////////////轮播点////////////////////////////////////////////////
		$('.yuandian1').eq($(this).index()).click(function(){
				move()
		})
//小米明星单品区
	let dp=$('.imgboxx')[0]

	function xiao(){
 	let left = dp.offsetLeft
 	if(left==0){
 		dp.style.left='-1226px'
 	}
 	if(left==-1226){
 		dp.style.left='0'
 	}
 }
    var t1=setInterval(xiao, 2000)	
	$('.mingxing-right1').mouseenter(function(){
		clearInterval(t1)
	}).mouseleave(function(){
		t1=setInterval(xiao, 2000)	
	}).click(function(){
		$('.imgboxx').css('left','-1226px')
	})
	$('.mingxing-right2').mouseenter(function(){
		clearInterval(t1)
	}).mouseleave(function(){
		t1=setInterval(xiao, 2000)	
	}).click(function(){
		$('.imgboxx').css('left','0')
	})
  //////////////////////////内容///////////////////////
  let dian1=$('.dian1')
  let nnum=0
 for(let i=0;i<4;i++){
  $('.jiantou-left').eq(i).click(function(){
  		if(nnum==3){return}
  		nnum++
  		$('.nrbox').eq(i).css('left',`${-296*nnum}px`)
  })
	$('.jiantou-right').eq(i).click(function(){
		if(nnum==0){return}
  		nnum--
  		$('.nrbox').eq(i).css('left',`${-296*nnum}px`)
	})
 }
/////////////////////搭配//////////////////
 let Bigbox=$('.daheziA')
 let remen=$('.rm1')
 for(let i=0;i<remen.length;i++){
 	remen.eq(i).mouseenter(function(){
 		Bigbox.eq(i).css('display','block').siblings('.daheziA').css('display','none')
 	}).mouseleave(function(){
 		Bigbox.eq(i).css('display','none').siblings('.daheziA').css('display','block')
 	})	
 }
 ////////配件//
  let Bigbox1=$('.daheziB')
 let remen1=$('.rm2')
 for(let i=0;i<remen.length;i++){
 	remen1.eq(i).mouseenter(function(){
 		Bigbox1.eq(i).css('display','block').siblings('.daheziB').css('display','none')
 	}).mouseleave(function(){
 		Bigbox1.eq(i).css('display','none').siblings('.daheziB').css('display','block')
 	})	
 }
 ////////周边//
let Bigbox2=$('.daheziC')
let remen2=$('.rm3')
 for(let i=0;i<remen.length;i++){
 	remen2.eq(i).mouseenter(function(){
 		Bigbox2.eq(i).css('display','block').siblings('.daheziC').css('display','none')
 	}).mouseleave(function(){
 		Bigbox2.eq(i).css('display','none').siblings('.daheziC').css('display','block')
 	})	
 }

}
