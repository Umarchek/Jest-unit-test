const Ajax = require('./03_async')

describe('Ajax: echo', () => {
    test('should return value async', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe("some data")
    })

    test('should return value with promise', () => {
        Ajax.echo('some data').then(data => {
            expect(data).toBe("some data")
        })
    })

    test('should catch error with promise', () => {
        Ajax.echo('some data').catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test('should catch error with promise', () => {
        try {
            Ajax.echo()

        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
})
