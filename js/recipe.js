// ── Read recipe ID from URL ───────────────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const recipeId = parseInt(params.get('id'));

const recipe = recipes.find(r => r.id === recipeId);

// Redirect to index if not found
if (!recipe) {
  window.location.href = 'index.html';
}

// ── Update page title ─────────────────────────────────────────────────────────
document.title = `${recipe.name} | Sabores do Brasil`;

// ── Category labels ───────────────────────────────────────────────────────────
const categoryLabels = {
  sobremesas: 'Sobremesas',
  lanches:    'Lanches',
  almoco:     'Almoço',
  jantar:     'Jantar',
  bebidas:    'Bebidas',
};

// ── Render photo column ───────────────────────────────────────────────────────
const photoCol = document.getElementById('recipePhotoCol');

photoCol.innerHTML = `
  <div class="recipe-photo-wrap">
    <img
      src="${recipe.image}"
      alt="${recipe.name}"
      class="recipe-photo"
      onerror="this.style.display='none'; document.getElementById('photoFallback').style.display='flex'"
    >
    <div class="recipe-photo-fallback" id="photoFallback" style="display:none">🍽️</div>

    <div class="recipe-photo-badge">
      <div class="recipe-cat-badge">${categoryLabels[recipe.category] || recipe.category}</div>
      ${recipe.youtube_id ? '<div class="recipe-vid-badge">▶ Vídeo disponível</div>' : ''}
    </div>
  </div>
`;

// ── Helpers ───────────────────────────────────────────────────────────────────
const MAX_CALS = 800;
const calPercent = Math.min(Math.round((recipe.calories / MAX_CALS) * 100), 100);
const stars = '★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating);

const allergenHTML = recipe.allergens.length
  ? recipe.allergens.map(a => `<div class="allergen-badge">${a}</div>`).join('')
  : `<div class="no-allergens">✅ Sem alergênicos conhecidos</div>`;

const ingredientsHTML = recipe.ingredients
  .map(i => `<li>${i}</li>`).join('');

const stepsHTML = recipe.steps
  .map((s, i) => `<li><div class="step-number">${i + 1}</div><div class="step-text">${s}</div></li>`).join('');

// ── Render info column ────────────────────────────────────────────────────────
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

// ── Render video section ──────────────────────────────────────────────────────
const videoSection = document.getElementById('recipeVideoSection');

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
