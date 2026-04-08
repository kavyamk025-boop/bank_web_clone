// let inp=document.getElementsByTagName("input")[0]
// let btn=document.getElementsByTagName("button")[0]
// let card=document.getElementsByTagName("div")[0]

// inp.style.height="50px"
// inp.style.widows="500px"
// inp.style.borderRadius="20px"
// inp.style.backgroundColor=""
// inp.style.fontSize="30px"
// btn.addEventListener("click",()=>{
//     console.log("hello");
//   card.innerHTML+=`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}" alt="image loading....">`
// })
let inp=document.getElementById("inp")
let del=document.getElementById("del")
let ac=document.getElementById("ac")
let mod=document.getElementById("mod")
let div=document.getElementById("div")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let mul=document.getElementById("mul")
let six=document.getElementById("six")
let five=document.getElementById("five")
let four=document.getElementById("four")
let minus=document.getElementById("minus")
let three=document.getElementById("three")
let two=document.getElementById("two")
let one=document.getElementById("one")
let plus=document.getElementById("plus")
let zero=document.getElementById("zero")
let zero2=document.getElementById("zero2")
let eq=document.getElementById("eq")
del.addEventListener("click",()=>{
  inp.value=inp.value.slice(0,-1)
})
ac.addEventListener("click",()=>{
  inp.value=""
})
mod.addEventListener("click",()=>{
  inp.value+="%"
})
div.addEventListener("click",()=>{
  inp.value+="/"
})
seven.addEventListener("click",()=>{
  inp.value+="7"
})
eight.addEventListener("click",()=>{
  inp.value+="8"
})
nine.addEventListener("click",()=>{
  inp.value+="9"
})
mul.addEventListener("click",()=>{
  inp.value+="*"
})
six.addEventListener("click",()=>{
  inp.value+="6"
})
five.addEventListener("click",()=>{
  inp.value+="5"
})
four.addEventListener("click",()=>{
  inp.value+="4"
})
minus.addEventListener("click",()=>{
  inp.value+="-"
})
three.addEventListener("click",()=>{
  inp.value+="3"
})
two.addEventListener("click",()=>{
  inp.value+="2"
})
one.addEventListener("click",()=>{
  inp.value+="1"
})
plus.addEventListener("click",()=>{
  inp.value+="+"
})
zero.addEventListener("click",()=>{
  inp.value+="0"
})
zero2.addEventListener("click",()=>{
  inp.value+="00"
})
eq.addEventListener("click",()=>{
  inp.value=eval(inp.value)
})