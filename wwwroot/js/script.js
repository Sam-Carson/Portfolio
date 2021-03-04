
// mobile nav
const mobileNavToggle = document.getElementById('mobileNavBtn');
const mobileNavSlideOut = document.getElementsByClassName('mobile-nav-slide-out');

mobileNavToggle.addEventListener('click', () => {
    

})





// fade in effect
const fadeIn = document.querySelectorAll('.fade-up');
const viewportHeight = self.innerHeight;

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function (entries, appearOnScroll) { 
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

fadeIn.forEach(fadeIn => {
    appearOnScroll.observe(fadeIn);
});

// smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    offset: 150
});
