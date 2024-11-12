
        
    const cnt4 = document.querySelectorAll(".contents4");
    const tab_btn = document.querySelectorAll("main section article");
    
    
    const tab_cnt = document.querySelectorAll("div");
    
  
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


    const shop_btn=document.querySelectorAll("main section article div");
    const pay=document.querySelector(".contents4 button");
    
    for (let i = 0; i < shop_btn.length; i++) {
      shop_btn[i].addEventListener("click",function(e){
      e.preventDefault();
      shop_btn[i].classList.toggle("on")
      if (shop_btn[i].classList.contains('on')) {
          pay.classList.add("pay")
                }
                else{
                 pay.classList.remove("pay")
                }
      })
      
    }


    const headerToggle=document.getElementById("headerToggle");
        const headerNav=document.querySelector(".nav");

        headerToggle.addEventListener("click",function(e){
            e.preventDefault();
            headerNav.classList.toggle("show");
            headerToggle.getAttribute("aria-expanded")==="true"?
            headerToggle.setAttribute("aria-expanded","false"):
            headerToggle.setAttribute("aria-expanded","true");
        });
