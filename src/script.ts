const modalCardBg = document.querySelector('#modal-card-bg') as HTMLDivElement;

const modalDiv = document.querySelector('.modal') as HTMLDivElement;

const modalCardDiv = document.querySelector('.modal-card') as HTMLDivElement;

const buttonClick = document.querySelector('#click-btn') as HTMLButtonElement;

const buttonClose = document.querySelector('#close-btn') as HTMLButtonElement;


const hideModalAction = () => {
    modalCardDiv.classList.add("animate-fadeout");
    modalCardDiv.classList.remove("animate-fadeup");
    setTimeout(() => {
        modalDiv.style.display = 'none';
        modalCardDiv.style.display = 'none';
    }, 1900);
}

buttonClick.addEventListener('click', () => {
    modalCardDiv.classList.add("animate-fadeup");
    modalCardDiv.classList.remove("animate-fadeout");
    modalDiv.style.display = "flex";
    modalCardDiv.style.display = "flex";
});

modalCardBg.addEventListener('click', hideModalAction);
buttonClose.addEventListener('click', hideModalAction);
