import { useContext } from 'react';
import { ContactModalContext } from '../contexts';

export default function TopBar() {
  const { setShowingContactModal } = useContext(ContactModalContext);

  return (
    <div className="top-bar px-4 py-2 flex items-center justify-between bg-black relative shadow-lg z-10">
      <h2>Drew Pereli Woodworking</h2>
      <button
        type="button"
        onClick={() => setShowingContactModal(true)}
        className="border-none bg-gradient-to-tr from-red-400 to-indigo-900 px-4 py-2 rounded-sm shadow shadow-red-400 transition-transform font-bold hover:-translate-y-px hover:scale-105 active:translate-y-px active:scale-100"
      >
        GET IN TOUCH
      </button>
    </div>
  );
}
