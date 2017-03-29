function cv(){
   if($(window).width() < 768){
     window.open("assets/img/cvPdf.pdf", "_blank");
   }else {
     document.getElementById("myModal").style.display = "block";
     document.getElementById("frame").style.display = "block";
   }
 };
