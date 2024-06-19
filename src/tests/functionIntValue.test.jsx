import { describe,expect, test } from "vitest";
import { intValue } from "../utils/Utils"


describe("Test intValue", () => {

    test('should return true for a valid integer string', () => {
       expect(intValue('123')).toBe(true);
       expect(intValue('0')).toBe(true);
    })

    test('should return false for a not valid integer', () => {
       expect(intValue('celia')).toBe(false);
       expect(intValue(null)).toBe(false);
       expect(intValue(undefined)).toBe(false);
       expect(intValue('0,5')).toBe(false);
    })

    test('should return false for a empty value or empty space', () => {
       expect(intValue('243243 ')).toBe(false);
       expect(intValue('')).toBe(false);
       expect(intValue('und efined')).toBe(false);
    })

    test('should return false for a negative value', () => {
       expect(intValue('-243243')).toBe(false);
       expect(intValue('-0,5')).toBe(false);
       expect(intValue('-10.5')).toBe(false);
    })

})