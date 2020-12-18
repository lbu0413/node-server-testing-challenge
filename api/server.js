const express = require('express')

const Movies = require('./movies/movies-model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
})

server.get('/movies', (req, res) => {
    Movies.getAll()
    .then(movies => {
        res.status(200).json(movies)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.get("/movies/id", (req, res) => {
    res.end()
  });
  
  server.post("/movies", (req, res) => {
    res.end()
  });
  
  server.delete("/movies/:id", (req, res) => {
    res.end()
  });
  
  server.put("/movies/:id", (req, res) => {
    res.end()
  });
  
  module.exports = server;