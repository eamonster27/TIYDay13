var clock = document.querySelector('.clock');
var body =  document.querySelector('body');

function tick () {
  let time = now('time');
  clock.innerHTML = time;

  let color = now('color');
  body.style.backgroundColor = color;
}

function now (format) {
  
}


setInterval(tick, 1000);
tick();
