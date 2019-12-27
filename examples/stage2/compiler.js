/**
 * 根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

    1. 整个文档是一个文档节点 | NodeType: 9
    2. 每个 HTML 元素是元素节点
    3. HTML 元素内的文本是文本节点
    4. 每个 HTML 属性是属性节点
    5. 注释是注释节点
 *
 */

function Node(name, parentNode) {
    this.nodeName = name
    this.childNodes = null
    this.parentNode = parentNode
}

function compiler(tokens) {
    const tagDocument = {
        type: 'startTag',
        value: '#document'
    }
    const stack = [tagDocument]

}

module.exports = compiler