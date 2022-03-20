AOS.init()

document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu-nav').classList.toggle('animate');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}