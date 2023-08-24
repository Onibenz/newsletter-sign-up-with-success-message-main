
// const form = document.querySelector('form');
// const input = document.querySelector('input');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (input.value === '') {
//     document.querySelector("input").classList.add('error-input');
//     document.querySelector(".error-message").style.display = 'block';
//   } else {
//     document.querySelector(".success-message").style.display = 'block';
//   }
// });

const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
  if (input.value === '') {
    document.querySelector("input").classList.add('error-input');
    document.querySelector(".error-message").style.display = 'block';
  } else {
    document.querySelector(".success-message").style.display = 'block';
  }
}