const fila = document.querySelector('.contenedor-carousel');
function alerta(){


const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += 1200;
});
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft = 0;
});


}
document.getElementById("busqres").addEventListener("click", mostrar_menu);
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral')
}

//

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}


//Login


document.getElementById("perf").addEventListener("click", login_entrada);
document.getElementById("cerrar_boton").addEventListener("click", cerrar_entrada);

login_this = document.getElementById("login");

function login_entrada(){

    login_this.style.display = "block";
    
}

function  cerrar_entrada(){

    login_this.style.display = "none";
    
}


document.getElementById("perfres").addEventListener("click", login_entrada_Res);

login_this_Res = document.getElementById("login");


function login_entrada_Res(){

    login_this.style.display = "block";
    
}

document.getElementById("busqres").addEventListener("click", busq_menu_Res);

busq_menu_Res = document.getElementById("busq");

function busq_menu_Res(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
    
    }
    

document.getElementById("ctn-icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);


//Buscador de contenido

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

function mostrar_buscador(){

bars_search.style.top = "80px";
cover_ctn_search.style.display = "block";
inputSearch.focus();
}

 function ocultar_buscador(){
     
    bars_search.style.top = "-10px"
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

 }






 document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

 function buscador_interno(){
 
 
     filter = inputSearch.value.toUpperCase();
     li = box_search.getElementsByTagName("li");
 
     for (i = 0; i < li.length; i++){
 
         a = li[i].getElementsByTagName("a")[0];
         textValue = a.textContent || a.innerText;
 
         if(textValue.toUpperCase().indexOf(filter) > -1){
 
             li[i].style.display = "";
             box_search.style.display = "block";
 
             if (inputSearch.value === ""){
                 box_search.style.display = "none";
             }
 
         }else{
             li[i].style.display = "none";
         }
 
     }
 
 }


 document.getElementById("mostrarInformacionPrueba").addEventListener("click", mostrar_informacion);

 function mostrar_informacion(){

    mostrarInformacion.style.display = "flex";
    mostrarInformacion.style.opacity = "1";
    sekiroInformacion.style.height = "1600px";
    
}

function myFunctionInfo() {
    document.getElementById("mostrarInformacionPrueba").style.opacity = "1";
  }