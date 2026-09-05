import { IconGlobal } from '@/components/iconGlobal';
import { ICompanyShowcaseGlobalProps } from './types';
import {
  AllPillButton,
  CountBadge,
  DockHeader,
  DockLabel,
  DockScrollContainer,
  DockWrap,
  ExternalIconLink,
  MiniLogo,
  MiniSquircle,
  PillButton,
  PillName,
} from './style';

export function CompanyShowcaseGlobal({
  companies,
  selectedCompany,
  onSelectCompany,
  totalExperiencesCount = 6,
}: ICompanyShowcaseGlobalProps) {
  if (companies.length === 0) return null;

  const isAllActive = !selectedCompany;

  return (
    <DockWrap aria-label="Filtrar experiências por empresa">
      <DockHeader>
        <DockLabel>
          // Filtrar por organização
        </DockLabel>
      </DockHeader>

      <DockScrollContainer role="toolbar" aria-label="Filtro de empresas">
        <AllPillButton
          type="button"
          $active={isAllActive}
          onClick={() => onSelectCompany?.(null)}
          aria-pressed={isAllActive}
          aria-label="Exibir todos os projetos"
        >
          <PillName>Todos os projetos</PillName>
          <CountBadge $active={isAllActive}>
            {totalExperiencesCount}
          </CountBadge>
        </AllPillButton>

        {companies.map((company) => {
          const isActive =
            Boolean(selectedCompany) &&
            selectedCompany?.toLowerCase() === company.name.toLowerCase();

          const countMatch = company.deliveries?.match(/\d+/)?.[0];

          return (
            <PillButton
              key={company.name}
              type="button"
              $active={isActive}
              onClick={() => onSelectCompany?.(isActive ? null : company.name)}
              aria-pressed={isActive}
              aria-label={
                isActive
                  ? `Remover filtro de ${company.name}`
                  : `Filtrar projetos de ${company.name}`
              }
            >
              <MiniSquircle>
                {company.logo ? (
                  <MiniLogo src={company.logo} alt={`Logo ${company.name}`} />
                ) : (
                  <span>{company.name.charAt(0)}</span>
                )}
              </MiniSquircle>

              <PillName>{company.name}</PillName>

              {countMatch && (
                <CountBadge $active={isActive} aria-label={`${countMatch} projetos`}>
                  {countMatch}
                </CountBadge>
              )}

              {company.url && (
                <ExternalIconLink
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Site da ${company.name} (abre em nova aba)`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconGlobal name="external" size={11} aria-hidden />
                </ExternalIconLink>
              )}
            </PillButton>
          );
        })}
      </DockScrollContainer>
    </DockWrap>
  );
}
