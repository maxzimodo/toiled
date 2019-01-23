//----------------------------------------preloader---------------------------------------------------------------------
document.getElementById("load_screen").innerHTML = '<div class="preloader-wheel"></div>';
window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    load_screen.onclick = function() {
        return false;
    };
    load_screen.style = 'opacity: 0;';
    function removePreloader() {
        document.body.removeChild(load_screen);
    }
    var transitionTime = parseFloat(window.getComputedStyle(load_screen,null).getPropertyValue("transition-duration")) * 1000;
    setTimeout(removePreloader, transitionTime);
});

//----------------------------------------header------------------------------------------------------------------------
document.getElementById("header").innerHTML = '<div class="container"><a href="index.html"><img src="img/label_logo3.svg" alt="toiled records" class="toiled-logo"></a></div>';

//----------------------------------------footer------------------------------------------------------------------------
document.getElementById("footer").innerHTML = '<div class="container clearfix"><div class="pull-left">Small information <a href="about.html">about</a> our label</br>Don’t hesitate to write us letters: <a href="mailto:toiledrec@gmail.com" >toiledrec@gmail.com</a></div><div class="pull-right"><a href="https://soundcloud.com/user-903374575" target=""><img src="img/soundcloud.svg" alt="" class="soundcloud"></a></div></div>';