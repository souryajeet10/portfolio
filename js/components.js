/**
 * Reusable Global Components for Souryajeet Portfolio
 * Provides identical Navbar & Footer across all portfolio pages.
 */

const PortfolioComponents = {
  getNavbar(activeItem = 'projects', basePath = './') {
    const isHome = activeItem === 'home';
    const isProjects = activeItem === 'projects';

    const homeHref = isHome ? '#hero' : `${basePath}index.html`;
    const skillsHref = `${basePath}index.html#skills`;
    const projectsHref = isProjects ? (basePath === '../' ? './index.html' : `${basePath}projects/index.html`) : `${basePath}projects/index.html`;
    const experienceHref = `${basePath}index.html#experience`;
    const aboutHref = `${basePath}index.html#about`;
    const contactHref = `${basePath}index.html#contact`;

    const activeClass = "nav-link relative py-1 text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-neonViolet after:to-neonCyan after:shadow-[0_0_8px_rgba(56,189,248,0.8)]";
    const normalClass = "nav-link text-slate-300 hover:text-neonCyan transition-colors duration-200";

    const activeMobileClass = "mobile-nav-link px-3 py-2 rounded-lg text-white font-semibold bg-white/[0.04] border border-neonCyan/20";
    const normalMobileClass = "mobile-nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-neonCyan hover:bg-white/[0.02] transition";

    return `
<!-- BEGIN: NavigationBar -->
<header id="main-header" class="fixed top-0 inset-x-0 z-50 w-full backdrop-blur-md bg-cyberDark/80 border-b border-white/[0.08] transition-all duration-300 ease-in-out transform translate-y-0 opacity-100" data-purpose="site-navigation-header">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    <!-- Brand Logo -->
    <a class="flex items-center group text-2xl font-bold tracking-tight text-white focus:outline-none" href="${homeHref}">
      <span class="brand-wordmark text-white group-hover:text-slate-100 transition-colors">Souryajeet Singh</span>
    </a>
    
    <!-- Desktop Navigation Links -->
    <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-8 text-sm font-medium" id="desktop-nav">
      <a class="${isHome ? activeClass : normalClass}" href="${homeHref}">Home</a>
      <a class="${normalClass}" href="${skillsHref}">Skills</a>
      <a class="${isProjects ? activeClass : normalClass}" href="${projectsHref}">Projects</a>
      <a class="${normalClass}" href="${experienceHref}">Experience</a>
      <a class="${normalClass}" href="${aboutHref}">About</a>
      <a class="${normalClass}" href="${contactHref}">Contact</a>
    </nav>
    
    <!-- Right Action CTA -->
    <div class="flex items-center gap-4">
      <a class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-neonViolet via-purple-500 to-neonCyan group-hover:from-neonViolet group-hover:to-neonCyan hover:shadow-dual-glow transition-all duration-300" href="${contactHref}">
        <span class="relative px-5 py-2 transition-all ease-in duration-200 bg-cyberDark rounded-[10px] text-white font-semibold group-hover:bg-opacity-0 flex items-center gap-2">
          Let's Talk
          <svg class="w-4 h-4 text-neonCyan group-hover:translate-x-0.5 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </span>
      </a>
    </div>

    <!-- Mobile Hamburger Toggle Button -->
    <button id="mobile-menu-toggle" aria-label="Toggle navigation menu" class="md:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-neonCyan/50 focus:outline-none transition-colors">
      <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  
  <!-- Mobile Dropdown Navigation -->
  <div id="mobile-menu" class="hidden md:hidden px-4 pt-2 pb-6 border-t border-white/[0.06] bg-cyberDark/95 backdrop-blur-xl transition-all duration-300">
    <div class="flex flex-col space-y-3 font-medium text-sm text-slate-300 pt-2">
      <a class="${isHome ? activeMobileClass : normalMobileClass}" href="${homeHref}">Home</a>
      <a class="${normalMobileClass}" href="${skillsHref}">Skills</a>
      <a class="${isProjects ? activeMobileClass : normalMobileClass}" href="${projectsHref}">Projects</a>
      <a class="${normalMobileClass}" href="${experienceHref}">Experience</a>
      <a class="${normalMobileClass}" href="${aboutHref}">About</a>
      <a class="${normalMobileClass}" href="${contactHref}">Contact</a>
    </div>
  </div>
</header>
<!-- END: NavigationBar -->`;
  },

  getFooter(basePath = './') {
    const homeHref = `${basePath}index.html#hero`;
    return `
<!-- BEGIN: Footer -->
<footer class="relative border-t border-white/[0.08] bg-cyberDark overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8" data-purpose="site-footer" id="site-footer">
  <!-- Ambient Cyber Lighting in Footer -->
  <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-purple-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
  <div class="absolute bottom-0 left-1/4 w-72 h-72 bg-neonViolet/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
  <div class="absolute bottom-0 right-1/4 w-72 h-72 bg-neonCyan/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
  
  <div class="max-w-7xl mx-auto">
    <!-- Heroic Cinematic Name Centerpiece -->
    <div class="pt-14 sm:pt-20 pb-8 flex flex-col select-none relative group">
      <div class="heroic-name-container flex flex-col tracking-tighter uppercase font-extrabold leading-[0.85] text-center sm:text-left cursor-pointer group/name">
        <span class="heroic-name-word-1 text-6xl sm:text-8xl md:text-9xl lg:text-[11vw] font-extrabold">
          SOURYAJEET
        </span>
        <span class="heroic-name-word-2 text-6xl sm:text-8xl md:text-9xl lg:text-[11vw] font-extrabold">
          SINGH
        </span>
      </div>
      
      <!-- Subtle Tagline Underneath Name -->
      <div class="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-500">
        <span class="hover:text-slate-300 transition-colors">Developer</span>
        <span class="w-1 h-1 rounded-full bg-neonViolet/60"></span>
        <span class="hover:text-slate-300 transition-colors">Student</span>
        <span class="w-1 h-1 rounded-full bg-neonCyan/60"></span>
        <span class="hover:text-slate-300 transition-colors">Creator</span>
        <span class="w-1 h-1 rounded-full bg-neonViolet/60"></span>
        <span class="text-slate-400 hover:text-white transition-colors">Always Learning</span>
      </div>
    </div>
    
    <!-- Thin Divider Line -->
    <div class="w-full h-px bg-white/[0.08]"></div>

    <!-- Compact Footer Information Row -->
    <div class="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
      <!-- Left: Copyright & Credit -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2.5 text-xs font-mono text-slate-500 text-center sm:text-left">
        <span class="text-slate-400 font-medium">© 2026 Souryajeet Singh</span>
        <span class="hidden sm:inline text-slate-700">·</span>
        <span class="text-slate-500">Designed &amp; Built by Souryajeet</span>
      </div>

      <!-- Right: Links & Back to Top -->
      <div class="flex items-center gap-4 sm:gap-5 text-xs font-mono">
        <div class="flex items-center gap-2.5 text-slate-400">
          <a href="https://github.com/souryajeet10/" target="_blank" rel="noopener noreferrer" class="hover:text-neonCyan transition-colors">GitHub</a>
          <span class="text-slate-700">·</span>
          <a href="https://www.linkedin.com/in/souryajeet10/" target="_blank" rel="noopener noreferrer" class="hover:text-neonCyan transition-colors">LinkedIn</a>
          <span class="text-slate-700">·</span>
          <a href="mailto:souryajeet2006@gmail.com" class="hover:text-neonCyan transition-colors">Email</a>
        </div>
        
        <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' });" aria-label="Back to top" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-neonCyan/40 text-slate-400 hover:text-white transition-all text-xs font-mono group cursor-pointer">
          <span>Back to Top</span>
          <span class="text-neonCyan group-hover:-translate-y-0.5 transition-transform inline-block">↑</span>
        </button>
      </div>
    </div>
  </div>
</footer>
<!-- END: Footer -->`;
  },

  initNavbarScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    let lastScrollY = window.scrollY;
    let ticking = false;
    const threshold = 12;

    function handleNavbarScroll() {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top of page
      if (currentScrollY <= 20) {
        header.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
        header.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      const diff = currentScrollY - lastScrollY;

      // Only trigger if scroll delta exceeds threshold
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Scrolling DOWN -> Hide navbar smoothly
          header.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
          header.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');

          // Auto-close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.getElementById('hamburger-icon')?.classList.remove('hidden');
            document.getElementById('close-icon')?.classList.add('hidden');
          }
        } else {
          // Scrolling UP -> Show navbar smoothly
          header.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
          header.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleNavbarScroll);
        ticking = true;
      }
    }, { passive: true });

    // Mobile menu toggle
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        const isClosed = mobileMenu.classList.contains('hidden');
        if (isClosed) {
          mobileMenu.classList.remove('hidden');
          hamburgerIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
        } else {
          mobileMenu.classList.add('hidden');
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      });
    }
  }
};

// Auto-initialize when loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    PortfolioComponents.initNavbarScroll();
  });
}
