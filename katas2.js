// Execicio 1 Completo //


function add(a, b){
    
    let resultado = a + b
    return resultado
}
console.log(add(2, 4));


// Exercicio 2 Completo //


function multiply(a, b){
    let resultado = 0
    for(let i = 1; i <= a; i = add(i, 1)){
        resultado = add(b, resultado)
    }
    return resultado
}
console.log(multiply(6, 8));


// Execicio 3 Completo //


function power(x, n){

    let resultado = 1
    for(let i = 1; i <= n; i = add(i, 1)){
        resultado = multiply(x, resultado)
    }
    return resultado
}
console.log(power(2, 8));


// Exercicio 4 Completo //


function factorial(a){

    let n = a
    let resultado = n
    for(let i = 1; i < a; i = add(i, 1)){
        resultado = resultado = multiply(resultado, i)
    }
    return resultado
}
console.log(factorial(4))