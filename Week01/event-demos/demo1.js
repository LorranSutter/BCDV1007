


// Add your code here

function toggleButton(e) {
    var isOff = btn.classList[0] === 'off';
    if (isOff){
     btn.classList.remove('off');
     btn.innerText = 'On';
     btn.classList.add('on')
  } else {
     btn.classList.remove('on');
     btn.classList.add('off');
     btn.innerText = 'off';
  }
}
let btn = document.querySelector('.off');
btn.addEventListener('click', toggleButton);
