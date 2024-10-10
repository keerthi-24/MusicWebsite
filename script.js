    let menu = document.querySelector(".menu");
      let navRight = document.querySelector(".nav-right");
    menu.addEventListener('click', () => {
      if(navRight.style.display === 'none') {
        navRight.style.display = 'flex';
      }else {
        navRight.style.display = 'none';
      }
    })
    let currentAudio = null;
    function playSong(songFile) {
      let audio = new Audio(songFile);
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
      }
      if (audio.paused) {
        audio.play();
        currentAudio = audio;
      } else {
        audio.pause();
        currentAudio = audio;
      }
    }
    function stopSong() {
      if (currentAudio) {
        currentAudio.pause();
      }
    }

  