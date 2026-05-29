import type { ReactNode } from 'react';
import './EditorialButton.css';

type Variant = 'primary' | 'secondary';

interface EditorialButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
}

export default function EditorialButton({
  href,
  variant = 'primary',
  children,
}: EditorialButtonProps) {
  return (
    <a href={href} className={`editorial-btn editorial-btn--${variant}`}>
      {children}
    </a>
  );
}
