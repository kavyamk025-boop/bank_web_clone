// let otpbtn=document.getElementById("otpgen")
// let otp=document.getElementById("otp")

// otpbtn.addEventListener("click",()=>{
//     total=""
//    for (let i=0;i<5;i++){
//     total+=Math.floor(Math.random()*10)+" "


//    }
// otp.innerText=total   


// })

























// let btn=document.getElementById("generate")
// let pass=document.getElementById("pass")
// btn.addEventListener("click",()=>{
//      let len=14
//      let password=""
//      let alpha="QWERTYUIOPASDFGHJKLZXCVBNM"
//      let lower="qwertyuiopasdfghjklzxcvbnm"
//      let num="1234567890"
//      let spe="!@#$%^&*()<>?:|"
//      let l=[alpha,lower,num,spe]
//      for(let i=0;i<len;i++){
//    rand=Math.floor(Math.random()*l.length)
//    let select=l[rand]

//    rand2=Math.floor(Math.random()*select.length)
//    password+=select[rand2]


//      }

//      pass.innerText=password
// })



let i=document.getElementsByTagName("i")[0]
i.style.height="30px"
i.style.fontSize="30px"
i.style.borderRadius="30px"


let passbtn = document.getElementById("generate")
let pass = document.getElementById("pass")
let copy = document.getElementById("copy")

let upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
let lower = "qwertyuiopasdfghjklzxcvbnm"
let num = "1234567890"
let spe = "!@#$%^&*()<>?:{}[]\/.;"
let all = upper + lower + num + spe
let pl = 14
let actual = ""
const generate = () => {
    let password = ""


    for (let i = 0; i < 10; i++) {
        password += all[Math.floor(Math.random() * 10)]
    }


    if (password.length != 14) {

        password += lower[Math.floor(Math.random() * 10)]
        password += upper[Math.floor(Math.random() * 10)]
        password += num[Math.floor(Math.random() * 10)]
        password += spe[Math.floor(Math.random() * 10)]

    }

    actual = password
    pass.value = password

}

copy.addEventListener("click",()=>{
    
// navigator.clipboard.writeText(text)
pass.select()
document.execCommand("copy")
})

    


