export default function showMenu(btnSelector, btnActiveClass, menuBgSelector, menuBgActiveClass, menuWrapperSelector, menuWrapperActiveClass, overflowClass) {
  let btn = document.querySelector(btnSelector),
      menuBg = document.querySelector(menuBgSelector),
      menuWrapper = document.querySelector(menuWrapperSelector);
  
  btn.addEventListener('click', () => {
    if (!btn.classList.contains(btnActiveClass)) {
      btn.classList.add(btnActiveClass);
      menuBg.classList.add(menuBgActiveClass);
      menuWrapper.classList.add(menuWrapperActiveClass);
      document.body.classList.add(overflowClass);
    } else {
      btn.classList.remove(btnActiveClass);
      menuBg.classList.remove(menuBgActiveClass);
      menuWrapper.classList.remove(menuWrapperActiveClass);
      document.body.classList.remove(overflowClass);
    }
  });
}