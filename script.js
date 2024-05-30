var colors = ['blue', 'yellow', 'red'];


function animateColor(color){
    setInterval(function(){
    $("button").animate({backgroundColor: color}, "slow");
}, 1000);
}



$(".postcard").hide();

// setInterval(function(){
//     $("button").animate({backgroundColor: 'blue'}, "slow");
// }, 1000);

// setInterval(function(){
//     $("button").animate({backgroundColor: 'yellow'}, "slow");
// }, 1000);

// setInterval(function(){
//     $("button").animate({backgroundColor: 'red'}, "slow");
// }, 1000);



for(var i=0; i <colors.length; i++){
    var selectedColor = colors[i];
    animateColor(selectedColor);
}



$("button").click(function(){
    $(".postcard").slideToggle("slow");  
});