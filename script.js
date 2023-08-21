const currentNumber = document.getElementsByName('.current');
const procesNumbers = document.getElementsByName('.proces');


const divide  = document.getElementById('.keyDivide');
const multiply  = document.getElementById('.keyMultiply');
const sum  = document.getElementById('.key+');
const minus  = document.getElementById('.key-');
const operationSimbol = document.getElementById('.operationSimbol');

// let result = '10';
// let varCurrentNumber = '';

// function divideFunction(){
//     if (result == ''){
//         false
//     }else{
//         varCurrentNumber = currentNumber;
//         currentNumber.value = result/varCurrentNumber;
//     }
// };

function summing(){
    if (currentNumber == null){
        false;
    }else{
    console.log(currentNumber);
    console.log(procesNumbers);

    procesNumbers=currentNumber;

    console.log(currentNumber);
    console.log(procesNumbers);
    }
}