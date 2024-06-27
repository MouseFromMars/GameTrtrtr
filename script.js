let container = document.querySelector('.container');
let previousElement = '';
const elements = document.querySelectorAll('.square');
const colorList = ['blue', 'pink', 'red', 'yellow', 'green', 'purple', 'tomato', 'burlywood','blue', 'pink', 'red', 'yellow', 'green', 'purple', 'tomato', 'burlywood'];


let zerr = 0;
let coll = 16;
localRecord = (localStorage.getItem('data'));
rec.innerHTML = localRecord;









    

//console.log(elements)
elements.forEach(el => {
    const randomIndex = Math.floor(Math.random() * colorList.length)
    let randomColor = colorList[randomIndex]
    colorList.splice(randomIndex, 1)
    el.classList.add(randomColor)  
   
})





// Рандомная генерация расположения цветов


container.addEventListener('click', function(event){
    let currentElement = event.target;
    let balls = document.getElementById('Balls');
    let rec = document.getElementById('rec');

    
   


    

    

    
   
    

    

   // действия, которые делаются, если мы кликнули по элементу .container 
         // event - описание событыя (объект события), в котором хранятся все сведения о произошедшем событии ( в данном случае click ) 
         //  из этого обёекта мы можем достать элемент, по которому событие и произошло
         // event.target
    if (currentElement.classList.contains("square_closed"))  {
        currentElement.classList.remove("square_closed");
        
        if(previousElement =='') {
           previousElement = currentElement;
           let music = new Audio('clik.mp3');
            music.play();
            }




        else if (previousElement.classList.contains("blue")
        &&
        currentElement.classList.contains("blue")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
            
            // нашлий пару синих
        }
        else if (previousElement.classList.contains("pink")
        &&
        currentElement.classList.contains("pink")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
            // нашлий пару розовых
        }

        else if (previousElement.classList.contains("green")
        &&
        currentElement.classList.contains("green")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
        }


        else if (previousElement.classList.contains("purple")
        &&
        currentElement.classList.contains("purple")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
        }

        else if (previousElement.classList.contains("tomato")
        &&
        currentElement.classList.contains("tomato")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
        }


        else if (previousElement.classList.contains("burlywood")
        &&
        currentElement.classList.contains("burlywood")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
        }


        else if (previousElement.classList.contains("red")
        &&
        currentElement.classList.contains("red")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;
            
        
            
        }

        else if (previousElement.classList.contains("yellow")
        &&
        currentElement.classList.contains("yellow")
        ) {
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = '';
            zerr = zerr + 15;
            coll = coll - 2;

            let music = new Audio('click2.mp3');
            music.play();
        }



        
        





           else {
            previousElement.classList.add("square_closed")
            previousElement = currentElement;
            zerr = zerr - 2;

            let music = new Audio('clik.mp3');
            music.play();
           }

        }


        balls.innerHTML = zerr;
        
        console.log("coll = " + coll)
        if (coll == 0 ) {
            alert("Красиво")

        }
/*
        if (coll == 0) {
            predRec = zerr;
            localStorage.setItem('data', predRec);
            console.log(localStorage.getItem('data'));
            rec.innerHTML = predRec;
        }
*/
/*
        if (coll == 0 && zerr >= rec) {
             rec == zerr;
             localStorage.setItem('data', rec);
             rec.innerHTML = localStorage.getItem('data');
       
}
*/




  if (coll == 0 && zerr >= localRecord) { 
    localStorage.setItem('data', zerr);
    rec.innerHTML = localRecord;
 }

 
  
  
 
 console.log(localRecord);
 
       








        if (currentElement.classList.contains("red")) {
            let music = new Audio('sounddrom.mp3');
            music.play();
        }
        
   
      

    

        
        currentElement = event.target;
        
        
      
    
})        

