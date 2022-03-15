const inputBox = document.querySelector('.input__search__wrapper');
const input = document.querySelector('.input__search__wrapper input');
const headerImg = document.querySelector('.header__img__wrapper img');


document.addEventListener('DOMContentLoaded',reportWindowSize);

function reportWindowSize() {
    if(window.innerWidth >= 1000) {
        headerImg.src = "images/bg-header-desktop.svg";
        console.log('it is working!')
    } else {
        headerImg.src = "images/bg-header-mobile.svg";
    }
}

window.onresize = reportWindowSize;

const searchBtn = document.querySelector('.header__img__wrapper i');


const submitBtn = document.querySelector('.btn__container');
const filterList = document.querySelector('.filter__list');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('active');
    inputBox.classList.toggle('active'); 
    if(inputBox.classList.contains('active')) {
        filterList.classList.add('show');
    }else {
        filterList.classList.remove('show');
    }
    
});

const searchList = document.querySelector('.search__list__wrapper');
const linkBtn = document.querySelector('#submit');
const listCard = document.querySelector('.list__card');

submitBtn.addEventListener('click', handleSubmit)


function handleSubmit() {

    let text = input.value;
    console.log(text);

    if(!text) {
        alert ("Please input some value BKL");
        return;
    }

    searchList.insertAdjacentHTML('beforeend',
    `
    <div class="list__card">
        <p class="title">${text}</p>
        <div class="remove__btn" onclick="handleDelete()">
          <i class="fas fa-times"></i>
        </div>
    </div>
    `
    );

    console.log(searchList.children.length);
    if(searchList.children.length === 3) {
        input.style.opacity = "0";
        linkBtn.innerText = "Clear";
        submitBtn.removeEventListener('click', handleSubmit, false);
        input.value = "";
       
    }

}

function handleDelete() {
    this.document.querySelector('.list__card').remove();
}