export default function arrowLift(arrowSelector, arrowShowStyle, sectionSelector) {
  let arrow = document.querySelector(arrowSelector), 
      section = document.querySelector(sectionSelector);

  document.addEventListener('scroll', () => {
    if (scrollY >= section.offsetTop) {
      
      if (!(arrow.classList.contains(arrowShowStyle))) {
        arrow.classList.add(arrowShowStyle);
      }
    } else {
      if (arrow.classList.contains(arrowShowStyle)) {
        arrow.classList.remove(arrowShowStyle);
      }
    }
  });

  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
  })
}











  
