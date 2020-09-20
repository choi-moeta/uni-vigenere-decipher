import { kasiski } from './kasiski'
import gcd from 'gcd'

let getGCDs = (obj) => {
  let result = [];
  for (let value of Object.values(obj)) {
    if (value.distances.length > 1) {
      result.push(gcd(...value.distances))
    }
  }
  return result
}

let mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]

let keySize = (text) => {
  let kasiskiObject = kasiski(text)
  let gcds = getGCDs(kasiskiObject)
  return mostFrequent(gcds)
}

export default keySize