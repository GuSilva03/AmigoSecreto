//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = ["Leticia", "Marina", "Zig", "Guilherme", "Fernando", "Marcos", "Ailton", "Pedro", "Roberto", "Matheus", "Tati", "Mauricio", "Auri", "Klud"];

function adicionarAmigo(){
    let NewAmigo = document.getElementById("amigo").value.trim(); 
    if (NewAmigo == ''){
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(NewAmigo);
        AtualizaLista();
        document.getElementById("amigo").value = '';
    } 
}
function AtualizaLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let itemLista = document.createElement("li");

        itemLista.textContent = amigo;

        listaAmigos.appendChild(itemLista);
    });
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Adicione amigos.")
    } else {
        let sort = Math.floor(Math.random() * amigos.length)
        let amigoSort = amigos[sort]
        document.getElementById("resultado").textContent = `O amigo sorteado foi: ${amigoSort}`;
    }
}
