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

const sectionEle = document.querySelectorAll('section');
const ulList = document.querySelector('#navbar__list');

for(const dataSec of sectionEle) {

    dataSecId = dataSec.id;
    dataSecNav = dataSec.dataset.nav;
    
    const elementLi = document.createElement('li');
    let anchorTag = `<a href=#${dataSecId} class="menuLink" id="${dataSecId}">${dataSecNav}</a>`;
    elementLi.innerHTML = anchorTag;
    ulList.appendChild(elementLi);

    // Scroll to anchor ID using scrollTO event


    elementLi.addEventListener('click', (scroll) => {
        scroll.preventDefault();
        dataSec.scrollIntoView({
        behavior : "smooth",
        })
    })
}


// Add class 'active' to section when near top of viewport

const navbarLinks = document.querySelectorAll('a');

if(!!window.IntersectionObserver) {
    const observer = new IntersectionObserver((enteries, observer)=>{
        console.log(enteries);
        for(const entery of enteries){
            console.log(entery);
            if(entery.isIntersecting){
            for(const section of sectionEle) {
            if(section.id === entery.target.id) {
            section.classList.add('section__active');
            for(const navLinks of navbarLinks) {
                if(navLinks.id === entery.target.id) {
                    navLinks.classList.add('navbar__active');
                }else {
                    navLinks.classList.remove('navbar__active');
                }
            }
            }else {
                section.classList.remove('section__active');
            }
            }
            }
        }
    });
    sectionEle.forEach((section) => {
        observer.observe(section);
    });
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


