const counter = document.querySelector(".h1_tag h1")

function increment() {
    let inc = Number((h1_tag.innerHtml));
    counter.innerHtml = ++inc;
}
function Reset() {
    counter.innerHtml = "00";
}
function Decrement() {
    let dec = Number((h1_tag.innerHtml));
    if (dec !== 0) {
        counter.innerHtml = --dec;
    }
}

