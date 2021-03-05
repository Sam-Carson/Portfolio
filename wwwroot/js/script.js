
// mobile nav
const mobileNavToggle = document.querySelector('.hamburger-container');
const mobileNavSlideOut = document.querySelector('.mobile-nav-slide-out');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links');



mobileNavToggle.addEventListener('click', () => {
    mobileNavSlideOut.classList.toggle('mobile-nav-slide-out-appear');
})



const forEach = (array, callback, scope) => {
    for (var i = 0; i < array.length; i++){
        callback.call(scope, i, array[i]);
    }
}

forEach(mobileNavLinks, function (index, value) {
    value.addEventListener('click', () => {
        mobileNavSlideOut.classList.remove('mobile-nav-slide-out-appear');
    })
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
