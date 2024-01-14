let listaCarros = [
    {
    "nome": "cgzinger",
    "img": "img/czinger.jpg",
    "descrição": "o carro cgzinger é um sedã...",
    },
    {
        "nome": "drako",
        "img": "img/drako.png",
        "descrição": "o carro cgzinger é um sedã...",
    },
    {
    "nome": "ferrari",
    "img": "img/ferrari.jpg",
    "descrição": "o carro cgzinger é um sedã...",
    },

    {
        "nome": "pagani",
        "img": "img/pagani.jpg",
        "descrição": "o carro cgzinger é um sedã...",
    }

]

listaCarros.map((carro, posicao) =>{
    let cardCarro = document.getElementById("cards");
cardCarro.innerHTML += `
        <div class="col-md-4">
            <div class="card m6">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${carro.nome}</h5>
                  <a href="#" class="btn btn-secondary" onclick = "zoomImg('${posicao}')"><i class ="bi bi-zoom-in"> </i> </a>
                </div>
              </div>
        </div>
`

})

function zoomImg(posicao){
let carroSelecionado = listaCarros[posicao];
document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descrição;
document.getElementById("imgModal").src = carroSelecionado.img;

new bootstrap.Modal("#zoomImg").show();

}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<bi bi-brightness-high-fill"></i>`


    }

    
}