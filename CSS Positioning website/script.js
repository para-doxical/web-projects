const displayBox = document.getElementById("display-box");
const  cardTitle = document.querySelector(".display-card > .card-title");
const cardText = document.querySelector(".display-card > code");
const boxText = document.querySelector("#display-box > p");

function static() {
    cardTitle.innerHTML = "Static Positioning";
    cardText.innerHTML = "position: static;<br>left: 50px;<br>top: 50px;"
    displayBox.style.position = "static";
    boxText.style.display = "none";
}
function relative() {
    cardTitle.innerHTML = "Relative Positioning";
    cardText.innerHTML = "position: relative;<br>left: 50px;<br>top: 50px;"
    displayBox.style.position = "relative";
    boxText.style.display = "none";
}
function absolute() {
    cardTitle.innerHTML = "Absolute Positioning";
    cardText.innerHTML = "position: absolute;<br>left: 50px;<br>top: 50px;"
    displayBox.style.position = "absolute";
    boxText.style.display = "none";
}
function fixed() {
    cardTitle.innerHTML = "Fixed Positioning";
    cardText.innerHTML = "position: fixed;<br>left: 50px;<br>top: 50px;"
    displayBox.style.position = "fixed";
    boxText.style.display = "inline";
}