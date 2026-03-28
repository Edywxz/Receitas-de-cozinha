/* 
 * ARQUIVO PRINCIPAL DA RENDERIZAÇÃO DE RECEITAS (PÁGINA FILHA)
 * Controla os preenchimentos para a estrutura da receita específica da view recipe.html baseada no GET url "?id="
 */

// ── LEITURAS DE URL ───────────────────────────────────────────────────
// Extrai o identificador da comida específica via Parâmetros Nativos JS (window.location)
const params = new URLSearchParams(window.location.search);
const recipeId = parseInt(params.get('id'));

// Busca a mesma equivalencia de Array Json dentro de "js/recipes.js" (herdado pelo escopo global do import de script HTML pai)
const recipe = recipes.find(r => r.id === recipeId);

// Redireciona usuários que acessarem ids não-existentes ou preenchidos erroneamente para a pagina inicial Index de volta
if (!recipe) {
  window.location.href = 'home.html';
}

// ── ATUALIZAÇÃO SENSORIAL DE SEO NO HEAD DO HTML ──────────────────────────
document.title = `${recipe.name} | Sabores do Brasil`;

// ── DICTIONARY GLOBAIS DE LABELS ──────────────────────────────────────────
const categoryLabels = {
  sobremesas: 'Sobremesas',
  lanches:    'Lanches',
  almoco:     'Almoço',
  jantar:     'Jantar',
  bebidas:    'Bebidas',
};

// ── 1. POPULA COLUNA ESQUERDA (IMAGEM HERO/POSTER PRINCIPAL) ───────────────────
const photoCol = document.getElementById('recipePhotoCol');

photoCol.innerHTML = `
  <div class="recipe-photo-wrap">
    <img
      src="${recipe.image}"
      alt="${recipe.name}"
      class="recipe-photo"
      onerror="this.style.display='none'; document.getElementById('photoFallback').style.display='flex'"
    >
    <!-- Placeholder SVG/Emoji que engloba em caso de erro da IMG (imagem corrompida) -->
    <div class="recipe-photo-fallback" id="photoFallback" style="display:none">🍽️</div>

    <div class="recipe-photo-badge">
      <div class="recipe-cat-badge">${categoryLabels[recipe.category] || recipe.category}</div>
      ${recipe.youtube_id ? '<div class="recipe-vid-badge">▶ Vídeo disponível</div>' : ''}
    </div>
  </div>
`;

// ── HELPERS: FORMULÁRIOS DE CÁLCULO ESTÁTICO DE VALORES ────────────────────
// Limite estático sugerido de porção de refeição unitária padrão (Utilizada em matemática para a width da Barra Calórica)
const MAX_CALS = 800;

// Trunca e fixa o limitador das porcentagens pra tela de CSS fill do layout em 100%. Evita que barras "invadam" ou "recuem" pra fora das DIVS base em refeições que contém muitas calorias.
const calPercent = Math.min(Math.round((recipe.calories / MAX_CALS) * 100), 100);
const stars = '★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating);

// Renderização Nativa do array de alergênicos que constroí visualmente ou limpa as listagens se prato natural 
const allergenHTML = recipe.allergens.length
  ? recipe.allergens.map(a => `<div class="allergen-badge">${a}</div>`).join('')
  : `<div class="no-allergens">✅ Sem alergênicos conhecidos</div>`;

// Popula lista (`<li>`) formatando uma string unida final ao HTML
const ingredientsHTML = recipe.ingredients
  .map(i => `<li>${i}</li>`).join('');

const stepsHTML = recipe.steps
  .map((s, i) => `<li><div class="step-number">${i + 1}</div><div class="step-text">${s}</div></li>`).join('');

// ── 2. POPULA COLUNA DIREITA (INFORMAÇÕES LONGAS DE DESCRIÇÃO) ─────────────────
const infoCol = document.getElementById('recipeInfoCol');

infoCol.innerHTML = `
  <div class="recipe-info-top">
    <div class="recipe-stars">${stars}</div>
    <div class="recipe-name">${recipe.name}</div>
    <p class="recipe-desc">${recipe.description}</p>
  </div>

  <div class="recipe-quick-info">
    <div class="rqi-card">
      <div class="rqi-icon">⏱</div>
      <div class="rqi-value">${recipe.time}</div>
      <div class="rqi-label">Tempo</div>
    </div>
    <div class="rqi-card">
      <div class="rqi-icon">👤</div>
      <div class="rqi-value">${recipe.servings}</div>
      <div class="rqi-label">Porções</div>
    </div>
    <div class="rqi-card">
      <div class="rqi-icon">📊</div>
      <div class="rqi-value">${recipe.difficulty}</div>
      <div class="rqi-label">Dificuldade</div>
    </div>
    <div class="rqi-card">
      <div class="rqi-icon">🔥</div>
      <div class="rqi-value">${recipe.calories}</div>
      <div class="rqi-label">kcal</div>
    </div>
  </div>

  <div class="recipe-section">
    <div class="recipe-section-title">🥘 Ingredientes</div>
    <ul class="recipe-ingredients">${ingredientsHTML}</ul>
  </div>

  <div class="recipe-section">
    <div class="recipe-section-title">📝 Modo de Preparo</div>
    <ol class="recipe-steps">${stepsHTML}</ol>
  </div>

  <div class="recipe-section">
    <div class="recipe-section-title">🔥 Informação Nutricional</div>
    <div class="recipe-nutrition">
      <div class="nutri-display">
        <div class="nutri-number">${recipe.calories}</div>
        <div class="nutri-unit">kcal / porção</div>
      </div>
      <div class="nutri-bar-wrap">
        <div class="nutri-bar-label">Referência diária: 2.000 kcal</div>
        <div class="nutri-bar">
          <!-- A variável calPercent do JS preenche em linha nativo no css inline "width" abaixo de forma dinamica -->
          <div class="nutri-fill" style="width:${calPercent}%"></div>
        </div>
        <div class="nutri-bar-label">${calPercent}% da referência diária por porção</div>
      </div>
    </div>
  </div>

  <div class="recipe-section">
    <div class="recipe-section-title">⚠️ Alergênicos</div>
    <div class="allergen-list">${allergenHTML}</div>
  </div>
`;

// ── 3. POPULA BASE FINAL INFERIOR (IFRAME DO YOUTUBE PLAYER) ───────────────────────
const videoSection = document.getElementById('recipeVideoSection');

// Se houver e conter no JS recipes strings de "youtube_id" então ele fará parse, e vai embutir o iframe API do youtube nativamente no site
if (recipe.youtube_id) {
  videoSection.innerHTML = `
    <div class="recipe-section">
      <div class="recipe-section-title recipe-video-title">▶ Vídeo Tutorial</div>
      <div class="recipe-video-wrap">
        <iframe
          src="https://www.youtube.com/embed/${recipe.youtube_id}"
          title="Vídeo: ${recipe.name}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;
}
