import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieNotice from '../shared/CookieNotice';
import CookiePolicyModal from '../shared/CookiePolicyModal';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer onOpenCookiePolicy={() => setIsCookiePolicyOpen(true)} />
      <CookieNotice onLearnMore={() => setIsCookiePolicyOpen(true)} />
      <CookiePolicyModal
        isOpen={isCookiePolicyOpen}
        onClose={() => setIsCookiePolicyOpen(false)}
      />
    </div>
  );
};

export default Layout;
