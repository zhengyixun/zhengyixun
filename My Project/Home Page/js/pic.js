
	let Pic=$('.Pic')
	let zpic=$('.zpic')
	let t=setInterval(move,1000)
	function move(){
		for(let i=0;i<zpic.length;i++){
			let n=Math.floor(Math.random()*9)
			let m=Math.floor(Math.random()*9)
			zpic[n].style.opacity=1
			zpic[n].style.transition='.5s';
			
			zpic[m].style.opacity=0
			zpic[m].style.transition='.5s';
		}
	}
	end()
	function end(){
		let bigbox=document.querySelector('.bigbox')
		let tc=document.querySelector('.tc')
		let smallbox=document.querySelector('.smallbox')
		let pimg=document.querySelectorAll('.pic>img')
		let img=document.querySelector('.smallbox>img')
		let h4=document.querySelectorAll('h4')
		
		for(let i=0;i<zpic.length;i++){
		zpic[i].onmouseenter=function(){
			clearInterval(t)
			for(let j=0;j<zpic.length;j++){
				zpic[j].style.opacity=0
			}
			zpic[i].style.opacity=1
			zpic[i].style.transition='.5s';
			
			h4[i].onclick=function(){
				bigbox.style.display='block'
				img.src=pimg[i].src
			}
			tc.onclick=function(){
				bigbox.style.display='none'
			}
		}
		zpic[i].onmouseleave=function(){
			t=setInterval(move,1000)
		}
	}
		
		let hot=document.querySelectorAll('.hot1')
		let hotimg=document.querySelectorAll('.rt>img')
		for(let k=0;k<hot.length;k++){
			hot[k].onclick=function(){
				bigbox.style.display='block'
				img.src=hotimg[k].src
			}
			tc.onclick=function(){
				bigbox.style.display='none'
			}
		}
	}
	

