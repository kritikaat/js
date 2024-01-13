const clock = document.querySelector('#clock');


setInterval(function(){
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);


//just for changes after egular time interval we use setInterval