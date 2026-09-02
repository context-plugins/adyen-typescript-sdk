import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";
import { storeLocationSchema, type StoreLocation } from "./store-location.js";
import { viasPhoneNumberSchema, type ViasPhoneNumber } from "./vias-phone-number.js";

export type DeliveryContact1 = {
  address: StoreLocation;
  company?: string;
  email?: string;
  fullPhoneNumber?: string;
  name: Name;
  phoneNumber?: ViasPhoneNumber;
  webAddress?: string;
};

export const deliveryContact1Schema: Schema<DeliveryContact1> = s.object<DeliveryContact1>({
  address: storeLocationSchema,
  company: s.optional(s.string()),
  email: s.optional(s.string()),
  fullPhoneNumber: s.optional(s.string()),
  name: nameSchema,
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumberSchema)),
  webAddress: s.optional(s.string()),
});
