<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Drum Machine</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <style>
        body,html {
          margin: 0;
          padding: 0;
          font-size: 10px;
          font-family: sans-serif;
          background: url(b9r5sEL.jpg) bottom center;
          background-size: cover;
        }

        .keys {
          display: flex;
          flex: 1;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }

        .key {
          border: .4rem solid black;
          border-radius: .5rem;
          margin: 1rem;
          font-size: 1.5rem;
          padding: 1rem .5rem;
          transition: all .07s ease;
          width: 10rem;
          text-align: center;
          color: white;
          background: rgba(0,0,0,0.4);
          text-shadow: 0 0 .5rem black;
        }

        .playing {
          transform: scale(1.1);
          border-color: #ffc600;
          box-shadow: 0 0 1rem #ffc600;
        }

        kbd {
          display: block;
          font-size: 4rem;
        }

        .sound {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: .1rem;
          color: #ffc600;
        }

        #focusText {
            opacity: 0;
        }

    </style>
</head>

<body>
    <div id="drum">
        <input type="text" id="focusText" @keydown="setLastKey">
        <div class="keys" tabindex="1">
            <div 
                v-for='(audio,index) in sounds' 
                :data-key='audio.keyCode'  
                class="key"
                :class="{playing:audio.id == active}" 
                @keydown="setClass(audio, $event)"  
            >
                <kbd :data-index="index">
                {{audio.keyName}}</kbd>
                <span class="sound">{{audio.soundName}}</span>
            </div>
        </div>
        <div>
            {{lastKey}}
          </div>
        <audio v-for='audio in sounds' :tabindex='audio.id' :data-key='audio.keyCode' @keydown='play' :src="audio.src"></audio>
    </div>
    
    <script src="../vue.js"></script>
    <script>
    function getClosestVueInstance(element) {
      if (element) {
        if (element.__vue__) {
          return element
        }
        else {
          return getClosestVueInstance(element.parentElement);
        }
      }
    }

    new Vue({
    	el: '#drum',
        mounted() {
            this.setInputFocus()
            document.onclick = this.setInputFocus
          },
        data: {
            sounds: [
                {
                    keyCode: 65,
                    src: "sounds/clap.wav",
                    keyName: 'A',
                    soundName: 'clap',
                    id: 1
                },
                {
                    keyCode: 83,
                    src: "sounds/hihat.wav",
                    keyName: 'S',
                    soundName: 'hihat',
                    id: 2
                },
                {
                    keyCode: 68,
                    src: "sounds/kick.wav",
                    keyName: 'D',
                    soundName: 'kick',
                    id: 3
                },
                {
                    keyCode: 70,
                    src: "sounds/openhat.wav",
                    keyName: 'F',
                    soundName: 'openhat',
                    id: 4
                },
                {
                    keyCode: 71,
                    src: "sounds/boom.wav",
                    keyName: 'G',
                    soundName: 'boom',
                    id: 5
                },
                {
                    keyCode: 72,
                    src: "sounds/ride.wav",
                    keyName: 'H',
                    soundName: 'ride',
                    id: 6
                },
                {
                    keyCode: 74,
                    src: "sounds/snare.wav",
                    keyName: 'J',
                    soundName: 'snare',
                    id: 7
                },
                {
                    keyCode: 75,
                    src: "sounds/tom.wav",
                    keyName: 'K',
                    soundName: 'tom',
                    id: 8
                },
                {
                    keyCode: 76,
                    src: "sounds/tink.wav",
                    keyName: 'L',
                    soundName: 'tink',
                    id: 9
                },
            ],
            active: false,
            lastKey: ''
        },
    	methods: {
            play(elem, src) {
                if(this.lastKey.charCodeAt(0) == elem.dataset.key) {
                    var audio = new Audio()
                    audio.src = src
                    audio.autoplay = true
                }
            },
            setClass(elem, evt) {
                if(evt.keyCode = elem.keyCode) {
                    this.active = elem.id
                }
            },
            myhandler(evt){
                 const task = this.tasks[evt.target.dataset.index]
                 console.dir(task)
                 alert(task.name)
            },
            setInputFocus(e = {path: []}) {
              if (e.path[0]) {
                if (e.path[0].classList[0] == 'form') {
                  return;
                }
              }
              window.focusText.focus()
            },
            setLastKey(e) {
              focusText.value = ""
              this.lastKey = e.key
              console.log(this.lastKey.charCodeAt(0));
            }
    	}
    })
    </script>
</body>

</html>