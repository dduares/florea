
const shop_btn = document.querySelectorAll(".img_place");
const pay = document.querySelector(".cont3_pic button");


for (let i = 0; i < shop_btn.length; i++) {
    shop_btn[i].addEventListener("click", function (e) {
        e.preventDefault();
        shop_btn[i].classList.toggle("on");

        if (shop_btn[i].classList.contains('on')) {
            pay.classList.add("pay")
        }
        else {
            pay.classList.remove("pay")

        }
    });
};


const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".nav");

headerToggle.addEventListener("click", function (e) {
    e.preventDefault();
    headerNav.classList.toggle("show");
    headerToggle.getAttribute("aria-expanded") === "true" ?
        headerToggle.setAttribute("aria-expanded", "false") :
        headerToggle.setAttribute("aria-expanded", "true");
});




const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");


const flower1 = document.querySelector(".flower1");
const flower2 = document.querySelector(".flower2");

const cont1 = document.querySelector(".mySwiper")
const cont2 = document.querySelector(".mySwiper2")

flower1.style.color = "#b68974";

flower1.addEventListener("click", function () {
    cont1.style.display = "block";
    cont2.style.display = "none";
    flower1.style.color = "#b68974";
    flower2.style.color = "black";
    flower2.style.textShadow = "none";
});

flower2.addEventListener("click", function () {
    cont1.style.display = "none";
    cont2.style.display = "block";
    flower2.style.color = "#b68974";
    flower1.style.color = "black";
    flower1.style.textShadow = "none";
});



const cnt5 = document.querySelectorAll(".contents5");
const tab_btn = document.querySelectorAll(".cont5_text ul li");

const tab_cnt = document.querySelectorAll(".cont5_img");


for (let i = 0; i < tab_btn.length; i++) {
    tab_btn[i].addEventListener("click", function (e) {
        e.preventDefault();
        tab_btn[i].classList.add("active");
        tab_cnt[i].classList.add("show");


        for (let j = 0; j < tab_btn.length; j++) {
            if (i !== j) {
                tab_btn[j].classList.remove("active");
                tab_cnt[j].classList.remove("show");
            }
        }
    });
}

for (let i = 0; i < tab_btn.length; i++) {
    tab_btn[i].addEventListener("click", function (e) {
        e.preventDefault();

        if (tab_btn[i] == tab_btn[1]) {
            cnt5[0].style.background = "url(https://github.com/dduares/portofolio_all-images/blob/main/main_images/cont5-2_background.png?raw=true)"
            cnt5[0].style.backgroundSize = "cover"
        } else if (tab_btn[i] == tab_btn[0]) {
            cnt5[0].style.background = "url(https://github.com/dduares/portofolio_all-images/blob/main/main_images/cont5-1_background.png?raw=true)"
            cnt5[0].style.backgroundSize = "cover"
        } else {
            cnt5[0].style.background = "url(https://github.com/dduares/portofolio_all-images/blob/main/main_images/cont5-3_background.png?raw=true)"
            cnt5[0].style.backgroundSize = "cover"
        }
    });
}
