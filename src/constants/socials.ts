export type SocialIconName =
  | 'github'
  | 'linkedin'
  | 'email'
  | 'whatsapp'
  | 'external';

export interface ISocialLink {
  href: string;
  label: string;
  icon: SocialIconName;
  external?: boolean;
}

export const CONTACT_EMAIL = 'danielholanda55@gmail.com';

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    href: 'https://github.com/dholand4',
    label: 'GitHub',
    icon: 'github',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/daniel-holanda-78145a22b/',
    label: 'LinkedIn',
    icon: 'linkedin',
    external: true,
  },
  {
    href: 'https://wa.me/5588997000530',
    label: 'WhatsApp',
    icon: 'whatsapp',
    external: true,
  },
];
