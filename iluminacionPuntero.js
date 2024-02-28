// const iluminacion = document.querySelector('.iluminacion');

// iluminacion.addEventListener("mousemove",(evento) => {
    
//     const x = evento.clientX + window.scrollX;
//     const y = evento.clientY + window.scrollY;
//     iluminacion.style.background = `radial-gradient(circle at ${x}px ${y}px, lime 0%, transparent 100px)`;

// })

const iluminacion = document.querySelector('.iluminacion');

function actualizarFondo(evento) {
    const x = evento.clientX + window.scrollX;
    const y = evento.clientY + window.scrollY;
    iluminacion.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(50, 205, 50) 0%, transparent 50px)`;
    evento.stopPropagation(); 
}
iluminacion.addEventListener("mousemove", actualizarFondo);

iluminacion.addEventListener("scroll", () => {
    actualizarFondo({
        clientX: evento.clientX,
        clientY: evento.clientY
    });
});

const enlace= document.querySelector('.enlace');

document.addEventListener("click", () => {
    // Desactivar iluminación temporalmente durante el clic
    iluminacion.style.display = 'none';

    // Reactivar la iluminación después de un breve período
    setTimeout(() => {
        iluminacion.style.display = 'block';
    }, 1000);

});