import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useI18nField from '@/hooks/useI18nField';
interface ContactsProps {
  contacts: {
    name: string;
    link: string;
    icon: string;
  }[];
}

const namespaces = ['contacts', 'common'];

const Contacts = ({ contacts }: ContactsProps) => {
  const title = useI18nField('title', namespaces);
  return (
    <>
      <Head>
        <title>{`${title} | Rômulo`}</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-neon-spring">
          {title}
        </h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          {contacts.map(({ link, name, icon }, idx) => (
            <li key={name + idx}>
              <div className="flex gap-x-2">
                <Image
                  src={icon}
                  width={0}
                  height={0}
                  alt={`ícone ${name}`}
                  className='w-6 h-6'
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

export const getStaticProps: GetStaticProps<ContactsProps> = async ({
  locale,
}) => {
  const contacts = await loadContacts();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, namespaces)),
      contacts,
    },
    revalidate: 60,
  };
};

export default Contacts;
