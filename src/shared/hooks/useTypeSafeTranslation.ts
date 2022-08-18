import { useTranslation } from 'next-i18next';
import { Dictionary } from '../utils/type';
import { TranslationKeys } from '@/generated/translationKeys';

const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: Dictionary<string>) => t(s, f),
  };
};

export default useTypeSafeTranslation;
