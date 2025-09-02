// Tema & utilidades
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'light') root.classList.add('light');

  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', ()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // Ano do rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Barras de skills
  document.querySelectorAll('.bar').forEach(b=>{
    const level = b.getAttribute('data-level') || 0;
    requestAnimationFrame(()=>b.style.setProperty('--w', level + '%'));
  });

  // Projetos
  fetch('assets/js/projects.json')
    .then(r => r.json())
    .then(renderProjects)
    .catch(()=>{
      // fallback mínimo
      renderProjects([{
        title:'API .NET com Swagger',
        description:'API REST em ASP.NET Core, documentação OpenAPI e deploy com GitHub Actions.',
        tags:['ASP.NET Core','Swagger','CI/CD'],
        demo:'#',
        repo:'#'
      }]);
    });

  function renderProjects(data){
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    data.forEach(p => {
      const el = document.createElement('article');
      el.className = 'project';
      el.innerHTML = `
        <div class="thumb"> ${escapeHtml(abbrev(p.title))} </div>
        <div class="body">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description || '')}</p>
          <div class="tags">${(p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
          <!--
          <div class="actions">
            ${p.demo ? `<a class="primary" href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ''}
            ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Código</a>` : ''}
          </div>
          -->
        </div>
      `;
      grid.appendChild(el);
    });
  }

  function escapeHtml(str){
    return (str||'').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function abbrev(str){
    str = str || '';
    return str.length > 18 ? str.slice(0,16) + '…' : str;
  }

  // Formulário (mailto)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = new FormData(form);
    const subject = encodeURIComponent('Contato via Portfólio — ' + f.get('nome'));
    const body = encodeURIComponent(`Nome: ${f.get('nome')}
Email: ${f.get('email')}
Mensagem:
${f.get('mensagem')}`);
    window.location.href = `mailto:albertlemebrito@gmail.com?subject=${subject}&body=${body}`;
  });
})();
