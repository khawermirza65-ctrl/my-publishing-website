(()=>{
 const $=s=>document.querySelector(s),mb=$('#mb'),nv=$('#nv'),dd=$('.dd'),sm=$('#sm');
 if(mb)mb.onclick=()=>{const o=nv.classList.toggle('show');mb.setAttribute('aria-expanded',String(o))};
 if(dd)dd.onclick=()=>{const o=sm.classList.toggle('open');dd.setAttribute('aria-expanded',String(o))};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){sm?.classList.remove('open');nv?.classList.remove('show');mb?.setAttribute('aria-expanded','false');dd?.setAttribute('aria-expanded','false')}});
 const pp=$('#pp');if(pp)pp.onclick=()=>{const paused=pp.getAttribute('aria-pressed')!=='true';document.querySelectorAll('.mq').forEach(x=>x.classList.toggle('p',paused));pp.textContent=paused?'Resume logos':'Pause logos';pp.setAttribute('aria-pressed',String(paused))};
 if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:.6,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,easing:'ease-out'});io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.sc,.intro-grid,.depth-grid article').forEach(e=>io.observe(e))}
 document.querySelectorAll('.enquiry-form').forEach(f=>{
  const field=name=>f.querySelector('[data-field="'+name+'"]'),status=f.querySelector('.form-status');
  const query=new URLSearchParams(location.search).get('service');if(query&&Array.from(field('service').options).some(x=>x.value===query))field('service').value=query;
  f.addEventListener('submit',e=>{e.preventDefault();let first=null;
   const errors={name:field('name').value.trim()?'':'Please enter your name.',email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field('email').value.trim())?'':'Please enter a valid email address.',phone:/^\+?[0-9 ()-]{7,20}$/.test(field('phone').value.trim())?'':'Please enter your phone number with country code.',message:field('message').value.trim().length>9?'':'Please tell us a little about your book.'};
   Object.entries(errors).forEach(([name,msg])=>{f.querySelector('[data-error="'+name+'"]').textContent=msg;field(name).setAttribute('aria-invalid',String(!!msg));if(msg&&!first)first=field(name)});
   if(first){first.focus();status.textContent='Please check the highlighted fields.';return}
   status.textContent='Preview only: your enquiry has not been sent. Please email info@inkwellpublishings.com or call 838-237-7990.';status.focus();
  });
 });
})();
