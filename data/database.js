const fs = require('fs')
const db_name = './data/db_address_book.json'

exports.save = (contacts) =>  {
    fs.writeFileSync(db_name, JSON.stringify(contacts))
}

exports.load = () => {
    return JSON.parse(fs.readFileSync(db_name, 'utf8'))
}
