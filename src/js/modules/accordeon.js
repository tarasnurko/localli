export default function accordeon(accordeonTrigger, triggerActiveClass, accordeonTextSelector) {
  let triggerBlock = document.querySelectorAll(accordeonTrigger),
      accordeonText = document.querySelectorAll(accordeonTextSelector);

  triggerBlock.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (!(item.classList.contains(triggerActiveClass))) {
        closeAllModals(item, index);

        item.classList.add(triggerActiveClass);
        accordeonText[index].style.maxHeight = accordeonText[index].scrollHeight + 'px';
      } else {
        accordeonText[index].style.maxHeight = '0px';
        item.classList.remove(triggerActiveClass);   
      }
    });
  });

  function closeAllModals(item, index) {
    triggerBlock.forEach((item, index) => {
      accordeonText[index].style.maxHeight = '0px';
      item.classList.remove(triggerActiveClass);
    })
  }

}