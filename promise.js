// let data=fetch("https://jsonplaceholder.typicode.com/users").then((d)=>{
//     return (d.json());
// }).then((d)=>{
//     d.filter((da,i,a)=>{

//             console.log(da);

//     })
// })
// let url="https://jsonplaceholder.typicode.com/users"
// let data=fetch(url).then((d)=>{
//     return d.json()
// }).then((fd)=>{

//     if (!(fd[0].name.includes(""))){
//         console.log(fd);
//     }
//     else{
//         console.log("not found");
//     }
// })
// let ur = "https://dummyjson.com/products"
// let dat = fetch(ur).then((d) => {
//     return d.json()
// }).then((fd) => {
//     let fda = fd.products
//     // console.log(fda);
//     let a = fda.filter((da) => {
//         return (da.title.includes(""))
// }).map((da) => ({ title: da.title }))
// console.log(a);
// })

// let ur = "https://dummyjson.com/products";

// fetch(ur)
// .then((d) => d.json())
// .then((fd) => {
//     let fda = fd.products;

//     let a = fda
//         .filter((da) => da.title.toLowerCase().includes("ak"))
//         .map((da) => ({ title: da.title }));

//     console.log(a);
// });
let ur="https://dummyjson.com/products";
let data=fetch(ur).then((d)=>{
    return d.json()
}).then((d)=>{
    let final=d.products
    console.log(final);
    let a=final.filter((da)=>{return da.title.includes("s")}).map((da)=>{
        
        document.body.innerHTML+=`<div>
        <h1 id="id">${da.id}</h1>
        <h2 id="title">${da.title}</h2>
        <p id="p">${da.description}</p>
        <p id="category">${da.category}</p>
        <p id="price">${da.price}</p>
    </div>`
    })
})
