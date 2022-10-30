//! Selectors

// const chname = document.getElementById('chname');
const cnum = document.getElementById('cnum');
const expmm = document.getElementById('expmm');
const expyy = document.getElementById('expyy');
const cvc = document.getElementById('cvc');
// const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form');

//! Listeners

const qual = /[0-9]/ ;

cnum.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
    }
})

expmm.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
    }
})

expyy.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
    }
})

cvc.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
    }
})

expmm.addEventListener("keyup", (e) => {
    let key = e.key;
    if (expmm.value == "00"){
        expmm.value = "01"
    }
})

cvc.addEventListener("keyup", (e) => {
    let key = e.key;
    cardTextEdit()
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

//! Functions

function cardTextEdit () {
    console.log(this.value)
}