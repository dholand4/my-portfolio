import { ContainerGlobal } from '@/components/containerGlobal';
import { IFooterGlobalProps } from './types';
import { Bar } from './style';

export function FooterGlobal({ text }: IFooterGlobalProps) {
  return (
    <Bar>
      <ContainerGlobal>
        <span>{text}</span>
      </ContainerGlobal>
    </Bar>
  );
}
