function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function ChangeLanguage(){

    var element = document.getElementById("EN");
    var element2 = document.getElementById("FR");
    if(element.classList.contains("act")){
      element.classList.remove("act");
      element2.classList.add("act");
    }
   else{
      element.classList.add("act");
      element2.classList.remove("act");
    }
    
  
  
    
  }
  
  var mybutton = document.getElementById("myBtn");
    
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
