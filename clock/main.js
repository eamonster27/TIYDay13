var clock = document.querySelector('.clock');
var body =  document.querySelector('body');

function tick () {
  let time = now('time');
  clock.innerHTML = time;

  let color = now('color');
  body.style.backgroundColor = color;
}

function now (format) {
  var date = new Date();

  var hours = date.getHours();
  if(hours < 10){
    hours = "0" + hours;
  }
  var minutes = date.getMinutes();
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  var seconds = date.getSeconds();
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(format === 'time'){
    var nextTick = hours + ":" + minutes + ":" + seconds;
  }
  else if(format === 'color'){
    var nextTick = "#" + hours + minutes + seconds;
  }
  return nextTick;
}
setInterval(tick, 1000);
tick();
