let contacto = 2;

function mandar_mensaje() {
  var mensaje = document.getElementById('chat').value;
  var cuerpo = document.getElementById('mensajes');
  cuerpo.innerHTML += `
    <div class="left">
      <p>${mensaje}</p>
    `;
  const probabilidad = Math.random() < 0.5;
  if (probabilidad === true) {
    const respuestas = [
      "Mensaje recibido",
      "Ok!",
      "Estoy ocupado, ahora no puedo contestar",
      "No entiendo lo que quieres decir",
      "Te llamo en un rato",
      "Gracias por tu mensaje",
    ];
    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    cuerpo.innerHTML += `
      <div class="right">
        <p>${respuesta}</p>
      </div>
    `;
  }
  document.getElementById('chat').value = '';
}

function anadir_user() {
  var contactos = document.getElementById('primer_user');
  var nuevo_contacto = contacto;
  var boton_contacto = `
    <div class="user">
      <button id="btn_contacto_${nuevo_contacto}" class="btn_contacto" onclick="seleccionar_contacto(${nuevo_contacto})">
        <h3>Contacto ${nuevo_contacto}</h3>
      </button>
    </div>
  `;
  contactos.innerHTML += boton_contacto;
  contacto++;
}

function seleccionar_contacto(contacto) {
  var nombre = `Contacto ${contacto}`;
  document.getElementById('titulo').innerHTML = nombre;
  document.getElementById('mensajes').innerHTML = '';
}
