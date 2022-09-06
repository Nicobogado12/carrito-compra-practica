const productos = [
    {nombre: "harina", precio: 50 },
    {nombre: "azucar", precio: 100 },
    {nombre: "yerba", precio: 150 },
    {nombre: "fideos", precio: 200 },
    {nombre: "arroz", precio: 250 },
];


let carrito = [];


let seleccion = prompt("Bienvenido, ¿Que desea comprar?");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola, desea comprar algo? responda si o no")  
};

if(seleccion == "si"){
    alert ("a continuacion nuestra lista disponible de productos")
    let productosaAll = productos.map((producto) => `${producto.nombre} ${producto.precio} $ `);
    alert(productosaAll.join(" - "));
}else if(seleccion == "no"){
    alert("Gracias por venir, vuelva pronto !!")
};


while(seleccion != "no"){
    let producto = prompt("agrega el producto a tu carrito");
    let precio = 0

    if(producto == "harina" ||producto =="azucar" || producto =="yerba"|| producto =="fideos" || producto =="arroz"){
        switch(productos){
        case "harina":
            precio = 50;
            break;
        case "azucar":
            precio = 100;
            break;
        case "yerba":
            precio = 150;
            break;
        case "fideos":
            precio = 200;
            break;
        case "arroz":
            precio = 250;
            break;
        default:
            break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar??"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos disponible ese producto")
    }
    
    seleccion = prompt("¿Desea seguir comprando?")
    while(seleccion == "no"){
        alert("gracias por la compra, vuelva pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

//acc acumulador 
// el representa cada uno de los elementos de array carrito
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)