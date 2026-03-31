// ─── CLIENT.JS ───

// ─── TESTIMONIALS CAROUSEL ───
const track = document.getElementById('test-track');
const dots = document.querySelectorAll('.test-dot');
let current = 0;
const total = document.querySelectorAll('.testimonial-slide').length;

function goTo(idx) {
  current = (idx + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('on', i === current));
}
document.getElementById('test-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('test-next').addEventListener('click', () => goTo(current + 1));
dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
// Auto-advance
setInterval(() => goTo(current + 1), 5000);

// ─── BOOKING FORM ───
const form = document.getElementById('booking-form');
const formSuccess = document.getElementById('form-success');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;
  setTimeout(() => {
    form.style.opacity = '0';
    form.style.transform = 'translateY(-10px)';
    form.style.transition = 'all .4s ease';
    setTimeout(() => {
      form.style.display = 'none';
      formSuccess.classList.add('show');
      // Confetti burst
      spawnConfetti();
    }, 400);
  }, 1500);
});

function spawnConfetti() {
  const colors = ['var(--accent-primary)', 'var(--text-muted)', 'var(--bg-dark)'];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      const x = Math.random() * window.innerWidth;
      el.style.cssText = `
        position:fixed;top:-10px;left:${x}px;
        width:${Math.random()*8+4}px;height:${Math.random()*8+4}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        border-radius:${Math.random()>0.5?'50%':'2px'};
        z-index:99999;pointer-events:none;
        animation:confettiFall ${Math.random()*2+1.5}s ease-in forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 40);
  }
  const s = document.createElement('style');
  s.textContent = `@keyframes confettiFall{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}`;
  document.head.appendChild(s);
}

// ─── AVAILABILITY CALENDAR ───
const bookedDays = [3, 7, 8, 14, 15, 21, 22];
let calYear = 2026, calMonth = 3; // April 2026 (0-indexed)
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  document.getElementById('cal-month').textContent = `${monthNames[calMonth]} ${calYear}`;
  const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const today = new Date();
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  let html = days.map(d => `<div class="cal-day-label">${d}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = today.getDate() === d && today.getMonth() === calMonth && today.getFullYear() === calYear;
    const isBooked = bookedDays.includes(d);
    const cls = isToday ? 'today' : isBooked ? 'booked' : 'open';
    html += `<div class="cal-day ${cls}">${d}</div>`;
  }
  grid.innerHTML = html;
}

document.getElementById('cal-prev').addEventListener('click', () => {
  calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCalendar();
});
document.getElementById('cal-next').addEventListener('click', () => {
  calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCalendar();
});
renderCalendar();
