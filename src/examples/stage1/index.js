'use strict';
/**
 * Stage 1
 * 完成了最简单的分词功能
 */
const fs = require('fs')
const tokenizer = require('./tokenizer')

const html = fs.readFileSync('./src/examples/stage1/index.html', 'utf8')
console.log(html)

const tokens = tokenizer(html)
console.log(tokens)