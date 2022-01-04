$(document).ready(function(){
      
    $("#goBack").click(function(){
        alert("This will take you to home page?"); 
    });

    $("h3 span").css('color', '#E83556');//changes color of read more in text to pink 
  

    const btnHamburger = document.querySelector('#btnHamburger'); 
    const body = document.querySelector('body'); 
    const header = document.querySelector('.header'); 
    const overlay = document.querySelector('.overlay'); 
    const fadeElems = document.querySelectorAll('.has-fade'); 
    const links = document.querySelector('.header__menu');

    [btnHamburger, links].forEach(item => {
        item.addEventListener('click', event => {
          //handle click
          console.log('Simplified :) ');
          
          body.classList.toggle('noscroll');

        if(header.classList.contains('open')){//close ham menu
            header.classList.remove('open'); 
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in'); 
                element.classList.add('fade-out'); 
            });
        }
        else{//open ham menu
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');  
                element.classList.add('fade-in'); 
            }); 
        }
        }); 
      }); 

});
