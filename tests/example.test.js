import { describe, expect, test } from 'vitest';

+// describe - agrupación de tests
describe('Example Test', () => {

    test('should add two numbers correctly', () => {
        const sum = (a, b) => a + b;
        expect(sum(2, 3)).toBe(5);
    });

});