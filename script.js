
circles = document.querySelectorAll('.circle')
ScordBoard = document.querySelector('.score-board')
timeKeeper = document.querySelector('.time')
startBtn = document.getElementById('start-button')
circleContainer = document.getElementById('circle-container')
time = 60
speed = 5000
x1 = ""
points = ""
restart = true

startBtn.addEventListener('click',countdown)

// reset all not active
const reset = () =>{    
    circles.forEach((circle) => circle.classList.remove('active'));
}
// circles.forEach((circle) => addEventListener('click',start,false));
// circles.forEach((circle) => addEventListener('click',score,false));

function start(){
    reset();
    x2 = Math.floor(Math.random() * 10 + 1)
  
  if(x2 == x1){
      start()
  }

  x1 = x2
   document.getElementById(x2).classList.add('active')
   
}

function score (elem) {
    if(time == 0){
        
        clearInterval(s)
        return
    }
    if(elem.id == x1 && elem.className == "circle active"){
        reset()
        points++
        ScordBoard.innerText = "Score: " + points
    }else{
        if(elem.id !== x1 && elem.className == "circle"){
        circleContainer.style.border = "1px solid #FF494A"
        setTimeout(() => {
            circleContainer.style.border = "1px solid #fff "
        }, 250);
        }
    }
    
    
    if(points >= 30){
        speed = 500
        clearInterval(s)
        s = setInterval(start,speed)
    }else if(points >=20){
        speed = 650
        clearInterval(s)
        s = setInterval(start,speed)
    }else if(points >= 10){
        speed = 750
        clearInterval(s)
        s = setInterval(start,speed)
    }
    
    
    
}



function countdown() {
    if(restart === true){
        startBtn.style.opacity = "0"
        points = 0
        ScordBoard.innerText = "Score: " + points
        timeKeeper.innerText = "Time: 60"
        time = 60
        speed = 1000
        restart = false
        s = setInterval(start,speed)
        y = setInterval(function (){
            
        timeKeeper.innerText = "Time: " + time--
        if(time == 0){
            score()
            clearInterval(y)
            reset()
            restart = true
            timeKeeper.innerText = "Game Over"
            startBtn.style.opacity = "1"
        }
    },1000) 
    }
}
