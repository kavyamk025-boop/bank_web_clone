let date = document.getElementById("date")
let clock = document.getElementById("clock")
let d = new Date()
date.innerText = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
setInterval(() => {
  d = new Date()
  clock.innerText = `${d.getHours() - 12}:${d.getMinutes()}:${d.getSeconds()}`
}, 1000)
let otpbtn = document.getElementById("otpbtn")
let passbtn = document.getElementById("passbtn")
let otp = document.getElementById("otp")
let pass = document.getElementById("pass")
otpbtn.addEventListener("click", () => {
  let otpactual = ""
  for (let i = 0; i < 5; i++) {
    let o1 = Math.floor(Math.random() * 10)
    otpactual += o1 + " "
  }
  otp.innerText = otpactual


})
passbtn.addEventListener("click", () => {
  let alpha = "qwertyuiop[asdfghjkl;zxcvbnm"
  let num = "1234567890"
  let spe = "!@#$%^&*()|}{P:?><"
  let cap = "ASDFGHJKL;POIUYTREWQZXCVBNM"
  let all = alpha + num + spe + cap
  let password = ""
  password[0] = alpha[Math.floor(Math.random() * alpha.length)]
  password[1] = num[Math.floor(Math.random() * num.length)]
  password[2] = spe[Math.floor(Math.random() * spe.length)]
  password[3] = cap[Math.floor(Math.random() * cap.length)]
  for (let i = 4; i < 14; i++) {
    password += all[Math.floor(Math.random() * all.length)]
  }
  pass.innerText = password
})
let submit = document.getElementById("submit")
let main = document.getElementById("main2")
submit.addEventListener("click", () => {

  main.innerHTML = `<div id="links"><a href="recipes.html">DO YOU WANNA EXPERIENCE THE RECIIPE WEBSITE CLICK THIS</a>
<a href="cardproject.html">DO YOU WANNA EXPERIENCE THE E-COMMERCE WEBSITE CLICK THIS</a></div>
`
  task = async () => {
    console.log("hi");
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    let data2 = await data.json()
    console.log(data2);
    main.innerHTML=`
<div id="Enter">
    <input type="text" name="" id="inp" placeholder="Enter the user name u want to search">
</div>`
    let user=document.getElementById("inp")
    let user1=InputDeviceInfo.value
    let data3=data2.filter((d)=>d.username.includes(user)).map((da)=>{
      let {id,name,username,email}=da
      main.innerHTML=`<div id="card">
    <p>${id}</p>
    <p>${name}</p>
    <p>${username}</p>
    <p>${email}</p>
</div>`
    })
  
  };

  task()
})