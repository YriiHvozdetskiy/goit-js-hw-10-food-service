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
    switchesThemeСolor(e);
  }

  if (!e.target.checked) {
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    switchesThemeСolor(e);
  }
}

function switchesThemeСolor(e) {
  if (e.target.checked) {
    return updateClass('dark-theme', 'light-theme');
  } else {
    return updateClass('light-theme', 'dark-theme');
  }
}

function updateClass(addClass, remClass) {
  document.body.classList.remove(remClass);
  document.body.classList.add(addClass);
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
