let productos3 = [];
let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
contenedor.innerHTML = "";

function promedio() {
 let a=inputs[0].value;
 let b=inputs[1].value;
 s=(parseInt(a)+parseInt(b))/2 ;
 
 if(s>10)
 {
 //return s ;
Swal.fire({
  title: "aprobaste tu nota es   " +  `${s}`,
  text: "Haz agregado al carrito",
   icon: "success",
  confirmButtonText: "Ok",
});


} else { 
          
  
            
  Swal.fire({
      title: "puntaje bajo!",
      text: "campo obligatorio",
      icon: "error",
      confirmButtonText: "Confirmar"
});

}

} 


let inputs = e.target.children;
productos3.push(inputs[0].value);

 productos3.forEach(producto =>{
 let div = document.createElement("div");
 div.innerHTML = promedio();
 // contenedor.append(div);
  })
    inputs[0].value = "";
    inputs[1].value = "";
    
})
 

let productos = [];
let contenedor2 = document.getElementById("contenedor2");
let formulario2 = document.getElementById("formulario2");
formulario2.addEventListener("submit",(e)=>{
    e.preventDefault();
contenedor2.innerHTML = "";


function select() {
  let a=inputs[0].value;
  let b=inputs[1].value;

    
  const nombre = ["Luis" ,"Francisco" ,"Julio","Javier","Gerald"] 
  
   for (let i=0;i<nombre.length;i++)
    if (b==nombre[i])
   {     return "si corresponde";   }

}

let inputs = e.target.children;
productos.push(inputs[0].value);

 productos.forEach(producto =>{
 let div = document.createElement("div");
 div.innerHTML = select();
 //div.innerHTML = valor();
 contenedor2.append(div);
})
})

*fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <h2>userId: ${item.userId}</h2>
    <p>${item.title}<p>
    <p>${item.body}<p>
    <hr/>
    `;

    contenedor.append(li);
});
});