let i4 = document.getElementsByTagName("input")[3]
let btn = document.getElementsByTagName("button")[0]
let i1 = document.getElementsByTagName("input")[0]
let i2 = document.getElementsByTagName("input")[1]
let i3 = document.getElementsByTagName("input")[2]
// let i1=document.getElementsByTagName("input")[0]
let e = document.getElementsByTagName("span")[0]
let e1 = document.getElementsByTagName("span")[1]
let e2 = document.getElementsByTagName("span")[2]
let card1 = document.getElementsByClassName("card")[0]

btn.addEventListener("click", () => {
    let n = prompt("Do you want to submit").toLowerCase()

    if (n == "yes") {
        if ((i4.value).length != 10 || i1.value == "" || i2.value == "" || i3.value == "") {
            alert("Enter proper input number")
        }

        else {
            card1.innerHTML += `<div><h1>Full name:   <span class="e">/${i1.value + i2.value}</span></h1>
    <h1>Email is:  <span class="e">${i2.value}</span></h1>
    <h1>Phone Number is:   <span class="e"> ${i4.value}</span></h1></div>`


        }
    }
    else {
        alert("Cancelled")
    }

})




