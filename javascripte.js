

// section-3


const track = document.querySelector('.slider-track1');
const dots = document.querySelectorAll('.dot');
const productsPerSlide = 4; 
const totalProducts = document.querySelectorAll('.product').length;
const totalSlides = Math.ceil(totalProducts / productsPerSlide);
let index = 0;

function updateSlider() {
  const slideWidth = document.querySelector('.product').offsetWidth * productsPerSlide;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function autoSlide() {
  index = (index + 1) % totalSlides;
  updateSlider();
}

setInterval(autoSlide, 3000);




const testimonials = [
  {
    name: "Fred Mark",
    stars: "★★★★★",
    feedback: "Honest, Trustworthy, Best Pricing, Fast shipping and Great customer support. buyHGHanabolics has earned my business for life!",
    date: "7 Days Ago"
  },
  {
    name: "Jane Doe",
    stars: "★★★★☆",
    feedback: "Great service but delivery could be faster. Overall, happy with the product quality!",
    date: "5 Days Ago"
  },
  {
    name: "John Smith",
    stars: "★★★★★",
    feedback: "Absolutely amazing experience! Highly recommended.",
    date: "2 Days Ago"
  }
];

let currentIndex = 0;

function displayTestimonial(index) {
  const testimonial = testimonials[index];
  document.querySelector(".j").textContent = testimonial.name;
  document.querySelector(".k").textContent = testimonial.stars;
  document.querySelector(".i p:nth-of-type(3)").textContent = testimonial.feedback;
  document.querySelector(".date").textContent = testimonial.date;
}

function changeTestimonial(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = testimonials.length - 1;
  if (currentIndex >= testimonials.length) currentIndex = 0;
  displayTestimonial(currentIndex);
}

displayTestimonial(currentIndex);
