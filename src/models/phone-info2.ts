import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The information about the phone number of the device used to provision the the network token.
 * This object is conditionally returned and is available for up to 24 hours after the provisioning
 * request (access to this field requires a specific user role, please contact your Adyen
 * representative to request permission).
 */
export type PhoneInfo2 = {
  /** The hashed value of the phone number used to provision the network token. */
  hashedNumber?: string;
  /** The last four digits of the phone number used to provision the network token. */
  lastFourDigits?: string;
  /** The full phone number of the device used to provision the network token. */
  number?: string;
};

export const phoneInfo2Schema: Schema<PhoneInfo2> = s.object<PhoneInfo2>({
  hashedNumber: s.optional(s.string()),
  lastFourDigits: s.optional(s.string()),
  number: s.optional(s.string()),
});
