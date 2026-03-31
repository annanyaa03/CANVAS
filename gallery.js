// ─── GALLERY.JS ───

const projects = [
  {
    title:'Fintech Rebrand 2025',artist:'Maya Chen',role:'UI/UX Design',
    bg:'linear-gradient(135deg,#0f172a,#a78bfa,#64748b)',icon:'🎨',
    overview:'A complete visual identity overhaul for NovaPay, a 200,000-user fintech platform. The project spanned research, strategy, visual design, and handoff — reducing user churn by 34% within the first quarter post-launch.',
    challenge: "NovaPay's existing design was disjoint, inconsistent, and failed to communicate trust — a critical factor in fintech. User testing revealed a 62% confusion rate on the onboarding flow.",
    timeline:[
      {phase:'Discovery',desc:'Stakeholder interviews, user research, competitive benchmarking — 3 weeks.',color:'#a78bfa'},
      {phase:'Strategy',desc:'Defined brand pillars: Trust, Clarity, Momentum. Created a new design language.',color:'#64748b'},
      {phase:'Design',desc:'Built a full component library in Figma. Prototyped 3 onboarding variants.',color:'#1e293b'},
      {phase:'Testing',desc:'A/B tested with 2,000 users. Variant C won with 89% task-completion rate.',color:'#10b981'},
      {phase:'Launch',desc:'Shipped to production. Churn dropped 34% in 6 weeks.',color:'#a78bfa'},
    ],
    tools:['Figma','FigJam','Principle','Zeplin','Notion','Maze'],
    outcomes:[{val:'-34%',lbl:'User Churn'},{val:'89%',lbl:'Task Completion'},{val:'4.9★',lbl:'App Store Rating'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'Design System OS',artist:'Arjun Patel',role:'Full-Stack Development',
    bg:'linear-gradient(135deg,#1e293b,#64748b)',icon:'⚡',
    overview:'An open-source, token-based design system used by 800+ product teams. Built with a headless architecture, it ships to React, Vue, and vanilla HTML from a single source of truth.',
    challenge:'Teams were wasting 40% of sprint time re-building the same UI primitives. The system needed to be simultaneously flexible and opinionated.',
    timeline:[
      {phase:'Audit',desc:'Surveyed 120 engineers on pain points. Identified 47 duplicated components.',color:'#1e293b'},
      {phase:'Architecture',desc:'Designed token hierarchy using Theo. Set up monorepo with Nx.',color:'#a78bfa'},
      {phase:'Build',desc:'Coded 80+ composable primitives with full WCAG 2.1 AA compliance.',color:'#64748b'},
      {phase:'Docs',desc:'Built living documentation site with live code playground.',color:'#10b981'},
      {phase:'Adoption',desc:'14k GitHub stars in 3 months. Used at Stripe, Linear, and Vercel.',color:'#f59e0b'},
    ],
    tools:['TypeScript','Storybook','Figma Tokens','Nx','Theo','Chromatic'],
    outcomes:[{val:'14k',lbl:'GitHub Stars'},{val:'800+',lbl:'Teams Using'},{val:'40%',lbl:'Sprint Time Saved'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'Galaxy World-Build',artist:'Sofia Reyes',role:'3D Art & Concept',
    bg:'linear-gradient(135deg,#0f172a,#1e293b,#64748b)',icon:'🌌',
    overview:'Concept art and world-building asset pack for an animated sci-fi series — 200+ assets spanning environments, characters, and VFX. Used in production by a major streaming studio.',
    challenge:'Deliver a visually cohesive galaxy that felt scientifically plausible yet artistically breathtaking, all within a 6-week production window.',
    timeline:[
      {phase:'Research',desc:'Studied NASA imagery, astrophysics papers, and sci-fi references.',color:'#1e293b'},
      {phase:'Concepting',desc:'100+ thumbnail sketches. 3 full mood-board revisions with directors.',color:'#a78bfa'},
      {phase:'Asset Build',desc:'Modeled and textured 200 production-ready assets in Blender & Substance.',color:'#64748b'},
      {phase:'VFX Pass',desc:'Houdini-based particle systems for nebulae, star fields, and explosions.',color:'#10b981'},
      {phase:'Delivery',desc:'All assets handed off in EXR + USD formats. Zero revision requests.',color:'#a78bfa'},
    ],
    tools:['Blender','Substance Painter','Houdini','ZBrush','DaVinci Resolve'],
    outcomes:[{val:'200+',lbl:'Assets Delivered'},{val:'0',lbl:'Revision Requests'},{val:'6wks',lbl:'Production Time'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'App Copy Overhaul',artist:'James Liu',role:'UX Writing & Strategy',
    bg:'linear-gradient(135deg,#64748b,#1e293b)',icon:'✍️',
    overview:'End-to-end UX writing for a productivity app with 3M users — rewriting every system message, tooltip, error state, and onboarding sequence for maximum clarity and minimum friction.',
    challenge: "The app had 12 different writers contribute copy over 4 years — resulting in inconsistent tone, jargon-heavy errors, and a 28% support ticket rate from confused users.",
    timeline:[
      {phase:'Content Audit',desc:'Catalogued 1,400 strings. Tagged by category, tone, and confusion risk.',color:'#64748b'},
      {phase:'Voice & Tone',desc:'Wrote a 40-page content style guide adopted by the entire product org.',color:'#1e293b'},
      {phase:'Rewrite',desc:'Rewrote all 1,400 strings. A/B tested 60 high-traffic flows.',color:'#a78bfa'},
      {phase:'Validate',desc:'User testing: 41% reduction in time-to-comprehension on key flows.',color:'#10b981'},
      {phase:'Ship',desc:'28% drop in support tickets. NPS improved by 22 points.',color:'#f59e0b'},
    ],
    tools:['Notion','Figma','Maze','Lyssna','Dovetail','Hemingway App'],
    outcomes:[{val:'-28%',lbl:'Support Tickets'},{val:'+22pts',lbl:'NPS Increase'},{val:'1,400',lbl:'Strings Rewritten'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'Netflix Opener Spots',artist:'Nina Okafor',role:'Motion Design',
    bg:'linear-gradient(135deg,#0f172a,#64748b,#1e293b)',icon:'🎬',
    overview:'A series of 6 animated show opener spots for Netflix originals — each 90 seconds, hand-crafted frame by frame in After Effects with custom 3D integrations.',
    challenge: "Each opener needed a distinct visual identity while remaining unmistakably Netflix. All 6 had to be delivered in 8 weeks with daily client reviews.",
    timeline:[
      {phase:'Brief',desc: "Deep-dived into each show's narrative arc. Built mood boards for each.",color:'#0f172a'},
      {phase:'Style Frames',desc:'Designed 5 key frames per opener for client review and direction locking.',color:'#64748b'},
      {phase:'Animation',desc:'Rough animation passes at 24fps. 3D elements integrated via Cinema 4D.',color:'#a78bfa'},
      {phase:'Sound',desc:'Collaborated with composers to sync visuals to custom scores.',color:'#10b981'},
      {phase:'Deliver',desc:'All 6 delivered on time. Won a Motion Awards 2025 gold medal.',color:'#f59e0b'},
    ],
    tools:['After Effects','Cinema 4D','DaVinci Resolve','Premiere','Audition'],
    outcomes:[{val:'6',lbl:'Openers Delivered'},{val:'★ Gold',lbl:'Motion Awards 2025'},{val:'8wks',lbl:'End-to-End'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'Eco Brand Identity',artist:'Priya Sharma',role:'Brand Design',
    bg:'linear-gradient(135deg,#1e293b,#f59e0b)',icon:'🌿',
    overview:'Full brand identity for GreenRoot, a sustainable fashion startup — logo, typography system, packaging, digital assets, and a 120-page brand book.',
    challenge: "Create a brand that was uncompromisingly premium whilst communicating genuine environmental responsibility — avoiding both greenwashing and aesthetic compromise.",
    timeline:[
      {phase:'Discovery',desc:'Brand workshops, competitor analysis, customer archetype mapping.',color:'#1e293b'},
      {phase:'Identity',desc:'Explored 8 logo directions. Final mark uses a hand-drawn leaf-letter hybrid.',color:'#f59e0b'},
      {phase:'System',desc:'Built full type, colour, and spacing system. 200+ component library.',color:'#64748b'},
      {phase:'Packaging',desc:'Designed 12 SKU packaging in 100% recycled stock. Zero plastic.',color:'#10b981'},
      {phase:'Handoff',desc:'120-page brand book. Ready-to-use Figma + Canva templates.',color:'#a78bfa'},
    ],
    tools:['Illustrator','Figma','InDesign','Procreate','Blender'],
    outcomes:[{val:'120pg',lbl:'Brand Book'},{val:'200+',lbl:'Components'},{val:'12 SKUs',lbl:'Packaged'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'WebGL Ocean Sim',artist:'Alex Morgan',role:'Creative Development',
    bg:'linear-gradient(135deg,#1e293b,#0f172a,#64748b)',icon:'🌊',
    overview:'A real-time, browser-native ocean simulation built with Three.js and custom GLSL shaders — 60fps on mobile, zero external libraries beyond the renderer.',
    challenge: "Simulate physically accurate water — Gerstner waves, Fresnel reflections, subsurface scattering — without a GPU-intensive game engine. Pure WebGL.",
    timeline:[
      {phase:'Research',desc:'Studied oceanographic data and Tessendorf wave theory for physical accuracy.',color:'#1e293b'},
      {phase:'Shaders',desc:'Wrote 4 custom GLSL vertex and fragment shaders from scratch.',color:'#0f172a'},
      {phase:'Optimize',desc:'Reduced draw calls by 80% using instancing and LOD switching.',color:'#64748b'},
      {phase:'Mobile',desc:'WebGL2 fallbacks + WebAssembly FFT for wave simulation on low-end devices.',color:'#a78bfa'},
      {phase:'Launch',desc:'Featured on Chrome Experiments. 140k unique visits in first week.',color:'#10b981'},
    ],
    tools:['Three.js','GLSL','WebAssembly','Rust','Vite','Chrome DevTools'],
    outcomes:[{val:'60fps',lbl:'Mobile Performance'},{val:'140k',lbl:'Week-1 Visits'},{val:'4 GLSL',lbl:'Custom Shaders'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'Bloomberg Cover',artist:'Emma Wilson',role:'Editorial Illustration',
    bg:'linear-gradient(135deg,#f59e0b,#64748b,#1e293b)',icon:'🗞️',
    overview: "The cover illustration for Bloomberg Businessweek's \"The Future of Money\" issue — a full-bleed, conceptual piece depicting the tension between cryptocurrency volatility and traditional banking.",
    challenge: "Convey an abstract economic concept in a single, striking image that would work at both magazine scale and thumbnail — in 72 hours.",
    timeline:[
      {phase:'Brief',desc:'Editorial call with the Bloomberg design team. 3-hour ideation session.',color:'#f59e0b'},
      {phase:'Sketch',desc:'8 rough concepts presented. Direction chosen: the diving figure.',color:'#64748b'},
      {phase:'Render',desc:'Final illustration in Procreate + Photoshop. 14 layers, 72dpi.',color:'#1e293b'},
      {phase:'Output',desc:'Delivered print-ready TIFF at 300dpi and digital RGB JPEG.',color:'#a78bfa'},
      {phase:'Publish',desc:'Published globally on 2.4M print copies and bloomberg.com.',color:'#10b981'},
    ],
    tools:['Procreate','Photoshop','Illustrator','Lightroom'],
    outcomes:[{val:'2.4M',lbl:'Print Copies'},{val:'72hrs',lbl:'Turnaround'},{val:'Global',lbl:'Distribution'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
  {
    title:'SaaS Dashboard 3.0',artist:'Carlos Vega',role:'Product Design',
    bg:'linear-gradient(135deg,#64748b,#1e293b,#f59e0b)',icon:'📱',
    overview:'Ground-up redesign of a B2B SaaS analytics dashboard — from cluttered data dump to a focused, decision-making surface. Increased daily active usage by 68%.',
    challenge:'Users were overwhelmed by 200+ metrics on a single screen. The product team needed to ruthlessly prioritise without losing power-user capabilities.',
    timeline:[
      {phase:'Research',desc:'8 weeks of user interviews, heatmaps, session recordings — 40 power users.',color:'#64748b'},
      {phase:'IA',desc:'Restructured information architecture around 5 core jobs-to-be-done.',color:'#1e293b'},
      {phase:'Design',desc:'Built and tested 4 full dashboard concepts. Used progressive disclosure.',color:'#f59e0b'},
      {phase:'Validate',desc:'Prototype testing with 20 users. SUS score improved from 58 to 84.',color:'#a78bfa'},
      {phase:'Ship',desc:'+68% DAU. –41% time-to-insight. Zero enterprise churn post-launch.',color:'#10b981'},
    ],
    tools:['Figma','Amplitude','FullStory','Notion','Linear','Loom'],
    outcomes:[{val:'+68%',lbl:'Daily Active Usage'},{val:'84',lbl:'SUS Score'},{val:'0',lbl:'Enterprise Churn'}],
    toolColors:['#a78bfa','#64748b','#1e293b'],
  },
];

// ─── ROOM NAVIGATION ───
const rooms = [document.getElementById('room-0'), document.getElementById('room-1'), document.getElementById('room-2')];
const dots = document.querySelectorAll('.g-dot');
let current = 0;
const total = rooms.length;

function goToRoom(idx) {
  rooms[current].className = 'gallery-wall ' + (idx > current ? 'wall-hidden-left' : 'wall-hidden-right');
  current = (idx + total) % total;
  rooms[current].className = 'gallery-wall wall-active';
  dots.forEach((d, i) => d.classList.toggle('on', i === current));
}

document.getElementById('prev-room').addEventListener('click', () => goToRoom(current - 1));
document.getElementById('next-room').addEventListener('click', () => goToRoom(current + 1));
dots.forEach(d => d.addEventListener('click', () => goToRoom(parseInt(d.dataset.i))));

// Keyboard nav
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') goToRoom(current - 1);
  if (e.key === 'ArrowRight') goToRoom(current + 1);
  if (e.key === 'Escape') closeCase();
});

// ─── MOUSE PARALLAX ───
document.getElementById('gallery-room').addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
  rooms.forEach((room, ri) => {
    room.querySelectorAll('.art-frame').forEach((f, fi) => {
      const depth = (fi + 1) * 6;
      f.style.marginLeft = (dx * depth) + 'px';
      f.style.marginTop = (dy * depth) + 'px';
    });
  });
});

// ─── CASE STUDY MODAL ───
const modal = document.getElementById('case-modal');
const caseHero = document.getElementById('case-hero');
const caseBody = document.getElementById('case-body');

document.querySelectorAll('.art-frame').forEach(frame => {
  frame.addEventListener('click', () => {
    const pid = parseInt(frame.dataset.pid);
    const p = projects[pid];
    caseHero.style.background = p.bg;
    caseHero.innerHTML = `<span style="font-size:5rem">${p.icon}</span>`;
    caseBody.innerHTML = `
      <h2 class="case-title">${p.title}</h2>
      <p class="case-artist">${p.artist} · ${p.role}</p>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem">
        <span class="tag tag-purple" style="background:var(--accent-soft);color:var(--accent-primary-dark);border:1px solid var(--accent-primary-light)">${p.role}</span>
        <span class="tag tag-cyan" style="background:var(--accent-soft);color:var(--accent-primary-dark);border:1px solid var(--accent-primary-light)">Case Study</span>
      </div>
      <div class="case-sh">Overview</div>
      <p class="case-p">${p.overview}</p>
      <div class="case-sh">The Challenge</div>
      <p class="case-p">${p.challenge}</p>
      <div class="case-sh">Process Timeline</div>
      <div class="tl">
        ${p.timeline.map(t => `
          <div class="tl-row">
            <div class="tl-dot" style="background:${t.color};color:#fff">${t.phase.charAt(0)}</div>
            <div><div class="tl-ph">${t.phase}</div><div class="tl-d">${t.desc}</div></div>
          </div>`).join('')}
      </div>
      <div class="case-sh">Tools Used</div>
      <div class="tools">
        ${p.tools.map((t, i) => `<span class="tag" style="background:${p.toolColors[i % p.toolColors.length]}11;color:${p.toolColors[i % p.toolColors.length]};border:1px solid ${p.toolColors[i % p.toolColors.length]}33;font-weight:600">${t}</span>`).join('')}
      </div>
      <div class="case-sh">Outcomes</div>
      <div class="out-grid">
        ${p.outcomes.map(o => `<div class="out-stat"><span class="out-val gradient-text">${o.val}</span><span class="out-lbl">${o.lbl}</span></div>`).join('')}
      </div>
      <div style="display:flex;gap:.75rem;margin-top:1.75rem">
        <a href="profile.html" class="btn btn-primary" style="flex:1;text-align:center">View Creator Profile</a>
        <a href="discover.html" class="btn btn-secondary" style="flex:1;text-align:center">More Work</a>
      </div>`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeCase() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('case-close').addEventListener('click', closeCase);
modal.addEventListener('click', e => { if (e.target === modal) closeCase(); });
