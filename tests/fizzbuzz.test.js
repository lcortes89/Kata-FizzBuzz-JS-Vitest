import { describe, expect, test } from 'vitest';
import { checkNumber } from '../src/js/fizzbuzz.js';

describe('Fizzbuzz', () => {
    
    test('should return Fizz', () => {
        const n = 3;
        const expected = "Fizz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test('should return Buzz', () => {
        const n = 5;
        const expected = "Buzz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test('should return FizzBuzz', () => {
        const n = 15;
        const expected = "FizzBuzz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test('should return the number as string', () => {
        const n = 7;
        const expected = "7";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test('should throw an error if input is not a number', () => {
    expect(() => {
      checkNumber("hola");
    }).toThrow("El dato proporcionado no es un número");
  });
})