"use strict"




let tableBody = document.querySelector("tbody");
let products = JSON.parse(localStorage.getItem("basket"));

getBasketDatas();

function getBasketDatas() {
    if (products != null) {
        for (const product of products) {
            tableBody.innerHTML += `<tr data-id ="${product.id}">
            <td>
            <img src="${product.img}" alt="">
            </td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.count}</td>
            <td>${product.price} $</td>
            <td><i class="fa-solid fa-circle-xmark delete"></i></td>
            </tr> `

        }

        showTotalPrice();
        getBasketCount(products);


    } else {
        showAlert();
    }

}

function showAlert(){
    document.querySelector("table").classList.add("d-none")
    document.querySelector(".alert-warning").classList.remove("d-none");
    document.querySelector(".total-title").classList.add("d-none");
    document.querySelector(".total-title").nextElementSibling.classList.add("d-none");
}


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count;
    }
    document.querySelector("sup").innerText = sum;
}




function deleteProduct(id) {
    products = products.filter(m => m.id != id);
    localStorage.setItem("basket", JSON.stringify(products));
}





let deleteIcons = document.querySelectorAll(".delete");

deleteIcons.forEach(icon => {
    icon.addEventListener("click", function () {

        let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        deleteProduct(id) ;
        this.parentNode.parentNode.remove();

        if(products.length == 0){
            localStorage.removeItem("basket");
            showAlert();
        }
        showTotalPrice();
        getBasketCount(products);

        Swal.fire({
            position: `bottom-end`,
            icon: `success`,
            showConfirmButton: false,
            timer:1000
        })


    })
});   

function showTotalPrice(){
    if(JSON.parse(localStorage.getItem("basket")) != null){
        let title = document.querySelector(".total-title");
        title.classList.remove("d-none");
        title.nextElementSibling.classList.remove("d-none");

        let sum = 0;
        for (const item of products) {
            sum += parseInt(item.price);
        }

        title.nextElementSibling.innerText = sum + "$";
    }
}

showTotalPrice();


