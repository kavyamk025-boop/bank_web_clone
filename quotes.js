let url="https://dummyjson.com/quotes"
let card=document.getElementsByClassName("cards")[0]
// console.log(card);
let data=fetch(url).then((d)=>{
    return d.json()
}).then((d)=>{
    
    let da=d.quotes;
    console.log(da);
 da.map((da,i)=>{

 card.innerHTML+=`<div class="cards"
           style="width: 30%;border: 2px solid black ; background-color: aquamarine;border-radius: 20px; padding: 10px;background-color: rgb(190, 107, 205);
           ">
          <span style="margin-Left:48%;font-size:30px">${da.id}</span>
           <p>${da.quote}</p>
           <p>${da.author}</p>
                
       </div>`
})
 })
 

