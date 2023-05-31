function adivinar(){
    const num = Math.floor(Math.random()*100);
    var intent = 1;
    var valingres = parseInt(prompt("Adivina el numero de la maquina // 0 al 100 //"));
    do{
        if(valingres < num){

            valingres = parseInt(prompt("¡¡¡ Cerca !!! Intenta ingresando un valor más Alto"));
        }
        
        if (valingres > num) {
            valingres = parseInt(prompt("¡¡¡ Cerca !!! Intenta ingresando un valor más Bajo"));
        }
        intent ++;
    }
    while (valingres == num) {
        alert ("¡¡¡Bien Hecho!!! Haz acertado al numero misterioso con: " +( intent +1) + " numero de intentos");
    }
}