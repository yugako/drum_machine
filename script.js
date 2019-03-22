new Vue({
    el: '#drum',
    mounted() {

        this.setInputFocus()

        document.onclick = this.setInputFocus

        var self = this

        document.addEventListener('keydown', function(e) {
            let obj = self.keyCollection

            let code = self.lastKey

            if (obj.hasOwnProperty(code)) {
                this.active = code
                if (this.active) {
                    var song = new Audio()
                    song.src = obj[code]
                    song.volume = self.value
                    song.autoplay = true
                    self.active = code
                }
            } else {
                return;
            }
        });
        document.addEventListener('keyup', function () {
        	self.active = false
        })

    },
    watch: {
        show: function() {
            this.keyCollection = this.pickCollection
        },
        enable: function() {
            if (!this.enable) {
                this.keyCollection = []
            } else {
                this.keyCollection = this.pickCollection
            }
            console.log(this.keyCollection)

        }
    },
    data: {
        drumMachine: [{
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
            }
        ],
        piano: [
        		{
                keyCode: 90,
                src: "sounds/c2.ogg",
                keyName: 'Z'
            },
            {
                keyCode: 81,
                src: "sounds/c2s.ogg",
                keyName: 'Q'
            },
            {
                keyCode: 65,
                src: "sounds/d2.ogg",
                keyName: 'A'
            },

            {
                keyCode: 87,
                src: "sounds/d2s.ogg",
                keyName: 'W'
            },
            {
                keyCode: 83,
                src: "sounds/e2.ogg",
                keyName: 'S'
            },
            {

                keyCode: 68,
                src: "sounds/f1.ogg",
                keyName: 'D'
            },
            {
                keyCode: 82,
                src: "sounds/f1s.ogg",
                keyName: 'R'
            },
            {

                keyCode: 70,
                src: "sounds/g1.ogg",
                keyName: 'F'
            },
            {
                keyCode: 84,
                src: "sounds/g1s.ogg",
                keyName: 'T'

            },
            {
                keyCode: 71,
                src: "sounds/a1s.ogg",
                keyName: 'G'
            }, {
                keyCode: 89,
                src: "sounds/a2.ogg",
                keyName: 'Y'

            },
            {
                keyCode: 72,
                src: "sounds/b2.ogg",
                keyName: 'H'
            },
            {
                keyCode: 74,
                src: "sounds/c3.ogg",
                keyName: 'J'

            },
            {
                keyCode: 73,
                src: "sounds/c3s.ogg",
                keyName: 'I'
            },
            {
                keyCode: 75,
                src: "sounds/d3.ogg",
                keyName: 'K'

            },
            {
                keyCode: 79,
                src: "sounds/d3s.ogg",
                keyName: 'O'
            },
            {
                keyCode: 88,
                src: "sounds/f2.ogg",
                keyName: 'X'
            },
            {
                keyCode: 76,
                src: "sounds/e3.ogg",
            
                keyName: 'L'

            },
            {
                keyCode: 86,
                src: "sounds/g2.ogg",
                keyName: 'V'
            },
            {
                keyCode: 85,
                src: "sounds/f2s.ogg",
                keyName: 'U'

            },
            {
                keyCode: 66,
                src: "sounds/g2s.ogg",
                keyName: 'B'

            },
            {
                keyCode: 80,
                src: "sounds/a3.ogg",
                keyName: 'P'
            },
            {
                keyCode: 78,
                src: "sounds/a3s.ogg",
                keyName: 'N'

            },
            {
                keyCode: 77,
                src: "sounds/b3.ogg",
                keyName: 'M'
            },
            {
                keyCode: 67,
                src: "sounds/b3.ogg",
                keyName: 'C'
            },
        ],
        active: false,
        keyCollection: {},
        lastKey: '',
        show: true,
        enable: false,
        state: "Вимкнено",
        nextPanel: 'Драм машина',
        value: 0.5
    },
    methods: {
        play(elem, evt) {
            this.active = elem.keyCode
            if (this.active) {
                var song = new Audio()
                song.src = elem.src
                song.volume = this.value
                song.autoplay = true
                this.active = false
            }
        },
        setInputFocus(e = { path: [] }) {
            if (e.path[0]) {
                if (e.path[0].classList[0] == 'form') {
                    return;
                }
            }
            window.focusText.focus()
        },
        setLastKey(e) {
            focusText.value = ""
            this.lastKey = e.keyCode
            console.log(this.lastKey, e.keyCode);
        },
        enableApp() {
            if (!this.enable) {
                this.enable = true
                this.state = 'Увімкнено'
            } else {
                this.enable = false
                this.state = 'Вимкнено'
            }
        },
        switchPanels() {
            if (!this.show) {
                this.show = true
                this.nextPanel = 'Драм машина'
            } else {
                this.show = false
                this.nextPanel = 'Піаніно'
            }
        }
    },
    computed: {
        pickCollection() {
            let keys = {};
            let source;
            if (this.show) {
                source = this.piano
            } else {
                source = this.drumMachine
            }
            for (let i = 0; i < source.length; i++) {
                var item = source[i];
                keys[item.keyCode] = item.src
            }

            return keys;
        }
    }
})