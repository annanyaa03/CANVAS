// ─── DISCOVER.JS ───

// ─── FILTER ───
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'all 0.4s cubic-bezier(0.4,0,0.2,1)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.transition = 'all 0.3s cubic-bezier(0.4,0,0.2,1)';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => { card.style.display = 'none'; }, 300);
      }
    });
    setTimeout(initMasonry, 400);
  });
});

// ─── SEARCH ───
const searchInput = document.getElementById('search-input');
const searchWrap = document.querySelector('.search-wrap');
if (searchInput) {
  searchInput.addEventListener('focus', () => searchWrap.classList.add('expanded'));
  searchInput.addEventListener('blur', () => { if (!searchInput.value) searchWrap.classList.remove('expanded'); });
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    portfolioCards.forEach(card => {
      const name = card.querySelector('.card-name')?.textContent.toLowerCase() || '';
      const disc = card.querySelector('.card-discipline')?.textContent.toLowerCase() || '';
      const proj = card.querySelector('.card-project')?.textContent.toLowerCase() || '';
      const match = name.includes(q) || disc.includes(q) || proj.includes(q);
      card.style.display = match ? 'block' : 'none';
      if (match) setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
    });
    setTimeout(initMasonry, 400);
  });
}

// ─── MASONRY ───
function initMasonry() {
  const grid = document.querySelector('.masonry-grid');
  if (!grid || window.innerWidth < 768) return;
  const items = [...grid.querySelectorAll('.portfolio-card')].filter(c => c.style.display !== 'none');
  items.forEach(item => { item.style.gridRowEnd = ''; });
  items.forEach(item => {
    const rowH = parseInt(getComputedStyle(grid).gridAutoRows) || 10;
    const gap = parseInt(getComputedStyle(grid).rowGap) || 20;
    const span = Math.ceil((item.getBoundingClientRect().height + gap) / (rowH + gap));
    item.style.gridRowEnd = `span ${span}`;
  });
}
window.addEventListener('load', initMasonry);
window.addEventListener('resize', initMasonry);

// ─── CARD SCROLL REVEAL ───
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 80);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
portfolioCards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s`;
  cardObserver.observe(card);
});

// ─── LIKE BUTTON ───
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.classList.toggle('liked');
    const count = btn.querySelector('.like-count');
    if (count) {
      const cur = parseFloat(count.textContent.replace('k','')) * (count.textContent.includes('k') ? 1000 : 1);
      const isLiked = btn.classList.contains('liked');
      const newVal = isLiked ? cur + 1 : cur - 1;
      count.textContent = newVal >= 1000 ? (newVal/1000).toFixed(1) + 'k' : newVal;
    }
    if (btn.classList.contains('liked')) {
      btn.style.color = 'var(--accent-rose)';
      btn.style.borderColor = 'var(--accent-rose)';
      btn.style.background = 'rgba(239, 68, 68, 0.1)';
      // Burst
      const burst = document.createElement('div');
      burst.style.cssText = `position:absolute;width:40px;height:40px;border-radius:50%;background:rgba(239, 68, 68, 0.2);transform:translate(-50%,-50%) scale(0);animation:heartBurst 0.4s ease-out forwards;pointer-events:none;top:50%;left:50%;`;
      btn.style.position = 'relative';
      btn.appendChild(burst);
      setTimeout(() => burst.remove(), 400);
    } else {
      btn.style.color = '';
      btn.style.borderColor = '';
      btn.style.background = '';
    }
  });
});
const bStyle = document.createElement('style');
bStyle.textContent = `@keyframes heartBurst{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(-50%,-50%) scale(2.5);opacity:0}}`;
document.head.appendChild(bStyle);

// ─── FOLLOW BUTTON ───
document.querySelectorAll('.follow-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isFollowing = btn.classList.toggle('following');
    btn.textContent = isFollowing ? 'Following ✓' : 'Follow';
  });
});

// ─── VIEW GALLERY MODAL ───
document.querySelectorAll('.view-gallery-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.portfolio-card');
    const name = card?.querySelector('.card-name')?.textContent || 'Creative';
    const discipline = card?.querySelector('.card-discipline')?.textContent || 'Designer';
    const bannerBg = card?.querySelector('.card-banner')?.style.background || getComputedStyle(card?.querySelector('.card-banner')).background || 'var(--gradient-card-1)';
    const letter = name.charAt(0);
    // Remove existing
    document.getElementById('quick-view-modal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-box" style="max-width:580px">
        <div style="height:200px;background:${card?.querySelector('.card-banner')?.className.split(' ').filter(c=>c.startsWith('banner'))[0] ? '' : 'var(--gradient-card-1)'};position:relative;" class="${card?.querySelector('.card-banner')?.className}">
          <button class="modal-close" onclick="document.getElementById('quick-view-modal').remove()">×</button>
          <div style="position:absolute;bottom:-28px;left:2rem;width:56px;height:56px;border-radius:50%;background:var(--gradient-primary);border:3px solid var(--bg-primary);display:flex;align-items:center;justify-content:center;font-family:var(--font-primary);font-weight:800;font-size:1.2rem;color:#fff">${letter}</div>
        </div>
        <div style="padding:2.5rem 2rem 2rem">
          <h2 style="font-family:var(--font-primary);font-size:1.5rem;font-weight:700;margin-bottom:0.3rem;color:var(--text-primary)">${name}</h2>
          <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.5rem">${discipline}</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-bottom:1.5rem">
            ${['12 Projects','4.8k Views','98% Rating'].map(s => `<div style="background:var(--bg-secondary);border:1px solid var(--border-default);border-radius:12px;padding:1rem;text-align:center"><div style="font-family:var(--font-primary);font-weight:700;font-size:1.1rem;color:var(--text-primary)">${s.split(' ')[0]}</div><div style="color:var(--text-muted);font-size:0.75rem">${s.split(' ').slice(1).join(' ')}</div></div>`).join('')}
          </div>
          <div style="display:flex;gap:0.75rem">
            <a href="gallery.html" style="flex:1;background:var(--accent-primary);color:#fff;padding:0.75rem;border-radius:12px;font-family:var(--font-primary);font-weight:600;font-size:0.9rem;cursor:none;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center">View Full Gallery</a>
            <a href="profile.html" style="flex:1;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-strong);padding:0.75rem;border-radius:12px;font-family:var(--font-primary);font-weight:600;font-size:0.9rem;cursor:none;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center">View Profile</a>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  });
});

// ─── TRENDING STAGGER ───
document.querySelectorAll('.trending-item').forEach((item, i) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(15px)';
  item.style.transition = `all 0.4s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`;
  setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'translateX(0)'; }, 400 + i * 80);
});
