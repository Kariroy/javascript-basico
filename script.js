



const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result =document.querySelector("#result");

function calcular(event) {
    console.log({event})
    event.preventDefault();
    result.innerHTML = Number(input1.value) + Number(input2.value)
    input1.value = "";
    input2.value = "";
}

form.addEventListener("submit",calcular)