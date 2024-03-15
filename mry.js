document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slideshow-container img');
    let index = 0;
  
    function toggleActiveClass() {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }
  
    setInterval(toggleActiveClass, 5000); // Change slides every 5 seconds
  });
  