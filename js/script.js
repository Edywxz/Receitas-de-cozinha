/* 
 * ARQUIVO PRINCIPAL DA LISTAGEM DE CARDS (HOME)
 * Executa as funcionalidades da home page: filtar abas e exibir os cards do catálogo.
 */

// ── Definições de Categorias Base (Configuração) ─────────────────────────────────────────────────────
// Define chaves, textos das abas, e seus respectivos emojis de modo atômico e expansível.
const categories = [
  { key: 'todos',     label: 'Todos',      emoji: '🍽️' },
  { key: 'sobremesas',label: 'Sobremesas', emoji: '🍮' },
  { key: 'lanches',   label: 'Lanches',    emoji: '🥪' },
  { key: 'almoco',    label: 'Almoço',     emoji: '🍽️' },
  { key: 'jantar',    label: 'Jantar',     emoji: '🌙' },
  { key: 'bebidas',   label: 'Bebidas',    emoji: '🥤' },
];

// Mapeamento simples para acesso O(1) rápido visual dos labels no badge do HTML.
const categoryLabels = {
  sobremesas: 'Sobremesas',
  lanches:    'Lanches',
  almoco:     'Almoço',
  jantar:     'Jantar',
  bebidas:    'Bebidas',
};

// Mapeamento simples de emojis correspondentes de cada item (fallback para imagens faltantes).
const categoryEmojis = {
  sobremesas: '🍮',
  lanches:    '🥪',
  almoco:     '🍽️',
  jantar:     '🌙',
  bebidas:    '🥤',
};

// Categoria selecionada padrão de inicialização na visualização da página principal.
let activeCategory = 'todos';

// ── Lógica de Construção das Abas Iniciais ──────────────────────────────────────────────────────
function buildTabs() {
  const tabsEl = document.getElementById('categoryTabs');
  tabsEl.innerHTML = '';
  
  // Roda um loop para incluir todos os botoes mapeados acima.
  categories.forEach(cat => {
    // Para simplificação de componentes HTML como exigido — utiliza <div> invés de <button>
    const btn = document.createElement('div');
    
    // Configura a classe da aba para manter layout seletor 'active' (CSS Atomizado)
    btn.className = 'tab-btn' + (cat.key === activeCategory ? ' active' : '');
    btn.setAttribute('data-category', cat.key);
    btn.setAttribute('id', `tab-${cat.key}`);
    btn.setAttribute('tabindex', '0'); // Ajuda na acessibilidade para teclados
    btn.setAttribute('role', 'button');
    
    // Popula HTML simples (usando div em vez de spans ou botões).
    btn.innerHTML = `<div class="tab-emoji">${cat.emoji}</div> ${cat.label}`;
    
    // Ação: Seleção de outra aba com o clique (Mouse)
    btn.addEventListener('click', () => {
      activeCategory = cat.key;
      buildTabs();
      renderCards();
    });
    
    // Ação: Seleção de outra aba com o aperte de barra de espaço / enter (Teclado)
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { activeCategory = cat.key; buildTabs(); renderCards(); }
    });
    
    // Atrela a interface do navegador o botão renderizado
    tabsEl.appendChild(btn);
  });
}

// ── Lógica de Renderização do Grid de Receitas ──────────────────────────────────────────────────────
function renderCards() {
  const grid    = document.getElementById('recipeGrid');
  const countEl = document.getElementById('recipeCount');

  // Filtra as receitas baseados na categoria ativa (aba no momento).
  const filtered = activeCategory === 'todos'
    ? recipes
    : recipes.filter(r => r.category === activeCategory);

  // Exibe ao usuário quantos cartões (telas) de receita foram localizados.
  countEl.innerHTML = `<div class="count-num">${filtered.length}</div> receita${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`;

  // Se nada foi encontrado — exibe um painel de vazio para bom retorno semiótico.
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-emoji">🍳</div>
        <p>Nenhuma receita encontrada nesta categoria.</p>
      </div>`;
    return;
  }

  // Despeja todo o inner base para preparar os loops limpos
  grid.innerHTML = '';

  // Cria um cartão (layout "digital menu") de visualização para cada receita disponível
  filtered.forEach(recipe => {
    // Construção sem o uso de tag semântica exigida (<article>), utilizando ancora <a> para link.
    const card = document.createElement('a');
    card.className = 'recipe-card';
    
    // Redirecionamento da navegação da index para view da página de receita construído em href GET param (ex: id=4)
    card.setAttribute('href', `recipe.html?id=${recipe.id}`);
    card.setAttribute('id', `card-${recipe.id}`);
    card.setAttribute('aria-label', `Ver receita de ${recipe.name}`);

    // Calculo básico de representação de ranques/estrelas (máx de 5estrelas) 
    const stars = '★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating);

    // Corpo final com o HTML da base
    card.innerHTML = `
      <div class="card-img">
        <img
          src="${recipe.image}"
          alt="${recipe.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.querySelector('.card-img-placeholder').style.display='flex'"
        >
        <!-- Ícone placeholder caso a imagem esteja quebrada ou deletada nas edições. -->
        <div class="card-img-placeholder" style="display:none">${categoryEmojis[recipe.category]}</div>
        <!-- Badge indicando categorização do alimento e presença de vídeos. -->
        <div class="card-category-badge">${categoryLabels[recipe.category]}</div>
        ${recipe.youtube_id ? '<div class="card-video-badge">▶ Vídeo</div>' : ''}
      </div>
      
      <!-- Seção Descritiva do Prato -->
      <div class="card-body">
        <div class="card-name">${recipe.name}</div>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-meta">
          <div class="card-meta-item">⏱ ${recipe.time}</div>
          <div class="card-meta-item">👤 ${recipe.servings}</div>
          <div class="card-meta-item stars">${stars}</div>
        </div>
      </div>
      
      <!-- Custo calórico básico (Bottom Rodapé do Menu) -->
      <div class="card-footer">
        <div class="card-calories"><div class="count-num">${recipe.calories}</div> kcal/porção</div>
        <div class="card-btn">Ver Receita</div>
      </div>
    `;

    // Empurra em tela a representação do cartao!
    grid.appendChild(card);
  });
}

// ── Funções Iniciais e Ponto de Chamada da Engine JS ─────────────────────────────────────────────────────────────────────
buildTabs();
renderCards();
