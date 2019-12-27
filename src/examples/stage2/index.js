'use strict';
/**
 * Stage 2
 * 完成了最简单的Tokens 解析
 * 属性节点 和 注释节点未涉及到
 */
const fs = require('fs')
const tokenizer = require('./tokenizer')
const compiler = require('./compiler')
const { dd } = require('../../utils.js')

const html = fs.readFileSync('./src/examples/stage2/index.html', 'utf8')
console.log(html)

const tokens = tokenizer(html)
const DOMTree = compiler(tokens)
dd(DOMTree)