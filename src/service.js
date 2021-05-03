const { arrayFromEnglishTxt, getEngRusJson, getRusEngJson } = require('./repository')


function countAllWordStartingFrom(letter) {
    const allWords = arrayFromEnglishTxt()
    let counter = 0
    let isAnyMatches = false

    for (let i = 0; i < allWords.length; ++i) {
        const word = allWords[i]

        if (letter === undefined) {
            counter += 1
        } else if (word[0] === letter) {
            counter += 1
            isAnyMatches = true
        } else if (isAnyMatches) {
            break
        }
    }
    console.log(`result: ${counter}`)

}
function isWordExist(word) {
    const allWords = arrayFromEnglishTxt()
    const result = allWords.some((dictWord) => dictWord === word)
    console.log(result ? 'Yes' : 'No')
}

function countWordsWithSubstring(substring) {
    const allWords = arrayFromEnglishTxt()
    const result = allWords.filter((dictWord) => dictWord.includes(substring))
    console.log(result.length)
}




function translateEnglRus(word) {
    const result = getEngRusJson()[word.toUpperCase()]

    if (result) {
        console.log(result)
    } else {
        console.log('not found')
    }
}
function translateRusEng(word) {
    const result = getRusEngJson()[word.toUpperCase()]

    if (result) {
        console.log(result)
    } else {
        console.log('not found')
    }
}
module.exports = {
    countAllWordStartingFrom,
    isWordExist,
    countWordsWithSubstring,
    translateEnglRus,
    translateRusEng,
}