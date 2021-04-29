const fs = require('fs')
const buffer = fs.readFileSync('C:\\Users\\Иван\\dz\\dictionary.txt')
fs.writeFileSync('../dictionary.txt', buffer)