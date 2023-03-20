import moment from 'moment';

export function createDonate(donate) {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const donatesList = document.querySelector('.donates-container__donates');
    const donateHTML = document.createElement('div');
    donateHTML.className = 'donate-item';
    donateHTML.innerHTML= `${time} - <b>${+donate}$</b>`;
    
    donatesList.append(donateHTML);
}

export function addDonate(donate) {
    const total = document.querySelector('#total-amount');
    const totalNum = +total.textContent.slice(0, -1) + +donate;
    total.textContent = `${totalNum}$`;
}

