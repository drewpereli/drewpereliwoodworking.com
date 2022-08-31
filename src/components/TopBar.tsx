export default function TopBar() {
  return (
    <div className="top-bar px-4 py-2 flex items-center justify-between bg-black relative shadow-lg z-10">
      <h2>Drew Pereli Woodworking</h2>
      <button className="border-none bg-gradient-to-tr from-red-400 to-indigo-900 px-4 py-2 rounded-sm shadow shadow-red-400 pointer-events-auto transition-transform font-bold hover:-translate-y-px hover:scale-105 active:translate-y-px active:scale-100">
        GET IN TOUCH
      </button>
    </div>
  );
}
