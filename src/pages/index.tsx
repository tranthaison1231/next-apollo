import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function HomePageDetail() {
  return <>App</>;
}

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale)),
    },
  };
}

export default HomePageDetail;
