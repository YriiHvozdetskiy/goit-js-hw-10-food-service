import './styles.css';
import './index.html';

const refs = {
  menu: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'Theme';

getDataFromLocalStorageWhenLoadingPage();

refs.themeSwitch.addEventListener('change', onSwitchCheckbox);

function onSwitchCheckbox(e) {
  if (e.target.checked) {
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
    switchesThemeСolor();
  }

  if (!e.target.checked) {
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    switchesThemeСolor();
  }
}

function switchesThemeСolor() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}

function getDataFromLocalStorageWhenLoadingPage() {
  const themeStatus = localStorage.getItem(STORAGE_KEY);

  if (themeStatus) {
    if (themeStatus === Theme.DARK) {
      refs.themeSwitch.checked = true;
      document.body.classList.add('dark-theme');
      return;
    }
    if (themeStatus === Theme.LIGHT) {
      refs.themeSwitch.checked = false;
      document.body.classList.add('light-theme');
      return;
    }
  }
}
