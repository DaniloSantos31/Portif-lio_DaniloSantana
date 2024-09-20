let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const portfolioItems = document.querySelectorAll('.portfolio-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-close');
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});
