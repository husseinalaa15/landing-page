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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
 * 
*/


// get all sections and navbar menu

const sections = document.getElementsByTagName('section');
const menu = document.getElementById('navbar__list');


// here im looping on section to put every section in an its li inside menu or navbar
    for(section of sections){
        // get every section id
        let sectionId = section.id;
        // get every section data-nav
        let sectionDataNav = section.getAttribute('data-nav');
        // creating li tag for each section
        let LiItems = document.createElement('li');
        // add an anchor link for each li for each section and assign it to datanav with href to the id to jump to it 
        LiItems.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionDataNav}</a>`;
        // adding it to its li
        menu.appendChild(LiItems);
    }
    // catch every anchor link of navbar list
    const menuAnchor = document.querySelectorAll("#navbar__list a");
    
    menuAnchor.forEach((link) => {
        // onclick on each one of these links 
        link.addEventListener('click', (e) => {
            e.preventDefault();  // prevent the page from reloading (a default behavior when a link is clicked)
            // gets its hash
            const id = e.target.hash;
            // console.log(id);
            // catch it
            const targetSection = document.querySelector(id) // use `.querySelector(id)` to select the corresponding section
            // console.log(targetSection);
            // add smooth scrolling feature insted of jumping to section
            
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
            
        })
    });
    
    


// check if section inview has class active 

window.addEventListener("scroll", function classActive(){
    
// check if element in view 
 

    for(section of sections){
        // get each section bounding client rect
        sectionRect = section.getBoundingClientRect();
        // check if it in view
        if(sectionRect.top >= -200 && sectionRect.top <= 150 ){
            // if it doesnt have your active class add it 
            if(!section.classList.contains('your-active-class')){
                section.classList.add("your-active-class");
                // console.log(section.id + "doesnt have active class");
            }
            // console.log(section.id + "is in view");
        }else{
            // if it has it and not in view then remove active class
            section.classList.remove("your-active-class");
            // console.log("remove")
        }

    }
  
}
);
