const elegir = prompt("Poner el número 1 para ver los número par/impar o el número 2 para activar la bomba");
let eleccion = Number(elegir);
if (eleccion === 1 || eleccion === 2);
    if(eleccion === 1) { 
        const numeros = prompt("Ingresar par, para ver los números pares o impar, para ver los números impares.");
        
        if (numeros === "par" || numeros === "impar") {
            if (numeros.toLowerCase() === "par") {
                let i = 0;
                while ( i <= 100 ) {
                    if ( i % 2 === 0) {
                        console.log(`El número ${i} es par.`);
                    }
                    i++;
                }
            }
            else if (numeros.toLowerCase() === "impar") {
                let i = 0;
                while ( i <= 100 ) {
                    if ( i % 2 !== 0) {
                        console.log(`El número ${i} es impar.`);
                    }
                    i++;
                }
            }
        }else {
            alert("La instruccion ingresada es incorrecta.");
            console.log("La instruccion ingresada es incorrecta.");
        }
    }
    else if (eleccion === 2) {
        const tiempo = prompt("¿En cuanto tiempo quieres que explote la bomba?")
        let segundos = Number(tiempo);

        if (!isNaN(segundos) && segundos != null && segundos != "") {
            for (let i = segundos; i >= 0; i--) {
                if ( i === segundos) {
                    console.log(`La bomba explotará en ${i}`)
                }
                else if ( i <= segundos && i !== 0) {
                    console.log(`La bomba explotará en ${i}`)
                }
                else if ( i === 0) {
                    console.log("BOOM")
                }
            }
        }
        else {
            alert("La instruccion ingresada es incorrecta.");
            console.log("La instruccion ingresada es incorrecta.");
        }
    }