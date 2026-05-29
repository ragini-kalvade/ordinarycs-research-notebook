import './ReaderNotes.css';

export interface SidebarData {
  observations: string[];
  openQuestions: string[];
  relatedPapers: string[];
  citations: string[];
}

interface ReaderNotesProps {
  data: SidebarData;
  title?: string;
}

export default function ReaderNotes({
  data,
  title = 'Marginalia',
}: ReaderNotesProps) {
  return (
    <aside className="reader-notes" aria-label={title}>
      <h2 className="label-sm reader-notes__heading">{title}</h2>

      <section className="reader-notes__section">
        <h3 className="label-sm reader-notes__label">Key Observations</h3>
        <ul>
          {data.observations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="reader-notes__section">
        <h3 className="label-sm reader-notes__label">Open Questions</h3>
        <ul>
          {data.openQuestions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="reader-notes__section">
        <h3 className="label-sm reader-notes__label">Related Papers</h3>
        <ul>
          {data.relatedPapers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="reader-notes__section">
        <h3 className="label-sm reader-notes__label">Citations</h3>
        <ul className="reader-notes__citations">
          {data.citations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
