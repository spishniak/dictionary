const fs = require('fs')



function countByLetter(letter) {
    const dictionariStr = fs.readFileSync('../dictionary.txt').toString()
    const allWords = dictionariStr.split('\n')
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
countByLetter('a')
