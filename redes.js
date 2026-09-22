const botones = document.querySelectorAll(".social-main");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const grupo = boton.parentElement;

        grupo.classList.toggle("open");

    });

});