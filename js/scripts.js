//Business Logic
var min=1;
var max=6;
var total= 0;

function getDice(){
    total += Math.floor(Math.random()* (max-min+1)+min );
    if (total ==1){
        alert("Nooo")
    }
}



// function fetchRandomNumber = () => getRandomNumber(1,6);};


//RNG - Math.floor((Math.random() * 6) + 1);



// UI logic
$(document).ready(function(){
    $("#play").submit(getDice());

    console.log(total);
    
    
    
});