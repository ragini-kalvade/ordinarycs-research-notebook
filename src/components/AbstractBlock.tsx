import type { ReactNode } from 'react';
import './AbstractBlock.css';

interface AbstractBlockProps {
  children: ReactNode;
}

export default function AbstractBlock({ children }: AbstractBlockProps) {
  return (
    <section className="abstract-block" aria-label="Abstract">
      <p className="label-sm abstract-block__label">Abstract</p>
      <div className="abstract-block__content">{children}</div>
    </section>
  );
}
