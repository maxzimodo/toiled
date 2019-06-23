//----------------------------------------releases nav------------------------------------------------------------------
document.getElementById("nav").innerHTML = '<a href="001.html">001</a><a href="002.html">002</a><a href="003.html">003</a><a href="index.html">004</a><a href="005.html">005</a>';
var actualPage = Number(document.getElementById("releaseNumber").innerHTML);
var navItems = document.getElementById("nav").children;
navItems[actualPage - 1].classList.add("active");
navItems[actualPage - 1].addEventListener(
    'click', stopDefAction, false
);
function stopDefAction(evt) {
    evt.preventDefault();
}
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

    var track = el.parentNode.querySelector('audio');
    var trackPreloader = el.nextElementSibling;

    if (trackPreloader.classList.contains('trackPreloader')) {
        trackPreloader.style.display = 'block';
    }

    track.addEventListener('canplaythrough', function () {
        if (trackPreloader.classList.contains('trackPreloader')) {
            trackPreloader.remove();

        }
    }, false);

    function pausedView() {
        el.classList.add("paused");
        el.classList.remove("playing");
    }

    function playingView() {
        el.classList.add("playing");
        el.classList.remove("paused");
    }

    if (track.duration > 0 && !track.paused) {
        track.pause();
        pausedView();
    } else {
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

