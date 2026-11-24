(function(){
var d=document.documentElement,AR=window.AB_AR||{};
function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var attrs=['aria-label','alt','placeholder','title'];
function cache(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){if(el.dataset.en===undefined)el.dataset.en=el.innerHTML});
  attrs.forEach(function(a){document.querySelectorAll('[data-i18n-'+a+']').forEach(function(el){if(!el.hasAttribute('data-en-'+a))el.setAttribute('data-en-'+a,el.getAttribute(a))})});
  var t=document.querySelector('title'),m=document.querySelector('meta[name=description]');
  if(t&&!t.dataset.en)t.dataset.en=t.textContent;if(m&&!m.dataset.en)m.dataset.en=m.content;
}
function apply(lang){
  cache();
  d.lang=lang;d.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.dataset.i18n;el.innerHTML=(lang==='ar'&&AR[k]!==undefined)?AR[k]:el.dataset.en});
  attrs.forEach(function(a){document.querySelectorAll('[data-i18n-'+a+']').forEach(function(el){var k=el.getAttribute('data-i18n-'+a);el.setAttribute(a,(lang==='ar'&&AR[k]!==undefined)?AR[k]:el.getAttribute('data-en-'+a))})});
  var page=document.body.dataset.page,t=document.querySelector('title'),m=document.querySelector('meta[name=description]');
  if(t)t.textContent=(lang==='ar'&&AR['t.'+page])?AR['t.'+page]:t.dataset.en;
  if(m)m.content=(lang==='ar'&&AR['d.'+page])?AR['d.'+page]:m.dataset.en;
  var og=document.querySelector('meta[property="og:locale"]');if(og)og.content=lang==='ar'?'ar_AR':'en_US';
  var lb=document.getElementById('lang-btn');
  if(lb){lb.textContent=lang==='ar'?'English':'العربية';lb.setAttribute('lang',lang==='ar'?'en':'ar');lb.setAttribute('aria-label',lang==='ar'?'Switch to English':'التبديل إلى العربية')}
  d.classList.remove('i18n-pending');
}
function applyTheme(t){d.setAttribute('data-theme',t);var m=document.querySelector('meta[name=theme-color]');if(m)m.content=t==='light'?'#ffffff':'#0b0b0c';
  var b=document.getElementById('theme-btn');if(b)b.setAttribute('aria-pressed',String(t==='light'))}
var lang=get('ab-lang')==='ar'?'ar':'en',theme=get('ab-theme')==='light'?'light':'dark';
applyTheme(theme);apply(lang);
var tb=document.getElementById('theme-btn');
if(tb)tb.addEventListener('click',function(){theme=theme==='light'?'dark':'light';set('ab-theme',theme);applyTheme(theme)});
var lb=document.getElementById('lang-btn');
if(lb)lb.addEventListener('click',function(){lang=lang==='ar'?'en':'ar';set('ab-lang',lang);apply(lang)});
var mt=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(mt&&nav){
  mt.addEventListener('click',function(){var o=nav.classList.toggle('open');mt.setAttribute('aria-expanded',String(o))});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');mt.setAttribute('aria-expanded','false');mt.focus()}});
}
document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear()});
var f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',function(e){
  e.preventDefault();var msg=document.getElementById('form-msg'),n=f.elements.name.value.trim(),s=f.elements.subject.value.trim(),b=f.elements.message.value.trim();
  if(!n||!s||!b||!f.elements.email.checkValidity()){msg.className='msg err';msg.textContent=lang==='ar'?(AR['form.err']):msg.dataset.err;return}
  var body=b+'\n\n— '+n+' ('+f.elements.email.value.trim()+')';
  msg.className='msg';msg.textContent=lang==='ar'?AR['form.ok']:msg.dataset.ok;
  window.location.href='mailto:mubarakdigitals26@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(body);
});
})();
