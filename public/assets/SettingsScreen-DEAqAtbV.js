import{j as e,h as M,u as N,as as Ue,B as E,C as h,ax as ze,y as Te,ay as Ae,az as De,a5 as H,L as x,aA as Ke,G as ae,ae as Ge,X as qe,aB as Ie,b as Ye,i as Re,r as u,aC as Je,aD as Xe,aE as Qe,aF as Ze,aG as et,aH as tt,aI as nt,S as P,an as D,aJ as st,A as pe,k as ue,aK as Le,aL as G,P as it,aM as at,aN as Oe,aO as rt,aP as lt,aQ as ct,aR as ot,aS as dt,aT as ut,aU as be,aV as gt,aW as pt,aX as xt,aY as Se,aZ as je,a_ as ve,a$ as ft,b0 as Fe,b1 as ht,U as mt,b2 as bt,b3 as St,b4 as jt,b5 as vt,b6 as wt,b7 as Nt,T as K,W as yt,a8 as kt,a9 as Ct,am as $,b8 as Et,at as Tt,b9 as At,au as Dt,ba as It,O as Rt,d as Lt,D as Ot,bb as Ft,bc as Mt,bd as Pt,be as _t,bf as Wt,bg as Vt,bh as Ht,E as Me,a6 as Bt,bi as Pe,p as $t,I as Ut,bj as zt}from"./index-DjUS4W3P.js";import{e as _e,c as We,d as Kt,p as Gt,h as qt,a as Yt,i as Jt,B as Ve,b as Xt}from"./backupExport-ByV0wFPi.js";import{m as He,d as Qt,e as Zt,M as en,C as we}from"./nutrition-DNYWydHA.js";import{RemindersSheet as tn}from"./RemindersSheet-C_OqxwZX.js";import{GymBuddySettingsToggle as gBToggle,CycleTrackingSettingsToggle as cycToggle,PRESET_PETS,GymBuddySpriteCanvas as GymBuddyPreviewCanvas}from"./gymBuddy.js";import{C as nn}from"./CalorieResultPreview-CdmWHN24.js";import{B as sn}from"./muscleBalance-CEkIZpHD.js";import"./foods-CFScO8lP.js";import"./IcsRangeSheet-B1kcm-nN.js";function an({expanded:t}){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:`shrink-0 text-onSurfaceFaint transition-transform duration-200 ${t?"rotate-180":""}`,children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})}function V({title:t,isOpen:n,onToggle:s,children:i}){return e.jsxs("div",{className:"py-1",children:[e.jsxs("button",{type:"button",onClick:s,"aria-expanded":n,className:"press-feedback flex min-h-touch w-full items-center gap-3 py-3 text-left",children:[e.jsx("p",{className:"flex-1 text-titleS font-semibold text-onSurface",children:t}),e.jsx(an,{expanded:n})]}),n?e.jsx("div",{className:"flex flex-col gap-4 pb-5 pt-2",children:i}):null]})}function j({children:t}){const{settings:n}=M();return n.beginnerTipsEnabled?e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t}):null}function rn({onOpenTrainingTimer:t}){const n=N(),{settings:i,setTrainingHintsEnabled:a,setBeginnerTipsEnabled:o}=M();return e.jsxs(e.Fragment,{children:[e.jsx(gBToggle,{}),e.jsx(cycToggle,{}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(j,{children:n.settings.trainingTimerHint}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:t,children:n.settings.trainingTimerAction})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n.settings.beginnerTipsTitle}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:n.settings.beginnerTipsHint}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:i.beginnerTipsEnabled,onClick:()=>o(!0),children:n.settings.on}),e.jsx(h,{selected:!i.beginnerTipsEnabled,onClick:()=>o(!1),children:n.settings.off})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n.settings.trainingHintsTitle}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:n.settings.trainingHintsHint}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:i.trainingHintsEnabled,onClick:()=>a(!0),children:n.settings.on}),e.jsx(h,{selected:!i.trainingHintsEnabled,onClick:()=>a(!1),children:n.settings.off})]})]})]})}const ln=["light","dark","system"],SURF_PRESETS=["default","midnight","warm","forest","amoled"],SURF_DOTS={default:"#222730",midnight:"#164080",warm:"#5C2E1F",forest:"#164F38",amoled:"#000000"},cn=["#A8DAB5","#2D8B8B","#10B981","#06B6D4","#3B6FE0","#8A6FE0","#EC4899","#C4453B","#E0723B","#F59E0B"],on=[.9,1,1.15,1.3],dn=["de","en"];function un(t,n){return t==="light"?n.settings.themeLight:t==="dark"?n.settings.themeDark:n.settings.themeSystem}function getSurfLabel(t,n){return t==="midnight"?n.settings.surfaceMidnight??"Midnight":t==="warm"?n.settings.surfaceWarm??"Copper":t==="forest"?n.settings.surfaceForest??"Forest":t==="amoled"?n.settings.surfaceAmoled??"Obsidian":n.settings.surfaceDefault??"Slate"}function gn(t,n){return t===.9?n.settings.fontSmall:t===1.15?n.settings.fontLarge:t===1.3?n.settings.fontVeryLarge:n.settings.fontNormal}function pn(){const t=N(),{settings:n,setThemeMode:s,setAccentHex:i,setLanguage:a,setFontScale:o,setTrueBlack:l,setSurfacePreset:p}=Te(),r=Ae()==="ios"&&De(),u=n.surfacePreset??"default",isAmoled=n.trueBlack||u==="amoled";return e.jsxs("div",{className:"flex flex-col gap-2.5",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.appearance}),e.jsx("div",{className:"flex flex-wrap gap-2",children:ln.map(c=>e.jsx(h,{selected:n.themeMode===c,onClick:()=>s(c),children:un(c,t)},c))}),e.jsx("span",{className:"mt-1 text-label uppercase text-onSurfaceVariant",children:t.settings.surfaceStyle??"Oberflächen-Theme"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:SURF_PRESETS.map(c=>e.jsx(h,{selected:u===c,onClick:()=>{p?.(c),c==="amoled"?(n.themeMode==="light"&&s("dark"),l(!0)):u==="amoled"&&l(!1)},children:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx("span",{style:{backgroundColor:SURF_DOTS[c],border:"1px solid rgba(255,255,255,0.22)"},className:"inline-block h-2.5 w-2.5 rounded-full shrink-0"}),getSurfLabel(c,t)]})},c))}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-0.5",children:[e.jsx(h,{selected:isAmoled,onClick:()=>{const next=!isAmoled;next&&n.themeMode==="light"&&s("dark"),!next&&u==="amoled"&&p?.("default"),l(next)},children:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx("span",{style:{backgroundColor:"#000000",border:"1px solid rgba(255,255,255,0.35)"},className:"inline-block h-2.5 w-2.5 rounded-full shrink-0"}),t.settings.amoledBlack]})}),e.jsx(j,{children:t.settings.amoledHint})]}),e.jsx("span",{className:"mt-1 text-label uppercase text-onSurfaceVariant",children:t.settings.accentColor}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[cn.map(c=>e.jsx("button",{type:"button","aria-label":`${t.settings.accentColor} ${c}`,onClick:()=>i(c),style:{backgroundColor:c},className:["h-touch w-touch rounded-full border-2",n.accentHex.toLowerCase()===c.toLowerCase()?"border-onSurface":"border-transparent"].join(" ")},c)),e.jsxs("label",{className:"flex h-touch w-touch items-center justify-center rounded-full border border-outline text-caption text-onSurfaceVariant","aria-label":t.settings.customAccent,children:["+",e.jsx("input",{type:"color",value:n.accentHex,onChange:c=>i(c.target.value),className:"sr-only"})]})]}),r?e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.settings.iosIconHint}):null,e.jsx("span",{className:"mt-1 text-label uppercase text-onSurfaceVariant",children:t.settings.fontSize}),e.jsx("div",{className:"flex flex-wrap gap-2",children:on.map(c=>e.jsx(h,{selected:n.fontScale===c,onClick:()=>o(c),children:gn(c,t)},c))}),e.jsx("span",{className:"mt-1 text-label uppercase text-onSurfaceVariant",children:t.settings.language}),e.jsx("div",{className:"flex gap-2",children:dn.map(c=>e.jsx(h,{selected:n.language===c,onClick:()=>a(c),children:c==="de"?t.settings.languageGerman:t.settings.languageEnglish},c))}),e.jsx(j,{children:t.settings.languageHint})]})}const U=";";function xn(){const t=x().labels.csv;return[t.date,t.time,t.workout,t.exercise,t.setType,t.weightKg,t.reps,t.durationSec,t.rir]}function fn(){const t=x().labels.csv;return[t.date,t.meal,t.kind,t.name,t.amount,t.unit,t.kcal,t.proteinG,t.carbsG,t.fatG]}function hn(){const t=x().labels.csv;return[t.date,t.weightKg,t.note]}const mn={get g(){return x().labels.foodUnits.g},get ml(){return x().labels.foodUnits.ml},get piece(){return x().labels.foodUnits.piece}};function bn(){return x().labels.csv.unknownItem}const Sn={get warmup(){return x().training.setTypeLabels.warmup},get normal(){return x().training.setTypeLabels.normal},get superset(){return x().training.setTypeLabels.superset},get dropset(){return x().training.setTypeLabels.dropset}},jn=["=","+","-","@","	","\r"];function ie(t){const n=jn.some(s=>t.startsWith(s))?`'${t}`:t;return n.includes(U)||n.includes('"')||n.includes(`
`)?`"${n.replace(/"/g,'""')}"`:n}function Z(t){return t.toString().replace(".",",")}const vn=1;function ne(t){return Z(Number(t.toFixed(vn)))}function wn(t,n){const s=new Map(n.map(o=>[o.id,qe(o.name)])),i=[...t].sort((o,l)=>o.session.date-l.session.date),a=[xn().join(U)];for(const{session:o,sets:l}of i){const r=[...l].sort((c,p)=>c.completedAt-p.completedAt);for(const c of r){const p=new Date(o.date).toLocaleDateString(we),f=new Date(c.completedAt).toLocaleTimeString(we,{hour:"2-digit",minute:"2-digit"}),d=s.get(c.exerciseId)??x().labels.csv.unknownExercise;a.push([p,f,ie(o.routineName??x().nutrition.freeWorkoutCsv),ie(d),Sn[c.setType],Z(c.weightKg),c.reps.toString(),c.durationSec!==void 0?c.durationSec.toString():"",c.rir!==void 0?Z(c.rir):""].join(U))}}return a.join(`\r
`)}const Nn="\uFEFF";function xe(t){return ae(t)}function fe(t,n){return Ke(Nn+t,{suggestedName:n.suggestedName,mimeType:"text/csv",extension:".csv",description:n.description})}async function yn(t=new Date){const{sessions:n,exercises:s}=await H("Trainingsdaten für CSV-Export laden",async a=>{const l=(await a.getAll("workoutSessions")).filter(d=>d.completedAt!==null),r=await a.getAll("setEntries"),c=new Map;for(const d of r){const g=c.get(d.sessionId);g?g.push(d):c.set(d.sessionId,[d])}const p=l.map(d=>({session:d,sets:c.get(d.id)??[]})),f=await a.getAll("exercises");return{sessions:p,exercises:f}});return{status:await fe(wn(n,s),{suggestedName:`gym-app-training-${xe(t)}.csv`,description:x().labels.csv.trainingFile}),count:n.reduce((a,o)=>a+o.sets.length,0)}}function kn(t,n,s){const i=new Map(n.map(c=>[c.id,c])),a=new Map(s.map(c=>[c.id,c])),o=new Map(Qt.map((c,p)=>[c,p])),l=[...t].sort((c,p)=>c.date!==p.date?c.date.localeCompare(p.date):(o.get(c.mealSlot)??0)-(o.get(p.mealSlot)??0)),r=[fn().join(U)];for(const c of l){const p=c.recipeId!==void 0?a.get(c.recipeId):void 0,f=c.foodId!==void 0?i.get(c.foodId):void 0,d=c.recipeId!==void 0,g=Zt(c,i,a);r.push([He(c.date),en[c.mealSlot],d?x().nutrition.recipeWord:x().nutrition.foodWord,ie((d?p?.name:f?Ge(f.name):void 0)??bn()),Z(c.quantity),d?x().nutrition.servingsWord:mn[f?.perUnit??"g"],ne(g.kcal),ne(g.proteinG),ne(g.carbsG),ne(g.fatG)].join(U))}return r.join(`\r
`)}async function Cn(t=new Date){const{entries:n,foods:s,recipes:i}=await H("Ernährungsdaten für CSV-Export laden",async o=>({entries:await o.getAll("mealPlanEntries"),foods:await o.getAll("foods"),recipes:await o.getAll("recipes")}));return{status:await fe(kn(n,s,i),{suggestedName:`gym-app-ernaehrung-${xe(t)}.csv`,description:x().labels.csv.nutritionFile}),count:n.length}}function En(t){const n=[...t].sort((i,a)=>i.date===a.date?i.createdAt-a.createdAt:i.date.localeCompare(a.date)),s=[hn().join(U)];for(const i of n)s.push([He(i.date),Z(i.weightKg),ie(i.note??"")].join(U));return s.join(`\r
`)}async function Tn(t=new Date){const n=await H("Gewichtstagebuch für CSV-Export laden",i=>i.getAll("bodyWeightEntries"));return{status:await fe(En(n),{suggestedName:`gym-app-gewicht-${xe(t)}.csv`,description:x().labels.csv.weightFile}),count:n.length}}function An(t){const n=ae(t),s=Ye(t).replace(":","");return`gym-app-sicherheitskopie-vor-import-${n}-${s}.json`}async function Dn(t=new Date){const n=await _e(t.toISOString()),s=We(n.data);return s===0?{status:"skipped",count:0}:(Ie(JSON.stringify(n,null,2),{suggestedName:An(t),mimeType:"application/json",description:x().errors.safetyBackupName}),{status:"saved",count:s})}const se={workout:{get label(){return x().settings.csvTraining},get unitLabel(){return x().settings.csvUnitSets},download:yn},nutrition:{get label(){return x().settings.csvNutrition},get unitLabel(){return x().settings.csvUnitEntries},download:Cn},weight:{get label(){return x().settings.csvWeight},get unitLabel(){return x().settings.csvUnitPoints},download:Tn}},In=["workout","nutrition","weight"],Rn=1500;function Ln(){const t=N(),{confirm:n}=Re(),s=u.useRef(null),[i,a]=u.useState(null),[o,l]=u.useState(!1),[r,c]=u.useState(null),p=u.useCallback(async()=>{try{c(Je(await Xe()))}catch{c(null)}},[]);u.useEffect(()=>{p()},[p]);const f=async()=>{if(await n({title:t.settings.clearCacheTitle,message:t.settings.clearCacheMessage,confirmLabel:t.settings.clearAction})){l(!0),a(null);try{const b=await Qe();await p(),a(`${t.settings.cacheClearedCount} (${String(b)} ${t.settings.entries})`)}catch(b){a(b instanceof Error?b.message:t.settings.cacheClearFailed)}finally{l(!1)}}},d=async()=>{l(!0),a(null);try{const{status:S,count:b}=await Kt(new Date);a(S==="saved"?`${t.settings.backupSavedShort} (${String(b)} ${t.settings.records})`:t.settings.exportCancelled)}catch(S){a(S instanceof Error?S.message:t.settings.exportFailed)}finally{l(!1)}},g=async S=>{l(!0),a(null);try{const{status:b,count:C}=await se[S].download(new Date);a(b==="cancelled"?t.settings.exportCancelled:C>0?`${t.settings.csvSaved} (${String(C)} ${se[S].unitLabel})`:`${t.settings.noCsvData} „${se[S].label}" ${t.settings.noCsvDataTail}`)}catch(b){a(b instanceof Error?b.message:t.settings.csvExportFailed)}finally{l(!1)}},m=async S=>{try{const{backup:b,report:C}=Gt(JSON.parse(S)),A=We(b.data);if(qt(C)&&!await n({title:t.settings.backupNotClean,message:`${Yt(C)}

${t.settings.backupRestImportable}`,confirmLabel:t.settings.continueAnyway})){a(t.settings.importCancelledShort),l(!1);return}if(Jt(b)&&!await n({title:t.settings.backupNewerVersion,message:`${t.settings.backupNewerFormat} ${String(b.formatVersion)}, ${t.settings.backupNewerFormatKnown} ${String(Ve)}. `+t.settings.backupNewerMessage,confirmLabel:t.settings.importAnywayShort,danger:!0})){l(!1);return}if(!await n({title:t.settings.replaceAllTitle,message:t.settings.replaceAllMessage,facts:[`${String(A)} ${t.settings.recordsInBackup}`],confirmLabel:t.settings.importAction,danger:!0})){l(!1);return}try{const T=await Dn(new Date);T.status==="saved"&&a(`${t.settings.safetyCopySaved} (${String(T.count)} ${t.settings.records}). ${t.settings.importRunning}`)}catch(T){const F=T instanceof Error?T.message:t.settings.unknownError;if(!await n({title:t.settings.noSafetyCopy,message:`${F}

${t.settings.noSafetyCopyTail}`,confirmLabel:t.settings.importAnyway,danger:!0})){a(t.settings.importCancelled),l(!1);return}}await Xt(b),a(t.settings.importSuccess),window.setTimeout(()=>window.location.reload(),Rn)}catch(b){a(b instanceof Error?b.message:t.settings.importInvalidFile),l(!1)}};return{fileInputRef:s,status:i,busy:o,cachedCount:r,exportJson:d,exportCsv:g,startImport:async()=>{if(!et()){s.current?.click();return}l(!0),a(null);try{const S=await tt({mimeType:"application/json",extension:".json",description:t.settings.backupFileName});if(S.status==="cancelled"){l(!1);return}await m(S.text)}catch(S){a(S instanceof Error?S.message:t.settings.importFailed),l(!1)}},handleFileInputChange:async S=>{const b=S.target.files?.[0];if(S.target.value="",!b)return;l(!0),a(null);let C;try{C=await Ze(b)}catch(A){a(A instanceof Error?A.message:t.settings.fileUnreadable),l(!1);return}await m(C)},clearCaches:f}}const On=[12,24],Fn=30.44*24*60*60*1e3;function Mn(t,n){return n-t*Fn}function Pn(t,n){const s=ae(new Date(n)),i=t.workoutSessions.filter(g=>g.completedAt!==null&&g.date<n),a=new Set(i.map(g=>g.id)),o=t.setEntries.filter(g=>a.has(g.sessionId)),l=t.mealPlanEntries.filter(g=>g.date<s),r=t.activityEntries.filter(g=>g.date<s),c=t.bodyWeightEntries.filter(g=>g.date<s),p=t.cookedWeeks.filter(g=>g.weekStartIso<s),f={...t,workoutSessions:i,setEntries:o,mealPlanEntries:l,activityEntries:r,bodyWeightEntries:c,cookedWeeks:p},d=i.length+o.length+l.length+r.length+c.length+p.length;return{archiveData:f,archivedCount:d}}async function _n(t){await H("Alte Daten löschen",async n=>{const s=n.transaction(["workoutSessions","setEntries","mealPlanEntries","mealPhotos","activityEntries","bodyWeightEntries","cookedWeeks"],"readwrite");for(const i of t.workoutSessions)await s.objectStore("workoutSessions").delete(i.id);for(const i of t.setEntries)await s.objectStore("setEntries").delete(i.id);for(const i of t.mealPlanEntries)await s.objectStore("mealPlanEntries").delete(i.id),await s.objectStore("mealPhotos").delete(i.id);for(const i of t.activityEntries)await s.objectStore("activityEntries").delete(i.id);for(const i of t.bodyWeightEntries)await s.objectStore("bodyWeightEntries").delete(i.id);for(const i of t.cookedWeeks)await s.objectStore("cookedWeeks").delete(i.weekStartIso);await s.done}),nt()}async function Wn(t,n){const s=await _e(n.toISOString());return Pn(s.data,Mn(t,n.getTime()))}function Vn(t,n){const s={app:"gym-app",formatVersion:Ve,exportedAt:n.toISOString(),data:t};Ie(JSON.stringify(s,null,2),{suggestedName:`gym-app-archiv-${ae(n)}.json`,mimeType:"application/json",description:x().settings.archiveFileName})}const Ne={get 12(){return x().settings.archiveOlderThanYear},get 24(){return x().settings.archiveOlderThanTwoYears}};function Hn({open:t,onClose:n}){const s=N(),[i,a]=u.useState(24),[o,l]=u.useState(!1),{confirm:r}=Re(),[c,p]=u.useState(null),f=async()=>{l(!0),p(null);try{const d=new Date,{archiveData:g,archivedCount:m}=await Wn(i,d);if(m===0){p(`${s.settings.archiveNoEntries} ${Ne[i]} ${s.settings.archiveNothingFound}`);return}if(Vn(g,d),!await r({title:s.settings.archiveDeleteTitle,message:s.settings.archiveDeleteMessage,facts:[`${String(m)} ${s.settings.entriesDownloaded}`],confirmLabel:s.settings.archiveDeleteConfirm,danger:!0})){p(s.settings.archiveDownloaded);return}await _n(g),p(`${String(m)} ${s.settings.entriesArchived}`)}catch(d){p(d instanceof Error?d.message:s.settings.archiveFailed)}finally{l(!1)}};return e.jsx(P,{open:t,onClose:n,title:s.settings.archiveTitle,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-body text-onSurfaceVariant",children:s.settings.archiveHint}),e.jsx("div",{className:"flex flex-wrap gap-2",children:On.map(d=>e.jsx(h,{selected:i===d,onClick:()=>a(d),children:Ne[d]},d))}),e.jsx(E,{variant:"filled",fullWidth:!0,disabled:o,onClick:()=>{f()},children:o?s.settings.archiving:s.settings.createArchive}),c?e.jsx("p",{className:"text-body text-onSurface",children:c}):null,e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.settings.archiveHint2})]})})}function Bn(){const t=N(),{fileInputRef:n,status:s,busy:i,cachedCount:a,exportJson:o,exportCsv:l,startImport:r,handleFileInputChange:c,clearCaches:p}=Ln(),[f,d]=u.useState(!1),g=D(f),isIosBrowser=Ae()==="ios"&&!De(),isDe=Le()==="de";return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.dataBackup}),e.jsx(j,{children:t.settings.backupHint}),isIosBrowser?e.jsxs("div",{className:"rounded-xl2 border border-primary/30 bg-primary-container/20 p-3 text-caption leading-relaxed text-onSurfaceVariant",children:[e.jsx("p",{className:"font-semibold text-onSurface",children:isDe?"📲 iPhone-Schutz vor automatischer Datenlöschung":"📲 iPhone protection against browser data eviction"}),e.jsx("p",{className:"mt-1",children:isDe?"iOS Safari kann Webseiten-Daten nach 7 Tagen Inaktivität löschen. Tipp: Füge die App über „Teilen → Zum Home-Bildschirm“ hinzu (dauert 5 Sekunden) oder sichere regelmäßig ein JSON-Backup über das Teilen-Menü („In Dateien sichern“).":"iOS Safari may clear website data after 7 days of inactivity. Tip: Add this app via 'Share → Add to Home Screen' (takes 5 seconds) or export a JSON backup regularly via the iOS Share Sheet ('Save to Files')."})]}):null,e.jsx(E,{variant:"filled",fullWidth:!0,disabled:i,onClick:()=>{o()},children:t.settings.exportJson}),e.jsx(E,{variant:"outlined",fullWidth:!0,disabled:i,onClick:()=>{r()},children:t.settings.importData}),e.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:t.settings.exportCsv}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:In.map(m=>e.jsx(E,{variant:"outlined",className:"!px-2 !text-caption",disabled:i,onClick:()=>{l(m)},children:se[m].label},m))}),e.jsx(j,{children:t.settings.csvHint}),e.jsx(E,{variant:"outlined",fullWidth:!0,disabled:i,onClick:()=>d(!0),children:t.settings.archiveOldData}),e.jsx(E,{variant:"outlined",fullWidth:!0,disabled:i||a===null||a===0,onClick:()=>{p()},children:a===null||a===0?t.settings.clearCache:t.settings.clearCacheWithCount(a)}),e.jsx(j,{children:t.settings.cacheHint(st)}),e.jsx("input",{ref:n,type:"file",accept:"application/json,.json",className:"hidden",onChange:m=>{c(m)}}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.settings.importOverwriteHint}),s?e.jsx("p",{className:"text-body text-onSurface",children:s}):null,g?e.jsx(Hn,{open:f,onClose:()=>d(!1)}):null]})}const $n=["local","external"],Un=["kg","lbs"];function zn({onOpenInstallGuide:t}){const n=N(),{settings:s,setSuggestionMode:i,setWeightUnit:a}=Te(),{settings:o,setPrCelebrationsEnabled:l}=M();return e.jsxs(e.Fragment,{children:[e.jsx(pn,{}),e.jsx(gBToggle,{}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n.settings.hapticFeedback}),e.jsx(j,{children:n.settings.hapticFeedbackHint}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:o.prCelebrationsEnabled,onClick:()=>l(!0),children:n.settings.on}),e.jsx(h,{selected:!o.prCelebrationsEnabled,onClick:()=>l(!1),children:n.settings.off})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n.settings.weightUnit}),e.jsx("div",{className:"flex gap-2",children:Un.map(r=>e.jsx(h,{selected:s.weightUnit===r,onClick:()=>a(r),children:r==="kg"?n.settings.weightUnitKg:n.settings.weightUnitLbs},r))}),e.jsx(j,{children:n.settings.weightUnitHint})]}),De()?null:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n.settings.installApp}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:t,children:n.settings.showGuide}),e.jsx(j,{children:n.settings.installHint})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n.settings.suggestions}),e.jsx("div",{className:"flex gap-2",children:$n.map(r=>e.jsx(h,{selected:s.suggestionMode===r,onClick:()=>i(r),children:r==="local"?n.settings.local:n.settings.external},r))}),e.jsx(j,{children:n.settings.suggestionModeHint})]}),e.jsx(Bn,{})]})}function Kn(){return["🏋️ Gym-App – Kurzvorstellung (v13.20.0)",
"Kostenlose, private Fitness-App für Training, Ernährung und Verlauf. Läuft als PWA im Browser, installierbar aufs Handy.",
"",
"📊 Training, Autoregulation & Zyklus-Tracking",
"Satzweise Protokollierung mit RIR/RPE, automatische Steigerungsvorschläge, Deload-Erkennung, Aufwärmsätze, 1RM-Schätzung, Pausentimer sowie zyklus-synchronisiertes Training (4 Phasen, Anti-Frust-Hinweise & Streak-Schutz).",
"",
"🐾 Gym Buddy 2.0 (Positiver Begleiter)",
"Süßes Pixel-Pet mit dynamischer Mimik (Lächeln, Zwinkern), Post-Workout-Atmung, Nachtschlaf und anpassbaren Accessoires – 100 % motivierend ohne Bestrafung.",
"",
"🍎 Modulare Ernährung",
"Kalorien-/Makro-Tracking, Rezept-Import, Barcode-Scan, Einkaufsliste, Vorratsverwaltung, Supplement-Erinnerungen.",
"",
"⏰ Erinnerungen als Kalender-Export",
"Training, Supplements und Medikamente als .ics-Datei – Import in jeden Kalender, zuverlässiger Alarm auch bei geschlossener App.",
"",
"📈 Analyse & 100 % lokaler Datenschutz",
"Trainingsverlauf, Muskelgruppen-Radar, Statistik pro Übung. 100 % lokale Speicherung (IndexedDB), kein Konto, kein Tracking, keine Werbung. Safari-Speicherschutz und JSON-Backup.",
"",
"Kostenlos, ohne Werbung, ohne Cloud."].join("\n")}async function Gn(){await navigator.clipboard.writeText(Kn())}function qn(t){return[{icon:"dumbbell",title:t.showcase.trainingTitle,description:t.showcase.trainingDescription},{icon:"utensils",title:t.showcase.nutritionTitle,description:t.showcase.nutritionDescription},{icon:"calendar",title:t.showcase.remindersTitle,description:t.showcase.remindersDescription},{icon:"shield",title:t.showcase.analysisTitle,description:t.showcase.analysisDescription}]}
function Yn({open:t,onClose:n}){
  const s=N();
  const [activePreview, setActivePreview] = u.useState("buddy");
  const [pLang, setPLang] = u.useState(Le());
  const [pTheme, setPTheme] = u.useState("dark");
  const [copied, setCopied] = u.useState(!1);
  const [copyFail, setCopyFail] = u.useState(!1);

  const isDe = pLang === "de";
  const isDark = pTheme === "dark";

  const onCopy = async () => {
    setCopyFail(!1);
    try {
      await Gn();
      setCopied(!0);
      window.setTimeout(() => setCopied(!1), 2500);
    } catch {
      setCopyFail(!0);
    }
  };

  // Exact real app design tokens from index-Bna0_7G_.css
  const bgScreen = isDark ? "#111214" : "#F5F6F5";
  const textHead = isDark ? "#F2F4F3" : "#111312";
  const textSub = isDark ? "#8A918E" : "#5C6360";
  const cardBg = isDark ? "#1C1E21" : "#FFFFFF";
  const elevatedBg = isDark ? "#24272B" : "#EBEEEC";
  const cardBorder = isDark ? "#282B30" : "#D6DBD8";
  const primaryHex = "#A8DAB5";
  const onPrimaryHex = "#111214";

  return e.jsx(P, {
    open: t,
    onClose: n,
    title: isDe ? "App-Übersicht & 1:1 Live-Previews" : "App Overview & 1:1 Live Previews",
    children: e.jsxs("div", {
      className: "flex flex-col gap-4 pb-2",
      children: [
        e.jsx("p", {
          className: "text-caption leading-relaxed text-onSurfaceVariant",
          children: isDe
            ? "Exakte 1:1-Vorschau der echten App-Oberfläche mit den originalen Farben (#111214 / #1C1E21 / #A8DAB5), der echten Capsule-Tab-Bar und den 7 bestehenden 16×16 Pixel-Art-Pets."
            : "Exact 1:1 preview of the real app interface using the authentic colors (#111214 / #1C1E21 / #A8DAB5), real capsule navigation bar, and the 7 existing 16×16 pixel-art pets."
        }),

        e.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-2 border-b border-outline/15 pb-3",
          children: [
            e.jsxs("div", {
              className: "flex flex-wrap gap-1.5",
              children: [
                e.jsx(h, {
                  compact: !0,
                  selected: activePreview === "buddy",
                  onClick: () => setActivePreview("buddy"),
                  children: isDe ? "1. Heute & Buddy" : "1. Today & Buddy"
                }),
                e.jsx(h, {
                  compact: !0,
                  selected: activePreview === "cycle",
                  onClick: () => setActivePreview("cycle"),
                  children: isDe ? "2. Verlauf & Zyklus" : "2. History & Cycle"
                }),
                e.jsx(h, {
                  compact: !0,
                  selected: activePreview === "workout",
                  onClick: () => setActivePreview("workout"),
                  children: isDe ? "3. Workout-Tracker" : "3. Workout Tracker"
                }),
                e.jsx(h, {
                  compact: !0,
                  selected: activePreview === "custom",
                  onClick: () => setActivePreview("custom"),
                  children: isDe ? "4. Buddy-Sheet (7 Pets)" : "4. Buddy Sheet (7 Pets)"
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex items-center gap-1.5",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => setPLang(l => l === "de" ? "en" : "de"),
                  className: "rounded-lg border border-outline/25 bg-surface-container px-2 py-1 text-[11px] font-semibold text-onSurface active:scale-95",
                  children: pLang === "de" ? "🇩🇪 DE" : "🇬🇧 EN"
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => setPTheme(th => th === "dark" ? "light" : "dark"),
                  className: "rounded-lg border border-outline/25 bg-surface-container px-2 py-1 text-[11px] font-semibold text-onSurface active:scale-95",
                  children: isDark ? "🌙 Dark" : "☀️ Light"
                })
              ]
            })
          ]
        }),

        e.jsx("div", {
          className: "flex justify-center py-1",
          children: e.jsxs("div", {
            style: { backgroundColor: bgScreen, color: textHead, borderColor: cardBorder },
            className: "relative w-full max-w-[346px] rounded-[38px] border-[3px] shadow-2xl overflow-hidden transition-all duration-300 flex flex-col font-sans select-none",
            children: [
              // iOS Status Bar + Dynamic Island
              e.jsxs("div", {
                className: "pt-2.5 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold font-mono",
                style: { color: textHead },
                children: [
                  e.jsx("span", { children: "09:41" }),
                  e.jsxs("div", {
                    className: "h-5 w-24 bg-black rounded-full flex items-center justify-between px-2.5",
                    children: [
                      e.jsx("span", { className: "h-2 w-2 rounded-full bg-[#121826]" }),
                      e.jsx("span", { className: "h-2 w-2 rounded-full bg-[#092B1E]" })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1 text-[10px]",
                    children: [
                      e.jsx("span", { children: "5G" }),
                      e.jsx("span", { style: { color: primaryHex }, children: "▮▮▮" })
                    ]
                  })
                ]
              }),

              e.jsx("div", {
                className: "px-3.5 py-2.5 flex flex-col gap-2.5 max-h-[600px] overflow-y-auto no-scrollbar",
                children: activePreview === "buddy"
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-2.5",
                      children: [
                        // Real Today Header: h1.text-display "Heute"
                        e.jsx("h2", {
                          style: { color: textHead },
                          className: "text-xl font-semibold tracking-tight",
                          children: isDe ? "Heute" : "Today"
                        }),

                        // 1. Real Horizontal GymBuddyWidget Card
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "rounded-2xl p-3 flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              style: { backgroundColor: elevatedBg },
                              className: "h-14 w-14 shrink-0 rounded-xl flex items-center justify-center",
                              children: e.jsx(GymBuddyPreviewCanvas, {
                                petId: "bear",
                                stage: 3,
                                mood: "happy",
                                colorMode: "custom",
                                customHex: "#A8DAB5",
                                equipped: { head: "sweatband", body: "belt", hand: "dumbbell" },
                                size: 48
                              })
                            }),
                            e.jsxs("div", {
                              className: "flex min-w-0 flex-1 flex-col gap-1",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center justify-between gap-1",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-1.5 truncate",
                                      children: [
                                        e.jsx("span", {
                                          style: { color: textHead },
                                          className: "text-xs font-semibold truncate",
                                          children: isDe ? "Kraft-Bär" : "Power Bear"
                                        }),
                                        e.jsx("span", {
                                          className: "rounded-full bg-[#213829] px-2 py-0.5 text-[9.5px] font-semibold text-[#A8DAB5]",
                                          children: isDe ? "Stufe 3" : "Stage 3"
                                        })
                                      ]
                                    }),
                                    e.jsx("div", {
                                      className: "flex items-center gap-1 shrink-0",
                                      children: [
                                        e.jsx("span", {
                                          style: { backgroundColor: elevatedBg, color: textHead },
                                          className: "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                                          children: "🔥 5"
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                e.jsx("p", {
                                  style: { color: textSub },
                                  className: "text-[10.5px] truncate",
                                  children: isDe
                                    ? "Stufe 3: Athlet · Voller Trainings-Energie!"
                                    : "Stage 3: Athlete · Full of workout energy!"
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mt-0.5",
                                  children: [
                                    e.jsx("div", {
                                      style: { backgroundColor: elevatedBg },
                                      className: "h-1.5 flex-1 rounded-full overflow-hidden",
                                      children: e.jsx("div", {
                                        style: { backgroundColor: primaryHex, width: "80%" },
                                        className: "h-full rounded-full"
                                      })
                                    }),
                                    e.jsx("span", {
                                      style: { color: textSub },
                                      className: "font-mono text-[9.5px] shrink-0",
                                      children: "480 / 600 XP"
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        }),

                        // 2. Real CycleDashboardWidget Card (#F43F5E, #10B981, #F59E0B, #A78BFA)
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg, borderColor: cardBorder },
                          className: "rounded-2xl border p-3 flex flex-col gap-2",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between gap-1",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    e.jsx("span", {
                                      style: { color: textHead },
                                      className: "text-[11.5px] font-semibold",
                                      children: isDe ? "🌸 Phase 2 · Follikelphase" : "🌸 Phase 2 · Follicular"
                                    }),
                                    e.jsx("span", {
                                      className: "rounded-full bg-[#10B981]/20 px-2 py-0.5 font-mono text-[9.5px] font-semibold text-[#10B981]",
                                      children: isDe ? "Tag 9/28" : "Day 9/28"
                                    })
                                  ]
                                }),
                                e.jsx("span", {
                                  style: { backgroundColor: elevatedBg, color: textHead },
                                  className: "rounded-full px-2 py-0.5 text-[9px] font-medium",
                                  children: isDe ? "🩸 Neue Periode" : "🩸 New Period"
                                })
                              ]
                            }),
                            e.jsx("p", {
                              style: { color: textSub },
                              className: "text-[10.5px] leading-snug",
                              children: isDe
                                ? "Maximale Trainings-Energie: Perfekte Zeit für Progression, schwerere Gewichte und neue Bestleistungen (PRs)!"
                                : "Peak workout energy: Ideal time for progressive overload, heavier weights, and new personal records (PRs)!"
                            }),
                            e.jsx("div", {
                              className: "grid grid-cols-4 gap-1.5 pt-0.5",
                              children: [
                                e.jsx("div", { className: "h-1.5 rounded-full bg-[#F43F5E] opacity-35" }),
                                e.jsx("div", { className: "h-1.5 rounded-full bg-[#10B981]" }),
                                e.jsx("div", { className: "h-1.5 rounded-full bg-[#F59E0B] opacity-35" }),
                                e.jsx("div", { className: "h-1.5 rounded-full bg-[#A78BFA] opacity-35" })
                              ]
                            })
                          ]
                        }),

                        // 3. Real "HEUTE GEPLANT" Card (RC in index-DjUS4W3P.js)
                        e.jsx("span", {
                          style: { color: textSub },
                          className: "text-[10px] font-semibold uppercase tracking-wider mt-0.5",
                          children: isDe ? "HEUTE GEPLANT" : "PLANNED TODAY"
                        }),
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "rounded-2xl p-3.5 flex flex-col gap-2.5",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsx("span", {
                                  style: { color: textHead },
                                  className: "text-sm font-semibold",
                                  children: isDe ? "Oberkörper A" : "Upper Body A"
                                }),
                                e.jsx("span", {
                                  style: { color: textSub },
                                  className: "text-[10.5px]",
                                  children: isDe ? "Zuletzt vor 3 Tagen" : "Last 3 days ago"
                                })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "grid grid-cols-3 gap-2",
                              children: [
                                e.jsxs("div", {
                                  style: { backgroundColor: elevatedBg },
                                  className: "rounded-xl p-2 flex flex-col",
                                  children: [
                                    e.jsx("span", { style: { color: textHead }, className: "font-mono text-xs font-semibold", children: "4.280 kg" }),
                                    e.jsx("span", { style: { color: textSub }, className: "text-[8px] font-semibold uppercase", children: isDe ? "LETZTES VOLUMEN" : "LAST VOLUME" })
                                  ]
                                }),
                                e.jsxs("div", {
                                  style: { backgroundColor: elevatedBg },
                                  className: "rounded-xl p-2 flex flex-col",
                                  children: [
                                    e.jsx("span", { style: { color: textHead }, className: "font-mono text-xs font-semibold", children: "3" }),
                                    e.jsx("span", { style: { color: textSub }, className: "text-[8px] font-semibold uppercase", children: isDe ? "TAGE SEITDEM" : "DAYS SINCE" })
                                  ]
                                }),
                                e.jsxs("div", {
                                  style: { backgroundColor: elevatedBg },
                                  className: "rounded-xl p-2 flex flex-col",
                                  children: [
                                    e.jsx("span", { style: { color: textHead }, className: "font-mono text-xs font-semibold", children: "18" }),
                                    e.jsx("span", { style: { color: textSub }, className: "text-[8px] font-semibold uppercase", children: isDe ? "GEPLANTE SÄTZE" : "PLANNED SETS" })
                                  ]
                                })
                              ]
                            }),
                            e.jsx("button", {
                              type: "button",
                              style: { backgroundColor: primaryHex, color: onPrimaryHex },
                              className: "w-full rounded-xl py-2.5 text-center text-xs font-semibold transition-transform active:scale-98",
                              children: isDe ? "Training starten" : "Start Workout"
                            })
                          ]
                        }),

                        // 4. Real "DIESE WOCHE" Vertical List
                        e.jsx("span", {
                          style: { color: textSub },
                          className: "text-[10px] font-semibold uppercase tracking-wider mt-0.5",
                          children: isDe ? "DIESE WOCHE" : "THIS WEEK"
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            e.jsxs("div", {
                              style: { backgroundColor: cardBg },
                              className: "rounded-xl px-3 py-2 flex items-center justify-between text-xs",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", { style: { color: textSub }, className: "font-mono text-[11px] font-semibold w-5", children: isDe ? "Mo" : "Mon" }),
                                    e.jsx("span", { className: "h-2 w-2 rounded-full bg-[#10B981]" }),
                                    e.jsx("span", { style: { color: textHead }, className: "font-medium", children: isDe ? "Unterkörper A" : "Lower Body A" })
                                  ]
                                }),
                                e.jsx("span", { className: "text-[10.5px] font-semibold text-[#A8DAB5]", children: isDe ? "✓ Erledigt" : "✓ Done" })
                              ]
                            }),
                            e.jsxs("div", {
                              style: { backgroundColor: elevatedBg, borderColor: "rgba(168,218,181,0.35)" },
                              className: "rounded-xl border px-3 py-2 flex items-center justify-between text-xs",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", { className: "font-mono text-[11px] font-semibold text-[#A8DAB5] w-5", children: isDe ? "Di" : "Tue" }),
                                    e.jsx("span", { className: "h-2 w-2 rounded-full bg-[#10B981]" }),
                                    e.jsx("span", { style: { color: textHead }, className: "font-semibold", children: isDe ? "Oberkörper A" : "Upper Body A" })
                                  ]
                                }),
                                e.jsx("span", { className: "rounded-full bg-[#213829] px-2 py-0.5 text-[10px] font-semibold text-[#A8DAB5]", children: isDe ? "Heute" : "Today" })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  : activePreview === "cycle"
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-2.5",
                      children: [
                        e.jsx("h2", {
                          style: { color: textHead },
                          className: "text-xl font-semibold tracking-tight",
                          children: isDe ? "Verlauf" : "History"
                        }),
                        // Segmented Control (Muskel-Balance | Einheiten | Übungen)
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "grid grid-cols-3 rounded-xl p-1 text-center text-[11px] font-semibold",
                          children: [
                            e.jsx("span", { style: { color: textSub }, className: "py-1.5", children: isDe ? "Muskel-Balance" : "Muscle Balance" }),
                            e.jsx("span", { style: { backgroundColor: primaryHex, color: onPrimaryHex }, className: "rounded-lg py-1.5", children: isDe ? "Einheiten" : "Sessions" }),
                            e.jsx("span", { style: { color: textSub }, className: "py-1.5", children: isDe ? "Übungen" : "Exercises" })
                          ]
                        }),
                        // 4-Phasen System mit den echten Farben (#F43F5E, #10B981, #F59E0B, #A78BFA)
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg, borderColor: cardBorder },
                          className: "rounded-2xl border p-3 flex flex-col gap-2",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsx("span", { style: { color: textHead }, className: "text-xs font-semibold", children: isDe ? "🌸 Zyklus-Synchronisiertes Training" : "🌸 Cycle-Synced Training" }),
                                e.jsx("span", { className: "font-mono text-[10px] font-semibold text-[#A8DAB5]", children: "28T" })
                              ]
                            }),
                            [
                              { c: "#F43F5E", name: isDe ? "Phase 1 · Menstruation" : "Phase 1 · Menstruation", badge: isDe ? "🛡️ 4T Streak-Schutz" : "🛡️ 4d streak buffer", active: !1 },
                              { c: "#10B981", name: isDe ? "Phase 2 · Follikelphase" : "Phase 2 · Follicular", badge: isDe ? "⚡ Kraft & Aufbau" : "⚡ Strength & Volume", active: !0 },
                              { c: "#F59E0B", name: isDe ? "Phase 3 · Ovulation" : "Phase 3 · Ovulation", badge: isDe ? "🔥 PR-Peak" : "🔥 PR Peak", active: !1 },
                              { c: "#A78BFA", name: isDe ? "Phase 4 · Lutealphase" : "Phase 4 · Luteal", badge: isDe ? "💧 Anti-Frust-Hinweis" : "💧 Water retention note", active: !1 }
                            ].map((p, idx) =>
                              e.jsxs("div", {
                                key: idx,
                                style: { backgroundColor: p.active ? "rgba(16,185,129,0.14)" : elevatedBg },
                                className: "rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[10.5px]",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("span", { style: { backgroundColor: p.c }, className: "h-2 w-2 rounded-full shrink-0" }),
                                      e.jsx("span", { style: { color: textHead }, className: "font-medium", children: p.name })
                                    ]
                                  }),
                                  e.jsx("span", { style: { color: p.c }, className: "font-semibold text-[10px]", children: p.badge })
                                ]
                              })
                            )
                          ]
                        }),
                        // Abgeschlossene Einheit
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "rounded-2xl p-3 flex flex-col gap-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", { style: { color: textHead }, className: "text-xs font-semibold", children: isDe ? "Oberkörper A" : "Upper Body A" }),
                                    e.jsx("span", { className: "rounded-full bg-[#10B981]/20 px-2 py-0.5 text-[9.5px] font-semibold text-[#10B981]", children: "🌸 Phase 2 · T9" })
                                  ]
                                }),
                                e.jsx("span", { style: { color: textSub }, className: "font-mono text-[10px]", children: "29.10.2026" })
                              ]
                            }),
                            e.jsx("span", { style: { color: textSub }, className: "font-mono text-[10.5px]", children: "18 Sätze · 4.280 kg · 52 min" })
                          ]
                        })
                      ]
                    })
                  : activePreview === "workout"
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-2.5",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "flex flex-col",
                              children: [
                                e.jsx("span", { style: { color: textHead }, className: "text-base font-semibold", children: isDe ? "Oberkörper A" : "Upper Body A" }),
                                e.jsx("span", { style: { color: textSub }, className: "font-mono text-[10.5px]", children: isDe ? "Dauer 34:18 · 2 von 9 Sätzen" : "Duration 34:18 · 2 of 9 sets" })
                              ]
                            }),
                            e.jsx("span", { style: { backgroundColor: primaryHex, color: onPrimaryHex }, className: "rounded-lg px-3 py-1.5 text-xs font-semibold", children: isDe ? "Fertig" : "Finish" })
                          ]
                        }),
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "rounded-2xl p-3 flex flex-col gap-2.5",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsx("span", { style: { color: textHead }, className: "text-xs font-semibold", children: isDe ? "Bankdrücken (Langhantel)" : "Barbell Bench Press" }),
                                e.jsx("span", { style: { color: textSub }, className: "font-mono text-[10.5px]", children: "2/3" })
                              ]
                            }),
                            e.jsxs("div", {
                              style: { backgroundColor: elevatedBg },
                              className: "rounded-xl p-2 text-[10.5px] flex flex-col gap-0.5",
                              children: [
                                e.jsx("span", { style: { color: textSub }, children: isDe ? "Letztes Mal: 80 kg × 10 (RIR 2)" : "Last time: 80 kg × 10 (RIR 2)" }),
                                e.jsx("span", { className: "font-semibold text-[#A8DAB5]", children: isDe ? "📈 Vorschlag: 82,5 kg × 8–10 Wdh." : "📈 Suggestion: 82.5 kg × 8–10 reps" })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-2 text-center font-mono",
                              children: [
                                e.jsxs("div", {
                                  style: { backgroundColor: elevatedBg },
                                  className: "rounded-xl p-2",
                                  children: [
                                    e.jsx("span", { style: { color: textSub }, className: "block text-[9px] font-sans uppercase", children: isDe ? "GEWICHT (KG)" : "WEIGHT (KG)" }),
                                    e.jsx("span", { style: { color: textHead }, className: "text-base font-bold", children: "82,5" })
                                  ]
                                }),
                                e.jsxs("div", {
                                  style: { backgroundColor: elevatedBg },
                                  className: "rounded-xl p-2",
                                  children: [
                                    e.jsx("span", { style: { color: textSub }, className: "block text-[9px] font-sans uppercase", children: isDe ? "WIEDERHOLUNGEN" : "REPS" }),
                                    e.jsx("span", { style: { color: textHead }, className: "text-base font-bold", children: "9" })
                                  ]
                                })
                              ]
                            }),
                            e.jsx("div", {
                              style: { backgroundColor: primaryHex, color: onPrimaryHex },
                              className: "w-full rounded-xl py-2 text-center text-xs font-semibold",
                              children: isDe ? "Satz eintragen" : "Log Set"
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          style: { backgroundColor: elevatedBg, borderColor: cardBorder },
                          className: "rounded-2xl border p-2.5 flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "flex flex-col",
                              children: [
                                e.jsx("span", { style: { color: textSub }, className: "text-[9.5px]", children: isDe ? "Pause läuft" : "Rest timer" }),
                                e.jsx("span", { className: "font-mono text-sm font-bold text-[#A8DAB5]", children: "01:12.40" })
                              ]
                            }),
                            e.jsx("span", { style: { backgroundColor: primaryHex, color: onPrimaryHex }, className: "rounded-lg px-2.5 py-1 text-[10.5px] font-semibold", children: isDe ? "Überspringen" : "Skip" })
                          ]
                        })
                      ]
                    })
                  : e.jsxs("div", {
                      className: "flex flex-col gap-2.5",
                      children: [
                        e.jsx("h2", {
                          style: { color: textHead },
                          className: "text-xl font-semibold tracking-tight",
                          children: "Gym Buddy"
                        }),
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "rounded-2xl p-3 flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              style: { backgroundColor: elevatedBg },
                              className: "h-16 w-16 shrink-0 rounded-xl flex items-center justify-center",
                              children: e.jsx(GymBuddyPreviewCanvas, {
                                petId: "monster",
                                stage: 3,
                                mood: "happy",
                                colorMode: "custom",
                                customHex: "#A8DAB5",
                                equipped: { head: "sweatband", body: "belt", hand: "dumbbell" },
                                size: 54
                              })
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                e.jsx("span", { style: { color: textHead }, className: "text-xs font-semibold", children: "Pumper-Monster (Stufe 3)" }),
                                e.jsx("span", { style: { color: textSub }, className: "text-[10.5px]", children: isDe ? "⚡ Progress · 480 / 600 XP" : "⚡ Progress · 480 / 600 XP" })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          style: { backgroundColor: cardBg },
                          className: "rounded-2xl p-3 flex flex-col gap-2",
                          children: [
                            e.jsx("span", {
                              style: { color: textHead },
                              className: "text-xs font-semibold",
                              children: isDe ? "7 Begleiter (3 Cute · 4 Progress)" : "7 Companions (3 Cute · 4 Progress)"
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-1.5",
                              children: PRESET_PETS.map(p =>
                                e.jsx("span", {
                                  key: p.id,
                                  style: { backgroundColor: elevatedBg, color: textHead },
                                  className: "rounded-lg px-2 py-1 text-[10px] font-medium",
                                  children: `${p.style === "cute" ? "✨" : "⚡"} ${isDe ? p.nameDe : p.nameEn}`
                                })
                              )
                            })
                          ]
                        })
                      ]
                    })
              }),

              // Real Floating Capsule Bottom Bar (.capsule-nav: only active tab has text label!)
              e.jsx("div", {
                className: "px-6 pt-1 pb-3 flex justify-center",
                children: e.jsxs("div", {
                  style: { backgroundColor: cardBg, borderColor: cardBorder },
                  className: "rounded-full border px-2 py-1.5 flex items-center gap-3 shadow-lg",
                  children: [
                    e.jsxs("span", {
                      style: activePreview !== "cycle" ? { backgroundColor: primaryHex, color: onPrimaryHex } : { color: textSub },
                      className: "rounded-full px-3 py-1 text-[11px] font-semibold inline-flex items-center gap-1.5",
                      children: [
                        e.jsx(ue, { name: "dumbbell", size: "sm" }),
                        activePreview !== "cycle" ? (isDe ? "Heute" : "Today") : null
                      ]
                    }),
                    e.jsxs("span", {
                      style: activePreview === "cycle" ? { backgroundColor: primaryHex, color: onPrimaryHex } : { color: textSub },
                      className: "rounded-full px-3 py-1 text-[11px] font-semibold inline-flex items-center gap-1.5",
                      children: [
                        e.jsx(ue, { name: "timer", size: "sm" }),
                        activePreview === "cycle" ? (isDe ? "Verlauf" : "History") : null
                      ]
                    }),
                    e.jsx("span", { style: { color: textSub }, className: "px-1.5", children: e.jsx(ue, { name: "utensils", size: "sm" }) }),
                    e.jsx("span", { style: { color: textSub }, className: "px-1.5", children: e.jsx(ue, { name: "sliders", size: "sm" }) })
                  ]
                })
              })
            ]
          })
        }),

        e.jsxs("div", {
          className: "flex flex-col gap-2 border-t border-outline/20 pt-3",
          children: [
            isDe ? null : e.jsx("p", { className: "text-caption text-onSurfaceVariant", children: s.showcase.whatsappGermanOnlyHint }),
            e.jsx(E, {
              variant: "outlined",
              fullWidth: !0,
              onClick: onCopy,
              children: copied ? s.showcase.copyWhatsappConfirmation : s.showcase.copyWhatsappAction
            }),
            copyFail ? e.jsx("p", { role: "alert", className: "text-caption text-danger", children: s.showcase.copyWhatsappFailedHint }) : null
          ]
        })
      ]
    })
  });
}const Jn="Julian",Xn="2026",Qn=`© ${Xn} ${Jn} – Alle Rechte vorbehalten.`,X="BITTE AUSFÜLLEN",L={name:X,street:X,city:X,country:"Deutschland",email:X},Zn=["name","street","city","country","email"];function es(t=L){return Zn.every(n=>{const s=t[n];return s.trim()!==""&&s!==X})}function O({title:t,children:n}){return e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t}),e.jsx("p",{className:"text-caption leading-relaxed text-onSurfaceVariant",children:n})]})}function ts(){if(!es())return null;const t=L.contentResponsible?.trim();return e.jsxs(O,{title:"Impressum",children:["Angaben gemäß § 5 DDG:",e.jsx("br",{}),L.name,e.jsx("br",{}),L.street,e.jsx("br",{}),L.city,e.jsx("br",{}),L.country,e.jsx("br",{}),e.jsx("br",{}),"Kontakt: ",L.email,L.phone?e.jsxs(e.Fragment,{children:[e.jsx("br",{}),"Telefon: ",L.phone]}):null,t&&t!==L.name?e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),"Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: ",t]}):null]})}function ns({open:t,onClose:n}){const s=N(),isEn=Le()==="en",cards=[{id:"project",title:s.settings.noticePrivateProject,text:s.settings.noticeAsIs,icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4 text-primary",children:[e.jsx("path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}),e.jsx("path",{d:"M20 3v4"}),e.jsx("path",{d:"M22 5h-4"})]})},{id:"medical",title:s.settings.noticeNoMedical,text:s.settings.noticeWellness,icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4 text-primary",children:[e.jsx("path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}),e.jsx("path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"})]})},{id:"data",title:s.settings.noticeLocalData,text:s.settings.noticeLocalDataRest,icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4 text-primary",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})},{id:"fairuse",title:s.settings.noticeSharing,text:s.settings.noticeSharingLong,icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4 text-primary",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}];return e.jsx(P,{open:t,onClose:n,title:s.settings.legal,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2.5",children:cards.map(card=>e.jsxs("div",{className:"disclaimer-mini-card flex flex-col gap-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"disclaimer-icon-badge shrink-0",children:card.icon}),e.jsx("p",{className:"text-titleS font-semibold leading-snug text-onSurface",children:card.title})]}),e.jsx("p",{className:"text-caption leading-relaxed text-onSurfaceVariant",children:card.text})]},card.id))}),e.jsx(ts,{}),isEn?e.jsxs(e.Fragment,{children:[e.jsxs(O,{title:"Copyright & License",children:["© 2026 Julian – All rights reserved. This app is a personal project and may be used privately and shared unmodified with friends in private. Public redistribution, modification, or commercial use is not permitted. Full license terms are included in the LICENSE file."]}),e.jsxs(O,{title:"Health & Medical Disclaimer",children:["This app is a ",e.jsx("strong",{children:"fitness and wellness tool"})," for logging workouts, body weight, and nutrition. It is ",e.jsx("strong",{children:"not a medical device"})," and is not intended to diagnose, prevent, monitor, treat, or alleviate any medical condition. All metrics regarding workouts, cycle phases, calories, and nutrition are general estimates for healthy adults. Please consult a doctor before use if you have any symptoms, pre-existing conditions, or are pregnant."]}),e.jsxs(O,{title:"100% Local Data & Privacy",children:["No account, no tracking, no analytics, no ads, and no cloud servers: 100% of your data is stored locally on your device (IndexedDB). Important: No one can recover your data if you clear your browser storage or lose your phone. Please create regular backups via Settings → 'Export Data'. External queries (TheMealDB recipes, wger exercises, Open Food Facts barcode scans) only occur when explicitly triggered by you."]}),e.jsxs(O,{title:"Private Use & Copies",children:["You are welcome to share this app unmodified with friends in private. Public redistribution (websites, app stores, public repositories), modification, or commercial use is not permitted. Anyone running or using a copy does so at their own risk and is solely responsible for its operation."]}),e.jsx(O,{title:"Third-Party Sources",children:"Recipes & images: TheMealDB (themealdb.com). Exercise data: wger (wger.de). Product data: Open Food Facts (openfoodfacts.org). These contents belong to their respective providers and are subject to their license terms."})]}):e.jsxs(e.Fragment,{children:[e.jsxs(O,{title:"Copyright & Lizenz",children:[Qn,' Du darfst die App gerne unverändert im privaten Kreis teilen. Eine öffentliche Verbreitung, Veränderung oder kommerzielle Nutzung ist nicht gestattet. Quellcode und Inhalte bleiben Eigentum des Urhebers; die vollständigen Bedingungen stehen in der Datei LICENSE, die der App beiliegt.']}),e.jsxs(O,{title:"Was diese App ist – und was nicht",children:["Die App ist ein ",e.jsx("strong",{children:"Fitness- und Wellness-Werkzeug"}),", ",e.jsx("strong",{children:"kein Medizinprodukt"}),". Sie ist nicht dazu bestimmt, Krankheiten zu erkennen, zu verhüten, zu überwachen, zu behandeln oder zu lindern, stellt keine Diagnosen und ersetzt keine ärztliche, physiotherapeutische oder ernährungswissenschaftliche Betreuung. Alle Angaben zu Training, Zyklusphasen, Kalorien und Nährwerten sind Orientierungswerte für gesunde Erwachsene. Bei Beschwerden, Vorerkrankungen oder einer Schwangerschaft hol bitte vorab ärztlichen Rat ein."]}),e.jsxs(O,{title:"Weitergabe & Kopien",children:["Diese App ist ein leidenschaftliches Hobby-Projekt und wird im aktuellen Zustand bereitgestellt – ohne Gewährleistung, Support oder Haftung für Schäden, soweit gesetzlich zulässig. Du darfst die App gerne ",e.jsx("strong",{children:"unverändert im privaten Kreis teilen"}),". Eine öffentliche Verbreitung (Website, App-Store, Download-Portal, öffentliches Code-Verzeichnis), Veränderung oder kommerzielle Nutzung ist nicht gestattet. Wer eine Kopie nutzt oder betreibt, handelt auf eigene Verantwortung."]}),e.jsx(O,{title:"Datenschutz & Lokale Speicherung",children:'Kein Konto, kein Tracking, keine Cloud: Alle Daten liegen zu 100 % lokal auf deinem Gerät (IndexedDB). Wichtig: Niemand kann sie wiederherstellen, wenn du den Browser-Speicher löschst oder dein Handy verlierst. Erstelle dir daher regelmäßig ein Backup über Einstellungen → ‚Daten exportieren‘. Externe Abfragen (Rezepte über TheMealDB, Übungen über wger, Produktdaten über Open Food Facts nach einem Barcode-Scan) finden nur statt, wenn du sie selbst auslöst bzw. in den Einstellungen „Extern" aktivierst.'}),e.jsx(O,{title:"Deine Rechte & Server-Protokolle",children:'Weil keine Daten an den Anbieter dieser App übertragen werden, liegen dort auch keine personenbezogenen Daten über dich vor. Deine Daten kontrollierst du direkt in der App über den JSON-Export bzw. das Löschen der Browser-Daten. Wird die App über das Netz geladen, protokolliert der Hosting-Anbieter lediglich den technisch notwendigen Abruf der App-Dateien – deine Trainings-, Zyklus-, Gewichts- und Ernährungsdaten verlassen dein Gerät nie.'}),e.jsx(O,{title:"Drittanbieter",children:"Rezepte & Bilder: TheMealDB (themealdb.com). Übungsdaten: wger (wger.de). Produktdaten: Open Food Facts (openfoodfacts.org). Diese Inhalte gehören den jeweiligen Anbietern und unterliegen deren Lizenzbedingungen."})]})]})})}function Q({label:t,value:n,onDecrease:s,onIncrease:i,accessibleName:a,valueClassName:o="min-w-[4rem]"}){const l=N();return e.jsxs("div",{className:"flex items-center gap-2",children:[t?e.jsx("span",{className:"w-20 shrink-0 text-caption text-onSurfaceVariant",children:t}):null,e.jsx("button",{type:"button",onClick:()=>{G(),s()},"aria-label":l.common.decrease(a),className:"h-touch w-touch shrink-0 rounded-lg border border-line2 text-titleS text-onSurface",children:"−"}),e.jsx("span",{className:`${o} flex-1 text-center text-titleS tabular-nums text-onSurface`,children:n}),e.jsx("button",{type:"button",onClick:()=>{G(),i()},"aria-label":l.common.increase(a),className:"h-touch w-touch shrink-0 rounded-lg border border-line2 text-titleS text-onSurface",children:"+"})]})}function he({id:t,title:n,body:s}){const i=N(),{settings:a}=M(),{acknowledged:o,acknowledge:l,error:r}=it(t);return!a.beginnerTipsEnabled||o===null||o?null:e.jsxs(pe,{padding:"sm",className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:n}),e.jsx("p",{className:"text-body text-onSurfaceVariant",children:s}),r?e.jsx("p",{className:"text-body text-danger",children:r}):null,e.jsx(E,{variant:"tonal",onClick:()=>{l()},children:i.settings.microTipDismiss})]})}const ye=[1,1.25,2.5,5,10],ke=5;function ss(){const t=N(),{settings:n,setProgressiveOverloadEnabled:s,setEffortScale:i,setDefaultWarmupSets:a,setDefaultIsometricSets:o,setDefaultIsometricDurationSec:l,setWeightStepKg:r}=M();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.progressiveOverload}),e.jsxs(j,{children:[t.settings.progressiveHintLead," ",at," ",t.settings.progressiveHintTail]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:n.progressiveOverloadEnabled,onClick:()=>s(!0),children:t.settings.on}),e.jsx(h,{selected:!n.progressiveOverloadEnabled,onClick:()=>s(!1),children:t.settings.off})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.effortScale}),e.jsx(Oe,{citationId:"effortRir",label:t.science.infoLabelEffort})]}),e.jsx(j,{children:t.settings.effortScaleHint}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:n.effortScale==="rir",onClick:()=>i("rir"),children:t.settings.effortScaleRir}),e.jsx(h,{selected:n.effortScale==="rpe",onClick:()=>i("rpe"),children:t.settings.effortScaleRpe})]}),e.jsx(he,{id:"beginnerTipRirRpeV1",title:t.settings.beginnerTipRirRpeTitle,body:t.settings.beginnerTipRirRpeBody})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.warmupSets}),e.jsx(j,{children:t.settings.warmupSetsHint}),e.jsx(Q,{accessibleName:t.settings.defaultWarmupSets,value:n.defaultWarmupSets===0?t.settings.noWarmup:String(n.defaultWarmupSets),onDecrease:()=>a(n.defaultWarmupSets-1),onIncrease:()=>a(n.defaultWarmupSets+1)})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.isometricDefaults}),e.jsx(j,{children:t.settings.isometricHint}),e.jsx(Q,{label:t.settings.sets,accessibleName:t.settings.defaultSetCount,valueClassName:"min-w-[3.5rem]",value:n.defaultIsometricSets,onDecrease:()=>o(Math.max(lt,n.defaultIsometricSets-1)),onIncrease:()=>o(Math.min(rt,n.defaultIsometricSets+1))}),e.jsx(Q,{label:t.settings.holdDuration,accessibleName:t.settings.defaultHoldDuration,valueClassName:"min-w-[3.5rem]",value:`${n.defaultIsometricDurationSec}s`,onDecrease:()=>l(Math.max(ot,n.defaultIsometricDurationSec-ke)),onIncrease:()=>l(Math.min(ct,n.defaultIsometricDurationSec+ke))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.weightStep}),e.jsx(j,{children:t.settings.weightStepHint}),e.jsx("div",{className:"flex flex-wrap gap-2",children:ye.map(c=>e.jsxs(h,{selected:n.weightStepKg===c,onClick:()=>r(c),children:[c," kg"]},c))}),ye.includes(n.weightStepKg)?null:e.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[t.settings.current," ",n.weightStepKg," kg (",n.weightStepKg<dt||n.weightStepKg>ut?t.settings.invalidWillBeFixed:t.settings.customValue,")"]})]})]})}const ce=15,Ce=.05,is=[{key:"warmup",get label(){return x().training.setTypeLabels.warmup}}];function as(t){return`${Math.round(t*100)} %`}function rs(){const t=N(),{settings:n,setBaseRestSeconds:s,setRestFactor:i,setVoiceAnnouncementsEnabled:a,setRestTimerSound:o,setHoldTimerSound:l}=M();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.baseRest}),e.jsx(Oe,{citationId:"restInterval",label:t.science.infoLabelRest})]}),e.jsx(j,{children:t.settings.baseRestHint}),e.jsx(Q,{accessibleName:`${t.settings.baseRestStep} ${String(ce)} ${t.settings.seconds}`,value:gt(n.baseRestSeconds),onDecrease:()=>s(be(n.baseRestSeconds-ce)),onIncrease:()=>s(be(n.baseRestSeconds+ce))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.restFactorWarmup}),e.jsx(j,{children:t.settings.restFactorHint}),is.map(r=>e.jsx(Q,{label:r.label,accessibleName:`${r.label} ${t.settings.factorSuffix}`,valueClassName:"min-w-[3.5rem]",value:as(n.restFactors[r.key]),onDecrease:()=>i(r.key,Math.max(xt,n.restFactors[r.key]-Ce)),onIncrease:()=>i(r.key,Math.min(pt,n.restFactors[r.key]+Ce))},r.key))]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.voiceAnnouncements}),e.jsx(j,{children:t.settings.voiceHint}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:n.voiceAnnouncementsEnabled,onClick:()=>a(!0),children:t.settings.on}),e.jsx(h,{selected:!n.voiceAnnouncementsEnabled,onClick:()=>a(!1),children:t.settings.off})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.alarmSound}),e.jsx(j,{children:t.settings.alarmSoundHint})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.settings.restTimerSoundLabel}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Se.map(r=>e.jsx(h,{compact:!0,selected:n.restTimerSound===r,onClick:()=>{G(),o(r),ve(r)},children:je[r]},r))})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.settings.holdTimerSoundLabel}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Se.map(r=>e.jsx(h,{compact:!0,selected:n.holdTimerSound===r,onClick:()=>{G(),l(r),ve(r)},children:je[r]},r))})]})]})]})}const ls=Object.keys(Fe);function cs(){const t=N(),{settings:n,setAccordionModeEnabled:s,toggleAvailableEquipment:i,setUnilateralCounting:a}=M(),o=n.availableEquipment??[],l=n.unilateralCounting??ft;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.exerciseCards}),e.jsxs(j,{children:["„",t.settings.accordionMode,'": ',t.settings.accordionHintTail]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:n.accordionModeEnabled,onClick:()=>s(!0),children:t.settings.accordionMode}),e.jsx(h,{selected:!n.accordionModeEnabled,onClick:()=>s(!1),children:t.settings.independentCards})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.gymEquipment}),e.jsx(j,{children:t.settings.equipmentHint}),e.jsx("div",{className:"flex flex-wrap gap-2",children:ls.map(r=>e.jsx(h,{compact:!0,selected:o.includes(r),onClick:()=>{G(),i(r)},children:Fe[r]},r))}),o.length===0?e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.settings.allEquipmentAvailable}):null]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.unilateralCounting}),e.jsx(j,{children:t.settings.unilateralHint}),e.jsx("div",{className:"flex flex-wrap gap-2",children:ht.map(r=>e.jsx(h,{compact:!0,selected:l===r,onClick:()=>{G(),a(r)},children:mt[r]},r))}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:bt[l]})]})]})}const Ee="timerAudio",oe={timerAudio:"timer",setsProgression:"arrowUp",viewEquipment:"dumbbell"};function os({open:t,onClose:n}){const s=N(),{resetToDefaults:i}=M(),[a,o]=u.useState(Ee),l=c=>o(p=>p===c?null:c);u.useEffect(()=>{t||o(Ee)},[t]);const r={timerAudio:s.settings.categoryTimerAudio,setsProgression:s.settings.categorySetsProgression,viewEquipment:s.settings.categoryViewEquipment};return e.jsxs(P,{open:t,onClose:n,title:s.settings.trainingTimer,children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(V,{title:r.timerAudio,icon:oe.timerAudio,isOpen:a==="timerAudio",onToggle:()=>l("timerAudio"),children:e.jsx(rs,{})}),e.jsx(V,{title:r.setsProgression,icon:oe.setsProgression,isOpen:a==="setsProgression",onToggle:()=>l("setsProgression"),children:e.jsx(ss,{})}),e.jsx(V,{title:r.viewEquipment,icon:oe.viewEquipment,isOpen:a==="viewEquipment",onToggle:()=>l("viewEquipment"),children:e.jsx(cs,{})})]}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:i,className:"mt-4",children:s.settings.resetDefaults})]})}function ds({open:t,onClose:n}){const s=N(),i={volume:s.science.categoryVolume,rest:s.science.categoryRest,effort:s.science.categoryEffort,load:s.science.categoryLoad,isometric:s.science.categoryIsometric};return e.jsx(P,{open:t,onClose:n,title:s.science.sheetTitle,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.science.sheetIntro}),St.map(a=>{const o=jt(a);return o.length===0?null:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:i[a]}),o.map(l=>e.jsxs(pe,{padding:"sm",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:l.title}),e.jsx("p",{className:"mt-1 text-body text-onSurfaceVariant",children:l.summary}),e.jsxs("p",{className:"mt-2 text-caption text-onSurfaceVariant",children:[l.authors,l.year?` (${l.year})`:""]}),l.url?e.jsx("p",{className:"mt-1 break-all text-caption text-onSurfaceVariant",children:l.url}):null]},l.id))]},a)}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.science.sheetDisclaimer})]})})}function us({value:t,onChange:n,trainingDays:s}){const i=N(),a=vt(s),o=a.factor!==t;return e.jsxs("label",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:i.nutrition.activityLevel}),e.jsx("select",{value:t,onChange:l=>n(Number(l.target.value)),className:"h-touch rounded-lg border border-transparent bg-surface-containerHigh px-3 text-onSurface focus:outline-none focus:ring-2 focus:ring-primary",children:wt().map(l=>e.jsx("option",{value:l.factor,children:l.label},l.factor))}),e.jsxs("span",{className:"text-caption text-onSurfaceVariant",children:[i.settings.yourWeeklyPlan(s),o?e.jsxs(e.Fragment,{children:[" ","→ ",a.label," ",e.jsx("button",{type:"button",className:"press-feedback text-primary underline",onClick:()=>n(a.factor),children:i.nutrition.apply})]}):i.nutrition.matchesSelection]})]})}const gs=["lose","maintain","gain"];function ps({goal:t,onGoalChange:n,adjustKcal:s,onAdjustKcalChange:i,targetWeightKg:a,onTargetWeightChange:o}){const l=N();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:l.nutrition.target}),e.jsx("div",{className:"flex gap-2",children:gs.map(r=>e.jsx(h,{selected:t===r,onClick:()=>n(r),children:Nt[r]},r))})]}),t!=="maintain"?e.jsx(K,{label:t==="lose"?l.nutrition.calorieDeficitPerDay:l.nutrition.calorieSurplusPerDay,inputMode:"numeric",value:s,onChange:r=>i(r.target.value)}):null,t==="lose"?e.jsx(K,{label:l.nutrition.goalWeightOptional,inputMode:"decimal",value:a,onChange:r=>o(r.target.value)}):null]})}function xs(){const t=N(),n=yt(),s=kt(),i=Ct(s.plan),[a,o]=u.useState("male"),[l,r]=u.useState("30"),[c,p]=u.useState("180"),[f,d]=u.useState("80"),[g,m]=u.useState(1.55),[y,_]=u.useState("maintain"),[S,b]=u.useState("500"),[C,A]=u.useState(!1),[T,F]=u.useState("15"),[I,W]=u.useState(""),[q,z]=u.useState(!1);u.useEffect(()=>{const v=n.profile;v&&(o(v.sex),r(String(v.age)),p(String(v.heightCm)),d(String(v.weightKg)),m(v.activityFactor),_(v.goal),b(String(v.adjustKcal)),A(v.useKatch??!1),F(v.bodyFatPct!=null?String(v.bodyFatPct):"15"),W(v.targetWeightKg!=null?String(v.targetWeightKg):""))},[n.profile]);const k={sex:a,age:$(l),heightCm:$(c),weightKg:$(f),activityFactor:g,goal:y,adjustKcal:y==="maintain"?0:$(S),useKatch:C,bodyFatPct:C?$(T):void 0,targetWeightKg:y==="lose"&&$(I)>0?$(I):void 0},w=Et(k),R=Tt(w.targetKcal,k.weightKg),B=At(k),Y=Dt({goal:k.goal,weightKg:k.weightKg,heightCm:k.heightCm,bmrValue:B,tdeeValue:It(B,k.activityFactor),adjustKcal:k.adjustKcal,targetWeightKg:k.targetWeightKg}),ee=C&&k.bodyFatPct!=null&&k.bodyFatPct<=0,te=k.age>0&&k.heightCm>0&&k.weightKg>0&&!ee&&!Y.blocked,le=async()=>{if(!te)return;await n.saveProfile(k)&&z(!0)};return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.settings.profileSectionTitle}),e.jsx(j,{children:t.settings.profileSectionHint}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{selected:a==="male",onClick:()=>o("male"),children:t.nutrition.male}),e.jsx(h,{selected:a==="female",onClick:()=>o("female"),children:t.nutrition.female})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx(K,{label:t.nutrition.age,inputMode:"numeric",value:l,onChange:v=>r(v.target.value)}),e.jsx(K,{label:t.nutrition.heightCm,inputMode:"numeric",value:c,onChange:v=>p(v.target.value)}),e.jsx(K,{label:t.nutrition.weightKg,inputMode:"decimal",value:f,onChange:v=>d(v.target.value)})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-xl2 bg-surface-containerHigh p-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{selected:C,onClick:()=>A(!C),children:t.nutrition.athleteMode}),e.jsx(j,{children:t.nutrition.athleteModeHint})]}),C?e.jsx(K,{label:t.nutrition.bodyFatPercent,inputMode:"decimal",value:T,onChange:v=>F(v.target.value)}):null,ee?e.jsx("p",{className:"text-caption text-danger",children:t.nutrition.invalidBodyFat}):null]}),e.jsx(us,{value:g,onChange:m,trainingDays:i}),e.jsx(ps,{goal:y,onGoalChange:_,adjustKcal:S,onAdjustKcalChange:b,targetWeightKg:I,onTargetWeightChange:W}),e.jsx(nn,{preview:w,macros:R,health:Y}),e.jsx(he,{id:"beginnerTipBmrTdeeV1",title:t.settings.beginnerTipBmrTdeeTitle,body:t.settings.beginnerTipBmrTdeeBody}),k.age<=0||k.heightCm<=0||k.weightKg<=0?e.jsx("p",{className:"text-caption text-danger",children:t.nutrition.missingBodyData}):null,e.jsx(E,{variant:"filled",fullWidth:!0,disabled:!te,onClick:()=>{z(!1),le()},children:Y.blocked?t.nutrition.blockedGoalTooLow:t.settings.profileSaveAction}),q?e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.settings.profileSavedHint}):null]})}const fs={day:"2-digit",month:"2-digit"};function hs({open:t,onClose:n}){const s=N(),{settings:i,startDeload:a,cancelDeload:o,endDismissDeloadWarning:l,toggleInjuryLimitedMuscleGroup:r}=M(),c=i.injuryLimitedMuscleGroups??[],p=Rt(i.deloadActiveUntil)!=="none",f=i.deloadWarningDismissedUntil!==void 0&&Date.now()<i.deloadWarningDismissedUntil,d=f?Lt(fs).format(new Date(i.deloadWarningDismissedUntil)):null;return e.jsx(P,{open:t,onClose:n,title:s.settings.categoryProfileRegeneration,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(xs,{}),e.jsx("div",{className:"border-t border-outline/20"}),e.jsx(cycToggle,{}),e.jsx("div",{className:"border-t border-outline/20"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:s.settings.injuryLimitationsTitle}),e.jsx(j,{children:s.settings.injuryLimitationsHint}),e.jsx("div",{className:"flex flex-wrap gap-2",children:sn.map(g=>e.jsx(h,{compact:!0,selected:c.includes(g),onClick:()=>r(g),children:Ot[g]},g))}),c.length===0?e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.settings.injuryLimitationsNone}):null]}),e.jsx("div",{className:"border-t border-outline/20"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:s.settings.deloadManualTitle}),e.jsx(j,{children:s.settings.deloadManualHint}),e.jsx(he,{id:"beginnerTipDeloadV1",title:s.settings.beginnerTipDeloadTitle,body:s.settings.beginnerTipDeloadBody}),e.jsxs("p",{className:"text-body text-onSurface",children:[s.settings.deloadManualStatusLabel," ",p?s.settings.deloadManualStatusActive:s.settings.deloadManualStatusInactive]}),d&&e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.settings.deloadManualDismissedUntilLabel(d)}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(E,{variant:p?"outlined":"filled",onClick:()=>p?o():a(),children:p?s.settings.deloadManualResetAction:s.settings.deloadManualStartAction}),f&&e.jsx(E,{variant:"outlined",onClick:()=>l(),children:s.settings.deloadManualUndismissAction})]})]})]})})}function ms({open:t,onClose:n}){const s=N(),isDe=Le()==="de",i=u.useSyncExternalStore(Ft,Mt,()=>!1),a=Pt({platform:Ae(),browser:_t(),hasPrompt:i}),o=async()=>{await Ht(),n()};return e.jsx(P,{open:t,onClose:n,title:isDe?"Auf Home-Bildschirm installieren":s.pwa.installApp,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Wt,{method:a,isTablet:Vt(),onInstall:()=>{o()}}),e.jsx(E,{variant:"tonal",fullWidth:!0,onClick:n,children:isDe?"Fertig":"Done"})]})})}const bs="/roadmap.json",Ss=1;function js(t){return t==="planned"||t==="inProgress"||t==="shipped"}function vs(t){if(typeof t!="object"||t===null)return!1;const n=t;return typeof n.id!="string"||typeof n.title!="string"||!js(n.status)?!1:n.description===void 0||typeof n.description=="string"}function ws(t){if(typeof t!="object"||t===null)return!1;const n=t;return n.format===Ss&&Array.isArray(n.items)&&n.items.every(vs)}async function Ns(){try{const t=await fetch(bs);if(!t.ok)throw new Error(`${x().pwa.roadmapUnavailable} (${String(t.status)})`);const n=await t.json();if(!ws(n))throw new Error(x().pwa.roadmapUnknownFormat);return n.items}catch{return[]}}const ys=["inProgress","planned","shipped"];function ks(t,n){return n==="inProgress"?t.pwa.roadmapStatusInProgress:n==="planned"?t.pwa.roadmapStatusPlanned:t.pwa.roadmapStatusShipped}function Cs({open:t,onClose:n}){const s=N(),[i,a]=u.useState(void 0);return u.useEffect(()=>{if(!t)return;a(void 0);let o=!0;return Ns().then(l=>{o&&a(l)}),()=>{o=!1}},[t]),e.jsx(P,{open:t,onClose:n,title:s.pwa.roadmapTitle,children:e.jsx("div",{className:"flex flex-col gap-4",children:i===void 0?e.jsx("p",{className:"text-body text-onSurfaceVariant",children:s.common.loading}):i.length===0?e.jsx(Me,{title:s.pwa.roadmapEmptyTitle,description:s.pwa.roadmapEmptyDescription}):ys.map(o=>{const l=i.filter(r=>r.status===o);return l.length===0?null:e.jsxs("div",{className:"flex flex-col gap-2.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-titleS font-semibold text-onSurface",children:ks(s,o)}),e.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] font-semibold " + (o==="shipped"?"bg-primary/20 text-primary":"bg-primary text-primary-on"),children:o==="shipped"?(Le()==="de"?"Erfolgreich umgesetzt":"Shipped"):(Le()==="de"?"Geplant / Demnächst":"Coming Soon")})]}),e.jsx("ul",{className:"flex flex-col gap-2",children:l.map(r=>{const isDe=Le()==="de",title=isDe?r.title:(r.titleEn||r.title),desc=isDe?r.description:(r.descriptionEn||r.description),isShipped=o==="shipped";return e.jsxs("li",{className:"rounded-xl2 p-3 transition-colors " + (isShipped?"bg-surface-container border border-outline/15":"bg-surface-containerHigh border border-primary/30"),children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:"text-body font-semibold text-onSurface leading-snug",children:title}),e.jsx("span",{className:"shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold " + (isShipped?"bg-primary/15 text-primary":"bg-primary text-primary-on"),children:isShipped?(isDe?"✓ Live":"✓ Live"):(isDe?"Geplant":"Planned")})]}),desc?e.jsx("p",{className:"mt-1 text-caption text-onSurfaceVariant leading-relaxed",children:desc}):null]},r.id)})})]},o)})})})}const de=(t,n)=>n.createdAt-t.createdAt;function Es(){const[t,n]=u.useState([]),[s,i]=u.useState(!0),[a,o]=u.useState(null),l=u.useCallback(async()=>{i(!0),o(null);try{const f=await H("Feedback laden",d=>d.getAll("feedbackEntries"));n(f.sort(de))}catch(f){o(f instanceof Error?f.message:x().feedback.loadFailed)}finally{i(!1)}},[]);u.useEffect(()=>{l()},[l]);const r=u.useCallback(async(f,d)=>{const g=d.trim();if(g==="")return o(x().feedback.textRequired),null;const m={id:Bt(),category:f,text:g,appVersion:Pe,createdAt:Date.now()};try{return await H("Feedback speichern",y=>y.put("feedbackEntries",m)),n(y=>[m,...y].sort(de)),m}catch(y){return o(y instanceof Error?y.message:x().feedback.saveFailed),null}},[]),c=u.useCallback(async f=>{try{const d=await H("Feedback als gesendet markieren",async g=>{const m=await g.get("feedbackEntries",f);if(!m)return null;const y={...m,sentAt:Date.now()};return await g.put("feedbackEntries",y),y});if(!d)return;n(g=>g.map(m=>m.id===f?d:m).sort(de))}catch(d){o(d instanceof Error?d.message:x().feedback.saveFailed)}},[]),p=u.useCallback(async f=>{try{return await H("Feedback löschen",d=>d.delete("feedbackEntries",f)),n(d=>d.filter(g=>g.id!==f)),!0}catch(d){return o(d instanceof Error?d.message:x().feedback.deleteFailed),!1}},[]);return{entries:t,loading:s,error:a,addEntry:r,markSent:c,removeEntry:p}}const ge="Feedback-gymapp.latrine496@passinbox.com";function re(t){const n=x().feedback;return t==="bug"?n.categoryBug:t==="featureRequest"?n.categoryFeatureRequest:n.categoryOther}function Be(t){const n=x().feedback;return[`${n.mailCategoryLabel}: ${re(t.category)}`,`${n.mailVersionLabel}: ${t.appVersion}`,"",t.text].join(`
`)}function Ts(t){const s=`${x().feedback.mailSubject} – ${re(t.category)}`,i=Be(t);return`mailto:${ge}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(i)}`}function As({entry:t,copied:n,onResend:s,onShareOrCopy:i,onDelete:a}){const o=N();return e.jsxs("li",{className:"flex flex-col gap-2 rounded-xl2 bg-surface-container p-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(h,{compact:!0,selected:!1,children:re(t.category)}),t.sentAt!==void 0?e.jsxs("span",{className:"inline-flex items-center gap-1 text-caption text-onSurfaceVariant",children:[e.jsx(ue,{name:"check",size:"sm"}),o.feedback.sentIndicator]}):null]}),e.jsx("p",{className:"whitespace-pre-wrap break-words text-body text-onSurface",children:t.text}),e.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[$t(t.createdAt,{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})," · ",o.settings.versionLabel," ",t.appVersion]})]}),e.jsx(Ut,{label:o.common.delete,onClick:()=>a(t.id),children:e.jsx(ue,{name:"delete",size:"sm"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>s(t),className:"text-caption text-primary underline underline-offset-2",children:o.feedback.resendAction}),e.jsx("button",{type:"button",onClick:()=>i(t),className:"text-caption text-primary underline underline-offset-2",children:n?o.feedback.copiedConfirmation:o.feedback.shareOrCopyAction})]})]})}const Ds=["bug","featureRequest","other"];function Is({open:t,onClose:n}){const s=N(),{entries:i,loading:a,error:o,addEntry:l,markSent:r,removeEntry:c}=Es(),[p,f]=u.useState("bug"),[d,g]=u.useState(""),[m,y]=u.useState(!1),[_,S]=u.useState(null),[b,C]=u.useState(!1),[A,T]=u.useState(!1),[F,I]=u.useState(!1),W=w=>{window.location.href=Ts(w),r(w.id)},q=async()=>{I(!1);try{await navigator.clipboard.writeText(ge),T(!0),window.setTimeout(()=>T(!1),2e3)}catch{I(!0)}},z=async()=>{if(!m){y(!0);try{const w=await l(p,d);w&&(g(""),W(w))}finally{y(!1)}}},k=async w=>{C(!1);const R=Be(w);if(typeof navigator.share=="function"){try{await navigator.share({text:R}),r(w.id)}catch{}return}try{await navigator.clipboard.writeText(R),r(w.id),S(w.id),window.setTimeout(()=>S(B=>B===w.id?null:B),2e3)}catch{C(!0)}};return e.jsx(P,{open:t,onClose:n,title:s.feedback.title,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.feedback.intro}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-xl2 bg-surface-containerHigh p-3",children:[e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.feedback.emailAddressLabel}),e.jsx("p",{className:"select-all break-all text-body text-onSurface",children:ge}),e.jsx(E,{variant:"outlined",onClick:()=>{q()},children:A?s.feedback.emailCopiedConfirmation:s.feedback.copyEmailAction}),F?e.jsx("p",{role:"alert",className:"text-caption text-danger",children:s.feedback.emailCopyFailedHint}):null]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Ds.map(w=>e.jsx(h,{selected:p===w,onClick:()=>f(w),children:re(w)},w))}),e.jsx("textarea",{value:d,onChange:w=>g(w.target.value),placeholder:s.feedback.textPlaceholder,"aria-label":s.feedback.textPlaceholder,rows:4,className:"rounded-xl2 border border-transparent bg-surface-containerHigh p-3 text-body text-onSurface focus:outline-none focus:ring-2 focus:ring-primary"}),o?e.jsx("p",{role:"alert",className:"text-caption text-danger",children:o}):null,e.jsx(E,{variant:"filled",fullWidth:!0,disabled:m||d.trim()==="",onClick:()=>{z()},children:s.feedback.sendAction}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:s.feedback.sendHint})]}),e.jsxs("div",{className:"flex flex-col gap-2 border-t border-outline/20 pt-3",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:s.feedback.historyTitle}),b?e.jsx("p",{role:"alert",className:"text-caption text-danger",children:s.feedback.shareOrCopyFailed}):null,a?e.jsx("p",{className:"text-body text-onSurfaceVariant",children:s.common.loading}):i.length===0?e.jsx(Me,{title:s.feedback.emptyTitle,description:s.feedback.emptyDescription}):e.jsx("ul",{className:"flex flex-col gap-2",children:i.map(w=>e.jsx(As,{entry:w,copied:_===w.id,onResend:W,onShareOrCopy:R=>{k(R)},onDelete:R=>{c(R)}},w.id))})]})]})})}const Rs="trainingLogic",J={trainingLogic:"dumbbell",reminders:"bell",science:"book",profile:"profile",appPreferences:"sliders"};function Ls(){const t=N(),nav=Ue(),[n,s]=u.useState(Rs),i=me=>s($e=>$e===me?null:me),[a,o]=u.useState(!1),[l,r]=u.useState(!1),[c,p]=u.useState(!1),[f,d]=u.useState(!1),[g,m]=u.useState(!1),[y,_]=u.useState(!1),[S,b]=u.useState(!1),[C,A]=u.useState(!1),[T,F]=u.useState(!1),[I,W]=u.useState(!1),q=D(a),z=D(l),k=D(c),w=D(f),R=D(g),B=D(y),Y=D(S),ee=D(C),te=D(T),le=D(I),v={trainingLogic:t.settings.categoryTrainingLogic,reminders:t.settings.categoryReminders,science:t.settings.categoryScience,profile:t.settings.categoryProfileRegeneration,appPreferences:t.settings.categoryAppPreferences};return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(V,{title:v.trainingLogic,icon:J.trainingLogic,isOpen:n==="trainingLogic",onToggle:()=>i("trainingLogic"),children:e.jsx(rn,{onOpenTrainingTimer:()=>p(!0)})}),e.jsx(V,{title:v.reminders,icon:J.reminders,isOpen:n==="reminders",onToggle:()=>i("reminders"),children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(j,{children:t.settings.remindersHint}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:()=>o(!0),children:t.settings.manageReminders})]})}),e.jsx(V,{title:v.science,icon:J.science,isOpen:n==="science",onToggle:()=>i("science"),children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(j,{children:t.settings.scienceHint}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:()=>d(!0),children:t.settings.scienceAction})]})}),e.jsx(V,{title:v.profile,icon:J.profile,isOpen:n==="profile",onToggle:()=>i("profile"),children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(j,{children:t.settings.profileRegenerationHint}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:()=>m(!0),children:t.settings.profileRegenerationAction})]})}),e.jsx(V,{title:v.appPreferences,icon:J.appPreferences,isOpen:n==="appPreferences",onToggle:()=>i("appPreferences"),children:e.jsx(zn,{onOpenInstallGuide:()=>_(!0)})}),e.jsxs("div",{className:"mt-2 flex flex-col gap-1.5 rounded-xl2 bg-surface-container p-3",children:[e.jsx("p",{className:"text-titleS text-onSurface",children:t.tutorial.restartTitle}),e.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.tutorial.restartHint}),e.jsx(E,{variant:"outlined",fullWidth:!0,onClick:()=>{nav("/training"),ze()},children:t.tutorial.restartAction})]}),e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx("button",{type:"button",onClick:()=>r(!0),className:"text-caption text-onSurfaceVariant underline underline-offset-2",children:t.settings.legal})}),e.jsxs("div",{className:"flex items-center justify-center gap-3 text-caption",children:[e.jsx("button",{type:"button",onClick:()=>F(!0),className:"text-primary underline underline-offset-2",children:t.feedback.settingsLink}),e.jsx("span",{className:"text-onSurfaceVariant",children:"·"}),e.jsx("button",{type:"button",onClick:()=>A(!0),className:"text-primary underline underline-offset-2",children:t.pwa.roadmapLink}),e.jsx("span",{className:"text-onSurfaceVariant",children:"·"}),e.jsx("button",{type:"button",onClick:()=>W(!0),className:"text-primary underline underline-offset-2",children:t.showcase.settingsLink})]}),e.jsxs("p",{className:"text-center text-caption text-onSurfaceVariant",children:[t.settings.versionLabel," ",Pe," · ",e.jsx("button",{type:"button",onClick:()=>b(!0),className:"text-primary underline underline-offset-2",children:t.settings.whatsNewLink})]}),q?e.jsx(tn,{open:a,onClose:()=>o(!1)}):null,z?e.jsx(ns,{open:l,onClose:()=>r(!1)}):null,k?e.jsx(os,{open:c,onClose:()=>p(!1)}):null,w?e.jsx(ds,{open:f,onClose:()=>d(!1)}):null,R?e.jsx(hs,{open:g,onClose:()=>m(!1)}):null,B?e.jsx(ms,{open:y,onClose:()=>_(!1)}):null,Y?e.jsx(zt,{open:S,onClose:()=>b(!1)}):null,ee?e.jsx(Cs,{open:C,onClose:()=>A(!1)}):null,te?e.jsx(Is,{open:T,onClose:()=>F(!1)}):null,le?e.jsx(Yn,{open:I,onClose:()=>W(!1)}):null]})}function Bs(){const t=N();return e.jsxs("div",{className:"mx-auto max-w-md px-screen py-6 pb-tabbar md:max-w-xl",children:[e.jsx("h1",{className:"mb-6 text-display text-onSurface",children:t.settings.title}),e.jsx(Ls,{})]})}export{Bs as SettingsScreen};
