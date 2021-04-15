const fs = require('fs')
const path = require('path')

module.exports = function (pathString, extension, callback) {
    let data = new Array()
    const formattedExtension = '.' + extension

    fs.readdir(pathString, function (err, list) {
        if (err) { return callback(err) }

        list.forEach(filename => {
            if(path.extname(filename) === formattedExtension) {
                data.push(filename)
            }
        })

        callback(null, data)
    })
}