const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var WhatsappMensaje;

function enviar () {
    WhatsappMensaje = `https://api.whatsapp.com/send?phone=543496578813&text=Nombre:%20${nombre.value}%20correo:%20${correo.value}%20mensaje:%20${mensaje.value}`
    btnEnviar.href = WhatsappMensaje;
}