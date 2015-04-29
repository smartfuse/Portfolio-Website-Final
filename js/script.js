// TyperJS initialization.
$('[data-typer-targets]').typer();

var previousScroll = 0;
var threshold = 110;
var duration = 300;

// Resizable navigation bar.
$(window).scroll(function(){
    
    if(previousScroll < threshold && $(window).scrollTop() > threshold) {
        $('.section-launch').animate({
            height: "140px"
        }, {duration: duration, queue: false});
        
        $('.portrait').animate({
            height: "80px",
            width: "80px"
        }, {duration: duration, queue: false});
        previousScroll = $(window).scrollTop();
    }
    else if(previousScroll > threshold && $(window).scrollTop() < threshold) {
        $('.section-launch').animate({
            height: "350px"
        }, {duration: duration, queue: false});
        
        $('.portrait').animate({
            height: "125px",
            width: "125px"
        }, {duration: duration, queue: false});
        previousScroll = $(window).scrollTop();
    }
});