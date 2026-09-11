let products=[], cart=[];
const fmt=n=>'KSh '+Number(n).toLocaleString();

async function loadProducts(){
  products=await fetch('/api/products').then(r=>r.json());
  renderProducts();
  document.getElementById('featured').innerHTML=products.slice(0,3).map(productCard).join('');
}
function productCard(p){
  return `<article class="card"><div class="product-image">${p.category}</div><h3>${p.name}</h3><div class="meta">${p.seller}</div><div class="price">${fmt(p.price)}</div><button onclick="addToCart(${p.id})">Add to Cart</button></article>`;
}
function addToCart(id){
  const p=products.find(x=>x.id===id);
  cart.push(p);
  document.getElementById('cartCount').textContent=cart.length;
  toast(p.name+' added to cart');
}
function renderCart(){
  const box=document.getElementById('cartItems');
  box.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><div><strong>${p.name}</strong><div class="meta">${p.seller}</div></div><div>${fmt(p.price)} <button onclick="removeCart(${i})">Remove</button></div></div>`).join(''):'<div class="empty">Your cart is empty.</div>';
  document.getElementById('total').textContent='Total: '+fmt(cart.reduce((s,p)=>s+p.price,0));
}
function removeCart(i){cart.splice(i,1);document.getElementById('cartCount').textContent=cart.length;renderCart();}
function showSection(id){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='cart')renderCart();
  window.scrollTo({top:0,behavior:'smooth'});
}
function placeOrder(){
  if(!cart.length)return toast('Add products before placing an order.');
  toast('Order created. Payment integration is coming soon.');
  cart=[];document.getElementById('cartCount').textContent=0;renderCart();
}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2800);}
document.getElementById('search').addEventListener('input',e=>{
  const q=e.target.value.toLowerCase();
  const box=document.getElementById('products');
  if(q){showSection('explore');box.innerHTML=products.filter(p=>(p.name+p.seller+p.category).toLowerCase().includes(q)).map(productCard).join('')||'<div class="empty">No products found.</div>';}
});
loadProducts();
