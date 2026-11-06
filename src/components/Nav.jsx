import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#sobre-mi', label: 'Perfil' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
];

function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#hero" className="nav__brand" onClick={close}>
        {name}
      </a>

      <button
        className={`nav__hamburger${open ? ' nav__hamburger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav__links${open ? ' nav__links--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav__link" onClick={close}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
