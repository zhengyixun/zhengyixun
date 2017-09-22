/*属性
 * 线宽，颜色，端点，边数，几个角， 橡皮的尺寸，width,height ,history
 *		mask 的宽高。
 * 
 * 
 * 
 * 方法：
 * 	 划线，铅笔   多边型，历史记录，矩形，多角形，圆
 * 
 * 	橡皮，裁切  文字
 * 
 *	 新建   保存  
 * 
 * 
 * 
 * */

function Palette(canvas,ctx,mask){
	this.canvas=canvas
	this.mask=mask
	this.ctx=ctx
	this.lineWidth=1
	this.lineCap='round'
	this.fillStyle='blue'
	this.stroke='blue'
	this.style='stroke'     //
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;
	this.history=[]
	this.temp=[]
}
Palette.prototype={
	lint:function(){
		this.ctx.lineWidth=this.lineWidth
		this.ctx.lineCap=this.lineCap
		this.ctx.strokeStyle=this.strokeStyle
		this.ctx.fillStyle=this.fillStyle
		this.ctx.setLineDash([0,0])
	},
	//直线
	line:function(ox,oy,cx,cy){
		this.ctx.beginPath()
		this.ctx.moveTo(ox,oy)
		this.ctx.lineTo(cx,cy)
		this.ctx[this.style]()		
		this.ctx.closePath()
	},
	//矩形
	juxing:function(ox,oy,cx,cy){
		let that=this
		that.ctx.beginPath()
		that.ctx.moveTo(ox,oy)
		if(that.style=='fill'){
			that.ctx.fillRect(ox,oy,cx-ox,cy-oy)
		}
		if(that.style=='stroke'){
			that.ctx.strokeRect(ox,oy,cx-ox,cy-oy)
		}
		that.ctx.closePath()
	},
	//铅笔
	pencil:function(){
		let that=this
			that.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY
			if(that.history.length>0){
				that.ctx.putImageData(that.history[that.history.length-1],0,0)
			}
	
			that.ctx.beginPath()
			that.ctx.moveTo(ox,oy)
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				that.ctx.lineTo(cx,cy)
				that.ctx.stroke()
			}
			that.mask.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))//放到数组里
				that.mask.onmousemove=null
				that.mask.onmouseup=null
			}
			that.mask.onkeydown=function(e){   //撤销 Ctrl+Z   //mask 没用
				if(e.ctrlKey&&e.keyCode==90){
					let img=that.history.pop()   //删除最后一步
					that.ctx.putImageData(that.history[that.history.length-1],0,0)  //放到canvas中
				}
			}
		}
	},
	//多边形
	ploy:function(ox,oy,cx,cy){
		let that=this
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
		duobianxing(ox,oy,6,r)
		function duobianxing(x,y,bian,r){              //画一个6变形
			let ang=360/bian/180*Math.PI

			that.ctx.beginPath()
			that.ctx.moveTo(x+r,y)
			for(let i=1;i<bian;i++){
				that.ctx.lineTo(r*Math.cos(ang*i)+x,r*Math.sin(ang*i)+y)
			}
			that.ctx.closePath()
			that.ctx[that.style]()	
		}	
	},
	//五角星
	five:function(ox,oy,cx,cy){
		let that=this
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
			let R=r/2
			let ang=360/(6*2)/180*Math.PI		

			that.ctx.beginPath()
			that.ctx.moveTo(ox+r,oy)
			for(let i=1;i<6*2;i++){
				if(i%2==1){
				  that.ctx.lineTo((ox+R*Math.cos(ang*i)),(oy+R*Math.sin(ang*i)));
				}else if(i%2==0){
				  that.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
				}	
			}
			that.ctx.closePath()
			that.ctx[that.style]()
	},
	//圆
circle:function(ox,oy,cx,cy){
	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))

	this.ctx.beginPath()
	this.ctx.moveTo(cx,cy)
	this.ctx.arc( ox,oy,r,0,2*Math.PI)
	this.ctx.closePath()
	this.ctx[this.style]()	
},
	//虚线
xuline:function(ox,oy,cx,cy){

	this.ctx.setLineDash([10,10])
	this.ctx.beginPath()
	this.ctx.moveTo(ox,oy)
	this.ctx.lineTo(cx,cy)
	this.ctx[this.style]()		
},
	//draw
	draw:function(type){
		let that=this	
		this.mask.onmousedown=function(e){
			that.lint()
			let ox=e.offsetX,oy=e.offsetY
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
	   			that.ctx.clearRect(0,0,that.cw,that.ch);
	   			if(that.history.length>0){
	   				that.ctx.putImageData(that.history[that.history.length-1],0,0)
	   			}
	   			that.lint()
	   			that[type](ox,oy,cx,cy)
			}
			that.mask.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))//放到数组里
				that.mask.onmousemove=null
				that.mask.onmouseup=null
			}
		    document.onkeydown=function(e){   //撤销 Ctrl+Z   //mask 没用
				if(e.ctrlKey&&e.keyCode==90){
					let img=that.history.pop()   //删除最后一步
					that.ctx.putImageData(that.history[that.history.length-1],0,0)  //放到canvas中
				}
			}
		}
	},
	
	//橡皮
	eraser:function(obj,w,h){
		let that=this
		that.mask.onmousedown=function(e){
			obj.style.display='block'
//			e.preventDefault
			that.mask.onmousemove=function(e){
//				e.preventDefault
				let ox =e.offsetX,oy=e.offsetY
				let lefts=ox-w/2
				let tops=oy-h/2
				//边界
   			if(lefts<0){
   				lefts=0
	   		}
	   		if(lefts>that.cw-w){
	   			lefts=that.cw-w
	   		}
	   		if(tops<0){
	   			tops=0
	   		}
	   		if(tops>that.cw-h){
	   			tops=that.cw-h
	   		}
				obj.style.left=`${lefts}px`
				obj.style.top=`${tops}px`
				that.ctx.clearRect(lefts,tops,w,h)   //删除
			}
			that.mask.onmouseup=function(){
				obj.style.display="none";
				that.mask.onmousemove=null;
   				that.mask.onmouseup=null;
			}
		}
	},
	//文本
	font:function(){
		let that=this
		let lefts,tops
		 that.mask.onmousedown=function(e){
		 	let ox=e.offsetX,oy=e.offsetY
		 	let divs=document.createElement('div')
		 	divs.classList.add('Tex')
		 	divs.contentEditable='true'
		 	that.mask.appendChild(divs)
		 	divs.style.left=`${ox}px`
		 	divs.style.top=`${oy}px`
		 	that.mask.onmousedown=null
		 	
		 	//divs 按住可拖动 
		 	//相对于浏览器宽高-ox/oy-left/top
		 	divs.onmousedown=function(e){
		 		let ox=e.offsetX,oy=e.offsetY   //相对于事件源位置
		 		let leftW=e.clientX-ox-this.offsetLeft   //求 mask 距离屏幕左边的距离
		 		let topW=e.clientY-oy-this.offsetTop
		 		that.mask.onmousemove=function(e){
		 			let cx=e.clientX,cy=e.clientY  //相对于浏览器位置
		 			if(that.history.length>0){
	   					that.ctx.putImageData(that.history[that.history.length-1],0,0)
		   			}
			 			
		 			lefts=cx-leftW-ox          //求divs距离mask左边的距离
		 			tops=cy-topW-oy            //求divs距离mask上边的距离
		 			
		 			divs.style.left=`${lefts}px`
		 			divs.style.top=`${tops}px`	
		 		}
		 		divs.onmouseup=function(){           //抬起的时候取消
		 			that.mask.onmousemove=null
		 			divs.onmouseup=null
		 		}
		 	}
		 	divs.onblur=function(){
		 		let value=divs.innerText
		 		that.mask.removeChild(this)
		 		that.ctx.fillText(value,lefts,tops)
		 		that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))//放到数组里
		 	}
		 	document.onkeydown=function(e){   //撤销 Ctrl+Z   //mask 没用
				if(e.ctrlKey&&e.keyCode==90){
					let img=that.history.pop()   //删除最后一步
					that.ctx.putImageData(that.history[that.history.length-1],0,0)  //放到canvas中
				}
			}
		 }
	},
	//反向
	reserve:function(){
		let imgData=this.ctx.getImageData(0,0,this.cw,this.ch)
		let data=imgData.data

		for(let i=0;i<data.length;i+=4){
			data[i]=255-data[i]
			data[i+1]=255-data[i+1]
			data[i+2]=255-data[i+2]
		}
//		console.log(data)
		this.ctx.putImageData(imgData,0,0)
	},
	//裁切
	clip:function(clipObj){
		let that=this
		let minX,minY,w,h
		//画框
		that.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY
				w=Math.abs(ox-cx)      //宽
				h=Math.abs(oy-cy)      //高
				minX= cx >=ox?ox:cx    //minX的值
				minY=cy>=oy?oy:cy
				clipObj.style.cssText=`
					display:block;
					left:${minX}px;
					top:${minY}px;
					width:${w}px;
					height:${h}px;
				`
			}
			that.mask.onmouseup=function(){
				that.temp=that.ctx.getImageData(minX,minY,w,h)
				that.ctx.clearRect(minX,minY,w,h)
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))//放到数组里
				that.ctx.putImageData(that.temp,minX,minY)  //把复制的信息再放到canvaszhong
				
				that.mask.onmousemove=null     //t抬起 删除
				that.mask.onmouseup=null //t抬起 删除
				that.drag(minX,minY,w,h,clipObj)
			}
		}
	},
	drag:function(minX,minY,w,h,clipObj){
		let that=this
		//修改鼠标样式
		that.mask.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY
			if(ox>minX&&ox<minX+w&&oy>minY&&oy<minY+h){    //在框内
				that.mask.style.cursor='move'
			}else{
				that.mask.style.cursor='default'
			}
			that.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY
					
					let lefts=cx-ox+minX            //移动选框
					let tops=cy-oy+minY
					
					//边界
   					if(lefts<0){
   						lefts=0
	   				}
	   				if(lefts>that.cw-w){
	   					lefts=that.cw-w
	   				}
	   				if(tops<0){
	   					tops=0
	   				}
	   				if(tops>that.cw-h){
	   					tops=that.cw-h
	   				}
					
					clipObj.style.left=`${lefts}px`
					clipObj.style.top=`${tops}px`
					//注意这里的顺序
					that.ctx.clearRect(0,0,that.cw,that.ch)
					
					if(that.history.length>0){
	   					that.ctx.putImageData(that.history[that.history.length-1],0,0)
		   			}
					
					that.ctx.putImageData(that.temp,lefts,tops)
				}	
			}
			that.mask.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))//放到数组里
				that.mask.onmousemove=null
				that.mask.onmouseup=null
				that.temp=null
				clipObj.style.display='none'
			}
		}
	},
	
}
