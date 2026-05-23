
export function checkNumber(numb) {
    if (typeof numb !== 'number' || Number.isNaN(numb)){
        throw new TypeError("El dato proporcionado no es un número");
    }
    const isDivisibleBy3 = numb % 3 === 0;
    const isDivisibleBy5 = numb % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5){
        return 'FizzBuzz';
    }
    if (isDivisibleBy3){
        return 'Fizz';
    }

    if (isDivisibleBy5) {
        return 'Buzz';
    }
    return String(numb);
}