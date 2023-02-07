 // CAMPEONATO
const nomCampeonato = document.querySelector('#nombreCampeonato');


 // EQUIPOS
const nomEquipo = document.querySelector('#nombreEquipo');
const poblacionEquipo = document.querySelector('#poblacionEquipo');


 // JUGADORES
const rutJugador = document.querySelector('#rutJugador');
const nacimientoJugador = document.querySelector('#nacimientoJugador');
const capitan = document.querySelector('#capitan');

// VARIABLES
let campeonato;
let equipo;

// FUNCIONES
function agregarCampeonato() {
    campeonato = new Campeonato(nomCampeonato.value);
    document.querySelector("#submitCampeonato").setAttribute("disabled", "");   
    console.log(campeonato);
}

function agregarEquipo() {
    equipo = new Equipo(nomEquipo.value, poblacionEquipo.value);
    campeonato.setEquipo(equipo);
    console.log(campeonato);
}

function agregarJugador() {

    if(campeonato.existeJugadorCampeonato(rutJugador.value)){
        document.querySelector('#error').textContent="Jugador existe"
    } else {
        let jugador = new Jugador(rutJugador.value, nacimientoJugador.valueAsNumber)

        if(!equipo.setJugadores(jugador)){
            document.querySelector("#error").textContent="Jugador no Cumple Edad"
        } else {
            if(capitan.checked){
                equipo.limpiarCapitan();
            }
            jugador.setCapitan(capitan.checked);
            mostrarJugadores();
        }
    }
    console.log(campeonato);
}