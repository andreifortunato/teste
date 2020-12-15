
const fs = require('fs')

console.log('11111')
const readFile = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, content) => {
    if(!err){
        resolve(content.toString())
    } else {
        reject(err)
    }
})
})
}
readFile('05-hof.js')
.then(content => {
console.log(content)
})
// Assincronismo
const run = async() => {
    const content = await readFile('05-hof.js')
    return 111
}

console.log('22222')