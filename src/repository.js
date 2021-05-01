const fs = require('fs')


function createWordsArrayFromDictionary() {
    const dictionariStr = fs.readFileSync('../dictionary.txt').toString()
    const allWords = dictionariStr.split('\n')

    return allWords
}



module.exports = {
    createWordsArrayFromDictionary,
}
