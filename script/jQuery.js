

$(document).ready(function (){
    // Jquery
    const img_place=$(".img_top img");
    const img_tab_btn=$(".cont5_img>.img_bottom>img");


      for (let i = 0; i < img_tab_btn.length; i++) {
      img_tab_btn.eq(i).click(function (e) {
        e.preventDefault();

        let src = img_tab_btn.eq(i).attr("src");
        

        img_place.attr("src", src);	
        });
      }

});