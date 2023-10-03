const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");

const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = "";

    for( i = 1; i <= multiplicator; i++ ){
        const result = number * i;

        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

        multiplicationTitle.innerText = number;
    }

}


multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const number = +numberInput.value;
    const multiplicator = +multiplicationInput.value;

    if (!number || !multiplicator) return;

    createTable(number, multiplicator);
});
