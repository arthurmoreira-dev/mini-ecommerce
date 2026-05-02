# Mini Ecommerce — Catálogo em Cards

> Atividade Prática: Funções e Manipulação do DOM com JavaScript

---

## 👤 Identificação

| Campo | Valor |
|---|---|
| **Nome** | Seu Nome Aqui |
| **Matrícula** | Seu número aqui |
| **Disciplina** | Linguagem JavaScript — DOM |

---

## 📋 Sobre o Projeto

Página de catálogo de produtos no estilo eCommerce, construída com HTML, CSS e JavaScript puro. Os produtos são renderizados dinamicamente a partir de um array de objetos JSON, sem nenhum dado "colado" diretamente no HTML.

### Funcionalidades implementadas

- ✅ 10 produtos renderizados em cards via DOM
- ✅ Select de categorias preenchido dinamicamente
- ✅ Busca por texto em tempo real (evento `input`)
- ✅ Filtro por categoria (evento `change`)
- ✅ Botão "Ver detalhes" exibe informações completas
- ✅ Botão "Destacar" altera o visual do card
- ✅ Botão "Renderizar" reseta os filtros

---

## 🛠️ Métodos e Propriedades do DOM utilizados

| Método / Propriedade | Onde é usado |
|---|---|
| `document.getElementById()` | Seleciona `#product-list` e `#product-details` |
| `document.querySelector()` | Seleciona `#search`, `#category`, `#btnRender` |
| `document.querySelectorAll()` | Seleciona todos `.card` após renderização |
| `innerHTML` | Limpa a lista; preenche detalhes do produto |
| `createElement` | Cria cada elemento do card manualmente |
| `setAttribute` | Define `data-id`, `src`, `alt`, `value` |
| `appendChild` | Monta a árvore do card e insere na lista |
| `classList.add` | Adiciona classes como `card`, `highlight`, `in-stock` |
| `style` | Aplica animação de entrada nos cards via JS |
| `addEventListener` | Cliques nos botões, `input` na busca, `change` no select |

---

## 📸 Prints

> **Substitua as seções abaixo com seus próprios prints após rodar o projeto.**

### Cards renderizados
*(Adicione aqui um print da página com os cards visíveis)*

### Área de detalhes preenchida
*(Adicione aqui um print após clicar em "Ver detalhes" em algum produto)*

### Console do navegador — querySelectorAll
*(Adicione aqui um print do console mostrando a listagem dos `data-id` de cada card)*

---

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/mini-ecommerce.git
   cd mini-ecommerce
   ```

2. Abra o arquivo `index.html` no navegador (duplo clique ou via Live Server no VS Code).

3. Explore: busque produtos, filtre por categoria e clique nos botões dos cards.

---

## 📁 Estrutura de Arquivos

```
mini-ecommerce/
├── index.html    # Estrutura da página
├── styles.css    # Estilização
├── script.js     # Lógica JavaScript / DOM
└── README.md     # Documentação
```

---

*Atividade Prática — Funções e DOM*
