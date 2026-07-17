const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter",()=>{

card.style.background="#E50914";

});

card.addEventListener("mouseleave",()=>{

card.style.background="#333";

});

});