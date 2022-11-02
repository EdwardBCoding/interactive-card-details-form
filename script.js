//! Selectors

const chname = document.getElementById('chname');
const cnum = document.getElementById('cnum');
const expmm = document.getElementById('expmm');
const expyy = document.getElementById('expyy');
const cvc = document.getElementById('cvc');
// const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form');

const bgNum = document.getElementById('card-front-num');
const bgName = document.getElementById('card-front-name');
const bgMm = document.getElementById('card-front-exp-mm');
const bgYy = document.getElementById('card-front-exp-yy');
const bgCvc = document.getElementById('card-back-cvc');

const errorCnum = document.getElementById('cnum-error');
const errorExpmm = document.getElementById('expmm-error');
const errorExpyy = document.getElementById('expyy-error');
const errorCvc = document.getElementById('cvc-error');


//! Listeners

// stop keydown of anything but digits and backspace

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

// edit background cards when there is a new input value

chname.addEventListener("keyup", (e) => {
    if (chname.value !== ""){
        chnameTextEdit()
    }
    if (chname.value == ""){
        bgName.innerText = "Jane Appleseed"
    }
})

cnum.addEventListener("keyup", (e) => {
    if (cnum.value !== ""){
        cnumTextEdit()
    }
    if (cnum.value == ""){
        bgNum.innerText = "0000 0000 0000 0000"
    }
})

expmm.addEventListener("keyup", (e) => {
    if (expmm.value !== ""){
        expmmTextEdit()
    }
    if (expmm.value == ""){
        bgMm.innerText = "00"
    }
    
    
    // if (expmm.value == "00"){
    //     expmm.value = "01"
    // }
})

expyy.addEventListener("keyup", (e) => {
    if (expyy.value !== ""){
        expyyTextEdit()
    }
    if (expyy.value == ""){
        bgYy.innerText = "00"
    }
})

cvc.addEventListener("keyup", (e) => {
    if (cvc.value !== ""){
        cvcTextEdit()
    }
    if (cvc.value == ""){
        bgCvc.innerText = "000"
    }
})

// stop form submitting unless all criteria is met once all of it is met send to next page

form.addEventListener("submit", (e) => {

    let errors = []

    if (chname.value == '' || chname.value == null) {
        errors.push('name required')
    }
    if (cnum.value.length < 16) {
        errors.push('card number incomplete')
    }
    if (expmm.value.length < 2) {
        errors.push('expiration month is too short')
    }
    if (expmm.value == '00') {
        errors.push('expiration month can not be 00')
    }
    if (expyy.value.length < 2) {
        errors.push('expiration year is too short')
    }
    if (expyy.value <= 21 && expyy.value !== '' ) {
        errors.push('card is expired')
    }
    if (expyy.value == 22 && expmm.value <= 10){
        errors.push('card expired earlier this year')
    }
    if (cvc.value.length < 3) {
        errors.push('cvc is too short')
    }
    console.log(errors)
    if (errors.length > 0) {
        console.log('its fkd')
        e.preventDefault()
    }
    if (errors.length == 0) {
        console.log('dance youre good!')
        e.preventDefault()
    }

    
})

//! Functions

// functions for background card animation

function chnameTextEdit () {
    bgName.innerText = chname.value
}

function cnumTextEdit () {
    bgNum.innerText = cnum.value
}

function expmmTextEdit () {
    bgMm.innerText = expmm.value
}

function expyyTextEdit () {
    bgYy.innerText = expyy.value
}

function cvcTextEdit () {
    bgCvc.innerText = cvc.value
}

// functions for errors on submit

// function chnameErrorEdit () {
//     bgName.innerText = chname.value
// }

function cnumErrorEdit () {
    errorCnum.innerText = cnum.value
}

function expmmErrorEdit () {
    errorExpmm.innerText = expmm.value
}

function expyyErrorEdit () {
    errorExpyy.innerText = expyy.value
}

function cvcErrorEdit () {
    errorCvc.innerText = cvc.value
}