class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.8);
          color: white;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .social-links a {
          color: white;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: #3b82f6;
        }
      </style>
      <footer>
        <div class="social-links">
          <a href="https://github.com/balapradeeps" target="_blank">
            <i data-feather="github"></i>
          </a>
          <a href="https://linkedin.com/in/balapradeep" target="_blank">
            <i data-feather="linkedin"></i>
          </a>
          <a href="mailto:balapradeep.s@devops.dev">
            <i data-feather="mail"></i>
          </a>
        </div>
        <p>&copy; ${new Date().getFullYear()} Balapradeep. All rights reserved.</p>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);