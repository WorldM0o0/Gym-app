const fs = require('fs');

let code = fs.readFileSync('public/assets/RecipesView-CjjfivCb.js', 'utf8');

// The new bilingual & suggestion translation engine
const helperModule = `
const KNOWN_RECIPES = {
  fasoliyyeh: {
    match: /fasoliyyeh/i,
    nameEn: "Fasoliyyeh Bi Z-Zayt (Syrian Green Beans with Olive Oil)",
    nameDe: "Fasoliyyeh Bi Z-Zayt (Syrische grüne Bohnen in Olivenöl)",
    utensilsEn: ["Large pot with lid", "Wooden spoon"],
    utensilsDe: ["Großer Topf mit Deckel", "Kochlöffel"],
    instructionsEn: [
      "Place the green beans into a large pot, and drizzle with olive oil. Season with salt to taste, and put the lid on the pot.",
      "Cook over medium-high heat, stirring occasionally, until beans are cooked to your desired doneness. Syrians like it cooked until the green beans are turning brownish in color – let them steam in their own moisture rather than sauté.",
      "Add cilantro and minced garlic to the beans, and continue to cook just until the cilantro has started to wilt.",
      "Eat as a main course by scooping up with warm pita bread or serve as a delicious side dish."
    ],
    instructionsDe: [
      "Die grünen Bohnen in einen großen Topf geben und mit Olivenöl beträufeln. Nach Geschmack mit Salz würzen und den Topf mit einem Deckel verschließen.",
      "Bei mittlerer bis starker Hitze unter gelegentlichem Umrühren garen, bis die Bohnen zart sind. Traditionell werden sie gegart, bis sie leicht bräunlich werden – sie sollen in der eigenen Feuchtigkeit dünsten und nicht scharf anbraten.",
      "Koriander und gehackten Knoblauch zu den Bohnen geben und weitergaren, bis der Koriander zusammenfällt.",
      "Als Hauptgericht mit warmem Fladenbrot oder als aromatische Beilage servieren."
    ]
  },
  banhMi: {
    match: /banh\\s*mi/i,
    nameEn: "Vegan Banh Mi",
    nameDe: "Veganes Banh Mi",
    utensilsEn: ["Oven", "Mixing bowl", "Bread knife"],
    utensilsDe: ["Backofen", "Rührschüssel", "Brotmesser"],
    instructionsEn: [
      "Put the shredded vegetables in a bowl and add the vinegar, sugar and 1 tsp salt. Toss everything together, then set aside to pickle quickly while you prepare the rest of the sandwich.",
      "Heat oven to 180°C (160°C fan). Cut the baguette into four, then slice each piece horizontally in half. Put the baguette pieces in the oven for 5 minutes until lightly toasted and warm.",
      "Spread each piece with a layer of hummus, then top four pieces with the tempeh slices and pile the pickled vegetables on top.",
      "To serve, sprinkle over the fresh herbs and squeeze over some hot sauce, then top with the other baguette pieces to make sandwiches."
    ],
    instructionsDe: [
      "Das geraspelte Gemüse in eine Schüssel geben und Essig, Zucker sowie 1 TL Salz hinzufügen. Alles gut vermengen und kurz marinieren lassen, während die Sandwiches vorbereitet werden.",
      "Den Ofen auf 180 °C (160 °C Umluft) vorheizen. Das Baguette vierteln und die Stücke der Länge nach halbieren. Im Ofen ca. 5 Minuten leicht anrösten, bis sie warm und knusprig sind.",
      "Die Baguettestücke gleichmäßig mit Hummus bestreichen. Die unteren Hälften mit Tempeh-Scheiben belegen und das eingelegte Gemüse darauf verteilen.",
      "Mit frischen Kräutern bestreuen, nach Belieben scharfe Sauce darübergeben und mit den oberen Baguettehälften zusammenklappen."
    ]
  },
  arrabiata: {
    match: /arrabiata|arrabbiata/i,
    nameEn: "Spicy Arrabiata Penne",
    nameDe: "Pikante Penne all'Arrabbiata",
    utensilsEn: ["Large cooking pot", "Skillet", "Colander"],
    utensilsDe: ["Großer Kochtopf", "Bratpfanne", "Nudelsieb"],
    instructionsEn: [
      "Bring a large pot of salted water to a boil. Add the penne and cook according to package instructions until al dente (about 9 minutes).",
      "In a large skillet over medium-high heat, add olive oil and minced garlic. Sauté gently until fragrant without burning.",
      "Stir in chopped tomatoes, red pepper flakes, salt and herbs. Simmer gently for 10-15 minutes until the sauce thickens.",
      "Drain pasta, toss directly into the spicy sauce, and serve warm with fresh basil."
    ],
    instructionsDe: [
      "Einen großen Topf mit Salzwasser zum Kochen bringen. Die Penne hineingeben und nach Packungsanweisung (ca. 9 Minuten) bissfest kochen.",
      "In einer großen Pfanne bei mittlerer Hitze Olivenöl erwärmen und fein gehackten Knoblauch darin sanft anschwitzen.",
      "Gehackte Tomaten, Chiliflocken, Salz und Kräuter einrühren. Bei schwacher Hitze ca. 10–15 Minuten sämig einkochen lassen.",
      "Die Nudeln abgießen, direkt unter die pikante Tomatensauce heben und mit frischem Basilikum servieren."
    ]
  },
  fajitas: {
    match: /fajita/i,
    nameEn: "Chickpea Fajitas",
    nameDe: "Würzige Kichererbsen-Fajitas",
    utensilsEn: ["Large skillet", "Cutting board & knife"],
    utensilsDe: ["Große Pfanne", "Schneidebrett & Messer"],
    instructionsEn: [
      "Slice bell peppers and onions into thin strips. Drain and rinse the chickpeas.",
      "Heat vegetable oil in a large skillet over medium-high heat. Add peppers and onions, cooking for 5 minutes until lightly charred.",
      "Add chickpeas, cumin, paprika, garlic, and a splash of lime juice. Sauté for another 5 minutes.",
      "Warm the tortillas and serve filled with the hot chickpea-vegetable mixture, guacamole and salsa."
    ],
    instructionsDe: [
      "Paprika und Zwiebeln in feine Streifen schneiden. Die Kichererbsen abgießen und gründlich abspülen.",
      "Pflanzenöl in einer großen Pfanne erhitzen. Paprika und Zwiebeln ca. 5 Minuten scharf anbraten, bis sie Röstaromen entwickeln.",
      "Kichererbsen, Kreuzkümmel, Paprikapulver, Knoblauch und etwas Limettensaft hinzugeben und weitere 5 Minuten braten.",
      "Tortillas kurz erwärmen und mit der würzigen Kichererbsen-Mischung füllen."
    ]
  },
  dal: {
    match: /dal|daal|dahl/i,
    nameEn: "Indian Dal Fry",
    nameDe: "Indisches Linsen-Dal (Dal Fry)",
    utensilsEn: ["Cooking pot", "Small pan for tempering", "Wooden spoon"],
    utensilsDe: ["Kochtopf", "Kleine Pfanne für Gewürze", "Kochlöffel"],
    instructionsEn: [
      "Rinse the lentils thoroughly and cook in a pot with water, turmeric and salt until soft and creamy.",
      "In a separate small pan, heat ghee or oil and sauté cumin seeds, onions, garlic, ginger and tomatoes.",
      "Pour the fragrant tempering into the cooked lentils and simmer together for 5 minutes.",
      "Garnish with freshly chopped cilantro and serve with basmati rice or warm flatbread."
    ],
    instructionsDe: [
      "Die Linsen gründlich waschen und im Topf mit Wasser, Kurkuma und Salz weich und sämig kochen.",
      "In einer separaten Pfanne Öl oder Ghee erhitzen und Kreuzkümmel, Zwiebeln, Knoblauch, Ingwer und Tomaten anbraten.",
      "Die aromatische Gewürzmischung unter die weichen Linsen rühren und 5 Minuten ziehen lassen.",
      "Mit frischem Koriander bestreuen und heiß mit Reis oder Fladenbrot servieren."
    ]
  }
};

const DISH_TITLE_DICTIONARY = [
  [/\\bvegan\\b/gi, "Veganes"],
  [/\\bvegetarian\\b/gi, "Vegetarisches"],
  [/\\bspicy\\b/gi, "Pikantes"],
  [/\\bcrispy\\b/gi, "Knuspriges"],
  [/\\bcreamy\\b/gi, "Cremiges"],
  [/\\broasted\\b/gi, "Geröstetes"],
  [/\\bbaked\\b/gi, "Gebackenes"],
  [/\\bgrilled\\b/gi, "Gegrilltes"],
  [/\\bfried\\b/gi, "Gebratenes"],
  [/\\bsoups?\\b/gi, "Suppe"],
  [/\\bstews?\\b/gi, "Eintopf"],
  [/\\bcurrys?\\b/gi, "Curry"],
  [/\\bsalads?\\b/gi, "Salat"],
  [/\\bpasta\\b/gi, "Pasta"],
  [/\\brice\\b/gi, "Reis"],
  [/\\bbowls?\\b/gi, "Bowl"],
  [/\\bsandwich(?:es)?\b/gi, "Sandwich"],
  [/\\bwraps?\\b/gi, "Wrap"],
  [/\\bbeans?\\b/gi, "Bohnen"],
  [/\\blentils?\\b/gi, "Linsen"],
  [/\\bchickpeas?\\b/gi, "Kichererbsen"],
  [/\\bpotatoes?\\b/gi, "Kartoffeln"],
  [/\\bmushrooms?\\b/gi, "Pilze"],
  [/\\btomato(?:es)?\b/gi, "Tomaten"],
  [/\\bgarlic\\b/gi, "Knoblauch"],
  [/\\bspinach\\b/gi, "Spinat"],
  [/\\bbroccoli\\b/gi, "Brokkoli"],
  [/\\bcauliflower\\b/gi, "Blumenkohl"],
  [/\\btofu\\b/gi, "Tofu"],
  [/\\btempeh\\b/gi, "Tempeh"],
  [/\\bchicken\\b/gi, "Hähnchen"],
  [/\\bbeef\\b/gi, "Rindfleisch"],
  [/\\bpork\\b/gi, "Schweinefleisch"],
  [/\\bsalmon\\b/gi, "Lachs"],
  [/\\btuna\\b/gi, "Thunfisch"],
  [/\\bshrimps?|prawns?\\b/gi, "Garnelen"],
  [/\\bwith\\b/gi, "mit"],
  [/\\band\\b/gi, "und"],
  [/\\bin\\b/gi, "in"]
];

function translateRecipeTitle(name) {
  if (!name) return "";
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(name)) return KNOWN_RECIPES[k].nameDe;
  }
  let res = name;
  for (const [re, de] of DISH_TITLE_DICTIONARY) {
    res = res.replace(re, de);
  }
  return res.trim();
}

function getRecipeEnglishTitle(name) {
  if (!name) return "";
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(name)) return KNOWN_RECIPES[k].nameEn;
  }
  return name.trim();
}

const FOODS_EN_TO_DE = new Map([
  ["chicken breast (raw)", "Hähnchenbrust (roh)"],
  ["turkey breast (raw)", "Putenbrust (roh)"],
  ["ground beef (15% fat, raw)", "Rinderhack (15% Fett, roh)"],
  ["salmon fillet", "Lachsfilet"],
  ["tuna (canned, drained)", "Thunfisch (Dose, abgetropft)"],
  ["egg (medium)", "Ei (Größe M)"],
  ["low-fat quark", "Magerquark"],
  ["greek yoghurt (10%)", "Griechischer Joghurt (10%)"],
  ["tofu (plain)", "Tofu (natur)"],
  ["whey protein powder", "Whey-Proteinpulver"],
  ["whole milk (3.5%)", "Vollmilch (3,5%)"],
  ["oat milk", "Hafermilch"],
  ["rolled oats", "Haferflocken"],
  ["rice (raw)", "Reis (roh)"],
  ["brown rice (raw)", "Vollkornreis (roh)"],
  ["pasta (raw)", "Nudeln (roh)"],
  ["wholemeal pasta (raw)", "Vollkornnudeln (roh)"],
  ["potatoes", "Kartoffeln"],
  ["sweet potato", "Süßkartoffel"],
  ["wholemeal bread", "Vollkornbrot"],
  ["lentils (raw)", "Linsen (roh)"],
  ["chickpeas (canned)", "Kichererbsen (Dose)"],
  ["banana", "Banane"],
  ["apple", "Apfel"],
  ["blueberries", "Blaubeeren"],
  ["broccoli", "Brokkoli"],
  ["spinach", "Spinat"],
  ["tomato", "Tomate"],
  ["bell pepper", "Paprika"],
  ["onion", "Zwiebel"],
  ["avocado", "Avocado"],
  ["olive oil", "Olivenöl"],
  ["butter", "Butter"],
  ["almonds", "Mandeln"],
  ["peanut butter", "Erdnussbutter"],
  ["honey", "Honig"],
  ["pork tenderloin (raw)", "Schweinefilet (roh)"],
  ["prawns", "Garnelen"],
  ["cod (raw)", "Kabeljau (roh)"],
  ["bacon", "Speck"],
  ["cooked ham", "Kochschinken"],
  ["cream cheese", "Frischkäse"],
  ["whipping cream", "Schlagsahne"],
  ["wheat flour", "Weizenmehl"],
  ["sugar", "Zucker"],
  ["couscous (raw)", "Couscous (roh)"],
  ["quinoa (raw)", "Quinoa (raw)"],
  ["bulgur (raw)", "Bulgur (roh)"],
  ["breadcrumbs", "Semmelbrösel"],
  ["toast bread", "Toastbrot"],
  ["garlic", "Knoblauch"],
  ["carrot", "Karotte"],
  ["courgette", "Zucchini"],
  ["zucchini", "Zucchini"],
  ["aubergine", "Aubergine"],
  ["eggplant", "Aubergine"],
  ["mushrooms", "Champignons"],
  ["sweetcorn (canned)", "Mais (Dose)"],
  ["peas", "Erbsen"],
  ["green beans", "Grüne Bohnen"],
  ["cauliflower", "Blumenkohl"],
  ["cucumber", "Gurke"],
  ["leek", "Lauch"],
  ["ginger", "Ingwer"],
  ["kidney beans (canned)", "Kidneybohnen (Dose)"],
  ["black beans (canned)", "Schwarze Bohnen (Dose)"],
  ["vegetable oil", "Pflanzenöl"],
  ["coconut oil", "Kokosöl"],
  ["walnuts", "Walnüsse"],
  ["cashews", "Cashewkerne"],
  ["coconut milk", "Kokosmilch"],
  ["tomato purée", "Tomatenmark"],
  ["chopped tomatoes (canned)", "Gehackte Tomaten (Dose)"],
  ["soy sauce", "Sojasauce"],
  ["mayonnaise", "Mayonnaise"],
  ["mustard", "Senf"],
  ["ketchup", "Ketchup"],
  ["lemon", "Zitrone"],
  ["orange", "Orange"],
  ["strawberries", "Erdbeeren"],
  ["salt", "Salz"],
  ["pepper", "Pfeffer"],
  ["cilantro", "Koriander"],
  ["coriander", "Koriander"],
  ["baguette", "Baguette"],
  ["tempeh", "Tempeh"],
  ["hummus", "Hummus"],
  ["vinegar", "Essig"],
  ["pita bread", "Fladenbrot"]
]);

function translateFoodToGerman(name) {
  if (!name) return "";
  const lower = name.trim().toLowerCase();
  if (FOODS_EN_TO_DE.has(lower)) return FOODS_EN_TO_DE.get(lower);
  for (const [en, de] of FOODS_EN_TO_DE.entries()) {
    if (lower === en || lower.includes(en)) return de;
  }
  return name;
}

const RAW_UNIT_REPLACEMENTS = [
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:tablespoons?|tbsp|tbs)\\b/gi, "$1 EL"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:teaspoons?|tsp)\\b/gi, "$1 TL"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:cups?)\\b/gi, "$1 Tasse(n)"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:cloves?)\\b/gi, "$1 Zehe(n)"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:slices?)\\b/gi, "$1 Scheibe(n)"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:cans?|tins?)\\b/gi, "$1 Dose(n)"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:handfuls?)\\b/gi, "$1 Handvoll"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:bunches?)\\b/gi, "$1 Bund"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:pinches?|pinch)\\b/gi, "$1 Prise(n)"],
  [/\\b(\\d+(?:\\/\\d+|\\.\\d+)?)\\s*(?:dashes?|dash)\\b/gi, "$1 Spritzer"],
  [/\\bpinch\\b/gi, "1 Prise"],
  [/\\bdash\\b/gi, "1 Spritzer"],
  [/\\bto taste\\b/gi, "nach Geschmack"]
];

function translateRawIngredientLine(line, isDe) {
  if (!line || !isDe) return line;
  let res = line;
  for (const [re, de] of RAW_UNIT_REPLACEMENTS) {
    res = res.replace(re, de);
  }
  for (const [en, de] of FOODS_EN_TO_DE.entries()) {
    const rx = new RegExp("\\\\b" + en + "\\\\b", "gi");
    res = res.replace(rx, de);
  }
  return res;
}

const DENGLISCH_REGEX = /\\b(geben the|in a (?:große|kleine)|drizzle mit|bis beans|bis the|und put the|hinzufügen [a-z]+ und|continue to garen|servieren as|scooping up mit|den Ofen vorheizen to|unter Rühren braten the)\\b/i;

function isDenglischText(str) {
  if (!str || typeof str !== "string") return false;
  return DENGLISCH_REGEX.test(str);
}

function cleanToEnglishInstructions(text) {
  if (!text) return "";
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(text)) return KNOWN_RECIPES[k].instructionsEn.join("\\n");
  }
  return text
    .replace(/\\bgeben the\\b/gi, "place the")
    .replace(/\\bin a große Topf\\b/gi, "in a large pot")
    .replace(/\\bgroße Topf\\b/gi, "large pot")
    .replace(/\\bTopf\\b/gi, "pot")
    .replace(/\\bPfanne\\b/gi, "pan")
    .replace(/\\bSchüssel\\b/gi, "bowl")
    .replace(/\\bdrizzle mit\\b/gi, "drizzle with")
    .replace(/\\bwürzen mit Salz to taste\\b/gi, "season with salt to taste")
    .replace(/\\bwürzen mit\\b/gi, "season with")
    .replace(/\\bput the lid on the Topf\\b/gi, "put the lid on the pot")
    .replace(/\\bgaren bei mittlerer bis starker Hitze\\b/gi, "cook over medium-high heat")
    .replace(/\\bgaren bei mittlerer Hitze\\b/gi, "cook over medium heat")
    .replace(/\\bgaren bei starker Hitze\\b/gi, "cook over high heat")
    .replace(/\\bgaren bei schwacher Hitze\\b/gi, "cook over low heat")
    .replace(/\\bbis beans are cooked\\b/gi, "until beans are cooked")
    .replace(/\\bbis the\\b/gi, "until the")
    .replace(/\\bbis\\b/gi, "until")
    .replace(/\\bhinzufügen cilantro und Knoblauch to the beans\\b/gi, "add cilantro and garlic to the beans")
    .replace(/\\bhinzufügen\\b/gi, "add")
    .replace(/\\bKnoblauch\\b/gi, "garlic")
    .replace(/\\bcontinue to garen just bis\\b/gi, "continue to cook just until")
    .replace(/\\bcontinue to garen\\b/gi, "continue to cook")
    .replace(/\\bgaren\\b/gi, "cook")
    .replace(/\\bscooping up mit warm pita bread\\b/gi, "scooping up with warm pita bread")
    .replace(/\\bscooping up mit\\b/gi, "scooping up with")
    .replace(/\\bmit warm pita bread\\b/gi, "with warm pita bread")
    .replace(/\\bservieren as a side dish\\b/gi, "serve as a side dish")
    .replace(/\\bservieren as\\b/gi, "serve as")
    .replace(/\\bservieren\\b/gi, "serve")
    .replace(/\\bund\\b/gi, "and")
    .replace(/\\bmit\\b/gi, "with");
}

const CULINARY_SENTENCE_MAP = [
  [/bring a large pot of (?:salted )?water to a boil/gi, "Einen großen Topf mit gesalzenem Wasser zum Kochen bringen"],
  [/bring to a boil/gi, "zum Kochen bringen"],
  [/cook according to (?:the )?package instructions(?:, about (\\d+) minutes)?/gi, "Nach Packungsanweisung (ca. $1 Minuten) al dente kochen"],
  [/drain the pasta/gi, "Die Nudeln abgießen"],
  [/drain and (?:set aside|rinse)/gi, "Abgießen und beiseitestellen"],
  [/in a (?:large )?(?:skillet|pan|pot) over medium-high heat/gi, "In einer großen Pfanne bzw. einem Topf bei mittlerer bis starker Hitze"],
  [/in a (?:large )?(?:skillet|pan|pot) over medium heat/gi, "In einer großen Pfanne bzw. einem Topf bei mittlerer Hitze"],
  [/heat (?:the )?olive oil until (?:the oil starts to )?shimmer/gi, "Das Olivenöl erhitzen, bis es heiß ist"],
  [/add the olive oil and heat/gi, "Das Olivenöl hinzugeben und erhitzen"],
  [/heat (?:the )?oil in a (?:large )?(?:skillet|pan|pot)/gi, "Das Öl in einer Pfanne bzw. einem Topf erhitzen"],
  [/sauté (?:until|for) (?:fragrant|softened|tender)/gi, "anbraten, bis es aromatisch duftet und weich ist"],
  [/cook,? stirring occasionally,? until/gi, "unter gelegentlichem Umrühren garen, bis"],
  [/cook,? stirring frequently,? until/gi, "unter häufigem Rühren garen, bis"],
  [/stir frequently/gi, "regelmäßig umrühren"],
  [/stir occasionally/gi, "gelegentlich umrühren"],
  [/until golden brown/gi, "bis es goldbraun ist"],
  [/until fragrant/gi, "bis es duftet"],
  [/until tender/gi, "bis es weich und gar ist"],
  [/preheat (?:the )?oven to (\\d+)°?C(?:\\/(\\d+)°?C fan)?/gi, "Den Backofen auf $1 °C (Umluft $2 °C) vorheizen"],
  [/preheat (?:the )?oven to (\\d+)°?F/gi, "Den Backofen auf ca. 180 °C vorheizen"],
  [/bake in the oven for (\\d+) (?:to (\\d+) )?minutes/gi, "Im Ofen für ca. $1 bis $2 Minuten backen"],
  [/season with salt and pepper(?: to taste)?/gi, "Nach Geschmack mit Salz und Pfeffer würzen"],
  [/season with salt to taste/gi, "Nach Geschmack mit Salz würzen"],
  [/season to taste with salt and pepper/gi, "Mit Salz und Pfeffer abschmecken"],
  [/toss (?:everything )?together/gi, "Alles gründlich miteinander vermengen"],
  [/whisk (?:everything )?together/gi, "Alles gut miteinander verquirlen"],
  [/stir in the (?:chopped )?tomatoes/gi, "Die gehackten Tomaten einrühren"],
  [/reduce heat and simmer for (\\d+) minutes/gi, "Die Hitze reduzieren und für ca. $1 Minuten sanft köcheln lassen"],
  [/reduce (?:the )?heat and simmer/gi, "Die Hitze reduzieren und sanft köcheln lassen"],
  [/garnish with (?:fresh )?([a-z]+) and serve/gi, "Mit frischen Kräutern garnieren und servieren"],
  [/garnish with/gi, "garnieren mit"],
  [/serve (?:warm|hot|immediately)/gi, "Heiß bzw. warm servieren"],
  [/serve as a (?:main course|side dish)/gi, "Als Hauptgericht oder Beilage servieren"],
  [/Place the green beans (?:into|in) a large pot, and drizzle with olive oil\\./gi, "Die grünen Bohnen in einen großen Topf geben und mit Olivenöl beträufeln."],
  [/Season with salt to taste, and put the lid on the pot\\./gi, "Nach Geschmack mit Salz würzen und den Topf mit einem Deckel verschließen."],
  [/Cook over medium-high heat, stirring occasionally, until beans are cooked to your desired doneness\\./gi, "Bei mittlerer bis starker Hitze unter gelegentlichem Umrühren garen, bis die Bohnen den gewünschten Gargrad erreicht haben."],
  [/Syrians like it cooked until the green beans are turning brownish in color\\./gi, "Traditionell werden sie gegart, bis sie leicht bräunlich werden."],
  [/The idea is not to saute them, but to let them steam in the moisture released by the ice crystals\\./gi, "Sie sollen in der eigenen Feuchtigkeit dünsten und nicht scharf anbraten."],
  [/Add cilantro and garlic to the beans, and continue to cook just until the cilantro has started to wilt\\./gi, "Koriander und gehackten Knoblauch hinzufügen und weitergaren, bis der Koriander zusammenfällt."],
  [/Eat as a main course by scooping up with warm pita bread or serve as a side dish\\./gi, "Als Hauptgericht mit warmem Fladenbrot oder als Beilage servieren."],
  [/\\bstep 1\\b/gi, "Schritt 1: "],
  [/\\bstep 2\\b/gi, "Schritt 2: "],
  [/\\bstep 3\\b/gi, "Schritt 3: "],
  [/\\bstep 4\\b/gi, "Schritt 4: "]
];

function cleanToGermanInstructions(text) {
  if (!text) return "";
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(text)) return KNOWN_RECIPES[k].instructionsDe.join("\\n");
  }
  let res = cleanToEnglishInstructions(text);
  for (const [re, de] of CULINARY_SENTENCE_MAP) {
    res = res.replace(re, de);
  }
  return res;
}

function getRecipeSteps(instructions) {
  if (!instructions || !instructions.trim()) return [];
  const lines = instructions.split(/\\r?\\n+/).map(s => s.replace(/^\\s*\\d+[\\.\\)]\\s*/, "").replace(/^step\\s*\\d+\\s*:?\\s*/i, "").trim()).filter(Boolean);
  if (lines.length > 1) return lines;
  const sentences = instructions.split(/(?<=[.!?])\\s+(?=[A-ZÄÖÜ0-9])/).map(s => s.trim()).filter(Boolean);
  return sentences.length > 0 ? sentences : [instructions.trim()];
}

function getRecipeUtensils(recipe, isDe) {
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(recipe.name)) {
      return isDe ? KNOWN_RECIPES[k].utensilsDe : KNOWN_RECIPES[k].utensilsEn;
    }
  }
  const text = (recipe.name + " " + (recipe.instructions || "")).toLowerCase();
  const res = [];
  if (/topf|pot|saucepan|kochen|boil|soup|stew/.test(text)) res.push(isDe ? "Großer Kochtopf" : "Cooking pot");
  if (/pfanne|pan|skillet|fry|braten/.test(text)) res.push(isDe ? "Bratpfanne" : "Frying pan");
  if (/ofen|oven|bake|backen|roast/.test(text)) res.push(isDe ? "Backofen" : "Oven");
  if (/schüssel|bowl|marinier|mischen|mix/.test(text)) res.push(isDe ? "Rührschüssel" : "Mixing bowl");
  if (/messer|knife|schneiden|chop|slice|dice/.test(text)) res.push(isDe ? "Küchenmesser & Schneidebrett" : "Chef's knife & cutting board");
  if (/backblech|baking sheet|tray/.test(text)) res.push(isDe ? "Backblech" : "Baking sheet");
  if (/mixer|blender|pürier/.test(text)) res.push(isDe ? "Mixer / Pürierstab" : "Blender");
  if (res.length === 0) res.push(isDe ? "Kochtopf & Messer" : "Cooking pot & knife");
  return res;
}
`;

// Find where helperModule should be placed (replacing the old helper block)
const knStart = code.indexOf("const KNOWN_RECIPES={");
const tnStart = code.indexOf("function tn(e,n){");
if (knStart === -1 || tnStart === -1) {
  console.error("Could not find knStart or tnStart");
  process.exit(1);
}
code = code.substring(0, knStart) + helperModule + code.substring(tnStart);

// Now update `an` (Suggestions dialog)
// Look for suggestions list render and `Z` function in `an`
const anStart = code.indexOf("function an({open:e,onClose:n,recipes:i,foods:s,onImportRecipe:l,onAddShoppingItem:o,onAddToPlan:r,dietPreference:m}){");
if (anStart === -1) {
  console.error("Could not find function an");
  process.exit(1);
}

// In an: replace Z function and update suggestion rendering for 100% DE and EN language pack
const oldAnZ = code.substring(code.indexOf("Z=async c=>{const{ingredients:g,matchedCount:k,totalCount:w}=tn(c,s);", anStart), code.indexOf("p.useEffect(()=>{S&&Bt().then(c=>b(g=>g.length===0?c:g))},[S]);", anStart));

const newAnZ = `Z=async c=>{
  const{ingredients:g,matchedCount:k,totalCount:w}=tn(c,s);
  const nameEn=getRecipeEnglishTitle(c.name);
  const nameDe=translateRecipeTitle(c.name);
  const instEn=cleanToEnglishInstructions(c.instructions||"").trim();
  const instDe=cleanToGermanInstructions(c.instructions||"").trim();
  const utensilsEn=getRecipeUtensils({name:nameEn,instructions:instEn},false);
  const utensilsDe=getRecipeUtensils({name:nameDe,instructions:instDe},true);
  const curIsDe=(u.nutrition?.showRecipe==="Rezept anzeigen")||(typeof navigator!=="undefined"&&navigator.language?.startsWith("de"));
  await l({
    name:curIsDe?nameDe:nameEn,
    nameEn,
    nameDe,
    servings:Wt,
    ingredients:g,
    instructions:curIsDe?instDe:instEn,
    instructionsEn:instEn,
    instructionsDe:instDe,
    utensilsEn,
    utensilsDe
  });
  for(const j of Qt(c,s))await o(j.name,j.amount,j.unit);
  Y(j=>({...j,[c.id]:{matched:k,total:w}})),P(j=>new Set(j).add(c.id));
};`;

if (!code.includes(oldAnZ)) {
  console.error("Could not find oldAnZ in code");
  process.exit(1);
}
code = code.replace(oldAnZ, newAnZ);

// In an: update suggestion card display to respect `curIsDe`
// In W.map(c => ...):
const oldSugCard = 'W.map(c=>{const g=z[c.id];return t.jsxs(pe,{className:"flex flex-col gap-2",children:[c.thumb?t.jsx("img",{src:c.thumb,alt:c.name,className:"h-40 w-full rounded-xl2 object-cover",loading:"lazy"}):null,t.jsx("p",{className:"text-titleS text-onSurface",children:c.name}),t.jsx("p",{className:"text-caption text-onSurfaceVariant",children:[c.category,c.area].filter(Boolean).join(" · ")}),t.jsx("button",{type:"button",className:"text-left text-caption text-primary",onClick:()=>G(k=>k===c.id?null:c.id),children:D===c.id?u.common.less:u.nutrition.ingredientsAndPrep}),D===c.id?t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("ul",{className:"list-inside list-disc text-caption text-onSurfaceVariant",children:c.ingredients.map((k,w)=>t.jsx("li",{children:k},w))}),t.jsx("p",{className:"whitespace-pre-line text-caption text-onSurface",children:c.instructions})]}):null,t.jsx(_,{variant:"tonal",fullWidth:!0,disabled:y.has(c.id),onClick:()=>{Z(c)},children:y.has(c.id)?t.jsxs(t.Fragment,{children:[t.jsx(K,{name:"check",size:"sm",className:"mr-1 inline-block align-text-bottom"}),u.suggestions.addedToRecipesAndShopping]}):u.suggestions.addRecipe}),g?t.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[u.suggestions.nutrientsEstimated," ",g.matched," / ",g.total," ",u.suggestions.nutrientsMatched,g.matched<g.total?u.suggestions.nutrientsRest:""]}):null]},c.id)})';

const newSugCard = `W.map(c=>{
  const g=z[c.id];
  const curIsDe=(u.nutrition?.showRecipe==="Rezept anzeigen")||(typeof navigator!=="undefined"&&navigator.language?.startsWith("de"));
  const sugTitle=curIsDe?translateRecipeTitle(c.name):getRecipeEnglishTitle(c.name);
  const sugInst=curIsDe?cleanToGermanInstructions(c.instructions||""):cleanToEnglishInstructions(c.instructions||"");
  const sugSteps=getRecipeSteps(sugInst);
  const sugUtensils=getRecipeUtensils({name:c.name,instructions:c.instructions},curIsDe);

  return t.jsxs(pe,{className:"flex flex-col gap-2 p-3 rounded-2xl bg-surface-containerLow",children:[
    c.thumb?t.jsx("img",{src:c.thumb,alt:sugTitle,className:"h-40 w-full rounded-xl2 object-cover",loading:"lazy"}):null,
    t.jsx("p",{className:"text-titleS font-bold text-onSurface break-words",children:sugTitle}),
    t.jsx("p",{className:"text-caption text-onSurfaceVariant",children:[c.category,c.area].filter(Boolean).join(" · ")}),
    t.jsx("button",{type:"button",className:"press-feedback text-left text-caption font-semibold text-primary inline-flex items-center gap-1 hover:underline",onClick:()=>G(k=>k===c.id?null:c.id),children:D===c.id?u.common.less:u.nutrition.ingredientsAndPrep}),
    D===c.id?t.jsxs("div",{className:"flex flex-col gap-3 border-t border-line/20 pt-2",children:[
      t.jsxs("div",{className:"flex flex-col gap-1",children:[
        t.jsx("span",{className:"text-label uppercase font-bold text-onSurfaceVariant",children:curIsDe?"Zutaten":"Ingredients"}),
        t.jsx("ul",{className:"flex flex-col divide-y divide-line/20 rounded-xl bg-surface-container/60 px-3 py-1",children:c.ingredients.map((k,w)=>t.jsx("li",{className:"py-1 text-body text-onSurface",children:translateRawIngredientLine(k,curIsDe)},w))})
      ]}),
      sugUtensils.length>0?t.jsxs("div",{className:"flex items-center gap-1.5 text-caption text-onSurfaceVariant",children:[
        t.jsx("span",{className:"font-semibold text-onSurface",children:curIsDe?"Benötigte Utensilien:":"Tools needed:"}),
        t.jsx("span",{className:"rounded-lg bg-surface-containerHigh px-2 py-0.5 text-caption text-onSurface",children:sugUtensils.join(", ")})
      ]}):null,
      sugSteps.length>0?t.jsxs("div",{className:"flex flex-col gap-1.5",children:[
        t.jsx("span",{className:"text-label uppercase font-bold text-onSurfaceVariant",children:curIsDe?"Zubereitung":"Preparation"}),
        t.jsx("ol",{className:"flex flex-col gap-2",children:sugSteps.map((st,sIdx)=>t.jsxs("li",{className:"flex items-start gap-2 rounded-xl bg-surface-container/40 p-2.5 text-body text-onSurface",children:[
          t.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-caption font-bold text-primary",children:sIdx+1}),
          t.jsx("span",{className:"flex-1 leading-relaxed",children:st})
        ]},sIdx))})
      ]}):null
    ]}):null,
    t.jsx(_,{variant:"tonal",fullWidth:!0,disabled:y.has(c.id),onClick:()=>{Z(c)},children:y.has(c.id)?t.jsxs(t.Fragment,{children:[t.jsx(K,{name:"check",size:"sm",className:"mr-1 inline-block align-text-bottom"}),u.suggestions.addedToRecipesAndShopping]}):u.suggestions.addRecipe}),
    g?t.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[u.suggestions.nutrientsEstimated," ",g.matched," / ",g.total," ",u.suggestions.nutrientsMatched,g.matched<g.total?u.suggestions.nutrientsRest:""]}):null
  ]},c.id);
})`;

if (!code.includes(oldSugCard)) {
  console.error("Could not find oldSugCard in code");
  process.exit(1);
}
code = code.replace(oldSugCard, newSugCard);

// In gn: update migration and recipe details to ensure ALL recipes have full language pack
const gnStart = code.indexOf("function gn({recipes:e,foods:n,onCreate:i,onUpdate:s,onDelete:l,onToggleFavorite:o,onImportRecipe:r,onCreateFood:m,onAddShoppingItem:u,onAddToPlan:f,deleteHint:S,lastUsedByRecipeId:h,dietPreference:R}){");
if (gnStart === -1) {
  console.error("Could not find function gn");
  process.exit(1);
}

const newGn = `function gn({recipes:e,foods:n,onCreate:i,onUpdate:s,onDelete:l,onToggleFavorite:o,onImportRecipe:r,onCreateFood:m,onAddShoppingItem:u,onAddToPlan:f,deleteHint:S,lastUsedByRecipeId:h,dietPreference:R}){
  const d=te();
  const {settings:userSettings}=rt();
  const currentLang=userSettings?.language||(d.nutrition?.showRecipe==="Rezept anzeigen"?"de":"en");
  const isDe=currentLang==="de";

  const [E,T]=p.useState(!1);
  const [C,O]=p.useState(null);
  const [F,b]=p.useState(!1);
  const [sq,setSq]=p.useState("");
  const N=we(E);
  const v=we(F);
  const [A,M]=p.useState(null);
  const [D,G]=p.useState(null);
  const y=jt("en","de")===!0;
  const {confirm:P,undoable:undo}=ot();
  const z=p.useRef(new Set);

  const Y=async a=>{
    if(!z.current.has(a)){
      z.current.add(a);
      try{await o(a)}finally{z.current.delete(a)}
    }
  };

  const $=p.useMemo(()=>new Map(n.map(a=>[a.id,a])),[n]);
  const [B,H]=p.useState(null);
  const U=B??R??Ue;
  const L=p.useMemo(()=>new Map(e.map(a=>[a.id,xt(a,$)])),[e,$]);
  const V=p.useMemo(()=>[...e].filter(a=>vt(L.get(a.id),U)&&matchTokens(a.name+" "+((a.tags??[]).join(" ")),sq)).sort((a,x)=>!!a.isFavorite!=!!x.isFavorite?a.isFavorite?-1:1:a.name.localeCompare(x.name,"de")),[e,L,U,sq]);

  // Migration: ensures ALL recipes have full EN and DE language pack
  p.useEffect(()=>{
    for(const a of e){
      const isFaso=KNOWN_RECIPES.fasoliyyeh.match.test(a.name);
      const isBanh=KNOWN_RECIPES.banhMi.match.test(a.name);
      const isArrab=KNOWN_RECIPES.arrabiata.match.test(a.name);
      const isFaj=KNOWN_RECIPES.fajitas.match.test(a.name);
      const isDal=KNOWN_RECIPES.dal.match.test(a.name);

      const needsRepair=isDenglischText(a.instructions)||isDenglischText(a.name)||!a.instructionsDe||!a.instructionsEn||!a.nameDe||!a.nameEn||!a.utensilsDe;
      if(needsRepair){
        const fixedNameEn=isFaso?KNOWN_RECIPES.fasoliyyeh.nameEn:isBanh?KNOWN_RECIPES.banhMi.nameEn:isArrab?KNOWN_RECIPES.arrabiata.nameEn:isFaj?KNOWN_RECIPES.fajitas.nameEn:isDal?KNOWN_RECIPES.dal.nameEn:getRecipeEnglishTitle(a.nameEn||a.name);
        const fixedNameDe=isFaso?KNOWN_RECIPES.fasoliyyeh.nameDe:isBanh?KNOWN_RECIPES.banhMi.nameDe:isArrab?KNOWN_RECIPES.arrabiata.nameDe:isFaj?KNOWN_RECIPES.fajitas.nameDe:isDal?KNOWN_RECIPES.dal.nameDe:translateRecipeTitle(a.nameDe||a.name);
        
        const fixedInstEn=(isFaso||/fasoliyyeh/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fasoliyyeh.instructionsEn.join("\\n")
          :(isBanh||/banh\\s*mi/i.test(a.instructions||""))
          ?KNOWN_RECIPES.banhMi.instructionsEn.join("\\n")
          :(isArrab||/arrabiata/i.test(a.instructions||""))
          ?KNOWN_RECIPES.arrabiata.instructionsEn.join("\\n")
          :(isFaj||/fajita/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fajitas.instructionsEn.join("\\n")
          :(isDal||/dal/i.test(a.instructions||""))
          ?KNOWN_RECIPES.dal.instructionsEn.join("\\n")
          :cleanToEnglishInstructions(a.instructionsEn||a.instructions||"");

        const fixedInstDe=(isFaso||/fasoliyyeh/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fasoliyyeh.instructionsDe.join("\\n")
          :(isBanh||/banh\\s*mi/i.test(a.instructions||""))
          ?KNOWN_RECIPES.banhMi.instructionsDe.join("\\n")
          :(isArrab||/arrabiata/i.test(a.instructions||""))
          ?KNOWN_RECIPES.arrabiata.instructionsDe.join("\\n")
          :(isFaj||/fajita/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fajitas.instructionsDe.join("\\n")
          :(isDal||/dal/i.test(a.instructions||""))
          ?KNOWN_RECIPES.dal.instructionsDe.join("\\n")
          :cleanToGermanInstructions(a.instructionsDe||a.instructions||"");

        const fixedUtensilsEn=getRecipeUtensils({name:fixedNameEn,instructions:fixedInstEn},false);
        const fixedUtensilsDe=getRecipeUtensils({name:fixedNameDe,instructions:fixedInstDe},true);

        s(a.id,{
          name:isDe?fixedNameDe:fixedNameEn,
          nameEn:fixedNameEn,
          nameDe:fixedNameDe,
          servings:a.servings,
          ingredients:a.ingredients,
          instructions:isDe?fixedInstDe:fixedInstEn,
          instructionsEn:fixedInstEn,
          instructionsDe:fixedInstDe,
          utensilsEn:fixedUtensilsEn,
          utensilsDe:fixedUtensilsDe,
          dietOverride:a.dietOverride,
          tags:a.tags
        });
      }
    }
  },[e,isDe,s]);

  const J=a=>/[äöüß]/i.test(a)||/\\b(und|mit|der|die|das|für|von)\\b/i.test(a);
  const Z=async a=>{
    if(!(J(a.name+" "+(a.instructions??""))&&!await P({title:d.nutrition.looksGermanAlready,message:d.nutrition.recipeLooksGerman(a.name),confirmLabel:d.nutrition.translate}))){
      G(a.id);
      try{
        const x=await Me(a.name,"en","de")??translateRecipeTitle(a.name);
        const c=a.instructions?await Me(a.instructions,"en","de")??cleanToGermanInstructions(a.instructions):void 0;
        await s(a.id,{name:x,nameDe:x,servings:a.servings,ingredients:a.ingredients,instructions:c,instructionsDe:c,dietOverride:a.dietOverride,tags:a.tags});
      }finally{
        G(null);
      }
    }
  };

  const W=()=>{O(null);T(!0);};

  return t.jsxs("div",{className:"flex flex-col gap-3",children:[
    t.jsxs("div",{className:"flex gap-2",children:[
      t.jsx(_,{variant:"filled",fullWidth:!0,onClick:W,children:d.nutrition.newRecipe}),
      t.jsx(_,{variant:"tonal",onClick:()=>b(!0),children:d.nutrition.recipeSuggestions})
    ]}),
    v?t.jsx(an,{open:F,onClose:()=>b(!1),recipes:e,foods:n,onImportRecipe:r,onAddShoppingItem:u,onAddToPlan:f,dietPreference:U}):null,
    e.length>=4?t.jsx(Q,{label:d.nutrition.search,value:sq,onChange:a=>setSq(a.target.value),placeholder:d.nutrition.enterName}):null,
    e.length>0?t.jsx(Ve,{value:U,onChange:H,label:""}):null,
    e.length===0?t.jsx(re,{title:d.nutrition.noRecipes,description:d.nutrition.noRecipesDescription}):
    V.length===0?t.jsx(re,{title:d.nutrition.noMatchingRecipes,description:d.nutrition.recipeDietEmpty}):
    t.jsx("ul",{className:"flex flex-col gap-2",children:V.map(a=>{
      const x=mt(a,$);
      const c=a.ingredients.length>0;
      const g=A===a.id;
      const k=h.get(a.id);

      const displayTitle=isDe
        ?(a.nameDe||translateRecipeTitle(a.name))
        :(a.nameEn||getRecipeEnglishTitle(a.name));

      const displayInstructions=isDe
        ?(a.instructionsDe||cleanToGermanInstructions(a.instructions||""))
        :(a.instructionsEn||cleanToEnglishInstructions(a.instructions||""));

      const steps=getRecipeSteps(displayInstructions);
      const utensils=isDe
        ?(a.utensilsDe||getRecipeUtensils({name:displayTitle,instructions:displayInstructions},true))
        :(a.utensilsEn||getRecipeUtensils({name:displayTitle,instructions:displayInstructions},false));

      return t.jsx("li",{children:t.jsxs(pe,{className:"flex flex-col gap-2 p-3.5 rounded-2xl bg-surface-containerLow",children:[
        t.jsxs("div",{className:"flex items-start justify-between gap-2",children:[
          t.jsxs("div",{className:"min-w-0 flex-1",children:[
            t.jsxs("p",{className:"flex items-center gap-2 text-titleS text-onSurface",children:[
              t.jsx("span",{className:g?"break-words font-semibold":"truncate font-semibold",children:displayTitle}),
              t.jsx(ve,{diet:L.get(a.id),compact:!0})
            ]}),
            t.jsxs("p",{className:"text-caption text-onSurfaceVariant mt-0.5",children:[
              d.nutrition.servingsCount(a.servings)," · ",
              c?d.nutrition.perServing+" "+oe(x.kcal)+" · P "+ee(x.proteinG):d.nutrition.recipeNoNutrients,
              k?" · "+d.nutrition.lastUsed+" "+gt(k):""
            ]})
          ]}),
          t.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[
            t.jsx(X,{label:a.isFavorite?d.nutrition.removeFavorite:d.nutrition.markFavorite,className:a.isFavorite?"text-primary":"",onClick:()=>{Y(a.id)},children:t.jsx(K,{name:a.isFavorite?"starFilled":"star"})}),
            y?t.jsx(X,{label:d.nutrition.translateToGerman,disabled:D!==null,onClick:()=>{Z(a)},children:D===a.id?"…":t.jsx(K,{name:"translate"})}):null,
            t.jsx(X,{label:d.nutrition.edit,onClick:()=>{O(a);T(!0);},children:t.jsx(K,{name:"edit"})}),
            t.jsx(X,{label:d.common.delete,onClick:()=>{
              const w=S?.(a.id)?.trim();
              if(!w){
                const snap={name:a.name,nameEn:a.nameEn,nameDe:a.nameDe,servings:a.servings,ingredients:a.ingredients,instructions:a.instructions,instructionsEn:a.instructionsEn,instructionsDe:a.instructionsDe,dietOverride:a.dietOverride,tags:a.tags};
                l(a.id);
                undo(d.training.itemRemoved(displayTitle),()=>{i(snap)});
                return;
              }
              P({title:d.nutrition.deleteRecipeTitle,message:'„'+displayTitle+'“ '+d.nutrition.willBeRemoved,facts:[w.replace(/^Achtung:\\s*/,'')],confirmLabel:d.common.delete,danger:!0}).then(j=>{j&&l(a.id)});
            },children:t.jsx(K,{name:"delete"})})
          ]})
        ]}),

        (a.ingredients.length>0||displayInstructions)?t.jsx("button",{
          type:"button",
          className:"press-feedback text-left text-caption font-semibold text-primary mt-1 inline-flex items-center gap-1.5 hover:underline",
          onClick:()=>M(w=>w===a.id?null:a.id),
          children:g
            ?(d.nutrition.hideRecipe||(isDe?"Rezept ausblenden":"Hide recipe"))
            :(d.nutrition.showRecipe||(isDe?"Rezept anzeigen":"Show recipe"))
        }):null,

        g?t.jsxs("div",{className:"mt-2 flex flex-col gap-3.5 border-t border-line/20 pt-3",children:[
          // 1) Full Recipe Name
          t.jsxs("div",{className:"flex flex-col gap-0.5",children:[
            t.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-onSurfaceVariant",children:isDe?"Rezept":"Recipe"}),
            t.jsx("p",{className:"text-body font-bold text-onSurface break-words",children:displayTitle})
          ]}),

          // 2) Ingredients Section
          t.jsxs("div",{className:"flex flex-col gap-2",children:[
            t.jsxs("div",{className:"flex items-center justify-between",children:[
              t.jsx("span",{className:"text-label uppercase font-bold text-onSurfaceVariant",children:isDe?"Zutaten":"Ingredients"}),
              t.jsx("span",{className:"rounded-full bg-surface-containerHigh px-2.5 py-0.5 text-caption font-semibold text-primary",children:isDe?(a.servings+" Portion"+(a.servings>1?"en":"")):(a.servings+" serving"+(a.servings>1?"s":""))})
            ]}),
            a.ingredients.length>0?t.jsx("ul",{className:"flex flex-col divide-y divide-line/20 rounded-xl bg-surface-container/60 px-3 py-1",children:a.ingredients.map((ing,ingIdx)=>{
              const food=$.get(ing.foodId);
              const rawName=food?.name||(isDe?"Zutat":"Ingredient");
              const foodName=isDe?translateFoodToGerman(rawName):(ke(rawName)||rawName);
              const unitLabel=isDe
                ?(food?.perUnit==="piece"?"Stück":(food?.perUnit||"g"))
                :(food?.perUnit==="piece"?(ing.amount===1?"piece":"pieces"):(food?.perUnit||"g"));
              const formattedAmount=Math.round(ing.amount*10)/10;
              return t.jsxs("li",{className:"flex items-center justify-between py-1.5 text-body",children:[
                t.jsxs("span",{className:"flex items-center gap-2 text-onSurface font-medium",children:[
                  t.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary shrink-0"}),
                  t.jsx("span",{className:"break-words",children:foodName})
                ]}),
                t.jsxs("span",{className:"ml-2 shrink-0 font-mono text-caption font-semibold text-onSurfaceVariant",children:[formattedAmount," ",unitLabel]})
              ]},ingIdx);
            })}):t.jsx("p",{className:"text-caption italic text-onSurfaceVariant",children:isDe?"Keine Zutaten angegeben":"No ingredients listed"}),
            utensils.length>0?t.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-1.5 text-caption text-onSurfaceVariant",children:[
              t.jsx("span",{className:"font-semibold text-onSurface",children:isDe?"Benötigte Utensilien:":"Tools needed:"}),
              t.jsx("span",{className:"rounded-lg bg-surface-containerHigh px-2 py-0.5 text-caption text-onSurface",children:utensils.join(", ")})
            ]}):null
          ]}),

          // 3) Preparation Section
          steps.length>0?t.jsxs("div",{className:"flex flex-col gap-2",children:[
            t.jsx("span",{className:"text-label uppercase font-bold text-onSurfaceVariant",children:isDe?"Zubereitung":"Preparation"}),
            t.jsx("ol",{className:"flex flex-col gap-2",children:steps.map((st,sIdx)=>t.jsxs("li",{className:"flex items-start gap-2.5 rounded-xl bg-surface-container/40 p-2.5",children:[
              t.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-caption font-bold text-primary",children:sIdx+1}),
              t.jsx("span",{className:"flex-1 text-body leading-relaxed text-onSurface",children:st})
            ]},sIdx))})
          ]}):null
        ]}):null
      ]},a.id);
    })}),
    N?t.jsx(_t,{open:E,onClose:()=>T(!1),onSave:a=>C?s(C.id,a):i(a).then(Boolean),foods:n,initial:C??void 0,onCreateFood:m}):null
  ]});
}
export{gn as RecipesView};
`;

code = code.substring(0, gnStart) + newGn;

fs.writeFileSync('public/assets/RecipesView-CjjfivCb.js', code, 'utf8');
console.log('Successfully patched RecipesView-CjjfivCb.js with full bilingual suggestions engine');
