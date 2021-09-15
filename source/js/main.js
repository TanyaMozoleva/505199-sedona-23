const menuBtn = document.querySelector(".main-nav__toggle");
const menuList = document.querySelector(".main-nav__list");
const navigation = document.querySelector(".main-nav");


menuList.classList.remove("main-nav__list--nojs");
navigation.classList.remove("main-nav--nojs");
menuBtn.classList.remove("main-nav__toggle--nojs");

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuBtn.classList.contains("main-nav__toggle--opened") || menuList.classList.contains("main-nav__list--opened")) {
      closeMenu();
    } else { openMenu();
    }
  });
  function openMenu() {
    menuBtn.classList.add("main-nav__toggle--opened");
    menuList.classList.add("main-nav__list--opened");
  }
  function closeMenu() {
    menuBtn.classList.remove("main-nav__toggle--opened");
    menuList.classList.remove("main-nav__list--opened");
  }
