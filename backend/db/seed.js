const Chat = require('./models/Chat')
const db = require('./db')
const dataFile = require('./data.json')

const syncAndSeed = () => {
  return db.sync({ force: true }).then(() =>
    Chat.create({
      name: 'Petty Data',
      data: dataFile
    })
  )
}

module.exports = syncAndSeed
