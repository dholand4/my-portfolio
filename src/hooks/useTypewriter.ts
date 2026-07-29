import { useEffect, useState } from 'react';

interface IUseTypewriterOptions {
  phrases: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}

export function useTypewriter({
  phrases,
  typeSpeed = 60,
  deleteSpeed = 35,
  holdMs = 1800,
}: IUseTypewriterOptions): string {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return undefined;
    const phrase = phrases[phraseIndex];

    if (!deleting && text === phrase) {
      const timeout = window.setTimeout(() => setDeleting(true), holdMs);
      return () => window.clearTimeout(timeout);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return undefined;
    }

    const delay = deleting ? deleteSpeed : typeSpeed + Math.random() * 40;
    const timeout = window.setTimeout(() => {
      setText((prev) =>
        deleting ? prev.slice(0, -1) : phrase.slice(0, prev.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, holdMs]);

  return text;
}
