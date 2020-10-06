
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const topMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const activeClass = 'your-active-class';



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBuilder() {
    sections.forEach(section => {
        let sectionId = section.id;
        let sectionDataNav = section.dataset.nav;
        topMenu.insertAdjacentHTML('beforeend', `<li><a class="menu__link ${sectionId}" href="#${sectionId}">${sectionDataNav}</a></li>`)
    });

    const navbarList = document.querySelectorAll('li');

    navbarList.forEach(item => {
    item.setAttribute('class', 'menu__link');
});

}

navBuilder();



// Add class 'active' to section when near top of viewport

function setActive() {
    window.addEventListener('scroll', function(){
        for (let i = 1; i<= sections.length; i++) {
            let section = document.getElementById(`section${i}`);
            const itemId = section.getBoundingClientRect();

            if (itemId.top <= 150 && itemId.bottom >= 150) {
                const id = section.getAttribute('id');
                document.querySelector(`.${id}`).classList.add('active');
                section.classList.add(activeClass);
            } else {
                const id = section.getAttribute('id');
                document.querySelector(`.${id}`).classList.remove('active');
                section.classList.remove(activeClass);
            }}
         }); 
};


document.addEventListener('scroll', function() {
    setActive();
});



// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 



/**
 * End Main Functions
 * Begin Events
 * 
*/




