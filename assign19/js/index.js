const forms = document.querySelectorAll('.form');
const stepBtns = document.querySelectorAll('.step-btn');
const step1NextBtn = document.querySelector('#step1-next-btn');
const step2NextBtn = document.querySelector('#step2-next-btn');
const step2BackBtn = document.querySelector('#step2-back-btn');
const step3BackBtn = document.querySelector('#step3-back-btn');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const form3 = document.querySelector('#form3');
const step1 = document.querySelector('#step1');
const step2 = document.querySelector('#step2');
const step3 = document.querySelector('#step3');

forms.forEach(form => {
    if (form.classList.contains('active')) {
        stepBtns.forEach(stepBtn => {
            if (stepBtn.classList.contains(form.id)) {
                stepBtn.style.background = 'rgb(255, 0, 128)';
                stepBtn.style.color = "white";
            }
        });
    }
});

stepBtns.forEach(stepBtn => {
    stepBtn.addEventListener("click", e => {
        const targetBtn = e.target;
        forms.forEach(form => {
            if (form.id === targetBtn.classList[1]) {
                form.classList = 'form active';
            } else {
                form.classList = 'form hide';
            }
        });
        stepBtns.forEach(stepBtn => {
            const form = document.getElementById(stepBtn.classList[1]);
            if (form.classList.contains('active')) {
                stepBtn.style.background = 'rgb(255, 0, 128)';
                stepBtn.style.color = "white";
            } else {
                stepBtn.style.background = 'white';
                stepBtn.style.color = "black";
            }
        });
    });
});

step1NextBtn.addEventListener('click', e => {
    e.preventDefault();
    form1.classList = 'form hide';
    form2.classList = 'form active';
    step1.style.backgroundColor = 'white';
    step1.style.color = 'black';
    step2.style.backgroundColor = 'rgb(255, 0, 128)';
    step2.style.color = 'white';
});
step2NextBtn.addEventListener('click', e => {
    e.preventDefault();
    form2.classList = 'form hide';
    form3.classList = 'form active';
    step2.style.backgroundColor = 'white';
    step2.style.color = 'black';
    step3.style.backgroundColor = 'rgb(255, 0, 128)';
    step3.style.color = 'white';
});
step2BackBtn.addEventListener('click', e => {
    e.preventDefault();
    form2.classList = 'form hide';
    form1.classList = 'form active';
    step2.style.backgroundColor = 'white';
    step2.style.color = 'black';
    step1.style.backgroundColor = 'rgb(255, 0, 128)';
    step1.style.color = 'white';
});
step3BackBtn.addEventListener('click', e => {
    e.preventDefault();
    form3.classList = 'form hide';
    form2.classList = 'form active';
    step3.style.backgroundColor = 'white';
    step3.style.color = 'black';
    step2.style.backgroundColor = 'rgb(255, 0, 128)';
    step2.style.color = 'white';
});