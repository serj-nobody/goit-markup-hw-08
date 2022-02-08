// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-btn]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
    
//     menuBtnRef.classList.toggle("is-open");

//     mobileMenuRef.classList.toggle("is-open");

//   });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle("menu-open");
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();