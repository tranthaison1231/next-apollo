import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTypeSafeTranslation from '@/shared/hooks/useTypeSafeTranslation';

function PageNotFound() {
  const { t } = useTypeSafeTranslation();

  return (
    <div className="h-full w-full bg-white">{t('general.pageNotFound')}</div>
  );
}

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale)),
    },
  };
}

export default PageNotFound;
