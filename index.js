//1
function color() {
  const div = document.querySelector(".color");
  const color = Math.floor(Math.random() * 16777215).toString(16);
  div.style.backgroundColor = "#" + color;
  console.log(color);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", color);

//2

// Selecciona el div y el campo de entrada por su id
const miInput = document.getElementById("miInput");
const miDiv = document.getElementById("miDiv");
const cont = document.getElementById("container");

miInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {

    miDiv.textContent = miInput.value;

    const boton = document.createElement("button");

    boton.textContent = "Reset";
    boton.className = "btns bg-yellow-500";
    cont.appendChild(boton);

    boton.addEventListener("click", () => {
      miDiv.textContent = " ";
      miInput.value = " ";
      cont.removeChild(boton);
    });
  }
});

3

// const formulario = document.getElementById("form");
const formulario = document.forms[0];
const estatura = (document.getElementById("estatura"));
const peso = document.getElementById("peso");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
// const resultado = parseFloat(peso.value) / (parseFloat(estatura.value/100) * parseFloat(estatura.value/100));
  formulario.innerHTML = `
    <div>
        <h1 class="text-3xl">Resultado</h1>
        <p>Su indice de masa corporal es:</p>
        <p class="bg-white text-center">${(parseFloat(peso.value) / (parseFloat(estatura.value/100) * parseFloat(estatura.value/100))).toFixed(2)}</p>
    </div>
        `
})

const form = document.getElementById("form2");
const dolares = document.getElementById("dolares");
const resultadoo = document.getElementById("resultadoo")

form.addEventListener("submit", (e) => {
    e.preventDefault();
  dolares.value = local.value/500
  
})

// formulario.addEventListener("submit", inputs.value[0] * (inputs.value[1]**2))
