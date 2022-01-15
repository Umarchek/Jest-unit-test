const axios = require('axios')
const Ajax = require('./03_async')

Jest.mock('axios')

describe('Ajax: echo', () => {
    test('should return value async', async() => {
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

describe('Ajax: GET', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [
            { id: 1, title: 'Todo 1', completed: false }
        ]

        response = {
            data: {
                todos
            }
        }
    })


    test('should raturn data from backend', () => {
        axios.get.mockReturnValue(response)
        return Ajax.get().then(data => { expect(data.todos).toEqual(todos) })
    })
})