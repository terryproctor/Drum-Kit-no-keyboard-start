function play_sound(e) {
    
    if (e.key) {
        key = e.key.toLowerCase();
    } else {
     key = String(e.target.classList[0]);
    }
    let music = {
        w: "crash.mp3",
        a: "kick-bass.mp3",
        s: "snare.mp3",
        d: "tom-1.mp3",
        j: "tom-2.mp3",
        k: "tom-3.mp3",
        l: "tom-4.mp3"
    };
    console.log(key, music[key]);
    let sound = new Audio(`sounds/${music[key].toLowerCase()}`);

    sound.play();
}

let buttons = document.querySelectorAll("button").forEach(item => 
                        item.addEventListener("click", play_sound
                        ));

document.addEventListener("keydown", function(event) {
        // console.log(event.key);
        play_sound(event);
    }
)                       