/*
 *属性：
 * 	描述    个数 速度  那些字符  得分  关卡  生命值  减分
 * 方法：
 * 	能够实现的功能/行为
 *     消除  生成   下一关  重新开始
 * */
function Game(){
	//属性
	this.charSheet = [
	['Q','img/q.png'],
	['W','img/w.png'],
	['E','img/e.png'],
	['R','img/r.png'],
	['T','img/t.png'],
	['Y','img/y.png'],
	['U','img/u.png'],
	['I','img/i.png'],
	['O','img/o.png'],
	['P','img/p.png'],
	['A','img/a.1.png'],
	['S','img/s.png'],
	['D','img/d.png'],
	['F','img/f.png'],
	['G','img/g.png'],
	['H','img/h.png'],
	['J','img/j.png'],
	['K','img/k.png'],
	['L','img/l.png'],
	['Z','img/z.png'],
	['X','img/x.png'],
	['C','img/c.png'],
	['V','img/v.png'],
	['B','img/b.png'],
	['N','img/n.png'],
	['M','img/m.png']]
	this.length = 5  //获取长度
	
	this.element = [] 
	this.speed = 10
	//速度
	this.score = 0;
	this.scoreObj = document.querySelector('.score>span')
	this.life = 10
	this.lifeObj = document.querySelector('.life>span')
	this.positions = []
}
//在原型对象上创建方法   json
Game.prototype={
	//开始
	start:function(){
		this.getChars(this.length); //获取字符个数
		this.drop()//调用降落的方法
		this.key()
	},
	//获取5个字符   length = 5
	getChars:function(length){
		for (let i = 0; i < length; i++) {
			this.getChar();
		}
	},
	//去重复
	checkPosition:function(lefts){
		return this.positions.some(function(value){return Math.abs(value-lefts)<100})
	},
	//quchongdie
	checkRepeat:function(num){
		return this.element.some(value=>value.innerText == this.charSheet[num][0])
	},
	getChar:function(){
			
			let num
			do{
				num = Math.floor(Math.random()*this.charSheet.length)
			}while (this.checkRepeat(num))
			//动态添加div
			let a = document.createElement('div')
			//添加css样式
			a.classList.add('char')
			//
			a.innerText = this.charSheet[num][0]
			let lefts
			let tops = Math.random()*100;
			do{
				lefts = Math.random()*(innerWidth-200)+100

			}while (this.checkPosition(lefts))

			
			a.style.cssText = `
			left : ${lefts}px;
			top :${tops}px;
			background-image:url('${this.charSheet[num][1]}')
			`
			document.body.appendChild(a)
			this.element.push(a)
			this.positions.push(a)
	},
	drop:function(){
		this.t = setInterval(()=>{
			for(let i = 0;i<this.element.length;i++){
				let tops = this.element[i].offsetTop
				
				this.element[i].style.top = `${tops+this.speed}px`

			if(tops >= 500){
				document.body.removeChild(this.element[i])
				this.element.splice(i,1)
				this.life--
				this.lifeObj.innerText = this.life
				}
				
			}
			if(this.element.length<this.length){
				this.getChar()
				
			}
			if(this.life == 0){
						confirm('You Lose!!!Please Try Argin')
						this.over()
					}
			
		}, 100)
	},
	key:function(){
		document.onkeydown = (e)=>{
			let char = String.fromCharCode(e.keyCode)
			for(let i = 0;i<this.element.length;i++){
				if(char == this.element[i].innerText){
					this.score++
					this.scoreObj.innerText = this.score
					document.body.removeChild(this.element[i])
					this.element.splice(i,1)
					this.positions.splice(i,1)
					if(this.score == 10){
						this.next()
					}
				}
			}
		}
	},
	next:function(){
		clearInterval(this.t)
		for(let i = 0;i<this.element.length;i++){
			document.body.removeChild(this.element[i])
		}
		
		this.element = []
		this.positions = []
		this.speed+=10
		this.start()
	},
	over:function(){
		clearInterval(this.t)
		for(let i = 0;i<this.element.length;i++){
			document.body.removeChild(this.element[i])	
		}
		this.element = []
		this.positions = []
		this.life = 10
		this.length=5
		this.start()
	}
}
