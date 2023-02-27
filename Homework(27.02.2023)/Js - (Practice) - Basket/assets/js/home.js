"use strict"

//basket mentiqi

let cardBtns = document.querySelectorAll("#shop a")
let products = [];

if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
}

cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();


        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.innerText;
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        let productPrice = parseInt(this.parentNode.children[1].innerText);
        

        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price = productPrice * existProduct.count;
        } else {
            products.push({
                id: productId,
                name: productName,
                img: productImg,
                description: productDesc,
                price: productPrice,
                count: 1
            })
        }


        localStorage.setItem("basket", JSON.stringify(products));
        getBasketCount(products);

        Swal.fire({
            position: `bottom-end`,
            icon: `success`,
            showConfirmButton: false,
            timer:1000
        })
            
        
            
            
        
    })
});



function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum+=item.count;
    }
    document.querySelector("sup").innerText = sum;
}

getBasketCount(products);


document.querySelector("#test span").addEventListener("click",function(){
    let num = parseInt(document.querySelector("input").value)
    num += 1;
    document.querySelector("input").value = num;
})

