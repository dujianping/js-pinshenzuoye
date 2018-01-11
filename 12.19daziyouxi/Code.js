class Code{
	constructor(){
		this.char = [['Y','img/Y.png'],['Q','img/Q.png'],['M','img/M.png'],['H','img/H.png'],['L','img/L.png'],['X','img/X.png'],['T','img/T.png'],['W','img/W.png'],['Z','img/Z.png'],['P','img/P.png'],['S','img/S.png'],['V','img/V.png'],['N','img/N.png'],['O','img/O.png'],['A','img/A.png'],['B','img/B.png'],['C','img/C.png'],['D','img/D.png']];
		this.length = 3;
		this.cur = [];
		//下落速度
		this.speed = 5;
		this.box = document.querySelector('.score>span');
		this.score = 0;
		this.guan = 5;
		this.life = 10;
		this.lifebox = document.querySelector('.life>span');
		this.position =[];
		
		
	}
	start(){
		this.getChars(this.length);
		this.drop();
		this.cancel();
	}
	getChars(length){
		for(let i = 0;i<length;i++){
			this.getChar();
		}
	}

	checknum(char){
        return this.cur.some(element=>element.innerText == char)
    }

    checkpos(position){
    	 return this.position.some(element=>Math.abs(element-position)<=50)
    }
	getChar(){
		let num = Math.floor(Math.random()*this.char.length)
		do{
			num = Math.floor(Math.random()*this.char.length)
		}while(this.checknum(this.char[num][0]))

		let divs = document.createElement('div');
		//距离顶端的距离tops，在100px范围内取整
		let tops = Math.floor(Math.random()*100);
		//距离左边的距离left
		let left = Math.floor((window.innerWidth - 400)*Math.random()+200);
		
		do{
			left = Math.floor((window.innerWidth - 400)*Math.random()+200);
		}while(this.checkpos(left))

		divs.style.cssText = `width:55px;height:75px;color:#fff;
							font-size:0px;text-align:center;line-height:50px;
							position:absolute;top:${tops}px;left:${left}px;
							border-radius:5px;background:url(${this.char[num][1]}) center/cover`
		divs.innerText = this.char[num][0];
		document.body.appendChild(divs);
		this.cur.push(divs);
		this.position.push(left);
	}

	drop(){
        let that = this;
        that.t = setInterval(function(){
            for(let i = 0;i<that.cur.length;i++){
                let tops = that.cur[i].offsetTop + that.speed;
                that.cur[i].style.top = tops + 'px';
                if(tops >= 500){
                    document.body.removeChild(that.cur[i]);
                    that.cur.splice(i,1);
                    that.position.splice(i,1);
                    that.getChar();

                    that.life--;
                    that.lifebox.innerText = that.life;
                    if(that.life<0){
                    	let flag = confirm('是否重新开始')
                    	if(flag){
                    		that.restart()
                    	}else{
                    		close()
                    	}
                    }
                }
            }
        },100)
    }

    cancel(){
    	let _this = this;
    	document.onkeydown = function(e){
    		//  e.keyCode方法
    		// let code = String.fromCharCode(e.keyCode);
    		// e.key方法
    		let code = e.key.toUpperCase();
    		for(let i = 0;i<_this.cur.length;i++){
    			if(code == _this.cur[i].innerText){
    				document.body.removeChild(_this.cur[i]);
    				_this.cur.splice(i,1);
    				_this.position.splice(i,1);
    				_this.getChar();

    				_this.box.innerText = ++ _this.score;
    				if(_this.score>= _this.guan){
    					_this.next()
    				}

    			}
    		}
    	}
    }

    next(){
    	clearInterval(this.t);
    	this.cur.forEach(ele => {
    		document.body.removeChild(ele);
    	})
    	this.cur = [];
    	this.position = [];
    	//初始化字符
    	this.length++;
    	this.guan += 10;
    	
    	this.getChars(this.length)
		this.drop()
    }

    restart(){
    	clearInterval(this.t);
    	this.cur.forEach(ele => {
    		document.body.removeChild(ele);
    	})
    	this.cur = [];
    	this.position = [];
    	this.length = 3;

    	this.score = 0;
    	this.box.innerText = this.score;

    	this.life = 10;
    	this.lifebox.innerText = this.life;

    	this.getChars(this.length);
		this.drop()
    }



}
