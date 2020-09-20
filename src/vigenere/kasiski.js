export let kasiski = (text, gram = 3) => {
  // let result = []
  let result = {}

  for (let i = 0; i < text.length - gram - 1; i++) {
    let trigram = text.slice(i, i + gram)
    let tailText = text.slice(i + gram)
    let pos = tailText.indexOf(trigram)

    if (pos != -1) {
      if (result[trigram]) {
        let lastPos = result[trigram].pos[result[trigram].pos.length - 1]
        result[trigram].distances.push(pos + i + gram - lastPos)
        result[trigram].pos.push(pos + i + gram)
      } else {
        result[trigram] = {
          pos: [i, pos + i + gram],
          distances: [pos + gram],
        }
      }
    }
  }

  return result
}