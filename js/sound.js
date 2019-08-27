/* sound effect handler */
const
  sound = {},
  effect = ['shoot', 'explode'];


// initialise sounds
export function init() {

  effect.forEach(s => {

    // sound object
    sound[s] = {
      audio: new Audio(`audio/${s}.mp3`),
      loaded: true
    };

    // load effect
    sound[s].audio.onerror = () => sound[s].audio.loaded = false;

  });

}


// play audio
export function play(name) {

  const effect = sound[name];
  if (!effect || !effect.audio || !effect.loaded || effect.audio.muted) return;

  if (effect.audio.fastSeek) effect.audio.fastSeek(0);
  effect.audio.play();

}