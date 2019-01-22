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
document.getElementById("header").innerHTML = '<div class="container"><a href="index.html"><img src="img/label_logo.svg" alt="toiled records"></a></div>';

//----------------------------------------footer------------------------------------------------------------------------
document.getElementById("footer").innerHTML = '<div class="container">Small information <a href="about.html">about</a> our label</br>Don’t hesitate to write us letters: <a href="mailto:toiledrec@gmail.com" >toiledrec@gmail.com</a></div>';