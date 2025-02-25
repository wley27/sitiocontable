const detallesServicios = {
    contabilidad: {
        titulo: "Contabilidad General",
        imagen: "imagenes/detalle-contabilidad.png",
        servicios: [
            { titulo: "Elaboración de Estados Financieros", detalles: [
                "Balance General.",
                "Estado de Resultados.",
                "Estado de Flujo de Efectivo.",
                "Estado de Cambios en el Patrimonio."
            ]},
            { titulo: "Conciliaciones bancarias", detalles: [
                "Revisión y análisis de movimientos bancarios.",
                "Identificación y corrección de discrepancias."
            ]},
            { titulo: "Asesoría contable y financiera", detalles: [
                "Optimización de costos y rentabilidad.",
                "Implementación de mejoras en procesos contables.",
                "Análisis financiero para la toma de decisiones."
            ]},
            { titulo: "Contabilidad electrónica y software contable", detalles: [
                "Implementación y gestión de sistemas contables digitales.",
                "Obtención de firmas electrónicas personas naturales y jurídicas.",
                "Capacitación en software de contabilidad.",
                "Automatización de reportes financieros."
            ]}
        ]
    },
    asesoria: {
        titulo: "Asesorías Contables",
        imagen: "imagenes/detalle-asesoria.png",
        servicios: [
            "Asesoría financiera y tributaria.",
            "Optimización de costos y rentabilidad.",
            "Implementación de procesos contables eficientes."
        ]
    },
    declaraciones: {
        titulo: "Cumplimiento fiscal y tributario",
        imagen: "imagenes/detalle-impuestos.png",
        servicios: [
        "Declaraciones mensuales y anuales de impuestos.",
	    "Devolución de IVA tercera Edad, discapacidad, retenciones."

        ]
    },
    planificacion: {
        titulo: "Constitucion del SAS",
        imagen: "imagenes/detalle-planificacion.png",
        servicios: [
            { titulo: "Constituimos tu SAS en solo 7 días", detalles: [
                "Te entregamos tu Sociedad por Acciones Simplificada (SAS) completamente constituida, lista para abrir una cuenta bancaria y comenzar a facturar de inmediato. 🚀"
        ]}
        ]
    }
};

function mostrarDetalle(servicio) {
    const detalleSeccion = document.getElementById("detalle-servicio");
    const tituloServicio = document.getElementById("titulo-servicio");
    const imagenServicio = document.getElementById("imagen-servicio");
    const listaServicio = document.getElementById("lista-servicio");

    if (!detallesServicios[servicio]) return; // Evita errores si el servicio no existe

    tituloServicio.innerText = detallesServicios[servicio].titulo;
    imagenServicio.src = detallesServicios[servicio].imagen;
    imagenServicio.alt = `Imagen de ${detallesServicios[servicio].titulo}`;

    // Limpiar lista antes de agregar nuevos elementos
    listaServicio.innerHTML = "";

    // Verificamos si es un servicio con subtítulos o una lista simple
    if (typeof detallesServicios[servicio].servicios[0] === "object") {
        // Formato con títulos en negrita
        detallesServicios[servicio].servicios.forEach(seccion => {
            let liTitulo = document.createElement("li");
            liTitulo.innerHTML = `<strong>${seccion.titulo}</strong>`;
            listaServicio.appendChild(liTitulo);

            seccion.detalles.forEach(item => {
                let liDetalle = document.createElement("li");
                liDetalle.style.marginLeft = "20px";
                liDetalle.textContent = item;
                listaServicio.appendChild(liDetalle);
            });
        });
    } else {
        // Formato con lista simple
        detallesServicios[servicio].servicios.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            listaServicio.appendChild(li);
        });
    }

    detalleSeccion.style.display = "flex"; // Mostrar el modal
}

function cerrarDetalle() {
    document.getElementById("detalle-servicio").style.display = "none";
}
// Asegurar que el modal esté oculto al inicio
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("detalle-servicio").style.display = "none";})
