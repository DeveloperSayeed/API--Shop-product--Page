const product_item = document.querySelector(".product-item")




fetch("https://my-json-server.typicode.com/DeveloperSayeed/API-Data/shop").then(data => data.json()).then((data) => {


    let product = ""
    data.map(item => {

        product += `
    <div class="col-xl-3 mb-5">
    <div class="product-box shadow">
    <div class="product-heading">
        <img data-bs-toggle="modal" data-bs-target="#product_shop-page" onclick="single_shop(${item.id})" src="${item.img}" alt="">

        <div class="product-btn">
            
        <ul>
            <li><a href="#"data-bs-toggle="tooltip" data-bs-placement="left" title="Whitlist"><i class="fa-regular fa-heart"></i></a></li>
            <li>  <a href="#"data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"><i class="fa-solid fa-rotate"></i></a></li>
            <li>  <a  data-bs-toggle="modal" data-bs-target="#product_shop-page" onclick="single_shop(${item.id})" href="#"data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Cart"><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
    </div>
    </div>
    <div class="product-content pt-2 pb-4 pl-2 pr-2">
        <h1>${item.name}</h1>
        <div class="price"><span class="rel-price">৳${item.regprice}</span> <span class="sale-price"> ৳${item.salprice}</span></div>
        <button class="btn btn-danger mt-4" data-bs-toggle="modal" data-bs-target="#product_shop-page" onclick="single_shop(${item.id})">Add to Cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
    </div>
</div>
</div>

    `

    })
    product_item.innerHTML = product;

})

//  Shop Single Page 



function single_shop(product) {

    fetch("https://my-json-server.typicode.com/DeveloperSayeed/API-Data/shop/" + product).then(data => data.json()).then((data) => {


        console.log(data);
        let product_page = document.querySelector(".product-page")

        product_page.innerHTML = `
                          <div class="product-left">
                                    <img src="${data.img}" alt="">
                                </div>
                                <div class="product-right">
                                    <h1>${data.name}</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, unde!</p>
                                    <div class="price">Price :<span>৳${data.regprice}</span></div>
                                    <div class="discount">Discount Price :<span>৳${data.salprice}</span></div>
                                    <button class="btn btn-danger">Buy Now</button>
                                    <div class="soical">
                                    <h2> Share :</h2>
                                    <ul>
                                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                </ul>
                                 </div>
                                </div>
    
    `


    })


}