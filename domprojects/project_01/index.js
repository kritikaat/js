const back = document.querySelectorAll('.button');
const body = document.querySelector('body');

back.forEach(function(button){
  console.log(button);
  button.addEventListener('click',(event)=>{
        const color = event.target.id;
        body.style.backgroundColor = color;
  })
});