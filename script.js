let Plus = document.querySelector("#Plus");
let Minus = document.querySelector("#Minus");
let count = document.querySelector("#Number");    
let reload = document.querySelector('.reload')
let random = document.querySelector('.random')
let number = 1;

Plus.onclick = function() {
    if (number <= 99) {
        number++;
        count.innerHTML = number;
    }
};

Minus.onclick = function() {
    if (number >= 2) {
        number--;
        count.innerHTML = number;
    }
}

        reload.onclick = function() {
                count.innerHTML = 0
        }
        random.onclick = function() {

                count.innerHTML = Math.floor(Math.random() * 100)
            
        }   