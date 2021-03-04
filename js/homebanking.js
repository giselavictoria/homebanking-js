//Declaración de variables
let nombreUsuario = "Pepe Loco";
let saldoCuenta = 5000;
let limiteExtraccion = 2500;
let servicioAgua = 350;
let servicioTelefono = 425;
let servicioLuz = 210;
let servicioInternet = 570;
let cuentaAmiga1 = 1234567;
let cuentaAmiga2 = 7654321;
let codigoCuenta = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};

// Funciones
function sumarDinero(dinero) {
  if (dinero > 1) {
    saldoCuenta += dinero;
  } else {
    alert("Debes ingresar un valor positivo y diferente a cero");
  }
}

function restarDinero(dinero) {
  if (dinero > 1) {
    saldoCuenta -= dinero;
  } else {
    alert("Debes ingresar un valor positivo y diferente a cero");
  }
}

function haySaldoDisponible(usuarioPrompt) {
  restarDinero(usuarioPrompt);
  actualizarSaldoEnPantalla();
}

function seleccionDeServicio(servicios) {
  switch (servicios) {
    case 1:
      "Agua";
      break;
    case 2:
      "Luz";
      break;
    case 3:
      "Telefono";
      break;
    case 4:
      "Internet";
      break;
    default:
      "No existe el servicio seleccionado";
      break;
  }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let usuarioPrompt = parseInt(
    prompt("Ingresa el nuevo valor del limite de extraccion")
  );

  if (isNaN(usuarioPrompt)) {
    return;
  } else {
    limiteExtraccion = usuarioPrompt;
    actualizarLimiteEnPantalla();
    alert("Tu nuevo limite de extraccion es: " + limiteExtraccion);
  }
}

function extraerDinero() {
  let usuarioPrompt = parseInt(prompt("Ingresa el monto a extraer"));
  let saldoAnterior = saldoCuenta;
  if (isNaN(usuarioPrompt)) {
    return;
  } else if (usuarioPrompt > limiteExtraccion && usuarioPrompt % 100 == 0) {
    alert(
      "No puedes extraer ese monto. Tu limite de extraccion disponible es: " +
        limiteExtraccion
    );
  } else if (usuarioPrompt > saldoAnterior && usuarioPrompt % 100 == 0) {
    alert(
      "No puedes extraer ese monto. La cantidad de dinero en tu cuenta es: " +
        saldoCuenta
    );
  } else if (usuarioPrompt % 100 != 0) {
    alert("Solo puedes extraer billetes de $100");
  } else if (usuarioPrompt > 0 && usuarioPrompt % 100 == 0) {
    haySaldoDisponible(usuarioPrompt, saldoAnterior, saldoCuenta);
    alert(
      "Has extraido: " +
        usuarioPrompt +
        "\nSaldo anterior: " +
        saldoAnterior +
        "\nSaldo actual: " +
        saldoCuenta
    );
  } else if (usuarioPrompt < 0) {
    alert("Ingresa un valor positivo para extraer");
  }
}

function depositarDinero() {
  let usuarioPrompt = parseInt(prompt("Ingresa el monto a depositar"));
  let saldoAnterior = saldoCuenta;
  if (isNaN(usuarioPrompt)) {
    return;
  } else if (usuarioPrompt > 0) {
    sumarDinero(usuarioPrompt);
    actualizarSaldoEnPantalla();
    alert(
      "Has depositado: " +
        usuarioPrompt +
        "\nSaldo anterior: " +
        saldoAnterior +
        "\nSaldo actual: " +
        saldoCuenta
    );
  } else {
    alert(
      "No has depositado dinero en tu cuenta " +
        "\nSaldo anterior: " +
        saldoAnterior +
        "\nSaldo actual: " +
        saldoCuenta
    );
  }
}

function pagarServicio() {
  let usuarioPrompt = parseInt(
    prompt(
      "Ingresa el numero del servicio a pagar" +
        "\n1- Agua " +
        "\n2- Luz " +
        "\n3- Telefono" +
        "\n4- Internet"
    )
  );
  if (isNaN(usuarioPrompt)) {
    return;
  } else if (saldoCuenta > usuarioPrompt) {
    seleccionDeServicio(usuarioPrompt);
    let saldoAnterior = saldoCuenta;
    if (usuarioPrompt == 1) {
      restarDinero(servicioAgua);
      actualizarSaldoEnPantalla();
      alert(
        "Has pagado el servicio del agua" +
          "\nSaldo anterior: " +
          saldoAnterior +
          "\nDinero descontado: " +
          servicioAgua +
          "\nSaldo actual: " +
          saldoCuenta
      );
    } else if (usuarioPrompt == 2) {
      restarDinero(servicioLuz);
      actualizarSaldoEnPantalla();
      alert(
        "Has pagado el servicio de la luz" +
          "\nSaldo anterior: " +
          saldoAnterior +
          "\nDinero descontado: " +
          servicioLuz +
          "\nSaldo actual: " +
          saldoCuenta
      );
    } else if (usuarioPrompt == 3) {
      restarDinero(servicioTelefono);
      actualizarSaldoEnPantalla();
      alert(
        "Has pagado el servicio del telefono" +
          "\nSaldo anterior: " +
          saldoAnterior +
          "\nDinero descontado: " +
          servicioTelefono +
          "\nSaldo actual: " +
          saldoCuenta
      );
    } else if (usuarioPrompt == 4) {
      restarDinero(servicioInternet);
      actualizarSaldoEnPantalla();
      alert(
        "Has pagado el servicio de internet" +
          "\nSaldo anterior: " +
          saldoAnterior +
          "\nDinero descontado: " +
          servicioInternet +
          "\nSaldo actual: " +
          saldoCuenta
      );
    }
  } else {
    alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
  }
}

function transferirDinero() {
  let usuarioPrompt = parseInt(prompt("Ingresa el monto a transferir"));
  if (isNaN(usuarioPrompt)) {
    return;
  } else if (saldoCuenta > usuarioPrompt) {
    let cuentaPrompt = parseInt(
      prompt(
        "Ingresa el numero de cuenta" +
          "\nTu cuenta amiga 1 es = 1234567" +
          "\nTu cuenta amiga 2 es = 7654321"
      )
    );
    if (isNaN(cuentaPrompt)) {
      return;
    } else if (cuentaPrompt != cuentaAmiga1 && cuentaPrompt != cuentaAmiga2) {
      alert("Solo puedes transferir dinero a cuentas amigas");
    } else if (cuentaPrompt == cuentaAmiga1) {
      haySaldoDisponible(usuarioPrompt);
      alert(
        "Se han transferido: " +
          usuarioPrompt +
          "\nCuenta Destino: " +
          cuentaAmiga1
      );
    } else if (cuentaPrompt == cuentaAmiga2) {
      haySaldoDisponible(usuarioPrompt);
      alert(
        "Se han transferido: " +
          usuarioPrompt +
          "\nCuenta Destino: " +
          cuentaAmiga2
      );
    }
  } else {
    alert("No puede transferirse ese monto");
  }
}

function iniciarSesion() {
  let usuarioPrompt = parseInt(
    prompt("Ingresa tu codigo para acceder - la contraseña es 1234")
  );
  if (isNaN(usuarioPrompt)) {
    console.log("hola");
    saldoCuenta = 0;
    alert("Codigo incorrecto. Se ha retenido el dinero por seguridad");
  } else if (usuarioPrompt == codigoCuenta) {
    alert(
      "Bienvenide " +
        nombreUsuario +
        " ya puedes comenzar a realizar operaciones"
    );
  } else {
    saldoCuenta = 0;
    alert("Codigo incorrecto. Se ha retenido el dinero por seguridad");
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}
