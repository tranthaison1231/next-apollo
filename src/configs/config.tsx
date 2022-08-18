export const formConfig = {
  requiredMark: true,
  validateMessages: {
    pattern: {
      mismatch: '${label} is not valid!',
    },
    required: 'Please enter ${label}!',
    string: {
      max: '${label} must be maximum ${max} characters.',
      min: '${label} must be minimum ${min} characters.',
    },
    types: {
      number: '${label} must be number.',
    },
    whitespace: ' ${label} cannot be empty!',
  },
};

export const SEO = {
  applicationName: 'TP Bank',
  description: 'TP Bank',
  openGraph: {
    description: 'TP Bank',
    images: [
      {
        alt: 'TP Bank',
        height: 630,
        url: 'https://github.com/LauraBeatris/recipes-next-hasura/blob/master/.github/docs/logo.png',
        width: 1200,
      },
    ],
    siteName: 'tpbank-while-label-web',
    title: 'TP Bank',
    url: '',
  },
  title: 'TP Bank',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@lauradotjs',
    site: '@lauradotjs',
  },
};
