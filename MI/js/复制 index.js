/*
* @Author: Lenovo
* @Date:   2017-08-10 18:14:18
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-19 11:19:00
*/

'use strict';
window.onload=function(){
//	let iterm=document.getElementsByClassName(' ')
//	let ul=document.getElementById('bleft')
//	let li=ul.getElementsByTagName('li')
	// for循环方法
//	for(let i=0;i<li.length;i++){
//		li[i].onmouseenter=function(){
//			iterm[i].style.display='block'
//		}
//		li[i].onmouseleave=function(){
//			iterm[i].style.display='none'		
//		}
//	}

	$('#bleft li').each(function(){
		$(this).mouseenter(function(){
			$(this).find('.iterm').css({display:'block'})
		}).mouseleave(function(){
			$(this).find('.iterm').css({display:'none'})
		})	
	})
//	$('#bleft li').hover(function(){
//		$('.iterm').css({display:'none'})
//		$(this).next('.iterm').css({display:'block'})
//	})
	
//	let Down=document.getElementsByClassName('Down')
//	let ul2=document.getElementById('ul2')
//	let li2=ul2.getElementsByTagName('li')

//类名方法
//	for(let i=0;i<li2.length;i++){
//		li2[i].onmouseenter=function(){
//			Down[i].classList.add('block')
//			Down[i].classList.remove('none')
//		}
//		li2[i].onmouseleave=function(){
//			Down[i].classList.add('none')
//			Down[i].classList.remove('block')		
//		}
//	}
	$('#ul2 li').each(function(){
		$(this).mouseenter(function(){
			$(this).find('.Down').css({display:'block'})
		}).mouseleave(function(){
			$(this).find('.Down').css({display:'none'})
		})	
	})
	
	/////////////////////////搜索框//////
//	let inp=$('.inp')[0]
//	let inpDown=$('.inp-down')[0]
//	let navright=$('.nav1-right')[0]
//	let navleft=$('.nav1-right1')[0]
//	let win=$('body')
//	inp.onfocus=function(){
//		inpDown.style.display='block'
//		navright.style.borderColor='#ff6700'
//		navleft.style.borderColor='#ff6700'
//	}
//	inp.onblur=function(){
//		inpDown.style.display='none'
//		navright.style.borderColor='#e0e0e0'
//		navleft.style.borderColor='#e0e0e0'
//	}
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
//	let imgbox=$('.imgbox')
	let btns=$('.yuandian1')	
	let next=0,now=0;
	let t
//	let flag
	
	t=setInterval(move, 2000)           //自动轮播

	function move(){
		next++
		if(next==5){
			next=0
		}
		$('.imgbox').eq(next).css({opacity:'1'}).siblings().css({opacity:'0'})
		//		let widths=imgbox[now].offsetWidth
//		imgbox[next].style.left=`${widths}px`
//		animate(imgbox[now], {left:-widths})
//		animate(imgbox[next], {left:0},function(){
//			flag = true
//		})
//		now=next
	}
//	function move1(){
//		let widths=imgbox[now].offsetWidth
//		next--
//		if(next==-1){
//			next=imgbox.length-1
//		}
//		imgbox[next].style.left=`${-widths}px`
//		animate(imgbox[now], {left:widths})
//		animate(imgbox[next], {left:0},function(){
//			flag=true
//		})
//		now=next
//	}
//	let back=$('.jiantou1')[0]
//	let forward=$('.jiantou2')[0]
//箭头	
//	forward.onclick=function(){   
//		if(flag){
//			flag=false
//			move()
//		}
//	}
//	back.onclick=function(){
//		if(flag){
//			flag=false			
//			move1()
//		}
//	}
	$('.jiantou2').click(function(){
		move()
	})
	$('.jiantou1').click(function(){
		move()
	})
//鼠标移入，停止轮播		
//	let Right=$('#Right')     
//	// console.log(Right)
//
//	Right.onmouseenter= function(){
//		clearInterval(t)
//	}
//
//	Right.onmouseleave= function(){
//		t=setInterval(move, 2000)
//	}
	$('#Right').mouseenter(function(){
		clearInterval(t)
	}).mouseleave(function(){
		t=setInterval(move, 2000)
	})
/////////////////////////////////////////轮播点////////////////////////////////////////////////
//		let widths=imgbox[now].offsetWidth
//		for(let i=0;i<btns.length;i++){
//			btns[i].onclick=function(){
//				if(now==i){return}                //如果点击的是原图，return掉
//				if(now<i){                                   //从右边进入
//					imgbox[i].style.left=`${widths}px`
//					animate(imgbox[now], {left:-widths})
//					animate(imgbox[i], {left:0})
//				}else if(now>i){
//					imgbox[i].style.left=`${-widths}px`      //从左边进入
//					animate(imgbox[now], {left:widths})
//					animate(imgbox[i], {left:0})
//				}
//				
//				now=next=i
//			}
//		}
		
		$('.yuandian1').each(function(){
			$(this).click(function(){
				move()
			})
		})
//小米明星单品区
	let dp=$('.imgboxx')[0]
	let forward1=$('.mingxing-right1')[0]
	let back1=$('.mingxing-right2')[0]
	// console.log(dp)
	// console.log(back1)
	forward1.onclick=function(){
		dp.style.left='-1226px'
	}
	back1.onclick=function(){
		dp.style.left='0'
	}
	function xiao(){
 	let left = dp.offsetLeft
 	if(left==0){
 		dp.style.left='-1226px'
 	}
 	if(left==-1226){
 		dp.style.left='0'
 	}
 }
    setInterval(xiao, 2000)	

  //////////////////////////内容///////////////////////
  ///
  let nrbox=$('.nrbox')
  let nrbox1=$('.nrbox1')
  let zuo1=$('.jiantou-left')
  let you1=$('.jiantou-right')
  let dian1=$('.dian1')
  let nnum=0
  console.log(nrbox1)
 for(let i=0;i<4;i++){
  zuo1[i].onclick=function(){
  	if(nnum==3){return}
  	nnum++
    nrbox[i].style.left=`${-296*nnum}px`
 }
  you1[i].onclick=function(){
  	if(nnum==0){return}
  	nnum--
 	nrbox[i].style.left=`${-296*nnum}px`
  }

 }
 ////////////////////////////////////////////搭配//////////////////
 let Bigbox=$('.daheziA')
 let remen=$('.rm1')
 console.log(Bigbox)
 let rnum=0

 for(let i=0;i<remen.length;i++){
 	remen[i].onmouseenter=function(){
 		Bigbox[rnum].style.display='none'
		Bigbox[i].style.display='block'
	}
	remen[i].onmouseleave=function(){
		Bigbox[i].style.display='none'
		Bigbox[rnum].style.display='block'		
	}
	rnum=i
 }
 ////////配件//
 ///
  let Bigbox1=$('.daheziB')
 let remen1=$('.rm2')


 for(let i=0;i<remen.length;i++){
 	remen1[i].onmouseenter=function(){
 		Bigbox1[rnum].style.display='none'
		Bigbox1[i].style.display='block'
	}
	remen1[i].onmouseleave=function(){
		Bigbox1[i].style.display='none'
		Bigbox1[rnum].style.display='block'		
	}
	rnum=i
 }
 ////////周边//
let Bigbox2=$('.daheziC')
let remen2=$('.rm3')
 for(let i=0;i<remen.length;i++){
 	remen2[i].onmouseenter=function(){
 		Bigbox2[rnum].style.display='none'
		Bigbox2[i].style.display='block'
	}
	remen2[i].onmouseleave=function(){
		Bigbox2[i].style.display='none'
		Bigbox2[rnum].style.display='block'		
	}
	rnum=i
 }


}


//////////////////////////小米明星单品第二种/////////////////////////////////////

/*	let dp=$('.imgboxx')[0]
	let forward1=$('.mingxing-right1')[0]
	let back1=$('.mingxing-right2')[0]
	let dps=$('.dps')[0]             //获取li
	let childnum=dp.childElementCount    //获取ul中li的个数
	let numm=0
	let childW=dps.setoffWidth+parseInt(getComputedStyle(dps,null).marginRight)     //li的宽度+marginRight
	
	dp.style.width=`${childW*childnum}px`

	forward1.onclick=function(){
		if(num==3){
			return
		}
		num++
		dp.style.left=`${-1226*num}px`
	}
	back1.onclick=function(){
		if(num==0){
			return
		}
		num--
		dp.style.left=`${-1226*num}px`
	}
*/


//闭包方法
//for(var i=0;i<li2.length;i++){							//闭包，一个函数嵌套另一个函数
//	li2[i].onmouseenter=(function(){              //(fhunction(){})(num)  自调用函数
//		return function(){
//			Down[i].style.display='block'
//		}
//	})(i)
//	
//	li2[i].onmouseleave=(function(){              //(fhunction(){})(num)  自调用函数
//		return function(){
//			Down[i].style.display='block'
//		}
//	})(i)
//}
//
//
//
//
//
//
//
//now(当前窗口) next(下一张)
//就位
//	next 右 （widths，0）
//	动画
//	   now(0,0)->(-widths,0)
//	   next(widths,0)->(0,0)
//	更新
//		now=next