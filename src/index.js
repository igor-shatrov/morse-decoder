const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrWords = expr.split('**********')
    const MORSE_TABLE_DIGITAL = {}
    for (const key in MORSE_TABLE) {
        let digitalKey = ''
        key.split('').forEach(elem => {
            switch (elem) {
                case '.':
                    digitalKey += '10'
                    break
                case '-':
                    digitalKey += '11'
                    break
            }
        })
        while (digitalKey.length < 10) {
            digitalKey = '0' + digitalKey
        }
        MORSE_TABLE_DIGITAL[digitalKey] = MORSE_TABLE[key]
    }
    let arrSymbol = arrWords.map(elem => {
        let arr = []
        for (let i = 0; i < elem.length; i += 10) {
            arr.push(elem.slice(i, i + 10))
        }
        return arr
    })
    let string = ''
    arrSymbol.forEach((elem, index) => {
        if (index !== 0) {
            string += ' '
        }
        elem.forEach(elemWord => {
            string += MORSE_TABLE_DIGITAL[elemWord]
        })
    })
    return string
}

module.exports = {
    decode
}