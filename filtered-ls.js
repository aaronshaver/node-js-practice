const fs = require('fs')
const path = require('path')

const pathString = process.argv[2]
const extension = '.' + process.argv[3].toString()

fs.readdir(pathString, function callback(err, list) {
    if (err) return console.error(err)
    list.forEach(filename => {
        if(path.extname(filename) === extension) {
            console.log(filename)
        }
    })
})