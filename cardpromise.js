let url = "https://dummyjson.com/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let products = data.products;

    let filtered = products.filter((d) =>
      d.title.toLowerCase().includes("a")
    );

    let spans = document.getElementsByTagName("span");

    filtered.forEach((d, i) => {
      if (spans[i]) {
        spans[i].innerText = d.price;
      }
    });
  });