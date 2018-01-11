$(function () {
   let poke = [],
    colorArr = ['r','f','m','b'],
       flag={};
       table=$('.table'),
       leftBtn=$('.leftBtn'),
       rightBtn=$('.rightBtn')
       
       // console.log(table);


 /*  for(let i=0;i<52;i++){
      // let obj = {};
      let color = colorArr[Math.floor(Math.random()*4)],
       num = Math.floor(Math.random()*13+1);
      do{
         color = colorArr[Math.floor(Math.random()*4)];
         num = Math.floor(Math.random()*13+1);
      }while(flag[color+'_'+num]);
      poke.push({color,num});
      flag[color+'_'+num]=true;
   }*/
   while(poke.length<52){
      let obj = {};
       let color = colorArr[Math.floor(Math.random()*4)],
           num = Math.floor(Math.random()*13+1);
       if(!flag[color+'_'+num]){
          poke.push({color,num});
          flag[color+'_'+num] = true;
       }
   }
   // console.log(poke)
    let index = 0;
    for(let i=0;i<7;i++){
      for(let j=0;j<=i;j++){
          let color = colorArr[Math.floor(Math.random()*4)],
              num = Math.floor(Math.random()*13+1);
         let divs = $('<div>');
         let left = 350 - 50*i + 100*j,
         top = 50*i;
         divs
         .addClass('poke')
         .addClass('left')
         .data('num',num)
         .appendTo('.table')
         .attr('id',`${i}_${j}`)
         .delay(100*i)
         .animate({left,top,opacity:1}) 
         .css({backgroundImage:`url("img/${color}_${num}.JPG")`,backgroundSize:'cover'});
      }  
      index++;
    }

    for(;index<poke.length;index++){
        let color = colorArr[Math.floor(Math.random()*4)],
            num = Math.floor(Math.random()*13+1);
        let divs = $('<div>');
        divs
        .addClass('poke')
        .addClass('left')
        .data('num',num)
        .appendTo('.table')
        .attr('id', -2+'_'+-2)
        .delay(index*50)
        .animate({left:0,top:450,opacity:1})
        .css({backgroundImage:`url("img/${color}_${num}.JPG")`,backgroundSize:'cover'})
    }
    let first=null;
    table.on('click','.poke',function(){
      // console.log(1)

      let coords=$(this).attr('id').split('_');
      // console.log($(`#${coords[0]*1+1}_${coords[1]*1}`).length,(`#${coords[0]*1+1}_${coords[1]*1+1}`).length)
      if($(`#${coords[0]*1+1}_${coords[1]*1}`).length||$(`#${coords[0]*1+1}_${coords[1]*1+1}`).length){
        
        return; 

      }
      // console.log(this)
      // console.log(this);
    // $(this).hasClass('table') $(this).is('.table')
      $(this).toggleClass('active') 
      if($(this).hasClass('active')){
        // console.log(1)
        $(this).animate({top:'-=20'})
      }else{
        $(this).animate({top:'+=20'})
        
      }
      
     if(!first){
         first=$(this);
          console.log(this)
     }else{
      if(first.data('num')+$(this).data('num')==14){
        $('.active').animate({top:0,left:800},function(){
          $(this).remove()
        })
      }else{
        $('.active').animate({top:'+=20'}).removeClass('active')
      }
    
    first=null
  }
   console.log(this);
     }) 
     
     
   
  zIndex = 0;
  rightBtn.on('click',function(){
    if(!$('.left').length){
      return ;
    }

    zIndex++;
    $('.left').last().removeClass('left').addClass('right').animate({left:'+=700',zIndex})
  })

  leftBtn.on('click',function(){        
    if(!$('.right').length){
      return ;
    }

    $('.right').each(function(index,obj){
      let zIndex = $('.left').eq(-1).css('zIndex')*1+1          
      $(this).delay(index*60).animate({left:'-=700',zIndex},function(){
        $(this).removeClass('right').addClass('left')
      })
    })
  })

})
//扑克游戏
 