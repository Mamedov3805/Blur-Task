const password = document.getElementById('password');
const submitButton = document.querySelector('button[type="submit"]');
const messageParagraph = document.getElementById('message');


password.addEventListener('input', (e) => {
  
const inputLength = e.target.value.length;
  
  if (inputLength < 9) {
    submitButton.style.display = 'none'; 
    messageParagraph.classList.remove('hidden'); 
     } else {
    submitButton.style.display = 'inline-block';  
    messageParagraph.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (password.value.length === 0) {
    submitButton.style.display = 'none';
  }
});

//! burdan asagidaki javascript kodu arxa fonun parlaqligini deyismek ucun nezerde tutulub 
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 18 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})

