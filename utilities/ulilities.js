// select element with id

function getInputValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    const validNumber = validationCheck(elementValue);
    return validNumber;
}
function displayArea(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function validationCheck(elementValue) {
    if (isNaN(elementValue)) {
        return alert('Plese input a number.');
    } else {
        return elementValue;
    }
}
function calculateHistoryAdd(elementType, area) {
    const element = document.getElementById('calculate-history');
    const count = element.childElementCount + 1;
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between');
    div.classList.add('items-center');
    div.classList.add('mb-2');
    div.innerHTML = `
        <span>${count}.</span>
        <h2 class='text-[11px] font-bold'>${elementType}</h2>
        <p class='text-[11px]'>${area}cm<sup>2</sup></p>
        <button class="btn-color text-[11px] block px-3 py-1 text-white rounded text-center">Convert to m<sup>2</sup></button>`;
    element.appendChild(div);
}