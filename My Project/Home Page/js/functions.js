/* 获取元素*/
function $(select,ranger=document){
	if (typeof select=='string') {
		let selector = select.trim();
		let firstChar = select.charAt(0);
		if (firstChar == '#') {
			return ranger.getElementById(selector.substring(1))
		} else if(firstChar == '.'){
			return ranger.getElementsByClassName(selector.substring(1))
		}else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
			return ranger.getElementsByTagName(selector);
		}
	}else if(typeof select=='function'){
		window.onload = function(){
			select();
		}
	}
}
/* 添加文本,可识别标签对  */
function HTML(element,content){
	if (arguments.length == 2) {
		element.innerHTML=content;
	} else if(arguments.length == 1){
		return element.innerHTML;
	}
}
/* 添加文本,不可识别标签对 */
function Text(element,content){
	if (arguments.length == 2) {
		element.innerText=content;
	} else if(arguments.length == 1){
		return element.innerText;
	}
}
/* 添加css样式 */
function css(element,attrObj){
	for (let i in attrObj) {
		element.style[i] = attrObj[i];
	}
}
/* on事件(集合,事件类型,函数) */
function on(collection,type,fn){
	for (let i=0; i<collection.length; i++) {
		collection[i][type] = fn;
	}
}
/* off事件(集合,事件类型,函数) */
function off(collection,type){
	for (let i=0; i<collection.length; i++) {
		collection[i][type] = null;
	}
}

/*在指定元素后面插入一个节点*/
HTMLElement.prototype.insertAfter = function (insert){
	let parent = this.parentNode;
	let next = this.nextElementSibling;
	if (next) {
		parent.insertBefore(insert,next);
	} else{
		parent.appendChild(insert);
	}
}
/*在指定父元素前面插入一个子节点*/
HTMLElement.prototype.prependChild = function (insert){
	let first = this.firstElementChild;
	if (first) {
		this.insertBefore(insert,first);
	} else{
		this.appendChild(insert);
	}
}
/*
 * 将某个子节点插入到父元素前面
 * son.prependTo(parent);
 * */
HTMLElement.prototype.prependTo = function(parent){
	parent.perpendChild(this);
}
/*
 * 将某个子节点插入到父元素后面
 * son.appendTo(parent);
 * */
HTMLElement.prototype.appendTo = function(parent){
	parent.appendChild(this);
}
/*
 * 清空子节点
 * parent.empty();
 */
HTMLElement.prototype.empty = function(){
	let child = this.childNodes;
	/*for (let i = child.length-1; i<0; i--) {
		this.removeChild(child[i]);
	}*/
	this.innerHTML='';
}
/*
 * 移除某个节点本身
 * obj.remove();
 */
HTMLElement.prototype.remove = function(){
	let parent = this.parentNode;
	parent.removeChild(this);
	
}
/*next()
 * 获取下一个元素节点
 * nextAll()
 * 获取后面所有的指定节点
 * nextUntil()
 * 获取某个范围的兄弟节点
 */
/*previous()
 * 获取上一个元素节点
 * previousAll()
 * 获取前面所有的指定节点
 * previousUntil()
 * 获取某个范围的兄弟节点
 */
/*closet()
 * 获取最近的父元素节点节点
 * parent()
 * parents()
 * parentUnill()
 * */

HTMLElement.prototype.next = function(){
	let next = this.nextElementSibling;
	if (next) {
		return next;
	} else{
		return false;
	}
}

HTMLElement.prototype.nextAll = function(){
	let nexte = this.next;
	let newarr = [];
	
	if(nexte){
		newarr.push(nexte);
	}else{
		return false;
	}
	while(nexte){
		nexte = nexte.next();
		newarr.push(nexte);
	}
	newarr.pop();
	return newarr;
}