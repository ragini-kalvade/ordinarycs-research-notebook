import './ArticleHeader.css';

interface ArticleHeaderProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  tags?: string[];
}

export default function ArticleHeader({
  title,
  author,
  date,
  readingTime,
  tags = [],
}: ArticleHeaderProps) {
  return (
    <header className="article-header">
      <p className="label-sm article-header__eyebrow">Research Analysis</p>
      <h1 className="article-header__title">{title}</h1>
      <div className="article-header__meta">
        <span>By {author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={date}>{formatDate(date)}</time>
        <span aria-hidden="true">·</span>
        <span>{readingTime}</span>
      </div>
      {tags.length > 0 && (
        <ul className="article-header__tags">
          {tags.map((tag) => (
            <li key={tag} className="label-sm">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}
