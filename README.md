# Sabores do Brasil: Portal de Receitas 🍳

Uma aplicação web de cardápio digital e portal culinário focada em receitas caseiras. 
O projeto foi desenvolvido para a disciplina **Atividade de DSM - DWI**, explorando a criação de interfaces modernas, restrições semânticas de HTML e arquitetura CSS escalável.

---

## 🚀 Sobre o Projeto

O **Sabores do Brasil** é um catálogo de receitas que exibe belos cartões divididos em categorias (Sobremesas, Lanches, Almoço, Jantar e Bebidas). 
Ele possui uma funcionalidade de "filtro", onde o usuário clica nas abas do topo, e a listagem de pratos reage automaticamente. Ao clicar em uma receita, o usuário é levado a uma página detalhada contendo ingredientes, modo de preparo passo a passo, informações nutricionais e um player de vídeo embutido (YouTube) para o tutorial interativo.

### 💡 Restrições Diferenciais de Semântica e Arquitetura

Este projeto foi construído seguindo rigorosos padrões de limitação estrutural com o intuito de exercitar o uso avançado de CSS e HTML puro:
1. **100% Estático e Sem JavaScript**: Não há nenhuma linha estrutural de ECMAScript (`.js`). Lógicas de abas, filtros e roteamentos que normalmente precisariam do DOM Javascript foram engenhadas **puramente com CSS (utilizando a pseudo-classe `:target` e links âncora)**.
2. **Tags HTML Limitadas**: Toda a interface web da plataforma precisou ser criada unicamente com as tags bases: `<div>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<ol>`, e `<li>` limitando o uso comum de forms (`<input>`, `<label>`), seções semânticas (`<section>`, `<main>`), ou títulos clássicos (`<h1>` ao `<h6>`). Deste modo, a hierarquia textual e responsiva depende fortemente de classes avançadas de Cascading Style Sheets (CSS).

---

## 🎨 Aspectos de Design

A paleta de cores adota temas naturais envolventes associados ao ramo alimentício:
- **Vermelho Vibrante** (Tomate/Pimenta) e **Amarelo** (Mostarda) como identidades da marca e chamadas para a ação.
- **Marrom Torrado** para tipografia contrastante e elementos pesados.
- **Branco/Bege Clarinho** em fundos simulando pratos e superfícies limpas.

Além das cores, foram injetadas **animações contínuas, micro-interações ao hover, grid com efeito "glass"** sútil, garantindo uma interface muito premium, reativa e interativa ao usuário (simulando um verdadeiro front-end engajado), e ainda seguindo uma responsividade plena de telas para Mobile, Tablets, e Desktops.

---

## 📂 Estrutura Fólio / Atomic Design

O projeto adotou o conceito de [Atomic Design System](https://atomicdesign.bradfrost.com/) para as folhas cascata (CSS), prevenindo que os estilos se tornassem um único arquivo gigante de milhares de linhas:

```
Receitas-de-cozinha/
├── index.html                # Ponto de entrada (Redireciona para views/home.html)
├── README.md                 # Documentação
│
├── views/                    # As Telas/Páginas visuais do Portal
│   ├── home.html             # Listagem/Grid de Categorias
│   ├── brigadeiro.html       # Visualização: Detalhes do Doce 
│   ├── hambuguer.html        # Visualização: Detalhes do Lanche 
│   └── (demais .html estáticos individuais por cada prato)
│
├── assets/
│   └── img/                  # Logotipos ou Imagens nativas se necessário (O resto usa CDNs via Picsum/Outros)
│
└── css/                      # Arquitetura Atomizada de CSS
    ├── style.css             # ROOT (O agregador. Ele importa todo o resto usando @import)
    ├── atoms/                
    │   ├── reset.css         # Defaults de navegadores
    │   └── variables.css     # Tokens Primários: :root vars (Cores, Fontes, Bordas, Sombras)
    │
    ├── molecules/            
    │   └── components.css    # Utilitários pequenos (Badges de alergia, Botões, Pílulas)
    │
    ├── organisms/            
    │   └── header-footer.css # Barras e menus globais constantes pelo Portal Inteiro
    │
    └── views/                
        ├── home.css          # Regras e comportamentos (exóticos) exclusivos da tela Home (Filtros target CSS)
        └── recipe.css        # Layout de 2-Colunas e responsividade exclusivos das telas do produto unitário
```

---

## 🛠 Como executar na sua máquina?

Como a aplicação é 100% estática (`Vanilla HTML/CSS`), ela dispensa instalação de qualquer runtime (Node.js/NPM) ou pacotes complexos:

1. Clone esse repositório na sua máquina
2. Dê dois cliques e abra o arquivo raiz `index.html` em qualquer navegador web de sua preferência (`Google Chrome`, `Firefox`, `Edge`).
3. Aprecie as delícias brasileiras! 🍛
