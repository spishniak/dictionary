const fs = require('fs')


function arrayFromEnglishTxt() {
    const dictionariStr = fs.readFileSync('../resource/english.txt').toString()
    const allWords = dictionariStr.split('\n')

    return allWords
}


function getEngRusJson(){
    return require('../resource/eng-rus.json') 
}


function getRusEngJson(){
    return require('../resource/rus-eng.json')
}


module.exports = {
    arrayFromEnglishTxt,
    getEngRusJson,
    getRusEngJson,
}
