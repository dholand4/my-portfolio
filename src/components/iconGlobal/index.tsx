import { IIconProps } from './types';
import { Svg } from './style';

const GITHUB_PATH =
  'M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z';

const LINKEDIN_PATH =
  'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 01.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z';

export function IconGlobal({ name, size = 18, ...rest }: IIconProps) {
  switch (name) {
    case 'github':
      return (
        <Svg $size={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
          <path d={GITHUB_PATH} />
        </Svg>
      );
    case 'linkedin':
      return (
        <Svg $size={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
          <path d={LINKEDIN_PATH} />
        </Svg>
      );
    case 'email':
      return (
        <Svg
          $size={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          {...rest}
        >
          <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2" />
        </Svg>
      );
    case 'external':
      return (
        <Svg
          $size={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          {...rest}
        >
          <path d="M7 17L17 7M9 7h8v8" />
        </Svg>
      );
  }
}
