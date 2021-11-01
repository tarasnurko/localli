import showModileMenu from "./modules/showMobileMenu";
import arrowLift from "./modules/arrowLift";
import accordeon from "./modules/accordeon";

showModileMenu('.menu__btn', 'menu__btn_active', '.menu__background', 'menu__background_active', '.menu__wrapper', 'menu__wrapper_active', 'overflow-hidden');

arrowLift('.arrow-up', 'arrow-up_show', '.network');

accordeon('.questions__block-wrapper', 'questions__block-wrapper_active', '.questions__block-desc');