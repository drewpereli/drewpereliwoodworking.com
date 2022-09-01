import { ReactNode, useContext } from 'react';
import { ContactModalContext } from '../contexts';
import { EtsyLogo, InstagramLogo, Mail } from './Svgs';

export default function TopBar() {
  const { setShowingContactModal } = useContext(ContactModalContext);

  return (
    <div className="top-bar px-12 py-4 bg-black relative shadow-lg z-10 space-y-8 md:flex md:items-center md:space-y-0 md:justify-between">
      <div className="space-y-8 md:space-y-4">
        <h2 className="font-bold text-2xl">Drew Pereli Woodworking</h2>
        <div className="flex items-center justify-between space-x-4">
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
            <span className="hidden md:inline">drew@drewpereliwoodworking.com</span>
          </SocialLink>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowingContactModal(true)}
        className="w-full md:w-auto bg-gradient-to-tr from-red-400 to-indigo-900 px-8 py-2 rounded-sm shadow shadow-red-400 transition-transform font-bold hover:-translate-y-px hover:scale-105 active:translate-y-px active:scale-100 text-lg"
      >
        GET IN TOUCH
      </button>
    </div>
  );
}

function SocialLink({ href, ariaLabel, children }: { href: string; children: ReactNode; ariaLabel: string }) {
  return (
    <a href={href} target="_blank" aria-label={ariaLabel} className="text-blue-300 hover:text-blue-400 text-lg">
      {children}
    </a>
  );
}
