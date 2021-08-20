var tag = document.createElement("BUTTON");
// var text = document.createTextNode("COW");
// tag.appendChild(text);
var element = document.getElementById("new");

var h = 55;
var w = 75;

// set button to white 
tag.style.borderColor = "white"
tag.style.background = "white"
tag.style.border = "none"

tag.style.cursor = "pointer"

tag.style.width = `${w}px`
var x = Math.random() * (window.innerWidth - w)

tag.style.height = `${h}px`
var y = Math.random() * (window.innerHeight - h)

tag.style.position = "absolute"
tag.style.left = `${x}px`
tag.style.top = `${y}px`

tag.onclick = () => {
    var rando = Math.random();
    if (rando > 0.55) {
        window.open("https://www.youtube.com/watch?v=9hhMUT2U2L4&ab_channel=Memes")
    } else if (rando > 0.2) {
        window.open("https://www.youtube.com/watch?v=rRPQs_kM_nw&ab_channel=10HoursMovies")
    } else {
        window.open("https://www.youtube.com/watch?v=mXnJqYwebF8")
    }
    tag.style.display = "none"
    clearInterval(interval)
}


var currentxpos;
var currentypos;
document.addEventListener('mousemove', (e) => {
    currentxpos = e.pageX;
    currentypos = e.pageY;
})
element.appendChild(tag);

var veryfar = new Audio('stuff/veryfar.mp3');
var far = new Audio('stuff/far.mp3');
var close = new Audio('stuff/close.mp3');
var veryclose = new Audio('stuff/veryclose.mp3');

var interval = setInterval(() => {
    let distance = Math.sqrt(Math.pow(x - currentxpos, 2) + Math.pow(y - currentypos, 2))
    if (distance > 600) {
        veryfar.play();
    } else if (distance > 275) {
        far.play();
    } else if (distance > 100) {
        close.play();
    } else {
        veryclose.play();
    }
}, 750);

