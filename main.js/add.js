var area = document.getElementById('area');
const btn = document.querySelector('#button');
const content = document.querySelector('#content');

var stat = {
    'x':0,
    'o':0,
    'd':0
};

 var cell = document.getElementsByClassName('box');



var movePlr = document.querySelector('#movePlr');
console.log(movePlr);

move=0;
area.addEventListener('click',function(event){
    //console.log('click');проверяем на клик
    //console.log(event);проверяем интерфейс event
   // console.log(event.target);проверяем свойство target-которое ссылается на кликнутое событие
    if(move%2 === 0){
        event.target.innerText = 'x';
        movePlr = 'o';
    }else{
        event.target.innerText = 'o';
        movePlr = 'x';
    }
    document.getElementById('movePlr').innerText = movePlr;
    move++;
    checkElements();
});

function checkElements(){
    var boxes = document.getElementsByClassName('box');
     var arr = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]

     ]



    

     for (var i = 0;i<arr.length;i++){
       
         if (boxes [arr[i][0]].innerHTML == 'x' && boxes [arr[i][1]].innerHTML == 'x' && boxes [arr[i][2]].innerHTML == 'x') {
        
        
        stat.x+=1;
        updateStat();
        content.classList.remove("hidden");
        document.getElementById('resultText').innerText = 'Победили Х';
        
        restart();
        

         }else if(boxes [arr[i][0]].innerHTML == 'o' && boxes [arr[i][1]].innerHTML == 'o' && boxes [arr[i][2]].innerHTML == 'o') {
        stat.o+=1;
        updateStat();
        content.classList.remove("hidden");
        document.getElementById('resultText').innerText = 'Победили O';
        restart();
           
        } else if (move == 9) {
        stat.d+=1;
        updateStat();
        content.classList.remove("hidden");
        document.getElementById('resultText').innerText = 'Ничья';
        restart();
     }
      btn.addEventListener('click',btnClick);
        
    }
    function btnClick() {
        content.classList.add('hidden');
    }
    
    function updateStat(){
        document.getElementById('sx').innerText = stat.x;
        document.getElementById('so').innerText = stat.o;
        document.getElementById('sd').innerText = stat.d;
    };
   // console.log(stat);

  
            
        }
        function restart (text){
            alert(text);
            for (var k = 0;k<cell.length;k++) {
                cell[k].innerText = '';
                move =0 ;
                
            }
                
            }
        

            
  