/* 閲覧位置を保つ画面切り替えと、関連資料のプレビュー。 */
(() => {
  'use strict';
  const file = location.pathname.split('/').pop();
  const legacy = {'perspectives.html':'bartenders','evidence.html':'comparisons','cocktails.html':'cocktails'};
  if (location.pathname.includes('/techniques/')) {
    location.replace('../index.html#tech-' + file.replace('.html','')); return;
  }
  if (legacy[file]) { location.replace('index.html' + (location.hash || '#' + legacy[file])); return; }
  const nav=document.querySelector('.reader-nav');
  if (!nav) return;
  const sections=[...document.querySelectorAll('main > .reader-section')];
  const navLinks=[...nav.querySelectorAll('a')];
  const positions=new Map();
  let active=null;
  const panelOf=el => {
    const id=el?.closest('.reader-section')?.id;
    return id==='gin-reading' ? 'comparisons' : id;
  };
  const targetFromHash=hash => {
    try { return document.getElementById(decodeURIComponent(hash.replace(/^#/,''))); }
    catch { return null; }
  };
  const search=document.querySelector('#search');
  const cards=[...document.querySelectorAll('.inline-technique')];
  const filters=[...document.querySelectorAll('[data-filter]')];
  const params=new URLSearchParams(location.search);
  let group=filters.some(b=>b.dataset.filter===params.get('group')) ? params.get('group') : 'すべて';
  search.value=params.get('q') || '';
  const normalize=s=>s.normalize('NFKC').toLocaleLowerCase().trim();
  function filter(save=true) {
    const words=normalize(search.value).split(/\s+/).filter(Boolean);
    let count=0;
    cards.forEach(card=>{
      card.hidden=!((group==='すべて'||card.dataset.group===group)&&words.every(w=>normalize(card.dataset.search).includes(w)));
      if (!card.hidden) count++;
    });
    filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===group)));
    document.querySelector('#result-count').textContent=`${count}件`;
    document.querySelector('#empty').hidden=count!==0;
    if (save) {
      const url=new URL(location.href);
      search.value.trim()?url.searchParams.set('q',search.value.trim()):url.searchParams.delete('q');
      group==='すべて'?url.searchParams.delete('group'):url.searchParams.set('group',group);
      history.replaceState(null,'',url);
    }
  }
  search.addEventListener('input',()=>filter());
  filters.forEach(b=>b.addEventListener('click',()=>{group=b.dataset.filter;filter();}));
  document.querySelector('#clear').addEventListener('click',()=>{search.value='';group='すべて';filter();search.focus();});
  filter(false);
  function showPanel(id,target=null,focus=false) {
    if(active) positions.set(active,window.scrollY);
    active=id;
    sections.forEach(s=>{s.hidden=(s.id==='gin-reading'?'comparisons':s.id)!==id;});
    navLinks.forEach(a=>{
      if(a.hash==='#'+id)a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
    if(target?.matches('.inline-technique')) {
      if(target.hidden){search.value='';group='すべて';filter();}
      target.open=true;
    }
    let parent=target?.parentElement;
    while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}
    requestAnimationFrame(()=>{
      if(target) target.scrollIntoView({block:'start',behavior:'instant'});
      else window.scrollTo({top:positions.get(id)??Math.max(0,document.getElementById(id).getBoundingClientRect().top+window.scrollY-nav.getBoundingClientRect().height-16),behavior:'instant'});
      if(focus){const heading=(target||document.getElementById(id));heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
    });
  }
  function route(focus=false){
    const target=targetFromHash(location.hash);
    const id=panelOf(target)||'techniques';
    showPanel(id,target&&target.id!==id?target:null,focus);
  }
  const dialog=document.querySelector('#reader-preview');
  const content=document.querySelector('#preview-content');
  const title=document.querySelector('#preview-title');
  const back=document.querySelector('#preview-back');
  let stack=[];
  let opener=null;
  function openPreview(target,link){
    if(dialog.open)stack.push({node:content.firstElementChild.cloneNode(true),top:content.scrollTop,title:title.textContent});
    else{opener=link;stack=[];}
    const clone=target.cloneNode(true);
    clone.hidden=false;
    clone.removeAttribute('id');
    clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
    clone.querySelectorAll('.people-back').forEach(el=>el.remove());
    let display=clone;
    if(target.matches('.inline-technique')){
      display=document.createElement('article');
      const h=document.createElement('h2');h.textContent=target.querySelector('.tech-name').textContent;
      display.append(h,clone.querySelector('.inline-content'));
    }
    title.textContent=target.querySelector('.tech-name,h2,h3')?.textContent || '関連する解説';
    content.replaceChildren(display);
    content.scrollTop=0;
    back.hidden=stack.length===0;
    if(!dialog.open){document.body.classList.add('preview-open');dialog.showModal();}
    document.querySelector('#preview-close').focus();
  }
  back.addEventListener('click',()=>{
    const previous=stack.pop();if(!previous)return;
    content.replaceChildren(previous.node);title.textContent=previous.title;content.scrollTop=previous.top;back.hidden=stack.length===0;
    if(back.hidden)document.querySelector('#preview-close').focus();
  });
  document.querySelector('#preview-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{
    document.body.classList.remove('preview-open');stack=[];content.replaceChildren();
    opener?.focus({preventScroll:true});opener=null;
  });
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="#"]');if(!link)return;
    const target=targetFromHash(link.hash);if(!target)return;
    const panel=panelOf(target);if(!panel)return;
    event.preventDefault();
    const indexLink=link.closest('.reader-nav,.people-index,.evidence-index') || link.classList.contains('people-back') || target.matches('.reader-section');
    if(!indexLink&&(target.matches('.inline-technique')||target.closest('.viewpoints,.evidence-cards'))){openPreview(target,link);return;}
    if(dialog.open)dialog.close();
    history.pushState(null,'',link.hash);
    showPanel(panel,link.closest('.reader-nav')?null:target,true);
  });
  window.addEventListener('popstate',()=>{if(dialog.open)dialog.close();route(true);});
  window.addEventListener('hashchange',()=>route(true));
  document.documentElement.classList.add('reader-ready');
  route();
})();
