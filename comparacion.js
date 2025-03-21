function actualizarComparacion() {
    var modelo1 = document.getElementById('modelo1').value;
    var modelo2 = document.getElementById('modelo2').value;

    var detalles = {
        "moto1": {
            nombre: "Yamaha YZF-R15 V4",
            descripcion: "Motocicleta deportiva ligera con un motor de 155 cc, ideal para pilotos que buscan agilidad y velocidad en la ciudad y en carretera.",
            especificaciones: "Motor: 155 cc, Potencia: 18.6 hp, Velocidad máxima: 136 km/h, Peso: 142 kg",
            imagen: "imagenes/yamaha.png"
        },
        "moto2": {
            nombre: "Kawasaki NINJA® ZX™-10R KRT EDITION",
            descripcion: "Con la última tecnología en rendimiento, esta motocicleta está diseñada para los entusiastas del motociclismo de alto rendimiento y la velocidad en pista.",
            especificaciones: "Motor: 998 cc, Potencia: 200 hp, Velocidad máxima: 299 km/h, Peso: 207 kg",
            imagen: "imagenes/ninja.png"
        },
        "moto3": {
            nombre: "Suzuki GSX-R600 2025",
            descripcion: "La Suzuki GSX-R600 2025 combina tecnología avanzada y estilo deportivo. Ideal para quienes buscan una moto potente y ágil en pista.",
            especificaciones: "Motor: 599 cc, Potencia: 133 hp, Velocidad máxima: 260 km/h, Peso: 188 kg",
            imagen: "imagenes/suzu.png"
        }
    };

    actualizarDetalle("detalle1", detalles[modelo1]);
    actualizarDetalle("detalle2", detalles[modelo2]);
}

function actualizarDetalle(id, datos) {
    var detalle = document.getElementById(id);
    var imagen = detalle.querySelector(".comparacion-img");
    
    // Aplicar efecto de transición
    imagen.style.opacity = 0;
    setTimeout(() => {
        imagen.src = datos.imagen;
        imagen.alt = datos.nombre;
        imagen.style.opacity = 1;
        imagen.classList.add("resaltar");
        setTimeout(() => imagen.classList.remove("resaltar"), 1000);
    }, 300);

    detalle.innerHTML = `
        <img src="${datos.imagen}" class="comparacion-img" alt="${datos.nombre}">
        <h3>${datos.nombre}</h3>
        <p>${datos.descripcion}</p>
        <p><strong>Especificaciones:</strong> ${datos.especificaciones}</p>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let loader = document.getElementById("loader");
        loader.classList.add("hidden");

        // Eliminar el loader completamente después de la transición
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000); // Espera la transición antes de ocultarlo
    }, 3000); // Ocultar después de 3 segundos
});

function agregarAlGaraje(nombre, imagen) {
    let garaje = document.getElementById("garaje");
    let item = document.createElement("div");
    item.classList.add("item-garaje");
    item.innerHTML = `<img src="${imagen}" alt="${nombre}" width="100"> 
                      <button class='eliminar' onclick='eliminarDelGaraje(this)'>X</button>`;
    garaje.appendChild(item);
}

function eliminarDelGaraje(boton) {
    boton.parentElement.remove();
}



// Ejecutar la función al cargar la página
window.onload = actualizarComparacion;
