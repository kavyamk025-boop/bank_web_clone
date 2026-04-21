let card = document.getElementById("cards")

let data = async () => {
    let d = await fetch("https://dummyjson.com/carts")
    let final = await d.json()
    let cart = final.carts

    cart.map((ele) => {

        let productsHTML = ""

        ele.products.map((p) => {
            productsHTML += `
            <div class="product">
                <h4>${p.title}</h4>
                <p>Price: ₹${p.price}</p>
                <p>Quantity: ${p.quantity}</p>
                <p>Total: ₹${p.total}</p>
            </div>`
        })

        card.innerHTML += `
        <div class="cart">
            <h2>User ID: ${ele.userId}</h2>
            <p>Discounted Total: ₹${ele.discountedTotal}</p>
            <p>Total Products: ${ele.totalProducts}</p>
            <p>Total Quantity: ${ele.totalQuantity}</p>
            <div class="products">
                ${productsHTML}
            </div>
        </div>`
    })
}

data()