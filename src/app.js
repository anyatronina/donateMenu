import { createDonate, addDonate } from './utils';

export default class App {
    #button
    #amount

    constructor() {
        this.#button = document.querySelector('.donate-form__submit-button');
        this.#amount = document.querySelector('.donate-form__donate-input');
    }

    run() {
        this.#button.addEventListener('click', (event) => {
            event.preventDefault();
            const value = this.#amount.value;
            const isFilled = value.trim();
            const isZero = value !== '0';
            if (isFilled && isZero) {
                createDonate(value);
                addDonate(value);
                this.#amount.value = '';
            }
        })

    }
}