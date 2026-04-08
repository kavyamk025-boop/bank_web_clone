let main=document.getElementsByTagName("div")
main[0].style.backgroundColor="rgb(38, 149, 219)"
main[0].style.margin="100px"
main[0].style.borderRadius="30px"
main[0].style.gap="50px"
main[1].style.margin="20px"
main[1].style.display="flex"
main[1].style.borderRadius="30px"
main[1].style.justifyContent="space-around"
// main[1].style.border=" 2px solid rgb(181, 12, 117) "
let a=document.getElementsByTagName("a")
a[0].style.margin="10px"
a[0].style.textDecoration="none"
a[0].style.fontSize="30px"
a[0].style.marginLeft="350px"

// a[1].style.margin="10px"
// a[1].style.textDecoration="none"
// a[1].style.fontSize="30px"

// a[2].style.margin="10px"
// a[2].style.textDecoration="none"
// a[2].style.fontSize="30px"

main[2].style.display="flex"
main[2].style.flexDirection="column"
main[2].style.marginLeft="200px"
// main[2].style.backgroundColor="rgb(148, 191, 218)"

main[2].style.marginBottom="200px"

main[2].style.marginRight="200px"

main[2].style.marginTop="50px"
main[2].style.gap="20px"


let inp=document.getElementsByTagName("input")[0]
inp.style.height="50px"
inp.style.borderRadius="20px"
inp.style.color="black"
inp.style.backgroundColor="rgb(208, 187, 216)"
inp.style.border="2px solid white"
inp.style.textAlign="center"
inp.style.fontSize="20px"
inp.style.width="500px"
inp.style.marginLeft="25%"



let inp1=document.getElementsByTagName("input")[1]
inp1.style.height="50px"
inp1.style.borderRadius="20px"
inp1.style.color="black"
inp1.style.backgroundColor="rgb(208, 187, 216)"
inp1.style.border="2px solid white"
inp1.style.textAlign="center"
inp1.style.fontSize="20px"
inp1.style.width="500px"
inp1.style.marginLeft="25%"



let inp2=document.getElementsByTagName("input")[2]
inp2.style.height="50px"
inp2.style.borderRadius="20px"
inp2.style.color="black"
inp2.style.backgroundColor="rgb(208, 187, 216)"
inp2.style.border="2px solid white"
inp2.style.textAlign="center"
inp2.style.fontSize="20px"
inp2.style.width="500px"
inp2.style.marginLeft="25%"

let inp3=document.getElementsByTagName("input")[3]
inp3.style.height="50px"
inp3.style.borderRadius="20px"
inp3.style.color="black"
inp3.style.backgroundColor="rgb(208, 187, 216)"
inp3.style.border="2px solid white"
inp3.style.textAlign="center"
inp3.style.fontSize="20px"
inp3.style.width="500px"
inp3.style.marginLeft="25%"


let btn=document.getElementsByTagName("button")[0]
btn.style.height="50px"
btn.style.width="200px"
btn.style.marginLeft="40%"
btn.style.border="1px solid white"
btn.style.borderRadius="30px"
btn.style.backgroundColor="Green"
btn.style.marginBottom="50px"




let card=document.getElementsByClassName("card")[0]
card.style.backgroundColor="purple"
card.style.borderRadius="20px"
card.style.marginLeft="200px"
card.style.marginBottom="200px"
card.style.marginRight="200px"

card.style.padding="50px"
card.style.color="white"
// let p=document.getElementsByTagName("p")[0]
// p.style.height="200px"


btn.addEventListener("click",()=>{

let user=confirm("WOULD YOU LIKE TO SUBMIT")

if (user==true){if(inp3.value==""||inp.value=="" || inp1.value=="" || inp2.value=="" ){
    alert("Enter the values")
}
else if(inp3.value.length!=10){
    alert("Enter 10 digit Number only")
}


else{
    
    card.innerHTML+=`<div class="card"><h1>FULL NAME: <span>${inp.value+inp1.value}</span>  </h1>
<h1>EMAIL:    
    <span>${inp2.value}</span>
</h1>
<h1>  CONTACT:  <span>${inp3.value}</span>  </h1>

<div><p>THNK YOU FOR CONTACTING US,
    We will appreciate your time and Effort We will contact u soon.
</p></div> </div>



`
}
}

else{
    alert("YOU DID CANCEL")
}
}
)



