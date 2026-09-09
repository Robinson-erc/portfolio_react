import { useState, useEffect } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const select = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-inner">
        <a href="#home" className="nav-mark" onClick={() => select("home")}>
          eric robinson
        </a>

        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <ul id="nav-links" className={menuOpen ? "nav-links open" : "nav-links"}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeLink === link.id ? "active" : undefined}
                onClick={() => select(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
