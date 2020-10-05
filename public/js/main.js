// color
let noir = document.getElementById("noir")
let blanc = document.getElementById("blanc")

let body = document.querySelector("body")
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")




noir.addEventListener("click", (e) => {
    e.preventDefault()

    section1.style.backgroundColor = "black"
    section2.style.backgroundColor = "black"
    section3.style.backgroundColor = "black"
    section4.style.backgroundColor = "black"
    section5.style.backgroundColor = "black"
    section6.style.backgroundColor = "black"
    body.style.backgroundColor = "black"
    body.style.color = "white"
    empo.style.color = "black"

})
blanc.addEventListener("click", (e) => {
    e.preventDefault()

    section1.style.backgroundColor = ""
    section2.style.backgroundColor = ""
    section3.style.backgroundColor = ""
    section4.style.backgroundColor = ""
    section5.style.backgroundColor = ""
    section6.style.backgroundColor = ""
    body.style.backgroundColor = ""
    body.style.color = ""

})

// nav bar  fix

let header = document.querySelector("header")
let navbar = document.querySelector("nav")
let empo = document.getElementById("empo")
let maintitle = document.getElementById("main-title")


window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        header.style.position = "fixed";
        header.style.top = 0
        header.style.width = "100%"
        header.style.zIndex = 2
        empo.setAttribute("class", "d-block pt-4 pr-5")
        maintitle.style.display = "none"

    } else {
        header.style.position = "static"
        empo.setAttribute("class", "d-none")
        maintitle.style.display = ""

    }
})

// connexion pop up

let connexion = document.getElementById("connexion")
let popup = document.getElementById("popup")
let signup = document.getElementById("sign-up")
let register = document.getElementById("register")
let formulaire = document.getElementById("formulaire")
let maman = document.getElementById("maman")
console.log(register);

connexion.addEventListener("click", (e) => {
    e.preventDefault()
    popup.setAttribute("class", "bg-white text-center")
    let exit = document.getElementById("exit")
    exit.addEventListener("click", (e) => {
        popup.setAttribute("class", "bg-white text-center d-none")
        e.preventDefault()
    })
    // body.addEventListener("click", () => {
    //     popup.setAttribute("class", "bg-white text-center d-none")
    //     e.preventDefault()
    // })
    register.addEventListener("click", (e) => {
        e.preventDefault()
        maman.setAttribute("class", "p-3")
        formulaire.setAttribute("class", "d-none")
    })
    signup.addEventListener("click", (e) => {
        e.preventDefault()
        maman.setAttribute("class", "p-3 d-none")
        formulaire.setAttribute("class", "")

    })


})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        popup.style.position = "fixed"
        popup.style.top = "250px"
        popup.style.width = "60%"
        popup.style.height = "50%"
        popup.style.zIndex = 2


    }
})































let controls = document.querySelector(".controls");
let container = document.querySelector(".thumbnail-container");
let allBox = container.children;
let containerWidth = container.offsetWidth;
let margin = 30;
let items = 0;
let totalItems = 0;
let jumpSlideWidth = 0;





responsive = [
   { breakPoint: { width: 0, item: 1 } },
   { breakPoint: { width: 500, item: 2 } },
   { breakPoint: { width: 1000, item: 4} },
]

function load() {
   for (let i = 0; i < responsive.length; i++) {
      if (window.innerWidth > responsive[i].breakPoint.width) {
         items = responsive[i].breakPoint.item
      }
   }
   start();
}

function start() {
   let totalItemsWidth = 0
   for (let i = 0; i < allBox.length; i++) {



      allBox[i].style.width = (containerWidth / items) - margin + "px";
      allBox[i].style.margin = (margin / 2) + "px";
      totalItemsWidth += containerWidth / items;
      totalItems++;
   }




   container.style.width = totalItemsWidth + "px";




   const allSlides = Math.ceil(totalItems / items);
   const ul = document.createElement("ul");
   for (let i = 1; i <= allSlides; i++) {
      const li = document.createElement("li");
      li.id = i;
      li.innerHTML = "";
      li.setAttribute("onclick", "controlSlides(this)");
      ul.appendChild(li);
      if (i == 1) {
         li.className = "active";
         
      }
   }
   controls.appendChild(ul);
}




function controlSlides(ele) {



   const ul = controls.children;




   const li = ul[0].children


   var active;

   for (let i = 0; i < li.length; i++) {
      if (li[i].className == "active") {



         active = i;




         li[i].className = "";
      
      }
   }




   ele.className = "active";

   var numb = (ele.id - 1) - active;
   jumpSlideWidth = jumpSlideWidth + (containerWidth * numb);
   container.style.marginLeft = -jumpSlideWidth + "px";
}

window.onload = load();

