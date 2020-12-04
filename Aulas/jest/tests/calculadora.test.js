const calculadora = require('../src/calculadora')

describe('Testar uma calculadora', () => {
    test('somar 2 valores', () => {
        // dois positivos
        expect(calculadora.somar(1,1)).toBe(2)
        // um negativo e outro positivo negativo> 
        expect(calculadora.somar(-10,1)).toBeLessThan(0)
        // um negativo e outro positivo negativo< 
        expect(calculadora.somar(1,-10)).toBeLessThan(0)
        // um positivo e outro negativo negativo<
        expect(calculadora.somar(10,-1)).toBeGreaterThan(0)
        // dois negtivos
        expect(calculadora.somar(-10,-1)).toBeLessThan(0)
    })

    test('calcular 2 valores', () => {
        // 9 – 10 SS – Superior
        expect(calculadora.calcular(9,10)).toBe("SS – Superior")
        // 7 – 8,9 MS – Médio Superior
        expect(calculadora.calcular(7,8)).toBe("MS – Médio Superior")
        // 5 – 6,9 MM – Médio
        expect(calculadora.calcular(5,6)).toBe("MM – Médio")
        // 3 – 4,9 MI – Médio Inferior
        expect(calculadora.calcular(3,4)).toBe("MI – Médio Inferior")
        // 0,1 – 2,9 II – Inferior
        expect(calculadora.calcular(0.1,2)).toBe("II – Inferior")
        // 0,0 SR – Sem rendimento
        expect(calculadora.calcular(0,0)).toBe("SR – Sem rendimento")
    })

    test('multiplicar 2 valores', () => {
        expect(calculadora.multiplicar(1,1)).toBe(1)
        expect(calculadora.multiplicar(1,0)).toBe(0)
    })
})