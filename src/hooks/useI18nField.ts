import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function useI18nField(fieldName: string, namespaces: string[]) {
  const { t, i18n } = useTranslation(namespaces);
  const [field, setField] = useState<string>('');
  useEffect(() => {
    const updateField = () => {
      setField(t(fieldName));
    };

    updateField();

    i18n.on('languageChanged', updateField);

    return () => {
      i18n.off('languageChanged', updateField);
    };
  }, [fieldName, t, i18n]);
  return field;
}

export default useI18nField;
