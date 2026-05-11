import { TagGlobal } from '@/components/tagGlobal';
import { ISkillGroupGlobalProps } from './types';
import { Card, Heading, TagList } from './style';

export function SkillGroupGlobal({ title, tags }: ISkillGroupGlobalProps) {
  return (
    <Card>
      <Heading>{title}</Heading>
      <TagList>
        {tags.map((tag) => (
          <TagGlobal key={tag}>{tag}</TagGlobal>
        ))}
      </TagList>
    </Card>
  );
}
