const Contact = require('./models/contact')
const Database = require('./data/database')

console.log('Creating contacts')

const jobs = new Contact('Steve', 'Jobs', 'jobs@mailinator.com', "123231313", '02-dec', 'notes')
const woz = new Contact('Steve', 'Wozniak', 'swoz@mailinator.com', "1231232342", '11-jan', 'notes')

const address_book = [jobs, woz]
Database.save(address_book)

const loadedFile = Database.load()

console.log(loadedFile)
