const fs = require('fs')

text = fs.readFileSync(process.argv[2], 'utf8')

console.log(text.split('\n').length - 1)