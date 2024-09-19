import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Locales as LocalesEnum } from '@/constants/locales.enum';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface ContactsProps {
  contacts: {
    name: string;
    link: string;
    icon: string;
  }[];
}

const Contacts = ({ contacts }: ContactsProps) => {
  const { t, i18n } = useTranslation('contacts');
  const router = useRouter();
  const [currentTitle, setCurrentTitle] = useState<string>(t('title'));

  useEffect(() => {
    const currentLocale = router.locale || LocalesEnum.PT_BR;
    if (i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale).then(() => {
        setCurrentTitle(t('title'));
      });
    } else {
      setCurrentTitle(t('title'));
    }
  }, [router.locale, i18n, t]);
  return (
    <>
      <Head>
        <title>{`${currentTitle} | Rômulo`}</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-neon-spring">
          {currentTitle}
        </h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          {contacts.map(({ link, name, icon }, idx) => (
            <li key={name + idx}>
              <div className="flex gap-x-2">
                <Image
                  src={icon}
                  width={20}
                  height={20}
                  alt={`ícone ${name}`}
                />
                <span className="font-bold">{name}</span>
              </div>
              <div className="flex gap-1 md:gap-3 items-center">
                <a
                  href={link}
                  target="_blank"
                  className="text-sm md:text-lg text-slate-300 underline truncate"
                >
                  {link}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const loadContacts = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/romulofreires1/bb94772f28a03bd61a3cbdb3c9ec60a2/raw/social-media.json',
  );
  const data = res.json();

  return data;
};

export const getStaticProps: GetStaticProps<ContactsProps> = async ({ locale}) => {
  const contacts = await loadContacts();

  return {
    props: { ...(await serverSideTranslations(locale as string, ['common', 'contacts'])), contacts },
    revalidate: 60,
  };
};

export default Contacts;
