window.onload=function(){
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
