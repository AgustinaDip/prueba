document.addEventListener("DOMContentLoaded",() => {

      var boton = document.getElementById ("flecha");
      boton.addEventListener("click",() => {
      var carrusel = document.getElementById("carrusel");
      /*var elementoActivo = carrusel.getElementsByClassName("activo");
      console.log(elementoActivo);*/
      var elementoActivo= carrusel.querySelector(".activo");
      console.log(elementoActivo);
      var elementoSiguiente =carrusel.querySelector(".activo + .oculto");
      if(elementoSiguiente=== null) {
        elementoSiguiente= carrusel.querySelector(".oculto:first-child");
      }
      elementoActivo.classList.remove("activo");
      elementoActivo.classList.add("oculto");
      elementoSiguiente.classList.remove("oculto");
      elementoSiguiente.classList.add("activo");
     
   });
       var btn = document.getElementById("btn");
       btn.addEventListener("click", () => {
     
       var formulario= document.getElementById("formulario");
       var elementoActivo = formulario.querySelector(".activo");
       
       var elementoSiguiente = formulario.querySelector(".activo + .oculto");
       
       elementoActivo.classList.remove("activo");
       elementoActivo.classList.add("oculto");

       elementoSiguiente.classList.remove("oculto");
       elementoSiguiente.classList.add("activo");

       });       
   });


     

     
 
   

  









