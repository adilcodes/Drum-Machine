// Targeting DOM Elements

let display = document.getElementById("display");
let drumPads = document.querySelectorAll(".drum-pad");

// Making Functions

let displayAudioName = (audioName) => {
    display.innerText = audioName;
};

let triggerAudio = (id) => {
    let audioElement = document.getElementById(id);
    audioElement.currentTime = 0;
    audioElement.play();
    let audioElemParent = audioElement.parentElement;
    audioElemParent.classList.add("active-pad");
    audioElement.addEventListener("ended", () => {
        audioElemParent.classList.remove("active-pad");
    })
};

// Adding events and performing desired actions

drumPads.forEach(pad => {
    pad.addEventListener("click", () => {
        displayAudioName(pad.id);
        triggerAudio(pad.children[0].id);
    })
});

document.addEventListener("keypress", (event) => {
    let eventKey = event.key.toUpperCase();
    let targetElement = document.getElementById(eventKey).parentElement;
    if(targetElement !== null){
        targetElement.click();
    }else{
        return;
    }
});