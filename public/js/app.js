// flex-navigation
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navigation');
    if (document.documentElement.scrollTop > 0) {
        navbar.style.background = '#141414';
        navbar.style.marginTop = "-22px";

    }
    else {
        navbar.style.background = 'transparent';
        navbar.style.marginTop = "0";
    }
}); 

// button to top
const btn = document.querySelector('#btn-scrolltop');
window.addEventListener('scroll', function () {

    if (document.documentElement.scrollTop > 0) {
        btn.style.display = 'block'
    }
    else {
        btn.style.display = 'none'
    }
});
btn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        let: 0,
        behavior: "smooth"
    });
});

// scroll-event
const counters = document.querySelectorAll('.counter')
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 3600) {
        countUp();
    }
});
function countUp()
{
    counters.forEach((counter) => {
        counter.textContent = '0000';
        const updateCouter = () => {
            const value = + counter.getAttribute('data-val');
            const c = + counter.textContent;
            const increment = value/250;
            if (c<value) {
                counter.textContent = `${Math.ceil(c + increment)}`;
                setTimeout(updateCouter, 1);
            }
            else {
                counter.textContent= value;
            }
        };
        updateCouter();
    });
}
