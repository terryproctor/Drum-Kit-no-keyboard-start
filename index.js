let buttons = document.querySelectorAll("button").forEach(item => 
                item.addEventListener("click", function (event) {
                            let key = String(event.target.classList[0]);
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
                            let sound = document.createElement("audio");
                            sound.src = `sounds/${music[key]}`;
                            sound.play();
                        }
                        ));

                        