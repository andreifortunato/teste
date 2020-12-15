// High order function

const soma =(a,b) => a + b
const mult =(a,b) => a + b
const calc =(op,a,b) => op(a + b)
const selectOp = op => {
    // primeira opção para definir operadores 
    const ops = {
        '+': soma,
        '*': mult,
    }
    return ops[op]
}
    // segunda opção para definir operadores
if(op === '+'){
    return soma
 }
if(op === '*'){
    return mult
 }
}
const c = calc(soma, 10, 5)
console.log(c)

const d = calc(selectOp('+'), 10, 5)
console.log(d)

// vetores

const nums =[1,2,3,4]

const testForEach = (value, index, arr) => {
    console.log(value, index, arr)
}


