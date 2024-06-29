var bajaUsuarioForm = document.getElementById("bajaUsuarioForm"); //Obtiene el elemento form y lo guarda en una variable

      function Validar() { //Crea la funcion que va a validar los campos
        // Obteniene los valores ingresados en los campos del formulario
        var tipoDocumento = document.getElementById("tipoDocumento").value;
        var numeroDocumento = document.getElementById("numeroDocumento").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var anioDivision = document.getElementById("anioDivision").value;

        // Valida que el número de documento sea numérico
        if (isNaN(numeroDocumento)) {
          alert("El número de documento debe ser numérico."); // Da un aviso al usuario si el número de documento no es numérico
          return; //Evita que el formulario se envíe si el campo numeroDocumento no tiene un valor numérico
        }

        //Valida que los campos no se encuentren vacios
        if (
          tipoDocumento === "" ||
          numeroDocumento === "" ||
          nombre === "" ||
          apellido === "" ||
          anioDivision === ""
        ) {
          alert("Por favor, complete todos los campos."); // Da un aviso al usuario si hay algun campo vacio
          return; //Evita que el formulario se envíe si hay campos vacios
        }

        alert("Formulario enviado"); //Da aviso al usuario de que el formulario se envio correctamente

        document.getElementById("bajaUsuarioForm").reset(); //Una vez enviado el formulario, este borra los datos ingresados y restablece el formulario a su estado inicial.
      	}

    bajaUsuarioForm.addEventListener("submit", Validar); //le agrega a la variable bajaUsuarioForm un evento que hace que al hacer submit se ejecute la funcion validar