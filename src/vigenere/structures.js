import capitalize from 'capitalize'

export let alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя"

export let alphabetFrequencies = {
  'о': 0.197,
  'е': 0.0845,
  'а': 0.0801,
  'и': 0.0735,
  'н': 0.0670,
  'т': 0.0626,
  'с': 0.0547,
  'р': 0.0473,
  'в': 0.0454,
  'л': 0.0440,
  'к': 0.0349,
  'м': 0.0321,
  'д': 0.0298,
  'п': 0.0281,
  'у': 0.0262,
  'я': 0.0201,
  'ы': 0.0190,
  'ь': 0.0174,
  'г': 0.0170,
  'з': 0.0165,
  'б': 0.0159,
  'ч': 0.0144,
  'й': 0.0121,
  'х': 0.0097,
  'ж': 0.0094,
  'ш': 0.0073,
  'ю': 0.0064,
  'ц': 0.0048,
  'щ': 0.0036,
  'э': 0.0032,
  'ф': 0.0026,
  'ъ': 0.0004,
}

let removeChars = '.,():;-!?0123456789" \n'

function createMatrix() {
  let matrix = [... new Array(alphabet.length)].map(() => [])
  for (let y = 0; y < alphabet.length; y++) {
    for (let x = 0; x < alphabet.length; x++) {
      let char = alphabet[(y + x) % alphabet.length]
      matrix[y][x] = char
    }
  }
  return matrix
}

export let vigenereMatrix = createMatrix()

export function normilizeText (text) {
  for (let char of removeChars) {
    text = text.split(char).join('')
  }
  text = text.toLowerCase()
  return text
}

export function denormilizeText (unnormalizedText, text) {
  for (let i in unnormalizedText) {
    let char = unnormalizedText[i]
    if (removeChars.includes(char)) {
      text = text.slice(0, i) + char + text.slice(i)
    }
  }

  text = text.split('.').map(str => capitalize(str)).join('.')
  text = text.split('. ').map(str => capitalize(str)).join('. ')

  return text
}