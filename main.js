import { users } from './mock.js';

function getCardTemplate(user) {
  return `
    <div class="card">
      <img src="${user.avatar}" alt="${user.first_name}" />
      <div class="card-info">
        <span class="card-name">${user.first_name} ${user.last_name}</span>
        <span class="card-email">${user.email}</span>
      </div>
    </div>
  `;
}

function main() {
  const parentElement = document.querySelector('.user-list');
  const templateElements = users.map((user) => {
    return getCardTemplate(user);
  });

  parentElement.innerHTML = templateElements.join('');
}

main();
