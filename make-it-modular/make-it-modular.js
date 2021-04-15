const mymodule = require('./mymodule.js')

const pathString = process.argv[2]
const extension = process.argv[3].toString()

mymodule(pathString, extension, function callback(err, data) {
    if (err) { return console.log(err) }

    data.forEach(element => {
        console.log(element)
    })
})