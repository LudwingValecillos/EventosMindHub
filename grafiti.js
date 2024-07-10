// Obtener los elementos del DOM
const input = document.getElementById("miInput");
const btn = document.getElementById("btn");
const divRosa = document.getElementById("divRosa");
const color = document.getElementById("color");
const form = document.getElementById("form");

// Añadir un evento al botón
btn.addEventListener("click", (e) => {
    

    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario
    

    const newDiv = document.createElement("div");
    newDiv.id = "newDiv";
    newDiv.className = "m-4 p-4 w-[300px] h-[300px] rounded-3xl";
    newDiv.style.backgroundColor = color.value;

    const texts = document.createElement("p");

    texts.innerText = input.value;
    const seleccion = document.querySelector('input[name="selection"]:checked').value;
    texts.className = seleccion;

    const button = document.createElement("button");
    button.innerText = "X";
    button.className = "bg-red-500 m-4 p-4 rounded-3xl relative top-0 left-[165px]";
    
    button.addEventListener("click", () => {
        divRosa.removeChild(newDiv);
    });

    newDiv.appendChild(button);

    newDiv.appendChild(texts);

    divRosa.appendChild(newDiv);
    
    form.reset();
    
});