$('#transparent-header').ready(function() {
  if($('#transparent-header')[0]) {
    $(window).scroll(function(){
      window.scrollY > 100 ? $('#transparent-header')[0].classList.remove('transparent-header') : $('#transparent-header')[0].classList.add('transparent-header')
    })
  }
})

$('.show-side-menu').click(function(){
  $('.side-menu').slideToggle()
})

$('.close-side-menu').click(function() {
  $('.side-menu').slideToggle()
})
  
$('.home-slider').slick({
  arrows: false,
  dots: true,
});

$('.products-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let addZero = number => number < 10 ? `0${number}` : number

  let i = (currentSlide ? currentSlide : 0) + 1;
  $('.counter').html(`<span>${addZero(i)}</span><div class="vertical-line"></div><span class="last-item">${addZero(slick.slideCount)}</span>`);
});

$('.products-slider').slick({
  prevArrow: '.control-left',
  nextArrow: '.control-right',
});


$('.play').click(function(){
  this.previousElementSibling.setAttribute('controls', '')
  this.previousElementSibling.play()
  $('.play-button')[0].style.display = "none"
})

$('.gallery-items').slick({
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "15vw",
  prevArrow: '.left',
  nextArrow: '.right',
})

$('.patented-products').slick({
  prevArrow: '.patented-left',
  nextArrow: '.patented-right',
})



let triggers = () => {
  const triggs = Array.from($('.triggers')[0].children)
  triggs.forEach(trig => {
    trig.classList.remove('selected')
  })
}

$('.mission-trig').click(function(){
  triggers()

  this.classList.add('selected')

  $('.mission')[0].style.display = "block"
  $('.vision')[0].style.display = "none"
  $('.values')[0].style.display = "none"
})

$('.vision-trig').click(function(){
  triggers()

  this.classList.add('selected')

  $('.vision')[0].style.display = "block"
  $('.mission')[0].style.display = "none"
  $('.values')[0].style.display = "none"
})

$('.values-trig').click(function(){
  triggers()
  
  this.classList.add('selected')

  $('.values')[0].style.display = "block"
  $('.vision')[0].style.display = "none"
  $('.mission')[0].style.display = "none"
})

$('.wrapper-kits').slick({
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
  slidesToShow: 4,
})
$('.wrapper-relateds').slick({
  prevArrow: '.related-left',
  nextArrow: '.related-right',
  slidesToShow: 4,
})