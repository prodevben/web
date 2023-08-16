const instagramButton = document.getElementById("instagramButton");
instagramButton.addEventListener("click", function() {
  window.open("https://instagram.com/ben._.b08?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D")
});
const LinkedInButton = document.getElementById("LinkedInButton");
LinkedInButton.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/ben-undefined-7053a8286")
});
const TwitterButton = document.getElementById("TwitterButton");
TwitterButton.addEventListener("click", function() {
  window.open("https://twitter.com/Ben609267437239?t=KnWzA-zE72gkLcgXoPOLmQ&s=09")
});
const instagramBtn = document.getElementById('instagramBtn');

instagramBtn.addEventListener('click', () => {
  window.open('https://instagram.com/ben._.b08?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D');
});
const twitterBtn = document.getElementById("twitterBtn");
twitterBtn.addEventListener("click", function() {
  window.open("https://twitter.com/Ben609267437239?t=KnWzA-zE72gkLcgXoPOLmQ&s=09")
});
const linkedBtn = document.getElementById("linkedBtn");
linkedBtn.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/ben-undefined-7053a8286")
});


// Smooth scroll function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Smooth scroll when navbar links are clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    smoothScroll(targetId, 1000); // Adjust duration as needed
  });
});





