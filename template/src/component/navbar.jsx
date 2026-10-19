


import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Wubadel — Home"
        >
          W<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="navbar-menu"
          className={`navbar-menu ${menuOpen ? "is-open" : ""}`}
        >
          <ul className="navbar-links">
            <li>
              <a href="#home" className="nav-link active" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                Projects
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="navbar-contact"
            onClick={closeMenu}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
