$(function(){
	let arr=[{id:1,name:'张小明',tell:'18235861456',pingyin:'zhangxiaoming'},
			{id:2,name:'王小明',tell:'18235865614',pingyin:'wangxiaoming'},
			{id:3,name:'李小明',tell:'18235836416',pingyin:'lixiaoming'},
			{id:4,name:'刘小明',tell:'18231596456',pingyin:'liuxiaoming'},
			{id:5,name:'赵小明',tell:'18231498456',pingyin:'zhaoxiaoming'},
			{id:6,name:'冯小明',tell:'18233721456',pingyin:'fengxiaoming'},
			{id:7,name:'程小明',tell:'18243721456',pingyin:'chengxiaoming'},
			{id:8,name:'白小明',tell:'18253721456',pingyin:'baixiaoming'},
			{id:9,name:'吴小明',tell:'18263721456',pingyin:'wuxiaoming'},
			{id:10,name:'韩小明',tell:'18733721456',pingyin:'hanxiaoming'},
			{id:11,name:'马小明',tell:'18933721456',pingyin:'maxiaoming'},
			{id:12,name:'朱小明',tell:'18033721456',pingyin:'zhuxiaoming'}
			];
	localStorage.setItem('guoshazi',JSON.stringify(arr));
	let data=JSON.parse(localStorage.getItem('guoshazi'));
	let dl=$('dl')[0];
	let ul=$('ul')[0];
	dl.innerHTML=" ";
	ul.innerHTML=" ";
	render(data);
	function  render(data){
		let obj={};
		let drr=[];
		data.forEach(elemt=>{//把每一个首字母作为属性给了对象obj，属性值为符合条件的值的集合
			let firstchild=elemt.pingyin.trim().charAt().toUpperCase();
			
			if(!obj[firstchild]){  //等同于obj['firstchild']
				obj[firstchild]=[];
				drr.push(firstchild);
			}
			obj[firstchild].push(elemt);
		});
			console.log(obj);

		let keys=drr.sort();
		keys.forEach(ele=>{
			ul.innerHTML+=`<li>${ele}</li>`;
			dl.innerHTML+=`<dt>${ele}</dt>`;
			obj[ele].forEach(v=>{
				dl.innerHTML+=`<dd><a href="tel:${v.tell}">${v.name}</a></dd>`;
			})
		})
	}
	//楼层
	let dt=$('dt');
	let li=$('li');
	let gao=document.documentElement.scrollTop?document.documentElement:document.body;
	for(let i=0;i<li.length;i++){
		
		li[i].onclick=function(){
			gao.scrollTop=dt[i].offsetTop-46;
			
		}
	}
	//提示
	let trip=$('.trip')[0];
	let top=[];
	let height=$('input')[0].offsetHeight+$('.trip')[0].offsetHeight;
	Array.prototype.forEach.call(dt,function(element){
		top.push(element.offsetTop);
	});
	trip.innerText=dt[0].innerText;
	window.onscroll=function(){
		top.forEach((element,index)=>{
			if(height+gao.scrollTop>element){
				trip.innerText=dt[index].innerText;
			}
		})	
	}
	//搜索
	let input=$('input')[0];
	input.addEventListener('input',function(){
		let ve=this.value.trim();
		let daan=data.filter(ele=>ele.pingyin.includes(ve)||ele.name.includes(ve)||ele.tell.includes(ve));
		trip.innerText=dt[0]?dt[0].innerText:'A';
		dl.innerHTML=" ";
		ul.innerHTML=" ";
		render(daan);
		if(ve==""){
			location.reload();
		}
		
		
	})

});