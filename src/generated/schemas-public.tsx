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

export type IEvent = {
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

export type IEvents = {
  items: Array<IEvent>;
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

export type IPackageType = {
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

export type IPackageTypes = {
  items: Array<IPackageType>;
  meta: MetaPaginationInterface;
};

export type IPackages = {
  items: Array<IPackage>;
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
  gallery?: Maybe<Scalars['JSON']>;
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

export type LocationQueryDto = {
  amenityIds?: InputMaybe<Scalars['JSON']>;
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
  geolocation?: InputMaybe<GeoLocationDto>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']>;
  maxPrice?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']>;
  packageFilter?: InputMaybe<PackageFilter>;
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
  checkVerifyCode: ResponseMessageBase;
  deleteReferenceData: ResponseMessageBase;
  deleteServiceReference: ResponseMessageBase;
  forgotPassword: ResponseMessageBase;
  initBusiness: Business;
  initRoles: Scalars['JSON'];
  registerNewAccount: ResponseMessageBase;
  resetPassword: ResponseMessageBase;
  sendVerifyEmailOtp: ResponseMessageBase;
  updateReferenceData: IReferenceData;
  updateStatusReferenceData: IReferenceData;
  updateStatusServiceReference: IServiceReference;
  upsertExtraServiceCategory: IReferenceData;
  upsertExtraServiceUnit: IReferenceData;
  upsertJob: IReferenceData;
  upsertServiceReference: IServiceReference;
  verifyUpdateEmailOtp: ResponseMessageBase;
};

export type MutationCheckVerifyCodeArgs = {
  input: CheckVerifyCodeDto;
};

export type MutationDeleteReferenceDataArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteServiceReferenceArgs = {
  id: Scalars['ID'];
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordDto;
};

export type MutationRegisterNewAccountArgs = {
  input: RegisterNewAccountDto;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordDto;
};

export type MutationSendVerifyEmailOtpArgs = {
  input: SendUserVerifyEmailOtpInput;
};

export type MutationUpdateReferenceDataArgs = {
  input: UpsertReferenceDataDto;
  type: Scalars['String'];
};

export type MutationUpdateStatusReferenceDataArgs = {
  input: UpdateStatusReferenceDataDto;
};

export type MutationUpdateStatusServiceReferenceArgs = {
  input: UpdateStatusServiceReferenceDto;
};

export type MutationUpsertExtraServiceCategoryArgs = {
  input: UpsertReferenceDataDto;
};

export type MutationUpsertExtraServiceUnitArgs = {
  input: UpsertReferenceDataDto;
};

export type MutationUpsertJobArgs = {
  input: UpsertReferenceDataDto;
};

export type MutationUpsertServiceReferenceArgs = {
  input: UpsertServiceReferenceDto;
};

export type MutationVerifyUpdateEmailOtpArgs = {
  input: VerifyEmailInput;
};

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

export type PackageFilter = {
  packageTypeId?: InputMaybe<Scalars['ID']>;
  roomId?: InputMaybe<Scalars['ID']>;
  roomTypeNames?: InputMaybe<Array<Scalars['String']>>;
  serviceReferenceId?: InputMaybe<Scalars['ID']>;
  unit?: InputMaybe<Scalars['String']>;
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
  countMembers: Scalars['JSON'];
  getAllAmenities: Array<Amenity>;
  getAmenities: IAmenities;
  getAmenity: IAmenity;
  getBusinessConfig: IBusinessConfig;
  getEvent: IEvent;
  getEvents: IEvents;
  getExtraServiceCategories: Array<ReferenceData>;
  getExtraServiceCategoriesConfig: IReferenceDatas;
  getExtraServiceCategoryByLocation: Array<ReferenceData>;
  getExtraServiceType: IExtraServiceType;
  getExtraServiceTypes: IExtraServiceTypes;
  getExtraServiceTypesWla: IExtraServiceTypes;
  getExtraServiceUnits: Array<ReferenceData>;
  getExtraServiceUnitsConfig: IReferenceDatas;
  getJobs: Array<ReferenceData>;
  getJobsConfig: IReferenceDatas;
  getLocation: ILocation;
  getLocationCountByRoomType: Array<CountLocationByRoomType>;
  getLocations: ILocations;
  getPackage: IPackage;
  getPackageType: IPackageType;
  getPackageTypes: IPackageTypes;
  getPackages: IPackages;
  getPermissionGroups: Array<ReferenceData>;
  getRateConfig: Array<ReferenceData>;
  getReferenceData: IReferenceData;
  getReferenceDatas: IReferenceDatas;
  getReview: IReview;
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
  getWhiteLabelAppConfigMe: IWhiteLabelAppConfig;
  getWlaEvents: IEvents;
  getWlaLocations: ILocations;
  searchPackage: IPackages;
  searchPackageUnitByService: Array<Scalars['String']>;
};

export type QueryGetAmenitiesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetAmenityArgs = {
  id: Scalars['ID'];
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

export type QueryGetJobsConfigArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetLocationArgs = {
  coordinates?: InputMaybe<GeoLocationDto>;
  id: Scalars['String'];
};

export type QueryGetLocationCountByRoomTypeArgs = {
  queryParams: LocationQueryDto;
};

export type QueryGetLocationsArgs = {
  queryParams: LocationQueryDto;
};

export type QueryGetPackageArgs = {
  id: Scalars['ID'];
};

export type QueryGetPackageTypeArgs = {
  id: Scalars['ID'];
};

export type QueryGetPackageTypesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetPackagesArgs = {
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

export type QueryGetWlaEventsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetWlaLocationsArgs = {
  queryParams: LocationWhiteLabelQueryDto;
};

export type QuerySearchPackageArgs = {
  input: SearchPackagesInput;
  queryParams: QueryFilterDto;
};

export type QuerySearchPackageUnitByServiceArgs = {
  input: SearchPackageUnitsInput;
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
  gallery?: Maybe<Scalars['JSON']>;
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

export type UpdateStatusReferenceDataDto = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
};

export type UpdateStatusServiceReferenceDto = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
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

export type CountLocationByRoomType = {
  count: Scalars['Float'];
  nameRoomType?: Maybe<Scalars['String']>;
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
export const CheckVerifyCodeDocument = gql`
  mutation checkVerifyCode($input: CheckVerifyCodeDto!) {
    checkVerifyCode(input: $input) {
      success
      message
    }
  }
`;
export type CheckVerifyCodeMutationFn = Apollo.MutationFunction<
  CheckVerifyCodeMutation,
  CheckVerifyCodeMutationVariables
>;

/**
 * __useCheckVerifyCodeMutation__
 *
 * To run a mutation, you first call `useCheckVerifyCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckVerifyCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkVerifyCodeMutation, { data, loading, error }] = useCheckVerifyCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckVerifyCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CheckVerifyCodeMutation,
    CheckVerifyCodeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CheckVerifyCodeMutation,
    CheckVerifyCodeMutationVariables
  >(CheckVerifyCodeDocument, options);
}
export type CheckVerifyCodeMutationHookResult = ReturnType<
  typeof useCheckVerifyCodeMutation
>;
export type CheckVerifyCodeMutationResult =
  Apollo.MutationResult<CheckVerifyCodeMutation>;
export type CheckVerifyCodeMutationOptions = Apollo.BaseMutationOptions<
  CheckVerifyCodeMutation,
  CheckVerifyCodeMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation forgotPassword($input: ForgotPasswordDto!) {
    forgotPassword(input: $input) {
      success
      message
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation resetPassword($input: ResetPasswordDto!) {
    resetPassword(input: $input) {
      success
      message
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const GetAmenitiesDocument = gql`
  query getAmenities($queryParams: QueryFilterDto!) {
    getAmenities(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        isActive
        icon
        type
        isAppFilter
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetAmenitiesQuery__
 *
 * To run a query within a React component, call `useGetAmenitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAmenitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAmenitiesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAmenitiesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAmenitiesQuery,
    GetAmenitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAmenitiesQuery, GetAmenitiesQueryVariables>(
    GetAmenitiesDocument,
    options,
  );
}
export function useGetAmenitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAmenitiesQuery,
    GetAmenitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAmenitiesQuery, GetAmenitiesQueryVariables>(
    GetAmenitiesDocument,
    options,
  );
}
export type GetAmenitiesQueryHookResult = ReturnType<
  typeof useGetAmenitiesQuery
>;
export type GetAmenitiesLazyQueryHookResult = ReturnType<
  typeof useGetAmenitiesLazyQuery
>;
export type GetAmenitiesQueryResult = Apollo.QueryResult<
  GetAmenitiesQuery,
  GetAmenitiesQueryVariables
>;
export function refetchGetAmenitiesQuery(
  variables: GetAmenitiesQueryVariables,
) {
  return { query: GetAmenitiesDocument, variables };
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
  return { query: GetEventDetailDocument, variables };
}
export const GetExtraServiceCategoriesDocument = gql`
  query getExtraServiceCategories {
    getExtraServiceCategories {
      id
      name
      description
      icon
      isActive
      type
      priority
      code
      displayName
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetExtraServiceCategoriesQuery__
 *
 * To run a query within a React component, call `useGetExtraServiceCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExtraServiceCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExtraServiceCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExtraServiceCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetExtraServiceCategoriesQuery,
    GetExtraServiceCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetExtraServiceCategoriesQuery,
    GetExtraServiceCategoriesQueryVariables
  >(GetExtraServiceCategoriesDocument, options);
}
export function useGetExtraServiceCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExtraServiceCategoriesQuery,
    GetExtraServiceCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExtraServiceCategoriesQuery,
    GetExtraServiceCategoriesQueryVariables
  >(GetExtraServiceCategoriesDocument, options);
}
export type GetExtraServiceCategoriesQueryHookResult = ReturnType<
  typeof useGetExtraServiceCategoriesQuery
>;
export type GetExtraServiceCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetExtraServiceCategoriesLazyQuery
>;
export type GetExtraServiceCategoriesQueryResult = Apollo.QueryResult<
  GetExtraServiceCategoriesQuery,
  GetExtraServiceCategoriesQueryVariables
>;
export function refetchGetExtraServiceCategoriesQuery(
  variables?: GetExtraServiceCategoriesQueryVariables,
) {
  return { query: GetExtraServiceCategoriesDocument, variables };
}
export const GetExtraServiceCategoriesConfigDocument = gql`
  query getExtraServiceCategoriesConfig($queryParams: QueryFilterDto!) {
    getExtraServiceCategoriesConfig(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        description
        icon
        isActive
        type
        priority
        code
        displayName
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetExtraServiceCategoriesConfigQuery__
 *
 * To run a query within a React component, call `useGetExtraServiceCategoriesConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExtraServiceCategoriesConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExtraServiceCategoriesConfigQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetExtraServiceCategoriesConfigQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetExtraServiceCategoriesConfigQuery,
    GetExtraServiceCategoriesConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetExtraServiceCategoriesConfigQuery,
    GetExtraServiceCategoriesConfigQueryVariables
  >(GetExtraServiceCategoriesConfigDocument, options);
}
export function useGetExtraServiceCategoriesConfigLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExtraServiceCategoriesConfigQuery,
    GetExtraServiceCategoriesConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExtraServiceCategoriesConfigQuery,
    GetExtraServiceCategoriesConfigQueryVariables
  >(GetExtraServiceCategoriesConfigDocument, options);
}
export type GetExtraServiceCategoriesConfigQueryHookResult = ReturnType<
  typeof useGetExtraServiceCategoriesConfigQuery
>;
export type GetExtraServiceCategoriesConfigLazyQueryHookResult = ReturnType<
  typeof useGetExtraServiceCategoriesConfigLazyQuery
>;
export type GetExtraServiceCategoriesConfigQueryResult = Apollo.QueryResult<
  GetExtraServiceCategoriesConfigQuery,
  GetExtraServiceCategoriesConfigQueryVariables
>;
export function refetchGetExtraServiceCategoriesConfigQuery(
  variables: GetExtraServiceCategoriesConfigQueryVariables,
) {
  return {
    query: GetExtraServiceCategoriesConfigDocument,
    variables,
  };
}
export const GetExtraServiceTypesDocument = gql`
  query getExtraServiceTypes($queryParams: QueryFilterDto!) {
    getExtraServiceTypesWla(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        displayName
        isActive
        amount
        unit
        image
        extraServiceCategoryId
        extraServiceCategory {
          name
        }
        extraServiceUnitId
        extraServiceUnit {
          name
        }
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetExtraServiceTypesQuery__
 *
 * To run a query within a React component, call `useGetExtraServiceTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExtraServiceTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExtraServiceTypesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetExtraServiceTypesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetExtraServiceTypesQuery,
    GetExtraServiceTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetExtraServiceTypesQuery,
    GetExtraServiceTypesQueryVariables
  >(GetExtraServiceTypesDocument, options);
}
export function useGetExtraServiceTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExtraServiceTypesQuery,
    GetExtraServiceTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetExtraServiceTypesQuery,
    GetExtraServiceTypesQueryVariables
  >(GetExtraServiceTypesDocument, options);
}
export type GetExtraServiceTypesQueryHookResult = ReturnType<
  typeof useGetExtraServiceTypesQuery
>;
export type GetExtraServiceTypesLazyQueryHookResult = ReturnType<
  typeof useGetExtraServiceTypesLazyQuery
>;
export type GetExtraServiceTypesQueryResult = Apollo.QueryResult<
  GetExtraServiceTypesQuery,
  GetExtraServiceTypesQueryVariables
>;
export function refetchGetExtraServiceTypesQuery(
  variables: GetExtraServiceTypesQueryVariables,
) {
  return { query: GetExtraServiceTypesDocument, variables };
}
export const GetLocationDetailDocument = gql`
  query getLocationDetail($id: String!, $coordinates: GeoLocationDto) {
    getLocation(id: $id, coordinates: $coordinates) {
      id
      name
      isActive
      address
      thumbnail
      description
      roomTypes {
        name
        image
        description
      }
      gallery
      floorPlan
      amenityIds
      emailContact
      emailEnquiry
      maxPrice
      minPrice
      phoneContact
      createdAt
      updatedAt
      workingTime {
        monday {
          openTime
          closeTime
          isOpen
        }
        tuesday {
          openTime
          closeTime
          isOpen
        }
        wednesday {
          openTime
          closeTime
          isOpen
        }
        thursday {
          openTime
          closeTime
          isOpen
        }
        friday {
          openTime
          closeTime
          isOpen
        }
        saturday {
          openTime
          closeTime
          isOpen
        }
        sunday {
          openTime
          closeTime
          isOpen
        }
      }
      coordinates {
        longitude
        latitude
        distance
      }
    }
  }
`;

/**
 * __useGetLocationDetailQuery__
 *
 * To run a query within a React component, call `useGetLocationDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *      coordinates: // value for 'coordinates'
 *   },
 * });
 */
export function useGetLocationDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationDetailQuery,
    GetLocationDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLocationDetailQuery,
    GetLocationDetailQueryVariables
  >(GetLocationDetailDocument, options);
}
export function useGetLocationDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationDetailQuery,
    GetLocationDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationDetailQuery,
    GetLocationDetailQueryVariables
  >(GetLocationDetailDocument, options);
}
export type GetLocationDetailQueryHookResult = ReturnType<
  typeof useGetLocationDetailQuery
>;
export type GetLocationDetailLazyQueryHookResult = ReturnType<
  typeof useGetLocationDetailLazyQuery
>;
export type GetLocationDetailQueryResult = Apollo.QueryResult<
  GetLocationDetailQuery,
  GetLocationDetailQueryVariables
>;
export function refetchGetLocationDetailQuery(
  variables: GetLocationDetailQueryVariables,
) {
  return { query: GetLocationDetailDocument, variables };
}
export const GetLocationsDocument = gql`
  query getLocations($queryParams: LocationQueryDto!) {
    getLocations(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        isActive
        address
        thumbnail
        description
        gallery
        amenityIds
        minPrice
        maxPrice
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetLocationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options,
  );
}
export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options,
  );
}
export type GetLocationsQueryHookResult = ReturnType<
  typeof useGetLocationsQuery
>;
export type GetLocationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsLazyQuery
>;
export type GetLocationsQueryResult = Apollo.QueryResult<
  GetLocationsQuery,
  GetLocationsQueryVariables
>;
export function refetchGetLocationsQuery(
  variables: GetLocationsQueryVariables,
) {
  return { query: GetLocationsDocument, variables };
}
export const GetPackageDocument = gql`
  query getPackage($id: ID!) {
    getPackage(id: $id) {
      id
      name
      isActive
      isAvailable
      description
      amount
      displayName
      roomId
      room {
        id
        thumbnail
        gallery
        description
        priceType
        floorPlan
        capacityPeople
      }
      location {
        name
        address
      }
      packageType {
        name
        displayName
        unit
        startTime
        endTime
      }
      occupiedCapacity
      availableCapacity
      roomTypeId
      roomType {
        name
        displayName
        serviceGroupId
      }
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetPackageQuery__
 *
 * To run a query within a React component, call `useGetPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPackageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPackageQuery,
    GetPackageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPackageQuery, GetPackageQueryVariables>(
    GetPackageDocument,
    options,
  );
}
export function useGetPackageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPackageQuery,
    GetPackageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPackageQuery, GetPackageQueryVariables>(
    GetPackageDocument,
    options,
  );
}
export type GetPackageQueryHookResult = ReturnType<typeof useGetPackageQuery>;
export type GetPackageLazyQueryHookResult = ReturnType<
  typeof useGetPackageLazyQuery
>;
export type GetPackageQueryResult = Apollo.QueryResult<
  GetPackageQuery,
  GetPackageQueryVariables
>;
export function refetchGetPackageQuery(variables: GetPackageQueryVariables) {
  return { query: GetPackageDocument, variables };
}
export const GetPackageTypesDocument = gql`
  query getPackageTypes($queryParams: QueryFilterDto!) {
    getPackageTypes(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        businessId
        locationId
        isActive
        unit
        duration
        exceptDays
        startTime
        endTime
        displayName
        description
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetPackageTypesQuery__
 *
 * To run a query within a React component, call `useGetPackageTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackageTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackageTypesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetPackageTypesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPackageTypesQuery,
    GetPackageTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPackageTypesQuery, GetPackageTypesQueryVariables>(
    GetPackageTypesDocument,
    options,
  );
}
export function useGetPackageTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPackageTypesQuery,
    GetPackageTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPackageTypesQuery,
    GetPackageTypesQueryVariables
  >(GetPackageTypesDocument, options);
}
export type GetPackageTypesQueryHookResult = ReturnType<
  typeof useGetPackageTypesQuery
>;
export type GetPackageTypesLazyQueryHookResult = ReturnType<
  typeof useGetPackageTypesLazyQuery
>;
export type GetPackageTypesQueryResult = Apollo.QueryResult<
  GetPackageTypesQuery,
  GetPackageTypesQueryVariables
>;
export function refetchGetPackageTypesQuery(
  variables: GetPackageTypesQueryVariables,
) {
  return { query: GetPackageTypesDocument, variables };
}
export const GetServiceGroupDocument = gql`
  query getServiceGroup($id: ID!) {
    getServiceGroup(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useGetServiceGroupQuery__
 *
 * To run a query within a React component, call `useGetServiceGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetServiceGroupQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetServiceGroupQuery,
    GetServiceGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetServiceGroupQuery, GetServiceGroupQueryVariables>(
    GetServiceGroupDocument,
    options,
  );
}
export function useGetServiceGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServiceGroupQuery,
    GetServiceGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServiceGroupQuery,
    GetServiceGroupQueryVariables
  >(GetServiceGroupDocument, options);
}
export type GetServiceGroupQueryHookResult = ReturnType<
  typeof useGetServiceGroupQuery
>;
export type GetServiceGroupLazyQueryHookResult = ReturnType<
  typeof useGetServiceGroupLazyQuery
>;
export type GetServiceGroupQueryResult = Apollo.QueryResult<
  GetServiceGroupQuery,
  GetServiceGroupQueryVariables
>;
export function refetchGetServiceGroupQuery(
  variables: GetServiceGroupQueryVariables,
) {
  return { query: GetServiceGroupDocument, variables };
}
export const GetServiceGroupsDocument = gql`
  query getServiceGroups($queryParams: QueryFilterDto!) {
    getServiceGroups(queryParams: $queryParams) {
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
 * __useGetServiceGroupsQuery__
 *
 * To run a query within a React component, call `useGetServiceGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceGroupsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetServiceGroupsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetServiceGroupsQuery,
    GetServiceGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetServiceGroupsQuery, GetServiceGroupsQueryVariables>(
    GetServiceGroupsDocument,
    options,
  );
}
export function useGetServiceGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServiceGroupsQuery,
    GetServiceGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServiceGroupsQuery,
    GetServiceGroupsQueryVariables
  >(GetServiceGroupsDocument, options);
}
export type GetServiceGroupsQueryHookResult = ReturnType<
  typeof useGetServiceGroupsQuery
>;
export type GetServiceGroupsLazyQueryHookResult = ReturnType<
  typeof useGetServiceGroupsLazyQuery
>;
export type GetServiceGroupsQueryResult = Apollo.QueryResult<
  GetServiceGroupsQuery,
  GetServiceGroupsQueryVariables
>;
export function refetchGetServiceGroupsQuery(
  variables: GetServiceGroupsQueryVariables,
) {
  return { query: GetServiceGroupsDocument, variables };
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
  return { query: GetServiceGroupsByLocationDocument, variables };
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
  return { query: GetEventsDocument, variables };
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
  return { query: SearchPackageDocument, variables };
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
  return { query: SearchPackageUnitByServiceDocument, variables };
}
export type MetaFragmentFragment = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type CheckVerifyCodeMutationVariables = Exact<{
  input: CheckVerifyCodeDto;
}>;

export type CheckVerifyCodeMutation = {
  checkVerifyCode: { success: boolean; message: string };
};

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordDto;
}>;

export type ForgotPasswordMutation = {
  forgotPassword: { success: boolean; message: string };
};

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordDto;
}>;

export type ResetPasswordMutation = {
  resetPassword: { success: boolean; message: string };
};

export type GetAmenitiesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetAmenitiesQuery = {
  getAmenities: {
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
      icon?: string | null;
      type: AmenityType;
      isAppFilter: boolean;
    }>;
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

export type GetExtraServiceCategoriesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetExtraServiceCategoriesQuery = {
  getExtraServiceCategories: Array<{
    id: string;
    name: string;
    description?: string | null;
    icon?: string | null;
    isActive: boolean;
    type?: string | null;
    priority: number;
    code?: string | null;
    displayName?: any | null;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetExtraServiceCategoriesConfigQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetExtraServiceCategoriesConfigQuery = {
  getExtraServiceCategoriesConfig: {
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
      description?: string | null;
      icon?: string | null;
      isActive: boolean;
      type?: string | null;
      priority: number;
      code?: string | null;
      displayName?: any | null;
      createdAt: string;
      updatedAt: string;
    }>;
  };
};

export type GetExtraServiceTypesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetExtraServiceTypesQuery = {
  getExtraServiceTypesWla: {
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
      displayName?: any | null;
      isActive: boolean;
      amount: number;
      unit?: string | null;
      image?: string | null;
      extraServiceCategoryId?: string | null;
      extraServiceUnitId?: string | null;
      createdAt: any;
      updatedAt: any;
      extraServiceCategory?: { name: string } | null;
      extraServiceUnit?: { name: string } | null;
    }>;
  };
};

export type GetLocationDetailQueryVariables = Exact<{
  id: Scalars['String'];
  coordinates?: InputMaybe<GeoLocationDto>;
}>;

export type GetLocationDetailQuery = {
  getLocation: {
    id: string;
    name?: string | null;
    isActive?: boolean | null;
    address?: string | null;
    thumbnail?: string | null;
    description?: string | null;
    gallery?: Array<string> | null;
    floorPlan?: Array<string> | null;
    amenityIds?: Array<string> | null;
    emailContact?: string | null;
    emailEnquiry?: string | null;
    maxPrice?: number | null;
    minPrice?: number | null;
    phoneContact?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    roomTypes?: Array<{
      name: string;
      image?: string | null;
      description?: string | null;
    }> | null;
    workingTime?: {
      monday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
      tuesday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
      wednesday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
      thursday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
      friday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
      saturday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
      sunday?: {
        openTime?: any | null;
        closeTime?: any | null;
        isOpen?: boolean | null;
      } | null;
    } | null;
    coordinates?: {
      longitude: number;
      latitude: number;
      distance?: number | null;
    } | null;
  };
};

export type GetLocationsQueryVariables = Exact<{
  queryParams: LocationQueryDto;
}>;

export type GetLocationsQuery = {
  getLocations: {
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
      isActive?: boolean | null;
      address?: string | null;
      thumbnail?: string | null;
      description?: string | null;
      gallery?: Array<string> | null;
      amenityIds?: Array<string> | null;
      minPrice?: number | null;
      maxPrice?: number | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    }>;
  };
};

export type GetPackageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPackageQuery = {
  getPackage: {
    id: string;
    name: string;
    isActive: boolean;
    isAvailable?: boolean | null;
    description?: string | null;
    amount?: number | null;
    displayName?: any | null;
    roomId?: string | null;
    occupiedCapacity?: number | null;
    availableCapacity?: number | null;
    roomTypeId?: string | null;
    createdAt: any;
    updatedAt: any;
    room?: {
      id: string;
      thumbnail?: string | null;
      gallery?: any | null;
      description?: string | null;
      priceType: PriceType;
      floorPlan?: Array<string> | null;
      capacityPeople?: number | null;
    } | null;
    location?: { name?: string | null; address?: string | null } | null;
    packageType?: {
      name: string;
      displayName?: any | null;
      unit?: PkgTypeUnit | null;
      startTime?: number | null;
      endTime?: number | null;
    } | null;
    roomType?: {
      name: string;
      displayName?: any | null;
      serviceGroupId?: string | null;
    } | null;
  };
};

export type GetPackageTypesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetPackageTypesQuery = {
  getPackageTypes: {
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
      businessId?: string | null;
      locationId?: string | null;
      isActive: boolean;
      unit?: PkgTypeUnit | null;
      duration?: number | null;
      exceptDays?: any | null;
      startTime?: number | null;
      endTime?: number | null;
      displayName?: any | null;
      description?: string | null;
    }>;
  };
};

export type GetServiceGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetServiceGroupQuery = {
  getServiceGroup: { id: string; name: string };
};

export type GetServiceGroupsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetServiceGroupsQuery = {
  getServiceGroups: {
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
        gallery?: any | null;
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
