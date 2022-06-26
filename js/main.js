let btn = document.getElementById('button');
let inputs = document.querySelectorAll('.input');
let inputDiv = document.querySelectorAll('form div');
btn.addEventListener('click', () => {
  for(let i = 0 ; i< inputs.length; i++){
    if (inputs[i].value === ''){
      document.forms[0].onsubmit = e => e.preventDefault();
      inputDiv[i].classList.add("error")
    }
    else{
      inputDiv[i].classList.remove('error')
    }
  }
})