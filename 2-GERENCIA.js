let elementoInputProjetoUmNome = document.getElementById("inptProjetoNomeUm")
let elementoInputProjetoDoisNome = document.getElementById("inptProjetoNomeDois")


let elementoInputProjetoUmValorPorHora = document.getElementById("inptProjetoValorHoraUm")
let elementoInputProjetoDoisValorPorHora = document.getElementById("inptProjetoValorHoraDois")

let elementoInputProjetoUmQuantHora = document.getElementById("inptProjetoQuantHoraUm")
let elementoInputProjetoDoisQuantHora = document.getElementById("inptProjetoQuantHoraDois")

let elementoInputProjetoUmvalorTotal= document.getElementById("inptProjetoUmValorTotal")
let elementoInputProjetodoisvalorTotal= document.getElementById("inptProjetoDoisValorTotal")

let elementoInputValorGeral = document.getElementById("inptTotalGeral")
let  elementoInputProjetoNomeUm = document.getElementById("inptNomeProjetoUm")

let  elementoInputProjetoNomeDois = document.getElementById("inptNomeProjetoDois")


function Calculo() {



    elementoInputProjetoUmvalorTotal.value = Number(elementoInputProjetoUmValorPorHora.value) * Number(elementoInputProjetoUmQuantHora.value)

    elementoInputProjetodoisvalorTotal.value = Number(elementoInputProjetoDoisValorPorHora.value) * Number(elementoInputProjetoDoisQuantHora.value)

    elementoInputValorGeral.value = Number(elementoInputProjetoUmvalorTotal.value) + Number(elementoInputProjetodoisvalorTotal.value)



    elementoInputProjetoNomeUm.value = elementoInputProjetoUmNome.value
    elementoInputProjetoNomeDois.value = elementoInputProjetoDoisNome.value

}
