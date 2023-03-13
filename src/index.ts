const isMultipleOf = (divider: number, n: number): boolean => {
    return n % divider === 0;
};
const fizzBuzz = (num: number): string => {
    let result = "";
    if (num % 3 === 0) {
        result += 'Fizz';
    }
    if (num % 5 === 0 && num % 3 === 0) {
        result += result;
    }
    if (num % 5 === 0) {
        result += 'Buzz';
    }
    return num.toString()
};

export default fizzBuzz;

/** 
 * Phase de Refactor :
 * ne retourner ici que le type string (on change donc aussi les test)
 * naming : result et non str etc...
 * On donne de l'intention avec une fonction isMultipleOf3 (et le SRP)
 **/ 