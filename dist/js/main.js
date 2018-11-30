(function anon() {
  const list = document.querySelector('.list');
  for (let i = 0; i < menu.length; i++) {

    const firstNestLi = document.createElement('li');
    const firstNest = document.createElement('span');
    firstNest.classList.add('arrow-black');
    firstNest.dataset.action = 'second';
    firstNest.textContent = menu[i].title;
    list.appendChild(firstNestLi);
    firstNestLi.appendChild(firstNest);

    const secondNestUl = document.createElement('ul');
    secondNestUl.classList.add('secondContent');
    firstNestLi.appendChild(secondNestUl);

    if (menu[i].items) {
      for (let j = 0; j < menu[i].items.length; j++) {
        const secondNestLi = document.createElement('li');

        if (menu[i].items[j].items) {
          secondNestLi.classList.add('arrow-white');
          const secondNest = document.createElement('a');
          secondNest.dataset.action = 'third';
          if (menu[i].items[j].link) {
            secondNest.setAttribute('href', menu[i].items[j].link);
          }
          secondNest.textContent = menu[i].items[j].title;
          secondNestUl.appendChild(secondNestLi);
          secondNestLi.appendChild(secondNest);
        } else {
          secondNestLi.textContent = menu[i].items[j].title;
          secondNestUl.appendChild(secondNestLi);
        }
        const thirdNestUl = document.createElement('ul');
        thirdNestUl.classList.add('thirdContent');
        secondNestLi.appendChild(thirdNestUl);

        if (menu[i].items[j].items) {
          for (let k = 0; k < menu[i].items[j].items.length; k++) {
            const thirdNestLi = document.createElement('li');
            thirdNestLi.classList.add('circle');
            if (menu[i].items[j].items[k].link) {
              const thirdNest = document.createElement('a');
              thirdNest.setAttribute('href', menu[i].items[j].items[k].link);
              thirdNest.textContent = menu[i].items[j].items[k].title;
              thirdNestUl.appendChild(thirdNestLi);
              thirdNestLi.appendChild(thirdNest);
            } else {
              thirdNestLi.textContent = menu[i].items[j].items[k].title;
              thirdNestUl.appendChild(thirdNestLi);
            }
          }
        }
      }
    }
  }
  const openSecond = document.querySelectorAll('[data-action=second]');
  openSecond.forEach((element) => {
    element.addEventListener('click', (e) => {
      const secondContent = e.target.parentNode.querySelector('.secondContent');
      secondContent.classList.toggle('active');
      e.target.classList.toggle('down-black');
    });
  });

  const openThird = document.querySelectorAll('.arrow-white');
  openThird.forEach(element => {
    element.addEventListener('click', (e) => {
      const thirdContent = e.target.querySelector('.thirdContent');
      thirdContent.classList.toggle('active');
      e.target.classList.toggle('down-white');
    });
  });
  // const openThird = document.querySelectorAll('[data-action=third]');
  // openThird.forEach((element) => {
  //   element.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const thirdContent = e.target.parentNode.querySelector('.thirdContent');
  //     thirdContent.classList.toggle('active');
  //     e.target.parentNode.classList.toggle('down-white');
  //   });
  // });
}());
