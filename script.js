
$(".postcard").hide();

setInterval(function(){
    $("button").animate({backgroundColor: 'blue'}, "slow");
}, 1000);

setInterval(function(){
    $("button").animate({backgroundColor: 'yellow'}, "slow");
}, 1000);

setInterval(function(){
    $("button").animate({backgroundColor: 'red'}, "slow");
}, 1000);



$("button").click(function(){
    $(".postcard").slideToggle("slow");  
});