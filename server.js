const express = require('express')
const app = express()
const path = require('path')
const syncAndSeed = require('./backend/db/seed')
const Chat = require('./backend/db/models/Chat')

const port = process.env.PORT || 3000

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
)

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
)

app.get('/api/chats', (req, res, next) => {
  Chat.findAll()
    .then(chats => res.send(chats))
    .catch(next)
})

syncAndSeed().then(() =>
  app.listen(port, () => console.log(`listening on port ${port}`))
)
