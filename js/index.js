//--------Exer 1 
const buttonMore = document.getElementById('more')
//Outra forma de criar evento
//buttonMore.addEventListener('click',addPost)
buttonMore.onclick = addPost

const carregaPost = async () => {
  let response = await fetch('https://mocki.io/v1/74b4aa20-ad52-45e6-a968-b09af20766da');
  let postagem = await response.json();
  exibirPost(postagem)
}

carregaPost()

function exibirPost(postagem) {
  let comentarios = ''
  for (const comentario of postagem.comentarios) {
    comentarios += `   <p><b>${comentario.nome}</b> ${comentario.texto} </p>`
  }
  const main = document.getElementById('main')
  main.innerHTML = ` <div class="card" id="">
  <div class="card-header">
    <div>
      <img class="avatar" src="/img/avatar-example.png">
      <b>${postagem.nome}</b>
    </div>
    <img src="/img/icons/more-vertical.svg">
  </div>
  <div class="card-img">
    <img src="/img/publication_example.jpg">
  </div>
  <div class="card-body">
    <div class="card-itens">
      <div class="likes">
        <img src="/img/icons/heart.svg" width="24px" onclick="likePost(this)">
        <b>1 likes</b>
      </div>
      <b>Postado no dia: 00/00/0000</b>
    </div>
    <div class="card-comments">
    ${comentarios}
    </div>
  </div>
  <form class="form-comments" action="/comentar" method="post">
    <input type="text" hidden name="postId" value="">
    <input type="text" placeholder="Adicione um comentário..." name="description">
    <button type="submit">Comentar</button>
  </form>
</div>`
}

async function addPost() {

  const main = document.getElementById('main')
  let response = await fetch('https://mocki.io/v1/b08f20b8-0242-4ba3-9ca0-84376a2981b1');
  let postagens = await response.json();

  let postagemHTML = ''
 
  for (const postagem of postagens) {
    let comentarios = ''
    
    for (const comentario of postagem.comentarios) {
      comentarios += `   <p><b>${comentario.nome}</b> ${comentario.texto} </p>`
    }

    postagemHTML += ` <div class="card" id="">
    <div class="card-header">
      <div>
        <img class="avatar" src="/img/avatar-example.png">
        <b>${postagem.nome}</b>
      </div>
      <img src="/img/icons/more-vertical.svg">
    </div>
    <div class="card-img">
      <img src="/img/publication_example.jpg">
    </div>
    <div class="card-body">
      <div class="card-itens">
        <div class="likes">
          <img src="/img/icons/heart.svg" width="24px" onclick="likePost(this)">
          <b>1 likes</b>
        </div>
        <b>Postado no dia: 00/00/0000</b>
      </div>
      <div class="card-comments">
      ${comentarios}
      </div>
    </div>
    <form class="form-comments" action="/comentar" method="post">
      <input type="text" hidden name="postId" value="">
      <input type="text" placeholder="Adicione um comentário..." name="description">
      <button type="submit">Comentar</button>
    </form>
  </div>`
  }

  main.innerHTML = main.innerHTML + postagemHTML

}

//---------Exerc 2

function likePost(e) {
  console.log(e.src)
  console.log(e.src.includes("img/red-heart.png"))
  if (e.src.includes("img/red-heart.png")) {
    e.src = 'img/icons/heart.svg'
    e.nextElementSibling.innerHTML = "1 likes"

  } else {
    e.src = 'img/red-heart.png'
    e.nextElementSibling.innerHTML = "2 likes"
  }
}


//----Exercicio 3
let buscaPesquisa = document.querySelector('.busca > form')
buscaPesquisa.onmouseover = pesquisa
buscaPesquisa.onmouseout = pesquisaoff


function pesquisaoff() {
  buscaPesquisa.style.boxShadow = "none"
}
function pesquisa() {
  console.log(buscaPesquisa.style)
  buscaPesquisa.style.cssText = "box-shadow: 0px 1px 3px black"
}

//----Exercicio 4
buttonMore.onmouseover = pointerOn

function pointerOn() {
  buttonMore.style.cssText = 'cursor: pointer'
}

