var keys = document.querySelectorAll("button");
var display = document.querySelector(".display");
var operand1value = "";
var operand2value = "";
var operationMode = "unselected";
var shift = "leftOperand";
var holder = "";
var keyValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
var len = keyValues.length;
for(let buttonIndex = 5, keyValuesIndex = 0; keyValuesIndex<len; buttonIndex++, keyValuesIndex++) {
    keys[buttonIndex].addEventListener("click", ()=> {
        displayData(keyValues[keyValuesIndex]);
    });
    keys[buttonIndex].addEventListener("mouseenter", () => {
        keys[buttonIndex].style.backgroundColor = "rgb(221, 159, 78)";
    })
    keys[buttonIndex].addEventListener("mouseleave", () => {
        keys[buttonIndex].style.backgroundColor = "rgb(187, 187, 163)";
    })
    keys[buttonIndex].addEventListener("mousedown", () => {
        keys[buttonIndex].style.backgroundColor = "red";
    })
    keys[buttonIndex].addEventListener("mouseup", () => {
        keys[buttonIndex].style.backgroundColor = "rgb(187, 187, 163)";
    })
}

function valueAssigner(ch) {
    if(shift == "leftOperand") {
        operand1value += ch;
    }
    else if(shift == "operator") shift = "rightOperand";
    else if(shift == "rightOperand") operand2value += ch;
}
function displayData(ch) {
    display.innerHTML+= ch;
    valueAssigner(ch);
}

//reset the calculator except the display result
function rescalc() {
    operand1value = operand1value.toString();
    display.innerHTML = operand1value;
    operand2value = "";
    shift = "leftOperand";
    operationMode = "unselected";
}

function addition() {
    // if both operands have value
    if (operand2value != "") {
        if(operationMode == "addition") {
            console.log("both operands have value");
            operand1value = parseInt(operand1value) + parseInt(operand2value);
            rescalc();
        }
    }
    //if operand1 has value
    else if(operand1value != "") {
        //run this 'if block' if operationMode is not addition
        if(operationMode != "addition") {
            console.log("operand mode is addition")
            operationMode = "addition";
            shift = "operator";
            holder = operand1value + "+";
            display.innerHTML = "";
            displayData(holder);
        }
    }
    //if both operands have no value
    else if(operand1value == "" && operand2value == "") {
        console.log("both operands have no value");
    }
}
function subtraction() {
    // if both operands have value
    if (operand2value != "") {
        if(operationMode == "subtraction") {
            console.log("if both operands have value");
            operand1value = parseInt(operand1value) - parseInt(operand2value);
            rescalc();
        }
    }
    //if operand1 has value
    else if(operand1value != "") {
        //run this 'if block' if operationMode is not subtraction
        if(operationMode != "subtraction") {
            console.log("operand mode is subtraction")
            operationMode = "subtraction";
            shift = "operator";
            holder = operand1value + "-";
            display.innerHTML = "";
            displayData(holder);
        }
    }
    //if both operands have no value
    else if(operand1value == "" && operand2value == "") {
        console.log("both operands have no value");
    }
}
function multiplication() {
    // if both operands have value
    if (operand2value != "") {
        if(operationMode == "multiplication") {
            console.log("if both operands have value");
            operand1value = parseInt(operand1value) * parseInt(operand2value);
            rescalc();
        }
    }
    //if operand1 has value
    else if(operand1value != "") {
        //run this 'if block' if operationMode is not multiplication
        if(operationMode != "multiplication") {
            console.log("operand mode is multiplication")
            operationMode = "multiplication";
            shift = "operator";
            holder = operand1value + "*";
            display.innerHTML = "";
            displayData(holder);
        }
    }
    //if both operands have no value
    else if(operand1value == "" && operand2value == "") {
        console.log("both operands have no value");
    }
}
function division() {
    // if both operands have value
    if (operand2value != "") {
        if(operationMode == "division") {
            console.log("if both operands have value");
            operand1value = parseInt(operand1value) / parseInt(operand2value);
            rescalc();
        }
    }
    //if operand1 has value
    else if(operand1value != "") {
        //run this 'if block' if operationMode is not division
        if(operationMode != "division") {
            console.log("operand mode is division")
            operationMode = "division";
            shift = "operator";
            holder = operand1value + "/";
            display.innerHTML = "";
            displayData(holder);
        }
    }
    //if both operands have no value
    else if(operand1value == "" && operand2value == "") {
        console.log("both operands have no value");
    }
}

function result() {
    if (operationMode == "addition") addition();
    else if (operationMode == "subtraction") subtraction();
    else if (operationMode == "multiplication") multiplication();
    else if (operationMode == "division") division();
    else {
        console.log("operation mode is unselected");
    }
}

function AC() {
    display.innerHTML = "";
    operand1value = "";
    operand2value = "";
    operationMode = "";
    shift = "leftOperand";
}