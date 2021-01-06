

const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', slideToggle)
});

function slideToggle(e){
    e.preventDefault();
    let slideWrapper = this.firstElementChild;

    if(e.target.classList.contains('btn-right') || e.target.classList.contains('fa-long-arrow-alt-right')){
        slideWrapper.classList.remove('slideLeft');
        slideWrapper.classList.add('slideRight');
    }

    if(e.target.classList.contains('btn-left') || e.target.classList.contains('fa-long-arrow-alt-left')){
        slideWrapper.classList.remove('slideRight');
        slideWrapper.classList.add('slideLeft');
    }
}