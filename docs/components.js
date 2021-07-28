class Header extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<header>
        <nav class="nav">
          <div class="nav-first nav-title">
            <a href="/">nelson</a>  
          </div>
          <div>
            <ul class="nav-list">
              <li>
                <a href="/portfolio">portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>`
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<footer>
        <a href="https://github.com/nelson-antunes">GitHub</a>
        <a href="https://www.linkedin.com/in/nelson-antonio-antunes-junior-b5659199/">LinkedIn</a>
      </footer>    `
  }
}

customElements.define('nelson-header', Header)
customElements.define('nelson-footer', Footer)