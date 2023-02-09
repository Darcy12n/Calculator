const text_box = document.getElementById('text_box');
var counter = 0;
var result = 0;
var value1 = '';
var value2 = '';
var operand = '';


function printNumber(number) {
    var check = number != '+' && number != '-' && number != '*' && number != '/' && number != 'n';
    if (number == '=') {
        if (operand == '+') {
            result = parseFloat(value1) + parseFloat(value2);
        } else if (operand == '-') {
            result = parseFloat(value1) - parseFloat(value2);
        } else if (operand == '*') {
            result = parseFloat(value1) * parseFloat(value2);
        } else if (operand == '/') {
            result = parseFloat(value1) / parseFloat(value2);
        }
        text_box.innerText = result;
    } else if (check && counter == 0) {
        text_box.innerText += number;
        value1 += number;
    } else if (check && counter == 1) {
        text_box.innerText += number;
        value2 += number;
    } else if ((number == '+' || number == '-') || (number == '*' || number == '/') && counter == 0) {
        operand = number;
        text_box.innerText += number;
        counter++;
    } else if (number == 'n') {
        if (counter == 0) {
            value1 = -value1;
            text_box.innerText = value1;
        } else if (counter == 1) {
            value2 = -value2;
            text_box.innerText = value2;
        }
    }
    //first commit
}

function clearText() {
    text_box.innerText = '';
    counter = 0;
    value1 = '';
    value2 = '';
}