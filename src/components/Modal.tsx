import { ReactNode, useEffect, useState } from 'react';

type TransitionState = 'initial' | 'entered' | 'exiting';

const TRANSITION_DURATION = 200;

const commonStyles = {
  transition: `all ${TRANSITION_DURATION}ms ease-in-out`,
};

function getModalStyle(transitionState: TransitionState): React.CSSProperties {
  if (transitionState === 'entered') {
    return {
      opacity: 1,
      transform: 'translateY(0px)',
    };
  }

  return {
    opacity: 0,
    transform: 'translateY(-150%)',
  };
}

function getOverlayStyle(transitionState: TransitionState): React.CSSProperties {
  if (transitionState === 'entered') {
    return {
      opacity: 1,
    };
  }

  return {
    opacity: 0,
  };
}

export function Modal({ onClose, children, title }: { onClose: () => unknown; children?: ReactNode; title: string }) {
  const [transitionState, setTransitionState] = useState<TransitionState>('initial');

  useEffect(() => {
    const timeout = setTimeout(() => setTransitionState('entered'), 0);

    return () => clearTimeout(timeout);
  }, []);

  const _onClose = () => {
    setTransitionState('exiting');

    setTimeout(() => onClose(), TRANSITION_DURATION);
  };

  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen bg-white/40 flex items-center justify-center z-20 backdrop-blur p-2 md:p-4"
      onClick={_onClose}
      style={{ ...getOverlayStyle(transitionState), ...commonStyles }}
    >
      <div
        className="bg-black w-full max-w-2xl rounded shadow-xl max-h-full overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{ ...getModalStyle(transitionState), ...commonStyles }}
      >
        <div className="flex items-center justify-between px-4 py-2 md:py-4 border-b border-neutral-500">
          <h3 className="font-bold text-lg md:text-2xl">{title}</h3>

          <button className="hover:opacity-70" onClick={_onClose}>
            ✕
          </button>
        </div>

        <div className="p-4 pb-12">{children}</div>
      </div>
    </div>
  );
}
