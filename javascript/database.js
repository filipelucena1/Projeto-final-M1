// Banco de dados dos produtos

const data = [
    {
      id: 1,
      bigImg: "./img/3-lupas-278x398.png",
      smallImg: "./img/3-lupas-transparente-200x140.png",
      nameItem: "Três Lupas",
      description:
        "Camiseta 100% algodão na cor azul claro e estampada com três lupas.",
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Casuais"
    },
    {
      id: 2,
      bigImg: "./img/3-lupas-vinho-278x398.png",
      smallImg: "./img/3-lupas-vinho-transparente-200x140.png",
      nameItem: "Três Lupas",
      description:
        "Camiseta 100% algodão na cor vinho e estampada com três lupas.",
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Casuais"
    },
    {
      id: 3,
      bigImg: "./img/87-atletic-dlupas-278x398.png",
      smallImg: "./img/87-atletic-dlupas-transparente-200x140.png",
      nameItem: "87 Athletic",
      description:
        "Camiseta 100% algodão na cor cinza, com malha leve e estampa voltada para esportes.",
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Casuais"
    },
    {
      id: 4,
      bigImg: "./img/as-palavras-ensinam-amarelo-278x398.png",
      smallImg: "./img/as-palavras-ensinam-amarelo-transparente-200x140.png",
      nameItem: "Palavras Ensinam",
      description:
        `A linha "D'LUPAS na Verdade" é composta por camisetas 100% algodão e traz algumas verdades como frases em suas estampas. Ditado popular.`,
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Frases"
    },
    {
      id: 5,
      bigImg: "./img/as-palavras-ensinam-azul-claro-278x398.png",
      smallImg: "./img/as-palavras-ensinam-azul-claro-transparente-200x140.png",
      nameItem: "Palavras Ensinam",
      description:
        `A linha "D'LUPAS na Verdade" é composta por camisetas 100% algodão e traz algumas verdades como frases em suas estampas. Ditado popular.`,
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Frases"
    },
    {
      id: 6,
      bigImg: "./img/basica-azul-278x398.png",
      smallImg: "./img/basica-azul-transparente-200x140.png",
      nameItem: "Básica Azul",
      description:
        "A linha básica D'LUPAS apresenta camisetas 100% algodão em um estilo casual perfeito para o dia-a-dia.",
      value: 49.90,
      addCart: "Adicionar ao carrinho",
      tag: "Básicas"
    },
    {
      id: 7,
      bigImg: "./img/basica-regata-azul-278x398.png",
      smallImg: "./img/basica-regata-azul-transparente-200x140.png",
      nameItem: "Básica Azul",
      description:
        "A linha básica D'LUPAS apresenta camisetas 100% algodão em um estilo casual perfeito para o dia-a-dia.",
      value: 44.90,
      addCart: "Adicionar ao carrinho",
      tag: "Regatas"
    },
    {
      id: 8,
      bigImg: "./img/basicas-creme-278x398.png",
      smallImg: "./img/basicas-creme-transparente-200x140.png",
      nameItem: "Básicas Creme",
      description:
        "A linha básica D'LUPAS apresenta camisetas 100% algodão em um estilo casual perfeito para o dia-a-dia.",
      value: 49.90,
      addCart: "Adicionar ao carrinho",
      tag: "Básicas"
    },
    {
      id: 9,
      bigImg: "./img/basicas-pretas-278x398.png",
      smallImg: "./img/basicas-pretas-transparente-200x140.png",
      nameItem: "Básicas Pretas",
      description:
        "A linha básica D'LUPAS apresenta camisetas 100% algodão em um estilo casual perfeito para o dia-a-dia.",
      value: 49.90,
      addCart: "Adicionar ao carrinho",
      tag: "Básicas"
    },
    {
      id: 10,
      bigImg: "./img/dlps-verde-278x398.png",
      smallImg: "./img/dlps-verde-transparente-200x140.png",
      nameItem: "DLPS",
      description:
        "Camisetas 100% algodão na cor verde, estampada com as consoantes em um design especialmente preparado.",
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Casuais"
    },
    {
      id: 11,
      bigImg: "./img/guitarra-azul-escuro-278x398.png",
      smallImg: "./img/guitarra-azul-escuro-transparente-200x140.png",
      nameItem: "Poder do Amor",
      description:
        `A linha "D'LUPAS na Verdade" é composta por camisetas 100% algodão e traz algumas verdades como frases em suas estampas. Frase do guitarrista Jimmy Hendrix.`,
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Frases"
    },
    {
      id: 12,
      bigImg: "./img/lion-azul-claro-278x398.png",
      smallImg: "./img/lion-azul-claro-transparente-200x140.png",
      nameItem: "Leão",
      description:
        "Camiseta 100% algodão na cor azul escuro e estampa personalizada com um leão.",
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Casuais"
    },
    {
      id: 13,
      bigImg: "./img/lion-regata-preta-278x398.png",
      smallImg: "./img/lion-regata-preta-transparente-200x140.png",
      nameItem: "Leão",
      description:
        "Regata 100% algodão na cor preto e estampa personalizada com um leão.",
      value: 49.90,
      addCart: "Adicionar ao carrinho",
      tag: "Regatas"
    },
    {
      id: 14,
      bigImg: "./img/long-preta-frente-278x398.png",
      smallImg: "./img/long-preta-frente-e-costas-transparente-200x140.png",
      nameItem: "Long T-Shirt",
      description:
        "A linha long contém camisetas 100% algodão com um design moderno.",
      value: 64.90,
      addCart: "Adicionar ao carrinho",
      tag: "Casuais"
    },
    {
      id: 15,
      bigImg: "./img/movement-regata-azul-278x398.png",
      smallImg: "./img/movement-regata-azul-transparente-200x140.png",
      nameItem: "Movimento",
      description:
        'Regatas 100% algodão na cor azul, com malha leve e estampada com a palavra "Movimento" em diversas línguas.',
      value: 49.90,
      addCart: "Adicionar ao carrinho",
      tag: "Regatas"
    },
    {
      id: 16,
      bigImg: "./img/polo-azul-escuro-278x398.png",
      smallImg: "./img/polo-azul-escuro-transparente-200x140.png",
      nameItem: "Polo Azul Escuro",
      description:
        "Linha de Camisas 100% algodão em um estilo mais refinado, acrescentando um tom de seriedade ao look.",
      value: 69.90,
      addCart: "Adicionar ao carrinho",
      tag: "Polos"
    },
    {
      id: 17,
      bigImg: "./img/polo-preta-278x398.png",
      smallImg: "./img/polo-preta-transparente-200x140.png",
      nameItem: "Polo Preta",
      description:
        "Linha de Camisas 100% algodão em um estilo mais refinado, acrescentando um tom de seriedade ao look.",
      value: 69.90,
      addCart: "Adicionar ao carrinho",
      tag: "Polos"
    },
    {
      id: 18,
      bigImg: "./img/polo-vermelha-278x398.png",
      smallImg: "./img/polo-vermelha-transparente-200x140.png",
      nameItem: "Polo Vermelha",
      description:
        "Linha de Camisas 100% algodão em um estilo mais refinado, acrescentando um tom de seriedade ao look.",
      value: 69.90,
      addCart: "Adicionar ao carrinho",
      tag: "Polos"
    },
    {
      id: 19,
      bigImg: "./img/superacao-rosa-278x398.png",
      smallImg: "./img/superacao-rosa-transparente-200x140.png",
      nameItem: "SuperAção",
      description:
        `A linha "D'LUPAS na Verdade" é composta por camisetas 100% algodão e traz algumas verdades como frases em suas estampas.`,
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Frases"
    },
    {
      id: 20,
      bigImg: "./img/transformado-azul-278x398.png",
      smallImg: "./img/transformado-azul-transparente-200x140.png",
      nameItem: "Transformado / Amado",
      description:
      `A linha "D'LUPAS na Verdade" é composta por camisetas 100% algodão e traz algumas verdades como frases em suas estampas.`,
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Frases"
    },
    {
      id: 21,
      bigImg: "./img/transformado-verde-278x398.png",
      smallImg: "./img/transformado-verde-transparente-200x140.png",
      nameItem: "Transformado / Amado",
      description:
      `A linha "D'LUPAS na Verdade" é composta por camisetas 100% algodão e traz algumas verdades como frases em suas estampas.`,
      value: 58.90,
      addCart: "Adicionar ao carrinho",
      tag: "Frases"
    },
    {
      id: 22,
      bigImg: "./img/embalagem-278x398.png",
      smallImg: "./img/embalagem-transparente-200x140.png",
      nameItem: "Embalagem para Presente",
      description:
        "Embalagem de presente personalizada e cuidadozamente fabricada para um momento especial.",
      value: 5,
      addCart: "Adicionar ao carrinho",
      tag: "Todos"
    },
  ];