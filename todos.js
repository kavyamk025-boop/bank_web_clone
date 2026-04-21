let cards = document.getElementsByClassName("cards")[0]
let todo = document.getElementById("todo")
let done = document.getElementById("done")
let all = document.getElementById("all")
let task = async () => {
    let d = await fetch("https://dummyjson.com/todos")
    let final = await d.json()

    todo.addEventListener("click", () => {
        cards.innerHTML = ""
        let fil = final.todos.filter((d) => {
            return !(d.completed)

        })
        fil.map((d) => {
            let { id, todo, completed, userId } = d

            cards.innerHTML += `<div class="cart2">
        <h3>ID:${id}</h3>
        <p>TODO:${todo}</p>
        <p>COMPLETED:${completed}</p>
        <p>USERID:${userId}</p>
    </div>`
        })
    })

    done.addEventListener("click", () => {
        cards.innerHTML = ""
        let fil = final.todos.filter((d) => {
            return (d.completed)

        })
        fil.map((d) => {
            let { id, todo, completed, userId } = d

            cards.innerHTML += `<div class="cart">
        <h3>ID:${id}</h3>
        <p>TODO:${todo}</p>
        <p>COMPLETED:${completed}</p>
        <p>USERID:${userId}</p>
    </div>`
        })
    })



    all.addEventListener("click", () => {
        cards.innerHTML=""
        final.todos.map((d) => {
            let { id, todo, completed, userId } = d
            cards.innerHTML += `<div class="${completed ? "cart" : "cart2"}">
        <h3>ID:${id}</h3>
        <p>TODO:${todo}</p>
        <p>COMPLETED:${completed}</p>
        <p>USERID:${userId}</p>
    </div>`})
    })



    //---------------------OR-------------------    
    //   if (d.completed){
    //          cards.innerHTML+=`<div class="cart">
    //     <h3>${d.id}</h3>
    //     <p>${d.todo}</p>
    //     <p>${d.completed}</p>
    //     <p>${d.userId}</p>
    // </div>`
    //   }
    //   else{cards.innerHTML+=`<div class="cart2">
    //     <h3>${d.id}</h3>
    //     <p>${d.todo}</p>
    //     <p>${d.completed}</p>
    //     <p>${d.userId}</p>
    // </div>`}






}
task()