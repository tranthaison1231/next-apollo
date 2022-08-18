import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  JSONObject: any;
  TimeDate: any;
};

export type AddBankTransferPaymentDto = {
  bookingId?: InputMaybe<Scalars['ID']>;
  businessId: Scalars['ID'];
  extraServiceOrderId?: InputMaybe<Scalars['ID']>;
  paymentImage: Scalars['String'];
  paymentNote: Scalars['String'];
  totalAmount: Scalars['Float'];
};

export type AddPaymentDto = {
  bookingId: Scalars['ID'];
  businessId: Scalars['ID'];
  returnUrl: Scalars['String'];
};

export type Amenity = {
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAppFilter: Scalars['Boolean'];
  name: Scalars['String'];
  type: AmenityType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum AmenityType {
  Accessibility = 'ACCESSIBILITY',
  BasicFacility = 'BASIC_FACILITY',
  BathroomFacility = 'BATHROOM_FACILITY',
  Community = 'COMMUNITY',
  Equipment = 'EQUIPMENT',
  FoodAndBeverage = 'FOOD_AND_BEVERAGE',
  KitchenFacility = 'KITCHEN_FACILITY',
  Others = 'OTHERS',
  RelaxArea = 'RELAX_AREA',
  Seating = 'SEATING',
  Transportation = 'TRANSPORTATION',
}

export type Booking = {
  actualAmount?: Maybe<Scalars['Float']>;
  breakdownBookings?: Maybe<Array<BreakdownBooking>>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  capacityNumber?: Maybe<Scalars['Float']>;
  checkins?: Maybe<Array<Checkin>>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['ID']>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']>;
  customerGender?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['ID']>;
  customerInfo?: Maybe<Scalars['JSON']>;
  customerName?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  deposit?: Maybe<Scalars['Float']>;
  discountUnit?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  endTime: Scalars['DateTime'];
  estimatedAmount?: Maybe<Scalars['Float']>;
  extraServiceFee?: Maybe<Scalars['Float']>;
  extraServiceOrderId?: Maybe<Scalars['ID']>;
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  isGroup?: Maybe<Scalars['Boolean']>;
  isOnlineBooking?: Maybe<Scalars['Boolean']>;
  isTeam?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  numberOfPeople?: Maybe<Scalars['Float']>;
  package?: Maybe<Package>;
  packageData?: Maybe<Scalars['JSON']>;
  packageId?: Maybe<Scalars['ID']>;
  paidAmount?: Maybe<Scalars['Float']>;
  paidBreakDownBooking?: Maybe<Scalars['Boolean']>;
  paidExtraServices?: Maybe<Scalars['Boolean']>;
  paymentId?: Maybe<Scalars['ID']>;
  paymentPeriod?: Maybe<Scalars['JSON']>;
  paymentStatus?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  promotionCode?: Maybe<Scalars['String']>;
  promotionValue?: Maybe<Scalars['Float']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']>;
  serviceReference?: Maybe<Scalars['JSON']>;
  startTime: Scalars['DateTime'];
  status?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  totalBookingAmount?: Maybe<Scalars['Float']>;
  totalBookingDiscount?: Maybe<Scalars['Float']>;
  unpaidAmount?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookingInfoDto = {
  bookingId: Scalars['ID'];
  code: Scalars['String'];
  endTime?: InputMaybe<Scalars['Date']>;
  locationInfo?: InputMaybe<LocationInfoDto>;
  package?: InputMaybe<Scalars['JSONObject']>;
  startTime?: InputMaybe<Scalars['Date']>;
};

export type BreakdownBooking = {
  amount: Scalars['Float'];
  amountPaid: Scalars['Float'];
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['Float']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  discountUnit?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  estFee?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  packageData?: Maybe<Scalars['JSON']>;
  packageId?: Maybe<Scalars['ID']>;
  roomId?: Maybe<Scalars['ID']>;
  serviceReference?: Maybe<Scalars['JSON']>;
  startTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BundleDisplayModel = {
  duration: Scalars['Float'];
  durationHour: Scalars['Float'];
  durationType: Scalars['String'];
  endTime: Scalars['DateTime'];
  estFee: Scalars['Float'];
  packageData: Scalars['JSON'];
  packageId: Scalars['Float'];
  startTime: Scalars['DateTime'];
  totalAmount: Scalars['Float'];
};

export type BundleModel = {
  duration: Scalars['Float'];
  durationHour: Scalars['Float'];
  durationType: Scalars['String'];
  endTime: Scalars['DateTime'];
  estFee: Scalars['Float'];
  packageData: Scalars['JSON'];
  packageId: Scalars['Float'];
  startTime: Scalars['DateTime'];
  totalAmount: Scalars['Float'];
};

export type Business = {
  aboutUs?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  businessConfig?: Maybe<BusinessConfig>;
  city?: Maybe<Scalars['String']>;
  contractInfo?: Maybe<Scalars['JSONObject']>;
  coordinates?: Maybe<Scalars['JSONObject']>;
  country?: Maybe<Scalars['String']>;
  coworkspace_url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emailContact?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Scalars['String']>>;
  geoLocation?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  instagram?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isPayingClient?: Maybe<Scalars['Boolean']>;
  joinDate?: Maybe<Scalars['DateTime']>;
  linkedln?: Maybe<Scalars['String']>;
  main_image?: Maybe<Scalars['String']>;
  main_img?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  newNotificationCount?: Maybe<Scalars['Float']>;
  owners?: Maybe<Array<BusinessUser>>;
  phoneContact?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  review?: Maybe<Scalars['JSONObject']>;
  reviews?: Maybe<Array<Review>>;
  shortIntroduction?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<Scalars['JSONObject']>;
  total?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  whiteLabelAppConfig?: Maybe<WhiteLabelAppConfig>;
  work_space_id?: Maybe<Scalars['String']>;
  workingTime?: Maybe<Scalars['JSONObject']>;
  youtube?: Maybe<Scalars['String']>;
};

export type BusinessConfig = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  logoMark?: Maybe<Scalars['String']>;
  logoType?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  primaryButtonTextColor?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BusinessUser = {
  avatar?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDisabled?: Maybe<Scalars['Boolean']>;
  isOwner: Scalars['Boolean'];
  permission?: Maybe<Scalars['JSON']>;
  permissionIds?: Maybe<Scalars['JSON']>;
  resetPasswordExpire?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type CalculateBookingDto = {
  businessId?: InputMaybe<Scalars['ID']>;
  discountUnit: Scalars['String'];
  discountValue: Scalars['Float'];
  endTime: Scalars['DateTime'];
  numberOfPeople: Scalars['Float'];
  packageId: Scalars['ID'];
  platform?: InputMaybe<Scalars['String']>;
  roomId: Scalars['ID'];
  startTime: Scalars['DateTime'];
};

export type CalculatePriceModel = {
  bundleDisplay: Array<BundleDisplayModel>;
  bundles: Array<BundleModel>;
  discount: Scalars['JSON'];
  isGroup: Scalars['Boolean'];
  maxCapacity: Scalars['Float'];
  nonWorkingDays: NonWorkingDaysModel;
  promoTotal: Scalars['Float'];
  subTotal: Scalars['Float'];
  totalAmount: Scalars['Float'];
};

export type CancelBookingDto = {
  id: Scalars['ID'];
  reason: Scalars['String'];
};

export type ChargeExtraServiceOrderDto = {
  id: Scalars['ID'];
  isVATInvoice?: InputMaybe<Scalars['Boolean']>;
  paidAmount: Scalars['Float'];
  payType: Scalars['String'];
  /** dont use dont touch */
  status?: InputMaybe<Scalars['String']>;
};

export type CheckVerifyCodeDto = {
  email?: InputMaybe<Scalars['String']>;
  tpbId?: InputMaybe<Scalars['String']>;
  verifyCode: Scalars['String'];
};

export type Checkin = {
  booking?: Maybe<Booking>;
  bookingId: Scalars['ID'];
  business?: Maybe<Business>;
  businessId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['ID'];
  customerName?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CheckinInfo = {
  startTime: Scalars['DateTime'];
};

export type ClientDeleteMessageInput = {
  inboxId: Scalars['Float'];
  messageId: Scalars['Float'];
};

export type ClientReadMessageInput = {
  ids: Array<Scalars['ID']>;
  inboxId: Scalars['Float'];
};

export type ClientSendMessageInput = {
  customerId: Scalars['Float'];
  files?: InputMaybe<Array<FileInput>>;
  inboxId: Scalars['Float'];
  message?: InputMaybe<Scalars['String']>;
  messageType: Scalars['String'];
};

export type Company = {
  address: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  customers?: Maybe<Array<Customer>>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  industry?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  taxCode: Scalars['String'];
  teams?: Maybe<Array<Team>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type CompanyInfoDto = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
};

export type Coordinates = {
  distance?: Maybe<Scalars['Float']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type CoordinatesDto = {
  distance?: InputMaybe<Scalars['Float']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type CreateExtraServiceInput = {
  extraServiceTypeId?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type CreateExtraServiceOrderDto = {
  bookingId?: InputMaybe<Scalars['ID']>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['ID']>;
  customerName?: InputMaybe<Scalars['String']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  discountUnit?: InputMaybe<Scalars['String']>;
  discountValue?: InputMaybe<Scalars['Float']>;
  extraServices: Array<ExtraServiceOrderItem>;
  files?: InputMaybe<Array<Scalars['String']>>;
  images?: InputMaybe<Array<Scalars['String']>>;
  isVATInvoice?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  orderStatus?: InputMaybe<ExtraServiceOrderStatus>;
  paidAmount?: InputMaybe<Scalars['Float']>;
  payType: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
  tpbId?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CreateInboxBaseInput = {
  businessId?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Float']>;
  enquiryType?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  packageId?: InputMaybe<Scalars['ID']>;
  packageType?: InputMaybe<Scalars['String']>;
  people?: InputMaybe<Scalars['Float']>;
  platform?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['ID']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateIncidentDto = {
  bookingId?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  locationId?: InputMaybe<Scalars['ID']>;
  message: Scalars['String'];
  priority?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  typeId: Scalars['ID'];
};

export type CreateInstallationDto = {
  deviceToken: Scalars['String'];
  deviceType: Scalars['String'];
  firebaseToken: Scalars['String'];
  locale: Scalars['String'];
  target?: InputMaybe<Scalars['String']>;
};

export type Customer = {
  address?: Maybe<Scalars['String']>;
  appleId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bookings?: Maybe<Array<Booking>>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customFields?: Maybe<Scalars['JSON']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  job?: Maybe<ReferenceData>;
  jobId?: Maybe<Scalars['ID']>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  primaryMemberId?: Maybe<Scalars['Float']>;
  social?: Maybe<Scalars['JSON']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['ID']>;
  teams?: Maybe<Array<Team>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type CustomerEvent = {
  agendaId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['Boolean']>;
  responseType?: Maybe<Scalars['String']>;
  status?: Maybe<CustomerEventStatus>;
  updatedAt: Scalars['DateTime'];
};

export enum CustomerEventStatus {
  Cancelled = 'CANCELLED',
  Confirm = 'CONFIRM',
  Unconfirm = 'UNCONFIRM',
}

export type CustomerEventSummary = {
  totalGoing: Scalars['Float'];
  totalInterest: Scalars['Float'];
};

export type CustomerInfoDto = {
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  tpbId?: InputMaybe<Scalars['String']>;
};

export type DisplayNameDto = {
  en: Scalars['String'];
  vi: Scalars['String'];
};

export type Event = {
  address?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  capacity?: Maybe<Scalars['Float']>;
  content?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  customerEvent?: Maybe<CustomerEvent>;
  customerEventSummary?: Maybe<CustomerEventSummary>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  eventBy?: Maybe<Scalars['String']>;
  eventCover?: Maybe<Scalars['String']>;
  eventLink?: Maybe<Scalars['String']>;
  eventTime?: Maybe<Scalars['DateTime']>;
  geoLocation?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isCharge?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  totalConfirm?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ExtraService = {
  amount: Scalars['Float'];
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator?: Maybe<BusinessUser>;
  creatorId?: Maybe<Scalars['ID']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  customerInfo?: Maybe<Scalars['JSON']>;
  extraServiceOrder?: Maybe<ExtraServiceOrder>;
  extraServiceOrderId?: Maybe<Scalars['ID']>;
  extraServiceType?: Maybe<ExtraServiceType>;
  extraServiceTypeId: Scalars['Float'];
  id: Scalars['ID'];
  isPaid: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  note: Scalars['String'];
  payType: Scalars['String'];
  platform?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  transactionId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type ExtraServiceOrder = {
  actualAmount?: Maybe<Scalars['Float']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  discountUnit?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  extraServices?: Maybe<Array<ExtraService>>;
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  orderItems?: Maybe<Scalars['JSON']>;
  orderStatus?: Maybe<Scalars['String']>;
  paidAmount?: Maybe<Scalars['Float']>;
  payType?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['ID']>;
  platform?: Maybe<Scalars['String']>;
  primaryMemberTeam?: Maybe<PrimaryMemberTeam>;
  status: Scalars['String'];
  total: Scalars['Float'];
  totalItem?: Maybe<Scalars['Float']>;
  unPaidAmount?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExtraServiceOrderItem = {
  extraServiceTypeId: Scalars['ID'];
  locationId: Scalars['ID'];
  quantity: Scalars['Float'];
};

export enum ExtraServiceOrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  PendingPayment = 'PENDING_PAYMENT',
}

export type ExtraServiceType = {
  amount: Scalars['Float'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  extraServiceCategory?: Maybe<ReferenceData>;
  extraServiceCategoryId?: Maybe<Scalars['ID']>;
  extraServiceUnit?: Maybe<ReferenceData>;
  extraServiceUnitId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** Get URL linked to the image of the extra service type */
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isInApp: Scalars['Boolean'];
  isInternal: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Favorite = {
  businessId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['ID'];
};

export type FileInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type FilterDto = {
  data?: InputMaybe<Scalars['String']>;
  field: Scalars['String'];
  operator: QueryOperator;
};

export type ForgotPasswordDto = {
  email?: InputMaybe<Scalars['String']>;
  tpbId?: InputMaybe<Scalars['String']>;
};

export type GalleryInfo = {
  key: Scalars['String'];
  url: Scalars['String'];
};

export type GalleryInput = {
  key: Scalars['String'];
  url: Scalars['String'];
};

export type GeoLocationDto = {
  /**
   *
   * - Query by geoLocation. Ex: userGeoLocation={"latitude":latitude,"longitude":longitude}
   *
   */
  geoLocation?: InputMaybe<CoordinatesDto>;
  /**
   *
   * - Query by userGeoLocation. Ex: userGeoLocation={"latitude":latitude,"longitude":longitude}
   *
   */
  userGeoLocation?: InputMaybe<CoordinatesDto>;
};

export type IAmenities = {
  items: Array<Amenity>;
  meta: MetaPaginationInterface;
};

export type IAmenity = {
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAppFilter: Scalars['Boolean'];
  name: Scalars['String'];
  type: AmenityType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppSetting = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  key: Scalars['String'];
  lastValue: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type IAppSettings = {
  items: Array<IAppSetting>;
  meta: MetaPaginationInterface;
};

export type IBooking = {
  actualAmount?: Maybe<Scalars['Float']>;
  breakdownBookings?: Maybe<Array<BreakdownBooking>>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  capacityNumber?: Maybe<Scalars['Float']>;
  checkins?: Maybe<Array<Checkin>>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['ID']>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']>;
  customerGender?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['ID']>;
  customerInfo?: Maybe<Scalars['JSON']>;
  customerName?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  deposit?: Maybe<Scalars['Float']>;
  discountUnit?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  endTime: Scalars['DateTime'];
  estimatedAmount?: Maybe<Scalars['Float']>;
  extraServiceFee?: Maybe<Scalars['Float']>;
  extraServiceOrderId?: Maybe<Scalars['ID']>;
  /** Get link to file data of a booking */
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  /** Get links to images data of a booking */
  images?: Maybe<Array<Scalars['String']>>;
  isGroup?: Maybe<Scalars['Boolean']>;
  isOnlineBooking?: Maybe<Scalars['Boolean']>;
  isTeam?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  numberOfPeople?: Maybe<Scalars['Float']>;
  package?: Maybe<Package>;
  packageData?: Maybe<Scalars['JSON']>;
  packageId?: Maybe<Scalars['ID']>;
  paidAmount?: Maybe<Scalars['Float']>;
  paidBreakDownBooking?: Maybe<Scalars['Boolean']>;
  paidExtraServices?: Maybe<Scalars['Boolean']>;
  payType?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['ID']>;
  paymentPeriod?: Maybe<Scalars['JSON']>;
  paymentStatus?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  promotionCode?: Maybe<Scalars['String']>;
  promotionValue?: Maybe<Scalars['Float']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']>;
  serviceReference?: Maybe<Scalars['JSON']>;
  startTime: Scalars['DateTime'];
  status?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  totalBookingAmount?: Maybe<Scalars['Float']>;
  totalBookingDiscount?: Maybe<Scalars['Float']>;
  unpaidAmount?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IBookings = {
  items: Array<IBooking>;
  meta: MetaPaginationInterface;
};

export type IBusinessConfig = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  logoMark?: Maybe<Scalars['String']>;
  logoType?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  primaryButtonTextColor?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IBusinessPaymentInfo = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  displayData?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  secretData?: Maybe<Scalars['JSON']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IBusinessPaymentInfos = {
  items: Array<IBusinessPaymentInfo>;
  meta: MetaPaginationInterface;
};

export type ICustomer = {
  address?: Maybe<Scalars['String']>;
  appleId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bookings?: Maybe<Array<Booking>>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customFields?: Maybe<Scalars['JSON']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  job?: Maybe<ReferenceData>;
  jobId?: Maybe<Scalars['ID']>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  primaryMemberId?: Maybe<Scalars['Float']>;
  social?: Maybe<Scalars['JSON']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['ID']>;
  teams?: Maybe<Array<Team>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type ICustomerEvent = {
  agendaId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['Boolean']>;
  responseType?: Maybe<Scalars['String']>;
  status?: Maybe<CustomerEventStatus>;
  updatedAt: Scalars['DateTime'];
};

export type ICustomerEvents = {
  items: Array<ICustomerEvent>;
  meta: MetaPaginationInterface;
};

export type ICustomers = {
  items: Array<ICustomer>;
  meta: MetaPaginationInterface;
};

export type IEvent = {
  address?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  capacity?: Maybe<Scalars['Float']>;
  content?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  customerEvent?: Maybe<CustomerEvent>;
  /** Get summary about customer's activities about the event */
  customerEventSummary?: Maybe<CustomerEventSummary>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  eventBy?: Maybe<Scalars['String']>;
  /** Get the URL linked to the cover image of the event */
  eventCover?: Maybe<Scalars['String']>;
  eventLink?: Maybe<Scalars['String']>;
  eventTime?: Maybe<Scalars['DateTime']>;
  geoLocation?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isCharge?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  /** Get the URL linked to thumbnail image of the event */
  thumbnail?: Maybe<Scalars['String']>;
  totalConfirm?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type IEvents = {
  items: Array<IEvent>;
  meta: MetaPaginationInterface;
};

export type IExtraServiceOrder = {
  actualAmount?: Maybe<Scalars['Float']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  discountUnit?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  extraServices?: Maybe<Array<ExtraService>>;
  /** Get URL link to the files of the extra service order */
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  /** Get URL link to the images of the extra service order */
  images?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  orderItems?: Maybe<Scalars['JSON']>;
  orderStatus?: Maybe<Scalars['String']>;
  paidAmount?: Maybe<Scalars['Float']>;
  payType?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['ID']>;
  platform?: Maybe<Scalars['String']>;
  primaryMemberTeam?: Maybe<PrimaryMemberTeam>;
  status: Scalars['String'];
  total: Scalars['Float'];
  /** Get number of total extra service for a extra service order */
  totalItem?: Maybe<Scalars['Int']>;
  /** Calculate the charge remaining when user does not finish charging */
  unPaidAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IExtraServiceOrders = {
  items: Array<IExtraServiceOrder>;
  meta: MetaPaginationInterface;
};

export type IExtraServiceType = {
  amount: Scalars['Float'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  extraServiceCategory?: Maybe<ReferenceData>;
  extraServiceCategoryId?: Maybe<Scalars['ID']>;
  extraServiceUnit?: Maybe<ReferenceData>;
  extraServiceUnitId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** Get URL linked to the image of the extra service type */
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isInApp: Scalars['Boolean'];
  isInternal: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type IExtraServiceTypes = {
  items: Array<ExtraServiceType>;
  meta: MetaPaginationInterface;
};

export type IInbox = {
  business?: Maybe<Business>;
  businessHasNewMessage: Scalars['Boolean'];
  businessId: Scalars['ID'];
  clientHasNewMessage: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Float']>;
  enquiryType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  incident?: Maybe<Incident>;
  isDeleted: Scalars['Boolean'];
  lastMessage?: Maybe<Message>;
  lastMessageId: Scalars['ID'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  /**
   * Get link to logo of an message channel (inbox)
   * {
   *   url: string
   *   key: string
   *   featured: boolean
   * }
   *
   */
  logo?: Maybe<Scalars['JSON']>;
  message?: Maybe<Scalars['String']>;
  packageId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<Scalars['String']>;
  packageTypeId?: Maybe<Scalars['ID']>;
  parentInboxId?: Maybe<Scalars['ID']>;
  people?: Maybe<Scalars['Float']>;
  platform?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['ID']>;
  service?: Maybe<RoomType>;
  serviceId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type IInboxes = {
  items: Array<IInbox>;
  meta: MetaPaginationInterface;
};

export type IIncident = {
  assignee?: Maybe<BusinessUser>;
  assigneeId?: Maybe<Scalars['ID']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  completeInfo?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  customerType?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  /** Get link to file data of an incident report */
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  /** Get links to images data of an incident report */
  images?: Maybe<Array<Scalars['String']>>;
  inbox?: Maybe<IInbox>;
  inboxId?: Maybe<Scalars['Float']>;
  incidentType?: Maybe<IIncidentType>;
  isFromApp?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IIncidentType = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IIncidentTypes = {
  items: Array<IIncidentType>;
  meta: MetaPaginationInterface;
};

export type IIncidents = {
  items: Array<IIncident>;
  meta: MetaPaginationInterface;
};

export type IInstallation = {
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  customerId?: Maybe<Scalars['ID']>;
  deviceToken: Scalars['String'];
  deviceType?: Maybe<Scalars['String']>;
  firebaseToken: Scalars['String'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['ID']>;
};

export type IInstallations = {
  items: Array<IInstallation>;
  meta: MetaPaginationInterface;
};

export type ILocation = {
  address?: Maybe<Scalars['String']>;
  amenityIds?: Maybe<Array<Scalars['ID']>>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  city?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  coordinates?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayOpenTime?: Maybe<Array<Scalars['String']>>;
  distance?: Maybe<Scalars['Float']>;
  distanceFromUser?: Maybe<Scalars['Float']>;
  emailContact?: Maybe<Scalars['String']>;
  emailEnquiry?: Maybe<Scalars['String']>;
  establishedAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<Array<Favorite>>;
  /** Get link to images of floor plan in a location */
  floorPlan?: Maybe<Array<Scalars['String']>>;
  /** Get links to image of a location */
  gallery?: Maybe<Array<Scalars['String']>>;
  geoLocation?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['DateTime']>;
  packages?: Maybe<Array<Package>>;
  phoneContact?: Maybe<Scalars['String']>;
  placeDetail?: Maybe<PlaceDetail>;
  placeId?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Review>>;
  roomTypes?: Maybe<Array<RoomType>>;
  rooms?: Maybe<Array<Room>>;
  serviceInfor?: Maybe<Scalars['JSON']>;
  serviceReferenceIds?: Maybe<Array<Scalars['ID']>>;
  status?: Maybe<LocationStatus>;
  /** Get thumbnail to image of a location */
  thumbnail?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['Int']>;
  totalReview?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workingTime?: Maybe<WorkingTime>;
};

export type ILocations = {
  items: Array<ILocation>;
  meta: MetaPaginationInterface;
};

export type IMessage = {
  createdAt: Scalars['DateTime'];
  files?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  inboxId?: Maybe<Scalars['ID']>;
  isDeleted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  isRead: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  messageType?: Maybe<Scalars['String']>;
  receiverId?: Maybe<Scalars['ID']>;
  receiverLogo?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  senderId: Scalars['ID'];
  senderLogo?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type IMessages = {
  items: Array<IMessage>;
  meta: MetaPaginationInterface;
};

export type IPackage = {
  amount?: Maybe<Scalars['Float']>;
  availableCapacity?: Maybe<Scalars['Float']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAvailable?: Maybe<Scalars['Boolean']>;
  isInApp?: Maybe<Scalars['Boolean']>;
  isVisible: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  occupiedCapacity?: Maybe<Scalars['Float']>;
  packageType?: Maybe<PackageType>;
  packageTypeId?: Maybe<Scalars['ID']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']>;
  searchText?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type IPackages = {
  items: Array<IPackage>;
  meta: MetaPaginationInterface;
};

export type IPayment = {
  booking?: Maybe<Booking>;
  bookingCode?: Maybe<Scalars['String']>;
  bookingId: Scalars['ID'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  extraServiceCode?: Maybe<Scalars['String']>;
  extraServiceOrder?: Maybe<ExtraServiceOrder>;
  extraServiceOrderId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  paymentImage?: Maybe<Scalars['String']>;
  paymentInfo?: Maybe<Scalars['JSON']>;
  paymentNote?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  status: PaymentStatus;
  totalAmount: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type IPreSignUrl = {
  fileName: Scalars['String'];
  uploadUrl: Scalars['String'];
  url: Scalars['String'];
};

export type IRate = {
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  describe?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rating?: Maybe<ReferenceData>;
  /** referenceDataId */
  ratingId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type IRates = {
  items: Array<IRate>;
  meta: MetaPaginationInterface;
};

export type IReferenceData = {
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type IReferenceDatas = {
  items: Array<IReferenceData>;
  meta: MetaPaginationInterface;
};

export type IReview = {
  authorAvatar?: Maybe<Scalars['String']>;
  authorFullName?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Array<GalleryInfo>>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['JSON']>;
  isInternalRating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  platform?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  reviewId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type IReviews = {
  items: Array<IReview>;
  meta: MetaPaginationInterface;
};

export type IRoom = {
  amenities?: Maybe<Array<Amenity>>;
  amenityIds?: Maybe<Array<Scalars['ID']>>;
  area: Scalars['Float'];
  bookingEndTime?: Maybe<Scalars['DateTime']>;
  bookingId?: Maybe<Scalars['Float']>;
  bookingStartTime?: Maybe<Scalars['DateTime']>;
  bookingStatus?: Maybe<Scalars['String']>;
  business: Business;
  businessId?: Maybe<Scalars['ID']>;
  capacityPeople?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  facilities?: Maybe<Scalars['JSON']>;
  floorPlan?: Maybe<Array<Scalars['String']>>;
  gallery?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAvailable?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  occupiedCapacity?: Maybe<Scalars['Float']>;
  packages?: Maybe<Array<Package>>;
  priceType: PriceType;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']>;
  searchText?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type IRoomType = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  gallery?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  rooms?: Maybe<Array<Room>>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']>;
  serviceReference?: Maybe<ServiceReference>;
  serviceReferenceId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type IRoomTypes = {
  items: Array<IRoomType>;
  meta: MetaPaginationInterface;
};

export type IRooms = {
  items: Array<Room>;
  meta: MetaPaginationInterface;
};

export type IServiceGroup = {
  colorCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['Float']>;
  displayName?: Maybe<Scalars['JSON']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['Float']>;
};

export type IServiceGroups = {
  items: Array<IServiceGroup>;
  meta: MetaPaginationInterface;
};

export type IServiceReference = {
  colorCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority?: Maybe<Scalars['Float']>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IServiceReferences = {
  items: Array<IServiceReference>;
  meta: MetaPaginationInterface;
};

export type ITeam = {
  avatar?: Maybe<Scalars['String']>;
  businessId?: Maybe<Scalars['ID']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customFields?: Maybe<Scalars['JSON']>;
  customerId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  numberOfMember?: Maybe<Scalars['Float']>;
  payMember?: Maybe<Customer>;
  payMemberId?: Maybe<Scalars['ID']>;
  primaryMember?: Maybe<Customer>;
  primaryMemberId?: Maybe<Scalars['ID']>;
  social?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['ID']>;
};

export type ITeams = {
  items: Array<ITeam>;
  meta: MetaPaginationInterface;
};

export type IUserNotification = {
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isHidden: Scalars['Boolean'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  notificationType: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
};

export type IUserNotifications = {
  items: Array<IUserNotification>;
  meta: MetaPaginationInterface;
};

export type IWhiteLabelAppConfig = {
  androidId?: Maybe<Scalars['String']>;
  businessId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customConfigs?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  intro?: Maybe<Scalars['JSON']>;
  iosId?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IWlaUser = {
  appleId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  businessUsers?: Maybe<Array<BusinessUser>>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  facebookId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['JSON']>;
  gender?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDisabled: Scalars['Boolean'];
  isVerifyCode?: Maybe<Scalars['Boolean']>;
  isVerifyEmail?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  pinnedLocation?: Maybe<Location>;
  pinnedLocationId?: Maybe<Scalars['Float']>;
  resetPasswordExpire?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['ID']>;
  team?: Maybe<Team>;
  /** The staff code. Users use this key to sign in to system */
  tpbId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userRoles?: Maybe<Array<UserRole>>;
  username?: Maybe<Scalars['String']>;
  verifyCode?: Maybe<Scalars['String']>;
  verifyCodeExpire?: Maybe<Scalars['DateTime']>;
  verifyEmailCodeExpire?: Maybe<Scalars['DateTime']>;
};

export type Inbox = {
  business?: Maybe<Business>;
  businessHasNewMessage: Scalars['Boolean'];
  businessId: Scalars['ID'];
  clientHasNewMessage: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Float']>;
  enquiryType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  incident?: Maybe<Incident>;
  isDeleted: Scalars['Boolean'];
  lastMessage?: Maybe<Message>;
  lastMessageId: Scalars['ID'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['JSON']>;
  message?: Maybe<Scalars['String']>;
  packageId?: Maybe<Scalars['ID']>;
  packageType?: Maybe<Scalars['String']>;
  packageTypeId?: Maybe<Scalars['ID']>;
  parentInboxId?: Maybe<Scalars['ID']>;
  people?: Maybe<Scalars['Float']>;
  platform?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['ID']>;
  service?: Maybe<RoomType>;
  serviceId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type Incident = {
  assignee?: Maybe<BusinessUser>;
  assigneeId?: Maybe<Scalars['ID']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  completeInfo?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  customerType?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  inbox?: Maybe<Inbox>;
  inboxId?: Maybe<Scalars['ID']>;
  incidentType?: Maybe<IncidentType>;
  isFromApp?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IncidentType = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InfoDto = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  senderEmail?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
  tpbId?: InputMaybe<Scalars['ID']>;
};

export type Location = {
  address?: Maybe<Scalars['String']>;
  amenityIds?: Maybe<Array<Scalars['ID']>>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  city?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  coordinates?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  distanceFromUser?: Maybe<Scalars['Float']>;
  emailContact?: Maybe<Scalars['String']>;
  emailEnquiry?: Maybe<Scalars['String']>;
  establishedAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<Array<Favorite>>;
  floorPlan?: Maybe<Array<Scalars['String']>>;
  gallery?: Maybe<Array<Scalars['String']>>;
  geoLocation?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  openDate?: Maybe<Scalars['DateTime']>;
  packages?: Maybe<Array<Package>>;
  phoneContact?: Maybe<Scalars['String']>;
  placeDetail?: Maybe<PlaceDetail>;
  placeId?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Review>>;
  roomTypes?: Maybe<Array<RoomType>>;
  rooms?: Maybe<Array<Room>>;
  serviceInfor?: Maybe<Scalars['JSON']>;
  serviceReferenceIds?: Maybe<Array<Scalars['ID']>>;
  status?: Maybe<LocationStatus>;
  thumbnail?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['Int']>;
  totalReview?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workingTime?: Maybe<WorkingTime>;
};

export type LocationInfoDto = {
  address?: InputMaybe<Scalars['String']>;
  emailContact?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneContact?: InputMaybe<Scalars['String']>;
};

export enum LocationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Verified = 'VERIFIED',
}

export type LocationWhiteLabelQueryDto = {
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<Array<FilterDto>>;
  geolocation?: InputMaybe<Scalars['JSON']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']>;
};

export type Message = {
  createdAt: Scalars['DateTime'];
  files?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  inboxId?: Maybe<Scalars['ID']>;
  isDeleted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  isRead: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  messageType?: Maybe<Scalars['String']>;
  receiverId?: Maybe<Scalars['ID']>;
  receiverLogo?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  senderId: Scalars['ID'];
  senderLogo?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MetaPaginationInterface = {
  currentPage: Scalars['Float'];
  itemCount: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalItems: Scalars['Float'];
  totalPages: Scalars['Float'];
};

export type Mutation = {
  /** Caculate the price of the sample booking ticket */
  calculateBooking: CalculatePriceModel;
  /** Cancel a booking which has been created before */
  cancelBooking: IBooking;
  /** Set an extra service order at paid state */
  chargeExtraServiceOrder: IExtraServiceOrder;
  checkVerifyCode: ResponseMessageBase;
  /** Create payment transaction with a Bank */
  createBankTransferPayment: IPayment;
  /** Create a booking ticket with some requiements in the input parameters */
  createBooking: IBooking;
  /**
   * Create an extra service order when the customer requests additional services which are not included in the room.
   * This API is design for Admin only
   */
  createExtraServiceOrder: IExtraServiceOrder;
  /** Create an incident report to admin */
  createIncident: IIncident;
  createInstallation: IInstallation;
  /** Create a message channel (inbox) with admin or other user/customer */
  createMailbox: IInbox;
  /** Create payment transaction with Momo */
  createMomoPayment: PaymentMomoResponse;
  /** Remove the event of the customer in the business */
  deleteCustomerEvent: ResponseMessageBase;
  /** Remove the message channel (inbox) */
  deleteInbox: ResponseMessageBase;
  deleteIncidentType: ResponseMessageBase;
  /** Remove a message from the message channel (inbox) */
  deleteMessage: ResponseMessageBase;
  /** Delete the existing Rate based on ID in the business */
  deleteRate: ResponseMessageBase;
  deleteReferenceData: ResponseMessageBase;
  /** Delete the review existing based on ID value in the business */
  deleteReview: ResponseMessageBase;
  deleteServiceGroup: ResponseMessageBase;
  deleteServiceReference: ResponseMessageBase;
  disableMe: ResponseMessageBase;
  forgotPassword: ResponseMessageBase;
  markUserNotificationAsRead: IUserNotification;
  presignedUrlS3: IPreSignUrl;
  /**
   * Read all messages from a message channel (inbox).
   * This API will mark message channel (inbox) as read
   */
  readMessage: Array<Scalars['ID']>;
  registerNewAccount: ResponseMessageBase;
  resetBulkUserPassword: Scalars['String'];
  resetPassword: ResponseMessageBase;
  /** Send a message to the message channel (inbox) to admin or other user/customer */
  sendMessage: IMessage;
  sendVerifyEmailOtp: ResponseMessageBase;
  /**
   * Edit an extra service order existing in the business.
   * This API is designed for admin only
   */
  updateExtraServiceOrder: IExtraServiceOrder;
  /** Edit current user detail who has signed in */
  updateMe: IWlaUser;
  updateReferenceData: IReferenceData;
  updateStatusIncidentType: IIncidentType;
  updateStatusReferenceData: IReferenceData;
  updateStatusServiceGroup: IServiceGroup;
  updateStatusServiceReference: IServiceReference;
  /** Create or update the event of the customer in the business */
  upsertCustomerEvent: ICustomerEvent;
  upsertExtraServiceCategory: IReferenceData;
  upsertExtraServiceUnit: IReferenceData;
  upsertIncidentType: IIncidentType;
  upsertJob: IReferenceData;
  /**
   * Create or update rate of the business.
   * If id is null, the API will create a rate. Otherwise, it will update the rate existing based on ID
   */
  upsertRate: IRate;
  /**
   * Create or update the reply of the review.
   * If id is null, the API will create a rate. Otherwise, it will update the rate existing
   */
  upsertReplyReview: IReview;
  /**
   * Create or update the review of the business.
   * If id is null, the API will create a rate. Otherwise, it will update the rate existing based on the ID
   */
  upsertReview: IReview;
  upsertServiceGroup: IServiceGroup;
  upsertServiceReference: IServiceReference;
  verifyUpdateEmailOtp: ResponseMessageBase;
};

export type MutationCalculateBookingArgs = {
  input: CalculateBookingDto;
};

export type MutationCancelBookingArgs = {
  input: CancelBookingDto;
};

export type MutationChargeExtraServiceOrderArgs = {
  input: ChargeExtraServiceOrderDto;
};

export type MutationCheckVerifyCodeArgs = {
  input: CheckVerifyCodeDto;
};

export type MutationCreateBankTransferPaymentArgs = {
  input: AddBankTransferPaymentDto;
};

export type MutationCreateBookingArgs = {
  input: UpsertBookingDto;
};

export type MutationCreateExtraServiceOrderArgs = {
  input: CreateExtraServiceOrderDto;
};

export type MutationCreateIncidentArgs = {
  input: CreateIncidentDto;
};

export type MutationCreateInstallationArgs = {
  input: CreateInstallationDto;
};

export type MutationCreateMailboxArgs = {
  input: CreateInboxBaseInput;
};

export type MutationCreateMomoPaymentArgs = {
  input: AddPaymentDto;
};

export type MutationDeleteCustomerEventArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteInboxArgs = {
  input: Scalars['Float'];
};

export type MutationDeleteIncidentTypeArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMessageArgs = {
  input: ClientDeleteMessageInput;
};

export type MutationDeleteRateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteReferenceDataArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteServiceGroupArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteServiceReferenceArgs = {
  id: Scalars['ID'];
};

export type MutationDisableMeArgs = {
  verifyEmailOtp: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordDto;
};

export type MutationMarkUserNotificationAsReadArgs = {
  id: Scalars['ID'];
};

export type MutationPresignedUrlS3Args = {
  input: PresignedUrlDto;
};

export type MutationReadMessageArgs = {
  input: ClientReadMessageInput;
};

export type MutationRegisterNewAccountArgs = {
  input: RegisterNewAccountDto;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordDto;
};

export type MutationSendMessageArgs = {
  input: ClientSendMessageInput;
};

export type MutationSendVerifyEmailOtpArgs = {
  input: SendUserVerifyEmailOtpInput;
};

export type MutationUpdateExtraServiceOrderArgs = {
  input: UpdateExtraServiceOrderDto;
};

export type MutationUpdateMeArgs = {
  input: UpdateWlaUserDto;
};

export type MutationUpdateReferenceDataArgs = {
  input: UpsertReferenceDataDto;
  type: Scalars['String'];
};

export type MutationUpdateStatusIncidentTypeArgs = {
  input: UpdateStatusIncidentTypeDto;
};

export type MutationUpdateStatusReferenceDataArgs = {
  input: UpdateStatusReferenceDataDto;
};

export type MutationUpdateStatusServiceGroupArgs = {
  input: UpdateStatusServiceGroupDto;
};

export type MutationUpdateStatusServiceReferenceArgs = {
  input: UpdateStatusServiceReferenceDto;
};

export type MutationUpsertCustomerEventArgs = {
  input: UpsertCustomerEventDto;
};

export type MutationUpsertExtraServiceCategoryArgs = {
  input: UpsertReferenceDataDto;
};

export type MutationUpsertExtraServiceUnitArgs = {
  input: UpsertReferenceDataDto;
};

export type MutationUpsertIncidentTypeArgs = {
  input: UpsertIncidentTypeDto;
};

export type MutationUpsertJobArgs = {
  input: UpsertReferenceDataDto;
};

export type MutationUpsertRateArgs = {
  input: UpsertRateDto;
};

export type MutationUpsertReplyReviewArgs = {
  input: UpsertReplyReviewDto;
};

export type MutationUpsertReviewArgs = {
  input: UpsertReviewDto;
};

export type MutationUpsertServiceGroupArgs = {
  input: UpsertServiceGroupDto;
};

export type MutationUpsertServiceReferenceArgs = {
  input: UpsertServiceReferenceDto;
};

export type MutationVerifyUpdateEmailOtpArgs = {
  input: VerifyEmailInput;
};

export type NonWorkingDaysModel = {
  nonWorkingDayList: Array<Scalars['String']>;
  nonWorkingWeekdays: Array<Scalars['Float']>;
};

export enum PaymentPeriodUnit {
  Months = 'months',
  Years = 'years',
}

export enum PkgTypeUnit {
  Days = 'days',
  Hours = 'hours',
  Months = 'months',
  Weeks = 'weeks',
  Years = 'years',
}

export type Package = {
  amount?: Maybe<Scalars['Float']>;
  availableCapacity?: Maybe<Scalars['Float']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAvailable?: Maybe<Scalars['Boolean']>;
  isInApp?: Maybe<Scalars['Boolean']>;
  isVisible: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  occupiedCapacity?: Maybe<Scalars['Float']>;
  packageType?: Maybe<PackageType>;
  packageTypeId?: Maybe<Scalars['ID']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']>;
  searchText?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PackageFormDto = {
  amount: Scalars['Float'];
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<DisplayNameDto>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  packageTypeId: Scalars['ID'];
  packageTypeName?: InputMaybe<Scalars['String']>;
};

export type PackageType = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  duration?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Float']>;
  exceptDays?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  packages?: Maybe<Array<Package>>;
  startTime?: Maybe<Scalars['Float']>;
  unit?: Maybe<PkgTypeUnit>;
  updatedAt: Scalars['DateTime'];
};

export type Payment = {
  booking?: Maybe<Booking>;
  bookingCode?: Maybe<Scalars['String']>;
  bookingId: Scalars['ID'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  extraServiceCode?: Maybe<Scalars['String']>;
  extraServiceOrder?: Maybe<ExtraServiceOrder>;
  extraServiceOrderId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  paymentImage?: Maybe<Scalars['String']>;
  paymentInfo?: Maybe<Scalars['JSON']>;
  paymentNote?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  status: PaymentStatus;
  totalAmount: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type PaymentInfo = {
  amount: Scalars['Float'];
  isVATInvoice: Scalars['Boolean'];
  payType: Scalars['String'];
};

export type PaymentMomoResponse = {
  errorCode: Scalars['Float'];
  localMessage: Scalars['String'];
  message: Scalars['String'];
  orderId: Scalars['String'];
  payUrl: Scalars['String'];
  requestId: Scalars['String'];
  requestType: Scalars['String'];
  signature: Scalars['String'];
};

export type PaymentPeriod = {
  duration?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<PaymentPeriodUnit>;
};

export enum PaymentStatus {
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export type PlaceDetail = {
  geometry?: Maybe<Coordinates>;
  icon: Scalars['String'];
  name: Scalars['String'];
  photos: Array<PlaceDetailPhoto>;
  rating: Scalars['Float'];
  reviews: Array<PlaceDetailReview>;
  types: Array<Scalars['String']>;
  url: Scalars['String'];
  website: Scalars['String'];
};

export type PlaceDetailDto = {
  geometry?: InputMaybe<CoordinatesDto>;
  icon: Scalars['String'];
  name: Scalars['String'];
  photos: Array<PlaceDetailPhotoDto>;
  rating: Scalars['Float'];
  reviews: Array<PlaceDetailReviewDto>;
  types: Array<Scalars['String']>;
  url: Scalars['String'];
  website: Scalars['String'];
};

export type PlaceDetailPhoto = {
  height: Scalars['Int'];
  html_attributions: Array<Scalars['String']>;
  photo_reference: Scalars['String'];
  width: Scalars['Int'];
};

export type PlaceDetailPhotoDto = {
  height: Scalars['Int'];
  html_attributions: Array<Scalars['String']>;
  photo_reference: Scalars['String'];
  width: Scalars['Int'];
};

export type PlaceDetailReview = {
  author_name: Scalars['String'];
  author_url: Scalars['String'];
  language: Scalars['String'];
  profile_photo_url: Scalars['String'];
  rating: Scalars['Float'];
  relative_time_description: Scalars['String'];
  text: Scalars['String'];
  time: Scalars['Int'];
};

export type PlaceDetailReviewDto = {
  author_name: Scalars['String'];
  author_url: Scalars['String'];
  language: Scalars['String'];
  profile_photo_url: Scalars['String'];
  rating: Scalars['Float'];
  relative_time_description: Scalars['String'];
  text: Scalars['String'];
  time: Scalars['Int'];
};

export type PresignedUrlDto = {
  key: Scalars['String'];
  type: Scalars['String'];
};

export enum PriceType {
  All = 'ALL',
  Individual = 'INDIVIDUAL',
}

export type PrimaryMemberTeam = {
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export enum QueryOperator {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  IsNotNull = 'isNotNull',
  IsNull = 'isNull',
  Like = 'like',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq',
  Nin = 'nin',
  UnaccentLike = 'unaccentLike',
}

export type Query = {
  /** Total members who are customers of the business. Return { total: customers } */
  countMembers: Scalars['JSON'];
  getAllAmenities: Array<Amenity>;
  getAmenities: IAmenities;
  getAmenity: IAmenity;
  getAmenityTypes: Array<Scalars['String']>;
  getAppSetting: IAppSetting;
  getAppSettings: IAppSettings;
  /** Get booking information of the business from an ID */
  getBooking: IBooking;
  getBookingStatuses: Array<Scalars['String']>;
  /** Get multiple booking information based on some filter condition in queryParams */
  getBookings: IBookings;
  /** Get configuration of the business. This API requires device ID in header */
  getBusinessConfig: IBusinessConfig;
  getBusinessPaymentInfo: IBusinessPaymentInfo;
  getBusinessPaymentInfoes: IBusinessPaymentInfos;
  /** Get payment infomation of an active location in the business. */
  getBusinessPaymentInfos: IBusinessPaymentInfos;
  /** Get current user detail who has signed in */
  getCurrentUser: IWlaUser;
  getCustomer: ICustomer;
  getCustomerEvent: ICustomerEvent;
  getCustomerEvents: ICustomerEvents;
  getCustomers: ICustomers;
  /** Get event detail by ID in the business */
  getEvent: IEvent;
  getEvents: IEvents;
  getExtraServiceCategories: Array<ReferenceData>;
  getExtraServiceCategoriesConfig: IReferenceDatas;
  getExtraServiceCategoryByLocation: Array<ReferenceData>;
  getExtraServiceOrder: IExtraServiceOrder;
  /**
   * Get multiple extra service order of a customer based on some conditional filter in query.
   *   If the customer liked to user is not available, we will create a new one for user
   */
  getExtraServiceOrders: IExtraServiceOrders;
  /** Get detail of an extra service type in the business */
  getExtraServiceType: IExtraServiceType;
  getExtraServiceTypes: IExtraServiceTypes;
  /** Get multiple types of extra service based on some conditional filter query in the business */
  getExtraServiceTypesWla: IExtraServiceTypes;
  getExtraServiceUnits: Array<ReferenceData>;
  getExtraServiceUnitsConfig: IReferenceDatas;
  getInbox: IInbox;
  /** Get information of multiple message channel (inbox) based on some conditional filter query in the business */
  getInboxes: IInboxes;
  getIncident: IIncident;
  getIncidentType: IIncidentType;
  getIncidentTypes: IIncidentTypes;
  /** Get multiple incident reports based on some conditional filter query in the business */
  getIncidents: IIncidents;
  getInstallation: IInstallation;
  getInstallations: IInstallations;
  getJobs: Array<ReferenceData>;
  getJobsConfig: IReferenceDatas;
  /** Get detail of a location based on ID in the business */
  getLocation: ILocation;
  getLocations: ILocations;
  /** Get multiple customers/members based on some conditional filter in the business */
  getMembers: ICustomers;
  /**
   * Get multiple messages in a channel (inbox) based on some conditional filter query.
   * This API will not mark message as read
   */
  getMessages: IMessages;
  getNewWlaNotificationCount: Scalars['Int'];
  getPackage: IPackage;
  getPackages: IPackages;
  /** Get information of multiple packages based on ID of a location */
  getPackagesByLocation: IPackages;
  getPermissionGroups: Array<ReferenceData>;
  /** Genereate QR image and return the URL link to QR code image */
  getQrCode: Scalars['String'];
  getRate: IRate;
  getRateConfig: Array<ReferenceData>;
  /** Get user's rate detail */
  getRateMe?: Maybe<IRate>;
  getRates: IRates;
  getReferenceData: IReferenceData;
  getReferenceDatas: IReferenceDatas;
  getReview: IReview;
  /** Get detail of a review based on ID in the business */
  getReviews: IReviews;
  getRoom: IRoom;
  getRoomType: IRoomType;
  getRoomTypes: IRoomTypes;
  getRooms: IRooms;
  getServiceGroup: IServiceGroup;
  getServiceGroups: IServiceGroups;
  getServiceGroupsByLocation: IServiceGroups;
  getServiceReference: IServiceReference;
  getServiceReferences: IServiceReferences;
  getServiceUnits: Array<Scalars['String']>;
  /** Get team detail which is existing based on ID in the business */
  getTeam: ITeam;
  /** Get information of multiple Teams based on some conditional filter query in the busines */
  getTeams: ITeams;
  /** Calculate number of message which are unread in specific message channel (inbox) */
  getTotalUnreadInbox: Scalars['Int'];
  getUserEmail: Scalars['String'];
  getUserNotification: IUserNotification;
  getUserNotifications: IUserNotifications;
  /** Get the configuration of the appication which user is signing in */
  getWhiteLabelAppConfigMe: IWhiteLabelAppConfig;
  /** Get multiple events based on some conditional filter of a business */
  getWlaEvents: IEvents;
  /** Get information of multiple locations based on some filter condition of query in the business */
  getWlaLocations: ILocations;
  getWlaUserNotifications: IUserNotifications;
  /** Get information of multiple package based on some conditional filter query in the busines */
  searchPackage: IPackages;
  /** Get information of multiple package based on some conditional filter query in the busines */
  searchPackageUnitByService: Array<Scalars['String']>;
  searchServiceGroup: IServiceGroups;
};

export type QueryGetAmenitiesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetAmenityArgs = {
  id: Scalars['ID'];
};

export type QueryGetAppSettingArgs = {
  id: Scalars['ID'];
};

export type QueryGetAppSettingsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetBookingArgs = {
  id: Scalars['ID'];
};

export type QueryGetBookingsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetBusinessPaymentInfoArgs = {
  id: Scalars['ID'];
};

export type QueryGetBusinessPaymentInfoesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetBusinessPaymentInfosArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCustomerArgs = {
  id: Scalars['ID'];
};

export type QueryGetCustomerEventArgs = {
  id: Scalars['ID'];
};

export type QueryGetCustomerEventsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCustomersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetEventArgs = {
  id: Scalars['ID'];
};

export type QueryGetEventsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetExtraServiceCategoriesConfigArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetExtraServiceCategoryByLocationArgs = {
  locationId: Scalars['ID'];
};

export type QueryGetExtraServiceOrderArgs = {
  id: Scalars['ID'];
};

export type QueryGetExtraServiceOrdersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetExtraServiceTypeArgs = {
  id: Scalars['ID'];
};

export type QueryGetExtraServiceTypesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetExtraServiceTypesWlaArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetExtraServiceUnitsConfigArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetInboxArgs = {
  id: Scalars['ID'];
};

export type QueryGetInboxesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetIncidentArgs = {
  id: Scalars['ID'];
};

export type QueryGetIncidentTypeArgs = {
  id: Scalars['ID'];
};

export type QueryGetIncidentTypesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetIncidentsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetInstallationArgs = {
  id: Scalars['ID'];
};

export type QueryGetInstallationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetJobsConfigArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetLocationArgs = {
  coordinates?: InputMaybe<GeoLocationDto>;
  id: Scalars['String'];
};

export type QueryGetLocationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetMembersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetMessagesArgs = {
  inboxId: Scalars['Float'];
  queryParams: QueryFilterDto;
};

export type QueryGetPackageArgs = {
  id: Scalars['ID'];
};

export type QueryGetPackagesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetPackagesByLocationArgs = {
  id: Scalars['Float'];
  queryParams: QueryFilterDto;
};

export type QueryGetQrCodeArgs = {
  id: Scalars['Float'];
};

export type QueryGetRateArgs = {
  id: Scalars['ID'];
};

export type QueryGetRatesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetReferenceDataArgs = {
  id: Scalars['ID'];
};

export type QueryGetReferenceDatasArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetReviewArgs = {
  id: Scalars['ID'];
};

export type QueryGetReviewsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetRoomArgs = {
  id: Scalars['ID'];
};

export type QueryGetRoomTypeArgs = {
  id: Scalars['ID'];
};

export type QueryGetRoomTypesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetRoomsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetServiceGroupArgs = {
  id: Scalars['ID'];
};

export type QueryGetServiceGroupsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetServiceGroupsByLocationArgs = {
  locationId: Scalars['ID'];
  queryParams: QueryFilterDto;
};

export type QueryGetServiceReferenceArgs = {
  id: Scalars['ID'];
};

export type QueryGetServiceReferencesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetTeamArgs = {
  id: Scalars['ID'];
};

export type QueryGetTeamsArgs = {
  queryParams: TeamFilterDto;
};

export type QueryGetUserEmailArgs = {
  tpbId: Scalars['String'];
};

export type QueryGetUserNotificationArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserNotificationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetWlaEventsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetWlaLocationsArgs = {
  queryParams: LocationWhiteLabelQueryDto;
};

export type QueryGetWlaUserNotificationsArgs = {
  queryParams: QueryFilterDto;
};

export type QuerySearchPackageArgs = {
  input: SearchPackagesInput;
  queryParams: QueryFilterDto;
};

export type QuerySearchPackageUnitByServiceArgs = {
  input: SearchPackageUnitsInput;
};

export type QuerySearchServiceGroupArgs = {
  input: SearchServiceGroupDto;
  queryParams: QueryFilterDto;
};

export type QueryFilterDto = {
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<Array<FilterDto>>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']>;
};

export type ReceiptInfoDto = {
  companyInfo?: InputMaybe<CompanyInfoDto>;
  customerInfo?: InputMaybe<CustomerInfoDto>;
  info: InfoDto;
  teamInfo?: InputMaybe<TeamInfoDto>;
  type: ReceiptType;
};

export enum ReceiptType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL',
  Team = 'TEAM',
}

export type ReferenceData = {
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type RegisterNewAccountDto = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  verifyEmailOtp: Scalars['String'];
};

export type ResetPasswordDto = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  tpbId?: InputMaybe<Scalars['String']>;
};

export type ResponseMessageBase = {
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Review = {
  authorAvatar?: Maybe<Scalars['String']>;
  authorFullName?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Array<GalleryInfo>>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['JSON']>;
  isInternalRating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  platform?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  reviewId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type Role = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isDefault?: Maybe<Scalars['Boolean']>;
  /** @deprecated un-used field */
  locationId: Scalars['ID'];
  locationIds?: Maybe<Array<Scalars['ID']>>;
  locations?: Maybe<Array<Location>>;
  name?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['JSON']>;
  permissionIds?: Maybe<Scalars['JSON']>;
  roleType?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Room = {
  amenities?: Maybe<Array<Amenity>>;
  amenityIds?: Maybe<Array<Scalars['ID']>>;
  area: Scalars['Float'];
  bookingEndTime?: Maybe<Scalars['DateTime']>;
  bookingId?: Maybe<Scalars['Float']>;
  bookingStartTime?: Maybe<Scalars['DateTime']>;
  bookingStatus?: Maybe<Scalars['String']>;
  business: Business;
  businessId?: Maybe<Scalars['ID']>;
  capacityPeople?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  facilities?: Maybe<Scalars['JSON']>;
  floorPlan?: Maybe<Array<Scalars['String']>>;
  gallery?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAvailable?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  occupiedCapacity?: Maybe<Scalars['Float']>;
  packages?: Maybe<Array<Package>>;
  priceType: PriceType;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']>;
  searchText?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RoomFormDto = {
  displayName?: InputMaybe<DisplayNameDto>;
  gallery: Array<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoomType = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  gallery?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  rooms?: Maybe<Array<Room>>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']>;
  serviceReference?: Maybe<ServiceReference>;
  serviceReferenceId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type SearchPackageUnitsInput = {
  businessId?: InputMaybe<Scalars['ID']>;
  locationId?: InputMaybe<Scalars['ID']>;
  roomTypeId?: InputMaybe<Scalars['ID']>;
  serviceGroupId?: InputMaybe<Scalars['ID']>;
  serviceReferenceId?: InputMaybe<Scalars['ID']>;
};

export type SearchPackagesInput = {
  endTime: Scalars['DateTime'];
  locationId: Scalars['ID'];
  numberPeople: Scalars['Float'];
  packageUnit: Scalars['String'];
  platform?: InputMaybe<Scalars['String']>;
  searchPackageName?: InputMaybe<Scalars['String']>;
  serviceGroup?: InputMaybe<Scalars['String']>;
  serviceGroupId?: InputMaybe<Scalars['ID']>;
  serviceReferenceId?: InputMaybe<Scalars['ID']>;
  startTime: Scalars['DateTime'];
  updateBookingId?: InputMaybe<Scalars['ID']>;
};

export type SearchServiceGroupDto = {
  packageTypeUnit: Scalars['String'];
};

export type SendUserVerifyEmailOtpInput = {
  email: Scalars['String'];
};

export type ServiceGroup = {
  colorCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['Float']>;
  displayName?: Maybe<Scalars['JSON']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['Float']>;
};

export type ServiceReference = {
  colorCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  priority?: Maybe<Scalars['Float']>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Team = {
  avatar?: Maybe<Scalars['String']>;
  businessId?: Maybe<Scalars['ID']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customFields?: Maybe<Scalars['JSON']>;
  customerId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  numberOfMember?: Maybe<Scalars['Float']>;
  payMember?: Maybe<Customer>;
  payMemberId?: Maybe<Scalars['ID']>;
  primaryMember?: Maybe<Customer>;
  primaryMemberId?: Maybe<Scalars['ID']>;
  social?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['ID']>;
};

export type TeamFilterDto = {
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<Array<FilterDto>>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']>;
  primaryContactFilter?: InputMaybe<Scalars['String']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']>;
};

export type TeamInfoDto = {
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  tpbId?: InputMaybe<Scalars['ID']>;
};

export type TransactionInfoDto = {
  amount?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<TransactionTypeCategory>;
  createdAt?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  transactionType?: InputMaybe<Scalars['String']>;
  transactionTypeId?: InputMaybe<Scalars['ID']>;
};

export type TransactionType = {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']>;
  category?: Maybe<TransactionTypeCategory>;
  createdAt: Scalars['DateTime'];
  displayName?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  inReport: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isDefault: Scalars['Boolean'];
  locationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  searchText?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export enum TransactionTypeCategory {
  Accrued = 'ACCRUED',
  Expense = 'EXPENSE',
  Income = 'INCOME',
}

export type UpdateExtraServiceOrderDto = {
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  discountUnit?: InputMaybe<Scalars['String']>;
  discountValue?: InputMaybe<Scalars['Float']>;
  extraServices?: InputMaybe<Array<ExtraServiceOrderItem>>;
  files?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<Scalars['String']>>;
  note?: InputMaybe<Scalars['String']>;
  orderStatus?: InputMaybe<ExtraServiceOrderStatus>;
  payType?: InputMaybe<Scalars['String']>;
};

export type UpdateStatusIncidentTypeDto = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type UpdateStatusReferenceDataDto = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type UpdateStatusServiceGroupDto = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type UpdateStatusServiceReferenceDto = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type UpdateWlaUserDto = {
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  verifyEmailOtp?: InputMaybe<Scalars['String']>;
};

export type UpsertBookingDto = {
  businessId?: InputMaybe<Scalars['ID']>;
  /** CRM only */
  checkinInfo?: InputMaybe<CheckinInfo>;
  /** use customerId instead */
  customerCountry?: InputMaybe<Scalars['String']>;
  /** use customerId instead */
  customerEmail?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['ID']>;
  /** use customerId instead */
  customerName?: InputMaybe<Scalars['String']>;
  /** CRM only */
  discountUnit?: InputMaybe<Scalars['String']>;
  /** CRM only */
  discountValue?: InputMaybe<Scalars['Float']>;
  endTime: Scalars['DateTime'];
  extraServices?: InputMaybe<Array<CreateExtraServiceInput>>;
  files?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  isCheckin?: InputMaybe<Scalars['Boolean']>;
  locationId: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  numberOfPeople: Scalars['Float'];
  packageId: Scalars['ID'];
  /** CRM only */
  paymentInfo?: InputMaybe<PaymentInfo>;
  /** CRM only */
  paymentPeriod?: InputMaybe<PaymentPeriod>;
  /** use customerId instead */
  phoneNumber?: InputMaybe<Scalars['String']>;
  roomId: Scalars['ID'];
  roomTypeId?: InputMaybe<Scalars['ID']>;
  startTime: Scalars['DateTime'];
  status?: InputMaybe<Scalars['String']>;
};

export type UpsertCustomerEventDto = {
  customerId?: InputMaybe<Scalars['ID']>;
  eventId: Scalars['ID'];
  responseType: Scalars['String'];
};

export type UpsertIncidentTypeDto = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type UpsertRateDto = {
  describe?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** referenceDataId */
  ratingId: Scalars['ID'];
};

export type UpsertReferenceDataDto = {
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName: DisplayNameDto;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  priority?: InputMaybe<Scalars['Float']>;
};

export type UpsertReplyReviewDto = {
  businessId?: InputMaybe<Scalars['ID']>;
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  locationId?: InputMaybe<Scalars['ID']>;
  reviewId?: InputMaybe<Scalars['ID']>;
};

export type UpsertReviewDto = {
  businessId?: InputMaybe<Scalars['ID']>;
  comment?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<GalleryInput>>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Scalars['JSON']>;
  locationId: Scalars['ID'];
  rating?: InputMaybe<Scalars['Float']>;
};

export type UpsertServiceGroupDto = {
  colorCode: Scalars['String'];
  displayName: DisplayNameDto;
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  priority: Scalars['Float'];
};

export type UpsertServiceReferenceDto = {
  description?: InputMaybe<Scalars['String']>;
  displayName: DisplayNameDto;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  priority: Scalars['Float'];
  serviceGroupId: Scalars['ID'];
};

export type User = {
  appleId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  businessUsers?: Maybe<Array<BusinessUser>>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  facebookId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['JSON']>;
  gender?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDisabled: Scalars['Boolean'];
  isVerifyCode?: Maybe<Scalars['Boolean']>;
  isVerifyEmail?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  pinnedLocation?: Maybe<Location>;
  pinnedLocationId?: Maybe<Scalars['Float']>;
  resetPasswordExpire?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['ID']>;
  /** The staff code. Users use this key to sign in to system */
  tpbId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userRoles?: Maybe<Array<UserRole>>;
  username?: Maybe<Scalars['String']>;
  verifyCode?: Maybe<Scalars['String']>;
  verifyCodeExpire?: Maybe<Scalars['DateTime']>;
  verifyEmailCodeExpire?: Maybe<Scalars['DateTime']>;
};

export type UserRole = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role?: Maybe<Role>;
  roleId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type VerifyEmailInput = {
  email: Scalars['String'];
  otp: Scalars['String'];
};

export type WhiteLabelAppConfig = {
  androidId?: Maybe<Scalars['String']>;
  businessId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customConfigs?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  intro?: Maybe<Scalars['JSON']>;
  iosId?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkingTime = {
  friday?: Maybe<WorkingTimeObject>;
  monday?: Maybe<WorkingTimeObject>;
  saturday?: Maybe<WorkingTimeObject>;
  sunday?: Maybe<WorkingTimeObject>;
  thursday?: Maybe<WorkingTimeObject>;
  tuesday?: Maybe<WorkingTimeObject>;
  wednesday?: Maybe<WorkingTimeObject>;
};

export type WorkingTimeDto = {
  friday?: InputMaybe<WorkingTimeObjectDto>;
  monday?: InputMaybe<WorkingTimeObjectDto>;
  saturday?: InputMaybe<WorkingTimeObjectDto>;
  sunday?: InputMaybe<WorkingTimeObjectDto>;
  thursday?: InputMaybe<WorkingTimeObjectDto>;
  tuesday?: InputMaybe<WorkingTimeObjectDto>;
  wednesday?: InputMaybe<WorkingTimeObjectDto>;
};

export type WorkingTimeObject = {
  closeTime?: Maybe<Scalars['TimeDate']>;
  isOpen?: Maybe<Scalars['Boolean']>;
  openTime?: Maybe<Scalars['TimeDate']>;
};

export type WorkingTimeObjectDto = {
  closeTime?: InputMaybe<Scalars['TimeDate']>;
  isOpen?: InputMaybe<Scalars['Boolean']>;
  openTime?: InputMaybe<Scalars['TimeDate']>;
};

export const MetaFragmentFragmentDoc = gql`
  fragment MetaFragment on MetaPaginationInterface {
    totalItems
    itemCount
    itemsPerPage
    totalPages
    currentPage
  }
`;
export const CalculateBookingDocument = gql`
  mutation calculateBooking($input: CalculateBookingDto!) {
    calculateBooking(input: $input) {
      bundleDisplay {
        startTime
        endTime
        durationHour
        packageData
        packageId
        totalAmount
        estFee
        duration
        durationType
      }
      discount
      maxCapacity
      subTotal
      promoTotal
      totalAmount
      isGroup
      nonWorkingDays {
        nonWorkingWeekdays
        nonWorkingDayList
      }
    }
  }
`;
export type CalculateBookingMutationFn = Apollo.MutationFunction<
  CalculateBookingMutation,
  CalculateBookingMutationVariables
>;

/**
 * __useCalculateBookingMutation__
 *
 * To run a mutation, you first call `useCalculateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalculateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calculateBookingMutation, { data, loading, error }] = useCalculateBookingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCalculateBookingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CalculateBookingMutation,
    CalculateBookingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CalculateBookingMutation,
    CalculateBookingMutationVariables
  >(CalculateBookingDocument, options);
}
export type CalculateBookingMutationHookResult = ReturnType<
  typeof useCalculateBookingMutation
>;
export type CalculateBookingMutationResult =
  Apollo.MutationResult<CalculateBookingMutation>;
export type CalculateBookingMutationOptions = Apollo.BaseMutationOptions<
  CalculateBookingMutation,
  CalculateBookingMutationVariables
>;
export const CreateBookingDocument = gql`
  mutation createBooking($input: UpsertBookingDto!) {
    createBooking(input: $input) {
      id
    }
  }
`;
export type CreateBookingMutationFn = Apollo.MutationFunction<
  CreateBookingMutation,
  CreateBookingMutationVariables
>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookingMutation,
    CreateBookingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateBookingMutation,
    CreateBookingMutationVariables
  >(CreateBookingDocument, options);
}
export type CreateBookingMutationHookResult = ReturnType<
  typeof useCreateBookingMutation
>;
export type CreateBookingMutationResult =
  Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<
  CreateBookingMutation,
  CreateBookingMutationVariables
>;
export const CreateExtraServiceOrderDocument = gql`
  mutation createExtraServiceOrder($input: CreateExtraServiceOrderDto!) {
    createExtraServiceOrder(input: $input) {
      id
    }
  }
`;
export type CreateExtraServiceOrderMutationFn = Apollo.MutationFunction<
  CreateExtraServiceOrderMutation,
  CreateExtraServiceOrderMutationVariables
>;

/**
 * __useCreateExtraServiceOrderMutation__
 *
 * To run a mutation, you first call `useCreateExtraServiceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExtraServiceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExtraServiceOrderMutation, { data, loading, error }] = useCreateExtraServiceOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExtraServiceOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateExtraServiceOrderMutation,
    CreateExtraServiceOrderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateExtraServiceOrderMutation,
    CreateExtraServiceOrderMutationVariables
  >(CreateExtraServiceOrderDocument, options);
}
export type CreateExtraServiceOrderMutationHookResult = ReturnType<
  typeof useCreateExtraServiceOrderMutation
>;
export type CreateExtraServiceOrderMutationResult =
  Apollo.MutationResult<CreateExtraServiceOrderMutation>;
export type CreateExtraServiceOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateExtraServiceOrderMutation,
  CreateExtraServiceOrderMutationVariables
>;
export const CreateIncidentDocument = gql`
  mutation createIncident($input: CreateIncidentDto!) {
    createIncident(input: $input) {
      id
    }
  }
`;
export type CreateIncidentMutationFn = Apollo.MutationFunction<
  CreateIncidentMutation,
  CreateIncidentMutationVariables
>;

/**
 * __useCreateIncidentMutation__
 *
 * To run a mutation, you first call `useCreateIncidentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIncidentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIncidentMutation, { data, loading, error }] = useCreateIncidentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIncidentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateIncidentMutation,
    CreateIncidentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateIncidentMutation,
    CreateIncidentMutationVariables
  >(CreateIncidentDocument, options);
}
export type CreateIncidentMutationHookResult = ReturnType<
  typeof useCreateIncidentMutation
>;
export type CreateIncidentMutationResult =
  Apollo.MutationResult<CreateIncidentMutation>;
export type CreateIncidentMutationOptions = Apollo.BaseMutationOptions<
  CreateIncidentMutation,
  CreateIncidentMutationVariables
>;
export const CreateInstallationDocument = gql`
  mutation createInstallation($input: CreateInstallationDto!) {
    createInstallation(input: $input) {
      id
      deviceToken
      userId
      customerId
      businessId
      firebaseToken
      deviceType
      locale
      timezone
      platform
    }
  }
`;
export type CreateInstallationMutationFn = Apollo.MutationFunction<
  CreateInstallationMutation,
  CreateInstallationMutationVariables
>;

/**
 * __useCreateInstallationMutation__
 *
 * To run a mutation, you first call `useCreateInstallationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstallationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstallationMutation, { data, loading, error }] = useCreateInstallationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInstallationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInstallationMutation,
    CreateInstallationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateInstallationMutation,
    CreateInstallationMutationVariables
  >(CreateInstallationDocument, options);
}
export type CreateInstallationMutationHookResult = ReturnType<
  typeof useCreateInstallationMutation
>;
export type CreateInstallationMutationResult =
  Apollo.MutationResult<CreateInstallationMutation>;
export type CreateInstallationMutationOptions = Apollo.BaseMutationOptions<
  CreateInstallationMutation,
  CreateInstallationMutationVariables
>;
export const CreateMailboxDocument = gql`
  mutation createMailbox($input: CreateInboxBaseInput!) {
    createMailbox(input: $input) {
      id
    }
  }
`;
export type CreateMailboxMutationFn = Apollo.MutationFunction<
  CreateMailboxMutation,
  CreateMailboxMutationVariables
>;

/**
 * __useCreateMailboxMutation__
 *
 * To run a mutation, you first call `useCreateMailboxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMailboxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMailboxMutation, { data, loading, error }] = useCreateMailboxMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMailboxMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMailboxMutation,
    CreateMailboxMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMailboxMutation,
    CreateMailboxMutationVariables
  >(CreateMailboxDocument, options);
}
export type CreateMailboxMutationHookResult = ReturnType<
  typeof useCreateMailboxMutation
>;
export type CreateMailboxMutationResult =
  Apollo.MutationResult<CreateMailboxMutation>;
export type CreateMailboxMutationOptions = Apollo.BaseMutationOptions<
  CreateMailboxMutation,
  CreateMailboxMutationVariables
>;
export const DeleteCustomerEventDocument = gql`
  mutation deleteCustomerEvent($id: ID!) {
    deleteCustomerEvent(id: $id) {
      success
      message
    }
  }
`;
export type DeleteCustomerEventMutationFn = Apollo.MutationFunction<
  DeleteCustomerEventMutation,
  DeleteCustomerEventMutationVariables
>;

/**
 * __useDeleteCustomerEventMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerEventMutation, { data, loading, error }] = useDeleteCustomerEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomerEventMutation,
    DeleteCustomerEventMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCustomerEventMutation,
    DeleteCustomerEventMutationVariables
  >(DeleteCustomerEventDocument, options);
}
export type DeleteCustomerEventMutationHookResult = ReturnType<
  typeof useDeleteCustomerEventMutation
>;
export type DeleteCustomerEventMutationResult =
  Apollo.MutationResult<DeleteCustomerEventMutation>;
export type DeleteCustomerEventMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomerEventMutation,
  DeleteCustomerEventMutationVariables
>;
export const MarkUserNotificationAsReadDocument = gql`
  mutation markUserNotificationAsRead($id: ID!) {
    markUserNotificationAsRead(id: $id) {
      id
    }
  }
`;
export type MarkUserNotificationAsReadMutationFn = Apollo.MutationFunction<
  MarkUserNotificationAsReadMutation,
  MarkUserNotificationAsReadMutationVariables
>;

/**
 * __useMarkUserNotificationAsReadMutation__
 *
 * To run a mutation, you first call `useMarkUserNotificationAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkUserNotificationAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markUserNotificationAsReadMutation, { data, loading, error }] = useMarkUserNotificationAsReadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarkUserNotificationAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkUserNotificationAsReadMutation,
    MarkUserNotificationAsReadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkUserNotificationAsReadMutation,
    MarkUserNotificationAsReadMutationVariables
  >(MarkUserNotificationAsReadDocument, options);
}
export type MarkUserNotificationAsReadMutationHookResult = ReturnType<
  typeof useMarkUserNotificationAsReadMutation
>;
export type MarkUserNotificationAsReadMutationResult =
  Apollo.MutationResult<MarkUserNotificationAsReadMutation>;
export type MarkUserNotificationAsReadMutationOptions =
  Apollo.BaseMutationOptions<
    MarkUserNotificationAsReadMutation,
    MarkUserNotificationAsReadMutationVariables
  >;
export const PresignedUrlS3Document = gql`
  mutation presignedUrlS3($input: PresignedUrlDto!) {
    presignedUrlS3(input: $input) {
      fileName
      url
      uploadUrl
    }
  }
`;
export type PresignedUrlS3MutationFn = Apollo.MutationFunction<
  PresignedUrlS3Mutation,
  PresignedUrlS3MutationVariables
>;

/**
 * __usePresignedUrlS3Mutation__
 *
 * To run a mutation, you first call `usePresignedUrlS3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePresignedUrlS3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [presignedUrlS3Mutation, { data, loading, error }] = usePresignedUrlS3Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePresignedUrlS3Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    PresignedUrlS3Mutation,
    PresignedUrlS3MutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PresignedUrlS3Mutation,
    PresignedUrlS3MutationVariables
  >(PresignedUrlS3Document, options);
}
export type PresignedUrlS3MutationHookResult = ReturnType<
  typeof usePresignedUrlS3Mutation
>;
export type PresignedUrlS3MutationResult =
  Apollo.MutationResult<PresignedUrlS3Mutation>;
export type PresignedUrlS3MutationOptions = Apollo.BaseMutationOptions<
  PresignedUrlS3Mutation,
  PresignedUrlS3MutationVariables
>;
export const ReadMessageDocument = gql`
  mutation readMessage($input: ClientReadMessageInput!) {
    readMessage(input: $input)
  }
`;
export type ReadMessageMutationFn = Apollo.MutationFunction<
  ReadMessageMutation,
  ReadMessageMutationVariables
>;

/**
 * __useReadMessageMutation__
 *
 * To run a mutation, you first call `useReadMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readMessageMutation, { data, loading, error }] = useReadMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReadMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReadMessageMutation,
    ReadMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ReadMessageMutation, ReadMessageMutationVariables>(
    ReadMessageDocument,
    options,
  );
}
export type ReadMessageMutationHookResult = ReturnType<
  typeof useReadMessageMutation
>;
export type ReadMessageMutationResult =
  Apollo.MutationResult<ReadMessageMutation>;
export type ReadMessageMutationOptions = Apollo.BaseMutationOptions<
  ReadMessageMutation,
  ReadMessageMutationVariables
>;
export const SendMessageDocument = gql`
  mutation sendMessage($input: ClientSendMessageInput!) {
    sendMessage(input: $input) {
      id
    }
  }
`;
export type SendMessageMutationFn = Apollo.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument,
    options,
  );
}
export type SendMessageMutationHookResult = ReturnType<
  typeof useSendMessageMutation
>;
export type SendMessageMutationResult =
  Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>;
export const SendVerifyEmailOtpDocument = gql`
  mutation sendVerifyEmailOtp($input: SendUserVerifyEmailOtpInput!) {
    sendVerifyEmailOtp(input: $input) {
      success
      message
    }
  }
`;
export type SendVerifyEmailOtpMutationFn = Apollo.MutationFunction<
  SendVerifyEmailOtpMutation,
  SendVerifyEmailOtpMutationVariables
>;

/**
 * __useSendVerifyEmailOtpMutation__
 *
 * To run a mutation, you first call `useSendVerifyEmailOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendVerifyEmailOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendVerifyEmailOtpMutation, { data, loading, error }] = useSendVerifyEmailOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendVerifyEmailOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendVerifyEmailOtpMutation,
    SendVerifyEmailOtpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SendVerifyEmailOtpMutation,
    SendVerifyEmailOtpMutationVariables
  >(SendVerifyEmailOtpDocument, options);
}
export type SendVerifyEmailOtpMutationHookResult = ReturnType<
  typeof useSendVerifyEmailOtpMutation
>;
export type SendVerifyEmailOtpMutationResult =
  Apollo.MutationResult<SendVerifyEmailOtpMutation>;
export type SendVerifyEmailOtpMutationOptions = Apollo.BaseMutationOptions<
  SendVerifyEmailOtpMutation,
  SendVerifyEmailOtpMutationVariables
>;
export const UpdateMeDocument = gql`
  mutation updateMe($input: UpdateWlaUserDto!) {
    updateMe(input: $input) {
      id
    }
  }
`;
export type UpdateMeMutationFn = Apollo.MutationFunction<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(
    UpdateMeDocument,
    options,
  );
}
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;
export const UpsertCustomerEventDocument = gql`
  mutation upsertCustomerEvent($input: UpsertCustomerEventDto!) {
    upsertCustomerEvent(input: $input) {
      customerId
      responseType
      eventId
    }
  }
`;
export type UpsertCustomerEventMutationFn = Apollo.MutationFunction<
  UpsertCustomerEventMutation,
  UpsertCustomerEventMutationVariables
>;

/**
 * __useUpsertCustomerEventMutation__
 *
 * To run a mutation, you first call `useUpsertCustomerEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertCustomerEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertCustomerEventMutation, { data, loading, error }] = useUpsertCustomerEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertCustomerEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertCustomerEventMutation,
    UpsertCustomerEventMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertCustomerEventMutation,
    UpsertCustomerEventMutationVariables
  >(UpsertCustomerEventDocument, options);
}
export type UpsertCustomerEventMutationHookResult = ReturnType<
  typeof useUpsertCustomerEventMutation
>;
export type UpsertCustomerEventMutationResult =
  Apollo.MutationResult<UpsertCustomerEventMutation>;
export type UpsertCustomerEventMutationOptions = Apollo.BaseMutationOptions<
  UpsertCustomerEventMutation,
  UpsertCustomerEventMutationVariables
>;
export const VerifyUpdateEmailOtpDocument = gql`
  mutation verifyUpdateEmailOtp($input: VerifyEmailInput!) {
    verifyUpdateEmailOtp(input: $input) {
      success
      message
    }
  }
`;
export type VerifyUpdateEmailOtpMutationFn = Apollo.MutationFunction<
  VerifyUpdateEmailOtpMutation,
  VerifyUpdateEmailOtpMutationVariables
>;

/**
 * __useVerifyUpdateEmailOtpMutation__
 *
 * To run a mutation, you first call `useVerifyUpdateEmailOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUpdateEmailOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUpdateEmailOtpMutation, { data, loading, error }] = useVerifyUpdateEmailOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyUpdateEmailOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyUpdateEmailOtpMutation,
    VerifyUpdateEmailOtpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyUpdateEmailOtpMutation,
    VerifyUpdateEmailOtpMutationVariables
  >(VerifyUpdateEmailOtpDocument, options);
}
export type VerifyUpdateEmailOtpMutationHookResult = ReturnType<
  typeof useVerifyUpdateEmailOtpMutation
>;
export type VerifyUpdateEmailOtpMutationResult =
  Apollo.MutationResult<VerifyUpdateEmailOtpMutation>;
export type VerifyUpdateEmailOtpMutationOptions = Apollo.BaseMutationOptions<
  VerifyUpdateEmailOtpMutation,
  VerifyUpdateEmailOtpMutationVariables
>;
export const GetBookingDocument = gql`
  query getBooking($id: ID!) {
    getBooking(id: $id) {
      id
      code
      customerName
      location {
        name
        address
      }
      package {
        name
        packageType {
          unit
        }
      }
      room {
        thumbnail
        gallery
      }
      customerId
      note
      images
      files
      startTime
      endTime
      status
      numberOfPeople
      totalBookingAmount
      extraServiceFee
      totalAmount
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetBookingQuery__
 *
 * To run a query within a React component, call `useGetBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookingQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBookingQuery,
    GetBookingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBookingQuery, GetBookingQueryVariables>(
    GetBookingDocument,
    options,
  );
}
export function useGetBookingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookingQuery,
    GetBookingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBookingQuery, GetBookingQueryVariables>(
    GetBookingDocument,
    options,
  );
}
export type GetBookingQueryHookResult = ReturnType<typeof useGetBookingQuery>;
export type GetBookingLazyQueryHookResult = ReturnType<
  typeof useGetBookingLazyQuery
>;
export type GetBookingQueryResult = Apollo.QueryResult<
  GetBookingQuery,
  GetBookingQueryVariables
>;
export function refetchGetBookingQuery(variables: GetBookingQueryVariables) {
  return { query: GetBookingDocument, variables: variables };
}
export const GetBookingsDocument = gql`
  query getBookings($queryParams: QueryFilterDto!) {
    getBookings(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        code
        customerId
        package {
          name
          packageType {
            unit
          }
        }
        serviceReference
        room {
          thumbnail
          gallery
        }
        numberOfPeople
        startTime
        endTime
        status
        actualAmount
        totalAmount
        createdAt
        updatedAt
        packageData
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetBookingsQuery__
 *
 * To run a query within a React component, call `useGetBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetBookingsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBookingsQuery,
    GetBookingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBookingsQuery, GetBookingsQueryVariables>(
    GetBookingsDocument,
    options,
  );
}
export function useGetBookingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookingsQuery,
    GetBookingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBookingsQuery, GetBookingsQueryVariables>(
    GetBookingsDocument,
    options,
  );
}
export type GetBookingsQueryHookResult = ReturnType<typeof useGetBookingsQuery>;
export type GetBookingsLazyQueryHookResult = ReturnType<
  typeof useGetBookingsLazyQuery
>;
export type GetBookingsQueryResult = Apollo.QueryResult<
  GetBookingsQuery,
  GetBookingsQueryVariables
>;
export function refetchGetBookingsQuery(variables: GetBookingsQueryVariables) {
  return { query: GetBookingsDocument, variables: variables };
}
export const GetBusinessConfigDocument = gql`
  query getBusinessConfig {
    getBusinessConfig {
      id
      businessId
      path
      isActive
      createdAt
      updatedAt
      ownerId
      isPrimary
      logo
      primaryColor
      logoMark
      logoType
      primaryButtonTextColor
    }
  }
`;

/**
 * __useGetBusinessConfigQuery__
 *
 * To run a query within a React component, call `useGetBusinessConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBusinessConfigQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >(GetBusinessConfigDocument, options);
}
export function useGetBusinessConfigLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >(GetBusinessConfigDocument, options);
}
export type GetBusinessConfigQueryHookResult = ReturnType<
  typeof useGetBusinessConfigQuery
>;
export type GetBusinessConfigLazyQueryHookResult = ReturnType<
  typeof useGetBusinessConfigLazyQuery
>;
export type GetBusinessConfigQueryResult = Apollo.QueryResult<
  GetBusinessConfigQuery,
  GetBusinessConfigQueryVariables
>;
export function refetchGetBusinessConfigQuery(
  variables?: GetBusinessConfigQueryVariables,
) {
  return { query: GetBusinessConfigDocument, variables: variables };
}
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      fullName
      username
      email
      gender
      avatar
      createdAt
      updatedAt
      gallery
      birthday
      country
      phoneNumber
      team {
        id
        name
      }
    }
  }
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export function refetchGetCurrentUserQuery(
  variables?: GetCurrentUserQueryVariables,
) {
  return { query: GetCurrentUserDocument, variables: variables };
}
export const GetEventDetailDocument = gql`
  query getEventDetail($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      thumbnail
      address
      isActive
      eventTime
      endTime
      createdAt
      content
      capacity
      eventBy
      price
      eventLink
      status
      location
      type
      isActive
      customerEventSummary {
        totalGoing
        totalInterest
      }
      customerEvent {
        id
        responseType
      }
    }
  }
`;

/**
 * __useGetEventDetailQuery__
 *
 * To run a query within a React component, call `useGetEventDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEventDetailQuery,
    GetEventDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEventDetailQuery, GetEventDetailQueryVariables>(
    GetEventDetailDocument,
    options,
  );
}
export function useGetEventDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEventDetailQuery,
    GetEventDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEventDetailQuery, GetEventDetailQueryVariables>(
    GetEventDetailDocument,
    options,
  );
}
export type GetEventDetailQueryHookResult = ReturnType<
  typeof useGetEventDetailQuery
>;
export type GetEventDetailLazyQueryHookResult = ReturnType<
  typeof useGetEventDetailLazyQuery
>;
export type GetEventDetailQueryResult = Apollo.QueryResult<
  GetEventDetailQuery,
  GetEventDetailQueryVariables
>;
export function refetchGetEventDetailQuery(
  variables: GetEventDetailQueryVariables,
) {
  return { query: GetEventDetailDocument, variables: variables };
}
export const GetExtraServiceOrdersDocument = gql`
  query getExtraServiceOrders($queryParams: QueryFilterDto!) {
    getExtraServiceOrders(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        code
        extraServices {
          id
          extraServiceType {
            id
            name
            displayName
            image
            amount
            extraServiceUnit {
              id
              name
            }
          }
          amount
          quantity
        }
        totalItem
        actualAmount
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetExtraServiceOrdersQuery__
 *
 * To run a query within a React component, call `useGetExtraServiceOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExtraServiceOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExtraServiceOrdersQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetExtraServiceOrdersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetExtraServiceOrdersQuery,
    GetExtraServiceOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetExtraServiceOrdersQuery,
    GetExtraServiceOrdersQueryVariables
  >(GetExtraServiceOrdersDocument, options);
}
export function useGetExtraServiceOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExtraServiceOrdersQuery,
    GetExtraServiceOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExtraServiceOrdersQuery,
    GetExtraServiceOrdersQueryVariables
  >(GetExtraServiceOrdersDocument, options);
}
export type GetExtraServiceOrdersQueryHookResult = ReturnType<
  typeof useGetExtraServiceOrdersQuery
>;
export type GetExtraServiceOrdersLazyQueryHookResult = ReturnType<
  typeof useGetExtraServiceOrdersLazyQuery
>;
export type GetExtraServiceOrdersQueryResult = Apollo.QueryResult<
  GetExtraServiceOrdersQuery,
  GetExtraServiceOrdersQueryVariables
>;
export function refetchGetExtraServiceOrdersQuery(
  variables: GetExtraServiceOrdersQueryVariables,
) {
  return { query: GetExtraServiceOrdersDocument, variables: variables };
}
export const GetInboxDocument = gql`
  query getInbox($id: ID!) {
    getInbox(id: $id) {
      id
      title
      userId
      locationId
      logo
      clientHasNewMessage
      businessHasNewMessage
      lastMessageId
      lastMessage {
        message
        senderId
        senderLogo
        senderName
        files
        messageType
        isRead
        createdAt
      }
      enquiryType
      serviceId
      packageTypeId
      duration
      people
      startDate
      message
      status
      userId
      user {
        fullName
        username
        avatar
        email
      }
      customerId
      customer {
        fullName
        avatar
        email
      }
      createdAt
    }
  }
`;

/**
 * __useGetInboxQuery__
 *
 * To run a query within a React component, call `useGetInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInboxQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInboxQuery(
  baseOptions: Apollo.QueryHookOptions<GetInboxQuery, GetInboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetInboxQuery, GetInboxQueryVariables>(
    GetInboxDocument,
    options,
  );
}
export function useGetInboxLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInboxQuery,
    GetInboxQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetInboxQuery, GetInboxQueryVariables>(
    GetInboxDocument,
    options,
  );
}
export type GetInboxQueryHookResult = ReturnType<typeof useGetInboxQuery>;
export type GetInboxLazyQueryHookResult = ReturnType<
  typeof useGetInboxLazyQuery
>;
export type GetInboxQueryResult = Apollo.QueryResult<
  GetInboxQuery,
  GetInboxQueryVariables
>;
export function refetchGetInboxQuery(variables: GetInboxQueryVariables) {
  return { query: GetInboxDocument, variables: variables };
}
export const GetInboxesDocument = gql`
  query getInboxes($queryParams: QueryFilterDto!) {
    getInboxes(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        title
        userId
        locationId
        logo
        clientHasNewMessage
        businessHasNewMessage
        lastMessageId
        lastMessage {
          message
          senderId
          senderLogo
          senderName
          files
          messageType
          isRead
          createdAt
        }
        enquiryType
        serviceId
        packageTypeId
        duration
        people
        startDate
        message
        status
        userId
        user {
          fullName
          username
          avatar
          email
        }
        customerId
        customer {
          fullName
          avatar
          email
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetInboxesQuery__
 *
 * To run a query within a React component, call `useGetInboxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInboxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInboxesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetInboxesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetInboxesQuery,
    GetInboxesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetInboxesQuery, GetInboxesQueryVariables>(
    GetInboxesDocument,
    options,
  );
}
export function useGetInboxesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInboxesQuery,
    GetInboxesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetInboxesQuery, GetInboxesQueryVariables>(
    GetInboxesDocument,
    options,
  );
}
export type GetInboxesQueryHookResult = ReturnType<typeof useGetInboxesQuery>;
export type GetInboxesLazyQueryHookResult = ReturnType<
  typeof useGetInboxesLazyQuery
>;
export type GetInboxesQueryResult = Apollo.QueryResult<
  GetInboxesQuery,
  GetInboxesQueryVariables
>;
export function refetchGetInboxesQuery(variables: GetInboxesQueryVariables) {
  return { query: GetInboxesDocument, variables: variables };
}
export const GetIncidentDocument = gql`
  query getIncident($id: ID!) {
    getIncident(id: $id) {
      id
      typeId
      createdAt
      updatedAt
      incidentType {
        id
        name
        icon
        description
      }
      message
      priority
      status
      customerId
      customer {
        fullName
        email
        avatar
      }
      images
      files
      title
      dueDate
      assigneeId
      assignee {
        id
        avatar
        fullName
        username
      }
      customerType
      completeInfo
      isFromApp
      inbox {
        id
        title
        logo
        clientHasNewMessage
        businessHasNewMessage
        lastMessageId
        enquiryType
        serviceId
        packageId
        packageType
        duration
        people
        startDate
        message
      }
    }
  }
`;

/**
 * __useGetIncidentQuery__
 *
 * To run a query within a React component, call `useGetIncidentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncidentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncidentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetIncidentQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIncidentQuery,
    GetIncidentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIncidentQuery, GetIncidentQueryVariables>(
    GetIncidentDocument,
    options,
  );
}
export function useGetIncidentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncidentQuery,
    GetIncidentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIncidentQuery, GetIncidentQueryVariables>(
    GetIncidentDocument,
    options,
  );
}
export type GetIncidentQueryHookResult = ReturnType<typeof useGetIncidentQuery>;
export type GetIncidentLazyQueryHookResult = ReturnType<
  typeof useGetIncidentLazyQuery
>;
export type GetIncidentQueryResult = Apollo.QueryResult<
  GetIncidentQuery,
  GetIncidentQueryVariables
>;
export function refetchGetIncidentQuery(variables: GetIncidentQueryVariables) {
  return { query: GetIncidentDocument, variables: variables };
}
export const GetIncidentTypesDocument = gql`
  query getIncidentTypes($queryParams: QueryFilterDto!) {
    getIncidentTypes(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetIncidentTypesQuery__
 *
 * To run a query within a React component, call `useGetIncidentTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncidentTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncidentTypesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetIncidentTypesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIncidentTypesQuery,
    GetIncidentTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIncidentTypesQuery, GetIncidentTypesQueryVariables>(
    GetIncidentTypesDocument,
    options,
  );
}
export function useGetIncidentTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncidentTypesQuery,
    GetIncidentTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetIncidentTypesQuery,
    GetIncidentTypesQueryVariables
  >(GetIncidentTypesDocument, options);
}
export type GetIncidentTypesQueryHookResult = ReturnType<
  typeof useGetIncidentTypesQuery
>;
export type GetIncidentTypesLazyQueryHookResult = ReturnType<
  typeof useGetIncidentTypesLazyQuery
>;
export type GetIncidentTypesQueryResult = Apollo.QueryResult<
  GetIncidentTypesQuery,
  GetIncidentTypesQueryVariables
>;
export function refetchGetIncidentTypesQuery(
  variables: GetIncidentTypesQueryVariables,
) {
  return { query: GetIncidentTypesDocument, variables: variables };
}
export const GetIncidentsDocument = gql`
  query getIncidents($queryParams: QueryFilterDto!) {
    getIncidents(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        typeId
        createdAt
        updatedAt
        locationId
        incidentType {
          id
          name
          icon
          description
        }
        message
        priority
        status
        customerId
        customer {
          fullName
          email
          avatar
        }
        images
        files
        title
        dueDate
        assigneeId
        assignee {
          id
          avatar
          fullName
          username
        }
        customerType
        completeInfo
        isFromApp
        inbox {
          id
          title
          logo
          clientHasNewMessage
          businessHasNewMessage
          lastMessageId
          enquiryType
          serviceId
          packageId
          packageType
          duration
          people
          startDate
          message
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetIncidentsQuery__
 *
 * To run a query within a React component, call `useGetIncidentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncidentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncidentsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetIncidentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIncidentsQuery,
    GetIncidentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIncidentsQuery, GetIncidentsQueryVariables>(
    GetIncidentsDocument,
    options,
  );
}
export function useGetIncidentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncidentsQuery,
    GetIncidentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIncidentsQuery, GetIncidentsQueryVariables>(
    GetIncidentsDocument,
    options,
  );
}
export type GetIncidentsQueryHookResult = ReturnType<
  typeof useGetIncidentsQuery
>;
export type GetIncidentsLazyQueryHookResult = ReturnType<
  typeof useGetIncidentsLazyQuery
>;
export type GetIncidentsQueryResult = Apollo.QueryResult<
  GetIncidentsQuery,
  GetIncidentsQueryVariables
>;
export function refetchGetIncidentsQuery(
  variables: GetIncidentsQueryVariables,
) {
  return { query: GetIncidentsDocument, variables: variables };
}
export const GetMembersDocument = gql`
  query getMembers($queryParams: QueryFilterDto!) {
    getMembers(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        createdAt
        fullName
        gender
        avatar
        job {
          name
        }
        team {
          id
          name
        }
        teams {
          id
          name
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetMembersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMembersQuery,
    GetMembersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(
    GetMembersDocument,
    options,
  );
}
export function useGetMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMembersQuery,
    GetMembersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(
    GetMembersDocument,
    options,
  );
}
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<
  typeof useGetMembersLazyQuery
>;
export type GetMembersQueryResult = Apollo.QueryResult<
  GetMembersQuery,
  GetMembersQueryVariables
>;
export function refetchGetMembersQuery(variables: GetMembersQueryVariables) {
  return { query: GetMembersDocument, variables: variables };
}
export const GetMessagesDocument = gql`
  query getMessages($inboxId: Float!, $queryParams: QueryFilterDto!) {
    getMessages(inboxId: $inboxId, queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        message
        inboxId
        senderId
        receiverId
        senderName
        receiverName
        isHidden
        files
        isRead
        senderLogo
        messageType
        receiverLogo
        createdAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      inboxId: // value for 'inboxId'
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetMessagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument,
    options,
  );
}
export function useGetMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument,
    options,
  );
}
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<
  typeof useGetMessagesLazyQuery
>;
export type GetMessagesQueryResult = Apollo.QueryResult<
  GetMessagesQuery,
  GetMessagesQueryVariables
>;
export function refetchGetMessagesQuery(variables: GetMessagesQueryVariables) {
  return { query: GetMessagesDocument, variables: variables };
}
export const GetNewWlaNotificationCountDocument = gql`
  query getNewWlaNotificationCount {
    getNewWlaNotificationCount
  }
`;

/**
 * __useGetNewWlaNotificationCountQuery__
 *
 * To run a query within a React component, call `useGetNewWlaNotificationCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewWlaNotificationCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewWlaNotificationCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewWlaNotificationCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNewWlaNotificationCountQuery,
    GetNewWlaNotificationCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNewWlaNotificationCountQuery,
    GetNewWlaNotificationCountQueryVariables
  >(GetNewWlaNotificationCountDocument, options);
}
export function useGetNewWlaNotificationCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewWlaNotificationCountQuery,
    GetNewWlaNotificationCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNewWlaNotificationCountQuery,
    GetNewWlaNotificationCountQueryVariables
  >(GetNewWlaNotificationCountDocument, options);
}
export type GetNewWlaNotificationCountQueryHookResult = ReturnType<
  typeof useGetNewWlaNotificationCountQuery
>;
export type GetNewWlaNotificationCountLazyQueryHookResult = ReturnType<
  typeof useGetNewWlaNotificationCountLazyQuery
>;
export type GetNewWlaNotificationCountQueryResult = Apollo.QueryResult<
  GetNewWlaNotificationCountQuery,
  GetNewWlaNotificationCountQueryVariables
>;
export function refetchGetNewWlaNotificationCountQuery(
  variables?: GetNewWlaNotificationCountQueryVariables,
) {
  return { query: GetNewWlaNotificationCountDocument, variables: variables };
}
export const GetPackagesByLocationDocument = gql`
  query getPackagesByLocation($queryParams: QueryFilterDto!, $id: Float!) {
    getPackagesByLocation(queryParams: $queryParams, id: $id) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        isActive
        isVisible
        displayName
        description
        amount
        roomId
        room {
          id
          name
        }
        businessId
        locationId
        packageTypeId
        packageType {
          id
          name
        }
        note
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetPackagesByLocationQuery__
 *
 * To run a query within a React component, call `useGetPackagesByLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackagesByLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackagesByLocationQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPackagesByLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPackagesByLocationQuery,
    GetPackagesByLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPackagesByLocationQuery,
    GetPackagesByLocationQueryVariables
  >(GetPackagesByLocationDocument, options);
}
export function useGetPackagesByLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPackagesByLocationQuery,
    GetPackagesByLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPackagesByLocationQuery,
    GetPackagesByLocationQueryVariables
  >(GetPackagesByLocationDocument, options);
}
export type GetPackagesByLocationQueryHookResult = ReturnType<
  typeof useGetPackagesByLocationQuery
>;
export type GetPackagesByLocationLazyQueryHookResult = ReturnType<
  typeof useGetPackagesByLocationLazyQuery
>;
export type GetPackagesByLocationQueryResult = Apollo.QueryResult<
  GetPackagesByLocationQuery,
  GetPackagesByLocationQueryVariables
>;
export function refetchGetPackagesByLocationQuery(
  variables: GetPackagesByLocationQueryVariables,
) {
  return { query: GetPackagesByLocationDocument, variables: variables };
}
export const GetRoomTypesDocument = gql`
  query getRoomTypes($queryParams: QueryFilterDto!) {
    getRoomTypes(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetRoomTypesQuery__
 *
 * To run a query within a React component, call `useGetRoomTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomTypesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetRoomTypesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRoomTypesQuery,
    GetRoomTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoomTypesQuery, GetRoomTypesQueryVariables>(
    GetRoomTypesDocument,
    options,
  );
}
export function useGetRoomTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomTypesQuery,
    GetRoomTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRoomTypesQuery, GetRoomTypesQueryVariables>(
    GetRoomTypesDocument,
    options,
  );
}
export type GetRoomTypesQueryHookResult = ReturnType<
  typeof useGetRoomTypesQuery
>;
export type GetRoomTypesLazyQueryHookResult = ReturnType<
  typeof useGetRoomTypesLazyQuery
>;
export type GetRoomTypesQueryResult = Apollo.QueryResult<
  GetRoomTypesQuery,
  GetRoomTypesQueryVariables
>;
export function refetchGetRoomTypesQuery(
  variables: GetRoomTypesQueryVariables,
) {
  return { query: GetRoomTypesDocument, variables: variables };
}
export const GetServiceGroupsByLocationDocument = gql`
  query getServiceGroupsByLocation(
    $locationId: ID!
    $queryParams: QueryFilterDto!
  ) {
    getServiceGroupsByLocation(
      locationId: $locationId
      queryParams: $queryParams
    ) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        icon
        image
        colorCode
        isActive
        priority
        displayName
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetServiceGroupsByLocationQuery__
 *
 * To run a query within a React component, call `useGetServiceGroupsByLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceGroupsByLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceGroupsByLocationQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetServiceGroupsByLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetServiceGroupsByLocationQuery,
    GetServiceGroupsByLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetServiceGroupsByLocationQuery,
    GetServiceGroupsByLocationQueryVariables
  >(GetServiceGroupsByLocationDocument, options);
}
export function useGetServiceGroupsByLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServiceGroupsByLocationQuery,
    GetServiceGroupsByLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServiceGroupsByLocationQuery,
    GetServiceGroupsByLocationQueryVariables
  >(GetServiceGroupsByLocationDocument, options);
}
export type GetServiceGroupsByLocationQueryHookResult = ReturnType<
  typeof useGetServiceGroupsByLocationQuery
>;
export type GetServiceGroupsByLocationLazyQueryHookResult = ReturnType<
  typeof useGetServiceGroupsByLocationLazyQuery
>;
export type GetServiceGroupsByLocationQueryResult = Apollo.QueryResult<
  GetServiceGroupsByLocationQuery,
  GetServiceGroupsByLocationQueryVariables
>;
export function refetchGetServiceGroupsByLocationQuery(
  variables: GetServiceGroupsByLocationQueryVariables,
) {
  return { query: GetServiceGroupsByLocationDocument, variables: variables };
}
export const GetServiceReferencesDocument = gql`
  query getServiceReferences($queryParams: QueryFilterDto!) {
    getServiceReferences(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetServiceReferencesQuery__
 *
 * To run a query within a React component, call `useGetServiceReferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceReferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceReferencesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetServiceReferencesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetServiceReferencesQuery,
    GetServiceReferencesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetServiceReferencesQuery,
    GetServiceReferencesQueryVariables
  >(GetServiceReferencesDocument, options);
}
export function useGetServiceReferencesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServiceReferencesQuery,
    GetServiceReferencesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServiceReferencesQuery,
    GetServiceReferencesQueryVariables
  >(GetServiceReferencesDocument, options);
}
export type GetServiceReferencesQueryHookResult = ReturnType<
  typeof useGetServiceReferencesQuery
>;
export type GetServiceReferencesLazyQueryHookResult = ReturnType<
  typeof useGetServiceReferencesLazyQuery
>;
export type GetServiceReferencesQueryResult = Apollo.QueryResult<
  GetServiceReferencesQuery,
  GetServiceReferencesQueryVariables
>;
export function refetchGetServiceReferencesQuery(
  variables: GetServiceReferencesQueryVariables,
) {
  return { query: GetServiceReferencesDocument, variables: variables };
}
export const GetTeamsDocument = gql`
  query getTeams($queryParams: TeamFilterDto!) {
    getTeams(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetTeamsQuery(
  baseOptions: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(
    GetTeamsDocument,
    options,
  );
}
export function useGetTeamsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTeamsQuery,
    GetTeamsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(
    GetTeamsDocument,
    options,
  );
}
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<
  typeof useGetTeamsLazyQuery
>;
export type GetTeamsQueryResult = Apollo.QueryResult<
  GetTeamsQuery,
  GetTeamsQueryVariables
>;
export function refetchGetTeamsQuery(variables: GetTeamsQueryVariables) {
  return { query: GetTeamsDocument, variables: variables };
}
export const GetEventsDocument = gql`
  query getEvents($queryParams: QueryFilterDto!) {
    getWlaEvents(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        description
        thumbnail
        address
        isActive
        eventTime
        createdAt
        content
        capacity
        eventBy
        price
        eventLink
        status
        endTime
        type
        customerEvent {
          id
          responseType
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetEventsQuery(
  baseOptions: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(
    GetEventsDocument,
    options,
  );
}
export function useGetEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEventsQuery,
    GetEventsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(
    GetEventsDocument,
    options,
  );
}
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<
  typeof useGetEventsLazyQuery
>;
export type GetEventsQueryResult = Apollo.QueryResult<
  GetEventsQuery,
  GetEventsQueryVariables
>;
export function refetchGetEventsQuery(variables: GetEventsQueryVariables) {
  return { query: GetEventsDocument, variables: variables };
}
export const GetWlaUserNotificationsDocument = gql`
  query getWlaUserNotifications($queryParams: QueryFilterDto!) {
    getWlaUserNotifications(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        userId
        message
        notificationType
        isRead
        isHidden
        createdAt
        data
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetWlaUserNotificationsQuery__
 *
 * To run a query within a React component, call `useGetWlaUserNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWlaUserNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWlaUserNotificationsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetWlaUserNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetWlaUserNotificationsQuery,
    GetWlaUserNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWlaUserNotificationsQuery,
    GetWlaUserNotificationsQueryVariables
  >(GetWlaUserNotificationsDocument, options);
}
export function useGetWlaUserNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWlaUserNotificationsQuery,
    GetWlaUserNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWlaUserNotificationsQuery,
    GetWlaUserNotificationsQueryVariables
  >(GetWlaUserNotificationsDocument, options);
}
export type GetWlaUserNotificationsQueryHookResult = ReturnType<
  typeof useGetWlaUserNotificationsQuery
>;
export type GetWlaUserNotificationsLazyQueryHookResult = ReturnType<
  typeof useGetWlaUserNotificationsLazyQuery
>;
export type GetWlaUserNotificationsQueryResult = Apollo.QueryResult<
  GetWlaUserNotificationsQuery,
  GetWlaUserNotificationsQueryVariables
>;
export function refetchGetWlaUserNotificationsQuery(
  variables: GetWlaUserNotificationsQueryVariables,
) {
  return { query: GetWlaUserNotificationsDocument, variables: variables };
}
export const SearchPackageDocument = gql`
  query searchPackage(
    $queryParams: QueryFilterDto!
    $input: SearchPackagesInput!
  ) {
    searchPackage(queryParams: $queryParams, input: $input) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        isActive
        isVisible
        isAvailable
        displayName
        description
        amount
        roomId
        room {
          id
          name
          thumbnail
          gallery
          priceType
          capacityPeople
        }
        businessId
        locationId
        packageTypeId
        packageType {
          id
          name
          unit
        }
        occupiedCapacity
        availableCapacity
        note
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useSearchPackageQuery__
 *
 * To run a query within a React component, call `useSearchPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPackageQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchPackageQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchPackageQuery,
    SearchPackageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchPackageQuery, SearchPackageQueryVariables>(
    SearchPackageDocument,
    options,
  );
}
export function useSearchPackageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchPackageQuery,
    SearchPackageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchPackageQuery, SearchPackageQueryVariables>(
    SearchPackageDocument,
    options,
  );
}
export type SearchPackageQueryHookResult = ReturnType<
  typeof useSearchPackageQuery
>;
export type SearchPackageLazyQueryHookResult = ReturnType<
  typeof useSearchPackageLazyQuery
>;
export type SearchPackageQueryResult = Apollo.QueryResult<
  SearchPackageQuery,
  SearchPackageQueryVariables
>;
export function refetchSearchPackageQuery(
  variables: SearchPackageQueryVariables,
) {
  return { query: SearchPackageDocument, variables: variables };
}
export const SearchPackageUnitByServiceDocument = gql`
  query searchPackageUnitByService($input: SearchPackageUnitsInput!) {
    searchPackageUnitByService(input: $input)
  }
`;

/**
 * __useSearchPackageUnitByServiceQuery__
 *
 * To run a query within a React component, call `useSearchPackageUnitByServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPackageUnitByServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPackageUnitByServiceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchPackageUnitByServiceQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchPackageUnitByServiceQuery,
    SearchPackageUnitByServiceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SearchPackageUnitByServiceQuery,
    SearchPackageUnitByServiceQueryVariables
  >(SearchPackageUnitByServiceDocument, options);
}
export function useSearchPackageUnitByServiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchPackageUnitByServiceQuery,
    SearchPackageUnitByServiceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchPackageUnitByServiceQuery,
    SearchPackageUnitByServiceQueryVariables
  >(SearchPackageUnitByServiceDocument, options);
}
export type SearchPackageUnitByServiceQueryHookResult = ReturnType<
  typeof useSearchPackageUnitByServiceQuery
>;
export type SearchPackageUnitByServiceLazyQueryHookResult = ReturnType<
  typeof useSearchPackageUnitByServiceLazyQuery
>;
export type SearchPackageUnitByServiceQueryResult = Apollo.QueryResult<
  SearchPackageUnitByServiceQuery,
  SearchPackageUnitByServiceQueryVariables
>;
export function refetchSearchPackageUnitByServiceQuery(
  variables: SearchPackageUnitByServiceQueryVariables,
) {
  return { query: SearchPackageUnitByServiceDocument, variables: variables };
}
export const SearchServiceGroupDocument = gql`
  query searchServiceGroup(
    $input: SearchServiceGroupDto!
    $queryParams: QueryFilterDto!
  ) {
    searchServiceGroup(input: $input, queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        icon
        image
        colorCode
        isActive
        priority
        displayName
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useSearchServiceGroupQuery__
 *
 * To run a query within a React component, call `useSearchServiceGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchServiceGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchServiceGroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useSearchServiceGroupQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchServiceGroupQuery,
    SearchServiceGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SearchServiceGroupQuery,
    SearchServiceGroupQueryVariables
  >(SearchServiceGroupDocument, options);
}
export function useSearchServiceGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchServiceGroupQuery,
    SearchServiceGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchServiceGroupQuery,
    SearchServiceGroupQueryVariables
  >(SearchServiceGroupDocument, options);
}
export type SearchServiceGroupQueryHookResult = ReturnType<
  typeof useSearchServiceGroupQuery
>;
export type SearchServiceGroupLazyQueryHookResult = ReturnType<
  typeof useSearchServiceGroupLazyQuery
>;
export type SearchServiceGroupQueryResult = Apollo.QueryResult<
  SearchServiceGroupQuery,
  SearchServiceGroupQueryVariables
>;
export function refetchSearchServiceGroupQuery(
  variables: SearchServiceGroupQueryVariables,
) {
  return { query: SearchServiceGroupDocument, variables: variables };
}
export type MetaFragmentFragment = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type CalculateBookingMutationVariables = Exact<{
  input: CalculateBookingDto;
}>;

export type CalculateBookingMutation = {
  calculateBooking: {
    discount: any;
    maxCapacity: number;
    subTotal: number;
    promoTotal: number;
    totalAmount: number;
    isGroup: boolean;
    bundleDisplay: Array<{
      startTime: any;
      endTime: any;
      durationHour: number;
      packageData: any;
      packageId: number;
      totalAmount: number;
      estFee: number;
      duration: number;
      durationType: string;
    }>;
    nonWorkingDays: {
      nonWorkingWeekdays: Array<number>;
      nonWorkingDayList: Array<string>;
    };
  };
};

export type CreateBookingMutationVariables = Exact<{
  input: UpsertBookingDto;
}>;

export type CreateBookingMutation = { createBooking: { id: string } };

export type CreateExtraServiceOrderMutationVariables = Exact<{
  input: CreateExtraServiceOrderDto;
}>;

export type CreateExtraServiceOrderMutation = {
  createExtraServiceOrder: { id: string };
};

export type CreateIncidentMutationVariables = Exact<{
  input: CreateIncidentDto;
}>;

export type CreateIncidentMutation = { createIncident: { id: string } };

export type CreateInstallationMutationVariables = Exact<{
  input: CreateInstallationDto;
}>;

export type CreateInstallationMutation = {
  createInstallation: {
    id: string;
    deviceToken: string;
    userId?: string | null;
    customerId?: string | null;
    businessId?: string | null;
    firebaseToken: string;
    deviceType?: string | null;
    locale?: string | null;
    timezone?: string | null;
    platform?: string | null;
  };
};

export type CreateMailboxMutationVariables = Exact<{
  input: CreateInboxBaseInput;
}>;

export type CreateMailboxMutation = { createMailbox: { id: string } };

export type DeleteCustomerEventMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteCustomerEventMutation = {
  deleteCustomerEvent: { success: boolean; message: string };
};

export type MarkUserNotificationAsReadMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type MarkUserNotificationAsReadMutation = {
  markUserNotificationAsRead: { id: string };
};

export type PresignedUrlS3MutationVariables = Exact<{
  input: PresignedUrlDto;
}>;

export type PresignedUrlS3Mutation = {
  presignedUrlS3: { fileName: string; url: string; uploadUrl: string };
};

export type ReadMessageMutationVariables = Exact<{
  input: ClientReadMessageInput;
}>;

export type ReadMessageMutation = { readMessage: Array<string> };

export type SendMessageMutationVariables = Exact<{
  input: ClientSendMessageInput;
}>;

export type SendMessageMutation = { sendMessage: { id: string } };

export type SendVerifyEmailOtpMutationVariables = Exact<{
  input: SendUserVerifyEmailOtpInput;
}>;

export type SendVerifyEmailOtpMutation = {
  sendVerifyEmailOtp: { success: boolean; message: string };
};

export type UpdateMeMutationVariables = Exact<{
  input: UpdateWlaUserDto;
}>;

export type UpdateMeMutation = { updateMe: { id: string } };

export type UpsertCustomerEventMutationVariables = Exact<{
  input: UpsertCustomerEventDto;
}>;

export type UpsertCustomerEventMutation = {
  upsertCustomerEvent: {
    customerId?: string | null;
    responseType?: string | null;
    eventId?: string | null;
  };
};

export type VerifyUpdateEmailOtpMutationVariables = Exact<{
  input: VerifyEmailInput;
}>;

export type VerifyUpdateEmailOtpMutation = {
  verifyUpdateEmailOtp: { success: boolean; message: string };
};

export type GetBookingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetBookingQuery = {
  getBooking: {
    id: string;
    code?: string | null;
    customerName?: string | null;
    customerId?: string | null;
    note?: string | null;
    images?: Array<string> | null;
    files?: Array<string> | null;
    startTime: any;
    endTime: any;
    status?: string | null;
    numberOfPeople?: number | null;
    totalBookingAmount?: number | null;
    extraServiceFee?: number | null;
    totalAmount?: number | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    location?: { name?: string | null; address?: string | null } | null;
    package?: {
      name: string;
      packageType?: { unit?: PkgTypeUnit | null } | null;
    } | null;
    room?: { thumbnail?: string | null; gallery?: Array<string> | null } | null;
  };
};

export type GetBookingsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetBookingsQuery = {
  getBookings: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      code?: string | null;
      customerId?: string | null;
      serviceReference?: any | null;
      numberOfPeople?: number | null;
      startTime: any;
      endTime: any;
      status?: string | null;
      actualAmount?: number | null;
      totalAmount?: number | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      packageData?: any | null;
      package?: {
        name: string;
        packageType?: { unit?: PkgTypeUnit | null } | null;
      } | null;
      room?: {
        thumbnail?: string | null;
        gallery?: Array<string> | null;
      } | null;
    }>;
  };
};

export type GetBusinessConfigQueryVariables = Exact<{ [key: string]: never }>;

export type GetBusinessConfigQuery = {
  getBusinessConfig: {
    id: string;
    businessId?: string | null;
    path?: string | null;
    isActive?: boolean | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    ownerId?: string | null;
    isPrimary?: boolean | null;
    logo?: string | null;
    primaryColor?: string | null;
    logoMark?: string | null;
    logoType?: string | null;
    primaryButtonTextColor?: string | null;
  };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  getCurrentUser: {
    id: string;
    fullName?: string | null;
    username?: string | null;
    email?: string | null;
    gender?: string | null;
    avatar?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    gallery?: any | null;
    birthday?: any | null;
    country?: string | null;
    phoneNumber?: string | null;
    team?: { id: string; name: string } | null;
  };
};

export type GetEventDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetEventDetailQuery = {
  getEvent: {
    id: string;
    name?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    address?: string | null;
    isActive: boolean;
    eventTime?: any | null;
    endTime?: any | null;
    createdAt: any;
    content?: string | null;
    capacity?: number | null;
    eventBy?: string | null;
    price?: number | null;
    eventLink?: string | null;
    status?: string | null;
    location?: string | null;
    type?: string | null;
    customerEventSummary?: { totalGoing: number; totalInterest: number } | null;
    customerEvent?: { id: string; responseType?: string | null } | null;
  };
};

export type GetExtraServiceOrdersQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetExtraServiceOrdersQuery = {
  getExtraServiceOrders: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      code: string;
      totalItem?: number | null;
      actualAmount?: number | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      extraServices?: Array<{
        id: string;
        amount: number;
        quantity?: number | null;
        extraServiceType?: {
          id: string;
          name: string;
          displayName?: any | null;
          image?: string | null;
          amount: number;
          extraServiceUnit?: { id: string; name: string } | null;
        } | null;
      }> | null;
    }>;
  };
};

export type GetInboxQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetInboxQuery = {
  getInbox: {
    id: string;
    title?: string | null;
    userId?: string | null;
    locationId?: string | null;
    logo?: any | null;
    clientHasNewMessage: boolean;
    businessHasNewMessage: boolean;
    lastMessageId: string;
    enquiryType?: string | null;
    serviceId?: string | null;
    packageTypeId?: string | null;
    duration?: number | null;
    people?: number | null;
    startDate?: any | null;
    message?: string | null;
    status?: string | null;
    customerId?: string | null;
    createdAt: any;
    lastMessage?: {
      message?: string | null;
      senderId: string;
      senderLogo?: string | null;
      senderName?: string | null;
      files?: any | null;
      messageType?: string | null;
      isRead: boolean;
      createdAt: any;
    } | null;
    user?: {
      fullName?: string | null;
      username?: string | null;
      avatar?: string | null;
      email?: string | null;
    } | null;
    customer?: {
      fullName?: string | null;
      avatar?: string | null;
      email?: string | null;
    } | null;
  };
};

export type GetInboxesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetInboxesQuery = {
  getInboxes: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      title?: string | null;
      userId?: string | null;
      locationId?: string | null;
      logo?: any | null;
      clientHasNewMessage: boolean;
      businessHasNewMessage: boolean;
      lastMessageId: string;
      enquiryType?: string | null;
      serviceId?: string | null;
      packageTypeId?: string | null;
      duration?: number | null;
      people?: number | null;
      startDate?: any | null;
      message?: string | null;
      status?: string | null;
      customerId?: string | null;
      lastMessage?: {
        message?: string | null;
        senderId: string;
        senderLogo?: string | null;
        senderName?: string | null;
        files?: any | null;
        messageType?: string | null;
        isRead: boolean;
        createdAt: any;
      } | null;
      user?: {
        fullName?: string | null;
        username?: string | null;
        avatar?: string | null;
        email?: string | null;
      } | null;
      customer?: {
        fullName?: string | null;
        avatar?: string | null;
        email?: string | null;
      } | null;
    }>;
  };
};

export type GetIncidentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetIncidentQuery = {
  getIncident: {
    id: string;
    typeId?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    priority?: string | null;
    status?: string | null;
    customerId?: string | null;
    images?: Array<string> | null;
    files?: Array<string> | null;
    title?: string | null;
    dueDate?: any | null;
    assigneeId?: string | null;
    customerType?: string | null;
    completeInfo?: any | null;
    isFromApp?: boolean | null;
    incidentType?: {
      id: string;
      name: string;
      icon?: string | null;
      description?: string | null;
    } | null;
    customer?: {
      fullName?: string | null;
      email?: string | null;
      avatar?: string | null;
    } | null;
    assignee?: {
      id: string;
      avatar?: string | null;
      fullName?: string | null;
      username?: string | null;
    } | null;
    inbox?: {
      id: string;
      title?: string | null;
      logo?: any | null;
      clientHasNewMessage: boolean;
      businessHasNewMessage: boolean;
      lastMessageId: string;
      enquiryType?: string | null;
      serviceId?: string | null;
      packageId?: string | null;
      packageType?: string | null;
      duration?: number | null;
      people?: number | null;
      startDate?: any | null;
      message?: string | null;
    } | null;
  };
};

export type GetIncidentTypesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetIncidentTypesQuery = {
  getIncidentTypes: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{ id: string; name: string }>;
  };
};

export type GetIncidentsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetIncidentsQuery = {
  getIncidents: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      typeId?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      locationId?: string | null;
      message?: string | null;
      priority?: string | null;
      status?: string | null;
      customerId?: string | null;
      images?: Array<string> | null;
      files?: Array<string> | null;
      title?: string | null;
      dueDate?: any | null;
      assigneeId?: string | null;
      customerType?: string | null;
      completeInfo?: any | null;
      isFromApp?: boolean | null;
      incidentType?: {
        id: string;
        name: string;
        icon?: string | null;
        description?: string | null;
      } | null;
      customer?: {
        fullName?: string | null;
        email?: string | null;
        avatar?: string | null;
      } | null;
      assignee?: {
        id: string;
        avatar?: string | null;
        fullName?: string | null;
        username?: string | null;
      } | null;
      inbox?: {
        id: string;
        title?: string | null;
        logo?: any | null;
        clientHasNewMessage: boolean;
        businessHasNewMessage: boolean;
        lastMessageId: string;
        enquiryType?: string | null;
        serviceId?: string | null;
        packageId?: string | null;
        packageType?: string | null;
        duration?: number | null;
        people?: number | null;
        startDate?: any | null;
        message?: string | null;
      } | null;
    }>;
  };
};

export type GetMembersQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetMembersQuery = {
  getMembers: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      createdAt?: any | null;
      fullName?: string | null;
      gender?: string | null;
      avatar?: string | null;
      job?: { name: string } | null;
      team?: { id: string; name: string } | null;
      teams?: Array<{ id: string; name: string }> | null;
    }>;
  };
};

export type GetMessagesQueryVariables = Exact<{
  inboxId: Scalars['Float'];
  queryParams: QueryFilterDto;
}>;

export type GetMessagesQuery = {
  getMessages: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      message?: string | null;
      inboxId?: string | null;
      senderId: string;
      receiverId?: string | null;
      senderName?: string | null;
      receiverName?: string | null;
      isHidden: boolean;
      files?: any | null;
      isRead: boolean;
      senderLogo?: string | null;
      messageType?: string | null;
      receiverLogo?: string | null;
      createdAt: any;
    }>;
  };
};

export type GetNewWlaNotificationCountQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetNewWlaNotificationCountQuery = {
  getNewWlaNotificationCount: number;
};

export type GetPackagesByLocationQueryVariables = Exact<{
  queryParams: QueryFilterDto;
  id: Scalars['Float'];
}>;

export type GetPackagesByLocationQuery = {
  getPackagesByLocation: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      name: string;
      isActive: boolean;
      isVisible: boolean;
      displayName?: any | null;
      description?: string | null;
      amount?: number | null;
      roomId?: string | null;
      businessId?: string | null;
      locationId?: string | null;
      packageTypeId?: string | null;
      note?: string | null;
      createdAt: any;
      updatedAt: any;
      room?: { id: string; name: string } | null;
      packageType?: { id: string; name: string } | null;
    }>;
  };
};

export type GetRoomTypesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetRoomTypesQuery = {
  getRoomTypes: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{ id: string; name: string }>;
  };
};

export type GetServiceGroupsByLocationQueryVariables = Exact<{
  locationId: Scalars['ID'];
  queryParams: QueryFilterDto;
}>;

export type GetServiceGroupsByLocationQuery = {
  getServiceGroupsByLocation: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      name: string;
      icon?: string | null;
      image?: string | null;
      colorCode?: string | null;
      isActive: boolean;
      priority: number;
      displayName?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    }>;
  };
};

export type GetServiceReferencesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetServiceReferencesQuery = {
  getServiceReferences: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{ id: string; name: string }>;
  };
};

export type GetTeamsQueryVariables = Exact<{
  queryParams: TeamFilterDto;
}>;

export type GetTeamsQuery = {
  getTeams: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{ id: string; name: string }>;
  };
};

export type GetEventsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetEventsQuery = {
  getWlaEvents: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      name?: string | null;
      description?: string | null;
      thumbnail?: string | null;
      address?: string | null;
      isActive: boolean;
      eventTime?: any | null;
      createdAt: any;
      content?: string | null;
      capacity?: number | null;
      eventBy?: string | null;
      price?: number | null;
      eventLink?: string | null;
      status?: string | null;
      endTime?: any | null;
      type?: string | null;
      customerEvent?: { id: string; responseType?: string | null } | null;
    }>;
  };
};

export type GetWlaUserNotificationsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetWlaUserNotificationsQuery = {
  getWlaUserNotifications: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      userId: string;
      message: string;
      notificationType: string;
      isRead: boolean;
      isHidden: boolean;
      createdAt: any;
      data?: any | null;
    }>;
  };
};

export type SearchPackageQueryVariables = Exact<{
  queryParams: QueryFilterDto;
  input: SearchPackagesInput;
}>;

export type SearchPackageQuery = {
  searchPackage: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      name: string;
      isActive: boolean;
      isVisible: boolean;
      isAvailable?: boolean | null;
      displayName?: any | null;
      description?: string | null;
      amount?: number | null;
      roomId?: string | null;
      businessId?: string | null;
      locationId?: string | null;
      packageTypeId?: string | null;
      occupiedCapacity?: number | null;
      availableCapacity?: number | null;
      note?: string | null;
      createdAt: any;
      updatedAt: any;
      room?: {
        id: string;
        name: string;
        thumbnail?: string | null;
        gallery?: Array<string> | null;
        priceType: PriceType;
        capacityPeople?: number | null;
      } | null;
      packageType?: {
        id: string;
        name: string;
        unit?: PkgTypeUnit | null;
      } | null;
    }>;
  };
};

export type SearchPackageUnitByServiceQueryVariables = Exact<{
  input: SearchPackageUnitsInput;
}>;

export type SearchPackageUnitByServiceQuery = {
  searchPackageUnitByService: Array<string>;
};

export type SearchServiceGroupQueryVariables = Exact<{
  input: SearchServiceGroupDto;
  queryParams: QueryFilterDto;
}>;

export type SearchServiceGroupQuery = {
  searchServiceGroup: {
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      id: string;
      name: string;
      icon?: string | null;
      image?: string | null;
      colorCode?: string | null;
      isActive: boolean;
      priority: number;
      displayName?: any | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    }>;
  };
};
