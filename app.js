// navbar responsive hamburger menu

const navSlide = ()=> {

    const navUl = document.querySelector('.nav-main-links');
    const navLinks = document.querySelectorAll('.nav-main-links li');
    const burger = document.querySelector('.burger');
    const signUp = document.querySelector('.nav-links .sign-up');
    burger.addEventListener('click', ()=> {
      
      // animation nav links
    navLinks.forEach((link, index)=>{
      
        if (link.style.animation) {
           link.style.animation = ''
        } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index /9 + 0.2}s`;
        }
       
       })

     navUl.classList.toggle('nav-active')
     signUp.classList.toggle('sign-active')
     burger.classList.toggle('toggle');
    })
}

navSlide();

// header background on scroll

window.addEventListener('scroll', function () {
   let header = document.querySelector('header');
   let windowPosition = window.scrollY > 0;
   header.classList.toggle('header-bg', windowPosition);
})

// details list for services 
const caretDown = ()=> {
   const caret = document.querySelectorAll('.details-package a');
 
   const packageList = document.querySelectorAll('.package-list');
   

   caret.forEach((ul,index)=> {
   
     ul.addEventListener('click', ()=> {
       
      
     if(packageList[index].style.display = "none") {
      packageList[index].classList.toggle('package-list-active')
     }
     
       })
   })
}
caretDown();

// copy-right
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;