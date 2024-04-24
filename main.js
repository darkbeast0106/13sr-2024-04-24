/*
const point1 = new Point(3, 5);
console.log(point1);
console.log(point1.x);
// console.log(point1.#x); -> syntax error, nem fut le már a korábbi sor sem
point1.x = 7;
console.log(point1.x);
console.log(point1);
*/
let previousPoint = new Point();

document.addEventListener("DOMContentLoaded", () => {
    const pointForm = document.getElementById("pointForm");
    const inputX = document.getElementById("inputX");
    const inputY = document.getElementById("inputY");
    const result = document.getElementById("result");
    pointForm.addEventListener("submit", event => {
        event.preventDefault();
        const x = parseFloat(inputX.value);
        const y = parseFloat(inputY.value);
        const point = new Point(x, y);
        console.log(JSON.stringify(point));
        result.textContent = point + ", distance from previous point: " + point.distanceFrom(previousPoint);
        previousPoint = point;
    });
})