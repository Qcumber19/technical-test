function helloWorld(inputNumber){

    if (inputNumber % 3 == 0 && inputNumber % 5 ==0){
        return ("Hello World");
    } else if (inputNumber % 3 == 0){
        return ("Hello");
    } else if (inputNumber % 5 == 0){
        return ("World");
    } else {
        return ("Not remainder of 3 or 5");
    }
}

console.log(helloWorld(3));
console.log(helloWorld(5));
console.log(helloWorld(15));