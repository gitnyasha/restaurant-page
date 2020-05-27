import { menu, menuPage } from './modules/menu';
import { contact, cleanContact } from './modules/contact';
import { home, homePage } from './modules/home';

const tab = () => {
  const mainDocument = document.querySelector('#content');
  const navbar = document.createElement('navbar');
  navbar.id = 'navbar';

  const list = document.createElement('ul');
  list.classList.add('nav-list');

  const menuElements = ['Home', 'Menu', 'Contacts'];

  for (let el = 0; el < menuElements.length; el++) {
    let li = document.createElement('li');
    let anchor = document.createElement('a');

    anchor.innerText = `${menuElements[el]}`;
    anchor.id = `${menuElements[el]}`;
    anchor.classList.add('nav-link');
    anchor.addEventListener('click', () => {
      getMenuToShow(menuElements[el]);
    });
    anchor.href = '#';

    li.appendChild(anchor);
    list.appendChild(li);
  }
  navbar.appendChild(list);

  mainDocument.appendChild(navbar);
};

function getMenuToShow(element) {
  cleaner();
  switch (element) {
    case 'Home':
      home();
      break;
    case 'Menu':
      menu();
      break;
    case 'Contacts':
      contact();
      break;
    default:
      break;
  }
  return;
}

const cleaner = () => {
  cleanContact();
  menuPage();
  homePage();
};

tab();
