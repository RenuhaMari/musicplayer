const wrapper=document.querySelector(".musciplayer"),
musicImg=wrapper.querySelector("img"),
musicNAme=wrapper.querySelector(".name"),
musicArtist=wrapper.querySelector(".artist"),
playPauseBtn=wrapper.querySelector(".play"),
prevBtn=wrapper.querySelector("#prev"),
nextBtn=wrapper.querySelector("#next"),
mainAudio=wrapper.querySelector("#main-audio"),
progressArea=wrapper.querySelector(".progress"),
progressBar=progressArea.querySelector(".bar")

let curr_track=document.createElement('audio');
let track=[
    {
        name:"Saturn",
        artist:"SZA",
        path:"SZA_Saturn.mp3"

    }
]