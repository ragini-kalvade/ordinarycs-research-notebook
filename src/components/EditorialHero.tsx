import EditorialButton from './EditorialButton';
import './EditorialHero.css';

export default function EditorialHero() {
  return (
    <section className="editorial-hero">
      <p className="label-sm editorial-hero__eyebrow">
        A research archive for careful technical reading
      </p>
      <h1 className="editorial-hero__title">The Ordinary Computer Scientist</h1>
      <p className="editorial-hero__subtitle">
        Research notes and systems analyses on AI, distributed systems, HCI, and
        engineering tradeoffs.
      </p>
      <div className="editorial-hero__actions">
        <EditorialButton href="/papers" variant="primary">
          Read the Archive
        </EditorialButton>
        <EditorialButton href="/philosophy" variant="secondary">
          Research Philosophy
        </EditorialButton>
      </div>
    </section>
  );
}
