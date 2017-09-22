
$(window).ready(function(){

	let next=0,now=0;
	let flag

	//////////////////////search////////////////////////////////
	let search=$('.search')
	let Totop=$('.Totop')
	$(window).scroll(function(){
		let st=document.body.scrollTop           //获取body超出浏览器部分的距离
		if(st>500){
			if(flag){
				flag=false
				search.animate({top:0})
				Totop.animate({right:10})
			}
		}else{
			if(!flag){
				flag=true
				search.animate({top:-85})
				Totop.animate({right:-80})
			}
		} 
		
		//problem
		Totop.click(function(){                        //灰到顶部
			animate(document.body,{scrollTop:0})
		})
	})

	/////////////轮播//////////////
	let imgBox=$('.imgBox')
	let next1=0,now1=0;	
	let widths=imgBox[now1].offsetWidth
	
	function move1(){
		next1++
		if(next1==imgBox.length){
			next1=0
		}
		imgBox.eq(next1).css({'left':`${widths}px`})
		imgBox.eq(now1).animate({'left':`${-widths}px`})
		imgBox.eq(next1).animate({'left':0},function(){
			flag = true
		})
		now1=next1
	}
	function move11(){
		next1--
		if(next1==-1){
			next1=imgBox.length-1
		}
		imgBox.eq(next1).css({'left':`${-widths}px`})
		imgBox.eq(now1).animate({'left':`${widths}px`})
		imgBox.eq(next1).animate({'left':0},function(){
			flag = true
		})
		now1=next1
	}
	let aaaa=setInterval(move1, 3000)

	$('.banner-m').mouseenter(function(){    //鼠标移入 停止运行
		clearInterval(aaaa)
	}).mouseleave(function(){
		aaaa=setInterval(move1, 3000)
	})
	//////////////////////////箭头////////////////////////////////////
	$('.lunbo').click(function(){
		if(flag){
			flag=false
			move1()
		}
	})
	$('.lunbo1').click(function(){
		if(flag){
			flag=false
			move11()
		}
	})
})