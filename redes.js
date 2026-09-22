const botones = document.querySelectorAll(".social-main");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const grupoActual = boton.parentElement;

        // Cerramos los demás grupos
        document.querySelectorAll(".social-group").forEach(function(grupo) {

            if (grupo !== grupoActual) {
                grupo.classList.remove("open");
            }

        });

        // Abrimos o cerramos el grupo actual
        grupoActual.classList.toggle("open");

    });

});

