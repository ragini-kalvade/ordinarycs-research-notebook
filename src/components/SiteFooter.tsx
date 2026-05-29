import './SiteFooter.css';

const footerLinks = [
  { href: '/papers', label: 'Papers' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__brand">The Ordinary Computer Scientist</p>
        <nav className="site-footer__nav" aria-label="Footer">
          <ul className="site-footer__list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__tagline">Designed for careful reading.</p>
      </div>
    </footer>
  );
}
