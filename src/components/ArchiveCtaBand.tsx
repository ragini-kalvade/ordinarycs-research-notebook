import EditorialButton from './EditorialButton';
import './ArchiveCtaBand.css';

export default function ArchiveCtaBand() {
  return (
    <section className="archive-cta">
      <div className="container archive-cta__inner">
        <h2 className="archive-cta__title">An Archive of Technical Inquiry</h2>
        <p className="archive-cta__text">
          Paper analyses, system notes, and engineering reflections written for
          depth over speed.
        </p>
        <EditorialButton href="/papers" variant="secondary">
          Enter the Collection
        </EditorialButton>
      </div>
    </section>
  );
}
