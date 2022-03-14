
"use strict";

const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const total = document.getElementById('total');


    const animationTotal = (currentValue) => {

        let value = 0;
        const step = Math.round(currentValue / 16.7 / 2);

        (function animation() {
            value += step;
            if ((value < currentValue) ||
                (value - currentValue < step)) {
                requestAnimationFrame(animation);
                total.textContent = Math.min(value, currentValue);
            }
        })();
    };

    calcBlock.debounce = function (f, t) {
        return (args) => {
            if ('lastCallTimer' in this) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => f(args), t);
        };
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;


        if (+calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }
        if (+calcDay.value === 0) { }
        else if (+calcDay.value < 5) {
            calcDayValue = 2;
        } else if (+calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);

        total.textContent = totalValue;

        if (totalValue) {
            (calcBlock.debounce(animationTotal, 500))(totalValue);
        }
    };

    calcBlock.addEventListener('input', (e) => {

        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {

            if (e.target !== calcType) {
                e.target.value = e.target.value.replace(/\D+/g, "");
                e.target.value = e.target.value.replace(/^0+/g, "");
            }
            countCalc();
        }
    });
}

export default calc;