/* eslint-disable @typescript-eslint/naming-convention */
export const config = {
  Auth: {
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    mandatorySignIn: false,
    oauth: {
      domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      redirectSignIn: process.env.NEXT_PUBLIC_AUTH_SIGN_IN_REDIRECT_URL,
      redirectSignOut: process.env.NEXT_PUBLIC_AUTH_SIGN_OUT_REDIRECT_URL,
      responseType: process.env.NEXT_PUBLIC_AUTH_RESPONSE_TYPE,
      scope: ['openid', 'profile', 'aws.cognito.signin.user.admin'],
    },
    region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
  },
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
};
