/* Change the site name here only */
const SITE={name:'SimRYB',tag:'Power protection & control, learned by simulation'};
(function(){const r=document.body.dataset.root||'',n=SITE.name.replace('RYB','<b>RYB</b>');
const h=document.getElementById('hd');if(h)h.innerHTML=`<div class="bar"><i></i><i></i><i></i></div><div class="w"><a class="logo" href="${r}index.html">${n}</a><nav><a href="${r}index.html">Lessons</a></nav></div>`;
const f=document.getElementById('ft');if(f)f.innerHTML=`<div class="w"><footer>© ${new Date().getFullYear()} ${SITE.name} – ${SITE.tag}. Learning material only; always follow your site's safety rules and relay manufacturer data.</footer></div>`;
if(!document.title.includes(SITE.name))document.title+=' | '+SITE.name})();
