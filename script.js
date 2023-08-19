function calculatetriangleArea() {
    const area = (0.5 * getInputValue('t-base') * getInputValue('t-height'));
    displayArea('triangle-area-display', area);
    calculateHistoryAdd('Triangle', area);
}
function calculateRectangleArea() {
    const area = getInputValue('rectangle-width') * getInputValue('rectangle-height');
    displayArea('rectangle-area-display', area);
    calculateHistoryAdd('Rectangle', area);
}
function calculateParallelogramArea() {
    const area = getInputValue('parallelogram-base') * getInputValue('parallelogram-height');
    displayArea('parallelogram-area-display', area);
    calculateHistoryAdd('Parallelogram', area);
}
function calculateRhombusArea() {
    const area = getInputValue('rhombus-d1') * getInputValue('rhombus-d2');
    displayArea('rhombus-display-area', area);
    calculateHistoryAdd('Rhombus', area);
}
function calculatePentagonArea() {
    const area = 0.5 * getInputValue('pentagon-p') * getInputValue('pentagon-b');
    displayArea('pentagon-display-area', area);
    calculateHistoryAdd('Pentagon', area);
}
function calculateEllipseArea() {
    const area = Math.PI * getInputValue('major-radius') * getInputValue('minor-radius');
    const finalArea = area.toFixed(2);
    displayArea('ellipse-display-area', finalArea);
    calculateHistoryAdd('Ellipse', finalArea);
}

document.getElementById('triangle-btn').addEventListener('click', calculatetriangleArea);
document.getElementById('rectangle-btn').addEventListener('click', calculateRectangleArea);
document.getElementById('parallelogram-btn').addEventListener('click', calculateParallelogramArea);
document.getElementById('rhombus-btn').addEventListener('click', calculateRhombusArea);
document.getElementById('pentagon-btn').addEventListener('click', calculatePentagonArea);
document.getElementById('ellipse-btn').addEventListener('click', calculateEllipseArea);


















