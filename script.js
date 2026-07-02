// Tower grid (coverage section)
  const grid = document.getElementById('towerGrid');
  const total = 48;
  for(let i=0;i<total;i++){
    const d = document.createElement('i');
    if(Math.random() < 0.62){
      d.classList.add('on');
      d.style.animationDelay = (Math.random()*2.6).toFixed(2)+'s';
    }
    grid.appendChild(d);
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click', ()=>{
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!isOpen) item.classList.add('open');
    });
  });

  // Monthly / Annual toggle
  document.querySelectorAll('.toggle button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.toggle button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cycle = btn.dataset.cycle;
      document.querySelectorAll('.price-val').forEach(el=>{
        const val = cycle === 'annual' ? el.dataset.a : el.dataset.m;
        el.textContent = '₹' + val;
      });
    });
  });
