import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconGlobal } from '@/components/iconGlobal';
import { IModalGlobalProps } from './types';
import { CloseButton, Content, Overlay } from './style';

export function ModalGlobal({
  open,
  onClose,
  children,
  labelledBy,
}: IModalGlobalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <Content onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          <IconGlobal name="close" size={18} aria-hidden />
        </CloseButton>
        {children}
      </Content>
    </Overlay>,
    document.body,
  );
}
