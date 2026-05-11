import { useTypewriter } from '@/hooks/useTypewriter';
import { ITyperGlobalProps } from './types';
import { Cursor, Prompt, Wrapper } from './style';

export function TyperGlobal({ phrases }: ITyperGlobalProps) {
  const text = useTypewriter({ phrases });

  return (
    <Wrapper aria-live="polite">
      <Prompt>$</Prompt>
      <span data-testid="typer-text">{text}</span>
      <Cursor aria-hidden="true" />
    </Wrapper>
  );
}
