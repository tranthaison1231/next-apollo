import '@/shared/utils/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import { Amplify } from 'aws-amplify';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { client as apolloClient } from '@/graphql/client';
import { config } from '@/configs/aws';
import { formConfig, SEO } from '@/configs/config';

Amplify.configure({
  ...config,
  ssr: false,
});

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <ConfigProvider form={formConfig} componentSize="large" locale={enUS}>
      <Head>
        <title>{SEO.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        {/* <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
        /> */}
      </Head>
      <ApolloProvider client={apolloClient}>
        {loading ? <p> Loading </p> : <Component {...pageProps} />}
      </ApolloProvider>
    </ConfigProvider>
  );
}

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale)),
    },
  };
}

export default appWithTranslation(MyApp);
