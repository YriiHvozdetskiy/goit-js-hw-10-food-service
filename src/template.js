import menuListCardTpl from './templates/menu-list.hbs';
import menu from './menu.json';

const listMenuRef = document.querySelector('.js-menu');

createMenuItemMarkup(menuListCardTpl(menu));

function createMenuItemMarkup(list) {
  listMenuRef.insertAdjacentHTML('beforeend', list);
}
