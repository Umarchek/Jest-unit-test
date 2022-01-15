const { sum, nativeNull } = require('./intro')

describe('Sum function:', () => {
    test('should return sum of two values', () => { // функция sum должна вернуть sumu 2 значение
        expect(sum(1, 3)).toBe(4) // expect = ожидание (что мы ожидаем) то есть "1 + 3 = 4"
        expect(sum(1, 3)).toEqual(4) // 1 + 3 = равно 4
    })

    test("should return value correctly comparing to other", () => { 
        expect(sum(2, 3)).toBeGreaterThan(4) // быть больше чем 4
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5) // быть больше чем 4 или равно 5
        expect(sum(2, 3)).toBeLessThan(10) // быть меньше чем 6 потому что пример равно 5.
        expect(sum(2, 3)).toBeLessThanOrEqual(5)// быть меньше чем 6 или равно 5
    })
    test("should sum 2 float values corryectly", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
        // прибавление не целых чисел с toBe может быть ошибка. 
        // toBe не округляет // toBeCloseTo округляет
    })
});

//nativeNull
describe('Native null function', () => {
    test("should return false value null", () => {
        expect(nativeNull()).toBe(null) // результат null
        expect(nativeNull()).toBeNull() // прямой мачер
        // expect(nativeNull()).toBeNAN() // прямой мачер NAN не число
        expect(nativeNull()).toBeFalsy() // не проходят при if "undefined,null,''"
        expect(nativeNull()).toBeDefined() // определенное значение например это 100% не undefined
        expect(nativeNull()).not.toBeTruthy // не undefined,null,''
        expect(nativeNull()).not.toBeUndefined // не undefined
    })
});

