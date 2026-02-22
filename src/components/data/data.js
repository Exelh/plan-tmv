// src/data/data.js
// src/data/data.js

export const USERS = [
  { id: "A", name: "Andrea" },
  { id: "B", name: "Exequiel" },
];

const addDaysISO = (iso, days) => {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const buildDaysFromStart = (startISO, templates) => {
  const days = {};
  templates.forEach((tpl, idx) => {
    const dateISO = addDaysISO(startISO, idx);
    days[dateISO] = tpl;
  });
  return days;
};

// Día 1 = 2026-02-19 (importante)
const EXEQUIEL_START = "2026-02-19";

const EXEQUIEL_DAY_TEMPLATES = [
  // DÍA 1 (2026-02-19)
  {
    desayuno: [
      "Opción 1: Huevos a la plancha o revueltos + tostadas de pan integral + palta y queso untable.",
      "Opción 2: Tostadas + Queso descremado firme + Rodajas de tomate + Chorrito de oliva.",
    ],
    mediaManana: [
      "Opción 1: 1 Fruta.",
      "Opción 2: 1 Fruta + puñado de frutos secos.",
    ],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha + ensalada (lechuga, pepino y tomate) + 1/4 plato arroz integral + 1 cda aceite de oliva.",
      "Opción 2: Huevos + Quinua 1/4 plato + vegetales salteados + 1 cda aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Galletas de arroz + huevos revueltos o queso firme.",
      "Opción 2: Tostadas pan integral + queso firme descremado + 1/2 fruta.",
    ],
    cena: [
      "Opción 1: Pollo al horno/a la plancha + Hortalizas A y B + 1/4 plato papas/batatas + aceite de oliva.",
      "Opción 2: Pescado (merluza o lomitos de atún) + Hortalizas A y B + 1/4 plato papas/batatas + aceite de oliva.",
    ],
  },

  // DÍA 2
  {
    desayuno: [
      "Opción 1: Huevos revueltos + tostadas integrales + palta + tomate.",
      "Opción 2: Huevos revueltos + 1 fruta + frutos secos.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Puñado de frutos secos + fruta."],
    almuerzo: [
      "Opción 1: Carne al horno + Hortalizas A y B + 1/4 plato legumbres + 1/2 plato Hortalizas A y B.",
      "Opción 2: Tacos integrales de pollo con palta + Hortalizas A y B (cebolla/morrón/zanahoria precocidas) + 1 cda oliva.",
    ],
    merienda: [
      "Opción 1: Tostada integral + queso firme descremado + frutos secos + 1/2 fruta.",
      "Opción 2: Batido de proteína + 1/2 fruta + nueces.",
    ],
    cena: [
      "Opción 1: Carne magra + Hortalizas A y B + 1/4 plato hidrato a elección (papas/batatas/arroz/legumbres).",
      "Opción 2: Pescado al horno + Hortalizas A y B + 1/4 plato hidrato a elección (papas/batatas/arroz/legumbres).",
    ],
  },

  // DÍA 3
  {
    desayuno: [
      "Opción 1: Tostada integral + palta + queso firme descremado + jamón natural + rodajas de tomate.",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada light + 1/2 fruta.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Yogur descremado con frutos secos."],
    almuerzo: [
      "Opción 1: Carne al horno + lechuga/tomate + 1/4 plato quinoa + limón y oliva.",
      "Opción 2: Huevos + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B + limón y oliva.",
    ],
    merienda: [
      "Opción 1: Yogur griego o descremado + puñado de cereales + 1/2 fruta.",
      "Opción 2: 1 fruta + frutos secos + trozo de queso descremado.",
    ],
    cena: [
      "Opción 1: Pescado + espárragos o Hortalizas A y B + 1/2 plato batata/papa al horno.",
      "Opción 2: Pechuga de pollo + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 4
  {
    desayuno: [
      "Opción 1: Tazón de yogurt + 1 fruta + frutos secos.",
      "Opción 2: Huevos revueltos + 1/2 fruta + tostadas con queso untable.",
    ],
    mediaManana: [
      "Opción 1: 1 fruta + puñado de nueces.",
      "Opción 2: 1 fruta + puñado de cereal.",
    ],
    almuerzo: [
      "Opción 1: Pechuga de pollo al horno + Hortalizas A y B.",
      "Opción 2: Carne al horno + Hortalizas A y B.",
    ],
    merienda: [
      "Opción 1: Omelette con queso, jamón y tomate.",
      "Opción 2: Tostada integral + mantequilla de maní + banana + trozos de queso.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + Hortalizas A y B con oliva.",
      "Opción 2: Pechuga de pollo al horno + 1/4 plato arroz integral + Hortalizas A y B con oliva.",
    ],
  },

  // DÍA 5
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + queso fresco + huevos revueltos.",
      "Opción 2: Panqueques (avena + huevo + vainillina + coco rallado + 1/2 banana).",
    ],
    mediaManana: [
      "Opción 1: 1 fruta.",
      "Opción 2: Yogur descremado + puñado chico de frutos secos.",
    ],
    almuerzo: [
      "Opción 1: Tortilla con queso descremado + Hortalizas A y B + 1/4 plato hidratos a elección + aceite de oliva.",
      "Opción 2: Wok Hortalizas A y B + trozos de queso descremado + puñado chico frutos secos + 1 huevo + 1/4 plato hidratos a elección.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos + 1/2 taza avena + vainilla) + fruta por encima + nueces.",
      "Opción 2: Tostadas + queso firme + palta + huevo.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/2 plato Hortalizas A y B + aceite de oliva.",
      "Opción 2: Pollo + wok Hortalizas A y B + 1/4 plato legumbres/cereales + huevo duro + aceite de oliva.",
    ],
  },

  // DÍA 6
  {
    desayuno: [
      "Opción 2: Fruta + huevos revueltos + frutos secos.",
      "Opción 3: Tazón de avena + yogurt descremado + 1/2 fruta + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales sin azúcar + almendras."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/4 plato quinoa o arroz integral + 1/2 plato Hortalizas A y B.",
      "Opción 2: Carne a elección + verduras + 1/4 plato hidratos + aceite de oliva.",
    ],
    merienda: [
      "Opción 1: 1 fruta + nueces + porción de queso descremado.",
      "Opción 2: Huevos batidos + 1 fruta.",
    ],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Pollo al horno + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 7
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso descremado + rodajas de tomate + palta.",
      "Opción 2: Tazón de avena con yogurt descremado + frutos rojos + nueces/almendras.",
    ],
    mediaManana: [
      "Opción 1: 1 fruta.",
      "Opción 2: Yogur firme descremado + puñado de frutos secos.",
    ],
    almuerzo: [
      "Opción 1: Omelette de queso descremado + 1/4 plato Hortalizas C + 1/2 plato Hortalizas A y B.",
      "Opción 2: Pechuga de pollo + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena + huevo + vainilla + coco + 1/2 banana).",
      "Opción 2: Tostadas + queso untable + mermelada light + huevos.",
    ],
    cena: [
      "Opción 1: Pescado al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Carne magra + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 8
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + queso untable + huevos revueltos.",
      "Opción 2: Tostadas integrales + palta + rodajas de tomate + queso descremado firme.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: 1/2 fruta + 5 medias nueces."],
    almuerzo: [
      "Opción 1: Carne + 1/4 plato arroz integral + ensalada Hortalizas A y B + aceite de oliva.",
      "Opción 2: Wok Hortalizas A y B + pescado + 1/2 Hortalizas C.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos + 1/2 taza avena + vainilla) + fruta + nueces.",
      "Opción 2: Trozos de queso descremado + 1 fruta + almendras.",
    ],
    cena: [
      "Opción 1: Pollo salteado (cebolla y tomate) + 1/2 plato Hortalizas A y B.",
      "Opción 2: Carne al horno + Hortalizas A y B + papas al horno.",
    ],
  },

  // DÍA 9
  {
    desayuno: [
      "Opción 1: Tazón de yogurt descremado + cereales sin azúcar + 1/2 fruta.",
      "Opción 2: Revuelto de huevo + sándwich integral con queso firme descremado y jamón natural.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta pequeña + puñado de cereal."],
    almuerzo: [
      "Opción 1: Pechuga de pollo + 1/2 plato Hortalizas A y B con oliva.",
      "Opción 2: Pescado natural + 1/2 plato Hortalizas A y B con oliva.",
    ],
    merienda: [
      "Opción 1: Omelette + queso descremado + jamón natural + tomate + 1/2 fruta.",
      "Opción 2: Tostada integral + huevo revuelto + 1 fruta.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato hidratos a elección + Hortalizas A y B.",
      "Opción 2: Carne al horno + 1/4 plato hidratos a elección + Hortalizas A y B.",
    ],
  },

  // DÍA 10
  {
    desayuno: [
      "Opción 1: Panqueques (avena + huevo + vainillina + coco + 1/2 banana).",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada light + 1 fruta.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Yogur descremado."],
    almuerzo: [
      "Opción 1: Ensalada: pollo o huevo duro + lechuga + tomate + zanahoria.",
      "Opción 2: Milanesa de pollo o carne + ensalada Hortalizas A y B.",
    ],
    merienda: [
      "Opción 1: Yogur griego/descremado + puñado de frutos secos + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso firme descremado + condimentos.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/2 plato Hortalizas A y B.",
      "Opción 2: Pechuga de pollo + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 11
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Yogur descremado + avena instantánea + frutos rojos (o 1/2 fruta) + nueces/almendras.",
    ],
    mediaManana: [
      "Opción 1: Fruta + puñado chico de cereales sin azúcar.",
      "Opción 2: Puñado de frutos secos + fruta.",
    ],
    almuerzo: [
      "Opción 1: Omelette + queso descremado + jamón + 1/4 plato arroz + Hortalizas A y B con oliva.",
      "Opción 2: Pollo o carne + Hortalizas A y B + 1/2 plato papas con oliva.",
    ],
    merienda: [
      "Opción 1: Tostada integral + queso firme + almendras + 1/2 fruta.",
      "Opción 2: Omelette con queso y tomate.",
    ],
    cena: [
      "Opción 1: Carne magra + Hortalizas A y B + 1/4 plato hidratos a elección.",
      "Opción 2: Pescado al horno + Hortalizas A y B + 1/4 plato hidratos a elección.",
    ],
  },

  // DÍA 12
  {
    desayuno: [
      "Opción 1: Omelette (huevos) + queso descremado + jamón natural + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso descremado + palta + 1/2 fruta.",
    ],
    mediaManana: ["Opción 1: Yogur descremado.", "Opción 2: 1 fruta."],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha + queso derretido + Hortalizas A y B con oliva.",
      "Opción 2: Tortilla con queso y verduras + ensalada Hortalizas A y B con oliva.",
    ],
    merienda: [
      "Opción 1: Yogur descremado + frutos secos + 1 fruta.",
      "Opción 2: Tostadas integrales + queso firme descremado + palta + 1/2 fruta.",
    ],
    cena: [
      "Opción 1: Pechuga de pollo + hortalizas al horno + 1/4 plato hidratos a elección.",
      "Opción 2: Pescado (merluza o lomitos de atún) + hortalizas a la plancha + 1/4 plato hidratos a elección.",
    ],
  },

  // DÍA 13
  {
    desayuno: ["Opción 1: Fruta + huevos revueltos + almendras.", "Opción 2: Tazón de cereales + yogur descremado."],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales sin azúcar + nueces."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/4 plato quinoa o arroz integral + 1/2 plato Hortalizas A y B.",
      "Opción 2: Omelette con queso descremado + 1/4 plato legumbres + 1/2 plato Hortalizas A y B.",
    ],
    merienda: [
      "Opción 1: 1 fruta + frutos secos + porción de queso descremado.",
      "Opción 2: Tostadas integrales + queso firme descremado.",
    ],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Pollo al horno + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 14
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso untable + rodajas de tomate + palta.",
      "Opción 2: Huevos revueltos + tostadas + queso untable.",
    ],
    mediaManana: ["Opción 1: Barrita sin azúcar/proteica.", "Opción 2: Yogur firme descremado."],
    almuerzo: [
      "Opción 1: Ensalada de arroz integral con lentejas, zanahoria, huevo duro + limón y aceite de oliva.",
      "Opción 2: Ensalada de hortalizas a elección + pollo + aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena + huevo + vainilla + coco + 1/2 banana).",
      "Opción 2: Tostadas integrales + queso firme descremado + huevo.",
    ],
    cena: [
      "Opción 1: Milanesas de pollo al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Carne al horno + 1/2 plato papas + Hortalizas A y B.",
    ],
  },

  // DÍA 15
  {
    desayuno: [
      "Opción 1: Omelette con queso + jamón + huevo + 1/2 fruta.",
      "Opción 2: Tostadas + palta + queso firme descremado + tomate + chorrito de oliva.",
    ],
    mediaManana: [
      "Opción 1: Yogur con frutos rojos y nueces.",
      "Opción 2: 1 fruta + puñado de frutos secos.",
    ],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha + ensalada (lechuga, pepino y tomate) + 1/4 plato hidrato a elección + 1 cda oliva.",
      "Opción 2: Huevos + quinua 1/4 plato + vegetales salteados + 1 cda oliva.",
    ],
    merienda: [
      "Opción 1: Yogur descremado + frutos secos + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso untable descremado + 1/2 fruta.",
    ],
    cena: [
      "Opción 1: Carne al horno/a la plancha + Hortalizas A y B + 1/4 plato papas + aceite de oliva.",
      "Opción 2: Pescado (merluza o lomitos de atún) + Hortalizas A y B + 1/4 plato arroz + aceite de oliva.",
    ],
  }, // :contentReference[oaicite:2]{index=2}

  // DÍA 16
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Yogur descremado + cereales sin azúcar + frutos rojos + 1 trozo de queso firme descremado.",
    ],
    mediaManana: [
      "Opción 1: Fruta + puñado chico de cereales sin azúcar.",
      "Opción 2: Puñado de frutos secos + fruta.",
    ],
    almuerzo: [
      "Opción 1: Carne al horno + Hortalizas A y B + 1/4 plato legumbres + 1/2 plato Hortalizas A y B.",
      "Opción 2: Tacos integrales de pollo con palta + Hortalizas A y B (cebolla/morrón/zanahoria precocidas) + 1 cda oliva.",
    ],
    merienda: [
      "Opción 1: Tostada integral + queso firme descremado + frutos secos + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso firme descremado + 1/2 fruta + nueces.",
    ],
    cena: ["Opción 1: Carne magra + Hortalizas A y B.", "Opción 2: Pescado al horno + Hortalizas A y B."],
  },

  // DÍA 17
  {
    desayuno: [
      "Opción 1: Tostada integral + palta + queso descremado + jamón natural + tomate.",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada light + 1/2 fruta.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Yogur descremado."],
    almuerzo: [
      "Opción 1: Carne al horno + lechuga/tomate + 1/4 plato quinoa + limón y oliva.",
      "Opción 2: Huevo + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B + 10 almendras o 5 mariposas de nueces.",
    ],
    merienda: [
      "Opción 1: Yogur descremado + puñado de cereales + 1/2 fruta.",
      "Opción 2: 1 fruta + frutos secos + trozo de queso descremado o 1 cda grande de queso untable.",
    ],
    cena: [
      "Opción 1: Pescado + Hortalizas A y B + 1/4 plato batata/papa al horno.",
      "Opción 2: Pechuga de pollo + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 18
  {
    desayuno: ["Opción 1: Tazón de yogurt + 1 fruta + almendras.", "Opción 2: Huevos revueltos + 1 fruta + nueces."],
    mediaManana: ["Opción 1: 1 fruta + puñado de nueces.", "Opción 2: Fruta + puñado de cereal."],
    almuerzo: ["Opción 1: Pechuga de pollo al horno + Hortalizas A y B.", "Opción 2: Carne al horno + Hortalizas A y B."],
    merienda: [
      "Opción 1: Omelette con queso, jamón y tomate + 1/2 fruta.",
      "Opción 2: Tostada integral + mantequilla de maní + banana + huevos revueltos aparte.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + Hortalizas A y B con oliva.",
      "Opción 2: Pechuga de pollo al horno + 1/4 plato arroz integral + Hortalizas A y B con oliva.",
    ],
  }, // :contentReference[oaicite:3]{index=3}

  // DÍA 19
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + queso fresco + huevos revueltos.",
      "Opción 2: Panqueques (avena + huevo + vainillina + coco + 1/2 banana).",
    ],
    mediaManana: [
      "Opción 1: 1 barrita de cereal + puñado chico de frutos secos.",
      "Opción 2: Yogur descremado + puñado chico de frutos secos.",
    ],
    almuerzo: [
      "Opción 1: Tortilla con queso descremado + Hortalizas A y B + aceite de oliva.",
      "Opción 2: Wok Hortalizas A y B + queso descremado + puñado chico frutos secos + 1 huevo.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos + 1/2 taza avena + vainilla) + fruta + nueces.",
      "Opción 2: Tostadas + queso firme + palta + huevo.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/2 plato Hortalizas A y B + aceite de oliva.",
      "Opción 2: Wok Hortalizas A y B + 1/4 plato legumbres/cereales + huevo duro + aceite de oliva.",
    ],
  }, // :contentReference[oaicite:4]{index=4}

  // DÍA 20
  {
    desayuno: [
      "Opción 2: Fruta + huevos revueltos + almendras.",
      "Opción 3: Yogur descremado + 1/2 fruta + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales sin azúcar + frutos secos."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/4 plato quinoa o arroz integral + 1/2 plato Hortalizas A y B.",
      "Opción 2: Tacos de cerdo (corte magro) + verduras salteadas (cebolla/morrón/zanahoria precocidas).",
    ],
    merienda: ["Opción 1: 1 fruta + nueces + porción de queso descremado.", "Opción 2: Huevos revueltos + 1 fruta."],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Pollo al horno + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
  }, // :contentReference[oaicite:5]{index=5}

  // DÍA 21
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso descremado + tomate + palta.",
      "Opción 2: Tazón de avena + yogurt descremado + frutos rojos + nueces/almendras.",
    ],
    mediaManana: [
      "Opción 1: Barrita sin azúcar o proteica.",
      "Opción 2: Yogur firme descremado + puñado de frutos secos.",
    ],
    almuerzo: [
      "Opción 1: Omelette de queso descremado + 1/4 plato Hortalizas C + 1/2 plato Hortalizas A y B.",
      "Opción 2: Pechuga de pollo + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena + huevo + vainilla + coco + 1/2 banana).",
      "Opción 3: Batido de proteína + fruta + nueces.",
    ],
    cena: [
      "Opción 1: Pescado al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Pollo al horno + 1/2 plato Hortalizas A y B + 1/4 plato papas/batatas.",
    ],
  }, // :contentReference[oaicite:6]{index=6}

  // DÍA 22
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Tostadas integrales + palta + tomate + queso descremado firme.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: 1 fruta + frutos secos."],
    almuerzo: [
      "Opción 1: Pollo + 1/4 plato arroz integral + ensalada Hortalizas A y B + aceite de oliva.",
      "Opción 2: Wok Hortalizas A y B + (carne o pollo al horno) + 1/2 Hortalizas C.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos + 1/2 taza avena + vainilla) + fruta + nueces.",
      "Opción 2: Trozos de queso descremado + 1 fruta + almendras.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/2 plato Hortalizas A y B.",
      "Opción 2: Pollo salteado + Hortalizas A y B a la plancha o al horno.",
    ],
  }, // :contentReference[oaicite:7]{index=7}

  // DÍA 23
  {
    desayuno: [
      "Opción 1: Tazón de yogurt descremado + cereales sin azúcar + trozos de queso descremado.",
      "Opción 2: Revuelto de huevo + sándwich integral con queso firme descremado y jamón natural.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta pequeña + puñado de cereal."],
    almuerzo: [
      "Opción 1: Pechuga de pollo + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral + oliva.",
      "Opción 2: Pescado natural + 1/2 plato Hortalizas A y B + 1/4 plato papas + oliva.",
    ],
    merienda: [
      "Opción 1: Omelette + queso descremado + jamón natural + tomate + 1/2 fruta.",
      "Opción 2: Tostada integral + mantequilla de maní + banana + huevo revuelto.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + Hortalizas A y B.",
      "Opción 2: Carne al horno + 1/4 plato legumbres + Hortalizas A y B.",
    ],
  }, // :contentReference[oaicite:8]{index=8}

  // DÍA 24
  {
    desayuno: [
      "Opción 1: Panqueques (avena + huevo + vainillina + coco + 1/2 banana).",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada light + 1/2 fruta.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Yogur descremado."],
    almuerzo: [
      "Opción 1: Ensalada: pollo o huevo duro + lechuga + tomate + zanahoria.",
      "Opción 2: Milanesa de pollo o carne + ensalada Hortalizas A y B.",
    ],
    merienda: [
      "Opción 1: Yogur griego/descremado + puñado de cereales + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso descremado + mermelada light.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/2 plato Hortalizas A y B con oliva.",
      "Opción 2: Pechuga de pollo + 1/2 plato Hortalizas A y B con oliva.",
    ],
  },

  // DÍA 25
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Yogur descremado + avena instantánea + frutos rojos (o 1/2 fruta) + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: Fruta + puñado chico de cereales sin azúcar.", "Opción 2: Puñado de frutos secos + fruta."],
    almuerzo: [
      "Opción 1: Omelette + queso descremado + jamón + 1/4 plato arroz + Hortalizas A y B con oliva.",
      "Opción 2: Pollo o carne + Hortalizas A y B + 1/2 plato papas con oliva.",
    ],
    merienda: [
      "Opción 1: Tostada integral + queso untable + almendras + 1/2 fruta.",
      "Opción 2: Batido de proteína + 1/2 fruta.",
    ],
    cena: ["Opción 1: Carne magra + Hortalizas A y B.", "Opción 2: Pescado al horno + Hortalizas A y B."],
  },

  // DÍA 26
  {
    desayuno: [
      "Opción 1: Omelette (huevos) + queso descremado + jamón natural + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso descremado + palta + 1/2 fruta.",
    ],
    mediaManana: ["Opción 1: Yogur descremado.", "Opción 2: 1 fruta."],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha + queso derretido + ensalada (lechuga, cebolla y tomate).",
      "Opción 2: Huevo + quinua 1/4 plato + Hortalizas A y B salteadas (morrón/zanahoria/cebolla).",
    ],
    merienda: [
      "Opción 1: Yogur descremado + avena instantánea + frutos secos + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso untable descremado + palta + 1/2 fruta.",
    ],
    cena: [
      "Opción 1: Pechuga de pollo + Hortalizas A y B asadas (al horno o wok).",
      "Opción 2: Pescado (merluza o lomitos de atún) + Hortalizas A y B mixtas (brócoli/zanahoria/morrón/champiñones).",
    ],
  },

  // DÍA 27
  {
    desayuno: ["Opción 1: Fruta + huevos revueltos + almendras.", "Opción 2: Tazón de avena + yogur descremado + 1/2 fruta."],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales sin azúcar + nueces."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/4 plato quinoa o arroz integral + 1/2 plato Hortalizas A y B.",
      "Opción 2: Omelette con queso descremado + 1/4 plato legumbres + 1/2 plato Hortalizas A y B.",
    ],
    merienda: ["Opción 1: 1 fruta + frutos secos + porción de queso descremado.", "Opción 2: Tortilla + queso descremado + tomate."],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Pollo al horno + 1/4 plato arroz integral + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 28
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso untable + tomate + palta.",
      "Opción 2: Tazón de avena con leche de almendras + frutos rojos + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: Barrita sin azúcar/proteica.", "Opción 2: Yogur firme descremado."],
    almuerzo: [
      "Opción 1: Ensalada arroz integral + lentejas + zanahoria + huevo duro + limón y aceite de oliva.",
      "Opción 2: Pollo + verduras a elección + oliva.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena + huevo + vainilla + coco + 1/2 banana).",
      "Opción 2: Tostadas integrales + queso firme descremado + huevo.",
    ],
    cena: [
      "Opción 1: Milanesas de pollo al horno + ensalada (espinaca, tomate, champiñones).",
      "Opción 2: Carne magra + 1/2 plato Hortalizas A y B.",
    ],
  },

  // DÍA 29
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Tazón de avena con leche de almendras + frutos rojos + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: 1/2 fruta + 5 medias nueces."],
    almuerzo: [
      "Opción 1: Pollo + 1/4 plato arroz integral + ensalada Hortalizas A y B + aceite de oliva.",
      "Opción 2: Wok Hortalizas A y B + (carne o pollo al horno) + 1/2 Hortalizas C.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos + 1/2 taza avena + vainilla) + fruta + nueces.",
      "Opción 2: Trozos de queso descremado + 1 fruta + almendras.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/2 plato Hortalizas A y B.",
      "Opción 2: Pollo salteado + Hortalizas A y B a la plancha o al horno.",
    ],
  }, // :contentReference[oaicite:9]{index=9}

  // DÍA 30
  {
    desayuno: [
      "Opción 1: 1 fruta + trozo de queso firme descremado + frutos secos.",
      "Opción 2: Revuelto de huevo + sándwich integral con queso firme descremado y jamón natural.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta pequeña + puñado de cereal."],
    almuerzo: [
      "Opción 1: Pechuga de pollo + 1/2 plato hortalizas + 1/4 plato papas + Hortalizas A y B con oliva.",
      "Opción 2: Pescado natural + 1/2 plato Hortalizas A y B + 1/4 plato papas con oliva.",
    ],
    merienda: [
      "Opción 1: Omelette con queso descremado + jamón natural + tomate + 1/2 fruta.",
      "Opción 2: Tostada integral + mantequilla de maní + banana + huevo revuelto.",
    ],
    cena: [
      "Opción 1: Pollo al horno + 1/4 plato hidratos a elección + Hortalizas A y B.",
      "Opción 2: Carne al horno + 1/4 plato hidratos a elección + Hortalizas A y B.",
    ],
  }, // :contentReference[oaicite:10]{index=10}
];

// Andrea (Usuario A) — Día 1 = 2026-02-19
const ANDREA_START = "2026-02-19";

const ANDREA_DAY_TEMPLATES = [
  // DÍA 1
  {
    desayuno: [
      "Opción 1: Tortilla (huevos) + tomate cortado + queso descremado + jamón natural + 1/2 fruta.",
      "Opción 2: Tostadas + palta + queso descremado firme + rodajas de tomate + chorrito de oliva + exprimido de naranja.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: 1 fruta + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha + ensalada (lechuga, pepino y tomate) + 1/4 plato arroz integral + 1 cda grande aceite de oliva.",
      "Opción 2: Huevos + 1/2 plato arroz blanco + 1/4 plato hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Yogur descremado + frutos secos + 1 fruta.",
      "Opción 2: Tostadas pan integral + queso firme descremado + 1 fruta + 1 cda de miel.",
    ],
    cena: [
      "Opción 1: Pollo al horno/a la plancha + hortalizas A y B + 1/4 plato arroz integral + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado (merluza o lomitos de atún) + hortalizas A y B + 1/2 plato papas al horno + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 2
  {
    desayuno: [
      "Opción 1: Tostadas pan blanco + palta + tomate + huevos revueltos + 1 fruta.",
      "Opción 2: Yogur descremado + avena instantánea/cereales sin azúcar + frutos rojos + 1 trozo queso firme descremado + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: Yogur.", "Opción 2: Puñado de frutos secos + fruta."],
    almuerzo: [
      "Opción 1: Carne al horno + hortalizas A y B + 1/4 plato arroz integral + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Tacos integrales de pollo con palta + hortalizas A y B (cebolla, morrón, zanahoria cocidas 15 min) + unas papas + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tostada pan integral + queso firme descremado + mermelada + almendras + 1 fruta.",
      "Opción 2: Batido de proteína + 1 fruta + nueces + cereales.",
    ],
    cena: [
      "Opción 1: Carne magra + 1/4 papas + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado al horno + 1/2 plato arroz blanco + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 3
  {
    desayuno: [
      "Opción 1: Tostadas pan blanco + palta + queso descremado + jamón natural + rodajas de tomate + 1/2 fruta.",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada + 1 fruta + 1 cda pasta de maní.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Yogur descremado + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Carne al horno + lechuga y tomate + 1/2 plato papas + limón + 1 cda grande aceite de oliva.",
      "Opción 2: Huevo + 1/2 plato arroz integral + 1/2 plato hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Yogur griego/descremado + puñado de cereales + almendras + 1/2 fruta.",
      "Opción 2: Huevo revuelto + frutos secos + exprimido de naranja o licuado de frutas.",
    ],
    cena: [
      "Opción 1: Pescado + espárragos o hortalizas A y B + 1/2 plato batata/papa al horno + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo + 1/2 plato quinoa o legumbres + 1/2 plato hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
  },

  // DÍA 4
  {
    desayuno: [
      "Opción 1: Tazón de yogurt + 1 fruta + avena instantánea + nueces.",
      "Opción 2: Huevos revueltos + 1 fruta + nueces + 1 cda pasta de maní + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta + 5 nueces o almendras."],
    almuerzo: [
      "Opción 1: Pechuga de pollo al horno + hortalizas A y B + 1/2 plato batata + 1 cda grande aceite de oliva.",
      "Opción 2: Carne al horno + hortalizas A y B + 1/2 plato legumbres + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Omelette con queso, jamón y tomate + exprimido de naranja o licuado de frutas.",
      "Opción 2: Tostada pan integral + mantequilla de maní + banana en rodajas.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo al horno + 1/2 plato arroz blanco + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 5
  {
    desayuno: [
      "Opción 1: Tostadas pan blanco + palta + queso fresco + huevos revueltos + 1/2 fruta.",
      "Opción 2: Panqueques (avena, huevo, vainillina, coco rallado, 1 banana) + exprimido de naranja o licuado de frutas.",
    ],
    mediaManana: ["Opción 1: 1 barrita de cereal.", "Opción 2: Yogur descremado + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Omelette con queso descremado + 1/2 plato arroz blanco + hortalizas A y B + 1 cda aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + trozos de queso descremado o huevos + frutos secos + 1/2 plato arroz integral o legumbres + 2 cdas aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos, 1/2 taza avena, vainilla) + fruta + nueces.",
      "Opción 2: Tostadas con queso firme + palta + huevo + exprimido de naranja o licuado de frutas.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/4 plato hidrato a elección + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + 1/2 plato hidrato a elección + huevo duro + 2 cdas grandes aceite de oliva.",
    ],
  },

  // DÍA 6
  {
    desayuno: [
      "Opción 2: Pan integral + 1 fruta + huevos revueltos + almendras.",
      "Opción 3: Tazón de avena + yogurt descremado + 1 fruta + nueces/almendras + exprimido de naranja.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales sin azúcar + almendras."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/4 plato quinoa o arroz integral + 1/2 plato hortalizas A y B + 1 cda aceite de oliva.",
      "Opción 2: Tacos de cerdo (corte magro) + verduras salteadas (cebolla/morrón/zanahoria cocidas 15 min) + 1 palta.",
    ],
    merienda: [
      "Opción 1: 1 fruta + nueces + porción de queso descremado.",
      "Opción 2: Huevos revueltos + exprimido de naranja + frutos secos.",
    ],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinacas, tomate y champiñones) + 1 cda aceite de oliva.",
      "Opción 2: Pollo al horno + 1/2 plato hidrato a elección + 1/2 plato hortalizas A y B + 1 cda aceite de oliva.",
    ],
  },

  // DÍA 7
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso descremado + tomate + 1/2 palta + 1/2 fruta.",
      "Opción 2: Tazón de avena + yogurt descremado + frutos rojos + nueces/almendras + 2 cdas miel.",
    ],
    mediaManana: ["Opción 1: Barrita proteica.", "Opción 2: Fruta + 5 almendras."],
    almuerzo: [
      "Opción 1: Omelette de queso descremado + 1/2 plato hortalizas C + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo + 1/2 plato arroz blanco + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena, huevo, vainilla, coco, 1/2 banana).",
      "Opción 2: Batido de proteína + fruta + nueces + 2 cdas miel + 1 cda pasta de maní.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato legumbres + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Carne magra + 1/2 plato hidrato a elección + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 8
  {
    desayuno: [
      "Opción 1: Tostadas integrales con palta + tomate + huevos revueltos + fruta.",
      "Opción 2: Tostadas integrales con palta + tomate + queso firme descremado + exprimido/licuado + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Yogur + 5 medias nueces."],
    almuerzo: [
      "Opción 1: Pollo + 1/2 plato hidrato a elección + ensalada hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + (carne o pollo al horno) + 1/2 plato hidrato a elección + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos, 1/2 taza avena, vainilla) + fruta + nueces.",
      "Opción 2: Tazón de avena + yogur + 1 fruta + almendras + 2 cdas miel + 1 cda pasta de maní.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/4 plato arroz blanco + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo salteado + hortalizas A y B + 1/2 plato cereal + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 9
  {
    desayuno: [
      "Opción 1: Tazón de yogurt descremado + cereales sin azúcar + 1 fruta.",
      "Opción 2: Revuelto de huevo + sándwich integral con queso firme descremado y jamón natural + 1 fruta.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Pechuga de pollo + 1/2 plato papa/batata + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado natural + 1/2 plato arroz blanco + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Omelette con queso descremado + jamón natural + tomate + 1/2 fruta.",
      "Opción 2: Tostada pan integral + mantequilla de maní + banana + huevo revuelto + exprimido de 2 naranjas.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Carne al horno + 1/2 plato hidrato a elección + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 10
  {
    desayuno: [
      "Opción 1: Tostadas de arroz + queso firme descremado + mermelada light + 1 fruta.",
      "Opción 2: Panqueques (avena, huevo, vainillina, coco, 1/2 banana) + miel y mantequilla de maní.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Yogur descremado + cereales."],
    almuerzo: [
      "Opción 1: Pollo o huevo duro + 1/4 arroz integral + lechuga/tomate/zanahoria + 2 cdas grandes aceite de oliva.",
      "Opción 2: Milanesa pollo/carne + 1/2 plato papas/batatas + ensalada hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Yogur griego/descremado + puñado de cereales + 1 fruta.",
      "Opción 2: Tostadas pan blanco + queso descremado + mermelada light + 2 huevos revueltos + 1 fruta.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato quinoa + 1/2 plato hortalizas A + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo + 1/4 plato arroz integral + 1/2 plato hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
  },

  // DÍA 11
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos + 1/2 fruta.",
      "Opción 2: Yogur descremado + avena instantánea + frutos rojos (o 1 fruta) + nueces/almendras + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: Yogur.", "Opción 2: Puñado de frutos secos + fruta."],
    almuerzo: [
      "Opción 1: Omelette con queso descremado + jamón + 1/2 plato arroz + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo o carne + hortalizas A y B + 1/2 plato papas + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tostada pan integral + queso untable + almendras + 1/2 fruta.",
      "Opción 2: Batido de proteína + 1 cda miel + 1 fruta + frutos secos.",
    ],
    cena: [
      "Opción 1: Carne magra + hortalizas A y B + 1/4 plato cereal + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado al horno + hortalizas A y B + 1/4 plato legumbres + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 12
  {
    desayuno: [
      "Opción 1: Omelette (huevos) + queso descremado + jamón natural + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso descremado + palta + 1 fruta.",
    ],
    mediaManana: ["Opción 1: Yogur descremado + puñado de cereales.", "Opción 2: 1 fruta + nueces."],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha con queso derretido + 1/2 plato papas/batatas + ensalada (lechuga, cebolla y tomate) + 1 cda grande aceite de oliva.",
      "Opción 2: Huevo + 1/2 plato quinua + hortalizas A y B salteadas + 1 cda grande aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Yogur descremado + avena instantánea + frutos secos + 1/2 fruta.",
      "Opción 2: Tostadas pan integral + queso firme descremado + palta + exprimido/licuado.",
    ],
    cena: [
      "Opción 1: Pechuga de pollo + hortalizas A y B asadas + 1/4 plato cereal + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado (merluza/atún) + hortalizas A y B mixtas + 1/2 plato papa + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 13
  {
    desayuno: [
      "Opción 1: Fruta + huevos revueltos + almendras.",
      "Opción 2: Tazón de avena + yogur descremado + 1 fruta + nueces + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales sin azúcar + almendras."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/2 plato quinoa o arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Omelette con queso descremado + 1/2 plato arroz blanco + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: 1 fruta + frutos secos + porción de queso descremado o huevos revueltos.",
      "Opción 2: Omelette con queso y tomate + exprimido/licuado + almendras.",
    ],
    cena: [
      "Opción 1: Milanesas de carne al horno + 1/4 plato legumbres + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo al horno + 1/2 plato arroz integral + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 14
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso untable + tomate + palta.",
      "Opción 2: Tazón de avena + yogur descremado + frutos rojos + nueces/almendras + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: Barrita proteica.", "Opción 2: Yogur firme descremado + 5 almendras."],
    almuerzo: [
      "Opción 1: Ensalada arroz integral + lentejas + zanahoria + huevos + limón + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo + verduras a elección + oliva + 1/2 plato papas/batatas + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena, huevo, vainilla, coco, 1/2 banana) + mantequilla de maní.",
      "Opción 2: Tostadas pan integral + queso firme descremado + huevos + 1 fruta.",
    ],
    cena: [
      "Opción 1: Milanesas de pollo al horno + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Carne magra + 1/2 plato cereal + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 15
  {
    desayuno: [
      "Opción 1: Tortilla (huevos) + espinacas cocidas o tomate + queso descremado + jamón natural + 1/2 fruta.",
      "Opción 2: Tostadas pan blanco + palta + queso firme descremado + tomate + chorrito de oliva + 1 fruta.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Yogur + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Pechuga de pollo a la plancha + ensalada (lechuga, pepino y tomate) + 1/2 plato arroz integral + 1 cda grande aceite de oliva.",
      "Opción 2: Huevos + 1/2 plato hidrato a elección + vegetales salteados + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Yogur descremado + frutos secos + 1/2 fruta.",
      "Opción 2: Tostadas pan blanco + queso firme descremado + 1 fruta.",
    ],
    cena: [
      "Opción 1: Pollo al horno/a la plancha + 1/4 plato hidrato a elección + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado (merluza/atún) + 1/2 plato hidrato a elección + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 16
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Yogur descremado + avena/cereales sin azúcar + frutos secos + 1 fruta.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Puñado de frutos secos + fruta."],
    almuerzo: [
      "Opción 1: Carne al horno + hortalizas A y B + 1/2 plato papa/batata + 1 cda grande aceite de oliva.",
      "Opción 2: Tacos de pollo + palta + hortalizas A y B (cebolla/morrón/zanahoria cocidas 15 min) + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tostada pan integral + queso firme descremado + almendras + 1/2 fruta.",
      "Opción 2: Batido de proteína + 1 fruta + nueces + 1 cda miel.",
    ],
    cena: [
      "Opción 1: Carne magra + hortalizas A y B + 1/4 plato arroz integral + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado al horno + hortalizas A y B + 1/2 plato hidrato a elección + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 17
  {
    desayuno: [
      "Opción 1: Tostada integral + palta + queso descremado + jamón natural + tomate.",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada light + 1 fruta.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Yogur descremado + puñado de cereales."],
    almuerzo: [
      "Opción 1: Carne al horno + lechuga y tomate + 1/2 plato quinoa + limón + 1 cda grande aceite de oliva.",
      "Opción 2: Huevos + 1/2 plato arroz integral + 1/2 plato hortalizas A y B + 20 almendras o 15 mariposas de nueces.",
    ],
    merienda: [
      "Opción 1: Yogur griego/descremado + puñado de cereales + 1/2 fruta.",
      "Opción 2: 1 fruta + frutos secos + queso descremado o huevos revueltos.",
    ],
    cena: [
      "Opción 1: Pescado + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo + 1/2 plato hidrato a elección + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 18
  {
    desayuno: [
      "Opción 1: Tazón de yogurt + avena instantánea + 1 fruta + almendras.",
      "Opción 2: Huevos revueltos + 1 fruta + nueces + puñado de cereales + 1 cda miel (puede ir en infusión).",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Fruta + 5 nueces o almendras."],
    almuerzo: [
      "Opción 1: Pechuga de pollo al horno + 1/2 plato papas/batatas + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Carne al horno + hortalizas A y B + 1/2 plato arroz integral + 2 cdas grandes aceite de oliva.",
    ],
    merienda: ["Opción 1: Omelette con queso, jamón y tomate + palta.", "Opción 2: Tostada pan integral + mantequilla de maní + banana + huevos revueltos."],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo al horno + 1/2 plato arroz blanco + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 19
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + queso fresco + huevos revueltos.",
      "Opción 2: Panqueques (avena, huevo, vainillina, coco, 1 banana) + 1 cda miel + mantequilla de maní.",
    ],
    mediaManana: ["Opción 1: 1 barrita de cereal.", "Opción 2: Yogur descremado + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Omelette con queso descremado + 1/4 plato cereal + hortalizas A y B + 2 cdas grandes aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + queso descremado + 1/2 plato arroz integral + puñado grande frutos secos + huevo.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos, 1/2 taza avena, vainilla) + 1/2 fruta + nueces.",
      "Opción 2: Tostadas con queso firme + palta + huevos + fruta.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/4 plato hidrato a elección + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + 1/2 plato hidrato a elección + huevo duro + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 20
  {
    desayuno: [
      "Opción 2: Fruta + huevos revueltos + almendras.",
      "Opción 3: Tazón de avena + yogurt descremado + 1/2 fruta + nueces/almendras + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Yogur + 5 nueces."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/2 plato quinoa o arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Tacos de cerdo (corte magro) + verduras salteadas (cebolla/morrón/zanahoria cocidas 15 min) + 2 cdas grandes aceite de oliva.",
    ],
    merienda: ["Opción 1: 1/2 fruta + nueces + porción de queso descremado.", "Opción 2: Huevos revueltos + 1 fruta + frutos secos."],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo al horno + 1/2 plato legumbres + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 21
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso descremado + tomate + palta.",
      "Opción 2: Tazón de avena + yogurt descremado + frutos rojos + nueces/almendras + 1 cda miel.",
    ],
    mediaManana: ["Opción 1: Barrita sin azúcar o proteica.", "Opción 2: Yogur firme descremado + puñado de frutos secos."],
    almuerzo: [
      "Opción 1: Omelette queso descremado + 1/2 plato hortalizas C + 1/4 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo + 1/2 plato arroz integral + 1/4 plato hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Panqueques (avena, huevo, vainilla, coco, 1/2 banana).",
      "Opción 3: Batido de proteína + fruta + nueces + 1 cda pasta de maní.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/2 plato papa/batata + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Carne magra + 1/2 plato hidrato a elección + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 22
  {
    desayuno: [
      "Opción 1: Fruta + nueces + huevos revueltos.",
      "Opción 2: Tostadas integrales + palta + tomate + queso firme descremado + 1 fruta.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: 1 fruta + 10 medias nueces."],
    almuerzo: [
      "Opción 1: Pollo + 1/2 plato hidrato a elección + ensalada hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + (carne o pollo al horno) + 1/2 plato hortalizas C + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos, 1/2 taza avena, vainilla) + 1/2 fruta + 5 nueces.",
      "Opción 2: Trozos de queso descremado + 1 fruta + almendras + exprimido de 2 naranjas.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/4 plato quinoa/cereal + 1/2 plato hortalizas A y B.",
      "Opción 2: Pollo salteado + hortalizas A y B + 1/4 plato arroz integral + 2 cdas grandes aceite de oliva.",
    ],
  },

  // DÍA 23
  {
    desayuno: [
      "Opción 1: Tazón de yogurt descremado + cereales sin azúcar + 1 fruta.",
      "Opción 2: Revuelto de huevo + sándwich integral con queso firme descremado + jamón natural + exprimido/licuado.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta pequeña + puñado de cereal."],
    almuerzo: [
      "Opción 1: Pechuga de pollo + 1/2 plato hortalizas C + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado natural + 1/2 plato arroz blanco + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Omelette con queso descremado + jamón natural + tomate + 1/2 fruta.",
      "Opción 2: Tostada pan integral + mantequilla de maní + banana + huevos revueltos.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Carne al horno + 1/2 plato hidrato a elección + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 24
  {
    desayuno: [
      "Opción 1: Panqueques (avena, huevo, vainillina, coco, 1/2 banana).",
      "Opción 2: Tostadas de arroz + queso firme descremado + mermelada light + 1 fruta.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Yogur descremado."],
    almuerzo: [
      "Opción 1: Ensalada (pollo o huevo duro) + lechuga/tomate/zanahoria + 1/2 plato arroz integral + 1 cda grande aceite de oliva.",
      "Opción 2: Milanesa pollo/carne + ensalada hortalizas A y B + 1/2 plato arroz blanco + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Yogur griego/descremado + puñado de cereales + 1/2 fruta.",
      "Opción 2: Tostadas pan integral + queso descremado + mermelada light + huevos revueltos.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato cereal + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pechuga de pollo + 1/4 plato legumbres + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 25
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos.",
      "Opción 2: Yogur descremado + avena instantánea + frutos rojos (o 1 fruta) + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: Fruta.", "Opción 2: Puñado de frutos secos + fruta."],
    almuerzo: [
      "Opción 1: Omelette queso descremado + jamón + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo o carne + hortalizas A y B + 1/2 plato papas + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tostada pan integral + queso untable + almendras + 1/2 fruta.",
      "Opción 2: Batido de proteína + 1 fruta + miel + nueces.",
    ],
    cena: [
      "Opción 1: Carne magra + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado al horno + 1/2 plato legumbres + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
  },

  // DÍA 26
  {
    desayuno: [
      "Opción 1: Omelette (huevos) + queso descremado + jamón natural + 1/2 fruta.",
      "Opción 2: Tostadas integrales + queso descremado + palta + 1 fruta.",
    ],
    mediaManana: ["Opción 1: Yogur descremado.", "Opción 2: 1 fruta + almendras."],
    almuerzo: [
      "Opción 1: Pechuga pollo a la plancha con queso derretido + 1/2 plato arroz (blanco o integral) + ensalada (lechuga, cebolla y tomate) + 1 cda grande aceite de oliva.",
      "Opción 2: Huevo + 1/2 plato quinua + hortalizas A y B salteadas + 1 cda grande aceite de oliva.",
    ],
    merienda: ["Opción 1: Yogur descremado + avena instantánea + frutos secos + 1/2 fruta.", "Opción 2: Tostadas pan integral + queso firme descremado + palta + 1 fruta."],
    cena: [
      "Opción 1: Pechuga de pollo + hortalizas A y B asadas + 1/4 plato papa + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado (merluza/atún) + hortalizas A y B mixtas + 1/4 plato batatas + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 27
  {
    desayuno: ["Opción 1: Fruta + huevos revueltos + almendras.", "Opción 2: Tazón de avena + yogur descremado + 1 fruta + 1 cda miel."],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Puñado de cereales + almendras."],
    almuerzo: [
      "Opción 1: Pescado a elección + 1/2 plato quinoa o arroz integral + 1/4 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Omelette queso descremado + 1/2 plato legumbres + 1/4 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
    merienda: ["Opción 1: 1 fruta + frutos secos + porción queso descremado.", "Opción 2: Omelette con queso y tomate + fruta + nueces."],
    cena: [
      "Opción 1: Milanesas de carne al horno + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo al horno + 1/4 plato arroz integral + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 28
  {
    desayuno: [
      "Opción 1: Tostadas integrales + queso untable + tomate + palta.",
      "Opción 2: Tazón de avena + leche de almendras + frutos rojos + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: Barrita sin azúcar o proteica.", "Opción 2: Yogur firme descremado + almendras."],
    almuerzo: [
      "Opción 1: Ensalada: 1/2 plato arroz integral + lentejas + zanahoria + huevos + limón + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo + verduras a elección + 1/2 plato arroz blanco + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tostadas pan integral + queso firme descremado + huevo.",
      "Opción 2: Panqueques (avena, huevo, vainilla, coco, 1 banana) + pasta de maní + miel.",
    ],
    cena: [
      "Opción 1: Milanesas pollo al horno + ensalada (espinacas, tomate y champiñones) + 1 cda grande aceite de oliva.",
      "Opción 2: Carne magra + 1/4 plato legumbres + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 29
  {
    desayuno: [
      "Opción 1: Tostadas integrales + palta + tomate + huevos revueltos + 1/2 fruta.",
      "Opción 2: Tazón de avena + yogur descremado + 1 fruta + nueces/almendras.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: 1 fruta + nueces."],
    almuerzo: [
      "Opción 1: Pollo + 1/4 plato arroz integral + ensalada hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Wok hortalizas A y B + (carne o pollo al horno) + 1/2 plato arroz blanco + hortalizas C + 1 cda grande aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Tortilla de avena (huevos, 1/2 taza avena, vainilla) + fruta + nueces.",
      "Opción 2: Trozos de queso descremado + fruta + almendras + exprimido de naranja.",
    ],
    cena: [
      "Opción 1: Lomo salteado (cebolla y tomate) + 1/4 plato arroz integral + 1/2 plato hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pollo salteado + hortalizas A y B + 1/2 plato papas + 1 cda grande aceite de oliva.",
    ],
  },

  // DÍA 30
  {
    desayuno: [
      "Opción 1: Tazón de yogurt descremado + cereales sin azúcar + 1 fruta.",
      "Opción 2: Revuelto de huevo + sándwich integral con queso firme descremado y jamón natural + 1 fruta.",
    ],
    mediaManana: ["Opción 1: 1 fruta.", "Opción 2: Fruta pequeña + puñado de cereal."],
    almuerzo: [
      "Opción 1: Pechuga de pollo + 1/2 plato hortalizas C + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Pescado natural + 1/2 plato arroz integral + hortalizas A y B + 2 cdas grandes aceite de oliva.",
    ],
    merienda: [
      "Opción 1: Omelette con queso descremado + jamón natural + tomate + 1/2 fruta.",
      "Opción 2: Tostada pan integral + mantequilla de maní + banana + huevos revueltos.",
    ],
    cena: [
      "Opción 1: Pescado al horno + 1/4 plato arroz integral + hortalizas A y B + 1 cda grande aceite de oliva.",
      "Opción 2: Carne al horno + 1/4 plato legumbres + hortalizas A y B + 1 cda grande aceite de oliva.",
    ],
  },
];

export const PLAN = {
  A: {
    startDate: ANDREA_START,
    days: buildDaysFromStart(ANDREA_START, ANDREA_DAY_TEMPLATES),
  },
  B: {
    startDate: EXEQUIEL_START,
    days: buildDaysFromStart(EXEQUIEL_START, EXEQUIEL_DAY_TEMPLATES),
  },
};