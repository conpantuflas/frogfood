
let parrafo = document.getElementById("parrafo")
let cambioTitular = document.getElementById("cambioTitular") //boton
let cambioParrafo = document.getElementById("cambioParrafo") //boton

cambioTitular.addEventListener("click",
    function cambioTitulo(){
        let tiposDeComidaArray = ["desayuno","almuerzo","merienda","cena"]
        let titular = document.getElementById("titular")
        switch(titular.innerHTML){
        case'': titular.innerHTML = tiposDeComidaArray[0]
        break;
        case tiposDeComidaArray[0]: titular.innerHTML = tiposDeComidaArray[1]
        break;
        case tiposDeComidaArray[1]: titular.innerHTML = tiposDeComidaArray[2]
        break;
        case tiposDeComidaArray[2]: titular.innerHTML = tiposDeComidaArray[3]
        break;
        }
    }
)


