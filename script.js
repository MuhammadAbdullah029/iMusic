var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
];

var Allsongs = document.querySelector(".all-songs");
var poster = document.querySelector(".left");

var backward = document.querySelector("#backward");
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");
var puase = document.querySelector("#img");

var audio = new Audio();

var selectedSong = 0;

function mainFunction(){
    var clutter = "";

arr.forEach(function(e, idx){
    clutter += `<div class="song-card" id=${idx}>
    <div class="part-1">
     <img src=${e.img} alt="">
     <h2>${e.songName}</h2>
    </div>
    <h6>3:56</h6>
 </div>`;
})
    Allsongs.innerHTML = clutter;

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

    Allsongs.addEventListener('click', function(dets){
        selectedSong = dets.target.id;
        puase.src = "./images/pause.svg";
        flag=1;
        mainFunction();
        audio.play();
    })
var flag = 0;
    play.addEventListener('click', function(){
        if (flag==0) {
            puase.src = "./images/pause.svg";
            flag = 1;
            mainFunction();
            audio.play();
        }
        else{
            puase.src = "./images/play.svg";
            flag = 0;
            mainFunction();
            audio.puase();
        }
    })

    forward.addEventListener('click', function(){
       if (selectedSong < arr.length - 1) {
        selectedSong++;
        puase.src = "./images/pause.svg";
        flag=1;
        mainFunction();
        audio.play();
       }
       else{
        forward.style.opacity = .5;
       }
    })

    backward.addEventListener('click', function(){
        if (selectedSong > 0) {
         selectedSong--;
         puase.src = "./images/pause.svg";
         flag=1;
         mainFunction();
         audio.play();
        }
        else{
         backward.style.opacity = .5;
        }
     })

mainFunction();