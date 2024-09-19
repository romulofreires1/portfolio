import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { useRouter } from 'next/router';
import { Menu } from './Menu';
import LanguageSwitcher from './LanguageSwitcher';
import useI18nField from '@/hooks/useI18nField';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const aboutMenuText = useI18nField('about', ['common']);
  const contactsMenuText = useI18nField('contacts', ['common']);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="border-solid border-b-[0.063rem] border-opacity-[0.1] border-white bg-black-velvet text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20">
      <div className="flex items-center gap-x-7">
        <Link className="hover:scale-110 transition-transform" href="/">
          <Image
            src="/favicon.svg"
            width={0}
            height={0}
            alt="Logo de Rômulo"
            priority
            className="w-10 h-10"
          />
        </Link>
        <LanguageSwitcher />
      </div>
      <button className="p-1 md:hidden" onClick={toggleMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link
          href="/"
          className={`p-2 rounded-lg ${router.pathname === '/' ? 'bg-galactic-purple' : 'hover:text-neon-spring'}`}
        >
          <span>Home</span>
        </Link>
        <Link
          href="/about"
          className={`p-2 rounded-lg ${router.pathname === '/about' ? 'bg-galactic-purple' : 'hover:text-neon-spring'}`}
        >
          <span>{aboutMenuText}</span>
        </Link>
        <Link
          href="/contacts"
          className={`p-2 rounded-lg ${router.pathname === '/contacts' ? 'bg-galactic-purple' : 'hover:text-neon-spring'}`}
        >
          <span>{contactsMenuText}</span>
        </Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};
