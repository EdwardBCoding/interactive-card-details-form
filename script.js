const cnum = document.getElementById('cnum');





cnum.addEventListener("keydown", (e) => {
    let key = e.key;
    let qual = /[0-9]/ ;
    if (qual.test(key) == false && key != "Backspace") {
        e.preventDefault();
    }
})