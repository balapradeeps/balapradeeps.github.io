class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.25rem;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul { 
          display: flex; 
          gap: 1.5rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        a { 
          color: white; 
          text-decoration: none; 
          transition: all 0.2s;
          font-weight: 500;
          position: relative;
        }
        a:hover { 
          color: #3b82f6;
        }
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #3b82f6;
          transition: width 0.3s;
        }
        a:hover::after {
          width: 100%;
        }
        .nav-mobile-btn {
          display: none;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          ul.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(17, 24, 39, 0.95);
            padding: 1rem;
          }
          .nav-mobile-btn {
            display: block;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
          }
        }
      </style>
      <nav>
        <div class="logo">Balapradeep</div>
        <button class="nav-mobile-btn" id="mobile-btn">
          <i data-feather="menu"></i>
        </button>
        <ul id="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const mobileBtn = this.shadowRoot.getElementById('mobile-btn');
    const navLinks = this.shadowRoot.getElementById('nav-links');

    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      feather.replace();
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);