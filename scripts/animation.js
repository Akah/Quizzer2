//document.querySelector('#menu').onclick = function(){ this.toggle }

function open(){
  document.querySelector('.line:nth-child(1)').classList.toggle('name');
  document.querySelector('.line:nth-child(2)').classList.toggle('name2');
  document.querySelector('.line:nth-child(3)').classList.toggle('name3');
  document.querySelector('#pullout').classList.toggle('out');
}
document.querySelector('#menu').onclick = function(){
  open();
}
document.querySelector('.inner').onclick = function(){
  if(document.querySelector('.name')!==null){
    open();
  }
}
