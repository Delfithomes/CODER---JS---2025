// Turnos
const turnos = [
    {nombre: "Clinica", dia: "Lunes"},
    {nombre: "Oftalmologia", dia: "Martes"},
    {nombre: "Ginecologia", dia: "Miercoles"},
    {nombre: "Clinica", dia: "Jueves"},
    {nombre: "Dentista", dia: "Viernes"}
];


// carrito
const carrito = () => JSON.parse(localStorage.getItem("misTurnos")) || [];

const guardarMisTurnos = (turnos) => localStorage.setItem("misTurnos", JSON.stringify(turnos));

// Mensaje
const mostrarMensaje = (texto = "info") => {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
};

// Mostrar turnos disponibles
const mostrarTurnosDisponibles = () => {
    const lista = document.getElementById("listaTurnos");
    lista.innerHTML = "";  

    turnos.forEach(turno => {
        const li = document.createElement("li");
        li.className = "turno";
        li.innerHTML = `
            ${turno.nombre} - ${turno.dia}
            <button class="agendar-btn" data-nombre="${turno.nombre}" data-dia="${turno.dia}">Agendar</button>
        `;
        lista.appendChild(li);
    });

    // Boton AGENDAR
    document.querySelectorAll(".agendar-btn").forEach(boton => {
        boton.addEventListener("click", () => {
            agendarTurno(boton.dataset.nombre, boton.dataset.dia);
        });
    });
};

// Mis turnos
const mostrarMisTurnos = () => {
    const lista = document.getElementById("misTurnos");
    lista.innerHTML = "";

    const misTurnos = carrito();

    if (misTurnos.length === 0) {
        lista.innerHTML = "<li>No tienes turnos agendados.</li>";
        return;
    }

    misTurnos.forEach((turno, index) => {
        const li = document.createElement("li");
        li.className = "turno";
        li.innerHTML = `
            ${turno.nombre} - ${turno.dia}
            <button class="cancelar-btn" data-index="${index}">Cancelar</button>
        `;
        lista.appendChild(li);
    });
    
// Boton CANCELAR
    document.querySelectorAll(".cancelar-btn").forEach(boton => {
        boton.addEventListener("click", () => {
            cancelarTurno(boton.dataset.index);
        });
    });
};

// Agendar un turno
const agendarTurno = (nombre, dia) => {
    const misTurnos = carrito();

    if (misTurnos.some(turno => turno.nombre === nombre && turno.dia === dia)) {
        mostrarMensaje(`Error: Ya tienes agendado el turno` );
        return;
    }

    misTurnos.push({ nombre, dia });
    guardarMisTurnos(misTurnos);

    mostrarMensaje(`Turno agendado con éxito!`);
    mostrarMisTurnos();
};

// Cancelar turno
const cancelarTurno = (index) => {
    const misTurnos = carrito();
    const turnoCancelado = misTurnos.splice(index, 1)[0];  
    guardarMisTurnos(misTurnos);

    mostrarMensaje(`El turno ha sido cancelado.`);
    mostrarMisTurnos();
};


// Iniciar
document.addEventListener("DOMContentLoaded", () => {
    mostrarTurnosDisponibles();
    mostrarMisTurnos();
});


////////*************************PRIMER ENTREGA*******************************************/////////////
// Carrito
//let menu;
//const carrito = [];

// Turnos
//const turnos = [
  //  {nombre: "Clinica", dia: "Lunes"},
//     {nombre: "Oftalmologia", dia: "Martes"},
//     {nombre: "Ginecologia", dia: "Miercoles"},
//     {nombre: "Clinica", dia: "Jueves"},
//     {nombre: "Dentista", dia: "Viernes"}
// ];

// // Funcion de turnos disponibles
// function mostrarTurnos() {
//     alert("Turnos disponibles:");
//     turnos.find(turno => {alert (`${turno.nombre} : ${turno.dia}`);
//     });
// }

// // Funcion para agendar un turno
// function agendarTurno() {
//     let continuar;
//     do {
//         let nombreTurno = prompt("Ingrese el nombre del turno que desea agendar:");
//         let diaTurno = prompt("Ingrese el día del turno:");
        
//         let turnoEnLista = turnos.find(turno => turno.nombre.toLowerCase() === nombreTurno.toLowerCase() && turno.dia.toLowerCase() === diaTurno.toLowerCase());
        
//         if (turnoEnLista) {
//             carrito.push(turnoEnLista);
//             alert("Turno agendado con exito!");
//         } else {
//             alert("Turno no encontrado");
//         }
        
//         continuar = confirm("¿Quiere agendar otro turno?");
//     } while (continuar);
// }

// // Funcion de mis turnos
// function misTurnos(){
//     if (carrito.length === 0) {
//         alert("No tienes turnos agendados");
//     } else {
//         let mensaje = "Estos son tus turnos agendados:\n";
//         carrito.find(turno => {
//             mensaje += `${turno.nombre} - ${turno.dia}\n`;
//         });
//         alert(mensaje);
//     }
// }

// // Menu Principal
// do {
//     menu = parseInt(prompt("Bienvenido al consultorio!\n\n 1.Ver turnos disponibles\n 2.Ver mis turnos\n 3.Agendar un turno\n 4.Salir\n\n Elija una opcion"));
    

//     switch (menu) {
//         case 1: 
//             mostrarTurnos();
//             break;
//         case 2:
//             misTurnos();
//             break;
//         case 3: 
//             agendarTurno();
//             break;
//         case 4: 
//             alert("Hasta pronto!");
//             break;
//         default:
//             alert("Opcion invalida");
//             break;
//     }
//  } while (menu !== 4);

