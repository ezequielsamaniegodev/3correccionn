function Celular (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const celular1 = new Celular ("iPhone 13", 1800)
const celular2 = new Celular ("iPhone 14 Pro Max", 2400)
const celular3 = new Celular ("iPhone 14", 2200)
const celular4 = new Celular ("Samsung Galaxy S23", 1800)
const celular5 = new Celular ("Samsung Galaxy S23 Ultra", 2000)
const celular6 = new Celular ("Samsung Galaxy Flip", 1750)
const celular7 = new Celular ("Xiaomi 12T Pro", 1400)
const celular8 = new Celular ("Xiaomi S11 pro", 1300)
const celular9 = new Celular ("Google Pixel 8", 1100)

const celulares = [celular1,celular2,celular3,celular4,celular5,celular6,celular7,celular8,celular9]


const botonBuscar = document.getElementById("botonDeBusqueda");
botonBuscar.addEventListener("click", () => {buscarCelulares()});


function buscarCelulares(){
    const body = document.querySelector('body');
    const input = document.getElementById('campoVacio').value;
    const palabraClave = input.toLowerCase().trim();
    const finalidad = celulares.filter((x)=>x.nombre.toLowerCase().includes(palabraClave));

    if(finalidad.length>0){
    const contenedor = document.createElement('div');
    contenedor.classList.add('contenedorDeCards');

    finalidad.forEach((x)=>{
        const card = document.createElement('div');
        card.classList.add('card');

        const nombre = document.createElement('h2');
        nombre.textContent = x.nombre;
        nombre.classList.add('nombre');
        card.appendChild(nombre);

        const precio = document.createElement('h3');
        precio.textContent = x.precio;
        precio.classList.add('precio');
        card.appendChild(precio);

        const botonDeCompra = document.createElement('button')
        botonDeCompra.textContent = 'Comprar';
        botonDeCompra.classList.add('botonDeCompra')
        card.appendChild(botonDeCompra);
        botonDeCompra.addEventListener("click", guardar)

        contenedor.appendChild(card);
    })

    body.appendChild(contenedor)

    }else{
        alert("No contamos con ese dispositivo en la tienda");
    }
}

function guardar(){
    localStorage.setItem("celularComprado", JSON.stringify(celulares));
    alert('Compraste tu nuevo celular');
}
