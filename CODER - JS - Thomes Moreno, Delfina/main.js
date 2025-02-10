
// Carrito
let menu;
const carrito = [];

// Turnos
const turnos = [
    {nombre: "Clinica", dia: "Lunes"},
    {nombre: "Oftalmologia", dia: "Martes"},
    {nombre: "Ginecologia", dia: "Miercoles"},
    {nombre: "Clinica", dia: "Jueves"},
    {nombre: "Dentista", dia: "Viernes"}
];

// Funcion de turnos disponibles
function mostrarTurnos() {
    alert("Turnos disponibles:");
    turnos.find(turno => {alert (`${turno.nombre} : ${turno.dia}`);
    });
}

// Funcion para agendar un turno
function agendarTurno() {
    let continuar;
    do {
        let nombreTurno = prompt("Ingrese el nombre del turno que desea agendar:");
        let diaTurno = prompt("Ingrese el día del turno:");
        
        let turnoEnLista = turnos.find(turno => turno.nombre.toLowerCase() === nombreTurno.toLowerCase() && turno.dia.toLowerCase() === diaTurno.toLowerCase());
        
        if (turnoEnLista) {
            carrito.push(turnoEnLista);
            alert("Turno agendado con exito!");
        } else {
            alert("Turno no encontrado");
        }
        
        continuar = confirm("¿Quiere agendar otro turno?");
    } while (continuar);
}

// Funcion de mis turnos
function misTurnos(){
    if (carrito.length === 0) {
        alert("No tienes turnos agendados");
    } else {
        let mensaje = "Estos son tus turnos agendados:\n";
        carrito.find(turno => {
            mensaje += `${turno.nombre} - ${turno.dia}\n`;
        });
        alert(mensaje);
    }
}

// Menu Principal
do {
    menu = parseInt(prompt("Bienvenido al consultorio!\n\n 1.Ver turnos disponibles\n 2.Ver mis turnos\n 3.Agendar un turno\n 4.Salir\n\n Elija una opcion"));
    

    switch (menu) {
        case 1: 
            mostrarTurnos();
            break;
        case 2:
            misTurnos();
            break;
        case 3: 
            agendarTurno();
            break;
        case 4: 
            alert("Hasta pronto!");
            break;
        default:
            alert("Opcion invalida");
            break;
    }
 } while (menu !== 4);

