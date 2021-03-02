// Hamburger Navbar //
const hamburger = document.getElementsByClassName('hamburger-container');
const mobileNavSlideOut = document.getElementsByClassName('mobile-nav-slide-out');





// fade in effect
const fadeIn = document.querySelectorAll('.fade-up');
let viewportHeight = self.innerHeight;

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

