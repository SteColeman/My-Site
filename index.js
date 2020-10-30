// window.onscroll = function() {
//   scrollRotate ();
// }
//
// function scrollRotate() {
//   const logo = document.getElementById("circleLogo");
//   logo.style.transform = "rotate(1deg)";
// }


window.addEventListener("scroll", function() {
  document.body.style.setProperty("--scroll",window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
},
false
);


var circleLogo = document.getElementById('circleLogo');
var topCont = document.getElementsByClassName('top-container');


// function logoMovement() {
//   if (topCont.visible(detectPartial)){
//     circleLogo.removetAttribute("style", "position: fixed");
//   }
// }

