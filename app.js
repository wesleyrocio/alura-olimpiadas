// Seleciona o elemento pai onde os resultados serão inseridos
const resultadosContainer = document.getElementById('resultados-pesquisa');
const buscaInput = document.getElementById('busca-atleta')
const buscaBotao = document.getElementById('busca-botao')

// Função para criar o HTML de uma atleta
function criarCardAtleta(atleta) {
     const card = criarElemento('div','item-resultado','')
    
     const titulo = document.createElement('h2'); 
     const linkTitulo = criarElemento('a','',atleta.título,atleta.link,'_blank');
     titulo.appendChild(linkTitulo);  
    
     const descricao= criarElemento('p','descricao-meta',atleta.descrição,'');  
     const linkMaisInfo = criarElemento('a','','Mais Informações',atleta.link,'_blank'); 
    
     card.appendChild(titulo);
     card.appendChild(descricao);
     card.appendChild(linkMaisInfo); 
    
   
      
    return card;
}

function criarElemento(tag, classe, texto,href,target) {
    const elemento = document.createElement(tag);
    if (classe) elemento.classList.add(classe);
    if (texto)   elemento.textContent = texto;
    if(href)     elemento.href=href;
    if(target)   elemento.target=target;
    return elemento;
}

function filtrarAtletas() {
    const textoBusca = buscaInput.value.toLowerCase();
    if(!textoBusca){return;}    
    const atletasFiltrados = atletas.filter(atleta =>   atleta.título.toLowerCase().includes(textoBusca)
                                                   ||   atleta.descrição.toLowerCase().includes(textoBusca)
                                                   ||   atleta.tags.toLowerCase().includes(textoBusca));  
    resultadosContainer.innerHTML = ''; // Limpa os resultados anteriores
    if (atletasFiltrados.length === 0) {
      resultadosContainer.innerHTML = '<p>Nenhum atleta encontrado.</p>';
      return;
    }
    atletasFiltrados.forEach(atleta => {
      const cardAtleta = criarCardAtleta(atleta);
      resultadosContainer.appendChild(cardAtleta);    
    
    });
  }

buscaBotao.addEventListener('click', filtrarAtletas);




// Itera sobre o array de atletas e cria os cards
// atletas.forEach(atleta => {
//     const cardAtleta = criarCardAtleta(atleta);
//     resultadosContainer.appendChild(cardAtleta);
//   });

// const resultado = document.getElementById("resultado")

// let html ="";
// for(let atleta of atletas){    

//     for(let propriedade in atleta){
//         if(propriedade=="título"){
//           html+= `<div class="item-resultado"> <h2>${atleta[propriedade]}</h2>`;
//         }
//         if(propriedade=='descrição'){
//             html+=`<p class="descricao-meta">${atleta[propriedade]}</p>`;
//         }
//         if(propriedade=='link'){
//             html+=`<a href="${atleta[propriedade]}" target="_blank">Mais Informações</a></div>`
//         }

//     }

// }
// resultado.innerHTML=html;




       // console.log(propriedade+": "+atleta[propriedade]);
/*
<div class="item-resultado">
<h2><a href="#" target="_blank">Rayssa Leal</a></h2>
<p class="descricao-meta">Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou
   o mundo com sua habilidade e carisma. Aos poucos anos, tornou-se um ícone do esporte, 
   inspirando jovens skatistas e atletas de diversas modalidades.</p>
<a href="https://pt.wikipedia.org/wiki/Rayssa_Leal" target="_blank">Mais Informações</a>
</div>*/
