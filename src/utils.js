function dd(node, level = 0) {
    console.log('  '.repeat(level) + node.nodeName)
    node.childNodes.forEach(node => {
        dd(node, level + 1)
    })
}

module.exports = { dd }