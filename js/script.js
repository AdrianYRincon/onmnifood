///////////////////////////////////////////////////////////

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//make mobile navigation
const header = document.querySelector('.header');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', ()=> {
  header.classList.toggle('nav-open');
})

//Smooth scrolling navigation
const allLinks = document.querySelectorAll('a:link');


allLinks.forEach( function(link){
link.addEventListener('click',(e)=> {
  e.preventDefault();
  const href = link.getAttribute('href');
  

  // Scroll back to tops
  if (href ==='#') 
  {
    window.scrollTo( {
      top:0,
      behavior:"smooth"  
    })
  
  }

  // Scroll to other links
  if(href !== '#' && href.startsWith('#')){
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({behavior: 'smooth'});
  }

  //close mobile navigation

  if(link.classList.contains('main-nav-link')) {
    header.classList.toggle('nav-open');
  }
  
})
})

// Stiky navigation
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if(!ent.isIntersecting){
    document.body.classList.add('sticky');
  }
  else {
    document.body.classList.remove('sticky');
  }
}, {
  //in the viewport
  root:null,
  threshold:0,
  rootMargin:'-80px',
});
observer.observe(sectionHeroEl)

