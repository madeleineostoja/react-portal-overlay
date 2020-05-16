import { css } from '@emotion/core';
import React, {
  CSSProperties,
  HTMLProps,
  ReactNode,
  useRef,
  useEffect
} from 'react';
import { Portal } from 'react-portal';
import { CSSTransition } from 'react-transition-group';

export type OverlayProps = {
  /** Whether the overlay is open */
  open: boolean;
  /** Styles to apply to the default document-root portal */
  defaultPortalStyles?: CSSProperties | any;
  /** Custom element to render the overlay into */
  portal?: HTMLElement | null;
  /** Whether to close the overlay when clicked */
  closeOnClick?: boolean;
  /** Whether to close the overlay when the escape key is pressed */
  closeOnEsc?: boolean;
  /** Animation configuration */
  animation?: { duration: number; easing: string };
  /** Action when overlay closes */
  onClose?(): void;
  /** Content of the overlay */
  children?: ReactNode;
} & HTMLProps<HTMLDivElement>;

/**
 * Lock body scrolling overflow
 * @param state Whether to lock or not
 */
function lockScroll(state: boolean) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.style.overflow = state ? 'hidden' : '';
}

/**
 * A lightweight and performant fullscreen overlay component using React portals to render anywhere you need them to
 */
export function Overlay({
  open,
  portal,
  closeOnClick,
  closeOnEsc = true,
  defaultPortalStyles = { position: 'relative', zIndex: 999 },
  onClose = () => null,
  animation = {
    duration: 300,
    easing: 'ease'
  },
  children,
  ...attrs
}: OverlayProps) {
  const defaultPortal: any = useRef(null);

  if (
    !portal &&
    defaultPortal &&
    defaultPortal.current &&
    !!defaultPortalStyles
  ) {
    Object.keys(defaultPortalStyles).forEach((prop) => {
      defaultPortal.current.defaultNode.style[prop] = defaultPortalStyles[prop];
    });
  }

  if (open) {
    lockScroll(true);
  } else {
    lockScroll(false);
  }

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeOnEsc && onClose();
      }
    }

    document.addEventListener('keydown', onEsc);

    return document.removeEventListener('keydown', onEsc);
  }, [closeOnEsc]);

  return (
    <Portal ref={defaultPortal} {...(portal ? { node: portal } : {})}>
      <CSSTransition
        in={open}
        classNames="overlay"
        unmountOnExit
        timeout={animation.duration}
      >
        <div
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: scroll;
            transition: opacity ${animation.duration}ms ${animation.easing};
            -webkit-overflow-scrolling: touch;

            /* Transitions */
            &.overlay-enter-done {
              opacity: 1;
            }
            &.overlay-exit,
            &.overlay-enter {
              opacity: 0;
            }
          `}
          onClick={(e) => {
            if (closeOnClick) {
              e.preventDefault();
              if (e.target === e.currentTarget) {
                onClose();
              }
            }
          }}
          {...attrs}
        >
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
}
