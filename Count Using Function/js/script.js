const counter = document.querySelector(".inc_dec .h1_tag h1")
function increment() {
    let inc = Number((counter.innerText));
    counter.innerText = ++inc;
}
function Reset() {
    counter.innerText = "00";
}
function Decrement() {
    let dec = Number((counter.innerText));
    if (dec !== 0) {
        counter.innerText = --dec;
    }
}

