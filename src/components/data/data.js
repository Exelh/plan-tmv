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
const EXEQUIEL_START = "2026-04-15";
 
const EXEQUIEL_DAY_TEMPLATES = [
  // ─── SEMANA 1 (Días 1–7) ───────────────────────────────────────────────────
 
  // DÍA 1
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + palta/fruta)
      "Tostadas de pan integral o salvado + rebanadas de queso firme descremado + palta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Pollo + hidrato (1 de 4 veces)
      "Pechuga de pollo a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral (cocido) + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 1 (tostadas + queso firme + frutos secos)
      "Rebanadas de pan integral + queso firme descremado + frutos secos (25 g) + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (1 de 2v) + hidrato (1 de 2v)
      "Pechuga de pollo al horno (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato batata al horno + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 2
  {
    desayuno: [
      // Opción 3 (huevos + fruta + frutos secos)
      "3 huevos revueltos + 1 fruta mediana + 25 g frutos secos (nueces/almendras) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Puñado de cereales sin azúcar (40 g) + almendras (25 g).",
    ],
    almuerzo: [
      // Pescado + hidrato (2 de 4 veces)
      "Merluza o filete de pescado a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato quinoa (cocida) + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 2 (huevos + fruta + frutos secos)
      "3 huevos (como quieras, nunca fritos) + 1 fruta mediana + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (1 de 2v) — sin hidrato
      "Carne magra a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 3
  {
    desayuno: [
      // Opción 2 (galletas de arroz + queso untable + fruta + frutos secos)
      "3 galletas de arroz + queso untable descremado + 1/2 fruta + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Yogur firme descremado (150-200 g) + 1 fruta mediana.",
    ],
    almuerzo: [
      // Legumbres + arroz + queso (1 de 2v) + hidrato (3 de 4 veces)
      "3 huevos duros + 1/4 plato lentejas o garbanzos (cocidos) + 1/4 plato arroz integral (cocido) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 3 (yogur + granola + 1/2 fruta)
      "Yogur light o descremado natural (150-200 g) + 40 g granola o cereal sin azúcar + 1/2 fruta + café/té/mate sin azúcar.",
    ],
    cena: [
      // Merluza/atún (1v semana) — sin hidrato
      "Merluza al horno o lomitos de atún al natural (200-250 g) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 4
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + fruta)
      "2 tostadas de pan integral + rebanadas de queso firme descremado + 1 fruta mediana + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Omelette + hidrato (4 de 4 veces)
      "Omelette de 3 huevos con queso firme descremado (50 g) + 1/2 plato Hortalizas A y B + 1/4 plato papa al horno + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 4 (galletas de arroz + queso untable + fruta)
      "2 galletas de arroz + queso untable descremado + 1 fruta mediana + café/té/mate sin azúcar.",
    ],
    cena: [
      // Huevos + cereal (1 de 2v) — sin hidrato
      "3 huevos a la plancha o duros + 1/4 plato quinoa o legumbres (cocidas) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 5
  {
    desayuno: [
      // Opción 3 (huevos + fruta + frutos secos)
      "3 huevos revueltos + 1 fruta mediana + 25 g nueces o almendras + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "2 galletas de arroz con queso firme descremado.",
    ],
    almuerzo: [
      // Pollo — sin hidrato (3 de 4 veces ya usadas)
      "Pechuga de pollo a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 1 (tostadas + queso firme + frutos secos)
      "Rebanadas de pan integral + queso firme descremado + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (2 de 2v) + hidrato (2 de 2v)
      "Carne magra al horno (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral (cocido) + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 6
  {
    desayuno: [
      // Opción 2 (galletas de arroz + queso untable + fruta + frutos secos)
      "3 galletas de arroz + queso untable descremado + 1 fruta mediana + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Legumbres + arroz + huevo (2 de 2v) — sin hidrato extra (ya completadas las 4)
      "3 huevos revueltos + 1/4 plato garbanzos o lentejas (cocidos) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 2 (huevos + fruta + frutos secos)
      "3 huevos (revueltos o duros) + 1 fruta mediana + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Huevos + cereal (2 de 2v) — sin hidrato
      "3 huevos en omelette + 1/4 plato quinoa (cocida) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 7
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + palta)
      "2 tostadas de pan integral + rebanadas de queso firme descremado + 1/2 palta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Yogur firme descremado (150-200 g) + 1 fruta mediana.",
    ],
    almuerzo: [
      // Pescado — sin hidrato
      "Filete de pescado al horno (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 3 (yogur + granola + 1/2 fruta)
      "Yogur light o descremado natural (150-200 g) + 40 g cereales sin azúcar + 1/2 fruta + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (2 de 2v) — sin hidrato
      "Pollo al horno sin piel (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // ─── SEMANA 2 (Días 8–15) ─────────────────────────────────────────────────
 
  // DÍA 8
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + palta/fruta)
      "2 tostadas de pan integral + rebanadas de queso firme descremado + palta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Pollo + hidrato (1 de 4 veces)
      "Pechuga de pollo a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral (cocido) + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 1 (tostadas + queso firme + frutos secos)
      "Rebanadas de pan integral + queso firme descremado + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (1 de 2v) + hidrato (1 de 2v)
      "Carne magra a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato papa al horno + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 9
  {
    desayuno: [
      // Opción 3 (huevos + fruta + frutos secos)
      "3 huevos revueltos + 1 fruta mediana + 25 g nueces o almendras + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "40 g cereales sin azúcar + 25 g almendras.",
    ],
    almuerzo: [
      // Omelette + hidrato (2 de 4 veces)
      "Omelette de 3 huevos con queso firme (50 g) + 1/2 plato Hortalizas A y B + 1/4 plato quinoa (cocida) + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 2 (huevos + fruta + frutos secos)
      "3 huevos (a gusto, nunca fritos) + 1 fruta mediana + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Merluza/atún (1v semana 2) — sin hidrato
      "Lomitos de atún al natural o merluza al horno (200-250 g) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 10
  {
    desayuno: [
      // Opción 2 (galletas de arroz + queso untable + fruta + frutos secos)
      "3 galletas de arroz + queso untable descremado + 1/2 fruta + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Yogur firme descremado (150-200 g) + 1 fruta mediana.",
    ],
    almuerzo: [
      // Pescado + hidrato (3 de 4 veces)
      "Filete de pescado a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato batata al horno + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 3 (yogur + granola + 1/2 fruta)
      "Yogur light o descremado natural (150-200 g) + 40 g granola o cereal sin azúcar + 1/2 fruta + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (1 de 2v) — sin hidrato
      "Pechuga de pollo al horno sin piel (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 11
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + fruta)
      "2 tostadas de pan integral + rebanadas de queso firme descremado + 1 fruta mediana + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Legumbres + arroz + queso (1 de 2v) + hidrato (4 de 4 veces)
      "3 huevos duros + 1/4 plato lentejas (cocidas) + 1/4 plato arroz integral (cocido) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 4 (galletas + queso untable + fruta)
      "2 galletas de arroz + queso untable descremado + 1 fruta mediana + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (2 de 2v) + hidrato (2 de 2v)
      "Carne magra al horno (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1/4 plato quinoa (cocida) + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 12
  {
    desayuno: [
      // Opción 3 (huevos + fruta + frutos secos)
      "3 huevos revueltos + 1 fruta mediana + 25 g frutos secos (nueces/almendras) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Pollo — sin hidrato
      "Pechuga de pollo a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 1 (tostadas + queso firme + frutos secos)
      "Rebanadas de pan integral + queso firme descremado + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Huevos + cereal (1 de 2v) — sin hidrato
      "3 huevos a la plancha o en omelette + 1/4 plato garbanzos o lentejas (cocidos) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 13
  {
    desayuno: [
      // Opción 2 (galletas de arroz + queso untable + fruta + frutos secos)
      "3 galletas de arroz + queso untable descremado + 1 fruta mediana + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Yogur firme descremado (150-200 g) + 1 fruta mediana.",
    ],
    almuerzo: [
      // Legumbres + huevo (2 de 2v) — sin hidrato
      "3 huevos revueltos + 1/4 plato garbanzos o lentejas (cocidos) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 2 (huevos + fruta + frutos secos)
      "3 huevos (como quieras, nunca fritos) + 1 fruta mediana + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (2 de 2v) — sin hidrato
      "Pollo al horno sin piel (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 14
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + palta)
      "2 tostadas de pan integral + rebanadas de queso firme descremado + 1/2 palta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "Fruta mediana (100-130 g).",
    ],
    almuerzo: [
      // Pescado — sin hidrato
      "Filete de pescado al horno (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 3 (yogur + granola + 1/2 fruta)
      "Yogur light o descremado natural (150-200 g) + 40 g cereales sin azúcar + 1/2 fruta + café/té/mate sin azúcar.",
    ],
    cena: [
      // Huevos + cereal (2 de 2v) — sin hidrato
      "3 huevos en omelette + 1/4 plato quinoa (cocida) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
 
  // DÍA 15
  {
    desayuno: [
      // Opción 1 (tostadas + queso firme + fruta)
      "2 tostadas de pan integral + rebanadas de queso firme descremado + 1 fruta mediana + mermelada light (opcional, muy poca) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "2 galletas de arroz con queso firme descremado.",
    ],
    almuerzo: [
      // Pollo — sin hidrato
      "Pechuga de pollo a la plancha (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
    merienda: [
      // Opción 1 (tostadas + queso firme + frutos secos)
      "Rebanadas de pan integral + queso firme descremado + 25 g frutos secos + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja — ya usadas las 2 porciones semanales (se repite como excepción del día 15)
      // En realidad día 15 corresponde a semana 3 inicio — puede tratarse como pollo
      "Pechuga de pollo al horno sin piel (200-250 g en crudo) + 1/2 plato Hortalizas A y B + 1 cda aceite de oliva en crudo.",
    ],
  },
];

// Andrea (Usuario A) — Día 1 = 2026-03-28
const ANDREA_START = "2026-04-15";
 
const ANDREA_DAY_TEMPLATES = [
  // ─── SEMANA 1 (Días 1–7) ────────────────────────────────────────────────────
 
  // DÍA 1
  {
    desayuno: [
      // Opción 1 (3v/semana): tostadas + queso firme + fruta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 150-200 g fruta (1-2 frutas) + mermelada light opcional (poca cantidad) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos (nueces o almendras naturales sin tostar).",
    ],
    almuerzo: [
      // Pollo (1 de 2v) + 1/2 plato hidrato
      "150-180 g pechuga de pollo a la plancha + 1/2 plato arroz integral cocido + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1 (3v/semana): pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (1 de 2v) + 1/4 plato hidrato
      "150-180 g pechuga de pollo al horno + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 2
  {
    desayuno: [
      // Opción 3 (2v/semana): tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + esencia de vainilla + endulzante no calórico opcional (mezclar todo y cocinar a fuego bajo) + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "50 g cereales sin azúcar + 25 g almendras naturales sin tostar.",
    ],
    almuerzo: [
      // Carne (1v) + 1/2 plato hidrato (Hortalizas C)
      "150-180 g carne al horno + 200 g papas al horno (1/2 plato bien colmado) + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 2 (2v/semana): tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + 150-200 g fruta + vainilla (dulce) o 1/2 palta/verduras (salada) + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (1 de 2v) + 1/4 plato hidrato (Hortalizas C)
      "150-180 g carne magra a la plancha + 1/2 plato Hortalizas A y B + 200 g papas al horno + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 3
  {
    desayuno: [
      // Opción 2 (2v/semana): galletas de arroz + queso untable + frutos secos + fruta
      "3 galletas de arroz + queso untable light o descremado + 25 g nueces o almendras naturales + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150 g yogur firme descremado sin endulzar.",
    ],
    almuerzo: [
      // Pescado (1v) + 1/2 plato hidrato (Hortalizas C)
      "150-180 g merluza o filete de pescado a la plancha + 200 g batata o papa al horno (1/2 plato bien colmado) + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 3 (2v/semana): yogur + granola
      "150 g yogur light o descremado sin endulzar + 50 g granola o cereal sin azúcar + café/té/mate sin azúcar.",
    ],
    cena: [
      // Merluza/atún (1v semana) + 1/4 plato hidrato
      "150-180 g lomitos de atún al natural o merluza al horno + 1/2 plato Hortalizas A y B + 1/4 plato quinoa cocida + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 4
  {
    desayuno: [
      // Opción 1: tostadas + queso firme + fruta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 150-200 g fruta (1-2 frutas) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos (nueces o almendras).",
    ],
    almuerzo: [
      // Omelette (1v) + 1/2 plato hidrato
      "Omelette de 2 huevos + 50 g queso descremado + 1/2 plato arroz integral cocido + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1: pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Omelette+queso (1 de 2v) + 1/4 plato hidrato
      "Omelette de 2 huevos + 50 g queso descremado + 1/2 plato Hortalizas A y B + 1/4 plato legumbres cocidas + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 5
  {
    desayuno: [
      // Opción 3: tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + esencia de vainilla + endulzante no calórico opcional (mezclar todo y cocinar a fuego bajo) + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos.",
    ],
    almuerzo: [
      // Wok verduras + arroz (1 de 2v) + 1/2 plato hidrato
      "Wok de Hortalizas A y B + 50 g queso descremado o 2 huevos + 25 g frutos secos + 1/2 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 2: tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + 150-200 g fruta + vainilla (dulce) o 1/2 palta/verduras (salada) + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (2 de 2v) + 1/4 plato hidrato (Hortalizas C)
      "150-180 g pollo al horno sin piel + 1/2 plato Hortalizas A y B + 200 g batata al horno + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 6
  {
    desayuno: [
      // Opción 2: galletas de arroz + queso untable + frutos secos + fruta
      "3 galletas de arroz + queso untable light o descremado + 25 g nueces o almendras naturales + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "50 g cereales sin azúcar + 25 g almendras naturales sin tostar.",
    ],
    almuerzo: [
      // Wok verduras + quinoa (2 de 2v) + 1/2 plato hidrato
      "Wok de Hortalizas A y B + 2 huevos duros + 25 g frutos secos + 1/2 plato quinoa cocida + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 3: yogur + granola
      "150 g yogur light o descremado sin endulzar + 50 g granola o cereal sin azúcar + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (2 de 2v) + 1/4 plato hidrato
      "150-180 g carne magra al horno + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 7
  {
    desayuno: [
      // Opción 1: tostadas + queso firme + palta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 1/2 palta + mermelada light opcional (poca cantidad) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150 g yogur firme descremado sin endulzar.",
    ],
    almuerzo: [
      // Pollo (cierre semana, 2 de 2v) + 1/2 plato hidrato
      "150-180 g pechuga de pollo a la plancha + 1/2 plato legumbres cocidas + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1: pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Omelette+queso (2 de 2v) + 1/4 plato hidrato (Hortalizas C)
      "Omelette de 2 huevos + 50 g queso descremado + 1/2 plato Hortalizas A y B + 200 g papa al horno + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // ─── SEMANA 2 (Días 8–15) ───────────────────────────────────────────────────
 
  // DÍA 8
  {
    desayuno: [
      // Opción 1: tostadas + queso firme + fruta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 150-200 g fruta (1-2 frutas) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos (nueces o almendras).",
    ],
    almuerzo: [
      // Pollo (1 de 2v) + 1/2 plato hidrato
      "150-180 g pechuga de pollo al horno + 1/2 plato arroz blanco cocido + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1: pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (1 de 2v) + 1/4 plato hidrato
      "150-180 g pollo salteado con cebolla y tomate + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 9
  {
    desayuno: [
      // Opción 3: tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + esencia de vainilla + endulzante no calórico opcional (mezclar todo y cocinar a fuego bajo) + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "50 g cereales sin azúcar + 25 g almendras naturales sin tostar.",
    ],
    almuerzo: [
      // Carne (1v) + 1/2 plato hidrato
      "150-180 g carne al horno + 1/2 plato quinoa cocida + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 2: tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + 150-200 g fruta + vainilla (dulce) o 1/2 palta/verduras (salada) + café/té/mate sin azúcar.",
    ],
    cena: [
      // Merluza/atún (1v semana 2) + 1/4 plato hidrato (Hortalizas C)
      "150-180 g merluza al horno o lomitos de atún al natural + 1/2 plato Hortalizas A y B + 200 g batata al horno + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 10
  {
    desayuno: [
      // Opción 2: galletas de arroz + queso untable + frutos secos + fruta
      "3 galletas de arroz + queso untable light o descremado + 25 g nueces o almendras naturales + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150 g yogur firme descremado sin endulzar.",
    ],
    almuerzo: [
      // Pescado (1v) + 1/2 plato hidrato
      "150-180 g filete de pescado a la plancha + 1/2 plato arroz integral cocido + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 3: yogur + granola
      "150 g yogur light o descremado sin endulzar + 50 g granola o cereal sin azúcar + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (1 de 2v) + 1/4 plato hidrato (Hortalizas C)
      "150-180 g carne magra a la plancha + 1/2 plato Hortalizas A y B + 200 g papas al horno + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 11
  {
    desayuno: [
      // Opción 1: tostadas + queso firme + fruta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 150-200 g fruta (1-2 frutas) + mermelada light opcional (poca cantidad) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos.",
    ],
    almuerzo: [
      // Omelette (1v) + 1/2 plato hidrato
      "Omelette de 2 huevos + 50 g queso descremado + 30 g jamón natural + 1/2 plato arroz blanco cocido + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1: pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Omelette+queso (1 de 2v) + 1/4 plato hidrato
      "Omelette de 2 huevos + 50 g queso descremado + 1/2 plato Hortalizas A y B + 1/4 plato quinoa cocida + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 12
  {
    desayuno: [
      // Opción 3: tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + esencia de vainilla + endulzante no calórico opcional (mezclar todo y cocinar a fuego bajo) + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos.",
    ],
    almuerzo: [
      // Wok verduras + arroz (1 de 2v) + 1/2 plato hidrato
      "Wok de Hortalizas A y B + 50 g trozos de queso descremado + 25 g frutos secos + 1/2 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 2: tortilla de avena
      "Tortilla de avena: 2 huevos + 4 cdas grandes avena instantánea + 150-200 g fruta + vainilla (dulce) o 1/2 palta/verduras (salada) + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (2 de 2v) + 1/4 plato hidrato
      "150-180 g pechuga de pollo al horno + 1/2 plato Hortalizas A y B + 1/4 plato legumbres cocidas + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 13
  {
    desayuno: [
      // Opción 2: galletas de arroz + queso untable + frutos secos + fruta
      "3 galletas de arroz + queso untable light o descremado + 25 g nueces o almendras naturales + 150-200 g fruta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "50 g cereales sin azúcar + 25 g almendras naturales sin tostar.",
    ],
    almuerzo: [
      // Wok verduras + quinoa (2 de 2v) + 1/2 plato hidrato
      "Wok de Hortalizas A y B + 2 huevos duros + 1/2 plato quinoa cocida + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 3: yogur + granola
      "150 g yogur light o descremado sin endulzar + 50 g granola o cereal sin azúcar + café/té/mate sin azúcar.",
    ],
    cena: [
      // Carne roja (2 de 2v) + 1/4 plato hidrato
      "150-180 g milanesas de carne al horno + ensalada (espinacas, tomate, champiñones) + 1/4 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 14
  {
    desayuno: [
      // Opción 1: tostadas + queso firme + palta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 1/2 palta + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150 g yogur firme descremado sin endulzar.",
    ],
    almuerzo: [
      // Pollo (cierre) + 1/2 plato hidrato
      "150-180 g pechuga de pollo a la plancha + 1/2 plato legumbres cocidas + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1: pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Omelette+queso (2 de 2v) + 1/4 plato hidrato (Hortalizas C)
      "Omelette de 2 huevos + 50 g queso descremado + 1/2 plato Hortalizas A y B + 200 g batata al horno + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
  },
 
  // DÍA 15
  {
    desayuno: [
      // Opción 1: tostadas + queso firme + fruta
      "2 tostadas de pan blanco + 50 g queso firme descremado + 150-200 g fruta (1-2 frutas) + mermelada light opcional (poca cantidad) + café/té/mate sin azúcar.",
    ],
    mediaManana: [
      "150-200 g fruta (1-2 frutas) + 25 g frutos secos (nueces o almendras).",
    ],
    almuerzo: [
      // Pescado (cierre) + 1/2 plato hidrato
      "150-180 g filete de pescado al horno + 1/2 plato arroz blanco cocido + 1/2 plato Hortalizas A y B + 1-2 cdas aceite de oliva extra virgen en crudo.",
    ],
    merienda: [
      // Opción 1: pan integral + queso firme
      "2 rebanadas de pan integral + 50 g queso firme descremado + café/té/mate sin azúcar.",
    ],
    cena: [
      // Pollo (inicio nuevo ciclo) + 1/4 plato hidrato
      "150-180 g pollo al horno sin piel + 1/2 plato Hortalizas A y B + 1/4 plato arroz integral cocido + 1-2 cdas aceite de oliva extra virgen en crudo.",
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