const operacion1 = document.getElementById("Operacion1")
const operador = document.getElementById("Operador")
const operacion2 = document.getElementById("Operacion2")
const opcalcular = document.getElementById("boton")
const resultado = document.getElementById("solucion")


opcalcular.addEventListener('click',calcular)

function calcular(){

    const operacion = operador.value
    const oper1 = parseFloat(operacion1.value)
    const oper2 = parseFloat(operacion2.value)

    if (operacion == "*" || operacion == "-" || operacion == "/" || operacion =="+" && !isNaN(oper1) && !isNaN(oper2)) {
        let result;
        switch (operacion){
            case "+":
                result = oper1 + oper2
                break;
            case"-":
                result = oper1 - oper2
                break;
            case "/":
                result = oper1 / oper2
                break;
            case "*":
                result= oper1 * oper2
                break;
            
        }
        resultado.innerText = "= " + result;
    }
    else{
        resultado.innerText = "No es posible realizar la operación o no has introducido los datos correctamente"
        resultado.style = "color:red"
    }
}