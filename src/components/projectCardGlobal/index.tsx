import { useId, useState } from 'react';
import { IconGlobal } from '@/components/iconGlobal';
import { ModalGlobal } from '@/components/modalGlobal';
import { TagGlobal } from '@/components/tagGlobal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { IProjectCardGlobalProps } from './types';
import {
  Card,
  CompanyLabel,
  CompanyName,
  Description,
  Heading,
  LinkAnchor,
  Links,
  ModalDescription,
  ModalNum,
  ModalTitle,
  MoreButton,
  Num,
  Stack,
} from './style';

/** Limite de caracteres exibido no card antes de cortar com "…". */
const DESCRIPTION_LIMIT = 140;

export function ProjectCardGlobal({
  number,
  title,
  company,
  companyUrl,
  description,
  stack,
}: IProjectCardGlobalProps) {
  const { onMouseMove } = useSpotlight();
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const isTruncated = description.length > DESCRIPTION_LIMIT;
  const preview = isTruncated
    ? `${description.slice(0, DESCRIPTION_LIMIT).trimEnd()}…`
    : description;

  function renderCompany() {
    if (companyUrl) {
      return (
        <LinkAnchor
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Site da ${company}`}
        >
          <CompanyName>{company}</CompanyName>
          <IconGlobal name="external" size={13} aria-hidden />
        </LinkAnchor>
      );
    }
    return <CompanyName>{company}</CompanyName>;
  }

  return (
    <>
      <Card onMouseMove={onMouseMove}>
        <Num>{number}</Num>
        <Heading>{title}</Heading>
        <Description>
          {preview}
          {isTruncated && (
            <MoreButton
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Ver descrição completa de ${title}`}
            >
              ver mais
            </MoreButton>
          )}
        </Description>
        <Stack>
          {stack.map((item) => (
            <TagGlobal key={item} variant="accent">
              {item}
            </TagGlobal>
          ))}
        </Stack>
        <Links>
          <CompanyLabel>
            empresa
            {renderCompany()}
          </CompanyLabel>
        </Links>
      </Card>

      <ModalGlobal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy={titleId}
      >
        <ModalNum>{number}</ModalNum>
        <ModalTitle id={titleId}>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <Stack>
          {stack.map((item) => (
            <TagGlobal key={item} variant="accent">
              {item}
            </TagGlobal>
          ))}
        </Stack>
        <Links>
          <CompanyLabel>
            empresa
            {renderCompany()}
          </CompanyLabel>
        </Links>
      </ModalGlobal>
    </>
  );
}
