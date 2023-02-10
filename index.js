function play_sound(e) {
    if (this.classList) {     
        key = String(this.classList[0]);
    } else {
        key = e.toLowerCase();
    }
    // music jukebox
    let music = {
        w: "crash.mp3",
        a: "kick-bass.mp3",
        s: "snare.mp3",
        d: "tom-1.mp3",
        j: "tom-2.mp3",
        k: "tom-3.mp3",
        l: "tom-4.mp3"
    };
    // console.log(key, music[key]);
    //create a sound and play it
    let sound = new Audio(`sounds/${music[key].toLowerCase()}`);
    sound.play();
    // reest key
    key = null;
}

let buttons = document.querySelectorAll("button").forEach(item => 
                        item.addEventListener("click", play_sound
                        ));

document.addEventListener("keydown", function (event) {
                                    play_sound(event.key)
                                    }

);                    

