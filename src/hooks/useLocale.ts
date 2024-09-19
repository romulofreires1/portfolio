import { useRouter } from 'next/router';
import { Locales as LocalesEnum } from '@/constants/locales.enum';
import { Locales } from '@/types/Common';

function useLocale() {
  const router = useRouter();

  const locale = (router.locale || LocalesEnum.EN) as keyof Locales;

  return locale;
}

export default useLocale;
