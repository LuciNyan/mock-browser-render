function tokenizer(input) {
    let current = 0

    const tokens = []
    const len = input.length
    // 空格
    const WHITESPACE = /\s/
    // 内容
    const CONTENT = /[A-Za-z0-9.,?\[\]\{\}]/

    while (current < len) {
        // 当前字符
        let char

        char = input[current]

        // 遇到左括号
        if (char === '<') {

            let value = ''
            let type = 'startTag'
            char = input[++current]
            // 通过判断下一个是不是 / 来判断 是否是闭合标签
            if (char === '/') {
                type = 'endTag'
                char = input[++current]
            }

            while (char !== '>') {
                value += char
                char = input[++current]
            }

            tokens.push({
              type,
              value,
            });

            current++;
            continue;
        }

        // 空白
        if (WHITESPACE.test(char)) {
          current++;
          continue;
        }

        // 文本
        if (CONTENT.test(char)) {

            let value = ''
            while (CONTENT.test(char)) {
                value += char
                char = input[++current]
            }

            tokens.push({
                type: 'text',
                value,
            });
  
            continue;
        }

        current++
    }

    return tokens
}

module.exports = tokenizer