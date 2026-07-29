import { useEffect, useRef, useState } from 'react';
import { ICompany } from '@/constants/experiences';
import { ICompanyCarouselGlobalProps } from './types';
import { CAROUSEL_GAP, Item, Logo, Name, Sequence, Track, Wrap } from './style';

/** Duração fixa de um ciclo do loop, em segundos. Maior = mais lento. */
const CYCLE_SECONDS = 13;

function CompanyItem({ company }: { company: ICompany }) {
  const isLink = Boolean(company.url);

  return (
    <Item
      as={isLink ? 'a' : 'div'}
      href={company.url}
      target={isLink ? '_blank' : undefined}
      rel={isLink ? 'noopener noreferrer' : undefined}
      aria-label={company.name}
    >
      {company.logo ? (
        <Logo src={company.logo} alt={company.name} />
      ) : (
        <Name>{company.name}</Name>
      )}
    </Item>
  );
}

export function CompanyCarouselGlobal({
  companies,
}: ICompanyCarouselGlobalProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(CYCLE_SECONDS);

  useEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      const sequence = sequenceRef.current;
      if (!wrap || !sequence) return;

      const sequenceWidth = sequence.getBoundingClientRect().width;
      if (sequenceWidth === 0) return;

      // Uma sequência + o gap que a separa da próxima: distância exata do loop.
      const loopDistance = sequenceWidth + CAROUSEL_GAP;
      const wrapWidth = wrap.getBoundingClientRect().width;

      setDistance(loopDistance);
      setDuration(CYCLE_SECONDS);
      // Cópias suficientes para preencher a tela + 1 (nunca sobra espaço vazio).
      setCopies(Math.max(2, Math.ceil(wrapWidth / loopDistance) + 1));
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (wrapRef.current) observer.observe(wrapRef.current);
    if (sequenceRef.current) observer.observe(sequenceRef.current);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [companies]);

  if (companies.length === 0) return null;

  return (
    <Wrap ref={wrapRef} aria-label="Empresas">
      <Track
        style={
          {
            '--marquee-dist': `${distance}px`,
            animationDuration: `${duration}s`,
          } as React.CSSProperties
        }
      >
        {Array.from({ length: copies }).map((_, copyIndex) => (
          <Sequence
            key={copyIndex}
            ref={copyIndex === 0 ? sequenceRef : undefined}
            aria-hidden={copyIndex > 0}
          >
            {companies.map((company, index) => (
              <CompanyItem
                key={`${copyIndex}-${company.name}-${index}`}
                company={company}
              />
            ))}
          </Sequence>
        ))}
      </Track>
    </Wrap>
  );
}
