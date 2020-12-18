const request = require('supertest')
const server = require('./server.js')

describe('server.js module', () => {
    it('is the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})