
$(".postcard").hide();

setInterval(function(){
    $("button").animate({backgroundColor: 'blue'}, "slow");
    $("button").animate({backgroundColor: 'pink'}, "slow");
    $("button").animate({backgroundColor: 'red'}, "slow");
}, 1000);



$("button").click(function(){
    $(".postcard").slideToggle("slow");  
});