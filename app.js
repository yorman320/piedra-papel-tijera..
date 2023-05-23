//Capturamos elementos de DOM (En este caso los botones)


let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano-usuaria')
let manoComputador = document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuaria p')
let puntajeComputador = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario = ""
let eleccionComputador = ""

let contadorUsuario = 0
let contadorComputador = 0

Swal.fire(
    'Hola juguemos piedra papel o tijera!',
    'Atrevete!',
    'success'
)

const eleccionComputadora = () => {
    let opcionAlAzar = Math.floor(Math.random() * 3)
    if (opcionAlAzar == 0) {
        manoComputador.src = "./assets/piedra_computadora.png"
        eleccionComputador = "piedra"
    }
    else if (opcionAlAzar == 1) {
        manoComputador.src = "./assets/papel_computadora.png"
        eleccionComputador = "papel"
    }
    else {
        manoComputador.src = "./assets/tijera_computadora.png"
        eleccionComputador = "tijera"
    }
};

const resultado = () => {

    if (eleccionUsuario == "piedra") {
        if (eleccionComputador == "piedra") {
            labelResultado.textContent="Empate ¡¡";
        }
        if (eleccionComputador == "papel") {
            labelResultado.textContent="Pierde ¡¡"
            contadorComputador++;
            puntajeComputador.textContent= contadorComputador;
            ganador(contadorUsuario, contadorComputador)
        }
        if (eleccionComputador == "tijera") {
            labelResultado.textContent="Ganasteeeeee¡¡"
            contadorUsuario++;
            puntajeUsuario.textContent= contadorUsuario;
            ganador(contadorUsuario, contadorComputador)

        }
    }
    if (eleccionUsuario == "papel") {
        if (eleccionComputador == "papel") {
            labelResultado.textContent="Empate ¡¡";
        }
        if (eleccionComputador == "tijera") {
            labelResultado.textContent="Pierde ¡¡"
            contadorComputador++;
            puntajeComputador.textContent= contadorComputador;
            ganador(contadorUsuario, contadorComputador)
        }
        if (eleccionComputador == "piedra") {
            labelResultado.textContent="Ganasteeeeee¡¡"
            contadorUsuario++;
            puntajeUsuario.textContent= contadorUsuario;
            ganador(contadorUsuario, contadorComputador)

        }
    }
    if (eleccionUsuario == "tijera") {
        if (eleccionComputador == "tijera") {
            labelResultado.textContent="Empate ¡¡";
        }
        if (eleccionComputador == "piedra") {
            labelResultado.textContent="Pierde ¡¡"
            contadorComputador++;
            puntajeComputador.textContent= contadorComputador;
            ganador(contadorUsuario, contadorComputador)
        }
        if (eleccionComputador == "papel") {
            labelResultado.textContent="Ganasteeeeee¡¡"
            contadorUsuario++;
            puntajeUsuario.textContent= contadorUsuario;
            ganador(contadorUsuario, contadorComputador)

        }
    }
}

function ganador(user, comp){
    if(user ==3){
        Swal.fire("GANASTE!!")
        contadorUsuario = 0;
        puntajeUsuario.textContent= contadorUsuario
        contadorComputador = 0;
        puntajeComputador.textContent= contadorComputador
    }
    if(comp ==3){
        Swal.fire("LOSER :(")
        contadorUsuario = 0;
        puntajeUsuario.textContent= contadorUsuario
        contadorComputador = 0;
        puntajeComputador.textContent= contadorComputador
    }
}

botonPiedra.onclick = () => {
    manoUsuario.src = "./assets/piedra_user.png";
    manoComputador.src = "./assets/piedra_computadora.png";
    labelResultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "piedra";
        manoUsuario.src = "./assets/piedra_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonPapel.onclick = () => {
    manoUsuario.src = "./assets/papel_user.png";
    manoComputador.src = "./assets/papel_computadora.png";
    labelResultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "papel";
        manoUsuario.src = "./assets/papel_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonTijera.onclick = () => {
    manoUsuario.src = "./assets/tijera_user.png";
    manoComputador.src = "./assets/tijera_computadora.png";
    labelResultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "tijera";
        manoUsuario.src = "./assets/tijera_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};