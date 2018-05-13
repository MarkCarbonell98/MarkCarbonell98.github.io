document.addEventListener("DOMContentLoaded", function() {
      const toggler = document.getElementById("menu-toggler-link");
      const links = document.querySelector(".wrapper .navbar .navlinks");
      const link1 = document.querySelector("#link1");
      const link2 = document.querySelector("#link2");
      const link3 = document.querySelector("#link3");
      const h1 = document.querySelector('h1');
      const proyects = document.querySelector('#proyect-titel');
      const contact = document.querySelector('#contact');
      const hire = document.getElementsByClassName('hireButton')[0];
      const span = document.getElementById('copied');
      const phoneNumber = document.getElementById('phone-number');
      const submit = document.getElementsByClassName('send')[0];
      const nav = document.getElementsByClassName('navbar')[0];
      const container = document.getElementsByClassName('container')[0];
      let text = '+49(176)61256323';
      
      
      
      
      
      window.addEventListener('resize', function() {
            if(window.innerWidth < 500) {    
                  links.style.display = "none";
                  toggler.style.display = "flex";
            } else {
                  links.style.display = "flex";
                  toggler.style.display = "none";
            }
      });

      window.addEventListener('DOMContentLoaded', function() {
            fadeIn(nav, 250, 'flex');
            fadeIn(container, 400, 'block');
            if(window.innerWidth < 500) {    
                  links.style.display = "none";
                  toggler.style.display = "flex";
            } else {
                  links.style.display = "flex";
                  toggler.style.display = "none";
            }
      });
      
      toggler.addEventListener("click", function() {
            if(links.style.display === "none") {
                  links.style.display = "flex";
                  links.setAttribute("id", "navegation-links"); 
            } else if(links.style.display === "flex") {
                  links.removeAttribute("id");
                  links.style.display = "none";
            }
      });
      
      link1.addEventListener('click', function(e) {
            e.preventDefault();
            h1.scrollIntoView({
                  block: 'end',
                  behavior: 'smooth'
            });
      });
      link2.addEventListener('click', function(e) {
            e.preventDefault();
            proyects.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
            })
      });
      
      link3.addEventListener('click', function(e) {
            e.preventDefault();
            contact.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
            })
      });

      hire.addEventListener('click', function(e) {
            e.preventDefault();
            contact.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
            })
      });

      function fadeOut(el) {
            var op = 1;
            var timer = setInterval(function () {
                  if (op <= 0.1){
                        clearInterval(timer);
                        el.style.display = 'none';
                  }
              el.style.opacity = op;
              op -= op * 0.1;
            }, 70);
      }
      
      function fadeIn(el, time, display) {
            var op = 0;
            el.style.opacity = op;
            var timer = setInterval(function () {
                  if (op >= 1.0){
                        clearInterval(timer);
                  }
                  el.style.opacity = op;
                  op = op + 0.1;
            }, time);
            el.style.display = display;
      }
      
      phoneNumber.addEventListener('click', function(e) {
            e.stopPropagation();  
            e.preventDefault();  
            // Create the textarea input to hold our text.
            const element = document.createElement('input');
            // element.style.display = 'none';
            element.value = text;
            // Add it to the document so that it can be focused.
            document.body.appendChild(element);
            // Focus on the element so that it can be copied.
            element.focus();
            element.setSelectionRange(0, element.value.length);
            // Execute the copy command.
            document.execCommand('copy');
            // Remove the element to keep the document clear.
            document.body.removeChild(element);
            phoneNumber.scrollIntoView({
                  block: 'center'
            });
            fadeIn(span, 100, 'inline-block');
            fadeOut(span);
      });
});