import './FigureBlock.css';

interface FigureBlockProps {
  src: string;
  alt: string;
  caption: string;
}

export default function FigureBlock({ src, alt, caption }: FigureBlockProps) {
  return (
    <figure className="figure-block">
      <img src={src} alt={alt} className="figure-block__image" loading="lazy" />
      <figcaption className="figure-block__caption">{caption}</figcaption>
    </figure>
  );
}
