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

const errorChname = document.getElementById('chname-error');
const errorCnum = document.getElementById('cnum-error');
const errorExpmm = document.getElementById('expmm-error');
const errorExpyy = document.getElementById('expyy-error');
const errorCvc = document.getElementById('cvc-error');

const formContainer = document.getElementById('form-container');
const confContainer = document.getElementById('confirmed-container');
const confBtn = document.getElementById('confirmed-btn');

//! Constants

const qual = /[0-9]/ ;

const ogChname = "Valerie Felicity Frizzle"
const ogCnum = "0000 0000 0000 0000"
const ogExpmm = "11"
const ogExpyy = "33"
const ogCvc = "222"


//! Listeners

// stop keydown of anything but digits and backspace



cnum.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
        return false
    }
})

expmm.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
        return false
    }
})

expyy.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
        return false
    }
})

cvc.addEventListener("keydown", (e) => {
    let key = e.key;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
        return false
    }
})

// edit background cards when there is a new input value aswell as remove errors when corrected

chname.addEventListener("keyup", (e) => {
    if (chname.value !== ""){
        chnameTextEdit()
        if (errorChname.value !== ""){
            errorChname.innerText = ""
            chname.classList.remove('input-error')
        }
    }
    if (chname.value == ""){
        bgName.innerText = ogChname
    }
})

cnum.addEventListener("keyup", (e) => {
    let key = e.key
    numberSpacer(key)
    if (cnum.value !== ""){
        cnumTextEdit()
    }
    if (cnum.value == ""){
        bgNum.innerText = ogCnum
    }
    if (cnum.value.length == 19){
        errorCnum.innerText = ""
        cnum.classList.remove('input-error')
    }
})

expmm.addEventListener("keyup", (e) => {
    if (expmm.value !== ""){
        expmmTextEdit()
    }
    if (expmm.value == ""){
        bgMm.innerText = ogExpmm
    }
    if (expmm.value.length == 2 && expmm.value !== "00"){
        if (errorExpmm.innerText !== "Card expired"){
            errorExpmm.innerText = ""
            expmm.classList.remove('input-error')
        }
        if (errorExpmm.innerText == "Card expired"){
            if (expmm.value >= 01 && expyy.value >= 23){
                errorExpmm.innerText = ""
                expmm.classList.remove('input-error')
                expyy.classList.remove('input-error')
            }
            if (expmm.value > 10 && expyy.value == 22){
                errorExpmm.innerText = ""
                expmm.classList.remove('input-error')
                expyy.classList.remove('input-error')
            } 
        }
    }
})

expyy.addEventListener("keyup", (e) => {
    if (expyy.value !== ""){
        expyyTextEdit()
    }
    if (expyy.value == ""){
        bgYy.innerText = ogExpyy
    }
    if (expyy.value.length == 2){
        if (errorExpmm.innerText !== "Card expired"){
            errorExpyy.innerText = ""
            expyy.classList.remove('input-error')
        }
        if (errorExpmm.innerText == "Card expired"){
            if (expmm.value >= 01 && expyy.value >= 23){
                errorExpmm.innerText = ""
                expmm.classList.remove('input-error')
                expyy.classList.remove('input-error')

            }
            if (expmm.value > 10 && expyy.value == 22){
                errorExpmm.innerText = ""
                expmm.classList.remove('input-error')
                expyy.classList.remove('input-error')
            } 
        }
    }


})

cvc.addEventListener("keyup", (e) => {
    if (cvc.value !== ""){
        cvcTextEdit()
    }
    if (cvc.value == ""){
        bgCvc.innerText = ogCvc
    }
    if (cvc.value.length == 3){
        errorCvc.innerText = ""
        cvc.classList.remove('input-error')
    }
})

// stop form submitting unless all criteria is met once all of it is met send to next page

form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleSubmit()
})

confBtn.addEventListener("click", () => {
    continueReset()
})

//! Functions

function handleSubmit() {

    let errors = []
    
    if (chname.value == '' || chname.value == null) {
        errors.push('name required')
        errorChname.innerText = 'Name required'
        chname.classList.add('input-error')
    }
    if (cnum.value.length < 19) {
        errors.push('card number incomplete')
        errorCnum.innerText = 'Card number incomplete'
        cnum.classList.add('input-error')
    }
    if (expmm.value.length < 2) {
        errors.push('Too short')
        errorExpmm.innerText = 'Too short'
        expmm.classList.add('input-error')
    }
    if (expmm.value == '00') {
        errors.push('expiration month can not be 00')
        errorExpmm.innerText = 'Can\'t be 00'
        expmm.classList.add('input-error')
    }
    if (expyy.value.length < 2) {
        errors.push('Too short')
        errorExpyy.innerText = 'Too short'
        expyy.classList.add('input-error')
        
    }
    if (expyy.value <= 21 && expyy.value !== '' ) {
        errors.push('card is expired')
        errorExpmm.innerText = 'Card expired'
        expmm.classList.add('input-error')
        expyy.classList.add('input-error')
    }
    if (expyy.value == 22 && expmm.value <= 10){
        errors.push('card expired earlier this year')
        errorExpmm.innerText = 'Card expired'
        expmm.classList.add('input-error')
        expyy.classList.add('input-error')
    }
    if (cvc.value.length < 3) {
        errors.push('cvc is too short')
        errorCvc.innerText = 'Needs 3 numbers'
        cvc.classList.add('input-error')
    }
    console.log(errors)
    if (errors.length > 0) {
        console.log('womp womp woomp')
    }
    if (errors.length == 0) {
        submitSuccess()
    }

}

function submitSuccess() {
    console.log('dance youre good!')
    formContainer.classList.add('disappear')
    formContainer.addEventListener("animationend", () => {
        formContainer.classList.add('display-none');
        formContainer.classList.remove('disappear');
        confContainer.classList.add('opacity-none')
        confContainer.classList.remove('display-none');
        confContainer.classList.add('reappear');
    }, {once:true});
    confContainer.addEventListener("animationend", () => {
        confContainer.classList.remove('opacity-none');
        confContainer.classList.remove('reappear');
    }, {once:true});
    
}

function continueReset() {
    confContainer.classList.add('disappear')
    confContainer.addEventListener("animationend", () => {
        confContainer.classList.add('display-none');
        confContainer.classList.remove('disappear');
        valueReset()
        formContainer.classList.add('opacity-none');
        formContainer.classList.remove('display-none');
        formContainer.classList.add('reappear');
    }, {once:true})
    formContainer.addEventListener("animationend", () => {
        formContainer.classList.remove('opacity-none');
        formContainer.classList.remove('reappear');
    }, {once:true})
}

 function valueReset() {
    form.reset()
    bgReset()
 }

 function bgReset() {
    bgName.innerText = ogChname
    bgNum.innerText = ogCnum
    bgMm.innerText = ogExpmm
    bgYy.innerText = ogExpyy
    bgCvc.innerText = ogCvc
 }

 // function to add more space to the credit card numbers

 function numberSpacer(key) {
    console.log(key)
    if (key !== "Backspace"){
        if (cnum.value.length == 4 ||
            cnum.value.length == 9 ||
            cnum.value.length == 14){
                cnum.value = cnum.value + " "
            }
    }
 }

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