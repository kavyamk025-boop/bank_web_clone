// //conditional statements
// if(true){
//     console.log("done")//done
// }
// else{
//     console.log("not done")
// }

// if (false){
//     console.log("done..")
// }
// else{
//     console.log("not done...") //not done
// }
// if(null){
//     console.log("done..")
// }
// else{
//     console.log("not done...") //not done
// }
// if (undefined){
//     console.log("done..")
// }
// else{
//     console.log("not done...")
// }
// if (""){
//     console.log("done..")
// }
// else{
//     console.log("not done...")
// }
// if (" "){
//     console.log("done..")
// }
// else{
//     console.log("not done...")
// }
// if (NaN){
//     console.log("done..")
// }
// else{
//     console.log("not done...")
// }

// //eligible to vote or not
// let user1=Number(prompt("enter age:"))
// if  (user1>=18){
//      console.log("eligible to vote")
// }
// else{
//     console.log("not eligible to vote")
// }

// //eligible to drive or not
// let user1=Number(prompt("enter age:"))
// if  (user1>=18){
//      console.log("eligible to drive")
// }
// else{
//     console.log("not eligible to drive")
// }

// //+ve or -ve number
// let n=Number(prompt("enter number:"))
// if  (n>=0){
//      console.log("+ve no")
// }
// else{
//     console.log("-ve no")
// }

// //find biggest number
// let n1=Number(prompt("enter number"))
// let n2=Number(prompt("enter number"))
// if  (n1>n2){
//      console.log("n1 is greater",n1)
// }
// else{
//     console.log("n2 is greater",n2)
// }

// //male or female
// let gender=(prompt("enter gender:")).toLowerCase()
// if  (gender==="m" || gender==="male"){
//      console.log("male")
// }
// else{
//     console.log("female")
// }

// //whether number is zero or not
// let n=Number(prompt("enter number:"))
// if  (n===0){
//      console.log("number is zero")
// }
// else{
//     console.log("non zero number")
// }

// //check whether number is +ve,-ve and zero
// let n=Number(prompt("enter number:"))
// if  (n>0){
//      console.log("+ve no")
// }
// else if(n===0){
//     console.log("number is zero")
// }
// else{
//     console.log("-ve no")
// }

// //gender - male female others
// let gender=(prompt("enter gender:")).toLowerCase()
// if  (gender==="m" || gender==="male"){
//      console.log("male")
// }

// else if (gender==="f" || gender==="female"){
//     console.log("female")
// }

// else if (gender==="o" || gender==="others"){
//     console.log("others")
// }
// else{
//     alert("invalid input")
// }

// // eligible to vote  or not (condition: 0<age<120 for voting)
// let user1=Number(prompt("enter age:"))
// if(user1<=0 || user1>=120){
//     console.log("provide correct input")
// }
// else if(user1>=18){
//      console.log("eligible to vote")
// }
// else if (user1<18){
//     console.log("not eligible to vote")
// }
// else{
//     alert("invalid input")
// }

// //bank balance
// let user=(prompt("enter option:")).toLowerCase()
// if  (user==="balance" || user==="b"){
//      console.log("you have selected for balance")
// }

// else if (user==="d" || user==="deposit"){
//     console.log("you have selected for deposit")
// }

// else if (user==="w" || user==="withdraw"){
//     console.log("you have selected for withdraw")
// }
// else{
//     alert("invalid input")
// }

// //input is string or number
// let n=prompt("give an input")
// if(isNaN(n)){
//     console.log("is string",n)
// }
// else{
//     console.log("is number",n)
// }

// let n=prompt("give an input")
// if(n-1){
//     console.log("is number")
// }
// else{
//     console.log("is string")
// }

// let n=Number(prompt("give an input"))
// if (n%3==0){
//     console.log("divisible by 3")
//  }
// else{
//     console.log("not divisible by 3")
//  }

//  let n1=Number(prompt("give an input"))
// if (n1%5==0){
//     console.log("divisible by 5",n1)
//  }
// else{
//     console.log("not divisible by 5",n1)
//  }

// let n2=Number(prompt("give an input"))
// if (n2%5==0 && n2%3==0){
//     console.log("divisible by both 3 and 5",n2)
//  }
// else if (n2%5==0){
//     console.log(" divisible by 5",n2)
//  }
// else if (n2%3==0){
//     console.log(" divisible by 3",n2)
//  }
// else{
//     console.log("number is either divisible by 3 or by 5 ")
// }

// let t=Number(prompt("enter time"))
// if (t<=0 || t>24){
//     alert("invalid input")
// }
// else if (t>=12){
//     console.log("it is PM")
// }
// else {
//     console.log("it is AM")
// }

// let days=["sunday","monday","tuesday","wednesday","friday","saturday"]
// let date=new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// let day=date.getDay()

// if(day==="1"){
//     console.log(days[day])
// }
// else if(day==="2"){
//     console.log(days[day])
// }
// else if(day==="3"){
//     console.log(days[day])
// }
// else if(day==="4"){
//     console.log(days[day])
// }
// else if(day==="5"){
//     console.log(days[day])
// }
// else if(day==="6"){
//     console.log(days[day])
// }
// else {
//     console.log(days[day])
// }

// let months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

// let m=new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(m.getDay())
// let month=date.getMonth()
// if(month==="0"){
//     console.log(months[month])
// }
// else if(month==="1"){
//     console.log(months[month])
// }
// else if(month==="2"){
//     console.log(months[month])
// }
// else if(month==="3"){
//     console.log(months[month])
// }
// else if(month==="4"){
//     console.log(months[month])
// }
// else if(month==="5"){
//     console.log(months[month])
// }
// else if(month==="6"){
//     console.log(months[month])
// }
// else if(month==="7"){
//     console.log(months[month])
// }
// else if(month==="8"){
//     console.log(months[month])
// }
// else if(month==="9"){
//     console.log(months[month])
// }

// else {
//     console.log(months[month])
// }

// let std_name = prompt("enter name: ");
// let passmarks = 35;

// let std_m1 = Number(prompt("python: "));
// let std_m2 = Number(prompt("java: "));
// let std_m3 = Number(prompt(" c : "));
// let std_m4 = Number(prompt(" c++ : "));
// let std_m5 = Number(prompt(" js : "));

// // Changed && to || and fixed the range logic
// if (std_m1 < 0 || std_m1 > 100 ||
//     std_m2 < 0 || std_m2 > 100 ||
//     std_m3 < 0 || std_m3 > 100 ||
//     std_m4 < 0 || std_m4 > 100 ||
//     std_m5 < 0 || std_m5 > 100) {
//     alert("Invalid input! Marks must be between 0 and 100.");
// }
// else if (std_m1 >= passmarks && std_m2 >= passmarks && std_m3 >= passmarks && std_m4 >= passmarks && std_m5 >= passmarks) {
//     console.log(std_name + ": Pass");
// }
// else {
//     console.log(std_name + ": Fail");
// }
// let std_name = prompt("enter name: ");
// let passmarks = 35;

// // Function to check if a mark is valid
// function isInvalid(m) {
//     return m < 0 || m > 100 || isNaN(m);
// }

// let m1 = Number(prompt("python: "));
// if (isInvalid(m1)) { alert("invalid input"); }
// else {
//     let m2 = Number(prompt("java: "));
//     if (isInvalid(m2)) { alert("invalid input"); }
//     else {
//         let m3 = Number(prompt("c: "));
//         if (isInvalid(m3)) { alert("invalid input"); }
//         else {
//             let m4 = Number(prompt("c++: "));
//             if (isInvalid(m4)) { alert("invalid input"); }
//             else {
//                 let m5 = Number(prompt("js: "));
//                 if (isInvalid(m5)) { alert("invalid input"); }
//                 else {
//                     // All inputs are valid, now check pass/fail
//                     if (m1 >= passmarks && m2 >= passmarks && m3 >= passmarks && m4 >= passmarks && m5 >= passmarks) {
//                         console.log(std_name + ": pass");
//                     } else {
//                         console.log(std_name + ": fail");
//                     }
//                 }
//             }
//         }
//     }
// }

//nested loops
//1.
//  let age =Number(prompt("enter age"))
//  if(age>120 || age<0){
//     alert("invalid input")
//  }
//  else if (age>=18){
//     console.log("eligible to vote")
//     let gender=(prompt("enter the gender")).toLowerCase()
//     if (gender==="m"||gender==="male"){
//         console.log("stand in male line")
//     }
//     else if (gender==="f"||gender==="female"){
//         console.log("stand in female line")
//     }
//     else if (gender==="o"||gender==="other"){
//         console.log("stand in other line")
//     }
//     else{
//         alert("please provide proper input")
//     }
//  }
//  else if(age<18){
//     console.log("not eligible to vote")
//  }
//  else{
//     alert("please provide proper input")
//  }

// //2.
// let item1=Number(prompt("enter cost of item:"))
// let item2=Number(prompt("enter cost of item:"))
// let item3=Number(prompt("enter cost of item:"))
// let total_purchase=item1+item2+item3

// if (total_purchase<=0 ){
//     alert("invalid")
// }
// else if (total_purchase>=5000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(5/100))))
// }
// else if (total_purchase>=6000){
//     console.log("you'll get 6% discount",(total_purchase-(total_purchase*(6/100))))
// }
// else if (total_purchase>=7000){
//     console.log("you'll get 7% discount",(total_purchase-(total_purchase*(7/100))))
// }
// else if (total_purchase>=8000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(8/100))))
// }else if (total_purchase>=9000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(9/100))))
// }else if (total_purchase>=10000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(10/100))))
// }
// else{
//     alert("invalid")
// }

//3.

// let std_name = prompt("enter name: ");
// let passmarks = 35;
// let distinction = 85;
// let first_class=70;
// let percentage;

// function isInvalid(m) {
//     return  m > 100 || isNaN(m) ;
// }
// function fail(m){
//     return m<35;
// }

// let m1 = Number(prompt("python: "));
// if (isInvalid(m1)||fail(m1)) { alert("invalid input");
//  }
// else {
//     let m2 = Number(prompt("java: "));
//     if (isInvalid(m2)||fail(m2)) { alert("invalid input"); }
//     else {
//         let m3 = Number(prompt("c: "));
//         if (isInvalid(m3)||fail(m3)) { alert("invalid input"); }
//         else {
//             let m4 = Number(prompt("c++: "));
//             if (isInvalid(m4)||fail(m4)) { alert("invalid input"); }
//             else {
//                 let m5 = Number(prompt("js: "));
//                 if (isInvalid(m5)||fail(m5)) { alert("invalid input"); }
//                 else {
//                     // All inputs are valid, now check pass/fail
//                     if (m1 >= distinction && m2 >= distinction && m3 >= distinction && m4 >= distinction && m5 >= distinction){
//                          console.log(std_name + ": distinction");
//                     }
//                     else if (m1 >= first_class && m2 >= first_class && m3 >= first_class && m4 >= first_class && m5 >= first_class){
//                          console.log(std_name + ": first class");
//                     }
//                    else if (m1 >= passmarks && m2 >= passmarks && m3 >= passmarks && m4 >= passmarks && m5 >= passmarks) {
//                         console.log(std_name + ": pass");
//                     }
//                     else {
//                         console.log(std_name + ": fail");
//                     }
//                 }
//             }
//         }
//     }
// }

//3.
// let passmarks = 35;
// let distinction = 85;
// let first_class = 70;
// let m1 = Number(prompt("python: "));
// let m2 = Number(prompt("java: "));
// let m3 = Number(prompt("c: "));
// let m4 = Number(prompt("c++: "));
// let m5 = Number(prompt("js: "));

// let percentage = (m1 + m2 + m3 + m4 + m5) / 5;

// if (percentage > 100 || isNaN(percentage)) {
//   alert("enter proper marks");
// } else {
//   if (
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction
//   ) {
//     console.log("distinction");
//   } else if (
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class
//   ) {
//     console.log("first class");
//   } else if (
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks
//   ) {
//     console.log("pass");
//   } else if (
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks
//   ) {
//     console.log("fail");
//   }
// }

// //elctrical units
// let units=Number(prompt("enter number of units consumed:"))
// let total=0
// if (units<0||isNaN(units)){
//     alert("invalid input")
// }
// else{
//     if(units>400){
//         total+=(units-400)*10
//         units=400
//     }   
//     if(units>200){
//         total+=(units-200)*8
//         units=200
//     }
//     if(units>100){
//         total+=(units-100)*6
//         units=100
//     }
//     if(units>0){
//         total+=(units-0)*4
//     }
//     else{
//         alert("invalid input")
//     }       
// }
// console.log(total)

//11-03-2026
// //eligible to vote or not
// let user1=Number(prompt("enter age:"))
// if  (user1>=18){
//      console.log("eligible to vote")
// }
// else{
//     console.log("not eligible to vote")
// }

// //eligible to drive or not
// let user1=Number(prompt("enter age:"))
// if  (user1>=18){
//      console.log("eligible to drive")
// }
// else{
//     console.log("not eligible to drive")
// }

// //+ve or -ve number
// let n=Number(prompt("enter number:"))
// if  (n>=0){
//      console.log("+ve no")
// }
// else{
//     console.log("-ve no")
// }

// //find biggest number
// let n1=Number(prompt("enter number"))
// let n2=Number(prompt("enter number"))
// if  (n1>n2){
//      console.log("n1 is greater",n1)
// }
// else{
//     console.log("n2 is greater",n2)
// }

// //male or female
// let gender=(prompt("enter gender:")).toLowerCase()
// if  (gender==="m" || gender==="male"){
//      console.log("male")
// }
// else{
//     console.log("female")
// }

// //whether number is zero or not
// let n=Number(prompt("enter number:"))
// if  (n===0){
//      console.log("number is zero")
// }
// else{
//     console.log("non zero number")
// }

// //check whether number is +ve,-ve and zero
// let n=Number(prompt("enter number:"))
// if  (n>0){
//      console.log("+ve no")
// }
// else if(n===0){
//     console.log("number is zero")
// }
// else{
//     console.log("-ve no")
// }

// //gender - male female others
// let gender=(prompt("enter gender:")).toLowerCase()
// if  (gender==="m" || gender==="male"){
//      console.log("male")
// }

// else if (gender==="f" || gender==="female"){
//     console.log("female")
// }

// else if (gender==="o" || gender==="others"){
//     console.log("others")
// }
// else{
//     alert("invalid input")
// }

// // eligible to vote  or not (condition: 0<age<120 for voting)
// let user1=Number(prompt("enter age:"))
// if(user1<=0 || user1>=120){
//     console.log("provide correct input")
// }
// else if(user1>=18){
//      console.log("eligible to vote")
// }
// else if (user1<18){
//     console.log("not eligible to vote")
// }
// else{
//     alert("invalid input")
// }

// //bank balance
// let user=(prompt("enter option:")).toLowerCase()
// if  (user==="balance" || user==="b"){
//      console.log("you have selected for balance")
// }

// else if (user==="d" || user==="deposit"){
//     console.log("you have selected for deposit")
// }

// else if (user==="w" || user==="withdraw"){
//     console.log("you have selected for withdraw")
// }
// else{
//     alert("invalid input")
// }

// //input is string or number
// let n=prompt("give an input")
// if(isNaN(n)){
//     console.log("is string",n)
// }
// else{
//     console.log("is number",n)
// }

// let n=prompt("give an input")
// if(n-1){
//     console.log("is number")
// }
// else{
//     console.log("is string")
// }

// let n=Number(prompt("give an input"))
// if (n%3==0){
//     console.log("divisible by 3")
//  }
// else{
//     console.log("not divisible by 3")
//  }

//  let n1=Number(prompt("give an input"))
// if (n1%5==0){
//     console.log("divisible by 5",n1)
//  }
// else{
//     console.log("not divisible by 5",n1)
//  }



// let n2=Number(prompt("give an input"))
// if (n2%5==0 && n2%3==0){
//     console.log("divisible by both 3 and 5",n2)
//  }
// else if (n2%5==0){
//     console.log(" divisible by 5",n2)
//  }
// else if (n2%3==0){
//     console.log(" divisible by 3",n2)
//  }
// else{
//     console.log("number is either divisible by 3 or by 5 ")
// }

// let t=Number(prompt("enter time"))
// if (t<=0 || t>24){
//     alert("invalid input")
// }
// else if (t>=12){
//     console.log("it is PM")
// }
// else {
//     console.log("it is AM")
// }

// let d=new Date()
// let hrs=d.getHours()
// console.log(hrs)
// if (d>=5 || d<12){
//   console.log("morning")
// }
// else if(d>=12||d<=17){
//   console.log("afternoon")
// }
// else if(d>17 || d<=20){
//   console.log("evening")
// }
// else if(d>20 || d<=24){
//   console.log("night")
// }
// else{
//   alert("invalid")
// }


// let days=["sunday","monday","tuesday","wednesday","friday","saturday"]
// let date=new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// let day=date.getDay()

// if(day==="1"){
//     console.log(days[day])
// }
// else if(day==="2"){
//     console.log(days[day])
// }
// else if(day==="3"){
//     console.log(days[day])
// }
// else if(day==="4"){
//     console.log(days[day])
// }
// else if(day==="5"){
//     console.log(days[day])
// }
// else if(day==="6"){
//     console.log(days[day])
// }
// else {
//     console.log(days[day])
// }

// let months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

// let m=new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(m.getDay())
// let month=date.getMonth()
// if(month==="0"){
//     console.log(months[month])
// }
// else if(month==="1"){
//     console.log(months[month])
// }
// else if(month==="2"){
//     console.log(months[month])
// }
// else if(month==="3"){
//     console.log(months[month])
// }
// else if(month==="4"){
//     console.log(months[month])
// }
// else if(month==="5"){
//     console.log(months[month])
// }
// else if(month==="6"){
//     console.log(months[month])
// }
// else if(month==="7"){
//     console.log(months[month])
// }
// else if(month==="8"){
//     console.log(months[month])
// }
// else if(month==="9"){
//     console.log(months[month])
// }

// else {
//     console.log(months[month])
// }

// let std_name = prompt("enter name: ");
// let passmarks = 35;

// let std_m1 = Number(prompt("python: "));
// let std_m2 = Number(prompt("java: "));
// let std_m3 = Number(prompt(" c : "));
// let std_m4 = Number(prompt(" c++ : "));
// let std_m5 = Number(prompt(" js : "));

// // Changed && to || and fixed the range logic
// if (std_m1 < 0 || std_m1 > 100 ||
//     std_m2 < 0 || std_m2 > 100 ||
//     std_m3 < 0 || std_m3 > 100 ||
//     std_m4 < 0 || std_m4 > 100 ||
//     std_m5 < 0 || std_m5 > 100) {
//     alert("Invalid input! Marks must be between 0 and 100.");
// }
// else if (std_m1 >= passmarks && std_m2 >= passmarks && std_m3 >= passmarks && std_m4 >= passmarks && std_m5 >= passmarks) {
//     console.log(std_name + ": Pass");
// }
// else {
//     console.log(std_name + ": Fail");
// }
// let std_name = prompt("enter name: ");
// let passmarks = 35;

// // Function to check if a mark is valid
// function isInvalid(m) {
//     return m < 0 || m > 100 || isNaN(m);
// }

// let m1 = Number(prompt("python: "));
// if (isInvalid(m1)) { alert("invalid input"); }
// else {
//     let m2 = Number(prompt("java: "));
//     if (isInvalid(m2)) { alert("invalid input"); }
//     else {
//         let m3 = Number(prompt("c: "));
//         if (isInvalid(m3)) { alert("invalid input"); }
//         else {
//             let m4 = Number(prompt("c++: "));
//             if (isInvalid(m4)) { alert("invalid input"); }
//             else {
//                 let m5 = Number(prompt("js: "));
//                 if (isInvalid(m5)) { alert("invalid input"); }
//                 else {
//                     // All inputs are valid, now check pass/fail
//                     if (m1 >= passmarks && m2 >= passmarks && m3 >= passmarks && m4 >= passmarks && m5 >= passmarks) {
//                         console.log(std_name + ": pass");
//                     } else {
//                         console.log(std_name + ": fail");
//                     }
//                 }
//             }
//         }
//     }
// }

//nested loops
//1.
//  let age =Number(prompt("enter age"))
//  if(age>120 || age<0){
//     alert("invalid input")
//  }
//  else if (age>=18){
//     console.log("eligible to vote")
//     let gender=(prompt("enter the gender")).toLowerCase()
//     if (gender==="m"||gender==="male"){
//         console.log("stand in male line")
//     }
//     else if (gender==="f"||gender==="female"){
//         console.log("stand in female line")
//     }
//     else if (gender==="o"||gender==="other"){
//         console.log("stand in other line")
//     }
//     else{
//         alert("please provide proper input")
//     }
//  }
//  else if(age<18){
//     console.log("not eligible to vote")
//  }
//  else{
//     alert("please provide proper input")
//  }

// //2.
// let item1=Number(prompt("enter cost of item:"))
// let item2=Number(prompt("enter cost of item:"))
// let item3=Number(prompt("enter cost of item:"))
// let total_purchase=item1+item2+item3

// if (total_purchase<=0 ){
//     alert("invalid")
// }
// else if (total_purchase>=5000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(5/100))))
// }
// else if (total_purchase>=6000){
//     console.log("you'll get 6% discount",(total_purchase-(total_purchase*(6/100))))
// }
// else if (total_purchase>=7000){
//     console.log("you'll get 7% discount",(total_purchase-(total_purchase*(7/100))))
// }
// else if (total_purchase>=8000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(8/100))))
// }else if (total_purchase>=9000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(9/100))))
// }else if (total_purchase>=10000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(10/100))))
// }
// else{
//     alert("invalid")
// }

//3.

// let std_name = prompt("enter name: ");
// let passmarks = 35;
// let distinction = 85;
// let first_class=70;
// let percentage;

// function isInvalid(m) {
//     return  m > 100 || isNaN(m) ;
// }
// function fail(m){
//     return m<35;
// }

// let m1 = Number(prompt("python: "));
// if (isInvalid(m1)||fail(m1)) { alert("invalid input");
//  }
// else {
//     let m2 = Number(prompt("java: "));
//     if (isInvalid(m2)||fail(m2)) { alert("invalid input"); }
//     else {
//         let m3 = Number(prompt("c: "));
//         if (isInvalid(m3)||fail(m3)) { alert("invalid input"); }
//         else {
//             let m4 = Number(prompt("c++: "));
//             if (isInvalid(m4)||fail(m4)) { alert("invalid input"); }
//             else {
//                 let m5 = Number(prompt("js: "));
//                 if (isInvalid(m5)||fail(m5)) { alert("invalid input"); }
//                 else {
//                     // All inputs are valid, now check pass/fail
//                     if (m1 >= distinction && m2 >= distinction && m3 >= distinction && m4 >= distinction && m5 >= distinction){
//                          console.log(std_name + ": distinction");
//                     }
//                     else if (m1 >= first_class && m2 >= first_class && m3 >= first_class && m4 >= first_class && m5 >= first_class){
//                          console.log(std_name + ": first class");
//                     }
//                    else if (m1 >= passmarks && m2 >= passmarks && m3 >= passmarks && m4 >= passmarks && m5 >= passmarks) {
//                         console.log(std_name + ": pass");
//                     }
//                     else {
//                         console.log(std_name + ": fail");
//                     }
//                 }
//             }
//         }
//     }
// }

//3.
// let passmarks = 35;
// let distinction = 85;
// let first_class = 70;
// let m1 = Number(prompt("python: "));
// let m2 = Number(prompt("java: "));
// let m3 = Number(prompt("c: "));
// let m4 = Number(prompt("c++: "));
// let m5 = Number(prompt("js: "));

// let percentage = (m1 + m2 + m3 + m4 + m5) / 5;

// if (percentage > 100 || isNaN(percentage)) {
//   alert("enter proper marks");
// } else {
//   if (
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction
//   ) {
//     console.log("distinction");
//   } else if (
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class
//   ) {
//     console.log("first class");
//   } else if (
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks
//   ) {
//     console.log("pass");
//   } else if (
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks
//   ) {
//     console.log("fail");
//   }
// }

// //elctrical units
// let units=Number(prompt("enter number of units consumed:"))
// let total=0
// if (units<0||isNaN(units)){
//     alert("invalid input")
// }
// else{
//     if(units>400){
//         total+=(units-400)*10
//         units=400
//     }
//     if(units>200){
//         total+=(units-200)*8
//         units=200
//     }
//     if(units>100){
//         total+=(units-100)*6
//         units=100
//     }
//     if(units>0){
//         total+=(units-0)*4
//     }
//     else{
//         alert("invalid input")
//     }
// }
// console.log(total)

//11-03-2026
//1. write a program to check whether given phone is valid or not.
// let no=prompt("enter mobile number:")
// if(no.length<10 || no.length>10 || isNaN(no)){
//     alert("invalid contact number,please provide correct input")
// }
// else{
//     console.log("valid contact number:",no)
// }

//2.even or odd
//3.pm or am
//4.to check current time is morning,afternoon,evening,night
// let date=new Date()
// let d=date.getHours()
// console.log(d)
// if(d>=(5) && d<12){
//     console.log("morning")
// }
// else if(d>=12 && (d<17)){
//     console.log("afternoon")
// }
// else if(d>=17 && (d<20)){
//     console.log("evening")
// }
// else if(d>=20 && (d<=23)){
//     console.log("night")
// }
// else{
//     console.log("provide proper input")
// }

//5.user provide input or not
// let input=prompt("enter input:")
// if(input.length>0){
//     console.log(input)
// }
// else{
//     alert("invalid")
// }

//6.banking 

// console.log("WELCOME TO BANKING");
// let balance = 10000;
// let again=true;
// while(again){
// let option = prompt("select option:1.Deposit 2.Withdraw 3.Balance",).toLowerCase();
// if (option === "d" || option === "deposit" || option === "1") {
//   let amt = Number(prompt("enter deposit amount: "));
//   if (isNaN(amt) || amt < 0) {
//     alert("provide proper input");
//   } else {
//     balance += amt;
//     console.log("deposited amount is:", amt);
//     console.log("balance is ", balance);
//   }
// } else if (option === "w" || option === "withdraw" || option === "2") {
//   let amt = Number(prompt("enter withdrawl amount: "));
//   if (isNaN(amt) || amt < 0) {
//     alert("provide proper input");
//   } else {
//     if (amt > balance) {
//       alert("insufficient balance");
//     } else {
//       balance -= amt;
//       console.log("withdrawl amount is:", amt);
//       console.log("balance is ", balance);
//     }
//   }
// } else if (option === "b" || option === "balance" || option === "3") {
//   console.log("balance is ", balance);
// } else {
//   alert("invalid input");
// }
// again=confirm("do you want to continue?");
// }
// console.log("thanks for banking");


//12-03-2025
/*for(start;ensureDir;action){
    
  logic

}*/
// for(let i=1;i<=10;i++){
//   console.log(i)
// }
// /* 
//  output:
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  10*/
// for (let i=1;i<=100000;i++){
//   console.log(i)
// }

//if there is we dont declare action or end and action or start and end and action ----> this causes infinite loop

//write a program to print the numbers range from 1 to 10

// for(let i=1;i<=10;i++){
//   console.log(i)
// }
// console.log("--------------------------------------------------------------------------------------------------")
// //write a program to print a number range from 1 - 100
// for(let i=1;i<=100;i++){
//   console.log(i)
// }
// console.log("--------------------------------------------------------------------------------------------------")
// //write a program to print a number range from 50 - 75
// for(let i=50;i<=75;i++){
//   console.log(i)
// }

// //write a program to print multiples of 2 ranges from 1 - 100(without if condition)
// for(let i=2;i<=100;i+=2){
//   console.log(i)
// }

// //write a program to print multiples of 5 ranges from 0 - 100(without if condition)
// for(let i=5;i<=100;i+=5){
//   console.log(i)
// }
// //write a program to print multiples of 10 ranges from 0- 1000(without if condition)
// for(let i=10;i<=1000;i+=10){
//   console.log(i)
// }


// //write a program to print the number ranges from a and b given by the user
// let a=(prompt("enter number 1:"))
// let b=(prompt("enter number 2:"))
// if(isNaN(a) || isNaN(b)){
//   alert("invalid input")
// }
// else if(a<b){
//    for(let i=a;i<=b;i++){
//     console.log(i)
//    }
// }
// else{
//   alert("provide proper input")
// }

// //write a program to print the multiplication table as per user choice
// let x=(prompt("enter number 1:"))
// if(isNaN(x) || x<0){
//   alert("invalid input")
// }
// else {
//    for(let i=1;i<=10;i++){
//     console.log(`${x}*${i}=${x*i}`) //use back-tick
//    }
// }

// //write a program to print the multiplication table as per user choice range from a to b asper user given
// let a=(prompt("enter number 1:"))
// let b=(prompt("enter number 2:"))
// let x=(prompt("enter number :"))
// if(isNaN(x) || x<0 || isNaN(a) || isNaN(b)){
//   alert("invalid input")
// }
// if(a<b) {
//    for(let i=a;i<=b;i++){
//     console.log(`${x}*${i}=${x*i}`) //use back-tick
//    }
// }

// //eligible to vote or not
// let user1=Number(prompt("enter age:"))
// if  (user1>=18){
//      console.log("eligible to vote")
// }
// else{
//     console.log("not eligible to vote")
// }

// //eligible to drive or not
// let user1=Number(prompt("enter age:"))
// if  (user1>=18){
//      console.log("eligible to drive")
// }
// else{
//     console.log("not eligible to drive")
// }

// //+ve or -ve number
// let n=Number(prompt("enter number:"))
// if  (n>=0){
//      console.log("+ve no")
// }
// else{
//     console.log("-ve no")
// }

// //find biggest number
// let n1=Number(prompt("enter number"))
// let n2=Number(prompt("enter number"))
// if  (n1>n2){
//      console.log("n1 is greater",n1)
// }
// else{
//     console.log("n2 is greater",n2)
// }

// //male or female
// let gender=(prompt("enter gender:")).toLowerCase()
// if  (gender==="m" || gender==="male"){
//      console.log("male")
// }
// else{
//     console.log("female")
// }

// //whether number is zero or not
// let n=Number(prompt("enter number:"))
// if  (n===0){
//      console.log("number is zero")
// }
// else{
//     console.log("non zero number")
// }

// //check whether number is +ve,-ve and zero
// let n=Number(prompt("enter number:"))
// if  (n>0){
//      console.log("+ve no")
// }
// else if(n===0){
//     console.log("number is zero")
// }
// else{
//     console.log("-ve no")
// }

// //gender - male female others
// let gender=(prompt("enter gender:")).toLowerCase()
// if  (gender==="m" || gender==="male"){
//      console.log("male")
// }

// else if (gender==="f" || gender==="female"){
//     console.log("female")
// }

// else if (gender==="o" || gender==="others"){
//     console.log("others")
// }
// else{
//     alert("invalid input")
// }

// // eligible to vote  or not (condition: 0<age<120 for voting)
// let user1=Number(prompt("enter age:"))
// if(user1<=0 || user1>=120){
//     console.log("provide correct input")
// }
// else if(user1>=18){
//      console.log("eligible to vote")
// }
// else if (user1<18){
//     console.log("not eligible to vote")
// }
// else{
//     alert("invalid input")
// }

// //bank balance
// let user=(prompt("enter option:")).toLowerCase()
// if  (user==="balance" || user==="b"){
//      console.log("you have selected for balance")
// }

// else if (user==="d" || user==="deposit"){
//     console.log("you have selected for deposit")
// }

// else if (user==="w" || user==="withdraw"){
//     console.log("you have selected for withdraw")
// }
// else{
//     alert("invalid input")
// }

// //input is string or number
// let n=prompt("give an input")
// if(isNaN(n)){
//     console.log("is string",n)
// }
// else{
//     console.log("is number",n)
// }

// let n=prompt("give an input")
// if(n-1){
//     console.log("is number")
// }
// else{
//     console.log("is string")
// }

// let n=Number(prompt("give an input"))
// if (n%3==0){
//     console.log("divisible by 3")
//  }
// else{
//     console.log("not divisible by 3")
//  }

//  let n1=Number(prompt("give an input"))
// if (n1%5==0){
//     console.log("divisible by 5",n1)
//  }
// else{
//     console.log("not divisible by 5",n1)
//  }



// let n2=Number(prompt("give an input"))
// if (n2%5==0 && n2%3==0){
//     console.log("divisible by both 3 and 5",n2)
//  }
// else if (n2%5==0){
//     console.log(" divisible by 5",n2)
//  }
// else if (n2%3==0){
//     console.log(" divisible by 3",n2)
//  }
// else{
//     console.log("number is either divisible by 3 or by 5 ")
// }

// let t=Number(prompt("enter time"))
// if (t<=0 || t>24){
//     alert("invalid input")
// }
// else if (t>=12){
//     console.log("it is PM")
// }
// else {
//     console.log("it is AM")
// }

// let d=new Date()
// let hrs=d.getHours()
// console.log(hrs)
// if (d>=5 || d<12){
//   console.log("morning")
// }
// else if(d>=12||d<=17){
//   console.log("afternoon")
// }
// else if(d>17 || d<=20){
//   console.log("evening")
// }
// else if(d>20 || d<=24){
//   console.log("night")
// }
// else{
//   alert("invalid")
// }


// let days=["sunday","monday","tuesday","wednesday","friday","saturday"]
// let date=new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// let day=date.getDay()

// if(day==="1"){
//     console.log(days[day])
// }
// else if(day==="2"){
//     console.log(days[day])
// }
// else if(day==="3"){
//     console.log(days[day])
// }
// else if(day==="4"){
//     console.log(days[day])
// }
// else if(day==="5"){
//     console.log(days[day])
// }
// else if(day==="6"){
//     console.log(days[day])
// }
// else {
//     console.log(days[day])
// }

// let months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

// let m=new Date()
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(m.getDay())
// let month=date.getMonth()
// if(month==="0"){
//     console.log(months[month])
// }
// else if(month==="1"){
//     console.log(months[month])
// }
// else if(month==="2"){
//     console.log(months[month])
// }
// else if(month==="3"){
//     console.log(months[month])
// }
// else if(month==="4"){
//     console.log(months[month])
// }
// else if(month==="5"){
//     console.log(months[month])
// }
// else if(month==="6"){
//     console.log(months[month])
// }
// else if(month==="7"){
//     console.log(months[month])
// }
// else if(month==="8"){
//     console.log(months[month])
// }
// else if(month==="9"){
//     console.log(months[month])
// }

// else {
//     console.log(months[month])
// }

// let std_name = prompt("enter name: ");
// let passmarks = 35;

// let std_m1 = Number(prompt("python: "));
// let std_m2 = Number(prompt("java: "));
// let std_m3 = Number(prompt(" c : "));
// let std_m4 = Number(prompt(" c++ : "));
// let std_m5 = Number(prompt(" js : "));

// // Changed && to || and fixed the range logic
// if (std_m1 < 0 || std_m1 > 100 ||
//     std_m2 < 0 || std_m2 > 100 ||
//     std_m3 < 0 || std_m3 > 100 ||
//     std_m4 < 0 || std_m4 > 100 ||
//     std_m5 < 0 || std_m5 > 100) {
//     alert("Invalid input! Marks must be between 0 and 100.");
// }
// else if (std_m1 >= passmarks && std_m2 >= passmarks && std_m3 >= passmarks && std_m4 >= passmarks && std_m5 >= passmarks) {
//     console.log(std_name + ": Pass");
// }
// else {
//     console.log(std_name + ": Fail");
// }
// let std_name = prompt("enter name: ");
// let passmarks = 35;

// // Function to check if a mark is valid
// function isInvalid(m) {
//     return m < 0 || m > 100 || isNaN(m);
// }

// let m1 = Number(prompt("python: "));
// if (isInvalid(m1)) { alert("invalid input"); }
// else {
//     let m2 = Number(prompt("java: "));
//     if (isInvalid(m2)) { alert("invalid input"); }
//     else {
//         let m3 = Number(prompt("c: "));
//         if (isInvalid(m3)) { alert("invalid input"); }
//         else {
//             let m4 = Number(prompt("c++: "));
//             if (isInvalid(m4)) { alert("invalid input"); }
//             else {
//                 let m5 = Number(prompt("js: "));
//                 if (isInvalid(m5)) { alert("invalid input"); }
//                 else {
//                     // All inputs are valid, now check pass/fail
//                     if (m1 >= passmarks && m2 >= passmarks && m3 >= passmarks && m4 >= passmarks && m5 >= passmarks) {
//                         console.log(std_name + ": pass");
//                     } else {
//                         console.log(std_name + ": fail");
//                     }
//                 }
//             }
//         }
//     }
// }

//nested loops
//1.
//  let age =Number(prompt("enter age"))
//  if(age>120 || age<0){
//     alert("invalid input")
//  }
//  else if (age>=18){
//     console.log("eligible to vote")
//     let gender=(prompt("enter the gender")).toLowerCase()
//     if (gender==="m"||gender==="male"){
//         console.log("stand in male line")
//     }
//     else if (gender==="f"||gender==="female"){
//         console.log("stand in female line")
//     }
//     else if (gender==="o"||gender==="other"){
//         console.log("stand in other line")
//     }
//     else{
//         alert("please provide proper input")
//     }
//  }
//  else if(age<18){
//     console.log("not eligible to vote")
//  }
//  else{
//     alert("please provide proper input")
//  }

// //2.
// let item1=Number(prompt("enter cost of item:"))
// let item2=Number(prompt("enter cost of item:"))
// let item3=Number(prompt("enter cost of item:"))
// let total_purchase=item1+item2+item3

// if (total_purchase<=0 ){
//     alert("invalid")
// }
// else if (total_purchase>=5000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(5/100))))
// }
// else if (total_purchase>=6000){
//     console.log("you'll get 6% discount",(total_purchase-(total_purchase*(6/100))))
// }
// else if (total_purchase>=7000){
//     console.log("you'll get 7% discount",(total_purchase-(total_purchase*(7/100))))
// }
// else if (total_purchase>=8000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(8/100))))
// }else if (total_purchase>=9000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(9/100))))
// }else if (total_purchase>=10000){
//     console.log("you'll get 5% discount",(total_purchase-(total_purchase*(10/100))))
// }
// else{
//     alert("invalid")
// }

//3.

// let std_name = prompt("enter name: ");
// let passmarks = 35;
// let distinction = 85;
// let first_class=70;
// let percentage;

// function isInvalid(m) {
//     return  m > 100 || isNaN(m) ;
// }
// function fail(m){
//     return m<35;
// }

// let m1 = Number(prompt("python: "));
// if (isInvalid(m1)||fail(m1)) { alert("invalid input");
//  }
// else {
//     let m2 = Number(prompt("java: "));
//     if (isInvalid(m2)||fail(m2)) { alert("invalid input"); }
//     else {
//         let m3 = Number(prompt("c: "));
//         if (isInvalid(m3)||fail(m3)) { alert("invalid input"); }
//         else {
//             let m4 = Number(prompt("c++: "));
//             if (isInvalid(m4)||fail(m4)) { alert("invalid input"); }
//             else {
//                 let m5 = Number(prompt("js: "));
//                 if (isInvalid(m5)||fail(m5)) { alert("invalid input"); }
//                 else {
//                     // All inputs are valid, now check pass/fail
//                     if (m1 >= distinction && m2 >= distinction && m3 >= distinction && m4 >= distinction && m5 >= distinction){
//                          console.log(std_name + ": distinction");
//                     }
//                     else if (m1 >= first_class && m2 >= first_class && m3 >= first_class && m4 >= first_class && m5 >= first_class){
//                          console.log(std_name + ": first class");
//                     }
//                    else if (m1 >= passmarks && m2 >= passmarks && m3 >= passmarks && m4 >= passmarks && m5 >= passmarks) {
//                         console.log(std_name + ": pass");
//                     }
//                     else {
//                         console.log(std_name + ": fail");
//                     }
//                 }
//             }
//         }
//     }
// }

//3.
// let passmarks = 35;
// let distinction = 85;
// let first_class = 70;
// let m1 = Number(prompt("python: "));
// let m2 = Number(prompt("java: "));
// let m3 = Number(prompt("c: "));
// let m4 = Number(prompt("c++: "));
// let m5 = Number(prompt("js: "));

// let percentage = (m1 + m2 + m3 + m4 + m5) / 5;

// if (percentage > 100 || isNaN(percentage)) {
//   alert("enter proper marks");
// } else {
//   if (
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction &&
//     percentage >= distinction
//   ) {
//     console.log("distinction");
//   } else if (
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class &&
//     percentage >= first_class
//   ) {
//     console.log("first class");
//   } else if (
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks &&
//     percentage >= passmarks
//   ) {
//     console.log("pass");
//   } else if (
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks ||
//     percentage < 0 ||
//     percentage < passmarks
//   ) {
//     console.log("fail");
//   }
// }

// //elctrical units
// let units=Number(prompt("enter number of units consumed:"))
// let total=0
// if (units<0||isNaN(units)){
//     alert("invalid input")
// }
// else{
//     if(units>400){
//         total+=(units-400)*10
//         units=400
//     }
//     if(units>200){
//         total+=(units-200)*8
//         units=200
//     }
//     if(units>100){
//         total+=(units-100)*6
//         units=100
//     }
//     if(units>0){
//         total+=(units-0)*4
//     }
//     else{
//         alert("invalid input")
//     }
// }
// console.log(total)

//11-03-2026
//1. write a program to check whether given phone is valid or not.
// let no=prompt("enter mobile number:")
// if(no.length<10 || no.length>10 || isNaN(no)){
//     alert("invalid contact number,please provide correct input")
// }
// else{
//     console.log("valid contact number:",no)
// }

//2.even or odd
//3.pm or am
//4.to check current time is morning,afternoon,evening,night
// let date=new Date()
// let d=date.getHours()
// console.log(d)
// if(d>=(5) && d<12){
//     console.log("morning")
// }
// else if(d>=12 && (d<17)){
//     console.log("afternoon")
// }
// else if(d>=17 && (d<20)){
//     console.log("evening")
// }
// else if(d>=20 && (d<=23)){
//     console.log("night")
// }
// else{
//     console.log("provide proper input")
// }

//5.user provide input or not
// let input=prompt("enter input:")
// if(input.length>0){
//     console.log(input)
// }
// else{
//     alert("invalid")
// }

//6.banking 

// console.log("WELCOME TO BANKING");
// let balance = 10000;
// let again=true;
// while(again){
// let option = prompt("select option:1.Deposit 2.Withdraw 3.Balance",).toLowerCase();
// if (option === "d" || option === "deposit" || option === "1") {
//   let amt = Number(prompt("enter deposit amount: "));
//   if (isNaN(amt) || amt < 0) {
//     alert("provide proper input");
//   } else {
//     balance += amt;
//     console.log("deposited amount is:", amt);
//     console.log("balance is ", balance);
//   }
// } else if (option === "w" || option === "withdraw" || option === "2") {
//   let amt = Number(prompt("enter withdrawl amount: "));
//   if (isNaN(amt) || amt < 0) {
//     alert("provide proper input");
//   } else {
//     if (amt > balance) {
//       alert("insufficient balance");
//     } else {
//       balance -= amt;
//       console.log("withdrawl amount is:", amt);
//       console.log("balance is ", balance);
//     }
//   }
// } else if (option === "b" || option === "balance" || option === "3") {
//   console.log("balance is ", balance);
// } else {
//   alert("invalid input");
// }
// again=confirm("do you want to continue?");
// }
// console.log("thanks for banking");


//12-03-2025
/*for(start;ensureDir;action){
    
  logic

}*/
// for(let i=1;i<=10;i++){
//   console.log(i)
// }
// /* 
//  output:
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  10*/
// for (let i=1;i<=100000;i++){
//   console.log(i)
// }

//if there is we dont declare action or end and action or start and end and action ----> this causes infinite loop

//write a program to print the numbers range from 1 to 10

// for(let i=1;i<=10;i++){
//   console.log(i)
// }
// console.log("--------------------------------------------------------------------------------------------------")
// //write a program to print a number range from 1 - 100
// for(let i=1;i<=100;i++){
//   console.log(i)
// }
// console.log("--------------------------------------------------------------------------------------------------")
// //write a program to print a number range from 50 - 75
// for(let i=50;i<=75;i++){
//   console.log(i)
// }

// //write a program to print multiples of 2 ranges from 1 - 100(without if condition)
// for(let i=2;i<=100;i+=2){
//   console.log(i)
// }

// //write a program to print multiples of 5 ranges from 0 - 100(without if condition)
// for(let i=5;i<=100;i+=5){
//   console.log(i)
// }
// //write a program to print multiples of 10 ranges from 0- 1000(without if condition)
// for(let i=10;i<=1000;i+=10){
//   console.log(i)
// }


// //write a program to print the number ranges from a and b given by the user
// let a=(prompt("enter number 1:"))
// let b=(prompt("enter number 2:"))
// if(isNaN(a) || isNaN(b)){
//   alert("invalid input")
// }
// else if(a<b){
//    for(let i=a;i<=b;i++){
//     console.log(i)
//    }
// }
// else{
//   alert("provide proper input")
// }

// //write a program to print the multiplication table as per user choice
// let x=(prompt("enter number 1:"))
// if(isNaN(x) || x<0){
//   alert("invalid input")
// }
// else {
//    for(let i=1;i<=10;i++){
//     console.log(`${x}*${i}=${x*i}`) //use back-tick
//    }
// }

// //write a program to print the multiplication table as per user choice range from a to b asper user given
// let a=(prompt("enter number 1:"))
// let b=(prompt("enter number 2:"))
// let x=(prompt("enter number :"))
// if(isNaN(x) || x<0 || isNaN(a) || isNaN(b)){
//   alert("invalid input")
// }
// if(a<b) {
//    for(let i=a;i<=b;i++){
//     console.log(`${x}*${i}=${x*i}`) //use back-tick
//    }
// }

// //write a program to print the multiplication table as per user choice range from a to b asper user given
// let a=(prompt("enter start number :"))
// let b=(prompt("enter end number 2:"))
// let x=(prompt("enter number :"))
// if(isNaN(x) || a<0 || isNaN(a) || isNaN(b)||x<0){
//   alert("invalid input")
// }
// else if(a<b) {
//    for(let i=a;i<=b;i++){
//     console.log(`${x}*${i}=${x*i}`) //use back-tick
//    }
// }
// else{
//     alert("provide proper input")
// }
// "use strict"
// x=10
// console.log(x)
// console.log(1/0)
// console.log(typeof(125n))

//13-03-2026

//1.
// let names=['Ravi','Shastry','Mrunal','Thakur','Sagar','Sanjay']
// for (let i=0;i<names.length;i++){
//     console.log(names[i])
// }

//2.
// let names=['Ravi','Shastry','Mrunal','Thakur','Sagar','Sanjay']
// for (let i=0;i<names.length;i++){
//     console.log(names[i].toUpperCase())
// }

// 3.write a program which includes 10 elements in an array of fruits and print them in capital letters
// let fruits=['Mango','Apple','Banana','Watermelon','Pear','Kiwi','pomogranate','piniapple','chikkoo','gauva']
// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase()) 
// }

//4.write a program to print 10 students name and if your name is present print them in capital letters
// let names=['Swetha','renuka','harish','pallavi','manohara','sita','tulasi','ajay','bhaskar']
// for (let i=0;i<names.length;i++){
//     const name1=names[i]
//     if(name1.toLowerCase()==='pallavi'){
//         console.log(name1.toUpperCase())
//     }
//     else{
//         console.log(name1)
//     }
// }

//5.write a program to print 10 names and print them where capital letters
// let names=['pallavi','impi','keerthi','sneha','bhoomi','anu']
// for (let i=0;i<names.length;i++){
//     let first=names[i].slice(0,1).toUpperCase()
//     let last=names[i].slice(-1).toUpperCase()   
//     let middle=names[i].slice(1,names[i].length-1)
//     console.log(first.concat(middle).concat(last))
// }

//6.write a program to print names of 10 in an array each name has to be capital and return inside new array(by pushing)
// let names=['pallavi','impi','keerthi','sneha','bhoomi','anu']
// let namearr=[]
// for (let i=0;i<names.length;i++){
//     namearr.push(names[i].toUpperCase())
// }
// console.log(namearr)

// //7.
// let names=['pallavi','impi','keerthi','sneha','bhoomi','anu']
// let namearr=[]
// for (let i=0;i<names.length;i++){
//     namearr.push(names[i].toUpperCase().split('').reverse().join(''))
// }
// console.log(namearr)

//8
// let names=['pallavi','impi','keerthi','sneha','bhoomi','anu']
// let namearr=[]
// for (let i=0;i<names.length;i++){
//     namearr.push(names[i].toUpperCase())
// }
// console.log(namearr.reverse())
// let names=['pallavi','impi','keerthi','sneha','bhoomi','anu']
// let namearr=[]
// for (let i=0;i<names.length;i++){
//     namearr.unshift(names[i].toUpperCase())
// }
// console.log(namearr)

//9.write a program to print names of 10 in an array 
// let names=['mrunal','thakur','ravi','sagar','sanjay','shrutha','shastry','kiran','shrutha','bindu']
// console.log(names.length)

// let newarr=[]
// for(let i=0;i<names.length;i++){
//    if(names[i]==="ravi" || names[i]==="shastry"){
//      newarr.push(names[i].toUpperCase())
//    }
//    else{
//      newarr.push(names[i])
//    }
// }
// console.log(newarr)
//14-03-2026  ---->imp
//write a program to caluculate summ is even number range from 0 to 100
// let sum=0
// for (let i=1;i<=100;i++){
//     if (i%2==0){
//         sum+=i

// }
// }
// console.log(sum)

// //write a program to caluculate give number is prime or not
// //1st method
// let n1 = Number(prompt("Enter a number"));
// let isPrime1 = true;
// if (n1 <= 1 || isNaN(n1)) {
//   isPrime1 = false;
// } else {
//   for (let i = 2; i < n1; i++) {
//     if (n1 % i === 0) {
//       console.log(i);
//       isPrime1 = false;
//       break;
//     }
//   }
// }
// if (isPrime1) {
//   console.log(n1 + " is prime");
// } else {
//   console.log(n1 + " is not prime");
// }

//2nd method 
// let n2 = Number(prompt("Enter a number"));
// let isPrime2 = true;
// if (n2 <= 1 || isNaN(n2)) {
//   isPrime2 = false;
// } else {
//   for (let i = 2; i < n2/2; i++) {
//     if (n2 % i === 0) {
//       console.log(i);
//       isPrime2 = false;
//       break;
//     }
//   }
// }
// if (isPrime2) {
//   console.log(n2 + " is prime");
// } else {
//   console.log(n2 + " is not prime");
// }

//3rd method
// let n3 = Number(prompt("Enter a number"));
// let isPrime3 = true;
// if (n3 <= 1 || isNaN(n3)) {
//   isPrime3 = false;
// } else {
//   for (let i = 2; i<Math.floor(Math.sqrt(n3)); i++) {
//     if (n3 % i === 0) {
//       console.log(i);
//       isPrime3 = false;
//       break;
//     }
//   }
// }
// if (isPrime3) {
//   console.log(n3 + " is prime");
// } else {
//   console.log(n3 + " is not prime");
// }



//write a program to caluculate summ odd number range from 0 to 100
// let sum=0
// for (let i=1;i<=100;i++){
//     if (i%2!=0){
//         sum+=i

// }
// }
// console.log(sum)

//write a program to caluculate given number is palindrome or not
// let num = Number(prompt("Enter a number to check palindrome"));
// let originalNum = num;
// let reversed = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reversed = reversed * 10 + digit;
//   num = Math.floor(num / 10);
// }
// if (originalNum === reversed) {
//   console.log(originalNum + " is a palindrome");
// } else {
//   alert(" is not a palindrome");
// }

//write a program to caluculate given string is palindrome or not
// let a = prompt("enter string: ");
// let rev = [];
// if (isNaN(a)) {
//   for (let i = 0; i < a.length; i++) {
//     rev.unshift(a[i]);
//   }
//   let x = rev.join("");
//   console.log(x);
//   if (x === a) {
//     console.log("isPalindrome");
//   } else {
//     console.log("notPalindrome");
//   }
// }
// else{
//     alert("invalid string")
// }

// //factorial
// function fact(n=prompt("enter number:")){
//     if(n===0||n==1){
//         return n
//     }
//     else{
//         return fact(n-1)*n
//     }
// }
// console.log(fact())
// //using for loop
// let num=Number(prompt("enter number: "))
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log(factorial);
//14-03-2026  ---->imp
//write a program to caluculate summ is even number range from 0 to 100
// let sum=0
// for (let i=1;i<=100;i++){
//     if (i%2==0){
//         sum+=i

// }
// }
// console.log(sum)

// //write a program to caluculate give number is prime or not
// //1st method
// let n1 = Number(prompt("Enter a number"));
// let isPrime1 = true;
// if (n1 <= 1 || isNaN(n1)) {
//   isPrime1 = false;
// } else {
//   for (let i = 2; i < n1; i++) {
//     if (n1 % i === 0) {
//       console.log(i);
//       isPrime1 = false;
//       break;
//     }
//   }
// }
// if (isPrime1) {
//   console.log(n1 + " is prime");
// } else {
//   console.log(n1 + " is not prime");
// }

//2nd method 
// let n2 = Number(prompt("Enter a number"));
// let isPrime2 = true;
// if (n2 <= 1 || isNaN(n2)) {
//   isPrime2 = false;
// } else {
//   for (let i = 2; i < n2/2; i++) {
//     if (n2 % i === 0) {
//       console.log(i);
//       isPrime2 = false;
//       break;
//     }
//   }
// }
// if (isPrime2) {
//   console.log(n2 + " is prime");
// } else {
//   console.log(n2 + " is not prime");
// }

//3rd method
// let n3 = Number(prompt("Enter a number"));
// let isPrime3 = true;
// if (n3 <= 1 || isNaN(n3)) {
//   isPrime3 = false;
// } else {
//   for (let i = 2; i<Math.floor(Math.sqrt(n3)); i++) {
//     if (n3 % i === 0) {
//       console.log(i);
//       isPrime3 = false;
//       break;
//     }
//   }
// }
// if (isPrime3) {
//   console.log(n3 + " is prime");
// } else {
//   console.log(n3 + " is not prime");
// }



//write a program to caluculate summ odd number range from 0 to 100
// let sum=0
// for (let i=1;i<=100;i++){
//     if (i%2!=0){
//         sum+=i

// }
// }
// console.log(sum)

//write a program to caluculate given number is palindrome or not
// let num = Number(prompt("Enter a number to check palindrome"));
// let originalNum = num;
// let reversed = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reversed = reversed * 10 + digit;
//   num = Math.floor(num / 10);
// }
// if (originalNum === reversed) {
//   console.log(originalNum + " is a palindrome");
// } else {
//   alert(" is not a palindrome");
// }

//write a program to caluculate given string is palindrome or not
// let a = prompt("enter string: ");
// let rev = [];
// if (isNaN(a)) {
//   for (let i = 0; i < a.length; i++) {
//     rev.unshift(a[i]);
//   }
//   let x = rev.join("");
//   console.log(x);
//   if (x === a) {
//     console.log("isPalindrome");
//   } else {
//     console.log("notPalindrome");
//   }
// }
// else{
//     alert("invalid string")
// }

// //factorial
// function fact(n=prompt("enter number:")){
//     if(n===0||n==1){
//         return n
//     }
//     else{
//         return fact(n-1)*n
//     }
// }
// console.log(fact())
// //using for loop
// let num=Number(prompt("enter number: "))
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log(factorial);
//1. write a program to check whether the user is eligible or not
// let age1=prompt("enter age: ")
// if(isNaN(age1)){
//     alert("invalid input")
// }
// else if (age1>=18){
//     console.log("eligible to vote")
// }
// else{
//     console.log("not eligible to vote")
// }

//eligible to drive or not
// let age=prompt("enter age: ")
// if(isNaN(age)){
//     alert("invalid input")
// }
// else if(age>=18){
//     console.log("eligible to drive")
// }
// else {
//     console.log(" not eligible to drive")
// }

//greater amomng 2 numbers entered by user
// let n1=Number(prompt("enter number 1: "))
// let n2=Number(prompt("enter number 2: "))
// if(isNaN(n1) || isNaN(n2)){
//     alert("invalid input")
// }
// else if(n1>n2){
//     console.log(`${n1} is greater than ${n2}`)
// }
// else {
//     console.log(`${n2} is greater than ${n1}`)
// }

//given number is positive or negative
// let n1=Number(prompt("enter number 1: "))
// if(isNaN(n1)){
//     alert("invalid input")
// }
// else if(n1>=0){
//     console.log("positive number")
// }
// else{
//     console.log("negative number")
// }

//given phone number is valid or not
// let n1=(prompt("enter phone number : "))
// if(isNaN(n1)){
//     alert("please provide proper input")
// }
// else if(n1.length >10 || n1.length<10){
//     console.log("invalid phone number")
// }
// else{
//     console.log("valid number")
// }

//given number is number or string
// let str=prompt("give input:")
// if(isNaN(str)){
//     console.log("input is string")
// }
// else{
//     console.log("input is number")
// }

//current time is good morning or good evening or good night  and whether it is AM or PM
// let date=new Date()
// let d= date.getHours()
// console.log(d)
// if(d>=5 && d<12){
//     console.log("good morning and AM")
// }
// else if(d>=12 && d<17){
//     console.log("good afternoon and PM")
// }
// else if(d>=17 && d<19)
//     console.log("good evening and PM")
// }
// else if(d>=19 && d<24){
//     console.log("good night and PM")
// }
// else{
//     alert("no")
// }

//given input is even or odd
// let str=Number(prompt("give input:"))
// if(isNaN(str)){
//     console.log("input is string")
// }
// else if(str%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

//given number is divisible by 3 and 5
// let str=Number(prompt("give input:"))
// if(isNaN(str)){
//     console.log("input is string")
// }
// else if(str%3==0 && str%5==0){
//     console.log("divisible by 3 and 5")
// }
// else if(str%3==0){
//     console.log("divisible by 3")
// }
// else if(str%5==0){
//     console.log("divisible by 5")
// }
// else{
//     console.log("not divisible by 3 or 5")
// }

//given input is 0 or not
// let str=Number(prompt("give input:"))
// if(isNaN(str)){
//     console.log("input is string")
// }
// else if(str==0){
//     console.log("0")
// }
// else{
//     console.log("non zero number")
// }

//male female or others
// let g=prompt("enter gender: ").toLowerCase()
// if(g==='m' || g==='male' ){
//     console.log("MALE")
// }
// else if(g==='f' || g==='female' ){
//     console.log("FEMALE")
// }
// else if(g==='o' || g==='others' ){
//     console.log("OTHERS")
// }
// else{
//     alert("invalid input")
// }

//marks obtained is first class ,second class ,distinction,pass or fail
// let m1 = Number(prompt("enter marks for java "));
// let m2= Number(prompt("enter marks for python "));
// let m3= Number(prompt("enter marks for c "));
// let m4= Number(prompt("enter marks for c++ "));
// let m5= Number(prompt("enter marks for html "));
// let percentage=(m1+m2+m3+m4+m5)/5
// if (isNaN(m1) || m1 < 0 || m1 > 100 ||isNaN(m2) || m2 < 0 || m2 > 100 || isNaN(m3) || m3 < 0 || m3 > 100||isNaN(m4) || m4 < 0 || m4 > 100||isNaN(m5) || m5 < 0 || m5 > 100) {
//     alert("provide proper input");
// }
// else if(m1<35||m2<35||m3<35||m4<35||m5<35){
//     console.log("fail")
// }
// else if (percentage >= 80) {
//     console.log("distinction");
// }
// else if (percentage >= 60) { // Changed to >=60 to be true first
//     console.log("first class");
// }
// else if (percentage >= 50) { // Typically second class
//     console.log("second class");
// }
// else if (percentage >= 35) {
//     console.log("pass");
// }
// else {
//     console.log("fail");
// }

//which day is today
// let date=new Date()
// let days=['sun','mon','tues','wed','thr','fri','sat']
// let d=date.getDay()
// if(d==1){
//     console.log(days[d])
// }
// else if(d==2){
//     console.log(days[d])
// }
// else if(d==3){
//     console.log(days[d])
// }
// else if(d==4){
//     console.log(days[d])
// }
// else if(d==5){
//     console.log(days[d])
// }
// else if(d==6){
//     console.log(days[d])
// }
// else {
//     console.log(days[d])
// }

// which month
// let date=new Date()
// let months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
// let m=date.getMonth()
// if(m==0){
//     console.log(months[m])
// }
// else if(m==1){
//     console.log(months[m])
// }
// else if(m==2){
//     console.log(months[m])
// }
// else if(m==3){
//     console.log(months[m])
// }
// else if(m==4){
//     console.log(months[m])
// }
// else if(m==5){
//     console.log(months[m])
// }
// else if(m==6){
//     console.log(months[m])
// }
// else if(m==7){
//     console.log(months[m])
// }
// else if(m==8){
//     console.log(months[m])
// }
// else if(m==9){
//     console.log(months[m])
// }
// else if(m==10){
//     console.log(months[m])
// }
// else {
//     console.log(months[m])
// }

//discount
// let total_bill=Number(prompt("enter the total amount of your purchase"))
// let discount=0
// if(isNaN(total_bill)||total_bill<0){
//     alert("invalid input")
// }
// else if(total_bill>=10000){
//     discount=10
// }
// else if(total_bill>=9000){
//     discount=9
// }
// else if(total_bill>=8000){
//     discount=8
// }
// else if(total_bill>=7000){
//     discount=7
// }
// else if(total_bill>=6000){
//     discount=6
// }
// else if(total_bill>=5000){
//     discount=5
// }
// else {
//     discount=0
// }
// let pay=total_bill+((total_bill)*(discount/100))
// console.log(pay)

//current bill - electricity bill
// let units = Number(prompt("enter units consumed: "));
// let total= 0;
// if(isNaN(units)||units<0){
//     alert("invalid input")
// }
// else{
// if (units > 400) {
//   total+= ( units - 400) * 10;
//   units = 400;
// }
// if (units > 200) {
//   total += (units - 200) * 8;
//   units = 200;
// }
// if (units > 100) {
//   total += (units - 100) * 6;
//   units = 100;
// }
// if (units > 0) {
//   total += (units - 0) * 4;
// } else {
//   alert("invalid input");
// }
// }
// console.log(total);

//atm
// let user=prompt("enter the option: 1.Deposit 2.Withdraw 3.Balance").toLowerCase()
// let again=true
// while(again){
// if(user==='1' || user==="deposit" || user==="d"){
//   let amt=Number(prompt("enter amount"))
//   console.log("deposite option selected")
//   let amount=0
//   if(isNaN(amt)||amt<0){
//     console.log("invalid input")
//   }
//   else {
//     amount+=amt
//     console.log(amount,"is deposited")
//   }
// }
// else if(user==='2' || user==="withdraw" || user==="w"){
//   let amt=Number(prompt("enter amount"))
//   console.log("withdraw option selected")
//   let amount=10000
//   if(isNaN(amt)||amt<0){
//     console.log("invalid input")
//   }
//   else {
//     if(amt<amount){
//     amount-=amt
//     console.log(amt,"is withdrawed")
//     console.log(amount,"is the balance amount")
//     }
//     else{
//       console.log("insufficient balance")
//     }

//   }
// }
// else if(user==='3' || user==="balance" || user==="b"){
//   console.log("balance option selected")
// }
// else {
//   alert("please provide correct input")
// }
// again=confirm("do you want to confirm again?")
// }
// console.log("thanks for banking")

//ranging from 1 to 100
// for(let i=0;i<100;i++){
//   console.log(i)
// }

//ranging from  50 to 100
// for(let i=50;i<100;i++){
//   console.log(i)
// }

//ranging from  50 to 100 mulitples of 2
// for(let i=50;i<100;i++){
//   let x=2*i
//   console.log(`2 * ${i} = ${x}`)
// }

//ranging from  0 to 100 mulitples of 5
// for(let i=0;i<100;i++){
//   let x=5*i
//   console.log(`5 * ${i} = ${x}`)
// }

//ranging from  0 to 100 mulitples of 5 and 3,3,5
// for(let i=0;i<100;i++){
//   if(i%3==0 && i%5==0){
//     console.log(i,"ravishastry")
//   }
//   else if(i%3==0){
//      console.log(i,"ravi")
//   }
//   else if(i%5==0){
//     console.log(i,"shastry")
//   }
//   else{
//     console.log(i,"not divisible by 5 and 3")
//   }
// }

//array
// let arr=["apple","mango",'kiwi','pineapple']
// let new_arr=[]
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
//   new_arr.push(arr[i])
// }
// console.log(new_arr)

//array
// let arr=["apple","mango",'kiwi','pineapple']
// for(let i=0;i<arr.length;i++){
//   if(arr[i].toLowerCase()==="apple"){
//     console.log(arr[i].toUpperCase())
//   }
//   else{
//     console.log(arr[i])
//   }
// }

//even
// for (let i=0;i<20;i++){
//   if(i%2==0){
//     console.log(i)
//   }
// }
//odd
// for (let i=0;i<20;i++){
//   if(i%2!=0){
//     console.log(i)
//   }
// }

// let arr=["pallavi","swetha","renu","harish"]
// for(let i=0;i<arr.length;i++){
//     if(i%2==0){
//         console.log(arr[i].toUpperCase())
//     }
//     else{
//         console.log(arr[i])
//     }
// }

// let arr=["pallavi","swetha","renu","harish"]
// for(i=0;i<arr.length;i++){
//     let first=arr[i].slice(0,1).toUpperCase()
//     let last=arr[i].slice(-1).toUpperCase()
//     let middle=arr[i].slice(1,arr[i].length-1)
//     console.log(first.concat(middle).concat(last))
// }

// let sum=0
// for(let i=0;i<100;i++){
//     if(i%2==0){
//         let x=sum+=i
//         console.log( `sum of ${i} is ${x}`)
//     }
// }

// let sum=0
// for(let i=0;i<100;i++){
//     if(i%2!=0){
//         let x=sum+=i
//         console.log( `sum of ${i} is ${x}`)
//     }
// }

//factorial
// let n=Number(prompt("enter number"))
// let factorial=1
// if(isNaN(n)||n<0){
//     alert("provide proper input")
// }
// else if(n==0 || n==1){
//     console.log(`factorial of ${n} is 1`)
// }
// else{
//     for(i=2;i<=n;i++){
//         factorial =factorial*i
//     }
//     console.log(`factorial of ${n} is ${factorial}`)
// }

//prime number
// n=Number(prompt("enter a number:"))
// isPrime=true
// if(isNaN(n)||n<0){
//     alert("invalid input")
// }
// else if(n==0||n==1){
//     isPrime=false
//     console.log("neither a prime nor a composite")
// }
// else{
//     for(let i=2;i<Math.floor(Math.sqrt(n));i++){
//         if(n%i==0){
//             console.log(i)
//             isPrime=false
//             break
//         }

//     }
// }
// if (isPrime){
//     console.log("is prime",n)
// }
// else{
//     console.log("not prime")
// }

//palindrome - number
// function check_palindrome(n){
//     let rev=0
//     while(n!=0){
//         let rem=n%10
//         rev=rev*10+rem
//         n=Math.floor(n/10)
//     }
//     return rev
// }
// let n=Number(prompt("enter number:"))
// if(isNaN(n)||n<0){
//     alert("invaild input")
// }
// else{
//     let palindrome=check_palindrome(n)
//     if(n===palindrome){
//     console.log(n,"is palindrome")
//     }
//     else{
//         console.log(n,"is not palindrome")
//     }
// }

//palindrome - string
// console.log()
// let a = prompt("enter string: ");
// let rev = [];
// if (isNaN(a)) {
//   for (let i = 0; i < a.length; i++) {
//     rev.unshift(a[i]);
//   }
//   let x = rev.join("");
//   console.log(x);
//   if (x === a) {
//     console.log("isPalindrome");
//   } else {
//     console.log("notPalindrome");
//   }
// }
// else{
//     alert("invalid string")
// }
