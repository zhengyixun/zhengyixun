window.onload=function(){
	let canvas=document.querySelector('canvas')
	let ctx=canvas.getContext('2d')
    let tools=document.querySelectorAll('.tools')
    let mask=document.querySelector('.mask')
    let palette=new Palette(canvas,ctx,mask)
    tools.forEach(element=>{   //遍历
    	element.onclick=function(){
    		if(this.id=='pencil'){
    		palette.pencil()
    	}else{
    		palette.draw(this.id)
    	}
    	
    	}	
    })
    
    let styleBtn=document.querySelectorAll('.styleBtn')
    styleBtn[0].onclick=function(){
    	palette.style='stroke'
    }
    styleBtn[1].onclick=function(){
    	palette.style='fill'
    }
   console.log(styleBtn)
    let color=document.querySelectorAll('.color')
     
    color.forEach((element,index)=>{
    	element.onchange=function(){
    		if(index==0){
    			palette.strokeStyle=this.value
    		}
    		if(index==1){
    			palette.fillStyle=this.value
    		}
    	}
    })

	let eraser=document.querySelector('.eraser')
	let era=document.querySelector('.icon-eraser')
	era.onclick=function(){
		palette.eraser(eraser,20,20)
	}
	//文本
	let tex=document.querySelector('.icon-icont')
	tex.onclick=function(){
		palette.font()
	}
	
	//保存
	let save=document.querySelector('.icon-baocun')
	save.onclick=function(){
		save.href=canvas.toDataURL('image/png')
		save.down='a.png'
	}
	
	//反向
	let reserve=document.querySelector('.fan')
	reserve.onclick=function(){
		palette.reserve()
	}

	//裁剪 
	let clip=document.querySelector('.icon-caijian')
	let clipObj=document.querySelector('.clip')
//	console.log(clip,clipObj)
	clip.onclick=function(){
		palette.clip(clipObj)
	}
}
