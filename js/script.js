// Form Validation
(function () {
    'use strict'
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // Form is valid - you could add AJAX submission here
                event.preventDefault()
                alert('Thank you for your volunteer application! We will contact you soon.')
                form.reset()
                form.classList.remove('was-validated')
            }
            
            form.classList.add('was-validated')
        }, false)
    })
})()

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar')
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm')
        navbar.classList.add('bg-white')
        navbar.classList.remove('bg-light')
    } else {
        navbar.classList.remove('shadow-sm')
        navbar.classList.add('bg-light')
        navbar.classList.remove('bg-white')
    }
})
