import refs from './refs.js';
const { checkboxBtn, body } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkboxBtn.addEventListener('change', changeMode);

function changeMode(e) {
  let checkboxValue = e.target.checked;

  if (checkboxValue) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

let theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  checkboxBtn.checked = true;
  body.classList.add('dark-theme');
} else {
  checkboxBtn.checked = false;
  body.classList.remove('light-theme');
}
