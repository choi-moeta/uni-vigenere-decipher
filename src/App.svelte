<script>
  import { guessText, ind  } from './vigenere/crack.js'
  import getKeySize from './vigenere/key-size.js'
  import { normilizeText, denormilizeText } from './vigenere/structures.js'
  import { getKey, decipher } from './vigenere/cipher.js'

  export let name;

  let input = ''
  let output = ''
  let key = ''
  $: normInput = normilizeText(input)
  $: denormOutput = denormilizeText(input, output)

  function onInput() {
    let keySize = getKeySize(normInput)
    output = guessText(normInput, keySize)

    key = getKey(normInput, output, keySize)
  }

  function onKeyChange() {
    output = decipher(normInput, key)
  }
  
</script>

<main>
  <div class='top'>
    <textarea
      bind:value={input}
      on:input={onInput}
      placeholder='Input...'
      class='textarea textarea-input'
    ></textarea>
    <textarea
      bind:value={denormOutput}
      placeholder='Output...'
      class='textarea textarea-output'
    ></textarea>
  </div>
  <div class='bottom'>
    <input
      bind:value={key}
      on:input={onKeyChange}
      placegolder='Key...'
      class='input key'
    />
    <button class='button'>Decipher</button>
  </div>
</main>

<style>
  main {
    width: fit-content;
  }

  .top {
    margin-bottom: 2rem;
  }

  .textarea,
  .input {
    padding: 1rem;
    border: 0;
    font-family: inherit;
    border-radius: 4px;
    background: var(--color-fg);
    color: var(--color-text);
  }

  .textarea:focus,
  .input:focus {
    outline-color: var(--color-peach);
  }

  .textarea {
    margin: 0;
    width: 500px;
    height: 700px;
  }

  .textarea:not(:last-child) {
    margin-right: 1rem;
  }

  .bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .input {
    padding: 0.75rem 1rem;
    flex-grow: 1;
    margin-right: 16px;
  }

  .button {
    padding: 0.6rem 1.25rem 0.75rem;
    border: 0;
    font-family: inherit;
    font-size: 1rem;
    border-radius: 4px;
    background: var(--color-peach);
    color: var(--color-bg);
    cursor: pointer;
  }
</style>