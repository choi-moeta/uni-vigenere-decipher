import { alphabet, alphabetFrequencies, vigenereMatrix, normilizeText } from './structures.js'

export function decipher(text, key) {
  let desiphText = ''

  for (let i = 0; i < text.length; i++) {
    let keyChar = key[i % key.length]
    let textChar = text[i]
    let y = alphabet.indexOf(keyChar)
    let x = vigenereMatrix[y].indexOf(textChar)

    desiphText += alphabet[x]
  }

  return desiphText
}

export function getKey(text, guessedText, keySize) {
  let key = ''

  for (let i = 0; i < keySize; i++) {
    let char = text[i]
    let guessedChar = guessedText[i]
    let y = alphabet.indexOf(guessedChar)
    let x = vigenereMatrix[y].indexOf(char)

    key += alphabet[x]
  }

  return key
}