import './SiteHeader.css';

const navLinks = [
  { href: '/papers', label: 'Papers' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="/" className="site-header__brand">
          The Ordinary Computer Scientist
        </a>
        <nav className="site-header__nav" aria-label="Main">
          <ul className="site-header__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
