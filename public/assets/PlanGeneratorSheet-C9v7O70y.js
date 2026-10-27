import{u as R,h as $,r as i,bt as B,bu as E,j as a,S as F,C as u,D as x,X as L,F as O,B as v,bv as W,bw as M}from"./index-DjUS4W3P.js";
import{T as U,f as H,g as k}from"./trainingModes-DHgem2i-.js";
const V=["chest","back","shoulders","biceps","triceps","legs","glutes","core"],Y=Array.from({length:W-M+1},(f,d)=>M+d);

function z({open:f,onClose:d,exercises:h,onApply:w}){
  const t=R(),isDe=t.common.cancel==="Abbrechen",{settings:l}=$();
  const [m,D]=i.useState(l.preferredWeeklyFrequency??4);
  const [o,C]=i.useState(l.preferredTrainingGoal??B);
  const [r,g]=i.useState([]);
  const [p,A]=i.useState(1);
  const [S,j]=i.useState(!1);
  const [swapTarget,setSwapTarget]=i.useState(null);
  const [swapSearch,setSwapSearch]=i.useState("");

  i.useEffect(()=>{
    if(f){
      if(l.preferredWeeklyFrequency)D(l.preferredWeeklyFrequency);
      if(l.preferredTrainingGoal)C(l.preferredTrainingGoal);
    }
  },[f,l.preferredWeeklyFrequency,l.preferredTrainingGoal]);

  const I=e=>{g(s=>s.includes(e)?s.filter(n=>n!==e):[...s,e])};
  const T={sets:l.defaultIsometricSets,durationSec:l.defaultIsometricDurationSec};
  const c=i.useMemo(()=>E({exercises:h,daysPerWeek:m,focusMuscleGroups:r,mode:o,seed:p,isometricDefaults:T,unilateralCounting:l.unilateralCounting}),[h,m,r,o,p,l.defaultIsometricSets,l.defaultIsometricDurationSec,l.unilateralCounting]);

  const [planDays,setPlanDays]=i.useState(()=>c.days);
  i.useEffect(()=>{setPlanDays(c.days)},[c]);

  const N=planDays.every(e=>e.exercises.length===0);
  const y=i.useMemo(()=>Object.entries(c.weeklyVolumeByMuscle).filter(([,e])=>e?.status==="under").map(([e])=>e),[c.weeklyVolumeByMuscle]);
  const G=i.useMemo(()=>V.map(e=>({muscle:e,info:c.weeklyVolumeByMuscle[e]})).flatMap(({muscle:e,info:s})=>s?[{muscle:e,info:s}]:[]),[c.weeklyVolumeByMuscle]);

  const handleSwap=(candidate)=>{
    if(!swapTarget)return;
    setPlanDays(prev=>prev.map((day,idx)=>{
      if(idx!==swapTarget.dayIndex)return day;
      return{
        ...day,
        exercises:day.exercises.map(ex=>{
          if(ex.exerciseId!==swapTarget.exercise.exerciseId)return ex;
          return{
            ...ex,
            exerciseId:candidate.id,
            name:candidate.name,
            isCompound:candidate.isCompound??!1,
            targetMuscleGroup:candidate.muscleGroup
          };
        })
      };
    }));
    setSwapTarget(null);
    setSwapSearch("");
  };

  const filteredCandidates=i.useMemo(()=>{
    if(!swapTarget||!h)return[];
    const q=swapSearch.trim().toLowerCase();
    return h.filter(ex=>{
      if(!ex.name)return!1;
      if(!q)return!0;
      return ex.name.toLowerCase().includes(q)||(ex.muscleGroup&&ex.muscleGroup.toLowerCase().includes(q));
    });
  },[swapTarget,h,swapSearch]);

  const P=async()=>{
    j(!0);
    try{
      const planToSave={...c,days:planDays};
      await w(planToSave);
      d();
    }finally{
      j(!1);
    }
  };

  return a.jsxs(a.Fragment,{children:[
    a.jsx(F,{open:f,onClose:d,title:t.training.generatePlanTitle,variant:"screen",children:a.jsxs("div",{className:"flex flex-col gap-4",children:[
      a.jsxs("div",{className:"flex flex-col gap-1",children:[
        a.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:t.training.trainingDaysPerWeek}),
        a.jsx("div",{className:"flex flex-wrap gap-2",children:Y.map(e=>a.jsx(u,{selected:m===e,onClick:()=>D(e),children:e},e))}),
        a.jsx("span",{className:"text-caption text-onSurfaceVariant",children:t.training.splitHint})
      ]}),
      a.jsxs("div",{className:"flex flex-col gap-1",children:[
        a.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:t.training.trainingGoal}),
        a.jsx("div",{className:"flex flex-wrap gap-2",children:U.map(e=>a.jsx(u,{selected:e.key===o,onClick:()=>C(e.key),children:e.label},e.key))}),
        a.jsxs("span",{className:"text-caption text-onSurfaceVariant",children:[H(k(o))," — ",k(o).hint]})
      ]}),
      a.jsxs("div",{className:"flex flex-col gap-1",children:[
        a.jsx("span",{className:"text-label uppercase text-onSurfaceVariant",children:t.training.focusMuscleGroups}),
        a.jsxs("div",{className:"flex flex-wrap gap-2",children:[
          a.jsx(u,{selected:r.length===0,onClick:()=>g([]),children:t.training.noFocus}),
          V.map(e=>a.jsx(u,{selected:r.includes(e),onClick:()=>I(e),children:x[e]},e))
        ]}),
        r.length>0?a.jsxs("span",{className:"text-caption text-onSurfaceVariant",children:[r.map(e=>x[e]).join(", ")," ",r.length===1?t.training.focusComes:t.training.focusCome," ",t.training.focusFirstRest]}):null
      ]}),
      N?a.jsx("p",{className:"rounded-xl2 bg-surface-containerHigh p-3 text-body text-onSurfaceVariant",children:t.training.noMatchingExercises}):a.jsxs("div",{className:"flex flex-col gap-3",children:[
        planDays.map((e,s)=>a.jsxs("div",{className:"animate-rise-in rounded-xl2 bg-surface-container p-3",style:{animationDelay:`${s*40}ms`},children:[
          a.jsxs("p",{className:"mb-2 text-titleS text-onSurface",children:[t.training.dayLabel," ",s+1," · ",e.label]}),
          a.jsx("ul",{className:"flex flex-col gap-1.5",children:e.exercises.map(n=>a.jsxs("li",{className:"flex items-center justify-between gap-2 py-1 text-body text-onSurface",children:[
            a.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[
              a.jsx("button",{
                type:"button",
                onClick:()=>{setSwapTarget({dayIndex:s,exercise:n});setSwapSearch("")},
                className:"press-feedback flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-containerHighest text-onSurfaceVariant hover:text-onSurface active:scale-95",
                "aria-label":isDe?"Übung tauschen":"Swap exercise",
                title:isDe?"Übung tauschen":"Swap exercise",
                children:a.jsx("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M7 16h13M16 12l4 4-4 4M17 8H4M8 4l-4 4 4 4"})})
              }),
              a.jsxs("span",{className:"truncate font-medium",children:[L(n.name),n.isCompound?a.jsx("span",{className:"ml-1.5 text-label text-primary font-normal",children:t.training.compound}):null]})
            ]}),
            a.jsx("span",{className:"shrink-0 tabular-nums text-onSurfaceVariant text-caption font-mono",children:n.metric==="time"?`${n.targetSets} × ${n.targetDurationSec}s`:`${n.targetSets} × ${n.targetReps}`})
          ]},n.exerciseId))})
        ]},`${e.slot}-${s}-${p}`)),
        a.jsxs("div",{className:"flex flex-col gap-2 rounded-xl2 bg-surface-container p-3",children:[
          a.jsx("p",{className:"text-titleS text-onSurface",children:t.training.weeklyVolume}),
          a.jsx("p",{className:"text-caption leading-relaxed text-onSurfaceVariant",children:t.history.muscleBalanceStackLegend}),
          G.map(({muscle:e,info:s})=>{
            const n=Math.max(s.target,s.totalSets,1),b=Math.round(Math.min(s.directSets,n)/n*100),_=Math.max(0,Math.round(Math.min(s.totalSets,n)/n*100)-b);
            return a.jsxs("div",{className:"flex flex-col gap-1",children:[
              a.jsxs("div",{className:"flex justify-between text-caption",children:[
                a.jsx("span",{className:"text-onSurface",children:x[e]}),
                a.jsxs("span",{className:"tabular-nums text-onSurfaceVariant",children:[O(s.totalSets,1)," / ",s.target," ",t.training.setsWord]})
              ]}),
              a.jsxs("div",{className:"flex h-2 overflow-hidden rounded-full bg-surface-containerHighest",children:[
                a.jsx("div",{className:"h-full",style:{width:`${b}%`,background:"var(--color-primary)"}}),
                a.jsx("div",{className:"h-full",style:{width:`${_}%`,background:"var(--color-primary)",opacity:.45}})
              ]})
            ]},e);
          })
        ]}),
        y.length>0?a.jsxs("p",{className:"text-caption text-onSurfaceVariant",children:[t.training.underVolumeLead," ",y.map(e=>x[e]).join(", ")," ",t.training.underVolumeTail]}):null
      ]}),
      a.jsxs("div",{className:"sticky bottom-0 -mx-4 flex gap-2 border-t border-outline/20 bg-surface-container px-4 pb-2 pt-3",children:[
        a.jsx(v,{variant:"outlined",fullWidth:!0,disabled:S,onClick:()=>A(e=>e+1),children:t.training.reroll}),
        a.jsx(v,{variant:"filled",fullWidth:!0,disabled:S||N,onClick:()=>{P()},children:t.training.saveAsRoutines})
      ]}),
      a.jsx("p",{className:"text-caption text-onSurfaceVariant",children:t.training.generatorHint})
    ]})}),
    swapTarget?a.jsx(F,{
      open:!0,
      onClose:()=>{setSwapTarget(null);setSwapSearch("")},
      title:isDe?"Übung tauschen":"Swap exercise",
      variant:"screen",
      children:a.jsxs("div",{className:"flex flex-col gap-4",children:[
        a.jsxs("div",{className:"flex flex-col gap-1",children:[
          a.jsxs("p",{className:"text-titleS font-bold text-onSurface",children:[isDe?"Ersatz für: ":"Replace: ",L(swapTarget.exercise.name)]}),
          a.jsx("p",{className:"text-caption text-onSurfaceVariant",children:isDe?"Wähle eine andere Übung aus deiner Bibliothek für diesen Tag:":"Choose an alternative exercise from your library for this day:"})
        ]}),
        a.jsx("input",{
          type:"text",
          value:swapSearch,
          onChange:e=>setSwapSearch(e.target.value),
          placeholder:isDe?"Übung suchen…":"Search exercise…",
          className:"w-full rounded-xl bg-surface-containerHighest px-3.5 py-2.5 text-body text-onSurface placeholder:text-onSurfaceVariant/50 outline-none focus:ring-1 focus:ring-primary"
        }),
        a.jsx("div",{className:"flex flex-col gap-1.5 max-h-[60vh] overflow-y-auto pr-1",children:filteredCandidates.length===0?a.jsx("p",{className:"py-6 text-center text-body text-onSurfaceVariant",children:isDe?"Keine Übung gefunden":"No exercise found"}):filteredCandidates.map(candidate=>a.jsxs("button",{
          key:candidate.id,
          type:"button",
          onClick:()=>handleSwap(candidate),
          className:"press-feedback flex items-center justify-between rounded-xl bg-surface-containerHigh p-3 text-left hover:bg-surface-containerHighest active:scale-[0.99]",
          children:[
            a.jsxs("div",{className:"flex flex-col",children:[
              a.jsx("span",{className:"text-body font-semibold text-onSurface",children:L(candidate.name)}),
              candidate.muscleGroup?a.jsx("span",{className:"text-caption text-onSurfaceVariant",children:x[candidate.muscleGroup]??candidate.muscleGroup}):null
            ]}),
            a.jsx("span",{className:"text-label font-semibold text-primary px-2.5 py-1 rounded-lg bg-primary/10",children:isDe?"Wählen":"Select"})
          ]
        }))})
      ]})
    }):null
  ]});
}

export{z as PlanGeneratorSheet};
