import type { ReactNode } from 'react';
import './PrincipleSection.css';

type Variant = 'text' | 'navyBlock' | 'imageBelow';

interface PrincipleSectionProps {
  title: string;
  body: ReactNode;
  variant?: Variant;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PrincipleSection({
  title,
  body,
  variant = 'text',
  imageSrc,
  imageAlt = '',
}: PrincipleSectionProps) {
  if (variant === 'navyBlock') {
    return (
      <section className="principle principle--navy">
        <div className="container principle__navy-grid">
          <div className="principle__navy-block">
            <h2 className="principle__navy-title">{title}</h2>
          </div>
          <div className="principle__navy-body">{body}</div>
        </div>
      </section>
    );
  }

  if (variant === 'imageBelow') {
    return (
      <section className="principle principle--image-below">
        <div className="container">
          <h2 className="principle__title">{title}</h2>
          <div className="principle__body">{body}</div>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="editorial-image principle__image"
              loading="lazy"
            />
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="principle">
      <div className="container principle__text-grid">
        <div>
          <h2 className="principle__title">{title}</h2>
          <div className="principle__body">{body}</div>
        </div>
        <aside className="principle__aside" aria-label="Supplementary note">
          <p className="label-sm principle__aside-label">Note</p>
          <p className="principle__aside-text">
            Layout, type, and contrast should disappear into the reading
            experience—not compete with it.
          </p>
        </aside>
      </div>
    </section>
  );
}
