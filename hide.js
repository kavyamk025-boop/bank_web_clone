
let btn=document.getElementsByTagName("button")[0]
let inp=document.getElementById("inp")
let hide=document.getElementById("hide")
let actual=""
let ishidden=false
let pass=document.getElementById("password")
let otp=document.getElementById("otp")
let spanotp=document.getElementById("otpspan")
otp.addEventListener("click",()=>{
  let otp=""
    for (let i=0;i<5;i++){
      otp+=Math.floor(Math.random()*10)+" "

    }
  spanotp.innerText=otp

})



let submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
  
  let div=document.createElement("div")
  let h4=document.createElement("h3")
  h4.innerText="YOu have successfully filled the form :"
  let h3=document.createElement("h3")
  let h32=document.createElement("h3")
  h3.innerText=inp.value
  h32.innerText=pass.innerText
  div.appendChild(h3)
  div.appendChild(h32)
  div.appendChild(h4)
  document.body.appendChild(div)
})
hide.addEventListener("click",()=>{
    
  ishidden=!ishidden
  if (ishidden){
    pass.innerText="*".repeat(actual.length)
  }  
  else{
    pass.innerText=actual
  }
})



let copy=document.getElementsByTagName("button")[2]
let generatepassword=document.getElementById("generatepassword")
generatepassword.addEventListener("click",()=>{

    let alpha="QWERTYUIOPASDFGHJKLZXCVBNM"
    let alpha2="asdfghjklmnbvcxzqwertyuiop"
    let num="1234567890"
    let spe="!@#$%^&*()?><~|}{"
let l=[alpha,alpha2,num,spe]
let password=""
let len=8
for(let i=0;i<len;i++){
    
    let rand=Math.floor(Math.random()*l.length)
    let select=l[rand]

    let rand2=Math.floor(Math.random()*select.length)
    password+=select[rand2]
}

  actual=password
  ishidden=false
  pass.innerText=password
})
copy.addEventListener("click",()=>{
  let text=pass.innerText
    navigator.clipboard.writeText(text)
})

// let btn = document.getElementsByTagName("button")[0];
// let hide = document.getElementsByTagName("button")[1];
// let copy = document.getElementsByTagName("button")[2];
// let pass = document.getElementsByTagName("span")[0];

// let actual = "";       
// let ishidden = false;  

// hide.addEventListener("click", () => {

//   ishidden = !ishidden;

//   if (ishidden) {
//     pass.innerText = "*".repeat(actual.length);
//   } else {
//     pass.innerText = actual;
//   }
// });

// btn.addEventListener("click", () => {

//     let alpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
//     let alpha2 = "asdfghjklmnbvcxzqwertyuiop";
//     let num = "1234567890";
//     let spe = "!@#$%^&*()?><~|}{";

//     let l = [alpha, alpha2, num, spe];

//     let password = "";
//     let len = 8;

//     for (let i = 0; i < len; i++) {
//         let rand = Math.floor(Math.random() * l.length);
//         let select = l[rand];

//         let rand2 = Math.floor(Math.random() * select.length);
//         password += select[rand2];
//     }

//     actual = password;      
//     pass.innerText = password;
//     ishidden = false;       
// });

// copy.addEventListener("click", () => {
//     let text = actual;       
//     navigator.clipboard.writeText(text);
// });