import { IconGlobal } from '@/components/iconGlobal';
import { TagGlobal } from '@/components/tagGlobal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { IProjectCardGlobalProps } from './types';
import {
  Card,
  Description,
  Heading,
  LinkAnchor,
  Links,
  Num,
  Stack,
} from './style';

export function ProjectCardGlobal({
  number,
  title,
  description,
  stack,
  repoUrl,
  demoUrl,
}: IProjectCardGlobalProps) {
  const { onMouseMove } = useSpotlight();

  return (
    <Card onMouseMove={onMouseMove}>
      <Num>{number}</Num>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
      <Stack>
        {stack.map((item) => (
          <TagGlobal key={item} variant="accent">
            {item}
          </TagGlobal>
        ))}
      </Stack>
      <Links>
        <LinkAnchor
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Repositório de ${title} no GitHub`}
        >
          <IconGlobal name="github" size={14} aria-hidden />
          código
        </LinkAnchor>
        {demoUrl && (
          <LinkAnchor
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Demo ao vivo de ${title}`}
          >
            <IconGlobal name="external" size={14} aria-hidden />
            demo
          </LinkAnchor>
        )}
      </Links>
    </Card>
  );
}
