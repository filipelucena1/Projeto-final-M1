//Selecionando tags do html
navegacao    = document.getElementById("barraDeNavegacao");
vitrine      = document.getElementById("vitrine");
search       = document.getElementById("search");
searchInput  = document.getElementById("searchInput");
shoppingCart = document.getElementById("shoppingCart");
section      = document.querySelector("section");

//Criando vetor para armazenar possíveis itens do carrinho
let dataCart = [];

//criando variável para somar o valor total
let soma  = 0;

//Criando variável para contar a quantidade de itens no carrinho
let count = 0;

//Criando elementos para mostrar o resultados no carrinho
const resultContainer = document.createElement("div");
const quantSection    = document.createElement("section");
const totalSection    = document.createElement("section");

resultContainer.id = "resultContainer";
quantSection.id    = "quantSection";
totalSection.id    = "totalSection";

resultContainer.appendChild(quantSection);
resultContainer.appendChild(totalSection);

/*-------------------------------------------------------*/

//Criando card para cada item do vetor
function createCard(obj){

    const cardContainer = document.createElement("div");
    const bigfigure     = document.createElement("figure");
    const bigImg        = document.createElement("img");

    cardContainer.classList.add("card");
    bigImg.classList.add("bigImg");

    cardContainer.id =`card${obj.id}`;

    bigImg.src = `${obj.bigImg}`;
    bigImg.alt = `bigImg`;
    bigImg.id  = `bigImg${obj.id}`;


    bigfigure.appendChild(bigImg);
    cardContainer.appendChild(bigfigure);

    return cardContainer;
}

//Percorrendo o vetor
function readDataBase(element){

    
    for (let i = 0; i < data.length; i++){

        let obj = data[i];

        dataCart.push({
            id: obj.id,
            name: obj.nameItem,
            smallImg: obj.smallImg,
            value: obj.value,
            remove: "Remover produto"
        });

        if (element === 0 || element.innerText === "Todos"){
        
            const card = createCard(obj);

            //inserindo card do produto no html
            vitrine.appendChild(card);
        }
        else if (element.innerText === "Básicas" && (element.innerText === obj.tag || obj.tag === "Todos")){
            
            const card = createCard(obj);

            //inserindo card do produto no html
            vitrine.appendChild(card);
        }
        else if (element.innerText === "Casuais" && (element.innerText === obj.tag || obj.tag === "Todos")){
        
            const card = createCard(obj);

            //inserindo card do produto no html
            vitrine.appendChild(card);
        }
        else if (element.innerText === "Frases" && (element.innerText === obj.tag || obj.tag === "Todos")){
        
            const card = createCard(obj);

            //inserindo card do produto no html
            vitrine.appendChild(card);
        }
        else if (element.innerText === "Polos" && (element.innerText === obj.tag || obj.tag === "Todos")){
        
            const card = createCard(obj);

            //inserindo card do produto no html
            vitrine.appendChild(card);
        }
        else if (element.innerText === "Regatas" && (element.innerText === obj.tag || obj.tag === "Todos")){
        
            const card = createCard(obj);

            //inserindo card do produto no html
            vitrine.appendChild(card);
        }
        else if(typeof(element) === "string"){

            if (obj.nameItem.toLowerCase().includes(element.toLowerCase())){

                const card = createCard(obj);
    
                //inserindo card do produto no html
                vitrine.appendChild(card);
            }
        }
    }

}

//CHAMANDO A FUÇÃO PARA CARREGAR OS DADOS NO HTML
readDataBase(0)

//Criando card para produto adicionado ao carrinho
function createCartCard(item){
    
    const cartCardContainer = document.createElement("div");
    const cartCardImg       = document.createElement("figure");
    const smallImg          = document.createElement("img");
    const cartCardText      = document.createElement("main");
    const cartCardTitle     = document.createElement("h4");
    const cartCardPrice     = document.createElement("h5");
    const remover           = document.createElement("p");

    cartCardContainer.classList.add("cartCard");
    cartCardImg.classList.add("cartCardFigure");
    smallImg.classList.add("cartCardImg");
    cartCardText.classList.add("cartCardText");
    cartCardTitle.classList.add("cartCardTitle");
    cartCardPrice.classList.add("cartCardPrice");
    remover.classList.add("remove");

    remover.id = `${-item.id}`;

    smallImg.src            = `${item.smallImg}`;
    cartCardTitle.innerText = `${item.name}`;
    cartCardPrice.innerText = `R$ ${item.value.toFixed(2)}`;
    remover.innerText       = `${item.remove}`;

    cartCardText.appendChild(cartCardTitle);
    cartCardText.appendChild(cartCardPrice);
    cartCardText.appendChild(remover);
    cartCardImg.appendChild(smallImg);
    cartCardContainer.appendChild(cartCardImg);
    cartCardContainer.appendChild(cartCardText);

    return cartCardContainer;
}

function cartAdd(element){
    
    if (element.target.innerText === "Adicionar ao carrinho"){
        
        if (soma === 0){
            
            section.innerHTML = "";
            shoppingCart.appendChild(resultContainer);
            
        }
        soma += data[element.target.id - 1].value;
        count++;
        
        if (soma > 0){
            
            section.style.height    = "360px";
            section.style.overflowY = "auto";

            const cartCard = createCartCard(dataCart[element.target.id - 1]);

            quantSection.innerHTML = `<h4>Quantidade:</h4><p>${count}</p>`;
            totalSection.innerHTML = `<h4>Total:</h4><p>R$ ${soma.toFixed(2)}</p>`;

            section.appendChild(cartCard);
        }
    }
    else{

        filtrarPorTag(element);
    }
}

//INTERCEPTANDO EVENTO DE CLIQUE "ADICIONAR CARRINHO"
vitrine.addEventListener("click", cartAdd);

function cartRemove(element){

    if (element.target.innerText === "Remover produto"){
        
        soma -= data[(element.target.id)*(-1) - 1].value;
        count--;

        if (soma <= 0){

            section.innerHTML = "<h2>Carrinho Vazio</h2><p>Adicione itens</p>";
            shoppingCart.removeChild(resultContainer);
            section.style.height    = "215px";
            section.style.overflowY = "hidden";
        }
        else{

            quantSection.innerHTML = `<h4>Quantidade:</h4><p>${count}<p>`;
            totalSection.innerHTML = `<h4>Total:</h4><p>R$ ${soma.toFixed(2)}<p>`

            element.target.parentNode.parentNode.remove();
        }
    }
}


//INTERCEPTANDO EVENTO DE CLIQUE "REMOVER PRODUTO"
shoppingCart.addEventListener("click", cartRemove);



function cardInsert(element){

    if (element.target.alt === "bigImg"){
        
        //Armazenando posição do produto no vetor data
        let index = element.target.parentNode.parentNode.id.slice(4)-1;

        //recriando cards com descrição dos produtos
        const cardContainer = document.getElementById(`${element.target.parentNode.parentNode.id}`);
        const cardImg       = document.createElement("figure");
        const smallImg           = document.createElement("img");
        const cardText      = document.createElement("main");
        const tag           = document.createElement("h5");
        const title         = document.createElement("h3");
        const description   = document.createElement("p");
        const price         = document.createElement("h5");
        const adicionar     = document.createElement("h5");

        cardContainer.classList.add("card");
        cardImg.classList.add("cardImg");
        cardText.classList.add("cardText");
        tag.classList.add("tag");
        title.classList.add("tile");
        description.classList.add("description");
        price.classList.add("price");
        adicionar.classList.add("add");

        smallImg.src          = `${data[index].smallImg}`;
        tag.innerText         = `${data[index].tag}`;
        title.innerText       = `${data[index].nameItem}`;
        description.innerText = `${data[index].description}`;
        price.innerText       = `R$ ${data[index].value.toFixed(2)}`;
        adicionar.innerText   = `${data[index].addCart}`;

        adicionar.id = `${data[index].id}`;

        cardText.appendChild(tag);
        cardText.appendChild(title);
        cardText.appendChild(description);
        cardText.appendChild(price);
        cardText.appendChild(adicionar);
        cardImg.appendChild(smallImg);
        
        cardContainer.innerHTML = "";

        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(cardText);
    }
}
function cardReload(element){

    if (element.target.id.slice(0,4) === "card"){

        let index = element.target.id.slice(4)-1;
        
        element.target.innerHTML = `<figure><img class="bigImg" src=${data[index].bigImg} alt="bigImg"></figure>`;
    }
}

//INTERCEPTANDO EVENTOS DE ENTRADA E SAÍDA DO MOUSE NOS CARDS:

vitrine.addEventListener("mouseover", cardInsert);

vitrine.addEventListener("mouseout", cardReload);


/*------------------------------------------------------------------*/


function filtrarPorTag(element){

    if (element.target.innerText === "Todos"){

        vitrine.innerHTML = "";
        
        readDataBase(element.target);
    }
    else if (element.target.innerText === "Básicas"){

        vitrine.innerHTML = "";

        readDataBase(element.target);
    }
    else if (element.target.innerText === "Casuais"){

        vitrine.innerHTML = "";

        readDataBase(element.target);
    }
    else if (element.target.innerText === "Frases"){

        vitrine.innerHTML = "";

        readDataBase(element.target);
    }
    else if (element.target.innerText === "Polos"){

        vitrine.innerHTML = "";

        readDataBase(element.target);
    }
    else if (element.target.innerText === "Regatas"){

        vitrine.innerHTML = "";

        readDataBase(element.target);
    }
}

//INTERCEPTANDO EVENTO DE CLICK NAS TAGS
navegacao.addEventListener("click", filtrarPorTag);


function pesquisar(element){

    if (element.target.innerText === "Pesquisar" && searchInput.value.trim() !== ""){

        vitrine.innerHTML = "";

        readDataBase(searchInput.value);
    }
}


//INTERCEPTANDO EVENTO DE CLIQUE NO BOTÃO DE PESQUISA
search.addEventListener("click", pesquisar);