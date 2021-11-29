let lcd = document.querySelector('.calculator__lcd');
let checkFirstTime = 0;
let counterForNums = 0;
function getNumber(itemValue){
    checkFirstTime++;
    if (itemValue === "ac"){
        checkFirstTime = 0;
        lcd.innerHTML = '0';
        counterForNums = 0;
        firstNumber = undefined;
        secondNumber = undefined;
        lcd.classList.remove('secondChange','firstChange','lastChange');
    }
    if (checkFirstTime === 1){
        lcd.innerHTML = itemValue;
        counterForNums++;
    }else if (itemValue !== "ac"){
        lcd.innerHTML += itemValue;
    }

// changing font size of lcd when its innerHTML is unVisible

    let lcdLength = lcd.innerHTML.length;
    if (lcdLength >= 12){
        lcd.classList.add('firstChange');
    }
    if (lcdLength > 17){
        lcd.classList.add('secondChange');
    }
    if (lcdLength > 25){
        lcd.classList.add('lastChange');
    }
}
let firstNumber;
let secondNumber;
let operatorIndex = 0;

function calculate(operator){
    switch (operator) {
        case ('x'):
            if (firstNumber === undefined) {
                firstNumber = Number(lcd.innerHTML);
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                operatorIndex = 20;
            } else if (secondNumber === undefined && counterForNums%2===0) {
                if (operatorIndex === 20){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber * secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    counterForNums=1;
                } else if (operatorIndex === 21){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber / secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 20;
                    counterForNums=1;
                } else if (operatorIndex === 22){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber + secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 20;
                    counterForNums=1;
                } else if (operatorIndex === 23){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber - secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 20;
                    counterForNums=1;
                }
            } else if (secondNumber === undefined && counterForNums%2 !== 0){
                operatorIndex = 20;
            } else{
                firstNumber = Number(lcd.innerHTML);
                lcd.innerHTML = firstNumber;
                secondNumber = undefined;
                checkFirstTime = 0;
                counterForNums=1;
            }
            break;
        case ('/'):
            if (firstNumber === undefined) {
                firstNumber = Number(lcd.innerHTML);
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                operatorIndex = 21;
            } else if (secondNumber === undefined && counterForNums%2===0) {
                if (operatorIndex === 20){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber * secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 21;
                    counterForNums=1;
                } else if (operatorIndex === 21){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber / secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    counterForNums=1;
                } else if (operatorIndex === 22){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber + secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 21;
                    counterForNums=1;
                } else if (operatorIndex === 23){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber - secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 21;
                    counterForNums=1;
                }
            } else if (secondNumber === undefined && counterForNums%2 !== 0){
                operatorIndex = 21;
            }  else{
                firstNumber = Number(lcd.innerHTML);
                secondNumber = undefined;
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                counterForNums=1;
            }
            break;
        case ('+'):
            if (firstNumber === undefined) {
                firstNumber = Number(lcd.innerHTML);
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                operatorIndex = 22;
            } else if (secondNumber === undefined && counterForNums%2===0) {
                if (operatorIndex === 20){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber * secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 22;
                    counterForNums=1;
                } else if (operatorIndex === 21){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber / secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 22;
                    counterForNums=1;
                } else if (operatorIndex === 22){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber + secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    counterForNums=1;
                } else if (operatorIndex === 23){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber - secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 22;
                    counterForNums=1;
                }
            } else if (secondNumber === undefined && counterForNums%2 !== 0){
                operatorIndex = 22;
            }  else{
                firstNumber = Number(lcd.innerHTML);
                secondNumber = undefined;
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                counterForNums=1;
            }
            break;
        case ('-'):
            if (firstNumber === undefined) {
                firstNumber = Number(lcd.innerHTML);
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                operatorIndex = 23;
            } else if (secondNumber === undefined && counterForNums%2===0) {
                if (operatorIndex === 20){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber * secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 23;
                    counterForNums=1;
                } else if (operatorIndex === 21){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber / secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 23;
                    counterForNums=1;
                } else if (operatorIndex === 22){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber + secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    operatorIndex = 23;
                    counterForNums=1;
                } else if (operatorIndex === 23){
                    secondNumber = Number(lcd.innerHTML);
                    firstNumber = firstNumber - secondNumber;
                    if (firstNumber.toString().length > 7){
                        lcd.classList.add('secondChange');
                    }
                    lcd.innerHTML = firstNumber;
                    secondNumber = undefined;
                    checkFirstTime = 0;
                    counterForNums=1;
                }
            } else if (secondNumber === undefined && counterForNums%2 !== 0){
                operatorIndex = 23;
            }  else{
                firstNumber = Number(lcd.innerHTML);
                secondNumber = undefined;
                lcd.innerHTML = firstNumber;
                checkFirstTime = 0;
                counterForNums=1;
            }
            break;
        case ('='):
            if (operatorIndex === 20 && firstNumber !== undefined && secondNumber === undefined && counterForNums%2 === 0){
                secondNumber = Number(lcd.innerHTML);
                firstNumber = firstNumber * secondNumber;
                if (firstNumber.toString().length > 7){
                    lcd.classList.add('secondChange');
                }
                lcd.innerHTML = firstNumber;
                secondNumber = undefined;
                counterForNums = 1;
                checkFirstTime = 0;
            }
            else if (operatorIndex === 21 && firstNumber !== undefined && secondNumber === undefined && counterForNums%2 === 0){
                secondNumber = Number(lcd.innerHTML);
                firstNumber = firstNumber / secondNumber;
                if (firstNumber.toString().length > 7){
                    lcd.classList.add('secondChange');
                }
                lcd.innerHTML = firstNumber;
                secondNumber = undefined;
                counterForNums = 1;
                checkFirstTime = 0;
            }
            else if (operatorIndex === 22 && firstNumber !== undefined && secondNumber === undefined && counterForNums%2 === 0){
                secondNumber = Number(lcd.innerHTML);
                firstNumber = firstNumber + secondNumber;
                if (firstNumber.toString().length > 7){
                    lcd.classList.add('secondChange');
                }
                lcd.innerHTML = firstNumber;
                secondNumber = undefined;
                counterForNums = 1;
                checkFirstTime = 0;
            }
            else if (operatorIndex === 23 && firstNumber !== undefined && secondNumber === undefined && counterForNums%2 === 0){
                secondNumber = Number(lcd.innerHTML);
                firstNumber = firstNumber - secondNumber;
                if (firstNumber.toString().length > 7){
                    lcd.classList.add('secondChange');
                }
                lcd.innerHTML = firstNumber;
                secondNumber = undefined;
                counterForNums = 1;
                checkFirstTime = 0;
            }
            else if (counterForNums%2 !== 0 && firstNumber !== undefined){
                lcd.innerHTML = firstNumber;
            }
            else if (counterForNums%2 !==0 && firstNumber === undefined){
                let wtf = lcd.innerHTML;
                lcd.innerHTML = wtf;
            }
            break;
    }
}