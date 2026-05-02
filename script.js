// =============================================
// B.1. BASE DE DADOS (JSON)
// =============================================
const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15 Pro",
      preco: 7999.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
      descricao: "O iPhone 15 Pro traz chip A17 Pro, câmera de 48MP, design em titânio e Dynamic Island.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24",
      preco: 5499.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
      descricao: "Galaxy S24 com processador Snapdragon 8 Gen 3, tela AMOLED 120Hz e Galaxy AI integrado.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Notebook Dell XPS 15",
      preco: 12499.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
      descricao: "Dell XPS 15 com Intel Core i7 de 13ª geração, 16GB RAM, SSD 512GB e tela OLED 4K.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "MacBook Air M2",
      preco: 10999.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1611186871525-a5b5a6fa5bef?w=400&h=300&fit=crop",
      descricao: "MacBook Air com chip Apple M2, design ultraslim, bateria de até 18h e tela Liquid Retina.",
      emEstoque: false
    },
    {
      id: 5,
      nome: "PlayStation 5",
      preco: 3999.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop",
      descricao: "Console PS5 com SSD ultrarrápido, ray tracing em tempo real e controle DualSense háptico.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Xbox Series X",
      preco: 3799.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
      descricao: "Xbox Series X com 12 teraflops de desempenho, 4K 120fps e acesso ao Xbox Game Pass.",
      emEstoque: false
    },
    {
      id: 7,
      nome: "Fone Sony WH-1000XM5",
      preco: 1999.90,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
      descricao: "Fone over-ear com cancelamento de ruído líder do setor, 30h de bateria e áudio Hi-Res.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Teclado Mecânico Keychron K2",
      preco: 699.90,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop",
      descricao: "Teclado mecânico compacto 75%, compatível com Mac e Windows, switches Gateron opcionais.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Monitor LG UltraWide 34\"",
      preco: 3299.00,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      descricao: "Monitor UltraWide 34 polegadas, resolução UWQHD 3440x1440, HDR10 e taxa de 144Hz.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Motorola Edge 40 Pro",
      preco: 3299.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      descricao: "Edge 40 Pro com Snapdragon 8 Gen 2, câmera de 50MP, carregamento 125W e 5G.",
      emEstoque: false
    }
  ]
};

// =============================================
// B.2. SELEÇÃO DE ELEMENTOS (DOM)
// =============================================
const productList    = document.getElementById("product-list");    // getElementById
const productDetails = document.getElementById("product-details"); // getElementById
const searchInput    = document.querySelector("#search");           // querySelector
const categorySelect = document.querySelector("#category");         // querySelector
const btnRender      = document.querySelector("#btnRender");        // querySelector

// =============================================
// B.3. FUNÇÕES OBRIGATÓRIAS
// =============================================

/**
 * Formata o preço em Real Brasileiro.
 * @param {number} preco
 * @returns {string} ex.: "R$ 1.999,90"
 */
function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/**
 * Cria e retorna o elemento card de um produto.
 * Usa: createElement, setAttribute, classList.add, style, appendChild
 * @param {Object} produto
 * @returns {HTMLElement}
 */
function createProductCard(produto) {
  // Elemento raiz do card
  const card = document.createElement("div");
  card.setAttribute("data-id", produto.id);          // setAttribute
  card.setAttribute("data-categoria", produto.categoria);
  card.classList.add("card");                         // classList.add
  card.style.animationDelay = `${(produto.id - 1) * 0.05}s`; // style

  // Imagem
  const img = document.createElement("img");
  img.setAttribute("src", produto.imagem);
  img.setAttribute("alt", produto.nome);
  img.setAttribute("loading", "lazy");
  card.appendChild(img);                             // appendChild

  // Body do card
  const body = document.createElement("div");
  body.classList.add("card-body");

  // Badge categoria
  const catBadge = document.createElement("span");
  catBadge.classList.add("card-category");
  catBadge.textContent = produto.categoria;
  body.appendChild(catBadge);

  // Título
  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = produto.nome;
  body.appendChild(title);

  // Preço
  const price = document.createElement("p");
  price.classList.add("card-price");
  price.textContent = formatPrice(produto.preco);
  body.appendChild(price);

  // Badge estoque
  const stockBadge = document.createElement("span");
  stockBadge.classList.add("stock-badge");
  if (produto.emEstoque) {
    stockBadge.classList.add("in-stock");
    stockBadge.textContent = "✔ Em estoque";
  } else {
    stockBadge.classList.add("out-stock");
    stockBadge.textContent = "✖ Fora de estoque";
  }
  body.appendChild(stockBadge);

  // Área de botões
  const actions = document.createElement("div");
  actions.classList.add("card-actions");

  // Botão "Ver detalhes"
  const btnDetails = document.createElement("button");
  btnDetails.classList.add("btn-details");
  btnDetails.textContent = "Ver detalhes";
  btnDetails.addEventListener("click", () => showProductDetails(produto)); // addEventListener

  // Botão "Destacar"
  const btnHighlight = document.createElement("button");
  btnHighlight.classList.add("btn-highlight");
  btnHighlight.textContent = "⭐ Destacar";
  btnHighlight.addEventListener("click", () => {                           // addEventListener
    card.classList.add("highlight");
    btnHighlight.textContent = card.classList.contains("highlight") ? "✦ Destacado" : "⭐ Destacar";
  });

  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);
  body.appendChild(actions);
  card.appendChild(body);

  return card;
}

/**
 * Renderiza a lista de produtos no DOM.
 * Limpa a lista e adiciona todos os cards via appendChild.
 * @param {Array} produtos
 */
function renderProducts(produtos) {
  productList.innerHTML = "";  // innerHTML = ""

  if (produtos.length === 0) {
    const empty = document.createElement("div");
    empty.classList.add("empty-state");
    empty.innerHTML = `<span>😕</span><p>Nenhum produto encontrado.</p>`;
    productList.appendChild(empty);
    return;
  }

  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);  // appendChild
  });

  // B.5 — querySelectorAll obrigatório
  const allCards = document.querySelectorAll(".card"); // querySelectorAll
  console.log(`=== querySelectorAll: ${allCards.length} card(s) renderizado(s) ===`);
  allCards.forEach(card => {
    const id = card.getAttribute("data-id");
    const categoria = card.getAttribute("data-categoria");
    console.log(`  → Card data-id="${id}" | categoria="${categoria}"`);
    card.style.opacity = "0";
    card.style.transform = "translateY(16px)";
    // Pequena animação de entrada via JS
    setTimeout(() => {
      card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, Number(id) * 40);
  });
}

/**
 * Preenche o <select> de categorias dinamicamente.
 * Inclui sempre a opção "Todas".
 */
function renderCategories() {
  const categorias = ["Todas", ...new Set(data.produtos.map(p => p.categoria))];

  categorySelect.innerHTML = "";  // limpa
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.setAttribute("value", cat);
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

/**
 * Exibe os detalhes completos de um produto na área #product-details.
 * Usa innerHTML para preencher o conteúdo.
 * @param {Object} produto
 */
function showProductDetails(produto) {
  const estoqueLabel = produto.emEstoque
    ? `<span class="stock-badge in-stock">✔ Em estoque</span>`
    : `<span class="stock-badge out-stock">✖ Fora de estoque</span>`;

  productDetails.innerHTML = `
    <div class="details-inner">
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <div class="details-info">
        <span class="card-category">${produto.categoria}</span>
        <h2>${produto.nome}</h2>
        <p class="price">${formatPrice(produto.preco)}</p>
        ${estoqueLabel}
        <p class="desc">${produto.descricao}</p>
      </div>
    </div>
  `;

  // Scroll suave até os detalhes
  productDetails.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Filtra produtos com base no texto de busca e na categoria selecionada.
 * @returns {Array} Array de produtos filtrados
 */
function filterProducts() {
  const texto    = searchInput.value.toLowerCase().trim();
  const categoria = categorySelect.value;

  return data.produtos.filter(produto => {
    const nomeMatch      = produto.nome.toLowerCase().includes(texto);
    const catMatch       = categoria === "Todas" || produto.categoria === categoria;
    return nomeMatch && catMatch;
  });
}

// =============================================
// EVENTOS GLOBAIS (addEventListener)
// =============================================

// Evento: digitação no campo de busca
searchInput.addEventListener("input", () => {        // addEventListener
  renderProducts(filterProducts());
});

// Evento: mudança no select de categoria
categorySelect.addEventListener("change", () => {   // addEventListener
  renderProducts(filterProducts());
});

// Evento: clique no botão Renderizar
btnRender.addEventListener("click", () => {          // addEventListener
  searchInput.value = "";
  categorySelect.value = "Todas";
  renderProducts(data.produtos);
});

// =============================================
// INICIALIZAÇÃO
// =============================================
renderCategories();
renderProducts(data.produtos);
