window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background= '#e9d362'; // Change to your desired color
      header.style.background= '-webkit-linear-gradient(to right, #e9d362, #333333)'; // Change to your desired color
      header.style.background= 'linear-gradient(to right, #e9d362, #333333)'; // Change to your desired color
    } else {
      header.style.background = '#000000; '; // Original color
      header.style.background = ' -webkit-linear-gradient(to right, #000000, #434343) '; // Original color
      header.style.background = 'linear-gradient(to right, #000000, #434343) '; // Original color
    }
  });


  
var icon = document.querySelector(".icon")
var ul = document.querySelector("ul")

icon.addEventListener("click",function(){
  ul.classList.toggle("showData")
  console.log(ul);
  

  if(ul.className=="showData"){
    document.querySelector("#bar").className='ri-close-fill'
   
  }

  else{
    document.querySelector("#bar").className='ri-menu-fill'

    }
})
  