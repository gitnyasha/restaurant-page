const mainDocument = document.querySelector("#content");
const infoContainer = document.createElement("div");

const contact = () => {
  infoContainer.classList.add("info-container");

  const information = document.createElement("div");
  information.classList.add("info");

  const title = document.createElement("h4");
  const paragraph = document.createElement("p");

  title.textContent = "Contact us at: ";

  paragraph.innerHTML = ` Number: 0000000000 <br> Email: name@email.com `;

  information.appendChild(title);
  information.appendChild(paragraph);
  infoContainer.appendChild(information);
  mainDocument.appendChild(infoContainer);
};

const cleanContact = () => {
  infoContainer.innerHTML = null;
  mainDocument.appendChild(infoContainer);
};

export { contact, cleanContact };
