function  $(sel,obj){
        obj=obj ||  document;
        if(typeof  sel == 'string'){

            let str=sel.trim();

            let con=str.charAt(0);
            if(con == '#'){
                return  document.getElementById(str.slice(1));
            }else if(con ==  '.'){
                return  obj.getElementsByClassName(str.slice(1));
            }else  if(/^[a-zA-Z][a-zA-z1-6]{0,6}$/.test(str)){
                return  obj.getElementsByTagName(str);
            }else  if(/^<[a-zA-Z][a-zA-z1-6]{0,6}>$/.test(str)){
                return  document.createElement(str.slice(1,-1));
            }
        }else  if(typeof  sel ==  'function'){
            window.addEventListener('load',sel);
            }
        
    }
HTMLElement.prototype.app=function(child){//在谁里插
        this.appendChild(child);
    }
HTMLElement.prototype.inbe=function(child){
        let childnode=this.firstElementChild;
        console.log(childnode);
        if(childnode){
            this.insertBefore(child,childnode);
        }else{
            this.appendChild(child);
        }
    }
HTMLElement.prototype.appto=function(parst){//谁插入到谁里/后
    parst.appendChild(this);
}
HTMLElement.prototype.inbeto=function(parst){//谁插入到谁里/前
    let childnode=parst.firstElementChild;
    if(childnode){
        parst.insertBefore(this,childnode);
    }else{
        parst.appendChild(this);
    }
}
HTMLElement.prototype.insert=function(node){//在谁之前插  外部
    let parst=this.parentNode;
    parst.insertBefore(node,this);
}
HTMLElement.prototype.after=function(node){//在谁之后插，等同于在兄弟元素之前插   外部
    let border=this.nextElementSibling;
    if(border){
        border.insert(node);  
    }else{
        let parst=this.parentNode;
        parst.appendChild(node);
    }
    
}
HTMLElement.prototype.parsts=function(){//寻找父元素
    let arr=[];
    let parse=this.parentNode;
    if(parse.nodeName  ==  'HTML'){
        arr.push(parse);
    }
    while(parse.nodeName  !=  'HTML'){
        arr.push(parse);
        parse=parse.parentNode;
        if(parse.nodeName  ==  'HTML'){
            arr.push(parse);
        }
    }
    return arr;
}
HTMLElement.prototype.offsetpar=function(){  //寻找拥有定位属性的父元素，返回第一个
    let  parset=this.parsts();
    let node=null;
    for(i=0;i<parset.length;i++){
        let v='relative'  ||   'absolute';
        if(getComputedStyle(parset[i],null).position==v){
            node=parset[i];
            break;
        }
    }
    if(node==null){
        node=document.body;
    }
    return  node;
}
HTMLElement.prototype.div=function(){
    let arr=[];
    let node=this.children;
    for(i=0;i<node.length;i++){
        if(node[i].nodeName  ==  'DIV'){
            arr.push(node[i]);
        }
    }
    return arr;
}


function  fn(box){
    box.onmousedown=function(e){
        px=e.offsetX;
        py=e.offsetY;
        document.onmousemove=function(e){
            sx=e.clientX;
            sy=e.clientY;
            box.style.left=`${sx-px}px`;
            box.style.top=`${sy-px}px`;
        }
    }
    box.onmouseup=function(e){
        document.onmousemove=null;
    }




    // let ox , oy;
    // box.addEventListener('mousedown',function(event){
    //     ox = event.offsetX , oy = event.offsetY;
    //     document.addEventListener('mousemove',fn);

    // });
    // function fn(event){
    //     let cx = event.clientX , cy = event.clientY;
    //     box.style.left = cx-ox+'px';
    //     box.style.top = cy-oy+'px';
    // }
    // box.addEventListener('mouseup',function(){
    //     document.removeEventListener('mousemove',fn)
    // });
}