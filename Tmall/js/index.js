'use strict';
$(window).ready(function(){
	//导航
	let flag=true
	$('#wod61').mouseenter(function(){
		$('#down').css('display','block')
	}).mouseleave(function(){
		$('#down').css('display','none')
	})

	$('#idwod').mouseenter(function(){
		$('#wod-cude').css('display','block')
		$('.wod1p').css('background','#fff')
	}).mouseleave(function(){
		$('#wod-cude').css('display','none')
		$('.wod1p').css('background','none')
	})

	$('#idwod4').mouseenter(function(){
		$('#erweima').css('height','160px')
	}).mouseleave(function(){
		$('#erweima').css('height','0')
	})
	
 //商家支持

$('.wod3-3').mouseenter(function(){
	$('.wod33-down').css('display','block')
}).mouseleave(function(){
	$('.wod33-down').css('display','none')
})
	///////////////////////////banner//////////////////////////////////////
	let imgs=$('.imgbox')
	let btn=$('.dian1')
	let now=0,next=0,num=0 
	let widths=imgs[now].offsetWidth
	/////////////////////////////自动轮播//////////////////////////////////
	function move(){
		next++
		if(next==imgs.length){
			next=0
		}
		imgs.eq(next).css('left',`${widths}px`)
		imgs.eq(now).animate({left:-widths})
		imgs.eq(next).animate({left:0})
		now=next
	}
                   
	var t=setInterval(move, 2000)                 //鼠标移入停止轮播

	$('.banner').mouseenter(function(){
		clearInterval(t)
	}).mouseleave(function(){
		t=setInterval(move, 2000)
	})
//轮播点//
	for(let i=0;i<btn.length;i++){
		btn.eq(i).click(function(){
			if(now<i){
				imgs.eq(i).css('left',`${widths}px`)
				imgs.eq(now).animate({left:-widths})
				imgs.eq(i).animate({left:0})
			}else if(now>i){
				imgs.eq(i).css('left',`${-widths}px`)
				imgs.eq(now).animate({left:widths})
				imgs.eq(i).animate({left:0})
			}
			now=next=i
		})	
	}

	////////////////////////////////slide////////////////////////////////////////
	let ch=window.innerHeight   //获取浏览器高度
	let Floor=$('.floor')
	let sul=document.querySelector('.Topleft')
	let Toptop=document.querySelector('.Toptop')
	let sli=$('.Tleft1')
	let totop=$('.totop')
	let Sflag=true
	let nth=0
	let posArr=[]  
	                               //用来存放ul 距离

	Floor.each(function(index,obj){
		posArr.push(obj.offsetTop)
	})

	sli.each(function(index,obj){
		var i=index
		sli.eq(index).click(function(){
			$('body').animate({'scrollTop':`${posArr[index]}px`})
		})
	})
		
$(window).scroll(function(){
		let st=document.body.scrollTop      //body到浏览器制左上角的距离
		posArr.forEach((element,index)=>{
			if(ch+st>element+300){
			sli.eq(nth).removeClass('active') //右侧页码随滚动条移动显示不同位置
			sli.eq(index).addClass('active')
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
	totop.click(function(){
		animate(document.body,{scrollTop:0})
	})	
})

	/////////////////aside///////////////////
	for(let i=0;i<$('.cdh').length;i++){
		$('.cdh').eq(i).mouseenter(function(){
			$('.side').eq(i).css('display','block')
		}).mouseleave(function(){
			$('.side').eq(i).css('display','none')
		})
	}

})