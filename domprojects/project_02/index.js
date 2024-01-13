const form = document.querySelector('.container');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height===NaN||height < 0 || height === ' '){
    results.innerHTML = `enter the valid height`;
  }
  else if(weight===NaN||weight<0||weight===' '){
    results.innerHTML = `${weight} is not a valid weight`;
  }
  const bmi = (weight/((height * height)/10000)).toFixed(2);
  results.innerHTML = `your bmi is ${bmi}`;

  const weight_guide = document.querySelector('#weight-guide');
  const h1 = document.createElement('h1')
  weight_guide.append( h1 );
 
  if(bmi<18.6){
    h1.innerHTML = `underweight category`;
  }else if(bmi>=18.6 && bmi <=24.9){
    h1.innerHTML = `you are in normal range`;
  }else if (bmi>24.9){
    h1.innerHTML = `you are overweight`;
  }
 
})