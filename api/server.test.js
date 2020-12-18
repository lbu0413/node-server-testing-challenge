const request = require('supertest')
const server = require('./server.js')

describe('server.js module', () => {
    it('is the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
        expect(process.env.DB_ENV).not.toBe('development')
    })
    describe('[GET] /', () => {
        it('works', () => {
            return request(server).get('/')
                .expect('Content-Type', /json/)
                .expect('Content-Length', '12')
        })
        it('works also using jest syntax', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
            expect(res.body).toMatchObject({ api: 'up' })
            expect(res.type).toMatch(/json/)
        })
    })
})
