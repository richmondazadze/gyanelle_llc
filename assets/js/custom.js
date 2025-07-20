// Clean JavaScript for Gyanelle LLC

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Simple navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
	  } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Simple smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple image lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });

    // Enhanced mobile menu toggle with improved closing functionality
    function initializeMobileMenu() {
        const mobileMenuToggle = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('.navbar-collapse');
        
        if (mobileMenuToggle && mobileMenu) {
            let isMenuOpen = false;
            
            // Function to close mobile menu
            function closeMobileMenu() {
                if (isMenuOpen) {
                    mobileMenu.classList.remove('show');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    isMenuOpen = false;
                    
                    // Hide menu after animation completes
                    setTimeout(() => {
                        if (!isMenuOpen) {
                            mobileMenu.style.display = 'none';
                        }
                    }, 400);
                    
                    // Remove body scroll lock
                    document.body.style.overflow = '';
                    document.body.style.paddingRight = '';
                }
            }
            
            // Function to open mobile menu
            function openMobileMenu() {
                if (!isMenuOpen) {
                    mobileMenu.style.display = 'block';
                    // Force reflow for smooth animation
                    mobileMenu.offsetHeight;
                    mobileMenu.classList.add('show');
                    mobileMenuToggle.setAttribute('aria-expanded', 'true');
                    isMenuOpen = true;
                    
                    // Prevent body scroll when menu is open
                    document.body.style.overflow = 'hidden';
                }
            }
            
            // Toggle mobile menu
            mobileMenuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (isMenuOpen) {
                    closeMobileMenu();
	        } else {
                    openMobileMenu();
                }
            });

            // Close mobile menu when clicking on navigation links
            const mobileLinks = mobileMenu.querySelectorAll('.nav-link, .cta-button');
            mobileLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Don't close if it's a dropdown toggle or has submenu
                    if (link.classList.contains('dropdown-toggle') || link.nextElementSibling?.classList.contains('dropdown-menu')) {
                        return;
                    }
                    
                    closeMobileMenu();
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (isMenuOpen && !mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                    closeMobileMenu();
                }
            });

            // Close mobile menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && isMenuOpen) {
                    closeMobileMenu();
                }
            });

            // Close mobile menu on window resize (if screen becomes larger)
            window.addEventListener('resize', function() {
                if (window.innerWidth > 991 && isMenuOpen) {
                    closeMobileMenu();
                }
            });

            // Close mobile menu when scrolling (optional - uncomment if desired)
            // window.addEventListener('scroll', function() {
            //     if (isMenuOpen) {
            //         closeMobileMenu();
            //     }
            // });

            // Prevent menu from closing when clicking inside the menu itself
            mobileMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });

            // Enhanced touch/swipe support for mobile
            let touchStartX = 0;
            let touchEndX = 0;

            mobileMenu.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            mobileMenu.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                const swipeDistance = touchEndX - touchStartX;
                
                // Swipe right to close menu
                if (swipeDistance > swipeThreshold && isMenuOpen) {
                    closeMobileMenu();
                }
            }

            // Close menu when clicking on overlay (if menu is full screen)
            if (mobileMenu.classList.contains('fullscreen')) {
                mobileMenu.addEventListener('click', function(e) {
                    if (e.target === mobileMenu) {
                        closeMobileMenu();
	        }
	    });
	}

            // Return success
            return true;
        }
        
        return false;
    }

    // Initialize mobile menu with retry mechanism
    let menuInitialized = false;
    let retryCount = 0;
    const maxRetries = 3;

    function tryInitializeMenu() {
        if (!menuInitialized && retryCount < maxRetries) {
            menuInitialized = initializeMobileMenu();
            if (!menuInitialized) {
                retryCount++;
                setTimeout(tryInitializeMenu, 100);
            }
        }
    }

    // Try to initialize immediately
    tryInitializeMenu();

    // Also try after a short delay to ensure DOM is fully ready
    setTimeout(tryInitializeMenu, 50);
});