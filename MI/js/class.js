/*
* @Author: Lenovo
* @Date:   2017-08-14 09:27:00
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-14 16:06:42
*/

'use strict';
/*
方便获取页面中元素，返回
添加window.onload事件
$(select ranger)     ranger 可传可不传  是一个集合
	参数：
		select   选择器   #box(id选择器)  .box(类名) div(标签)
		函数---->window.onload
````ranger 范围

	1.首字符  #->document.getElectmentById()
			  .->document.getElectmentsClassName()
			符合字符（div img a span ol li ul form input h1-h6 p b u canvas audio video time code）
			    以字母开头
	2.return 
 */

 	function $(select,ranger=document){
 		if(typeof select=='string'){
 			let selecter=select.trim()
 			let firstChar=selecter.charAt(0)
 			if(firstChar=='#'){
 				return ranger.getElementById(selecter.substring(1))
 			}else if(firstChar=='.'){
 				return ranger.getElementsByClassName(selecter.substring(1))
 			}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
 				return ranger.getElementsByTagName(selecter)
 			}
 		}else if(typeof select=='function'){
 			 window.onload=function(){
 				select()
 			}
 		}
 		return
 	}


 	//
 	//$(function(){
 	//                                    //等价于window.onload={}
 	//})
 	//
 	//html 获取或设置元素内容

 	function html(element,content){                  //获取文本内容，可进行设置
 		if(arguments.length==2){
 			element.innerHTML=content
 		}
 		if(arguments.length==1){
 			return element.innerHTML
 		}	
 	}
 	function text(element,content){                  //获取文本那内容，不可设置
 		if(arguments.length==2){
 			element.innerText=content
 		}
 		if(arguments.length==1){
 			return element.innerText
 		}	
 	}
 	//css
 	function css(element,attrObj){                  //设置样式
 		for(let i in attrObj){
 			element.style[i]=attrObj[i]
 		}
 	}

 	//添加事件
 	function on(collection,type,fn){
 		for(let i=0;i<collection.length;i++){
 			collection[i][type]=fn
 		}
 	}
 	//移除事件
 	function off(collection,type){
 		for(let i=0;i<collection.length;i++){
 			collection[i][type]=null
 		}
 	}

 	//封装一个动画     getComputedStyle	
 	function animate(element,attrObj,speed,fn){
 		let t=setInterval(function(){
 			for( let i in attrObj){
 				let start=parseInt(getComputedStyle(element,null)[i])
 				if(start>=attrObj[i]){
 					clearInterval(t)
 					if(fn){
 						fn.call(element)        //冒充
 						// fn.apply(element)       //冒充
 					}
 				}
 				element.style[i]=`${speed+start}px`
 			}
 		}, 60)
 	}