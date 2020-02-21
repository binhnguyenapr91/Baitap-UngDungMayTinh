function calculator() {
    let inputNumber1;
    let inputNumber2;
    let number1;
    let number2;
    let op;
    let result;

    inputNumber1 = document.getElementById("num1").value;
    number1 = parseFloat(inputNumber1);

    inputNumber2 = document.getElementById("num2").value;
    number2 = parseFloat(inputNumber2);

    op = document.getElementById("operator").value;
    switch (op) {
        case '+' :
            result = number1+number2;
            break;
        case '-' :
            result = number1-number2;
            break;
        case '*' :
            result = number1*number2;
            break;
        case '/' :
            result = number1/number2;
            break;
    }
    document.getElementById("result").innerHTML = result;


}