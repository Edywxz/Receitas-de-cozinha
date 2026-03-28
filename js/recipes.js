const recipes = [
  // ── SOBREMESAS ─────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Brigadeiro",
    category: "sobremesas",
    image: "assets/img/brigadeiro.png",
    description: "O doce mais amado do Brasil, feito com leite condensado e chocolate.",
    calories: 130,
    servings: "20 unidades",
    time: "30 min",
    difficulty: "Fácil",
    allergens: ["leite", "glúten"],
    rating: 5,
    ingredients: [
      "1 lata de leite condensado (395g)",
      "3 colheres de sopa de cacau em pó",
      "1 colher de sopa de manteiga",
      "Granulado de chocolate a gosto",
      "Forminhas de papel"
    ],
    steps: [
      "Em uma panela, misture o leite condensado, o cacau em pó e a manteiga.",
      "Leve ao fogo médio, mexendo sempre, por cerca de 10–12 minutos.",
      "O ponto certo é quando a massa desgruda do fundo da panela.",
      "Despeje num prato untado com manteiga e deixe esfriar completamente.",
      "Com as mãos untadas, enrole bolinhas e passe no granulado.",
      "Coloque nas forminhas e sirva."
    ],
    youtube_id: "I9d909TAtNY"
  },
  {
    id: 2,
    name: "Pudim de Leite",
    category: "sobremesas",
    image: "assets/img/pudim.png",
    description: "Clássico pudim cremoso com calda de caramelo dourada.",
    calories: 210,
    servings: "8 porções",
    time: "1h 20min",
    difficulty: "Médio",
    allergens: ["leite", "ovos"],
    rating: 5,
    ingredients: [
      "1 lata de leite condensado (395g)",
      "2 latas de leite integral (use a mesma lata como medida)",
      "3 ovos inteiros",
      "1 xícara de açúcar (para a calda)",
      "3 colheres de sopa de água (para a calda)"
    ],
    steps: [
      "Calda: derreta o açúcar com a água em fogo médio até dourar. Despeje na forma e reserve.",
      "Bata no liquidificador o leite condensado, o leite e os ovos por 2 minutos.",
      "Despeje a mistura sobre a calda na forma.",
      "Cubra com papel alumínio e asse em banho-maria a 180°C por 1 hora.",
      "Deixe esfriar e leve à geladeira por pelo menos 4 horas.",
      "Desenforme e sirva gelado."
    ],
    youtube_id: "FijA9KLnS1g"
  },

  // ── LANCHES ────────────────────────────────────────────────────────────────
  {
    id: 3,
    name: "X-Burguer Caseiro",
    category: "lanches",
    image: "assets/img/hamburguer.png",
    description: "Hamburguer artesanal suculento com queijo cheddar e molho especial.",
    calories: 680,
    servings: "2 porções",
    time: "25 min",
    difficulty: "Médio",
    allergens: ["glúten", "leite", "ovos"],
    rating: 5,
    ingredients: [
      "400g de carne moída (patinho ou fraldinha)",
      "2 pães de hamburguer brioche",
      "2 fatias de queijo cheddar",
      "Folhas de alface americana",
      "2 fatias de tomate",
      "Cebola roxa em rodelas",
      "Maionese, mostarda e ketchup a gosto",
      "Sal, pimenta-do-reino e alho em pó"
    ],
    steps: [
      "Tempere a carne com sal, pimenta e alho em pó. Forme dois discos de 200g.",
      "Aqueça uma frigideira ou chapa em fogo alto com um fio de azeite.",
      "Grelhe os burgers por 3–4 minutos de cada lado para o ponto.",
      "Coloque o queijo sobre a carne no último minuto e tampe.",
      "Toste o pão na chapa por 1 minuto.",
      "Monte com maionese, alface, tomate, a carne com queijo, cebola e molhos."
    ],
    youtube_id: "vbPOquiSREQ"
  },
  {
    id: 4,
    name: "Coxinha de Frango",
    category: "lanches",
    image: "https://picsum.photos/seed/coxinha/600/400",
    description: "Salgado crocante recheado com frango desfiado e catupiry.",
    calories: 280,
    servings: "15 unidades",
    time: "1h",
    difficulty: "Médio",
    allergens: ["glúten", "leite"],
    rating: 4,
    ingredients: [
      "2 peitos de frango cozidos e desfiados",
      "1 caixinha de creme de queijo (catupiry)",
      "Cebola, alho, tomate e temperos a gosto",
      "3 xícaras de farinha de trigo",
      "2 xícaras do caldo do cozimento do frango",
      "Farinha de rosca para empanar",
      "Óleo para fritar"
    ],
    steps: [
      "Refogue o frango desfiado com cebola, alho e tomate. Reserve.",
      "Misture o catupiry ao frango frio. Reserve o recheio.",
      "Ferva o caldo e dissolva nele a farinha de trigo mexendo até soltar.",
      "Sove a massa sobre superfície enfarinhada até homogênea.",
      "Molde as coxinhas, recheie e feche bem.",
      "Passe na farinha de rosca e frite em óleo quente até dourar."
    ],
    youtube_id: null
  },

  // ── ALMOÇO ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Frango Grelhado",
    category: "almoco",
    image: "https://picsum.photos/seed/frangogrill/600/400",
    description: "Peito de frango grelhado com ervas finas, leve e saboroso.",
    calories: 310,
    servings: "2 porções",
    time: "20 min",
    difficulty: "Fácil",
    allergens: [],
    rating: 4,
    ingredients: [
      "2 peitos de frango",
      "Suco de 1 limão",
      "2 dentes de alho picados",
      "1 colher de sopa de azeite",
      "Sal, pimenta, orégano e salsinha a gosto",
      "Páprica defumada"
    ],
    steps: [
      "Marine o frango com limão, alho, azeite e temperos por 30 minutos.",
      "Aqueça uma frigideira antiaderente em fogo médio-alto.",
      "Grelhe os filés por 6–7 minutos de cada lado.",
      "Deixe descansar 2 minutos antes de fatiar.",
      "Sirva com arroz branco, salada e legumes grelhados."
    ],
    youtube_id: null
  },
  {
    id: 6,
    name: "Feijão Tropeiro",
    category: "almoco",
    image: "https://picsum.photos/seed/feijao/600/400",
    description: "Prato mineiro robusto com feijão, farinha, bacon e couve.",
    calories: 520,
    servings: "4 porções",
    time: "40 min",
    difficulty: "Médio",
    allergens: ["glúten"],
    rating: 4,
    ingredients: [
      "2 xícaras de feijão cozido e escorrido",
      "200g de bacon em cubinhos",
      "200g de linguiça calabresa fatiada",
      "4 ovos",
      "Folhas de couve cortadas finamente",
      "2 xícaras de farinha de mandioca torrada",
      "Alho, sal e pimenta-do-reino"
    ],
    steps: [
      "Frite o bacon até dourar. Junte a linguiça e doure também. Reserve.",
      "Na mesma gordura, refogue o alho e acrescente o feijão.",
      "Amasse levemente o feijão e misture os embutidos fritos.",
      "Acrescente os ovos mexidos e incorpore à mistura.",
      "Adicione a farinha aos poucos, mexendo, até atingir a textura desejada.",
      "Finalize com a couve refogada e ajuste o sal."
    ],
    youtube_id: "q8DAtWxk1W8"
  },

  // ── JANTAR ─────────────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Macarrão à Bolonhesa",
    category: "jantar",
    image: "https://picsum.photos/seed/bolonhesa/600/400",
    description: "Molho rico de carne moída com tomates e ervas italianas.",
    calories: 590,
    servings: "4 porções",
    time: "45 min",
    difficulty: "Fácil",
    allergens: ["glúten"],
    rating: 5,
    ingredients: [
      "400g de macarrão espaguete",
      "500g de carne moída",
      "1 lata de tomate pelado",
      "2 colheres de extrato de tomate",
      "Cebola, alho, cenoura e aipo",
      "Vinho tinto seco (opcional)",
      "Manjericão, orégano, sal e pimenta",
      "Azeite e queijo parmesão para finalizar"
    ],
    steps: [
      "Refogue cebola e alho no azeite até dourar.",
      "Adicione cenoura e aipo picados e refogue por 3 minutos.",
      "Acrescente a carne moída e doure bem. Deglacê com vinho (opcional).",
      "Junte o tomate pelado e o extrato. Tempere e cozinhe em fogo baixo por 25 minutos.",
      "Cozinhe o espaguete al dente conforme a embalagem.",
      "Sirva o molho sobre o macarrão com parmesão ralado."
    ],
    youtube_id: "c5PNzCuXgMc"
  },

  // ── BEBIDAS ────────────────────────────────────────────────────────────────
  {
    id: 8,
    name: "Vitamina de Banana",
    category: "bebidas",
    image: "https://picsum.photos/seed/vitamina/600/400",
    description: "Vitamina cremosa e nutritiva para qualquer hora do dia.",
    calories: 215,
    servings: "2 copos",
    time: "5 min",
    difficulty: "Fácil",
    allergens: ["leite"],
    rating: 4,
    ingredients: [
      "2 bananas maduras",
      "300ml de leite gelado",
      "2 colheres de sopa de mel",
      "1 pitada de canela",
      "Gelo a gosto"
    ],
    steps: [
      "Descasque e fatie as bananas.",
      "Coloque todos os ingredientes no liquidificador.",
      "Bata por 1 minuto até ficar cremoso.",
      "Sirva imediatamente com canela polvilhada."
    ],
    youtube_id: null
  },
  {
    id: 9,
    name: "Limonada Suíça",
    category: "bebidas",
    image: "https://picsum.photos/seed/limonada/600/400",
    description: "Limonada cremosa e refrescante com leite condensado.",
    calories: 185,
    servings: "4 copos",
    time: "5 min",
    difficulty: "Fácil",
    allergens: ["leite"],
    rating: 5,
    ingredients: [
      "4 limões (preferencialmente tahiti)",
      "4 xícaras de água gelada",
      "1/2 lata de leite condensado",
      "4 colheres de sopa de creme de leite",
      "Gelo a gosto"
    ],
    steps: [
      "Lave bem os limões. Corte em 4 e retire as sementes.",
      "Bata no liquidificador com a água gelada por apenas 5 segundos (para não amargar).",
      "Coe com uma peneira fina.",
      "Volte ao liquidificador com o leite condensado e o creme de leite.",
      "Bata rapidamente e sirva com muito gelo."
    ],
    youtube_id: "sRFwxBpVqsU"
  }
];
