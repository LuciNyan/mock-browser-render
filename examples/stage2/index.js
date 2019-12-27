const fs = require('fs')
const tokenizer = require('./tokenizer')

const html = fs.readFileSync('./examples/stage2/index.html', 'utf8')
console.log(html)

const tokens = tokenizer(html)
console.log(tokens)