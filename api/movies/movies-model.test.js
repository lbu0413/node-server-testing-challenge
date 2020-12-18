const Movies = require('./movies-model')
const db = require('../../data/dbConfig')

beforeEach(async () => {
    await db('movies').truncate()
})

describe('movies model', () => {
    describe('getAll()', () => {
        it('gets an empty array', async () => {
            const movies = await Movies.getAll()
            expect(movies).toEqual([])
            expect(movies).toHaveLength(0)
        })
        it('gets all the movies', async() => {
            await db('movies').insert({ name: 'iron man' })
            let movies = await Movies.getAll()
            expect(movies).toHaveLength(1)

            await db('movies').insert({ name: 'lord of the rings' })
            movies = await Movies.getAll()
            expect(movies).toHaveLength(2)
        })
    })
    describe('insert', () => {
        it('can insert movies', async () => {
            await Movies.insert({ name: 'lord of the rings' })
            let movies = await db('movies')
            expect(movies).toHaveLength(1)
        })
    })
})