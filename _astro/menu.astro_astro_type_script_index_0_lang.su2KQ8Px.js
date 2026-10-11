var e=JSON.parse(document.getElementById(`menu-data`).textContent||`{"menu":[],"cats":[]}`),t=e.menu.map(e=>({...e})),n={brew:`/assets/drink-2.avif`,mocktail:`/assets/drink-3.avif`,food:`/assets/food-2.avif`};try{let e=JSON.parse(localStorage.getItem(`belluno_menu_v1`)||`null`);Array.isArray(e)&&e.length&&(t.length=0,e.filter(e=>e).forEach(e=>t.push({name:String(e.n||`Untitled`),cat:e.c||`food`,price:Math.max(1,+e.p||99),rating:e.r||`4.5`,img:e.img||n[e.c]||n.food,desc:e.d||``,live:+!!e.live})))}catch{}var r=e.cats.map(e=>({...e}));try{let e=JSON.parse(localStorage.getItem(`belluno_cats_v1`)||`[]`);Array.isArray(e)&&e.filter(e=>e&&e.key&&e.title&&!r.some(t=>t.key===e.key)).forEach(e=>r.push({key:e.key,title:e.title,blurb:`Fresh on the board.`,img:e.img||`/assets/food-2.avif`,alt:e.title}))}catch{}document.getElementById(`jumpPills`).innerHTML=r.map(e=>`<button data-t="cat-${e.key}" class="px-4 py-3 rounded-full border border-black/15 hover:bg-black/5 min-h-[44px]">${e.title.replace(`Hot `,``).replace(`From the `,``)}</button>`).join(``);var i={},a=document.getElementById(`board`),o=document.getElementById(`q`),s=new URLSearchParams(location.search);s.get(`q`)&&(o.value=s.get(`q`)||``);function c(e){let n=t.indexOf(e),r=i[n]||0;return e.live===0?`<div class="bg-white/60 border border-black/5 rounded-2xl px-4 sm:px-5 py-3.5 opacity-70">
        <div class="flex items-center gap-2">
          <p class="font-semibold text-[0.95rem] leading-tight">${e.name}</p>
          <span class="leader" aria-hidden="true"></span>
          <b class="text-[0.95rem] shrink-0 text-neutral-400">₹${e.price}</b>
          <span class="ml-1 shrink-0 text-[11px] font-bold uppercase tracking-wide text-neutral-500 bg-black/5 px-3 py-2 rounded-full">Unavailable</span>
        </div>
        <p class="text-xs text-neutral-400 mt-1">${e.desc} Back soon.</p>
      </div>`:`<div class="bg-white border border-black/5 rounded-2xl px-4 sm:px-5 py-3.5 shadow-[0_18px_40px_-32px_rgba(28,26,22,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_26px_50px_-30px_rgba(28,26,22,0.55)] hover:border-black/10">
        <div class="flex items-center gap-2">
          <p class="font-semibold text-[0.95rem] leading-tight">${e.name} <span class="text-[11px] font-medium text-neutral-400">★ ${e.rating}</span></p>
          <span class="leader" aria-hidden="true"></span>
          <b class="text-[0.95rem] shrink-0">₹${e.price}</b>
          <span class="flex items-center gap-1.5 ml-1 shrink-0">
            <button onclick="ch(${n},-1)" aria-label="Remove one ${e.name}" class="w-8 h-8 rounded-full border border-black/20 text-base leading-none hover:bg-ink hover:text-cream transition-colors">−</button>
            <b class="text-sm w-4 text-center" aria-live="polite">${r}</b>
            <button onclick="ch(${n},1)" aria-label="Add one ${e.name}" class="h-8 px-3.5 rounded-full bg-ink text-cream text-xs font-bold hover:bg-pine transition-colors">+ Add</button>
          </span>
        </div>
        <p class="text-xs text-neutral-500 mt-1">${e.desc}</p>
      </div>`}function l(){let e=o.value.trim().toLowerCase(),n=0;a.innerHTML=r.map(r=>{let i=t.filter(t=>t.cat===r.key&&(t.name+` `+t.desc).toLowerCase().includes(e));return i.length?(n+=i.length,`<section id="cat-${r.key}" class="scroll-mt-28">
          <div class="relative overflow-hidden rounded-[1.75rem] h-40 sm:h-52">
            <img src="${r.img}" alt="${r.alt}" loading="lazy" class="absolute inset-0 w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
              <h2 class="font-serif italic font-medium text-cream text-3xl sm:text-4xl">${r.title}</h2>
              <p class="text-xs text-cream/75 hidden sm:block">${r.blurb}</p>
            </div>
          </div>
          <div class="mt-4 grid md:grid-cols-2 gap-3">${i.map(c).join(``)}</div>
        </section>`):``}).join(``)||`<p class="text-sm text-neutral-500 py-8 text-center">Nothing matches that. Try “latte” or “spaghetti”.</p>`,document.getElementById(`count`).textContent=n+(n===1?` item`:` items`)+` on the menu`,d()}function u(){let e=0,n=0;Object.entries(i).forEach(([r,i])=>{i>0&&(e+=t[+r].price*i,n+=i)});let r=Math.round(e*.05);return{t:e,n,gst:r,grand:e+r}}function d(){let e=document.getElementById(`cart`);e.innerHTML=Object.entries(i).filter(([,e])=>e>0).map(([e,n])=>{let r=t[+e];return`<div class="flex items-center gap-2 bg-white border border-black/5 rounded-2xl p-2.5">
          <img src="${r.img}" alt="${r.name}" loading="lazy" class="w-11 h-12 rounded-xl object-cover">
          <div class="flex-1 min-w-0"><b class="text-xs block truncate">${r.name}</b><p class="text-xs text-neutral-500">₹${r.price*n}</p></div>
          <div class="flex items-center gap-1.5">
            <button onclick="ch(${e},-1)" aria-label="Decrease quantity" class="w-7 h-7 rounded-full border border-black/20">−</button>
            <b class="text-xs">${n}</b>
            <button onclick="ch(${e},1)" aria-label="Increase quantity" class="w-7 h-7 rounded-full border border-black/20">+</button>
          </div></div>`}).join(``)||`<p class="text-xs text-neutral-400 py-6 text-center">Tray is empty.<br>Tap + Add beside anything that tempts you.</p>`;let n=u();document.getElementById(`tItems`).textContent=`₹`+n.t,document.getElementById(`tGst`).textContent=`₹`+n.gst,document.getElementById(`tTotal`).textContent=`₹`+n.grand,document.getElementById(`fabCount`).textContent=String(n.n),document.getElementById(`fabTotal`).textContent=`₹`+n.grand}var f=null;function p(e){let t=document.getElementById(`toast`);t.textContent=e+` ✓`,t.classList.remove(`opacity-0`,`translate-y-4`),f&&clearTimeout(f),f=setTimeout(()=>t.classList.add(`opacity-0`,`translate-y-4`),1600)}window.ch=(e,n)=>{i[e]=Math.max(0,(i[e]||0)+n),n>0&&p(t[e].name+` added`),l()},o.addEventListener(`input`,l),document.getElementById(`jumpPills`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&document.getElementById(t.dataset.t||``)?.scrollIntoView({behavior:`smooth`})}),document.querySelectorAll(`.mode`).forEach(e=>e.addEventListener(`click`,()=>{document.querySelectorAll(`.mode`).forEach(e=>e.className=`mode px-3 py-2.5 rounded-full border border-black/20`),e.className=`mode px-3 py-2.5 rounded-full bg-ink text-cream`}));var m=document.getElementById(`cartPanel`),h=document.getElementById(`cartBackdrop`);function g(e){m.classList.toggle(`translate-x-full`,!e),h.classList.toggle(`hidden`,!e),requestAnimationFrame(()=>h.classList.toggle(`opacity-0`,!e)),document.body.style.overflow=e?`hidden`:``,e&&document.getElementById(`cartClose`).focus()}document.getElementById(`cartFab`).addEventListener(`click`,()=>g(!0)),document.getElementById(`cartClose`).addEventListener(`click`,()=>g(!1)),h.addEventListener(`click`,()=>g(!1)),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&g(!1)}),document.getElementById(`place`).addEventListener(`click`,()=>document.getElementById(`msg`).classList.remove(`hidden`)),l();