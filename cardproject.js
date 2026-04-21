// let url="https://fakestoreapiserver.reactbd.org/api/products"
// let card=document.getElementsByClassName("cards")[0]
// console.log(card);
// let data=fetch(url).then((d)=>{
//     return d.json()
// }).then((d)=>{
//     let dat=d.data
//     console.log(dat[0]);
//     dat.map((da,i)=>{
//         card.innerHTML+=`<div class="cards"
//                 style="width: 30%;border: 2px solid black ;background-color: aquamarine;border-radius: 20px; padding: 10px;">
//                 <span class="id">${da._id}</span>
//                 <p class="title">${da.title}</p>
//                 <img class="img" src="${da.image}" alt="" style="height: 100px;width: 100px;margin: 30px;">
//                 <p class="description">${da.description}</p>
//                 <span class="category">${da.category}</span>
//                 <span class="brand">${da.brand}</span>
//                 <p class="price">${da.price}</p>
//             </div>`
//     })
// })
let url="https://dummyjson.com/user"
let card=document.getElementsByClassName("cards")[0]
console.log(card);
let data=fetch(url).then((d)=>{
    return d.json()
}).then((d)=>{
    
    let user=(d.users);
    user.map((da,i)=>{

        card.innerHTML+=`<div class="cards"
                style="width: 30%;border: 2px solid black ; background-color: aquamarine;border-radius: 20px; padding: 10px;">
                <span>${da.id}</span>
                <p>${da.firstName}</p>
                <p>${da.lastName}</p>
                <p>${da.maidenName}</p>
                <p>${da.email}</p>
                <p>${da.bloodGroup}</p>
                <img  src="${da.image}" alt="" style="height: 100px;width: 100px;margin: 30px;">
                <p >${da.address.address}${da.address.city}${da.address.state}${da.address.statecode}${da.address.postalcode}${da.address.coordinates.lat}${da.address.coordinates.lng}</p>
                
            </div>`
    })
})

