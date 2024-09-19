import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Locales } from '@/types/Common';
import useI18nField from '@/hooks/useI18nField';
import useLocale from '@/hooks/useLocale';

interface AboutProps {
  about: {
    description: Locales;
  };
}

const namespaces = ['about', 'common'];

const About = ({ about }: AboutProps) => {
  const title = useI18nField('title', namespaces);
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>{`${title} | Rômulo`}</title>
      </Head>

      <div className="mt-12 md:mt-24 px-12 md:px-32">
        <h1 className="mb-16 text-5xl md:text-7xl font-bold text-center text-neon-spring">
          {title}
        </h1>

        {(about.description[locale] as string)
          .split('\\n\\n')
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
              <br />
            </span>
          ))}
      </div>
    </>
  );
};

const loadDescription = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/romulofreires1/0b98e771c2e01ffc57d2c1b1a84d8174/raw/about.json',
  );
  const about = await res.json();
  return about;
};

export const getStaticProps: GetStaticProps<AboutProps> = async ({
  locale,
}) => {
  const about = await loadDescription();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, namespaces)),
      about,
    },
    revalidate: 60,
  };
};

export default About;
