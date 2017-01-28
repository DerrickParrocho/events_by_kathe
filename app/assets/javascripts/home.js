$(document).ready(function(){
    $("p").click(function(){
        alert("The paragraph was clicked.");
    });
    
     $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
});