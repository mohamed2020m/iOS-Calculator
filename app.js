/*
    author: leeuw
    Date: 10/11/2022
*/


let btn_clicked = (e) => {
    let sym = internalCastSym(e.target.textContent);
    if(AllowedSym(sym)){
        operation_arr.push(sym);
        screen.innerHTML = sym;
        preview.innerHTML = operation_arr.join('');
    }
}

let isOperator = (operator) => {
    if(operator === '+' || operator === '−' || 
        operator === '/' || operator === '*' || operator === '%')
    {
        return true;
    }
    return false;
}

// convert x to * and ÷ to / to be evaluated by the eval function
let internalCastSym = (sym) => {
    if(sym === '×'){
        sym = '*'
    }
    else if (sym === '÷'){
        sym = '/'
    }
    else if( sym === '−'){
        sym = '-'
    }
    return sym;
}

// Not allowing (=, AC) symbols to be pushed to the operation_arr
let AllowedSym = (s) => {
    if(s === "=" || s === 'AC' || s === "+/−"){
        return false;
    }
    return true;
}

let isNumber = (num) => {
    
}

// toggle sign
let toggle_sign = () => {
    let num = parseInt(operation_arr[operation_arr.length - 1]);
    operation_arr[operation_arr.length - 1] = -num;
    screen.innerHTML = -num;
    preview.innerHTML = -num;
}

// Clear the screen
let clear = () => {
    screen.innerHTML = 0;
    preview.innerHTML = '';
    operation_arr = [];
}

// Evaluate the expression from the operation_arr
let evaluate_exp = () => {
    if(operation_arr.length){
        if(isOperator(operation_arr[0])){
            operation_arr.unshift("0");
            operation_arr.push("0");
        }
        screen.innerHTML = eval(operation_arr.join(''));
    }
    
}


let btns = document.querySelectorAll('.btn');
let btn_eval = document.querySelector('.btn_eval');
let screen = document.querySelector('.screen span');
let preview = document.querySelector('.preview span');
let toggle_btn_sign = document.querySelector('.toggle_sign_btn');
let btn_clear = document.querySelector('.clear'); 
let operation_arr = [];

btns.forEach((btn) => btn.addEventListener('click', btn_clicked));
btn_eval.addEventListener('click', evaluate_exp);
toggle_btn_sign.addEventListener('click', toggle_sign);
btn_clear.addEventListener('click', clear);


