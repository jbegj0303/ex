// 스와이퍼 슬라이더
var mySwiper=new Swiper('.swiper-container',{
  loop:true,
  speed:1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay:3000,
  },
});