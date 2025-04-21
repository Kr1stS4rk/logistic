
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu__btn");
  const navMenu = document.querySelector(".nav");

  // Убираем класс на всякий случай при загрузке
  navMenu.classList.remove("menu--open");

  // Открытие/закрытие меню при клике на кнопку
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("menu--open");
  });
});

const introBtn = document.getElementById('openModalBtn');
const becomeClientModal = document.getElementById('becomeClient');
const thanksModal = document.getElementById('thanksModal');
const becomeClientClose = document.getElementById('closeModalBtn');
const thanksClose = document.getElementById('closeThanksBtn');
const formInModal = document.querySelector('#becomeClient form');
const introForm = document.getElementById('introForm');

// 1. Открыть модалку при клике на кнопку в .intro
introBtn.addEventListener('click', () => {
  becomeClientModal.showModal();
});

// 2. Закрытие первой модалки
becomeClientClose.addEventListener('click', () => {
  becomeClientModal.close();
});

// 3. Закрытие второй модалки
thanksClose.addEventListener('click', () => {
  thanksModal.close();
});

// 4. Отправка формы в модалке — показать thanksModal
formInModal.addEventListener('submit', function (e) {
  e.preventDefault(); // не отправлять на сервер
  becomeClientModal.close();
  thanksModal.showModal();
});

// 5. Escape — закрывает обе модалки
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (becomeClientModal.open) becomeClientModal.close();
    if (thanksModal.open) thanksModal.close();
  }
});


introForm.addEventListener('submit', function (e) {
  e.preventDefault(); // отменяем отправку на сервер
  becomeClientModal.showModal(); // открываем первую модалку
});

