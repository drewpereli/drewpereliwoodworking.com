import { createContext } from 'react';

export const ContactModalContext = createContext({
  showingContactModal: false,
  setShowingContactModal: (val: boolean) => {},
});
