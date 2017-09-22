window.onload=function(){
	/*
	 增删改查
	 */
	/*
	 改：插入
	 先变成可编辑状态
	 当前单元格插入input      把单元格内容给input
	 input  给td
	if  e.nodeName=='TD'&&e.className!=='del'
	
	创建input
	innerText=''
	innerText给了input.value
	appendChild
	
	更新：
	表单失去焦点——blur
	newvalue =input.value
	删掉   ele.removeChild(input)
	newvalue.trim()   给单元格
	*/
	let table=document.querySelector('tbody')
	
	table.ondblclick=function(e){
		let inputs=document.createElement('input')
		let ele=e.target	
		if(ele.nodeName=='TD'&&ele.className!=='del'){
			inputs.value = ele.innerText
			e.target.innerText=''
			e.target.appendChild(inputs)
			
			inputs.onblur=function(e){
				let newvalue=inputs.value
				ele.removeChild(inputs)
				inputs=null
				ele.innerText=newvalue.trim()
			}
		}else if(ele.nodeName=='BUTTON'){
			//删除
			/*  
			   tr=ele.parentNode.parentNode  2次
			 * 
			 * */
			let tr=ele.parentNode.parentNode             //删除 找两次父元素
			table.removeChild(tr)        
			tr=null                //删除自己
		}
	}
	
	
	//增
	let btnadd=document.querySelector('.btnadd')
	btnadd.onclick=function(){
		let tr=document.createElement('tr')
		tr.innerHTML=` 
					<td>张三</td>
					<td>20</td>
					<td>男</td>
					<td>123456</td>
					<td>山西</td>
					<td class="del"> <button>删除</button> </td>
		`
		table.appendChild(tr)
	}
	
	let add=document.querySelector('.btnadd')
	let tbody=document.querySelector('tbody')
	let student=[
		{'name':'张三','age':20,'sex':'男','phone':12345678,'home':'山西'},
		{'name':'张三','age':20,'sex':'男','phone':12345678,'home':'山西'},
		{'name':'张三','age':20,'sex':'男','phone':12345678,'home':'山西'},
		{'name':'张三','age':20,'sex':'男','phone':12345678,'home':'山西'}
	]
	let students=JSON.stringify(student)
	let a=JSON.parse(students)
	a.forEach(value=>{
		tbody.innerHTML +=`
		<tr>
			<td>${value.name}</td>
			<td>${value.age}</td>
			<td>${value.sex}</td>
			<td>${value.phone}</td>
			<td>${value.home}</td>
			<td class="del"><button>删除</button> </td>
		</tr>
		`
	})
}
