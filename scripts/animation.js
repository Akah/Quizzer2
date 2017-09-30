document.querySelector('#menu').onclick = function(){
  var topbun = document.querySelector('.line:nth-child(1)');
  var filling = document.querySelector('.line:nth-child(2)');
  var bottombun = document.querySelector('.line:nth-child(3)');
  var menu = document.querySelector('#pullout');

  topbun.classList.toggle('name');
  filling.classList.toggle('name2');
  bottombun.classList.toggle('name3');

  menu.classList.toggle('out');
}
