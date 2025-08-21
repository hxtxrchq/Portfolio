// DOM Elements
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const statNumbers = document.querySelectorAll(".stat-number")
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

// Loading Animation
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading")
  if (loading) {
    setTimeout(() => {
      loading.classList.add("hidden")
    }, 1000)
  }
})

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")

  // Animate hamburger bars
  const bars = hamburger.querySelectorAll(".bar")
  if (hamburger.classList.contains("active")) {
    bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
    bars[1].style.opacity = "0"
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
  } else {
    bars[0].style.transform = "none"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")

    const bars = hamburger.querySelectorAll(".bar")
    bars[0].style.transform = "none"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "none"
  })
})

// Smooth Scrolling Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Animated Counter for Stats
function animateCounter(element, target) {
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 20)
}

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate stats when they come into view
      if (entry.target.classList.contains("stats")) {
        statNumbers.forEach((stat) => {
          const target = Number.parseInt(stat.getAttribute("data-target"))
          animateCounter(stat, target)
        })
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".fade-in, .stats, .timeline-item, .project-card, .cert-card").forEach((el) => {
  el.classList.add("fade-in")
  observer.observe(el)
})

// Project Filter Functionality
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden")
        setTimeout(() => {
          card.style.display = "block"
        }, 10)
      } else {
        card.classList.add("hidden")
        setTimeout(() => {
          if (card.classList.contains("hidden")) {
            card.style.display = "none"
          }
        }, 300)
      }
    })
  })
})

// Typing Animation for Hero Text
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    setTimeout(() => {
      typeWriter(typingElement, "Hola, soy", 150)
    }, 1500)
  }
})

// Parallax Effect for Floating Shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5
    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
  })
})

// Form Submission Enhancement
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const submitBtn = this.querySelector(".submit-btn")
    const originalText = submitBtn.innerHTML

    // Change button text during submission
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
    submitBtn.disabled = true

    // Reset button after 3 seconds (adjust based on your needs)
    setTimeout(() => {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 3000)
  })
}

// Add hover effects to skill tags
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)"
  })

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Add click effects to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Create ripple effect
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Enhanced scroll animations
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in:not(.visible)")
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible")
    }
  })
}

// Throttle scroll events for better performance
let ticking = false
function updateScrollAnimations() {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScrollAnimations()
      ticking = false
    })
    ticking = true
  }
}

window.addEventListener("scroll", updateScrollAnimations)

// Add loading animation to page
document.addEventListener("DOMContentLoaded", () => {
  // Create loading overlay
  const loadingOverlay = document.createElement("div")
  loadingOverlay.className = "loading"
  loadingOverlay.innerHTML = '<div class="loader"></div>'
  document.body.appendChild(loadingOverlay)

  // Remove loading overlay after page loads
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingOverlay.classList.add("hidden")
      setTimeout(() => {
        loadingOverlay.remove()
      }, 500)
    }, 1000)
  })
})

// Add dynamic tech marquee duplication for seamless loop
document.addEventListener("DOMContentLoaded", () => {
  const techTrack = document.querySelector(".tech-track")
  if (techTrack) {
    const techItems = techTrack.innerHTML
    techTrack.innerHTML = techItems + techItems // Duplicate for seamless loop
  }
})

// Add active nav link highlighting based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})
