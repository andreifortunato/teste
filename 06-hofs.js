const testMap = (value, index, arr) => {
    console.log(value, index, arr)
    return value * 3
}
const retMap = nums.map(testMap)
    console.log('Retorno map', retMap)
}
const testReduce = (previousValue, currentValue, index, arr) => {
    console.log(previousValue, currentValue, index, arr)
    return previousValue + currentValue
}
const retReduce =nums.reduce(testReduce,11)
console.log('Retorno reduce', retReduce)
const soma = nums
.map(a => a*2)
.reduce((a,b) => a + b)

console.log(soma)