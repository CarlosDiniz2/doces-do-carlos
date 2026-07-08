const whatsapp='5511954708575';
const produtos=[
{
    name:'KitKat Ao Leite',
    preco:5,
    imagem:'Imagens/kitkat-leite.jpg'
},
{
    name:'KitKat Dark',
    preco:5.5,
    imagem:'imagens/kitkat-dark.jpg'
},
{
    name:'Amendoim Dori',
    preco:3,
    imagem:'imagens/amendoim-dori.jpg'
},
{
    name:'Snickers',
    preco:5.5,
    imagem:'imagens/snickers.jpg'
},
{
    name:'Sonho de Valsa',
    preco:2.5,
    imagem:'imagens/sonho-de-valsa.jpg'
}
];

let carrinho=[];

const area=document.getElementById('produtos');
produtos.forEach((p,i)=>{
 area.innerHTML+=`<div class="produto">
<img src="${p.imagem}" alt="${p.name}">
 <h3>${p.name}</h3><p>R$ ${p.preco.toFixed(2)}</p>
 <button onclick="add(${i})">Adicionar</button></div>`;
});

function add(i){
 carrinho.push(produtos[i]);
 atualizar();
}

function atualizar(){
 let html='';
 let total=0;
 carrinho.forEach(p=>{html+=`<div>${p.name} - R$ ${p.preco.toFixed(2)}</div>`; total+=p.preco;});
 document.getElementById('itens').innerHTML=html;
 document.getElementById('total').innerText='Total: R$ '+total.toFixed(2);
}

function finalizarPedido(){
 let total=0;
 let msg='🍫 NOVO PEDIDO%0A';
 const nome=document.getElementById('nome').value;
 msg+='Cliente: '+nome+'%0A%0A';
 carrinho.forEach(p=>{msg+=`- ${p.name} R$ ${p.preco.toFixed(2)}%0A`; total+=p.preco;});
 msg+=`%0ATotal: R$ ${total.toFixed(2)}%0APagamento: ${document.getElementById('pagamento').value}`;
 window.open(`https://wa.me/${whatsapp}?text=${msg}`,'_blank');
}
