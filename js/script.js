// ── Category definitions ─────────────────────────────────────────────────────
const categories = [
  { key: 'todos',     label: 'Todos',      emoji: '🍽️' },
  { key: 'sobremesas',label: 'Sobremesas', emoji: '🍮' },
  { key: 'lanches',   label: 'Lanches',    emoji: '🥪' },
  { key: 'almoco',    label: 'Almoço',     emoji: '🍽️' },
  { key: 'jantar',    label: 'Jantar',     emoji: '🌙' },
  { key: 'bebidas',   label: 'Bebidas',    emoji: '🥤' },
];

const categoryLabels = {
  sobremesas: 'Sobremesas',
  lanches:    'Lanches',
  almoco:     'Almoço',
  jantar:     'Jantar',
  bebidas:    'Bebidas',
};

const categoryEmojis = {
  sobremesas: '🍮',
  lanches:    '🥪',
  almoco:     '🍽️',
  jantar:     '🌙',
  bebidas:    '🥤',
};

let activeCategory = 'todos';

// ── Build Category Tabs ──────────────────────────────────────────────────────
function buildTabs() {
  const tabsEl = document.getElementById('categoryTabs');
  tabsEl.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('div');
    btn.className = 'tab-btn' + (cat.key === activeCategory ? ' active' : '');
    btn.setAttribute('data-category', cat.key);
    btn.setAttribute('id', `tab-${cat.key}`);
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('role', 'button');
    btn.innerHTML = `<div class="tab-emoji">${cat.emoji}</div> ${cat.label}`;
    btn.addEventListener('click', () => {
      activeCategory = cat.key;
      buildTabs();
      renderCards();
    });
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { activeCategory = cat.key; buildTabs(); renderCards(); }
    });
    tabsEl.appendChild(btn);
  });
}

// ── Render Recipe Cards ──────────────────────────────────────────────────────
function renderCards() {
  const grid    = document.getElementById('recipeGrid');
  const countEl = document.getElementById('recipeCount');

  const filtered = activeCategory === 'todos'
    ? recipes
    : recipes.filter(r => r.category === activeCategory);

  countEl.innerHTML = `<div class="count-num">${filtered.length}</div> receita${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-emoji">🍳</div>
        <p>Nenhuma receita encontrada nesta categoria.</p>
      </div>`;
    return;
  }

  grid.innerHTML = '';

  filtered.forEach(recipe => {
    const card = document.createElement('a');
    card.className = 'recipe-card';
    card.setAttribute('href', `recipe.html?id=${recipe.id}`);
    card.setAttribute('id', `card-${recipe.id}`);
    card.setAttribute('aria-label', `Ver receita de ${recipe.name}`);

    const stars = '★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating);

    card.innerHTML = `
      <div class="card-img">
        <img
          src="${recipe.image}"
          alt="${recipe.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.querySelector('.card-img-placeholder').style.display='flex'"
        >
        <div class="card-img-placeholder" style="display:none">${categoryEmojis[recipe.category]}</div>
        <div class="card-category-badge">${categoryLabels[recipe.category]}</div>
        ${recipe.youtube_id ? '<div class="card-video-badge">▶ Vídeo</div>' : ''}
      </div>
      <div class="card-body">
        <div class="card-name">${recipe.name}</div>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-meta">
          <div class="card-meta-item">⏱ ${recipe.time}</div>
          <div class="card-meta-item">👤 ${recipe.servings}</div>
          <div class="card-meta-item stars">${stars}</div>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-calories"><div class="count-num">${recipe.calories}</div> kcal/porção</div>
        <div class="card-btn">Ver Receita</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
buildTabs();
renderCards();
