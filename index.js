import Converter from './src/converter.js'

const inputElement = document.querySelector('#Input');
const convertButton = document.querySelector('#ConvertButton')
const outputElement = document.querySelector('#Output')
const snackinessElement = document.querySelector('#Snackiness')

convertButton.onclick = () => {
    const amount = (snackinessElement.value / 100)
    const convertedText = Converter.convert(inputElement.value, amount)
    display(convertedText)
}

function display(text) {
    while (outputElement.lastElementChild) {
        outputElement.removeChild(outputElement.lastElementChild)
    }
    
    text += " " //adding a space to the text so that it can get matched. There is probably a more elegant way to do it, but this is way faster.
    const expression = /(.{20,}?|.+)(\s+?)/g //The regular expression will attempt to break up the text in blocks of around 20 characters.
    const textbits = [...text.matchAll(expression)].map(match => match[1])
    const elements = textbits.map((textbit) => {
        const element = document.createElement('span')
        element.textContent = textbit
        outputElement.appendChild(element)
        outputElement.appendChild(document.createTextNode(' ')) //appending space so the resulting text can be copypasted
    })
}