function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.querySelector(".openbtn").style.visibility = "hidden";
    document.querySelector(".closebtn").style.visibility = "visible";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.querySelector(".openbtn").style.visibility = "visible";
    document.querySelector(".closebtn").style.visibility = "hidden";
}

function toggleLogoVisibility() {
    const logo = document.querySelector('.navbar-logo');
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
  
    if (isDesktop) {
      // Hide the logo on desktop
      logo.style.display = 'none';
    } else {
      // Show the logo on mobile
      logo.style.display = 'flex';
    }
  }
  toggleLogoVisibility();
  window.addEventListener('resize', toggleLogoVisibility);

// Carousel functionality
// Carousel functionality with transition
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
      slide.classList.remove("hidden");
    } else {
      slide.classList.remove("active");
      slide.classList.add("hidden");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-rotate slides every 2 seconds
setInterval(nextSlide, 2000);

// Show the first slide by default
showSlide(currentSlide);

// Listen for click events on all anchor links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
   
    document.body.classList.add('fade-out');
    
   
    setTimeout(() => {
      window.location.href = e.target.href;  
    }, 300);  
  })
});

function scrollLeft() {
  const container = document.getElementById("team-members");
  container.scrollLeft -= 10; // Adjust the scroll amount as needed
}

function scrollRight() {
  const container = document.getElementById("team-members");
  container.scrollLeft += 10; // Adjust the scroll amount as needed
}
