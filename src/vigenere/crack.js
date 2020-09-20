import { alphabet, alphabetFrequencies, VigenereMatrix, normilizeText } from './structures.js'

let counter = str => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

let getGroups = (text, size) => {
  let i = 0;
  let groups = []
  for (let i = 0; i < size; i++) {
    groups.push([])
  }
  for (let char of text) {
    groups[i % size].push(char)
    i++
  }
  return groups
}

export let getDif = (char1, char2) => {
  return alphabet.indexOf(char1) - alphabet.indexOf(char2)
}

let shift = (text, num) => {
  let newText = ''
  for (let char of text) {
    let i = alphabet.indexOf(char)
    let newI = 0
    if (num > 0) {
      newI = (i + num) % alphabet.length
    } else {
      newI = i + num > -1 ? i + num : alphabet.length + i + num
    }
    newText += alphabet[newI]
  }
  return newText;
}

export function guessText (text, keySize) {
  let groups = getGroups(text, keySize)
  let decypherGroups = []

  for (let chars of groups ) {
    let group = chars.join('')
    let frequencies = counter(group)
    let frequenciesPercent = {}

    for (let char of text) {
      let percent = frequencies[char] / (text.length)
      if (percent) {
        frequenciesPercent[char] = percent
      } else {
        frequenciesPercent[char] = 0
      }
    }

    let frequenciesPairs = Object.entries(frequenciesPercent)
    frequenciesPairs = frequenciesPairs.sort((a, b) => a[1] - b[1])
    frequenciesPairs = frequenciesPairs.reverse()

    let mostFreqChar = frequenciesPairs[0][0];
    let dif = getDif('о', mostFreqChar)
    decypherGroups.push(shift(group, dif))
  }
  let string = ''

  for (let char in text) {
    string += decypherGroups[char % groups.length][0]
    decypherGroups[char % groups.length] = decypherGroups[char % groups.length].slice(1)
  }

  return string
}

export let ind = (text) => {
  let n = text.length
  let frequencies = counter(text)
  let sum = 0;

  for (let char of alphabet) {
     sum += frequencies[char] * (frequencies[char] - 1)
  }

  return sum / (n * (n - 1))
}