import { InMemoryCache, makeVar } from '@apollo/client';
import { IWlaUser, Maybe } from '@/generated/schemas';
import { DeepPartial } from '@/shared/utils/type';

export const userInfoVar = makeVar<Maybe<DeepPartial<IWlaUser>>>(null);

export const cache: InMemoryCache = new InMemoryCache();
