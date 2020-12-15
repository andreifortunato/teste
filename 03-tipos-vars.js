const num = 10.10
const str = `Meu numero é: ${num}` // '' ou ""
console.log(str)

const obj = {
    nome: 'Andrei Fortunato',
    cidade:{
        nome:'Rio de Janeiro',
        uf: 'RJ'
    }
}
const key ='name'
console.log(obj[key])

const arr = [1,2,3]
console.log(arr[0])

//functions:first-class citizens
const toInt = parseInt

console.log(toInt('10')+1)
