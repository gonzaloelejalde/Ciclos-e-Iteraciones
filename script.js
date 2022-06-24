let numero1, peso, operacion, peso_final, nombre

do {
    numero1 = parseFloat(prompt("Ingrese su peso"))
    operacion =parseInt(prompt("Ingrese 1 para Marte y 2 para Jupiter"))
    peso = parseInt(numero1)
    gravedad_en_la_tierra = 9.8
    gravedad_en_marte = 3.7
    gravedad_en_jupiter = 24.8

    if(operacion == 1){peso_final = peso * gravedad_en_marte / gravedad_en_la_tierra; alert("Tu peso en Marte es de " + peso_final + " Kgs") }
    else if(operacion == 2){peso_final = peso * gravedad_en_jupiter / gravedad_en_la_tierra; alert("Tu peso en Jupiter es de " + peso_final + " Kgs")}
    else if(operacion >= 3) {alert ("Ingrese un número válido, reinicie y pruebe de nuevo")}
    else {peso_final = isNaN; nombre = "Error"}
    peso_final = parseInt(peso_final);

    }while(isNaN(numero1) || isNaN(operacion) || operacion >= 3)



console.log(peso_final)
