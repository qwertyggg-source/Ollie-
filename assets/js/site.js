
document.querySelectorAll('[data-lightbox]').forEach(el=>{
  el.addEventListener('click',e=>{
    e.preventDefault();
    const box=document.querySelector('.lightbox');
    box.querySelector('img').src=el.dataset.lightbox;
    box.classList.add('open');
  });
});
document.querySelector('.lightbox')?.addEventListener('click',e=>{
  if(e.target.classList.contains('lightbox') || e.target.classList.contains('close'))
    e.currentTarget.classList.remove('open');
});
const obs=new IntersectionObserver(entries=>entries.forEach(x=>{
  if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target)}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
