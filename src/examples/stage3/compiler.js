/**
 * 根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

    1. 整个文档是一个文档节点 | NodeType: 9
    2. 每个 HTML 元素是元素节点
    3. HTML 元素内的文本是文本节点
    4. 每个 HTML 属性是属性节点
    5. 注释是注释节点 | nodeType: 8
 *
 */

function Node(name, parentNode) {
    this.nodeName = name
    this.childNodes = []
    this.parentNode = parentNode
}

function compiler(tokens) {

    /**
     * 初始化:
     *  1. 创建document根节点
     *  2. 将document的startTag压入栈
     */
    const nodeDocument = new Node('#document', null)
    const tagDocument = {
        type: 'startTag',
        value: 'document',
        node: nodeDocument
    }
    const len = tokens.length
    const stack = [tagDocument]

    let current = 0

    function walk() {
        let token = tokens[current]

        if (token.type === 'startTag') {
            // token入栈
            stack.unshift(token)
            // 生成节点, 父节点为栈中相邻Token的DOM节点
            let node = new Node(token.value, stack[1].node)

            // 将节点引用交给栈顶Token
            token.node = node
            
            // 获取下一个token
            token = tokens[++current]

            while (token.type === 'startTag' || token.type === 'text') {
                node.childNodes.push(walk())
                token = tokens[current]
            }

            // 如果走到这里，说明 token.type === 'endTag'
            const tag = stack.shift()
            if (token.value !== tag.value) {
                throw new Error('标签没闭合')
            }
            current++

            return node
        }

        // 文本token 不入栈
        if (token.type === 'text') {
            current++

            let node = new Node(token.value, stack[1].node)
            
            return node
        }

        throw new TypeError(token.type + ': ' + token.value);
    }

    while (current < len) {
        nodeDocument.childNodes.push(walk());
    }

    return nodeDocument
}

module.exports = compiler