let btn=document.getElementsByTagName("button")[0]
let div=document.getElementsByTagName("div")[0]
btn.addEventListener("click",()=>{
   let total=""
   for (let i=0;i<5;i++){
  total+= Math.floor(Math.random()*10)+" "
   }


    let h1=document.createElement("h1")
    h1.id="h1"
    h1.innerText=total
    div.appendChild(h1)

})