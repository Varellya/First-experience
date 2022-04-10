//===== Intro carousel =====//

const slider = document.querySelector('.slider_inner');
const carousel = slider.querySelector('.slider_sections');
const slide = carousel.querySelectorAll('.slider_item');
const btnPrev = slider.querySelector('.btn_prev');
const btnNext = slider.querySelector('.btn_next');
const btnSlide = document.querySelectorAll('[data-slide]');
const btnSlideActive = document.querySelector('.active_dot');


btnSlide.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let slideId = $this.getAttribute('data-slide');
        let slide = document.getElementById(slideId);
        let slideActive = carousel.querySelector('.active_slide');
        let btnSlideActive = document.querySelector('.active_dot');
        
        slideActive.classList.remove('active_slide');
        btnSlideActive.classList.remove('active_dot');

        slide.classList.add('active_slide');
        $this.classList.add('active_dot');
    })
})


btnPrev.addEventListener('click', slidePrev);
btnNext.addEventListener('click', slideNext);


function slidePrev() {
    let btnSlide = document.getElementsByClassName('dot');
    let btnSlideActive = document.querySelector('.active_dot');
    let btnArray = Array.from(btnSlide);
    let n = btnArray.indexOf(btnSlideActive);

    if (n > 0) {
        n = n - 1;
    } else {
        n = btnArray.length - 1;
    }

    let myBtn = btnArray[n];
    let slideId = myBtn.getAttribute('data-slide');
    let slide = document.getElementById(slideId);

    let slideActive = carousel.querySelector('.active_slide');

    slideActive.classList.remove('active_slide');
    btnSlideActive.classList.remove('active_dot');

    slide.classList.add('active_slide');
    myBtn.classList.add('active_dot');
}


function slideNext() {
    let btnSlide = document.getElementsByClassName('dot');
    let btnSlideActive = document.querySelector('.active_dot');
    let btnArray = Array.from(btnSlide);
    let n = btnArray.indexOf(btnSlideActive);
    
    if (n < btnArray.length - 1) {
        n = n + 1;
    } else {
        n = 0;
    }

    let myBtn = btnArray[n];
    let slideId = myBtn.getAttribute('data-slide');
    let slide = document.getElementById(slideId);

    let slideActive = carousel.querySelector('.active_slide');

    slideActive.classList.remove('active_slide');
    btnSlideActive.classList.remove('active_dot');

    slide.classList.add('active_slide');
    myBtn.classList.add('active_dot');
}


//===== Works btn =====//

const allWorks = document.querySelector('.all_works');
const btnOpened = document.querySelector('.btn_works--open');
const btnRemove = document.querySelector('.btn_works--remove');
const delBtn = document.querySelector('.open_works');

btnOpened.addEventListener('click', openedWorks);
btnRemove.addEventListener('click', removeWorks);

function openedWorks() {
    allWorks.classList.add('worksOpened');
    delBtn.classList.add('del_btn');
}

function removeWorks() {
    allWorks.classList.remove('worksOpened');
    delBtn.classList.remove('del_btn');
}
