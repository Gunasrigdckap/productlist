let image =document.querySelectorAll(".img1");
let image2 = document.querySelector(".img");
let heading1 = document.querySelector("#heading1");
let heading2 = document.querySelector("#heading2");
let price = document.querySelector("#price");
let icon = document.querySelector("#icon");
let para = document.querySelector("#para");





let obj = [{
    src: "product-1.jpeg",
    Product: "High-Back-Bench",
    Brand: "Caressa",
    Rate: "$9.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
}, {
    src: "product-2.jpeg",
    Product: "Albany Table",
    Brand: "Caressa",
    Rate: "$79.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-3.jpeg",
    Product: "Accent Chair",
    Brand: "Caressa",
    Rate: "$25.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-4.jpeg",
    Product: "Wooden Table",
    Brand: "Caressa",
    Rate: "$45.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-5.jpeg",
    Product: " Dining Table",
    Brand: "Caressa",
    Rate: "6.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-6.jpeg",
    Product: "Sofa Set",
    Brand: "Caressa",
    Rate: "$69.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-7.jpeg",
    Product: "Modern BookShelf",
    Brand: "Caressa",
    Rate: "$10.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-8.jpeg",
    Product: "Emperor Bed",
    Brand: "Caressa",
    Rate: "$4.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "product-9.jpeg",
    Product: "Utopia Sofa",
    Brand: "Caressa",
    Rate: "$13.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
}
];



for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function() {
        window.open("product2.html","_blank");
        show(i);
    });
}


function show(i){
    localStorage.setItem('index',i ); 
}

let index1 = localStorage.getItem('index')
// console.log(typeof index1)

if (index1) {
    
    heading1.innerHTML = obj[index1].Product;
    heading2.innerHTML = obj[index1].Brand;
    price.innerHTML = obj[index1].Rate;
    icon.innerHTML=obj[index1].icon
    para.innerHTML = obj[index1].para;
    image2.src = obj[index1].src;
}


let backbtn = document.getElementsByClassName("btn1")

for (let i = 0; i < backbtn.length; i++) {
  backbtn[i].addEventListener("click", function() {
      location.href = "product.html";
  });
}


// localStorage.clear()




