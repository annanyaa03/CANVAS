// ─── AI STUDIO.JS ───

// ─── TONE SELECTION ───
let currentTone = 'professional';
document.querySelectorAll('.tone-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTone = btn.dataset.tone;
  });
});

// ─── CHAR COUNT ───
const notesInput = document.getElementById('notes-input');
const charNum = document.getElementById('char-num');
notesInput.addEventListener('input', () => {
  const len = Math.min(notesInput.value.length, 2000);
  charNum.textContent = len;
  if (notesInput.value.length > 2000) notesInput.value = notesInput.value.slice(0, 2000);
});

// ─── EXAMPLE NOTES ───
const examples = {
  fintech: `I redesigned the onboarding flow for NovaPay, a fintech app with 200k users. Churn was 34% in first week. I ran user research with 40 participants, found the main pain points: too many steps, confusing error messages, no progress indicators. Prototyped 3 versions in Figma. Tested with 50 users via Maze. Shipped the winning variant. Result: churn dropped 34%, app store rating went from 3.2 to 4.9 stars. Tools: Figma, FigJam, Maze, Principle.`,
  brand: `Designed a full brand identity for GreenRoot, an eco fashion startup. Client wanted premium but sustainable feel. Created logo, typography system, color palette (forest greens + off-white + gold), packaging for 12 product lines, brand book (120 pages), Figma component library, social media templates. Tools: Illustrator, Figma, InDesign, Procreate. Timeline: 8 weeks. Client was over the moon.`,
  motion: `Created 6 animated opener spots for Netflix originals. Each 90 seconds. Had to match each show's vibe while staying Netflix. 8 weeks total, delivered on time, zero reshoots. Won Motion Awards 2025 gold medal. Sound designed in-house with custom scores. Tools: After Effects, Cinema 4D, DaVinci Resolve, Premiere Pro.`,
  dev: `Built an open source design system used by 800+ teams. Token-based architecture, ships to React, Vue, vanilla HTML. 80+ composable components, WCAG 2.1 AA compliant, full Storybook docs. 14k GitHub stars in 3 months. Used at Stripe, Linear, Vercel. Saved teams 40% of sprint time on average. Built with TypeScript, Nx monorepo, Chromatic for visual regression.`,
};
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    notesInput.value = examples[chip.dataset.example] || '';
    followBtn.innerHTML = isFollowing ? '<i data-lucide="check"></i> Following' : '<i data-lucide="plus"></i> Follow';
    if (window.lucide) lucide.createIcons({ props: { 'stroke-width': 2 }, scope: followBtn });
    notesInput.focus();
  });
});

// ─── CASE STUDY TEMPLATES ───
const templates = {
  professional: (notes) => `
<h2>Case Study: ${extractTitle(notes)}</h2>

<h3>Overview</h3>
${extractOverview(notes, 'professional')}

<h3>The Challenge</h3>
${extractChallenge(notes, 'professional')}

<h3>Approach & Process</h3>
${extractProcess(notes, 'professional')}

<h3>Tools & Technologies</h3>
${extractTools(notes)}

<h3>Results & Outcomes</h3>
${extractResults(notes, 'professional')}

<h3>Key Learnings</h3>
${extractLearnings(notes, 'professional')}
`,
  creative: (notes) => `
<h2><i data-lucide="sparkles"></i> ${extractTitle(notes)}</h2>

<h3>The Story</h3>
${extractOverview(notes, 'creative')}

<h3>The Problem Worth Solving</h3>
${extractChallenge(notes, 'creative')}

<h3>How We Got There</h3>
${extractProcess(notes, 'creative')}

<h3>The Craft Stack</h3>
${extractTools(notes)}

<h3>The Impact</h3>
${extractResults(notes, 'creative')}

<h3>What I'd Do Differently</h3>
${extractLearnings(notes, 'creative')}
`,
  minimal: (notes) => `
<h2>${extractTitle(notes)}</h2>

${extractOverview(notes, 'minimal')}

<h3>Problem</h3>
${extractChallenge(notes, 'minimal')}

<h3>Solution</h3>
${extractProcess(notes, 'minimal')}

<h3>Tools</h3>
${extractTools(notes)}

<h3>Outcome</h3>
${extractResults(notes, 'minimal')}
`,
  bold: (notes) => `
<h2><i data-lucide="zap"></i> ${extractTitle(notes).toUpperCase()}</h2>

<h3>THE BIG PICTURE</h3>
${extractOverview(notes, 'bold')}

<h3>THE PROBLEM</h3>
${extractChallenge(notes, 'bold')}

<h3>THE WORK</h3>
${extractProcess(notes, 'bold')}

<h3>THE STACK</h3>
${extractTools(notes)}

<h3>THE WINS</h3>
${extractResults(notes, 'bold')}
`,
};

function extractTitle(notes) {
  const words = notes.split(' ').slice(0, 8).join(' ');
  if (notes.toLowerCase().includes('redesign')) return 'UX Redesign Project';
  if (notes.toLowerCase().includes('brand')) return 'Brand Identity Project';
  if (notes.toLowerCase().includes('motion') || notes.toLowerCase().includes('animation')) return 'Motion Design Project';
  if (notes.toLowerCase().includes('open source') || notes.toLowerCase().includes('github')) return 'Open Source Design System';
  return words.charAt(0).toUpperCase() + words.slice(1) + '…';
}

function extractOverview(notes, tone) {
  const openers = {
    professional: 'This project required strategic thinking, iterative design methodology, and close collaboration with stakeholders to deliver measurable outcomes.',
    creative: 'Every great project starts with a question. This one started with: what happens when we ignore every convention and design from first principles?',
    minimal: 'A focused project with clear goals and measurable outcomes.',
    bold: 'This wasn\'t a project. It was a statement. Here\'s how it happened.',
  };
  const base = notes.slice(0, 120).trim();
  return `${openers[tone]}\n\n${base}${notes.length > 120 ? '…' : ''}`;
}

function extractChallenge(notes, tone) {
  const challenges = {
    professional: 'The primary challenge involved balancing competing stakeholder priorities while maintaining design integrity and meeting hard delivery constraints.',
    creative: 'The hardest part wasn\'t the craft — it was deciding what to leave out. Every constraint was actually an invitation to be more creative.',
    minimal: 'Constraints were tight. Expectations were high. The brief was clear.',
    bold: 'The problem was real, the stakes were high, and nobody had solved it yet. That\'s exactly why it was worth doing.',
  };
  return `${challenges[tone]}\n\n${notes.includes('problem') || notes.includes('issue') || notes.includes('pain') ? 'User pain points and gaps in the existing solution drove every decision in the early discovery phase.' : 'Thorough research revealed the core friction points that needed to be addressed before a single pixel was designed.'}`;
}

function extractProcess(notes, tone) {
  const process = {
    professional: `The project followed a structured Double Diamond methodology:\n\n• <strong>Discover:</strong> In-depth stakeholder interviews, user research, and competitive analysis established a strong evidence base.\n• <strong>Define:</strong> Synthesised findings into clear problem statements and success metrics.\n• <strong>Develop:</strong> Iterative prototyping with continuous user testing ensured each iteration improved on the last.\n• <strong>Deliver:</strong> Final deliverables were handed off with thorough documentation and implementation support.`,
    creative: `Here's the honest version of how this got made:\n\n• Started with 100 bad ideas and threw out 97 of them.\n• Spent more time in research than most people spend on the whole project.\n• Prototyped relentlessly — the first version was wrong. The second was less wrong. The third was right.\n• Tested with real people, not assumptions.\n• Shipped something we were genuinely proud of.`,
    minimal: `Process:\n• Research → insights → brief\n• Concept → iterate → validate\n• Deliver → measure → learn`,
    bold: `NO SHORTCUTS. NO GUESSWORK.\n\n• Deep-dived into the problem space before touching a single tool.\n• Built fast, broke fast, learned faster.\n• Every decision was backed by data or tested with users.\n• Shipped on time, on brief, over expectations.`,
  };
  return process[tone];
}

function extractTools(notes) {
  const toolKeywords = ['figma','figjam','sketch','xd','illustrator','photoshop','indesign','blender','cinema 4d','after effects','premiere','resolve','notion','linear','jira','maze','lyssna','principle','framer','webflow','react','vue','typescript','tailwind','three.js','glsl','houdini','substance','procreate','storybook','zeplin','chromatic'];
  const found = toolKeywords.filter(t => notes.toLowerCase().includes(t));
  if (found.length > 0) {
    return found.map(t => `<strong>• ${t.charAt(0).toUpperCase() + t.slice(1)}</strong>`).join('\n');
  }
  return '<strong>• Figma</strong>\n<strong>• Notion</strong>\n<strong>• User Testing Tools</strong>';
}

function extractResults(notes, tone) {
  const hasMetrics = /\d+%|\d+k|\d+ (users|stars|views|teams|clients)/i.test(notes);
  const resultsOpeners = {
    professional: 'The project delivered quantifiable impact across all agreed success metrics:',
    creative: 'The numbers told a story we didn\'t expect:',
    minimal: 'Results:',
    bold: 'THE NUMBERS DON\'T LIE:',
  };
  const metrics = notes.match(/[\d,]+[\s%kK+]?[\w\s]*/g)?.filter(m => m.length > 3).slice(0, 4) || [];
  let resultText = resultsOpeners[tone] + '\n\n';
  if (hasMetrics && metrics.length > 0) {
    resultText += metrics.map(m => `• <strong>${m.trim()}</strong>`).join('\n');
  } else {
    resultText += `• <strong>Delivered on time and on budget</strong>\n• <strong>Positive stakeholder response across all teams</strong>\n• <strong>Measurable improvement in user satisfaction metrics</strong>`;
  }
  return resultText;
}

function extractLearnings(notes, tone) {
  const learnings = {
    professional: 'This engagement reinforced the value of evidence-based design decisions and early stakeholder alignment. Future projects will benefit from even earlier involvement of engineering teams in the design process.',
    creative: "Honestly? I'd start with user testing even earlier. The best ideas came from watching real people struggle with the thing I thought was obvious. Humbling. And essential.",
    minimal: 'Earlier testing. Tighter scope. Same ambition.',
    bold: "WHAT I'D CHANGE: Start with the hardest constraint, not the easiest win. The breakthrough came late — next time, we chase it from day one.",
  };
  return learnings[tone];
}

// ─── TYPEWRITER ───
function typewriter(el, text, speed = 8) {
  el.innerHTML = '';
  let i = 0;
  function next() {
    if (i < text.length) {
      el.innerHTML = text.slice(0, i + 1);
      i++;
      setTimeout(next, speed);
    }
  }
  next();
}

// ─── GENERATE ───
const genBtn = document.getElementById('gen-btn');
const genLabel = document.getElementById('gen-label');
const outputCard = document.getElementById('output-card');
const outputText = document.getElementById('output-text');

genBtn.addEventListener('click', () => {
  const notes = notesInput.value.trim();
  if (!notes) {
    notesInput.style.borderColor = 'rgba(167,139,250,0.6)';
    notesInput.placeholder = 'Please add some project notes first…';
    setTimeout(() => { notesInput.style.borderColor = ''; }, 2000);
    return;
  }
  // Loading state
  genBtn.disabled = true;
  genLabel.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div> Generating…';
  outputCard.classList.remove('visible');

  setTimeout(() => {
    const raw = templates[currentTone](notes);
    genBtn.disabled = false;
    genLabel.innerHTML = '<i data-lucide="sparkles"></i> Generate Case Study';
    if (window.lucide) lucide.createIcons({ props: { 'stroke-width': 2 }, scope: genBtn });
    outputCard.classList.add('visible');
    outputCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    typewriter(outputText, raw.trim(), 6);
  }, 2200);
});

// ─── EXPORT / COPY ───
document.getElementById('export-btn').addEventListener('click', () => {
  const text = outputText.innerText;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('export-btn');
    btn.innerHTML = '<i data-lucide="check"></i> Copied!';
    btn.classList.add('copied');
    if (window.lucide) lucide.createIcons({ props: { 'stroke-width': 2 }, scope: btn });
    setTimeout(() => { btn.innerHTML = '<i data-lucide="copy"></i> Copy to Clipboard'; btn.classList.remove('copied'); if (window.lucide) lucide.createIcons({ props: { 'stroke-width': 2 }, scope: btn }); }, 2500);
  });
});
