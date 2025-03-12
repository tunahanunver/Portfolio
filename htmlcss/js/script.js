/*=============== NAVBAR FUNCTIONALITY ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

/* Menu toggle */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('active');
    })
}

/* Remove menu mobile when clicking nav links */
const navLinks = document.querySelectorAll('.nav_link')

function linkAction(){
    // Remove show-menu class
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('active');
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/* Change background header on scroll */
function scrollHeader(){
    const header = document.querySelector('.header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Active link on scroll */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_link[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_link[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// TYPİNG TEXT
var typed = new Typed(".profession_text", {
        strings: ["Game Developer", "Software Developer"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
})

// SWİPER
var swiper = new Swiper(".brand_container", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      loop: true,
  });

// BACK TOP BUTTON 
const back_btn_top = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
       back_btn_top.classList.add("active")
    }else{
        back_btn_top.classList.remove("active")
    }
})

// WORK IMAGE SLIDER
document.addEventListener('DOMContentLoaded', () => {
    const workSliders = document.querySelectorAll('.work_img-slider');
    
    workSliders.forEach(slider => {
        const images = slider.querySelectorAll('.work_img');
        const dots = slider.querySelectorAll('.work_img-dot');
        let currentIndex = 0;
        let interval;
        
        // Function to show specific image
        const showImage = (index) => {
            // Remove active class from all images and dots
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current image and dot
            images[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentIndex = index;
        };
        
        // Function to show next image
        const nextImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        };
        
        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(interval);
                showImage(index);
                startAutoSlide();
            });
        });
        
        // Start auto slide
        const startAutoSlide = () => {
            interval = setInterval(nextImage, 3000);
        };
        
        // Initialize slider
        startAutoSlide();
        
        // Pause auto slide on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        // Resume auto slide on mouse leave
        slider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    });
});

// CONTACT FORM
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = {
                name: document.getElementById('contact-name').value,
                email: document.getElementById('contact-email').value,
                subject: document.getElementById('contact-subject').value,
                message: document.getElementById('contact-message').value
            };
            
            // Form gönderildiğinde yapılacak işlemler
            // Normalde burada bir API'ye istek atılır, ancak şimdilik sadece konsola yazdıralım
            console.log('Form verileri:', formData);
            
            // Başarılı gönderim mesajı
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
            
            // Formu sıfırla
            contactForm.reset();
        });
    }
});

// PROJECT CATEGORIES
const categoryButtons = document.querySelectorAll('.work_category');
const workCards = document.querySelectorAll('.work_card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aktif kategori butonunu güncelle
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Seçilen kategoriyi al
        const selectedCategory = button.getAttribute('data-category');

        // Kartları filtrele
        workCards.forEach(card => {
            if (selectedCategory === 'all') {
                card.style.display = 'block';
            } else {
                const cardCategories = card.getAttribute('data-categories').split(',');
                if (cardCategories.includes(selectedCategory)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});