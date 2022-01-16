//shits dont work 
document.addEventListener("keydown", function(e){
    console.log(e);
    if(e.code === 'Space'){
        changeColor();
    }
});


    var obstacle = document.getElementById("block");
    var character = document.getElementById("char");



//character jumping function
function changeColor () {
    
    

     var character = document.getElementById("char");
   //spacebar when character is already in the air
   if(character.classList.contains('animation')){
     return;//do nothing
    }   
    //spacebar when character is on the ground
     character.classList.add('animation');
     setTimeout(function (){
        character.classList.remove('animation');
   }, 800)
};

    // collision detection...kind of
    var checkState = setInterval(function(){
    var obstacle = document.getElementById("block");
    var character = document.getElementById("char");

    var characterPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var objectPosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(objectPosition < 60 && objectPosition > 0 && characterPosition >= 310){
        alert("you lost");
    }
},10)