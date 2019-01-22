//----------------------------------------releases nav------------------------------------------------------------------
document.getElementById("nav").innerHTML = '<a href="index.html">001</a><a href="002.html">002</a>';
var actualPage = Number(document.getElementById("releaseNumber").innerHTML);
var navItems = document.getElementById("nav").children;
navItems[actualPage - 1].classList.add("active");

//----------------------------------------audio player------------------------------------------------------------------


document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
            audios[i].nextElementSibling.classList.add("paused");
            audios[i].nextElementSibling.classList.remove("playing");
        }
    }
}, true);

function playThis(el) {

    var track = el.previousElementSibling;

    function pausedView() {
        el.classList.add("paused");
        el.classList.remove("playing");
        //el.classList.remove("loading");
    }

    function playingView() {
        el.classList.add("playing");
        el.classList.remove("paused");
        //el.classList.remove("loading");
    }

    // function loadingView() {
    //     el.classList.remove("playing");
    //     el.classList.remove("paused");
    //     el.classList.add("loading");
    // }

    if (track.duration > 0 && !track.paused) {
        track.pause();
        pausedView();
    }

    else {
        track.play();
        playingView();
    }

    track.onended = function() {
        pausedView()
    };
    track.onpause = function() {
        pausedView()
    };
    track.onplay = function() {
        playingView()
    };

}
