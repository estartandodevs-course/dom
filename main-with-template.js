import { users } from './mock.js';

function getCardElement(user) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', user.avatar);

  const cardInfoElement = document.createElement('div');
  cardInfoElement.classList.add('card-info');

  const cardNameElement = document.createElement('span');
  cardNameElement.innerText = `${user.first_name} ${user.last_name}`;

  const cardEmailElement = document.createElement('span');
  cardEmailElement.innerText = `${user.email}`;

  cardInfoElement.appendChild(cardNameElement);
  cardInfoElement.appendChild(cardEmailElement);

  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardInfoElement);

  return cardElement;
}

function main() {
  const parentElement = document.querySelector('.user-list');
  users.forEach((user) => {
    const cardElement = getCardElement(user);
    parentElement.appendChild(cardElement);
  });
}

main();
