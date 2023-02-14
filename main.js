const button_name= document.querySelector("#click-name")
const title_name= document.querySelector("#name")
const input_name= document.querySelector("#newNam")

const progressbarhunger= document.querySelector(".progress-bar-hunger")
const progressbarhealth= document.querySelector(".progress-bar-health")

const feedbutton= document.querySelector("#feed-button")
const cleanbutton= document.querySelector("#clean-button")
const playbutton= document.querySelector("#play-button")

var originalImage= document.querySelector("#tamagotchi-image")
var imagen= document.querySelector("#tamagotchi-image")

let hunger= 0;
let live = 100; 

button_name.addEventListener("click",function() {
  title_name.innerHTML = input_name.value;
})
playbutton.addEventListener("click", function() {
  imagen.src = "play.gif";
  
    setTimeout(function() {
      imagen.src = "happy.gif";
    }, 2300); 
  });

  playbutton.addEventListener("click", function() {
    
   
    let intervalohunger= setInterval(function() {
    hunger= hunger + 10;
    if (hunger>100) {
      hunger=100;
      clearInterval();
    }
    if(hunger<=50){
      progressbarhunger.style.width = hunger + "%";
      progressbarhunger.style.backgroundColor="green";
     
    }
    else if (hunger >50 && hunger <80){
      progressbarhunger.style.width = hunger + "%"
      progressbarhunger.style.backgroundColor="yellow"
      
    }
    else if (hunger >80){
      progressbarhunger.style.width = hunger + "%"
      progressbarhunger.style.backgroundColor="red"
      
    }
  
    progressbarhunger.style.width = hunger + "%";
    },2000)
    
    let intervalolive= setInterval(function() {
      live= live - 5  ;
      if (live < 0) {
        live = 0;
        clearInterval(intervalolive);
        alert("tu tamagotchi a muerto");
      }
      if(live>=50){
        progressbarhealth.style.width = live + "%"
        progressbarhealth.style.backgroundColor="green"
      }
      else if (live <=50 && live >20){
        progressbarhealth.style.width = live + "%"
        progressbarhealth.style.backgroundColor="yellow"
        imagen.src="cerca.gif" 
      }
      else if (live <=10){
        progressbarhealth.style.width = live + "%"
        progressbarhealth.style.backgroundColor="red"
        imagen.src="dead.gif"
      }
    
      progressbarhealth.style.width = live + "%";
      },2000)
    
    feedbutton.addEventListener("click", function() {
      hunger= hunger -10;
      if (hunger < 0) {
        hunger = 0;
      }
    
      
    
      progressbarhunger.style.width = hunger + "%";
    });
    cleanbutton.addEventListener("click", function() {
      live=live +20; 
      if (live > 100) {
        live = 100;
      }
      progressbarhealth.style.width = live + "%";
    });

  
    cleanbutton.addEventListener("click", function() {
      imagen.src = "clean.gif";
      
        setTimeout(function() {
          imagen.src = "happy.gif";
        }, 300); 
      });
    
      feedbutton.addEventListener("click", function() {
      imagen.src = "comer.gif";
      
        setTimeout(function() {
          imagen.src = "happy.gif";
        }, 300); 
      });
    
        feedbutton.addEventListener("click", function() {
          hunger = hunger - 10; 
          if (hunger < 0) {
            hunger = 0;
          }
          live = live + 10; 
          if (live > 100) {
            live = 100;
          }
          progressbarhunger.style.width = hunger + "%";
          progressbarhealth.style.width = live + "%";
        });  

     
      

  });
  