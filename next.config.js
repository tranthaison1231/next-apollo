const { i18n } = require('./next-i18next.config');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withAntdLess = require('next-plugin-antd-less')({
  lessVarsFilePath: './src/configs/theme/index.less',
  lessVarsFilePathAppendToEndOfContent: true,
});

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_S3_URL],
  },
};

module.exports = withPlugins([withAntdLess], withBundleAnalyzer(nextConfig));
