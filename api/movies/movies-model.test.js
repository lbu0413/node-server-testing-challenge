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

            await Movies.insert({ name: 'dumb and dumber' })
            movies = await db('movies')
            expect(movies).toHaveLength(2)
        })
        it('can give back the inserted movies', async () => {
            const lotr = await Movies.insert({ name: 'lord of the rings' })
            expect(lotr).toMatchObject({ id: 1, name: 'lord of the rings'})
        })
    })
    describe('update', () => {
        it('can insert', async () => {
            await db('movies').insert({ name: 'iron man'})
            let im = await Movies.update(1, {name : 'iron man'})
            expect(im).toMatchObject({ id: 1, name: 'iron man'})
        })
    })
    describe('remove', () => {
        it('can remove', async() => {
            await db('movies').insert({ name: 'lord of the rings'})
            await Movies.remove(1)
            let movies = await db('movies')
            expect(movies).toHaveLength(0)
        })
    })
})