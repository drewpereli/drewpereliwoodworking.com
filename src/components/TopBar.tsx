import { ReactNode, useContext } from 'react';
import { ContactModalContext } from '../contexts';
import { EtsyLogo, InstagramLogo, Mail } from './Svgs';

export default function TopBar() {
  const { setShowingContactModal } = useContext(ContactModalContext);

  return (
    <div className="top-bar px-4 py-4 md:px-12 md:py-4 bg-black relative shadow-lg z-10 flex flex-col md:flex-row md:items-center justify-between">
      <Title className="md:hidden" />
      <SocialLinkList className="md:hidden" />

      <div className="hidden md:block space-y-4">
        <Title />
        <SocialLinkList />
      </div>

      <button
        type="button"
        onClick={() => setShowingContactModal(true)}
        className="w-full md:w-auto bg-gradient-to-tr from-red-400 to-indigo-900 px-8 py-1 md:py-2 rounded-sm shadow shadow-red-400 transition-transform font-bold hover:-translate-y-px hover:scale-105 active:translate-y-px active:scale-100 md:text-lg"
      >
        GET IN TOUCH
      </button>
    </div>
  );
}

function SocialLink({ href, ariaLabel, children }: { href: string; children: ReactNode; ariaLabel: string }) {
  return (
    <a href={href} target="_blank" aria-label={ariaLabel} className="text-stone-300/90 hover:text-stone-400 text-lg">
      {children}
    </a>
  );
}

function SocialLinkList({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between space-x-4 ${className}`}>
      <SocialLink href="https://www.instagram.com/drewpereli/" ariaLabel="instagram">
        <InstagramLogo width={16} height={16} />
      </SocialLink>

      <SocialLink href="https://www.etsy.com/shop/DrewPereliWoodwork" ariaLabel="etsy">
        <EtsyLogo width={16} height={16} />
      </SocialLink>

      <SocialLink href="mailto:drew@drewpereliwoodworking.com" ariaLabel="email">
        <span className="md:hidden">
          <Mail width={16} height={16} />
        </span>
        <span className="hidden md:inline font-medium">drew@drewpereliwoodworking.com</span>
      </SocialLink>
    </div>
  );
}

function Title({ className }: { className?: string }) {
  return <h2 className={`font-bold text-xl md:text-3xl text-white ${className}`}>Drew Pereli Woodworking</h2>;
}
