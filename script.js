// !! Dragos Matteo 5.06.2021 Folio
// !! Modal 

const modal = document.querySelector('#simpleModal');
const closeBtn = document.querySelector('.closeBtn');
const modalBtn = document.querySelector('#contact')


// !! Function to open modal 
const openModal = function(){
  modal.style.display = 'block';
}

// !! Function to close modal 
const closeModal = function(){
  modal.style.display = 'none';
}

const clickOutsite = function(e){
  if (e.target == modal) 
  modal.style.display = 'none';
}

// !!  Lisen for click 
modalBtn.addEventListener('click', openModal);

// !! Lisen for close click
closeBtn.addEventListener('click', closeModal);

// !! Lisen for outside click 
window.addEventListener('click', clickOutsite);
