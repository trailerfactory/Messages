var myAudio = document.getElementById("myAudio");
         var myH1 = document.getElementById("myH1");
         var myP1 = document.getElementById("myP1");
         var playButton = document.getElementById("playButton");
         var playing = false;

         function playAudio() {
            myAudio.play();
            playing = true;
            playButton.innerHTML = "What is";
            playButton.classList.add("active");
            myH1.style.opacity = "1";
            myP1.style.opacity = "1";
         }

         myH1.style.opacity = "0";
         myP1.style.opacity = "0";
