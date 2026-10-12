import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";
import { storeLocationSchema, type StoreLocation } from "./store-location.js";
import { viasPhoneNumberSchema, type ViasPhoneNumber } from "./vias-phone-number.js";

export type DeliveryContact = {
  /** The address of the contact. */
  address: StoreLocation;
  /** The company name of the contact. */
  company?: string;
  /** The email address of the contact. */
  email?: string;
  /**
   * The full phone number of the contact provided as a single string. It will be handled as a
   * landline phone. **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
   */
  fullPhoneNumber?: string;
  /** The name of the contact. */
  name: Name;
  /** The phone number of the contact. */
  phoneNumber?: ViasPhoneNumber;
  /** The URL of the contact's website. */
  webAddress?: string;
};

export const deliveryContactSchema: Schema<DeliveryContact> = s.object<DeliveryContact>({
  address: storeLocationSchema,
  company: s.optional(s.string()),
  email: s.optional(s.string()),
  fullPhoneNumber: s.optional(s.string()),
  name: nameSchema,
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumberSchema)),
  webAddress: s.optional(s.string()),
});
