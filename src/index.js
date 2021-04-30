const fs = require('fs')



function countByLetter(letter){
    const dictionariStr = fs.readFileSync('../dictionary.txt').toString()
    const allWords = dictionariStr.split('\n')
    let withLetterCounter = 0
    let totalCounter = 0
    allWords.forEach(word => {
        totalCounter += 1 
        if(word[0] === letter){
            withLetterCounter += 1
        }
    })
    console.log(`Total words: ${totalCounter}\nStarted from '${letter}': ${withLetterCounter}`)

}
countByLetter('a')
