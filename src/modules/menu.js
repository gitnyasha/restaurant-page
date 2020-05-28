const mainDocument = document.querySelector('#content');
const infoContainer = document.createElement('div');

const menu = () => {
  infoContainer.classList.add('info-container');

  const information = document.createElement('div');
  information.classList.add('info');

  const title = document.createElement('h4');
  title.textContent = 'Choose what you want';

  const image1 = document.createElement('img');
  image1.classList.add('image1');
  const image2 = document.createElement('img');
  image2.classList.add('image2');
  const image3 = document.createElement('img');
  image3.classList.add('image3');

  information.appendChild(title);
  information.appendChild(image1);
  information.appendChild(image2);
  information.appendChild(image3);
  infoContainer.appendChild(information);
  mainDocument.appendChild(infoContainer);
};

const menuPage = () => {
  infoContainer.innerHTML = null;
  mainDocument.appendChild(infoContainer);
};

export { menu, menuPage };
