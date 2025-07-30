// Enhanced JavaScript for Gyanelle LLC with Ultra-Smooth Animations

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Performance monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    
    function updateFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            if (fps < 30) {
                // Reduce animation complexity on low-end devices
                document.documentElement.classList.add('low-performance');
            }
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(updateFPS);
    }
    updateFPS();

    // Loading performance enhancement
    function initLoadingOptimization() {
        // Hide loading state when page is ready
        const loadingState = document.querySelector('.loading-state');
        if (loadingState) {
            setTimeout(() => {
                loadingState.style.opacity = '0';
                setTimeout(() => {
                    loadingState.style.display = 'none';
                }, 300);
            }, 100);
        }

        // Optimize font loading with better performance
        if ('fonts' in document) {
            Promise.all([
                document.fonts.load('300 1em Inter'),
                document.fonts.load('400 1em Inter'),
                document.fonts.load('600 1em Inter'),
                document.fonts.load('700 1em Inter'),
                document.fonts.load('400 1em Playfair Display'),
                document.fonts.load('600 1em Playfair Display')
            ]).then(() => {
                document.documentElement.classList.add('fonts-loaded');
            }).catch(() => {
                // Fallback if font loading fails
                document.documentElement.classList.add('fonts-loaded');
            });
        }
    }

    // Ultra-smooth navbar scroll effect with RAF optimization
    const navbar = document.querySelector('.premium-navbar');
    if (navbar) {
        let ticking = false;
        let lastScrollY = window.scrollY;
        
        function updateNavbar() {
            if (!navbar) return;
            
            const currentScrollY = window.scrollY;
            
            // Only update if scroll position changed significantly
            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
	  } else {
                navbar.classList.remove('scrolled');
            }
                lastScrollY = currentScrollY;
            }
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }, { passive: true });
    }

    // Perfect smooth scrolling with advanced easing
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                    const navbarHeight = navbar && navbar.offsetHeight ? navbar.offsetHeight : 80;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    // Use ultra-smooth scrolling with custom easing
                    smoothScrollTo(targetPosition, 1000, 'easeOutQuart');
            }
        });
    });
    }

    // Advanced smooth scroll function with multiple easing options
    function smoothScrollTo(targetPosition, duration, easing = 'easeOutQuart') {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            let easedProgress;
            switch (easing) {
                case 'easeOutQuart':
                    easedProgress = 1 - Math.pow(1 - progress, 4);
                    break;
                case 'easeOutCubic':
                    easedProgress = 1 - Math.pow(1 - progress, 3);
                    break;
                case 'easeOutExpo':
                    easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    break;
                default:
                    easedProgress = progress;
            }
            
            const run = startPosition + (distance * easedProgress);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Optimized image loading with smooth animations
    function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        // Preload critical images immediately
        const criticalImages = document.querySelectorAll('img[data-critical="true"]');
        criticalImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('fade-in');
            }
        });
        
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                    
                    // Load image if it has data-src
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // Add smooth fade-in animation only if not already loaded
                    if (!img.complete || img.naturalWidth === 0) {
                        img.style.opacity = '0';
                        img.style.transform = 'scale(0.95)';
                        img.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                        
                        img.onload = function() {
                            requestAnimationFrame(() => {
                                img.style.opacity = '1';
                                img.style.transform = 'scale(1)';
                            });
                        };
                    } else {
                        // Image already loaded, just add the class
                img.style.opacity = '1';
                        img.style.transform = 'scale(1)';
                    }
                    
                    img.classList.add('fade-in');
                imageObserver.unobserve(img);
            }
        });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
    });

    lazyImages.forEach(img => {
            // Only add lazy-image class if image isn't already loaded
            if (!img.complete || img.naturalWidth === 0) {
                img.classList.add('lazy-image');
            } else {
                img.classList.add('fade-in');
            }
        imageObserver.observe(img);
    });
    }

    // Fast & Simple scroll-triggered animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .visual-card, .service-features');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Immediate animation without delays
                        element.classList.add('animated');
                    
                    // Trigger child animations for service features immediately
                    if (element.classList.contains('service-features')) {
                        const listItems = element.querySelectorAll('li');
                        listItems.forEach((item) => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        });
                    }
                    
                    // Unobserve after animation to improve performance
                    animationObserver.unobserve(element);
                }
            });
        }, {
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    }

    // Premium stagger animations with advanced timing
    function initStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('.stagger-animation');
        
        staggerContainers.forEach(container => {
            const items = container.querySelectorAll('.stagger-item');
            
            // Set initial state for ultra-smooth entrance
            items.forEach(item => {
                item.style.transform = 'translateY(40px) scale(0.95)';
                item.style.opacity = '0';
                item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            const containerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        items.forEach((item, index) => {
                            // Enhanced stagger timing for premium feel
                            const delay = index * 120; // Optimized delay for uniform feel
                            setTimeout(() => {
                                item.classList.add('staggered-in');
                                item.style.transform = 'translateY(0) scale(1)';
                                item.style.opacity = '1';
                            }, delay);
                        });
                        containerObserver.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '0px 0px -100px 0px',
                threshold: 0.1
            });

            containerObserver.observe(container);
        });
    }

    // Optimized parallax effect for hero sections
    function initParallaxEffects() {
        if (window.innerWidth > 768) { // Only on desktop
            const parallaxElements = document.querySelectorAll('.parallax');
            let ticking = false;
            
            function updateParallax() {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const speed = element.dataset.speed || 0.5;
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });
                ticking = false;
            }
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });
        }
    }

    // Enhanced hover effects with smooth transitions
    function initHoverEffects() {
        const hoverElements = document.querySelectorAll('.hover-effect');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.classList.add('hovered');
            });
            
            element.addEventListener('mouseleave', function() {
                this.classList.remove('hovered');
            });
        });
    }

    // Ultra-smooth mobile menu with advanced animations
    function initializeMobileMenu() {
        const mobileMenuToggle = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('.navbar-collapse');
        
        if (mobileMenuToggle && mobileMenu) {
            let isMenuOpen = false;
            
            function closeMobileMenu() {
                if (isMenuOpen) {
                    mobileMenu.classList.remove('show');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    isMenuOpen = false;
                    
                    setTimeout(() => {
                        if (!isMenuOpen) {
                            mobileMenu.style.display = 'none';
                        }
                    }, 400);
                    
                    document.body.style.overflow = '';
                    document.body.style.paddingRight = '';
                }
            }
            
            function openMobileMenu() {
                if (!isMenuOpen) {
                    mobileMenu.style.display = 'block';
                    mobileMenu.offsetHeight; // Force reflow
                    mobileMenu.classList.add('show');
                    mobileMenuToggle.setAttribute('aria-expanded', 'true');
                    isMenuOpen = true;
                    document.body.style.overflow = 'hidden';
                }
            }
            
            mobileMenuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (isMenuOpen) {
                    closeMobileMenu();
	        } else {
                    openMobileMenu();
                }
            });

            // Close menu when clicking on navigation links
            const mobileLinks = mobileMenu.querySelectorAll('.nav-link, .cta-button');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    closeMobileMenu();
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (isMenuOpen && !mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                    closeMobileMenu();
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && isMenuOpen) {
                    closeMobileMenu();
                }
            });

            // Close menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 991 && isMenuOpen) {
                    closeMobileMenu();
                }
            });

            // Enhanced touch/swipe support
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
                
                if (swipeDistance > swipeThreshold && isMenuOpen) {
                    closeMobileMenu();
                }
            }

            return true;
        }
        return false;
    }

    // Advanced performance optimizations
    function initPerformanceOptimizations() {
        // Debounced scroll handler
        let scrollTimeout;
        
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            scrollTimeout = setTimeout(() => {
                // Debounced scroll operations
            }, 16); // ~60fps
        }, { passive: true });

        // Optimize images for better performance
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Only add lazy loading to images that don't already have it
            if (!img.hasAttribute('loading') && !img.classList.contains('critical-image')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add error handling
            img.addEventListener('error', function() {
                console.warn('Image failed to load:', this.src);
                this.style.display = 'none';
                if (this.parentElement) {
                    this.parentElement.style.background = 'linear-gradient(135deg, #f1f5f9, #e2e8f0)';
                }
            });
        });

        // Preload critical resources with dynamic path detection
        const currentPath = window.location.pathname;
        const isSubfolder = currentPath.split('/').length > 2; // Check if we're in a subfolder
        const basePath = isSubfolder ? '../' : '';
        
        const criticalResources = [
            basePath + 'assets/images/logo.png',
            basePath + 'css/style.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'image';
            document.head.appendChild(link);
        });
    }

    // Modern mobile dropdown fix
    function initModernDropdown() {
        const isMobile = () => window.innerWidth < 992;
        document.querySelectorAll('.nav-item.dropdown').forEach(function(dropdown) {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            if (toggle && menu) {
                // Remove default Bootstrap dropdown on mobile
                toggle.addEventListener('click', function(e) {
                    if (isMobile()) {
                        e.preventDefault();
                        e.stopPropagation();
                        // Close other open dropdowns
                        document.querySelectorAll('.nav-item.dropdown .dropdown-menu.show').forEach(function(openMenu) {
                            if (openMenu !== menu) openMenu.classList.remove('show');
                        });
                        menu.classList.toggle('show');
                    }
                });
                // Close dropdown on outside click (mobile)
                document.addEventListener('click', function(e) {
                    if (isMobile() && !dropdown.contains(e.target)) {
                        menu.classList.remove('show');
                    }
                });
                // Close dropdown when any nav-link or cta-button is tapped (mobile)
                document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .cta-button').forEach(function(link) {
                    link.addEventListener('click', function() {
                        if (isMobile()) {
                            menu.classList.remove('show');
                        }
                    });
                });
                // Close dropdown when mobile menu closes
                const mobileMenu = document.querySelector('.navbar-collapse');
                if (mobileMenu) {
                    mobileMenu.addEventListener('hide.bs.collapse', function() {
                        menu.classList.remove('show');
                    });
                }
	        }
	    });
	}

    // Smooth dropdown animation for Services tab
    document.querySelectorAll('.nav-item.dropdown').forEach(function(dropdown) {
        var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        var dropdownMenu = dropdown.querySelector('.animate-dropdown');
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('show.bs.dropdown', function () {
                dropdownMenu.classList.add('show');
            });
            dropdownToggle.addEventListener('hide.bs.dropdown', function () {
                dropdownMenu.classList.remove('show');
            });
        }
    });

    // Hero Slideshow Functionality
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        slides[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    // Pause slideshow on hover (optional)
    const heroSlideshow = document.querySelector('.hero-slideshow');
    if (heroSlideshow) {
        heroSlideshow.addEventListener('mouseenter', stopSlideshow);
        heroSlideshow.addEventListener('mouseleave', startSlideshow);
        }
        
    // Start the slideshow
    startSlideshow();

    // Pause slideshow when user is not viewing the page
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    });
}

    // Initialize all functions
    function init() {
        try {
            initLoadingOptimization();
            initSmoothScrolling();
            initLazyLoading();
            initScrollAnimations();
            initStaggerAnimations();
            initParallaxEffects();
            initHoverEffects();
            initPerformanceOptimizations();
            initModernDropdown();
            initHeroSlideshow(); // Initialize the new slideshow function
        } catch (error) {
            console.warn('Some features failed to initialize:', error);
        }
        
        // Ensure all images are visible after a short delay
        setTimeout(() => {
            try {
                const allImages = document.querySelectorAll('img');
                allImages.forEach(img => {
                    if (img && img.complete && img.naturalWidth > 0) {
                        img.style.opacity = '1';
                        img.style.transform = 'scale(1)';
                        img.classList.add('fade-in');
                    }
                });
            } catch (error) {
                console.warn('Image visibility check failed:', error);
            }
        }, 100);

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

    tryInitializeMenu();
    setTimeout(tryInitializeMenu, 50);
    }

    // Utility to switch Services nav between dropdown (desktop) and direct link (mobile)
    function adaptServicesNavDropdown() {
        const navs = document.querySelectorAll('.navbar-nav');
        navs.forEach(nav => {
            const dropdown = nav.querySelector('.nav-item.dropdown');
            if (!dropdown) return;
            const isMobile = window.innerWidth < 992;
            if (isMobile && dropdown.classList.contains('dropdown')) {
                // Replace dropdown with direct link
                const directLink = document.createElement('li');
                directLink.className = 'nav-item';
                directLink.innerHTML = `<a class="nav-link" href="../services/">Services</a>`;
                nav.replaceChild(directLink, dropdown);
            } else if (!isMobile && !nav.querySelector('.nav-item.dropdown')) {
                // Restore dropdown if missing
                const dropdownLi = document.createElement('li');
                dropdownLi.className = 'nav-item dropdown';
                dropdownLi.innerHTML = `
                    <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" tabindex="0">
                        Services
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end animate-dropdown" aria-labelledby="servicesDropdown">
                        <li><a class="dropdown-item" href="../services/">All Services Overview</a></li>
                        <li><a class="dropdown-item" href="../services/electrical.html">Electrical Services</a></li>
                        <li><a class="dropdown-item" href="../services/cleaning.html">Cleaning Services</a></li>
                        <li><a class="dropdown-item" href="../services/logistics.html">Logistics Solutions</a></li>
                        <li><hr class="dropdown-divider"></li>
                    </ul>
                `;
                // Insert before Contact nav item if possible
                const contactNav = nav.querySelector('a[href*="contact"]')?.closest('li');
                if (contactNav) {
                    nav.insertBefore(dropdownLi, contactNav);
                } else {
                    nav.appendChild(dropdownLi);
                }
            }
        });
    }

    window.addEventListener('resize', adaptServicesNavDropdown);
    adaptServicesNavDropdown();

    // Initialize everything
    init();
});