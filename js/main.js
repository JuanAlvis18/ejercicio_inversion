function inversion(){
    //capturar los elementos de html que se van a utilizar

    const cNombres = document.getElementById("Nombres").value;
    const cEmail = document.getElementById("Email").value;
    const cMonto = parseInt(document.getElementById("Monto").value);
    const cTiempo = document.getElementById("Tiempo").value;

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const mostrarNombre = document.getElementById("mostrar-nombre");
    const mostrarEmail = document.getElementById("mostrar-email");
    const mostrarTiempo = document.getElementById("mostrar-tiempo");
    const mostrarPorcentaje = document.getElementById("mostrar-porcentaje");
    const mostrarGanancia = document.getElementById("mostrar-ganancia");
    const mostrarTotal = document.getElementById("mostrar-total");
    let ganancia = 0;
    let total = 0;

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    mostrarNombre.innerText = cNombres;
    mostrarEmail.innerText = cEmail;

    switch(cTiempo){
        case "1":
            mostrarTiempo.innerText = "12 MESES";
            mostrarPorcentaje.innerText = "0.8 %";
            ganancia = ((cMonto * 0.8) / 100) * 12;
            total = cMonto + ganancia;
            mostrarGanancia.innerText = ganancia;
            mostrarTotal.innerText = total;
        break;

        case "2":
            mostrarTiempo.innerText = "24 MESES";
            mostrarPorcentaje.innerText = "1.3 %";
            ganancia = ((cMonto * 1.3) / 100) * 24;
            total = cMonto + ganancia;
            mostrarGanancia.innerText = ganancia;
            mostrarTotal.innerText = total;
        break;

        case "3":
            mostrarTiempo.innerText = "36 MESES";
            mostrarPorcentaje.innerText = "1.7 %";
            ganancia = ((cMonto * 1.7) / 100) * 36;
            total = cMonto + ganancia;
            mostrarGanancia.innerText = ganancia;
            mostrarTotal.innerText = total;
        break;

        default:
            mostrarTiempo.innerText = "0 MESES";
            mostrarPorcentaje.innerText = "0 %";
            ganancia = ((cMonto * 0) / 100) * 0;
            total = cMonto + ganancia;
            mostrarGanancia.innerText = ganancia;
            mostrarTotal.innerText = total;
        break;
    }

}