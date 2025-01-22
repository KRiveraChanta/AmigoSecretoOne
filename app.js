// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listAmigos = []
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    document.getElementById("amigo").value = "";
    if (nombre != ""){
        listAmigos.push(nombre)
        mostrarLista()
    }else{
        alert("Está vacío")
    }
    
}

function mostrarLista(){
    let ul = document.getElementById('listaAmigos')
    ul.innerHTML = "";
    listAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    })
}

function sortearAmigo(){
    if ( listAmigos === 0){
        alert("Ingrese nombres validos")
    }else{
        let aleatorio = Math.floor(Math.random() * listAmigos.length);
        let amigoAleatorio = listAmigos[aleatorio];
        listAmigos = []
        let ul = document.getElementById("listaAmigos");
        ul.innerHTML = "";
        let ulResutado = document.getElementById("resultado");
        ulResutado.innerHTML=amigoAleatorio;
    }
    
}