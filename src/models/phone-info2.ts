import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneInfo2 = {
  hashedNumber?: string;
  lastFourDigits?: string;
  number?: string;
};

export const phoneInfo2Schema: Schema<PhoneInfo2> = s.object<PhoneInfo2>({
  hashedNumber: s.optional(s.string()),
  lastFourDigits: s.optional(s.string()),
  number: s.optional(s.string()),
});
