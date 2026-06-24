let wallpapers=[];let current='All';
fetch('data/wallpapers.json').then(r=>r.json()).then(data=>{
wallpapers=data.wallpapers||[];buildCategories();render();
});
function buildCategories(){
const cats=['All',...new Set(wallpapers.map(w=>w.category))];
document.getElementById('categoryTabs').innerHTML=cats.map(c=>`<button class="tab ${c==='All'?'active':''}" onclick="setCategory('${c}',this)">${c}</button>`).join('');
}
function setCategory(c,el){current=c;document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');render();}
document.getElementById('searchInput').addEventListener('input',render);
function render(){
const q=document.getElementById('searchInput').value.toLowerCase();
const list=wallpapers.filter(w=>(current==='All'||w.category===current)&&JSON.stringify(w).toLowerCase().includes(q));
document.getElementById('featuredSection').innerHTML=wallpapers.some(w=>w.featured)?'<h2 class="featured-title">Featured</h2>':'';
document.getElementById('wallpaperGrid').innerHTML=list.length?list.map(w=>`
<div class="card">
<img loading="lazy" src="${w.image}" alt="${w.title}">
<div class="content">
<div class="cat">${w.category}</div>
<h3>${w.title}</h3>
<p>${w.description}</p>
<div class="tags">${(w.tags||[]).map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
<a class="download" href="${w.image}" download>Download</a>
</div></div>`).join(''):'<p>No wallpapers found.</p>';
}
