const mainDocument = document.querySelector('#content');
const infoContainer = document.createElement('div');

const home = () => {
  infoContainer.classList.add('info-container');

  const information = document.createElement('div');
  information.classList.add('info');

  const image = document.createElement('img');
  image.classList.add('image');
  const paragraph = document.createElement('p');

  paragraph.textContent = `This is my restaurant page created with javascript`;

  information.appendChild(image);
  information.appendChild(paragraph);
  infoContainer.appendChild(information);
  mainDocument.appendChild(infoContainer);
};

const homePage = () => {
  infoContainer.innerHTML = null;
  mainDocument.appendChild(infoContainer);
};

export { home, homePage };
