// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}
// Loading the map
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("map")) {  
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhODkyMyIsImEiOiJjbTFqbDkzMmwwNm9hMmtvbWJxNWNhYWduIn0.UJgHX1BfpgFF6i62mxhfeg';

      const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/outdoors-v12",
          center: [-60, -3],
          zoom: 3
      });


      map.addControl(new mapboxgl.NavigationControl());

      map.on("load", function () {
          map.addSource("amazon-basin", {
              type: "geojson",
              data: "Data/amazon.geojson" 
          });

          map.addLayer({
              id: "amazon-fill",
              type: "fill",
              source: "amazon-basin",
              paint: {
                  "fill-color": "#800080",
                  "fill-opacity": 0.4 
              }
          });

          map.addLayer({
              id: "amazon-border",
              type: "line",
              source: "amazon-basin",
              paint: {
                  "line-color": "#000000",  
                  "line-width": 1
              }
          });
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  document.querySelector(".prev").addEventListener("click", function() {
      plusSlides(-1);
  });

  document.querySelector(".next").addEventListener("click", function() {
      plusSlides(1);
  });

  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
      dot.addEventListener("click", function() {
          currentSlide(index + 1);
      });
  });

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
  }
});


