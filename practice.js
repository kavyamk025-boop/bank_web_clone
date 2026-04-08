// l=[1,2,3,4,4,5,5,4,4,32,3,3,3,3]
// // let mp=l.reduce((sum,i) => {
// //        sum+=i
// // },0);
// // console.log(mp);
// // let dat=l.filter((e,i,a)=>{
// //   if(e!=3){
// //     return e
// //   }
// // })
// // console.log(dat);
// let data=[
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },
//   {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     }
//   },
//   {
//     "id": 3,
//     "title": "Mens Cotton Jacket",
//     "price": 55.99,
//     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
//     "rating": {
//       "rate": 4.7,
//       "count": 500
//     }
//   },
//   {
//     "id": 4,
//     "title": "Mens Casual Slim Fit",
//     "price": 15.99,
//     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
//     "rating": {
//       "rate": 2.1,
//       "count": 430
//     }
//   },
//   {
//     "id": 5,
//     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     "price": 695,
//     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
//     "rating": {
//       "rate": 4.6,
//       "count": 400
//     }
//   },
//   {
//     "id": 6,
//     "title": "Solid Gold Petite Micropave ",
//     "price": 168,
//     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 70
//     }
//   },
//   {
//     "id": 7,
//     "title": "White Gold Plated Princess",
//     "price": 9.99,
//     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
//     "rating": {
//       "rate": 3,
//       "count": 400
//     }
//   },
//   {
//     "id": 8,
//     "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     "price": 10.99,
//     "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
//     "rating": {
//       "rate": 1.9,
//       "count": 100
//     }
//   },
//   {
//     "id": 9,
//     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     "price": 64,
//     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
//     "rating": {
//       "rate": 3.3,
//       "count": 203
//     }
//   },
//   {
//     "id": 10,
//     "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     "price": 109,
//     "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
//     "rating": {
//       "rate": 2.9,
//       "count": 470
//     }
//   },
//   {
//     "id": 11,
//     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     "price": 109,
//     "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
//     "rating": {
//       "rate": 4.8,
//       "count": 319
//     }
//   },
//   {
//     "id": 12,
//     "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     "price": 114,
//     "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
//     "rating": {
//       "rate": 4.8,
//       "count": 400
//     }
//   },
//   {
//     "id": 13,
//     "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     "price": 599,
//     "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
//     "rating": {
//       "rate": 2.9,
//       "count": 250
//     }
//   },
//   {
//     "id": 14,
//     "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     "price": 999.99,
//     "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
//     "rating": {
//       "rate": 2.2,
//       "count": 140
//     }
//   },
//   {
//     "id": 15,
//     "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     "price": 56.99,
//     "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
//     "rating": {
//       "rate": 2.6,
//       "count": 235
//     }
//   },
//   {
//     "id": 16,
//     "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     "price": 29.95,
//     "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
//     "rating": {
//       "rate": 2.9,
//       "count": 340
//     }
//   },
//   {
//     "id": 17,
//     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     "price": 39.99,
//     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
//     "rating": {
//       "rate": 3.8,
//       "count": 679
//     }
//   },
//   {
//     "id": 18,
//     "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     "price": 9.85,
//     "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
//     "rating": {
//       "rate": 4.7,
//       "count": 130
//     }
//   },
//   {
//     "id": 19,
//     "title": "Opna Women's Short Sleeve Moisture",
//     "price": 7.95,
//     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
//     "rating": {
//       "rate": 4.5,
//       "count": 146
//     }
//   },
//   {
//     "id": 20,
//     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//     "price": 12.99,
//     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
//     "rating": {
//       "rate": 3.6,
//       "count": 145
//     }
//   }
// ]
// // let dat=data.filter((e,i)=>{
// //     if(data[i].id%2==0){
// //         return data[i].category
// //     }
// // })
// // console.log(dat);
let data1= [
  { id: 21, name: "Suresh Kumar", contact: "9876500021" },
  { id: 22, name: "Mahesh Babu", contact: "9876500022" },
  { id: 23, name: "Rajesh Khanna", contact: "9876500023" },
  { id: 24, name: "Vikram Singh", contact: "9876500024" },
  { id: 25, name: "Ramesh Gupta", contact: "9876500025" },
  { id: 26, name: "Deepak Verma", contact: "9876500026" },
  { id: 27, name: "Amit Shah", contact: "9876500027" },
  { id: 28, name: "Manoj Yadav", contact: "9876500028" },
  { id: 29, name: "Naveen Kumar", contact: "9876500029" },
  { id: 30, name: "Sunil Joshi", contact: "9876500030" },

  { id: 31, name: "Lakshmi Devi", contact: "9876500031" },
  { id: 32, name: "Radha Krishna", contact: "9876500032" },
  { id: 33, name: "Sita Raman", contact: "9876500033" },
  { id: 34, name: "Geetha Iyer", contact: "9876500034" },
  { id: 35, name: "Parvati Nair", contact: "9876500035" },
  { id: 36, name: "Bhavani Rao", contact: "9876500036" },
  { id: 37, name: "Uma Shankar", contact: "9876500037" },
  { id: 38, name: "Saraswati Devi", contact: "9876500038" },
  { id: 39, name: "Indira Menon", contact: "9876500039" },
  { id: 40, name: "Kamala Das", contact: "9876500040" },

  { id: 41, name: "Harish Kumar", contact: "9876500041" },
  { id: 42, name: "Ganesh Prasad", contact: "9876500042" },
  { id: 43, name: "Prakash Reddy", contact: "9876500043" },
  { id: 44, name: "Shankar Iyer", contact: "9876500044" },
  { id: 45, name: "Mohan Das", contact: "9876500045" },
  { id: 46, name: "Kiran Kumar", contact: "9876500046" },
  { id: 47, name: "Varun Sharma", contact: "9876500047" },
  { id: 48, name: "Nikhil Jain", contact: "9876500048" },
  { id: 49, name: "Tejas Patel", contact: "9876500049" },
  { id: 50, name: "Yash Verma", contact: "9876500050" },

  { id: 51, name: "Ravi Kumar", contact: "9876500051" },
  { id: 52, name: "Ajay Singh", contact: "9876500052" },
  { id: 53, name: "Sanjay Gupta", contact: "9876500053" },
  { id: 54, name: "Vijay Patel", contact: "9876500054" },
  { id: 55, name: "Manish Sharma", contact: "9876500055" },
  { id: 56, name: "Dinesh Yadav", contact: "9876500056" },
  { id: 57, name: "Rakesh Verma", contact: "9876500057" },
  { id: 58, name: "Pankaj Kumar", contact: "9876500058" },
  { id: 59, name: "Ashok Reddy", contact: "9876500059" },
  { id: 60, name: "Sandeep Nair", contact: "9876500060" },

  { id: 61, name: "Anil Kumar", contact: "9876500061" },
  { id: 62, name: "Sunita Sharma", contact: "9876500062" },
  { id: 63, name: "Rekha Patel", contact: "9876500063" },
  { id: 64, name: "Lata Singh", contact: "9876500064" },
  { id: 65, name: "Seema Gupta", contact: "9876500065" },
  { id: 66, name: "Kiran Reddy", contact: "9876500066" },
  { id: 67, name: "Meena Nair", contact: "9876500067" },
  { id: 68, name: "Shobha Iyer", contact: "9876500068" },
  { id: 69, name: "Radha Sharma", contact: "9876500069" },
  { id: 70, name: "Pooja Verma", contact: "9876500070" },

  { id: 71, name: "Deepa Patel", contact: "9876500071" },
  { id: 72, name: "Anita Singh", contact: "9876500072" },
  { id: 73, name: "Sarita Gupta", contact: "9876500073" },
  { id: 74, name: "Kavita Reddy", contact: "9876500074" },
  { id: 75, name: "Sunil Kumar", contact: "9876500075" },
  { id: 76, name: "Raj Kumar", contact: "9876500076" },
  { id: 77, name: "Vikas Sharma", contact: "9876500077" },
  { id: 78, name: "Ritu Singh", contact: "9876500078" },
  { id: 79, name: "Alok Verma", contact: "9876500079" },
  { id: 80, name: "Gaurav Patel", contact: "9876500080" },

  { id: 81, name: "Nitin Kumar", contact: "9876500081" },
  { id: 82, name: "Tarun Sharma", contact: "9876500082" },
  { id: 83, name: "Rohit Singh", contact: "9876500083" },
  { id: 84, name: "Sachin Verma", contact: "9876500084" },
  { id: 85, name: "Kunal Gupta", contact: "9876500085" },
  { id: 86, name: "Abhishek Patel", contact: "9876500086" },
  { id: 87, name: "Lokesh Reddy", contact: "9876500087" },
  { id: 88, name: "Praveen Kumar", contact: "9876500088" },
  { id: 89, name: "Hemant Sharma", contact: "9876500089" },
  { id: 90, name: "Kapil Singh", contact: "9876500090" },

  { id: 91, name: "Suraj Verma", contact: "9876500091" },
  { id: 92, name: "Aman Gupta", contact: "9876500092" },
  { id: 93, name: "Shivam Patel", contact: "9876500093" },
  { id: 94, name: "Rahul Reddy", contact: "9876500094" },
  { id: 95, name: "Naveen Sharma", contact: "9876500095" },
  { id: 96, name: "Arvind Kumar", contact: "9876500096" },
  { id: 97, name: "Bharath Nair", contact: "9876500097" },
  { id: 98, name: "Kishore Iyer", contact: "9876500098" },
  { id: 99, name: "Madhav Rao", contact: "9876500099" },
  { id: 100, name: "Tej Kumar", contact: "9876500100" }
];
// let user = prompt("enter name");
// let res=data1.reduce((acc,data)=>{
//     if((data.name.toLocaleLowerCase()).includes(user.toLocaleLowerCase())){
//         return{id:data.id,contact:data.contact}
//     }
//     return acc
// },[])
// console.log(res);


let str = "kavya";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (!("aeiou".includes(str[i]))) {
        count++;
    }
}

console.log(count);






// const result = data1.filter((con,i)=>{
//     if ((con.name).startsWith(user)){
//     return con
//     }
    
// })
// console.log(result);



// let l=["kavya","kunabevu"]
// function revnum(n){
//     let rev=""
//     for (let i=0;i<n.length;i++){
//     if (i%2==0){
//         rev+=n[i].toUpperCase()
//     }
//     else{
//         rev+=n[i]
//     }
//     }
//     return rev
// }
// for(let i=0;i<l.length;i++){
//     l[i]=revnum(l[i])
// }
// console.log(l);



// function rev(n){
//      let res=0
//     while (n!=0){
//         let rem=n%10
//         res=(res*10)+(rem)
//         n=Math.floor(n/10)
//     }
//     return res
// }
// function reve(s){
//     let r=""
//     for(let i=s.length-1;i>=0;i--){
//         r+=s[i]
//     }
//     return r
// }
// for (let i =0;i<l.length;i++){
//     if (!isNaN(l[i])){
//         l[i]=rev(l[i])
//     }
//     else{
//        l[i]=reve(l[i]).toLocaleUpperCase()
//     }
    
// }
// console.log(l);