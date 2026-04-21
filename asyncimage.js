let cards=document.getElementsByClassName("cards")[0]
let task=async()=>{
    let data=await fetch("https://dummyjson.com/users/1/carts")
   let jsn=await data.json()
   
   console.log(jsn);
   console.log(jsn.carts);
   let products=jsn.carts[0].products
   jsn.carts.map((cart)=>{
    let productshtml=""
  products.map((d)=>{
    productshtml+=`<div class="product"><h3>${d.id}</h3>
<p>Title:${d.title}</p>
<p>Price${d.price}</p>
<p>Quantity:${d.quantity}</p>
<img src="${d.thumbnail}" alt="">
<p>Total:${d.total}</p>
</div>`
  })
  cards.innerHTML+=`
  <div class="products"><h3>CARTID:${cart.id}</h3>
<p>Total:${cart.total}</p>
<p>DiscountedTotal:${cart.discountedTotal}</p>
<p>UserId:${cart.userId}</p>
<div class="productcont">${productshtml}</div>`
   })
      
}
task();