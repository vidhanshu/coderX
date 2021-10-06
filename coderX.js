 /* function to close and open the nav bar */
 function op() {
     document.querySelector(".nav-side-container").style.marginLeft = "0px";
     document.querySelector('.container').style.marginRight = "-251px";
     document.querySelector('.container').style.marginLeft = "251px";
 }

 function cl() {
     document.querySelector(".nav-side-container").style.marginLeft = "-251px";
     document.querySelector('.container').style.marginRight = "0px";
     document.querySelector('.container').style.marginLeft = "0";
 }


 /* function for beuatiful section */
 function change(b, c) {
     var makeNone = document.getElementsByClassName("beautiful-content");
     var makedim = document.getElementsByClassName("but");
     for (let i = 0; i < makeNone.length; i++) {
         /* to make other content invisible */
         makeNone[i].style.display = "none";
         /* to make other buttons background gray type */
         makedim[i].style.background = " rgb(218, 218, 218)";
         /* to make other buttons font colorblack */
         makedim[i].style.color = "black";
     }
     var but = document.querySelector("." + b);
     var con = document.querySelector("." + c);
     con.style.display = "block";
     but.style.color = "white";
     if (b == "but1") {

         but.style.background = " rgb(255, 0, 0)";
     } else if (b == "but2") {

         but.style.background = "rgb(17, 0, 255)";

     } else if (b == "but3") {

         but.style.background = " rgb(0, 231, 69)";

     } else {

         but.style.background = " rgb(255, 0, 157)";

     }

 }
 /* function for gotot top */
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.querySelector(".goto-top").style.display = "block";
     } else {
         document.querySelector(".goto-top").style.display = "none";
     }
 };

 function gototop() {
     /* for safari brpwser */
     document.body.scrollTop = 0;
     /* for chrome mozila and ms edge */
     document.documentElement.scrollTop = 0;
 }

 /* registration js */
 function change_form(b, f) {
     var button = document.getElementsByClassName("but");
     var form = document.getElementsByClassName("form");
     for (let i = 0; i < button.length; i++) {
         button[i].style.background = " rgb(218, 218, 218)";
         button[i].className = button[i].className.replace("active", "");
         form[i].className = form[i].className.replace("active", "");
         form[i].style.display = "none";
     }
     var but = document.querySelector("." + b);
     var fom = document.querySelector("." + f);
     but.style.background = "white";
     but.classList.add("active");
     fom.classList.add("active");
     fom.style.display = "block";
     if (f == "form-login") {
         fom.style.boxShadow = "5px -7px 9px rgba(0,0,0,0.3)";
     }
 }
 /* registration js */


 /*  social media 
  */
 function moveRight(a) {
     document.getElementById(a).style.marginLeft = "1.6%";
 }

 function moveLeft(a) {
     document.getElementById(a).style.marginLeft = "-250px";
 }