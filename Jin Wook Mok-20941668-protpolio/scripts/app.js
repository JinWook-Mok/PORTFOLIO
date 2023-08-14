const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});



// about page
const cards = document.querySelectorAll('.card');
const numbers=document.querySelectorAll('.numbers');
const tex=document.querySelectorAll('.card .h3');
console.log(numbers);


cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'rgb(255, 255, 255)';
    card.style.color = 'rgb(255, 255, 255)';    
    card.style.transform = 'translateX(-10px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.borderColor = 'rgb(112, 209, 112)';
    
    card.style.transform = 'translateX(0)';
    card.style.color = 'whitesmoke';

  });
});

