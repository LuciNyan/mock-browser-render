'use strict';
/**
 * Stage 3
 * 实现注释
 */
const fs = require('fs')
const tokenizer = require('./tokenizer')
const compiler = require('./compiler')
const { dd } = require('../../utils.js')

const html = fs.readFileSync('./src/examples/stage3/index.html', 'utf8')
console.log(html)

const tokens = tokenizer(html)
const DOMTree = compiler(tokens)
dd(DOMTree)