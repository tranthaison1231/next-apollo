import dayjs from 'dayjs';

export const IMAGE_TYPES = 'image/jpeg,image/png,image/jpg';

export const ATTACHMENT_TYPES =
  'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

export const ACCESS_TOKEN_KEY = 'sessionToken';

export const BUSINESS_ID = '178687074894870';

export const PUBLIC_COUNTRY_API_URL = 'https://countries.trevorblades.com/';

export const MAXIMUM_NUMBER_OF_PEOPLE = 10000;

export const MAX_INQUIRY_DURATION = 31;

export const MINIMUM_NUMBER_OF_PEOPLE = 1;

export const OTP_RESEND_TIME_IN_SECONDS = 60;

export const SUBTRACTED_DAY = dayjs().subtract(3, 'day');

export const DEFAULT_LOCATION_PRICE_RANGE = [0, 10000000];

export const TIME_ZONE_NUMBER = new Date().getTimezoneOffset() / -60 || 0;

export enum ScreenSizes {
  Xl = '1159px',
  Lg = '1024px',
  Xmd = '911px',
  Md = '768px',
  Sm = '630px',
  Ss = '480px',
  Xs = '380px',
}

export enum BookingStatus {
  Unconfirmed = 'UNCONFIRM',
  Confirmed = 'CONFIRM',
  InProgress = 'INPROGRESS',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Debt = 'DEBT',
}

export enum PaymentType {
  Cash = 'cash',
}

export const LIMIT_GALLERY = 6;

export const VALUE_ROOT_OPEN_TIME = {
  arrRoot1: ['monday'],
  arrRoot2: ['tuesday', 'wednesday', 'thursday', 'friday'],
};
