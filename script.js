const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
// const ikonMenu = document.querySelector('.openMenu i');

const MainMenuItem = document.querySelectorAll('.mainMenu li a');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',remove);



function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0'
    ikonMenu.style.display ='none'
}
function close(){
    mainMenu.style.top = '-100%'
    ikonMenu.style.display ='block'

}
function remove(){
    mainMenu.style.top = '-100%';


}





// scrool
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 120) {
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     })
// });

const header = document.querySelector('header');
window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 20);

});

// efek ketik
const txtElement = ['Student,','Web Developer.'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if(count== txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex)
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;

    }

    setTimeout(ngetik, 170);

})();


// reveal 
window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      } else{
          reveals[i].classList.remove("active");
      }
    }
  }

//  galery
const gambar = document.querySelector('.gambar');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

gambar.addEventListener('click', function(e){

    if(e.target.className == 'thumb') {

        jumbo.src = e.target.src;

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb'
        });
        e.target.classList.add('active')

    }


});


// MESSAGE CONTACT
const submitContact = document.querySelector('#Contact form');

submitContact.addEventListener('submit', function() {
    alert("terkirim");
});

// button cv
const buttonCv = document.querySelector('.banners a input[name="buttonCV"]');

buttonCv.addEventListener('click', () => {
});