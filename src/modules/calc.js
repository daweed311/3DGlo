
"use strict";

const calc = () => {

    document.querySelectorAll('input.calc-item').forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/gi, "");
        });
    });
}
export default calc;