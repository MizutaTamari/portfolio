/*------------------------------------------------------------
スライダー
------------------------------------------------------------*/

new Splide(".splide", {
  type: "loop", // デフォルトはスライド（slide）
  autoplay: true, // 自動再生（デフォルトはfalse）
  interval: number = 3000,
  speed: 1000, // スライダーの移動時間
}).mount();

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
		cover      : true,
		heightRatio: 0.5,
  } ).mount();
} );

/*------------------------------------------------------------
アニメーション処理
------------------------------------------------------------*/

const fadeImgs = document.getElementsByClassName("fade-img");
const fadeImg = document.querySelector(".fade-img-first");
var options = {threshold:1};
let fadeObserver = new IntersectionObserver((entries) => {
   if(entries[0].isIntersecting) {
      for(var i=0; i<fadeImgs.length; i++) {
        var element = fadeImgs[i];
        element.classList.add("fade");
      }
   } else {
    return;
   }
}, options);
fadeObserver.observe(fadeImg);

/*------------------------------------------------------------
マーカー処理
------------------------------------------------------------*/

const forText = document.querySelectorAll(".marker");
var options = {threshold:1};
let markerObserver = new IntersectionObserver((entries) => {
   if(entries[0].isIntersecting) {
      entries[0].target.classList.add("on");
      console.log("succsess");
      } else {
         return;
      }
}, options);
forText.forEach(function(value){markerObserver.observe(value)});
