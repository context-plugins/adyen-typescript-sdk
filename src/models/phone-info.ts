import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneInfo = {
  /** The hashed value of the phone number used to provision the network token. */
  hashedNumber?: string;
  /** The last four digits of the phone number used to provision the network token. */
  lastFourDigits?: string;
  /** The full phone number of the device used to provision the network token. */
  number?: string;
};

export const phoneInfoSchema: Schema<PhoneInfo> = s.object<PhoneInfo>({
  hashedNumber: s.optional(s.string()),
  lastFourDigits: s.optional(s.string()),
  number: s.optional(s.string()),
});
