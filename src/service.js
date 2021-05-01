const repository = require('./repository')
const createWordsArrayFromDictionary = repository.createWordsArrayFromDictionary




function countAllWordStartingFrom(letter) {
    const allWords = createWordsArrayFromDictionary()
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
    const allWords = createWordsArrayFromDictionary()
    const result = allWords.some((dictWord) => dictWord === word)
    console.log(result ? 'Yes' : 'No')
}

function countWordsWithSubstring(substring) {
    const allWords = createWordsArrayFromDictionary()
    const result = allWords.filter((dictWord) => dictWord.includes(substring))
    console.log(result.length)
}

module.exports = {
    countAllWordStartingFrom,
    isWordExist,
    countWordsWithSubstring,
}
