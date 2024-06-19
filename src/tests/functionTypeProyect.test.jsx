import { describe,expect, test } from "vitest";
import { typeProject } from "../utils/Utils"


describe("tests function type proyect", () => {

    test('return de correct proyect', () => {
       let result = typeProject(0)
       expect(typeof result).toBe('string')
       expect(result).toBe('Consumo')
       
       result = typeProject(1)
       expect(typeof result).toBe('string')
       expect(typeof result).not.toBe('number')
       expect(result).toBe('Autoconsumo')

       result = typeProject(8)
       expect(typeof result).toBe('string')
       expect(typeof result).not.toBe('number')
       expect(result).toBe('No definido')

    })

    test('return no defined for values that not match the cases', () => {
       let result = typeProject('')

       expect(typeof result).toBe('string')
       expect(typeof result).not.toBe('number')
       expect(result).toBe('No definido')

       result = typeProject({})
       expect(typeof result).toBe('string')
       expect(typeof result).not.toBe('number')
       expect(result).toBe('No definido')

       result = typeProject([])
       expect(typeof result).toBe('string')
       expect(typeof result).not.toBe('number')
       expect(result).toBe('No definido')

    })


})