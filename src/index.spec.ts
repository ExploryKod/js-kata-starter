import fizzBuzz from "./index";
// Chercher le cas par défaut - ici c'est 1 (et autant que possible on cherche à renvoyer tj le même type, donc en string ici)
test("the digit is equal to 1", () => {
  // GIVEN
  const numb: number = 1;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = '1';
  expect(actual).toEqual(expected);
});

test("the digit is equal to 2", () => {
  // GIVEN
  const numb: number = 2;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = '2';
  expect(actual).toEqual(expected);
});

test("the digit is a multiple of 3 so we have Fizz", () => {
  // GIVEN
  const numb: number = 3;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = 'Fizz';
  expect(actual).toEqual(expected);
});

// triangulation: je garde le même algo et le même test avec une valeur différente qui respecte la logique précèdente (pas des specs) (multiple de 3)
test("the digit is a multiple of 3 so we have Fizz", () => {
  // GIVEN
  const numb: number = 6;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = 'Fizz';
  expect(actual).toEqual(expected);
});

// D'abord Red => ensuite green => enfin refactor
test("the digit is a multiple of 5 so we have Buzz", () => {
  // GIVEN
  const numb: number = 5;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = 'Buzz';
  expect(actual).toEqual(expected);
});

// Triangulation
test("the digit is a multiple of 5 so we have Buzz", () => {

  // GIVEN
  const numb: number = 10;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = 'Buzz';
  expect(actual).toEqual(expected);
});


test("the digit is a multiple of 5 and 3 so we have FizzBuzz", () => {

  // GIVEN
  const numb: number = 15;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = 'FizzBuzz';
  expect(actual).toEqual(expected);
});

// Triangulation - on change la valeur de numb
test("the digit is a multiple of 5 and 3 so we have FizzBuzz", () => {

  // GIVEN
  const numb: number = 30;

  // WHEN
  const actual = fizzBuzz(numb);

  // THEN
  const expected: string = 'FizzBuzz';
  expect(actual).toEqual(expected);
});
