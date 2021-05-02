const fs = require('fs')


function arrayFromEnglishTxt() {
    const dictionariStr = fs.readFileSync('../resource/english.txt').toString()
    const allWords = dictionariStr.split('\n')

    return allWords
}



module.exports = {
    arrayFromEnglishTxt,
}
