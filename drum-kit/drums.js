const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const playSound = (sound) => {
  const audio = document.querySelector(`audio[data-key="${sound}"]`);
  const key = document.querySelector(`div[data-key="${sound}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keyDownHandler = (e) => {
  playSound(e.keyCode);
}

const clickHandler = (e) => {
  let target = e.target;
  while (target.classList.contains('key') !== false) {
    target = target.parentNode;
  }
  playSound(target.dataset.key);
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', clickHandler);
});

window.addEventListener('keydown', keyDownHandler);