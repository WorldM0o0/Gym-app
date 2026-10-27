import{u as te,r as p,ae as ke,j as t,S as xe,T as Q,bC as Ye,af as Ge,o as de,L as I,B as _,aA as Je,aG as Ze,aH as Xe,aF as Qe,am as Pe,bD as et,I as X,k as K,ah as tt,ai as nt,a5 as ze,bE as at,y as rt,G as it,A as pe,E as re,C as st,an as we,i as ot}from"./index-DjUS4W3P.js";import{f as oe,i as lt,n as ct,E as ut,h as dt,g as ee,d as pt,M as Ee,r as mt,o as gt}from"./nutrition-DNYWydHA.js";import{l as $e,g as ft,h as ht,D as bt,f as Ue,b as ce,e as xt,c as vt}from"./diet-uOcB1Yp0.js";import{D as ve,S as Te,M as yt,a as Ve}from"./NutritionHome-Bh77HPgb.js";import{D as St,u as jt,t as Me}from"./translateText-Bx90n9K2.js";import{a as Nt}from"./suggestions-4Wt9yqCB.js";import{f as kt,n as Ie}from"./fetchWithTimeout-CbW2UsEj.js";import"./CalorieResultPreview-CdmWHN24.js";import"./IcsRangeSheet-B1kcm-nN.js";function matchTokens(text,query){const tokens=query.trim().toLowerCase().split(/[\s\-]+/).filter(Boolean);if(tokens.length===0)return!0;const hay=text.toLowerCase();return tokens.every(tok=>hay.includes(tok))}function Pt({open:e,onClose:n,foods:i,onSelect:s,title:l}){const o=te(),r=l??o.nutrition.foodPickerTitle,[m,u]=p.useState(""),f=m.trim(),S=f===""?i:i.filter(h=>matchTokens(`${ke(h.name)} ${h.name}`,f));return t.jsx(xe,{open:e,onClose:n,title:r,children:t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsxs("div",{className:"flex items-end gap-2",children:[t.jsx("div",{className:"flex-1",children:t.jsx(Q,{label:o.nutrition.search,value:m,onChange:h=>u(h.target.value),placeholder:o.nutrition.enterName})}),t.jsx(Ye,{onResult:u})]}),t.jsxs("ul",{className:"flex flex-col gap-1",children:[S.map(h=>t.jsx("li",{children:t.jsxs("button",{type:"button",onClick:()=>s(h),className:"flex w-full items-center justify-between rounded-lg bg-surface-containerHigh px-3 h-touch text-left text-body text-onSurface active:bg-surface-containerHighest",children:[t.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[t.jsx("span",{className:"truncate",children:ke(h.name)}),t.jsx(ve,{diet:h.diet,compact:!0})]}),t.jsxs("span",{className:"shrink-0 text-caption text-onSurfaceVariant",children:[oe(h.kcal)," / ",h.perAmount," ",Ge[h.perUnit]]})]})},h.id)),S.length===0?t.jsx("li",{className:"px-1 py-2 text-body text-onSurfaceVariant",children:o.nutrition.noMatches}):null]})]})})}const me="gym-app-recipe-template",ge=2,fe=100,wt=2e4,Et=30,Tt=1,Mt=100,It=["g","ml","piece"],Ct=["vegan","vegetarian","omnivore"];function Be(e){return Ct.find(n=>n===e)}function He(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function he(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}function ne(e){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:0}function At(e,n){const i=new Map(n.map(o=>[o.id,o])),s=e.ingredients.flatMap(o=>{const r=i.get(o.foodId);return r?[{name:r.name,amount:o.amount,kcal:r.kcal,proteinG:r.proteinG,carbsG:r.carbsG,fatG:r.fatG,perAmount:r.perAmount,perUnit:r.perUnit,...r.diet===void 0?{}:{diet:r.diet}}]:[]}),l=e.dietOverride??$e(e);return{type:me,formatVersion:ge,name:e.name,servings:e.servings,...e.instructions===void 0?{}:{instructions:e.instructions},...l===void 0?{}:{diet:l},tags:e.tags??[],ingredients:s}}function Rt(e){if(!He(e))return null;const n=typeof e.name=="string"?e.name.trim().slice(0,fe):"";if(n===""||!he(e.amount))return null;const i=It.find(l=>l===e.perUnit);if(!i)return null;const s=Be(e.diet);return{name:n,amount:e.amount,kcal:ne(e.kcal),proteinG:ne(e.proteinG),carbsG:ne(e.carbsG),fatG:ne(e.fatG),perAmount:he(e.perAmount)?e.perAmount:Mt,perUnit:i,...s===void 0?{}:{diet:s}}}function Ft(e){let n;try{n=JSON.parse(e)}catch{return{status:"invalid",reason:I().nutrition.errors.templateNoJson}}if(!He(n))return{status:"invalid",reason:I().nutrition.errors.templateNoData};if(n.type!==me)return{status:"invalid",reason:I().errors.notARecipeTemplate};const i=typeof n.formatVersion=="number"?n.formatVersion:0;if(!Number.isInteger(i)||i<1)return{status:"invalid",reason:I().nutrition.errors.templateNoFormat};if(i>ge)return{status:"invalid",reason:`${I().nutrition.errors.templateNewerFormat} ${String(n.formatVersion)}${I().nutrition.errors.templateUpdateApp}`};const s=typeof n.name=="string"?n.name.trim().slice(0,fe):"";if(s==="")return{status:"invalid",reason:I().nutrition.errors.templateNoName};if(!Array.isArray(n.ingredients))return{status:"invalid",reason:I().nutrition.errors.templateNoIngredientList};const l=n.ingredients.map(Rt).filter(m=>m!==null);if(l.length===0)return{status:"invalid",reason:I().nutrition.errors.templateNoIngredients};const o=typeof n.instructions=="string"?n.instructions.trim().slice(0,wt):"",r=Be(n.diet)??$e(n);return{status:"ok",template:{type:me,formatVersion:ge,name:s,servings:he(n.servings)?Math.round(n.servings):Tt,...o===""?{}:{instructions:o},...r===void 0?{}:{diet:r},tags:Array.isArray(n.tags)?n.tags.filter(m=>typeof m=="string"&&m.trim()!=="").slice(0,Et).map(m=>m.trim().slice(0,fe)):[],ingredients:l}}}function Ce(e,n){const i=new Map(n.map(o=>[de(o.name),o])),s=[],l=[];for(const o of e.ingredients){const r=i.get(de(o.name));if(!r){l.push(o);continue}s.push({foodId:r.id,amount:o.amount})}return{ingredients:s,missing:l}}function Dt(e){const n=de(e).replace(/[^a-z0-9äöüß]+/g,"-").replace(/^-+|-+$/g,"");return`gym-app-rezept_${n===""?"rezept":n}.json`}const Ae="application/json",ue=".json";function Re(){return I().nutrition.recipeTemplateName}function Lt({recipe:e,foods:n,onCreateFood:i,onTemplateLoaded:s,onBusyChange:l}){const o=te(),[r,m]=p.useState(!1),[u,f]=p.useState(null),[S,h]=p.useState(null),R=p.useRef(null),d=()=>{f(null),h(null),m(!0),l(!0)},E=()=>{m(!1),l(!1)},T=async()=>{if(!(!e||r)){d();try{const b=At(e,n);if(b.ingredients.length===0){f(o.nutrition.templateNoIngredients);return}await Je(JSON.stringify(b,null,2),{suggestedName:Dt(e.name),mimeType:Ae,extension:ue,description:Re()})==="saved"&&h(o.nutrition.templateExported)}catch(b){f(b instanceof Error?b.message:o.nutrition.exportFailed)}finally{E()}}},C=async b=>{const N=Ft(b);if(N.status==="invalid"){f(N.reason);return}const v=N.template,A=[],M=[];let D=n;for(const y of Ce(v,n).missing){const P=await i({name:y.name,kcal:y.kcal,proteinG:y.proteinG,carbsG:y.carbsG,fatG:y.fatG,perAmount:y.perAmount,perUnit:y.perUnit,diet:y.diet});P?(D=[...D,P],A.push(P.name)):M.push(y.name)}const G=Ce(v,D);if(G.ingredients.length===0){f(o.nutrition.templateNothingApplied);return}s({name:v.name,servings:v.servings,ingredients:G.ingredients,...v.instructions===void 0?{}:{instructions:v.instructions},...v.diet===void 0?{}:{dietOverride:v.diet},tags:v.tags}),h([o.nutrition.templateApplied(v.name),A.length>0?`${o.nutrition.templateCreated} ${A.join(", ")}.`:"",M.length>0?o.nutrition.templateSkipped(M.join(", ")):"",o.nutrition.saveFirst].filter(y=>y!=="").join(" "))},O=async()=>{if(!r){if(!Ze()){R.current?.click();return}d();try{const b=await Xe({mimeType:Ae,extension:ue,description:Re()});if(b.status==="cancelled")return;await C(b.text)}catch(b){f(b instanceof Error?b.message:o.nutrition.importFailed)}finally{E()}}},F=async b=>{const N=b.target.files?.[0];if(b.target.value="",!!N){d();try{await C(await Qe(N))}catch(v){f(v instanceof Error?v.message:o.nutrition.importFailed)}finally{E()}}};return t.jsxs(t.Fragment,{children:[e?t.jsx(_,{variant:"outlined",fullWidth:!0,disabled:r,onClick:()=>{T()},children:o.nutrition.exportAsTemplate}):t.jsx(_,{variant:"outlined",fullWidth:!0,disabled:r,onClick:()=>{O()},children:r?o.nutrition.templateReading:o.nutrition.templateImportAction}),t.jsx("input",{ref:R,type:"file",accept:ue,className:"hidden",onChange:b=>{F(b)}}),S?t.jsx("p",{className:"text-caption text-onSurfaceVariant",children:S}):null,u?t.jsx("p",{className:"text-caption text-danger",children:u}):null]})}function _t({open:e,onClose:n,onSave:i,foods:s,initial:l,onCreateFood:o}){const r=te(),[m,u]=p.useState(l?.name??""),[f,S]=p.useState(String(l?.servings??2)),[h,R]=p.useState(l?.ingredients??[]),[d,E]=p.useState(l?.instructions??""),[T,C]=p.useState(l?.dietOverride),[O,F]=p.useState((l?.tags??[]).join(", ")),[b,N]=p.useState(!1),[v,A]=p.useState(null),[M,D]=p.useState(!1),G=a=>{u(a.name),S(String(a.servings)),R(a.ingredients),E(a.instructions??""),C(a.dietOverride),F(a.tags.join(", "))},y=p.useMemo(()=>new Map(s.map(a=>[a.id,a])),[s]),P=p.useMemo(()=>ft({ingredients:h},y),[h,y]),z=P===void 0?ht():bt[P],Y=T!==void 0&&P!==void 0&&P!==T,$=a=>y.get(a)?.name??"Unbekannt",B=a=>y.get(a)?.perUnit??"g",H=Math.max(1,Pe(f)||1),U=h.reduce((a,x)=>{const c=y.get(x.foodId);return c?lt(a,ct(c,x.amount)):a},{...ut}),L=dt(U,1/H),V=a=>{R(x=>[...x,{foodId:a.id,amount:a.perUnit==="piece"?1:100}]),N(!1)},J=(a,x)=>{const c=Math.min(x,yt);R(g=>g.map((k,w)=>w===a?{...k,amount:c}:k))},Z=a=>{R(x=>x.filter((c,g)=>g!==a))},W=async()=>{const a=tt(f,Te);if(a===null){A(nt(r.nutrition.servingsWord,Te));return}A(null);const x=O.split(",").map(g=>g.trim()).filter(g=>g.length>0);await i({name:m,servings:Math.round(a),ingredients:h,instructions:d,dietOverride:T,tags:x})?n():A(r.nutrition.recipeInvalid)};return t.jsxs(xe,{open:e,onClose:n,title:l?r.nutrition.editRecipe:r.nutrition.newRecipeTitle,children:[t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(Q,{label:r.nutrition.name,value:m,onChange:a=>u(a.target.value),placeholder:r.nutrition.recipeNamePlaceholder}),t.jsx(Q,{label:r.nutrition.servings,inputMode:"numeric",value:f,onChange:a=>S(a.target.value)}),t.jsx("div",{className:"flex flex-col gap-2",children:h.map((a,x)=>t.jsxs("div",{className:"flex items-center gap-2 rounded-xl2 bg-surface-containerHigh p-3",children:[t.jsx("span",{className:"min-w-0 flex-1 truncate text-body text-onSurface",children:$(a.foodId)}),t.jsx("input",{inputMode:"decimal",value:et(a.amount),onChange:c=>J(x,Pe(c.target.value)),"aria-label":r.nutrition.amountForItem($(a.foodId)),className:"h-touch w-20 rounded-lg bg-surface-containerHighest px-2 text-center text-onSurface"}),t.jsx("span",{className:"w-8 text-caption text-onSurfaceVariant",children:Ge[B(a.foodId)]}),t.jsx(X,{label:r.nutrition.removeIngredient,onClick:()=>Z(x),children:t.jsx(K,{name:"close"})})]},`${a.foodId}-${x}`))}),t.jsx(_,{variant:"tonal",fullWidth:!0,onClick:()=>N(!0),children:r.nutrition.recipeAddIngredient}),h.length>0?t.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:["Pro Portion: ",oe(L.kcal)," · P ",ee(L.proteinG)," · K"," ",ee(L.carbsG)," · F ",ee(L.fatG)]}):null,t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:r.nutrition.fromIngredients}),t.jsx(ve,{diet:P,compact:!0}),t.jsx("span",{className:"text-caption text-onSurface",children:z})]}),P===void 0&&h.length>0?t.jsx("p",{className:"text-caption text-onSurfaceVariant",children:r.nutrition.recipeIngredientUnclassified}):null,t.jsx(St,{value:T,onChange:C,label:r.nutrition.setManually,unknownLabel:r.nutrition.dietAutomatic}),Y?t.jsx("p",{className:"text-caption text-warning",children:r.nutrition.dietOverrideMismatch(z.toLowerCase())}):null]}),t.jsx(Q,{label:r.nutrition.tagsLabel,value:O,onChange:a=>F(a.target.value),placeholder:r.nutrition.tagsPlaceholder}),t.jsxs("label",{className:"flex flex-col gap-1",children:[t.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:r.nutrition.preparationOptional}),t.jsx("textarea",{value:d,onChange:a=>E(a.target.value),rows:5,placeholder:r.nutrition.recipeStepsPlaceholder,className:"min-h-touch w-full rounded-xl2 bg-surface-containerHigh p-3 text-body text-onSurface placeholder:text-onSurfaceVariant"})]}),v?t.jsx("p",{className:"text-caption text-danger",children:v}):null,t.jsx(Lt,{recipe:l,foods:s,onCreateFood:o,onTemplateLoaded:G,onBusyChange:D}),t.jsx(_,{variant:"filled",fullWidth:!0,disabled:M,onClick:()=>{W()},children:r.common.save})]}),t.jsx(Pt,{open:b,onClose:()=>N(!1),foods:s,onSelect:V,title:r.nutrition.recipePickIngredient})]})}const ae="TheMealDB",ie="https://www.themealdb.com/api/json/v1/1",Fe="Vegan",Ot="Vegetarian";function We(e){return e==="vegan"?[Fe]:e==="vegetarian"?[Fe,Ot]:[]}function Gt(e,n){const i=We(n);return i.length===0||i.includes(e.category)}function zt(e,n,i=Math.random){const s=[...e],l=[];for(;l.length<n&&s.length>0;){const o=Math.min(Math.floor(i()*s.length),s.length-1),[r]=s.splice(o,1);r!==void 0&&l.push(r)}return l}function ye(e){const n=typeof e.idMeal=="string"?e.idMeal:"";if(!n)return null;const i=[];for(let s=1;s<=20;s++){const l=e[`strIngredient${s}`],o=e[`strMeasure${s}`];if(typeof l=="string"&&l.trim()!==""){const r=typeof o=="string"?o.trim():"";i.push(`${r} ${l.trim()}`.trim())}}return{id:n,name:typeof e.strMeal=="string"?e.strMeal:I().nutrition.recipeWord,category:typeof e.strCategory=="string"?e.strCategory:"",area:typeof e.strArea=="string"?e.strArea:"",thumb:typeof e.strMealThumb=="string"?e.strMealThumb:"",instructions:typeof e.strInstructions=="string"?e.strInstructions:"",ingredients:i,cachedAt:Date.now()}}async function Se(e){try{await ze("Rezepte cachen",async n=>{const i=n.transaction("cachedMeals","readwrite");for(const s of e)await i.store.put(s);await i.done})}catch{}}async function se(e){let n,i,s;try{({response:n,json:i,cancel:s}=await kt(e,{headers:{Accept:"application/json"}}))}catch(l){throw new Error(Ie(ae,l))}if(!n.ok)throw s(),new Error(I().errors.serviceUnavailable(ae));try{return await i()}catch(l){throw new Error(Ie(ae,l))}}async function $t(e,n="all"){const i=We(n);if(i.length>0)return Ut(i,e);const s=await Promise.allSettled(Array.from({length:e},()=>se(`${ie}/random.php`)));be(s);const l=[],o=new Set;for(const r of s){if(r.status!=="fulfilled")continue;const m=r.value.meals&&r.value.meals.length>0?r.value.meals[0]:void 0;if(!m)continue;const u=ye(m);u&&!o.has(u.id)&&(o.add(u.id),l.push(u))}return l.length>0&&Se(l),l}function be(e){const n=e.find(s=>s.status==="rejected");if(!n||!e.every(s=>s.status==="rejected"))return;const i=n.status==="rejected"?n.reason:void 0;throw i instanceof Error?i:new Error(I().errors.serviceUnavailable(ae))}async function Ut(e,n){const i=await Promise.allSettled(e.map(r=>se(`${ie}/filter.php?c=${encodeURIComponent(r)}`)));be(i);const s=new Set;for(const r of i)if(!(r.status!=="fulfilled"||!r.value.meals))for(const m of r.value.meals)typeof m.idMeal=="string"&&m.idMeal!==""&&s.add(m.idMeal);if(s.size===0)return[];const l=await Promise.allSettled(zt([...s],n).map(r=>se(`${ie}/lookup.php?i=${encodeURIComponent(r)}`)));be(l);const o=[];for(const r of l){if(r.status!=="fulfilled")continue;const m=r.value.meals&&r.value.meals.length>0?r.value.meals[0]:void 0,u=m?ye(m):null;u&&o.push(u)}return o.length>0&&Se(o),o}async function Vt(e){const n=e.trim();if(n==="")return[];const i=await se(`${ie}/search.php?s=${encodeURIComponent(n)}`);if(!i.meals)return[];const s=i.meals.map(ye).filter(l=>l!==null);return s.length>0&&Se(s),s}async function Bt(){try{const e=await ze("Rezept-Cache lesen",i=>i.getAll("cachedMeals")),n=Date.now();return e.filter(i=>!at(i.cachedAt,n))}catch{return[]}}const De={g:1,gr:1,gram:1,grams:1,gramme:1,grammes:1,kg:1e3,ml:1,l:1e3,cl:10,dl:100,oz:28,ounce:28,ounces:28,lb:454,lbs:454,pound:454,pounds:454,cup:240,cups:240,tbsp:15,tbs:15,tablespoon:15,tablespoons:15,tsp:5,teaspoon:5,teaspoons:5,clove:5,cloves:5,slice:20,slices:20,can:400,cans:400,tin:400,tins:400,handful:30,pinch:1,dash:1,sprig:3,sprigs:3,knob:15,stick:100},Le=new Set(["piece","pieces"]),_e=100,Ht=50,Wt=2,qt=[{pattern:/chicken/,foodPart:"hähnch"},{pattern:/turkey/,foodPart:"pute"},{pattern:/pork/,foodPart:"schweinefilet"},{pattern:/bacon/,foodPart:"speck"},{pattern:/\bham\b|gammon/,foodPart:"kochschinken"},{pattern:/beef|steak|mince|minced|ground meat/,foodPart:"rinderhack"},{pattern:/shrimp|prawn/,foodPart:"garnelen"},{pattern:/salmon/,foodPart:"lachs"},{pattern:/tuna/,foodPart:"thunfisch"},{pattern:/cod|haddock|pollock|white fish/,foodPart:"kabeljau"},{pattern:/\begg(?!plant)/,foodPart:"ei ("},{pattern:/tofu/,foodPart:"tofu"},{pattern:/skyr/,foodPart:"skyr"},{pattern:/quark/,foodPart:"quark"},{pattern:/yog(?:h)?urt/,foodPart:"joghurt"},{pattern:/whey|protein powder/,foodPart:"whey"},{pattern:/mozzarella/,foodPart:"mozzarella"},{pattern:/parmesan|parmigiano/,foodPart:"parmesan"},{pattern:/ricotta/,foodPart:"ricotta"},{pattern:/feta/,foodPart:"feta"},{pattern:/cream cheese/,foodPart:"frischkäse"},{pattern:/cheddar|cheese|gouda/,foodPart:"gouda"},{pattern:/coconut (?:milk|cream)/,foodPart:"kokosmilch"},{pattern:/oat milk/,foodPart:"hafermilch"},{pattern:/cream/,foodPart:"schlagsahne"},{pattern:/milk/,foodPart:"vollmilch"},{pattern:/olive oil/,foodPart:"olivenöl"},{pattern:/coconut oil/,foodPart:"kokosöl"},{pattern:/peanut butter/,foodPart:"erdnussbutter"},{pattern:/almond/,foodPart:"mandeln"},{pattern:/walnut/,foodPart:"walnüsse"},{pattern:/cashew/,foodPart:"cashew"},{pattern:/butter/,foodPart:"butter"},{pattern:/vegetable oil|sunflower oil|rapeseed oil|canola oil|sesame oil|\boil\b/,foodPart:"pflanzenöl"},{pattern:/brown rice/,foodPart:"vollkornreis"},{pattern:/rice/,foodPart:"reis"},{pattern:/whole ?(?:meal|wheat|grain) pasta/,foodPart:"vollkornnudeln"},{pattern:/pasta|spaghetti|macaroni|noodle|penne|fusilli|tagliatelle|linguine|lasagne|lasagna/,foodPart:"nudeln"},{pattern:/couscous/,foodPart:"couscous"},{pattern:/quinoa/,foodPart:"quinoa"},{pattern:/bulgur|bulghur/,foodPart:"bulgur"},{pattern:/tortilla|wrap/,foodPart:"tortilla"},{pattern:/breadcrumb|bread crumb|panko/,foodPart:"semmelbrösel"},{pattern:/flour/,foodPart:"weizenmehl"},{pattern:/sugar/,foodPart:"zucker"},{pattern:/honey/,foodPart:"honig"},{pattern:/\boat/,foodPart:"haferflocken"},{pattern:/sweet potato/,foodPart:"süßkartoffel"},{pattern:/potato/,foodPart:"kartoffeln"},{pattern:/toast/,foodPart:"toastbrot"},{pattern:/bread|baguette|\bbun\b/,foodPart:"vollkornbrot"},{pattern:/lentil/,foodPart:"linsen"},{pattern:/chickpea|garbanzo/,foodPart:"kichererbsen"},{pattern:/kidney bean/,foodPart:"kidneybohnen"},{pattern:/black bean/,foodPart:"schwarze bohnen"},{pattern:/green bean|string bean/,foodPart:"grüne bohnen"},{pattern:/\bbean/,foodPart:"kidneybohnen"},{pattern:/\bpea(?!nut|ch|r)/,foodPart:"erbsen"},{pattern:/garlic/,foodPart:"knoblauch"},{pattern:/carrot/,foodPart:"karotte"},{pattern:/zucchini|courgette/,foodPart:"zucchini"},{pattern:/eggplant|aubergine/,foodPart:"aubergine"},{pattern:/mushroom/,foodPart:"champignons"},{pattern:/sweetcorn|corn kernel|\bcorn\b/,foodPart:"mais"},{pattern:/cauliflower/,foodPart:"blumenkohl"},{pattern:/broccoli/,foodPart:"brokkoli"},{pattern:/spinach/,foodPart:"spinat"},{pattern:/cucumber/,foodPart:"gurke"},{pattern:/leek/,foodPart:"lauch"},{pattern:/ginger/,foodPart:"ingwer"},{pattern:/bell pepper|red pepper|green pepper|paprika|capsicum/,foodPart:"paprika"},{pattern:/onion|shallot/,foodPart:"zwiebel"},{pattern:/avocado/,foodPart:"avocado"},{pattern:/tomato (?:paste|puree|purée|passata)|tomato concentrate/,foodPart:"tomatenmark"},{pattern:/chopped tomato|canned tomato|tinned tomato|crushed tomato|diced tomato/,foodPart:"gehackte tomaten"},{pattern:/tomato/,foodPart:"tomate"},{pattern:/banana/,foodPart:"banane"},{pattern:/apple/,foodPart:"apfel"},{pattern:/blueberr/,foodPart:"blaubeeren"},{pattern:/strawberr/,foodPart:"erdbeeren"},{pattern:/orange/,foodPart:"orange"},{pattern:/lemon|lime/,foodPart:"zitrone"},{pattern:/tomato ketchup|ketchup/,foodPart:"ketchup"},{pattern:/mayonnaise|\bmayo\b/,foodPart:"mayonnaise"},{pattern:/mustard/,foodPart:"senf"},{pattern:/soy sauce|soya sauce/,foodPart:"sojasauce"}];function Kt(e){const n=e.replace(",",".").trim();if(n==="")return 1;const i=n.match(/^([\d.]+)\s*-\s*([\d.]+)$/);if(i)return(Number(i[1])+Number(i[2]))/2;const s=n.match(/^(\d+)\s+(\d+)\/(\d+)$/);if(s)return Number(s[1])+Number(s[2])/Number(s[3]);const l=n.match(/^(\d+)\/(\d+)$/);if(l)return Number(l[1])/Number(l[2]);const o=Number(n);return Number.isFinite(o)&&o>0?o:1}function qe(e){let n=e.trim();const i=n.match(/^(\d+(?:[.,]\d+)?(?:\s+\d+\s*\/\s*\d+)?(?:\s*\/\s*\d+)?(?:\s*-\s*\d+(?:[.,]\d+)?)?)\s*/);let s=1,l=!1;i&&(s=Kt(i[1]??""),l=!0,n=n.slice(i[0]?.length??0));let o="";const r=n.match(/^([a-zA-Z]+)\.?\s+/);if(r){const f=(r[1]??"").toLowerCase();(f in De||Le.has(f))&&(o=f,n=n.slice(r[0]?.length??0))}const m=n.trim(),u=De[o];return u!==void 0?{grams:s*u,count:null,name:m}:Le.has(o)?{grams:null,count:s,name:m}:{grams:null,count:l?s:1,name:m}}function je(e,n){const i=e.toLowerCase();for(const s of qt)if(s.pattern.test(i)){const l=n.filter(o=>o.name.toLowerCase().includes(s.foodPart));if(l.length>0)return l.reduce((o,r)=>r.name.length<o.name.length?r:o)}}function Ke(e,n){return n.perUnit==="piece"?e.count!==null?e.count:e.grams!==null?Math.max(1,Math.round(e.grams/Ht)):1:e.grams!==null?e.grams:e.count!==null?e.count*_e:_e}const Yt=[/\bsalt\b/,/\bpepper(?:corn)?s?\b/,/\bwater\b/,/\boil\b/,/\bsugar\b/,/\bflour\b/,/\bbutter\b/,/vinegar/,/\byeast\b/,/baking (?:powder|soda)/,/bicarbonate/,/cornflour|cornstarch|corn starch/,/stock|broth|bouillon/,/\bspice/,/seasoning/,/cumin|turmeric|cinnamon|nutmeg|paprika powder|cayenne|chilli powder|chili powder|curry powder/,/oregano|thyme|rosemary|\bbasil\b|\bbay\b|\bcloves?\b|cardamom|coriander seed|ground coriander|garam masala/];function Jt(e){const n=e.toLowerCase();return/bell pepper|red pepper|green pepper|paprika|capsicum/.test(n)?!1:Yt.some(i=>i.test(n))}const Zt=[{pattern:/spring onion|scallion|green onion/,de:"Frühlingszwiebel"},{pattern:/parsley/,de:"Petersilie"},{pattern:/coriander|cilantro/,de:"Koriander"},{pattern:/\bmint\b/,de:"Minze"},{pattern:/\bdill\b/,de:"Dill"},{pattern:/chive/,de:"Schnittlauch"},{pattern:/lettuce/,de:"Salat"},{pattern:/celery/,de:"Sellerie"},{pattern:/pumpkin|squash/,de:"Kürbis"},{pattern:/\blime\b/,de:"Limette"},{pattern:/chill?i|chile\b|jalapeno|jalapeño/,de:"Chili"},{pattern:/coconut/,de:"Kokos"},{pattern:/\bpeas?\b/,de:"Erbsen"},{pattern:/\bcorn\b|sweetcorn/,de:"Mais"}];function Xt(e,n){const i=je(e,n);if(i)return i.name;const s=e.toLowerCase();for(const l of Zt)if(l.pattern.test(s))return l.de;return e}function Qt(e,n){const i=new Map;for(const s of e.ingredients){const l=qe(s);if(l.name===""||Jt(l.name))continue;const o=je(l.name,n),r=o?o.name:Xt(l.name,n),m=o?o.perUnit:l.grams!==null?"g":"piece",u=o?Ke(l,o):l.grams??l.count??1,f=`${r.toLowerCase()}|${m}`,S=i.get(f);S?S.amount+=u:i.set(f,{name:r,amount:u,unit:m})}return[...i.values()]}
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
    match: /banh\s*mi/i,
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
  [/\bvegan\b/gi, "Veganes"],
  [/\bvegetarian\b/gi, "Vegetarisches"],
  [/\bspicy\b/gi, "Pikantes"],
  [/\bcrispy\b/gi, "Knuspriges"],
  [/\bcreamy\b/gi, "Cremiges"],
  [/\broasted\b/gi, "Geröstetes"],
  [/\bbaked\b/gi, "Gebackenes"],
  [/\bgrilled\b/gi, "Gegrilltes"],
  [/\bfried\b/gi, "Gebratenes"],
  [/\bsoups?\b/gi, "Suppe"],
  [/\bstews?\b/gi, "Eintopf"],
  [/\bcurrys?\b/gi, "Curry"],
  [/\bsalads?\b/gi, "Salat"],
  [/\bpasta\b/gi, "Pasta"],
  [/\brice\b/gi, "Reis"],
  [/\bbowls?\b/gi, "Bowl"],
  [/\bsandwich(?:es)?\b/gi, "Sandwich"],
  [/\bwraps?\b/gi, "Wrap"],
  [/\bbeans?\b/gi, "Bohnen"],
  [/\blentils?\b/gi, "Linsen"],
  [/\bchickpeas?\b/gi, "Kichererbsen"],
  [/\bpotatoes?\b/gi, "Kartoffeln"],
  [/\bmushrooms?\b/gi, "Pilze"],
  [/\btomato(?:es)?\b/gi, "Tomaten"],
  [/\bgarlic\b/gi, "Knoblauch"],
  [/\bspinach\b/gi, "Spinat"],
  [/\bbroccoli\b/gi, "Brokkoli"],
  [/\bcauliflower\b/gi, "Blumenkohl"],
  [/\btofu\b/gi, "Tofu"],
  [/\btempeh\b/gi, "Tempeh"],
  [/\bchicken\b/gi, "Hähnchen"],
  [/\bbeef\b/gi, "Rindfleisch"],
  [/\bpork\b/gi, "Schweinefleisch"],
  [/\bsalmon\b/gi, "Lachs"],
  [/\btuna\b/gi, "Thunfisch"],
  [/\bshrimps?|prawns?\b/gi, "Garnelen"],
  [/\bwith\b/gi, "mit"],
  [/\band\b/gi, "und"],
  [/\bin\b/gi, "in"]
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
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:tablespoons?|tbsp|tbs)\b/gi, "$1 EL"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:teaspoons?|tsp)\b/gi, "$1 TL"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:cups?)\b/gi, "$1 Tasse(n)"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:cloves?)\b/gi, "$1 Zehe(n)"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:slices?)\b/gi, "$1 Scheibe(n)"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:cans?|tins?)\b/gi, "$1 Dose(n)"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:handfuls?)\b/gi, "$1 Handvoll"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:bunches?)\b/gi, "$1 Bund"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:pinches?|pinch)\b/gi, "$1 Prise(n)"],
  [/\b(\d+(?:\/\d+|\.\d+)?)\s*(?:dashes?|dash)\b/gi, "$1 Spritzer"],
  [/\bpinch\b/gi, "1 Prise"],
  [/\bdash\b/gi, "1 Spritzer"],
  [/\bto taste\b/gi, "nach Geschmack"]
];

function translateRawIngredientLine(line, isDe) {
  if (!line || !isDe) return line;
  let res = line;
  for (const [re, de] of RAW_UNIT_REPLACEMENTS) {
    res = res.replace(re, de);
  }
  for (const [en, de] of FOODS_EN_TO_DE.entries()) {
    const rx = new RegExp("\\b" + en + "\\b", "gi");
    res = res.replace(rx, de);
  }
  return res;
}

const DENGLISCH_REGEX = /\b(geben the|in a (?:große|kleine)|drizzle mit|bis beans|bis the|und put the|hinzufügen [a-z]+ und|continue to garen|servieren as|scooping up mit|den Ofen vorheizen to|unter Rühren braten the)\b/i;

function isDenglischText(str) {
  if (!str || typeof str !== "string") return false;
  return DENGLISCH_REGEX.test(str);
}

function cleanToEnglishInstructions(text) {
  if (!text) return "";
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(text)) return KNOWN_RECIPES[k].instructionsEn.join("\n");
  }
  return text
    .replace(/\bgeben the\b/gi, "place the")
    .replace(/\bin a große Topf\b/gi, "in a large pot")
    .replace(/\bgroße Topf\b/gi, "large pot")
    .replace(/\bTopf\b/gi, "pot")
    .replace(/\bPfanne\b/gi, "pan")
    .replace(/\bSchüssel\b/gi, "bowl")
    .replace(/\bdrizzle mit\b/gi, "drizzle with")
    .replace(/\bwürzen mit Salz to taste\b/gi, "season with salt to taste")
    .replace(/\bwürzen mit\b/gi, "season with")
    .replace(/\bput the lid on the Topf\b/gi, "put the lid on the pot")
    .replace(/\bgaren bei mittlerer bis starker Hitze\b/gi, "cook over medium-high heat")
    .replace(/\bgaren bei mittlerer Hitze\b/gi, "cook over medium heat")
    .replace(/\bgaren bei starker Hitze\b/gi, "cook over high heat")
    .replace(/\bgaren bei schwacher Hitze\b/gi, "cook over low heat")
    .replace(/\bbis beans are cooked\b/gi, "until beans are cooked")
    .replace(/\bbis the\b/gi, "until the")
    .replace(/\bbis\b/gi, "until")
    .replace(/\bhinzufügen cilantro und Knoblauch to the beans\b/gi, "add cilantro and garlic to the beans")
    .replace(/\bhinzufügen\b/gi, "add")
    .replace(/\bKnoblauch\b/gi, "garlic")
    .replace(/\bcontinue to garen just bis\b/gi, "continue to cook just until")
    .replace(/\bcontinue to garen\b/gi, "continue to cook")
    .replace(/\bgaren\b/gi, "cook")
    .replace(/\bscooping up mit warm pita bread\b/gi, "scooping up with warm pita bread")
    .replace(/\bscooping up mit\b/gi, "scooping up with")
    .replace(/\bmit warm pita bread\b/gi, "with warm pita bread")
    .replace(/\bservieren as a side dish\b/gi, "serve as a side dish")
    .replace(/\bservieren as\b/gi, "serve as")
    .replace(/\bservieren\b/gi, "serve")
    .replace(/\bund\b/gi, "and")
    .replace(/\bmit\b/gi, "with");
}

const CULINARY_SENTENCE_MAP = [
  [/bring a large pot of (?:salted )?water to a boil/gi, "Einen großen Topf mit gesalzenem Wasser zum Kochen bringen"],
  [/bring to a boil/gi, "zum Kochen bringen"],
  [/cook according to (?:the )?package instructions(?:, about (\d+) minutes)?/gi, "Nach Packungsanweisung (ca. $1 Minuten) al dente kochen"],
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
  [/preheat (?:the )?oven to (\d+)°?C(?:\/(\d+)°?C fan)?/gi, "Den Backofen auf $1 °C (Umluft $2 °C) vorheizen"],
  [/preheat (?:the )?oven to (\d+)°?F/gi, "Den Backofen auf ca. 180 °C vorheizen"],
  [/bake in the oven for (\d+) (?:to (\d+) )?minutes/gi, "Im Ofen für ca. $1 bis $2 Minuten backen"],
  [/season with salt and pepper(?: to taste)?/gi, "Nach Geschmack mit Salz und Pfeffer würzen"],
  [/season with salt to taste/gi, "Nach Geschmack mit Salz würzen"],
  [/season to taste with salt and pepper/gi, "Mit Salz und Pfeffer abschmecken"],
  [/toss (?:everything )?together/gi, "Alles gründlich miteinander vermengen"],
  [/whisk (?:everything )?together/gi, "Alles gut miteinander verquirlen"],
  [/stir in the (?:chopped )?tomatoes/gi, "Die gehackten Tomaten einrühren"],
  [/reduce heat and simmer for (\d+) minutes/gi, "Die Hitze reduzieren und für ca. $1 Minuten sanft köcheln lassen"],
  [/reduce (?:the )?heat and simmer/gi, "Die Hitze reduzieren und sanft köcheln lassen"],
  [/garnish with (?:fresh )?([a-z]+) and serve/gi, "Mit frischen Kräutern garnieren und servieren"],
  [/garnish with/gi, "garnieren mit"],
  [/serve (?:warm|hot|immediately)/gi, "Heiß bzw. warm servieren"],
  [/serve as a (?:main course|side dish)/gi, "Als Hauptgericht oder Beilage servieren"],
  [/Place the green beans (?:into|in) a large pot, and drizzle with olive oil\./gi, "Die grünen Bohnen in einen großen Topf geben und mit Olivenöl beträufeln."],
  [/Season with salt to taste, and put the lid on the pot\./gi, "Nach Geschmack mit Salz würzen und den Topf mit einem Deckel verschließen."],
  [/Cook over medium-high heat, stirring occasionally, until beans are cooked to your desired doneness\./gi, "Bei mittlerer bis starker Hitze unter gelegentlichem Umrühren garen, bis die Bohnen den gewünschten Gargrad erreicht haben."],
  [/Syrians like it cooked until the green beans are turning brownish in color\./gi, "Traditionell werden sie gegart, bis sie leicht bräunlich werden."],
  [/The idea is not to saute them, but to let them steam in the moisture released by the ice crystals\./gi, "Sie sollen in der eigenen Feuchtigkeit dünsten und nicht scharf anbraten."],
  [/Add cilantro and garlic to the beans, and continue to cook just until the cilantro has started to wilt\./gi, "Koriander und gehackten Knoblauch hinzufügen und weitergaren, bis der Koriander zusammenfällt."],
  [/Eat as a main course by scooping up with warm pita bread or serve as a side dish\./gi, "Als Hauptgericht mit warmem Fladenbrot oder als Beilage servieren."],
  [/\bstep 1\b/gi, "Schritt 1: "],
  [/\bstep 2\b/gi, "Schritt 2: "],
  [/\bstep 3\b/gi, "Schritt 3: "],
  [/\bstep 4\b/gi, "Schritt 4: "]
];

function cleanToGermanInstructions(text) {
  if (!text) return "";
  for (const k of Object.keys(KNOWN_RECIPES)) {
    if (KNOWN_RECIPES[k].match.test(text)) return KNOWN_RECIPES[k].instructionsDe.join("\n");
  }
  let res = cleanToEnglishInstructions(text);
  for (const [re, de] of CULINARY_SENTENCE_MAP) {
    res = res.replace(re, de);
  }
  return res;
}

function getRecipeSteps(instructions) {
  if (!instructions || !instructions.trim()) return [];
  const lines = instructions.split(/\r?\n+/).map(s => s.replace(/^\s*\d+[\.\)]\s*/, "").replace(/^step\s*\d+\s*:?\s*/i, "").trim()).filter(Boolean);
  if (lines.length > 1) return lines;
  const sentences = instructions.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9])/).map(s => s.trim()).filter(Boolean);
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
function tn(e,n){const i=[];let s=0;for(const l of e.ingredients){const o=qe(l),r=je(o.name,n);if(!r)continue;const m=Ke(o,r);if(m<=0)continue;s+=1;const u=i.find(f=>f.foodId===r.id);u?u.amount+=m:i.push({foodId:r.id,amount:m})}return{ingredients:i,matchedCount:s,totalCount:e.ingredients.length}}const nn=6;function an({open:e,onClose:n,recipes:i,foods:s,onImportRecipe:l,onAddShoppingItem:o,onAddToPlan:r,dietPreference:m}){
  const u=te(),{settings:f}=rt(),S=f.suggestionMode==="external",[h,R]=p.useState(null),d=h??m??Ue,E=p.useMemo(()=>new Map(s.map(c=>[c.id,c])),[s]),T=p.useMemo(()=>Nt(i,E,d),[i,E,d]),[C,O]=p.useState(""),[F,b]=p.useState([]),[N,v]=p.useState(!1),[A,M]=p.useState(null),[D,G]=p.useState(null),[y,P]=p.useState(new Set),[z,Y]=p.useState({}),[$,B]=p.useState(null),[H,U]=p.useState(()=>it(new Date)),[L,V]=p.useState({});

  const J=async(c,g)=>{
    if(!await r(c.id,H,g)){
      V(q=>({...q,[c.id]:"Einplanen fehlgeschlagen."}));
      return;
    }
    const w=c.servings>0?c.servings:1;
    let j=0;
    for(const q of c.ingredients){
      const le=E.get(q.foodId);
      if(!le)continue;
      const Ne=q.amount/w;
      Ne<=0||await o(le.name,Ne,le.perUnit)&&j++;
    }
    B(null);
    V(q=>({...q,[c.id]:`${Ee[g]} ${u.nutrition.plannedFor} · ${u.nutrition.ingredientsInShopping(j)}`}));
  };

  const Z=async c=>{
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
    Y(j=>({...j,[c.id]:{matched:k,total:w}}));
    P(j=>new Set(j).add(c.id));
  };

  p.useEffect(()=>{S&&Bt().then(c=>b(g=>g.length===0?c:g));},[S]);
  const W=p.useMemo(()=>F.filter(c=>Gt(c,d)),[F,d]);

  const a=async()=>{
    v(!0);M(null);
    try{b(await $t(nn,d));}catch(c){M(c instanceof Error?c.message:u.suggestions.fetchFailed);}finally{v(!1);}
  };

  const x=async()=>{
    v(!0);M(null);
    try{
      const c=await Vt(C);
      b(c);
      c.length===0&&M("Keine Rezepte gefunden.");
    }catch(c){
      M(c instanceof Error?c.message:u.suggestions.searchFailed);
    }finally{
      v(!1);
    }
  };

  return t.jsx(xe,{open:e,onClose:n,title:u.suggestions.suggestionsTitle,variant:"screen",children:t.jsxs("div",{className:"flex flex-col gap-3",children:[
    S||i.length>0?t.jsx(Ve,{value:d,onChange:R}):null,
    S?t.jsxs(t.Fragment,{children:[
      t.jsxs("div",{className:"flex items-end gap-2",children:[
        t.jsx("div",{className:"flex-1",children:t.jsx(Q,{label:u.suggestions.searchRecipe,value:C,onChange:c=>O(c.target.value),placeholder:u.suggestions.searchRecipePlaceholder})}),
        t.jsx(_,{variant:"tonal",disabled:N,onClick:()=>{x();},children:u.suggestions.search})
      ]}),
      t.jsx(_,{variant:"filled",fullWidth:!0,disabled:N,onClick:()=>{a();},children:N?u.common.loading:u.suggestions.randomRecipes}),
      A?t.jsx("p",{className:"text-caption text-danger",children:A}):null,
      F.length>0&&W.length===0?t.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[u.suggestions.noHitsForDiet," „",ce[d],"'. ",u.suggestions.mealDbCategoryHint]}):null,
      W.map(c=>{
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
          t.jsx("button",{type:"button",className:"press-feedback text-left text-caption font-semibold text-primary inline-flex items-center gap-1 hover:underline",onClick:()=>G(k=>k===c.id?null:c.id),children:D===c.id?(curIsDe?"Weniger":"Less"):(curIsDe?"Zutaten & Zubereitung":"Ingredients & preparation")}),
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
          t.jsx(_,{variant:"tonal",fullWidth:!0,disabled:y.has(c.id),onClick:()=>{Z(c);},children:y.has(c.id)?t.jsxs(t.Fragment,{children:[t.jsx(K,{name:"check",size:"sm",className:"mr-1 inline-block align-text-bottom"}),u.suggestions.addedToRecipesAndShopping]}):u.suggestions.addRecipe}),
          g?t.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[u.suggestions.nutrientsEstimated," ",g.matched," / ",g.total," ",u.suggestions.nutrientsMatched,g.matched<g.total?u.suggestions.nutrientsRest:""]}):null
        ]},c.id);
      }),
      t.jsx("p",{className:"text-caption text-onSurfaceVariant",children:u.suggestions.mealDbNote})
    ]}):i.length===0?t.jsx(re,{title:u.suggestions.noRecipes,description:u.suggestions.noRecipesDescription}):T.length===0?t.jsx(re,{title:u.suggestions.noMatchingRecipes,description:`${u.suggestions.noOwnRecipeForDietPrefix} „${ce[d]}". ${u.suggestions.noOwnRecipeForDiet}`}):t.jsxs(t.Fragment,{children:[
      t.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[curIsDe?"Deine proteinreichsten Rezepte":"Your highest protein recipes",d==="all"?"":` (${ce[d]})`,":"]}),
      T.map(c=>{
        const g=c.recipe,k=$===g.id,w=L[g.id];
        return t.jsxs(pe,{className:"flex flex-col gap-2",children:[
          t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[
            t.jsx("span",{className:"min-w-0 truncate text-body text-onSurface",children:g.name}),
            t.jsxs("span",{className:"shrink-0 text-caption text-onSurfaceVariant",children:[oe(c.perServing.kcal)," · P ",ee(c.perServing.proteinG)]})
          ]}),
          t.jsx(_,{variant:k?"outlined":"tonal",fullWidth:!0,onClick:()=>B(k?null:g.id),children:k?u.common.cancel:u.nutrition.addToPlan}),
          k?t.jsxs("div",{className:"animate-rise-in flex flex-col gap-2",children:[
            t.jsxs("label",{className:"flex flex-col gap-1",children:[
              t.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:u.suggestions.day}),
              t.jsx("input",{type:"date",value:H,onChange:j=>U(j.target.value),className:"h-touch rounded-lg border border-transparent bg-surface-containerHigh px-3 text-onSurface focus:outline-none focus:ring-2 focus:ring-primary"})
            ]}),
            t.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:u.suggestions.pickMeal}),
            t.jsx("div",{"data-no-swipe":!0,className:"flex flex-wrap gap-2",children:pt.map(j=>t.jsx(st,{selected:!1,onClick:()=>{J(g,j);},children:Ee[j]},j))}),
            t.jsx("p",{className:"text-caption text-onSurfaceVariant",children:u.suggestions.addsToShopping})
          ]}):null,
          w?t.jsx("p",{className:"text-caption text-primary",children:w}):null
        ]},g.id);
      })]})
    ]})
  })
}function gn({recipes:e,foods:n,onCreate:i,onUpdate:s,onDelete:l,onToggleFavorite:o,onImportRecipe:r,onCreateFood:m,onAddShoppingItem:u,onAddToPlan:f,deleteHint:S,lastUsedByRecipeId:h,dietPreference:R}){
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
          ?KNOWN_RECIPES.fasoliyyeh.instructionsEn.join("\n")
          :(isBanh||/banh\s*mi/i.test(a.instructions||""))
          ?KNOWN_RECIPES.banhMi.instructionsEn.join("\n")
          :(isArrab||/arrabiata/i.test(a.instructions||""))
          ?KNOWN_RECIPES.arrabiata.instructionsEn.join("\n")
          :(isFaj||/fajita/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fajitas.instructionsEn.join("\n")
          :(isDal||/dal/i.test(a.instructions||""))
          ?KNOWN_RECIPES.dal.instructionsEn.join("\n")
          :cleanToEnglishInstructions(a.instructionsEn||a.instructions||"");

        const fixedInstDe=(isFaso||/fasoliyyeh/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fasoliyyeh.instructionsDe.join("\n")
          :(isBanh||/banh\s*mi/i.test(a.instructions||""))
          ?KNOWN_RECIPES.banhMi.instructionsDe.join("\n")
          :(isArrab||/arrabiata/i.test(a.instructions||""))
          ?KNOWN_RECIPES.arrabiata.instructionsDe.join("\n")
          :(isFaj||/fajita/i.test(a.instructions||""))
          ?KNOWN_RECIPES.fajitas.instructionsDe.join("\n")
          :(isDal||/dal/i.test(a.instructions||""))
          ?KNOWN_RECIPES.dal.instructionsDe.join("\n")
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

  const J=a=>/[äöüß]/i.test(a)||/\b(und|mit|der|die|das|für|von)\b/i.test(a);
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
            t.jsx(X,{label:a.isFavorite?d.nutrition.removeFavorite:d.nutrition.markFavorite,className:a.isFavorite?"text-primary":"",onClick:()=>{Y(a.id);},children:t.jsx(K,{name:a.isFavorite?"starFilled":"star"})}),
            y?t.jsx(X,{label:d.nutrition.translateToGerman,disabled:D!==null,onClick:()=>{Z(a);},children:D===a.id?"…":t.jsx(K,{name:"translate"})}) :null,
            t.jsx(X,{label:d.nutrition.edit,onClick:()=>{O(a);T(!0);},children:t.jsx(K,{name:"edit"})}),
            t.jsx(X,{label:d.common.delete,onClick:()=>{
              const w=S?.(a.id)?.trim();
              if(!w){
                const snap={name:a.name,nameEn:a.nameEn,nameDe:a.nameDe,servings:a.servings,ingredients:a.ingredients,instructions:a.instructions,instructionsEn:a.instructionsEn,instructionsDe:a.instructionsDe,dietOverride:a.dietOverride,tags:a.tags};
                l(a.id);
                undo(d.training.itemRemoved(displayTitle),()=>{i(snap);});
                return;
              }
              P({title:d.nutrition.deleteRecipeTitle,message:'„'+displayTitle+'“ '+d.nutrition.willBeRemoved,facts:[w.replace(/^Achtung:\s*/,'')],confirmLabel:d.common.delete,danger:!0}).then(j=>{j&&l(a.id);});
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
      ]})
    },a.id);
  })}),
    N?t.jsx(_t,{open:E,onClose:()=>T(!1),onSave:a=>C?s(C.id,a):i(a).then(Boolean),foods:n,initial:C??void 0,onCreateFood:m}):null
  ]});
}
export{gn as RecipesView};