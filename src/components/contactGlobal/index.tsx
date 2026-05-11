import { ButtonGlobal } from '@/components/buttonGlobal';
import { ContainerGlobal } from '@/components/containerGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { SocialIconGlobal } from '@/components/socialIconGlobal';
import { IContactGlobalProps } from './types';
import { Section, Socials, Text, Title } from './style';

export function ContactGlobal({ email, socials }: IContactGlobalProps) {
  return (
    <Section id="contato">
      <ContainerGlobal>
        <SectionHeaderGlobal label="04 — contato" centered />
        <RevealGlobal>
          <Title>
            Vamos <span className="accent">construir</span> algo.
          </Title>
        </RevealGlobal>
        <RevealGlobal>
          <Text>Aberto a freelas, contratos e vagas full-time. Respondo em até 24h.</Text>
        </RevealGlobal>
        <RevealGlobal>
          <ButtonGlobal href={`mailto:${email}`}>{email}</ButtonGlobal>
        </RevealGlobal>
        <RevealGlobal>
          <Socials>
            {socials.map((social) => (
              <SocialIconGlobal
                key={social.icon}
                href={social.href}
                label={social.label}
                icon={social.icon}
                external={social.external}
              />
            ))}
          </Socials>
        </RevealGlobal>
      </ContainerGlobal>
    </Section>
  );
}
