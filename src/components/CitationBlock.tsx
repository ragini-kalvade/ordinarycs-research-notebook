import './CitationBlock.css';

interface CitationBlockProps {
  items: string[];
}

export default function CitationBlock({ items }: CitationBlockProps) {
  return (
    <section className="citation-block" aria-label="References">
      <h2 className="citation-block__title">References</h2>
      <ol className="citation-block__list">
        {items.map((item, index) => (
          <li key={index} id={`ref-${index + 1}`}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
