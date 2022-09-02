import { ReactNode } from 'react';

export function Modal({ onClose, children, title }: { onClose: () => unknown; children?: ReactNode; title: string }) {
  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen bg-white/40 flex items-center justify-center z-20 backdrop-blur p-2 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-black w-full max-w-2xl rounded shadow-xl max-h-full overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 md:py-4 border-b border-neutral-500">
          <h3 className="font-bold text-lg md:text-2xl">{title}</h3>

          <button className="hover:opacity-70" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="p-4 pb-12">{children}</div>
      </div>
    </div>
  );
}
