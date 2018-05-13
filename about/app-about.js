document.addEventListener("DOMContentLoaded", function() {
      const toggler = document.getElementById("menu-toggler-link");
      const links = document.querySelector(".wrapper .navbar .navlinks");
      const lightbox = document.querySelector("#lightbox");
      const content = document.querySelector("#content");
      const close = document.querySelector("#closeicon");
      let fotos = [].slice.call(document.querySelectorAll(".list-images"));
      const arrowLeft = document.getElementById("arrow-left");
      const arrowRight = document.getElementById("arrow-right");
      const image = document.getElementById("displaying-image");
      const img = document.getElementsByClassName('display')[0];
      let descriptionParagraph = document.getElementById("description");
      const link1 = document.getElementById('link1');
      const link2 = document.getElementById('link2');
      const link3 = document.getElementById('link3');
      const story = document.getElementById('proyect-titel');
      const pictures = document.getElementById('pictures');
      const cv = document.getElementById('cv');
      const youtube = document.getElementById('youtube-video');
      const navbar = document.getElementsByClassName('navbar')[0];
      const container = document.getElementsByClassName('container')[0];

      
      let i;      
      let url;
      let indexUrl;
      let newDirection;
      
      const directions = [];
      let counter = 0;
      
      const histories = [
            "The whole Children on the Summit season II team at the Imja Tse's glacier, Nepal.",
            
            "Marcus leading the group towards the summit of the Imja Tse.",
            
            "At the feet of the Angel Falls.",
            
            "Angel Falls final Camp, it's a long 12-day walk through swamps, forests, and rivers to get there.",
            
            "Libertador, the Auyantepui's highest point, shortly after taking this picture an electric storm rushed upon us for the next 14 hours, preventing us from reaching the next campsite during the night.",
            
            "Andres, one of my mountain brothers and me on our way back to Sagarmatha Mountain School.",
            
            "Sled pulled by dogs in the western coast of Greenland.",
            
            "Aurora Borealis.",
            
            "The Venezuelan children of Children on the Summit season III arriving to Venezuela after a 48-day expedition through Greenland.",
            
            "View of the Humboldt and Bonpland peaks, from Bolivar's peak basecamp La Charca.",
            
            "Sunfall view from the Sagarmatha Mountain School, Merida, Venezuela.",
            
            "Me about to finish my first half-marathon in 2014.",
            
            "Flagging of me and my team just a few days before taking off to the Humboldt Spiele Cali 2015.",
            
            "My brothers of the Red Cross of Youth, after a night without sleep of disaster simulations.",
            
            "My mother and I shortly after my swearing ceremony as a Red Cross Brigadist.",
            
            "Dorado, one of our most beloved patients at La Gata veterinary clinic.",
            
            "Mammal glands tumor removal at La Gata veterinary clinic.",
            
            "A 4-meter long albino Burmese python at the Terrarium of the Francisco de Miranda Zoo, Caracas.",
            
            "My friends of the Gaitas group, shortly after our first presentation of the season 2014-2015.",
            
            "Live interview for Direct TV during the release of the Children on the Summit season II documentary.",
            
            "Another Interview for DirectTV PLUS.",
            
            "Marcus, friends of mine who also participated in the project and the Director of DirectTV Venezuela.",
            
            "Interview at 5524 m.a.s.l. during an acclimatization walk near Dingboche.",
            
            "The Summit of El Leon Peak 4740 m.a.s.l.",
            
            "Sunrise during the summit day to the Bolivar Peak, 4998 m.a.s.l.",
            
            "Walking through the moraines of the Venezuelan Paramo.",
            
            "Group picture of all expedition members in La Charca, Bolivar's peak basecamp.",
            
            "Occidental Peak of El Avila, Caracas' green lung at 2478 m.a.s.l.",
            
            "Looking at the distant Bolivar's peak summit from camp I.",
            
            "In the gala suit, shortly after my graduation ceremony.",

            "Price granted by the Humboldt School Caracas to the student with the most Social Labour Hours.",
            
            "Golden plate granted by the Direction of Sports of the Humboldt School Caracas for my participation in the Humboldt Spiele Cali 2015.",
            
            "My beloved mother and father, to whom I owe everything I have."
      ];
      
      function fadeIn(el, time, dis) {
            var op = 0;
            el.style.opacity = op;
            var timer = setInterval(function () {
                  if (op >= 1.0){
                        clearInterval(timer);
                  }
                  el.style.opacity = op;
                  op = op + 0.1;
            }, time);
            el.style.display = dis;
      }
      
      for (let i = 0; i < fotos.length; i++) {
            const element = fotos[i].getAttribute("src");
            directions.push(element);
            counter++;
      }
      
      window.addEventListener('resize', function() {
            if(window.innerWidth < 600) {    
                  links.style.display = "none";
                  toggler.style.display = "flex";
                  youtube.setAttribute('height', '350px');
            } else {
                  links.style.display = "flex";
                  toggler.style.display = "none";
                  youtube.setAttribute('height', '540px');
            }
      });
      
      window.addEventListener('DOMContentLoaded', function() {
            fadeIn(navbar, 200, 'flex');
            fadeIn(container, 400, 'block');
            if(window.innerWidth < 500) {    
                  links.style.display = "none";
                  toggler.style.display = "flex";
                  youtube.setAttribute('height', '350px');
            } else {
                  links.style.display = "flex";
                  toggler.style.display = "none";
                  youtube.setAttribute('height', '540px')
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


      for (let i = 0; i < fotos.length; i++) {
            const foto = fotos[i];
                  foto.addEventListener("click", function(event) {
                  event.preventDefault();
                  url = this.getAttribute('src');
                  img.setAttribute("src", url);
                  lightbox.style.display = "block";
                  indexUrl = directions.indexOf(url);
                  descriptionParagraph.innerHTML = histories[indexUrl];
            });
      }

      close.addEventListener("click", function() {
            lightbox.style.display = "none";
      });

      arrowLeft.addEventListener('click', function(event) {
            indexUrl = directions.indexOf(url);
            if(indexUrl > 0) {
                  newDirection = directions[indexUrl - 1];
                  url = newDirection;
                  image.setAttribute("src", url);
                  descriptionParagraph.innerHTML = histories[indexUrl - 1];
            }
      });

      arrowRight.addEventListener('click', function(event) {
            indexUrl = directions.indexOf(url);
            if(indexUrl < directions.length -1) {
                  newDirection = directions[indexUrl + 1];
                  url = newDirection;
                  image.setAttribute("src", url);
                  descriptionParagraph.innerHTML = histories[indexUrl + 1];
            }
      });

      lightbox.addEventListener('click', function(event) {
            if(event.target.id === 'lightbox') {
                  lightbox.style.display = 'none';
            }
      });

      link1.addEventListener('click', function(e) {
            e.preventDefault();
            story.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
            });
      });
      link2.addEventListener('click', function(e) {
            e.preventDefault();
            pictures.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
            })
      });
      
      link3.addEventListener('click', function(e) {
            e.preventDefault();
            cv.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
            })
      });


      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200 && JSON.parse(xhr.responseText).contents.quotes[0].quote.length < 81) {
                  i = document.querySelector("i").innerHTML = JSON.parse(xhr.responseText).contents.quotes[0].quote;
            } else {
                  i = "Life's a mountain, not a beach";
            }
      }
      xhr.open('GET', 'https://quotes.rest/qod?category=inspire', true);
      xhr.send();

});