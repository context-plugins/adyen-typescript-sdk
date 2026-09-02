import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneInfo = {
  hashedNumber?: string;
  lastFourDigits?: string;
  number?: string;
};

export const phoneInfoSchema: Schema<PhoneInfo> = s.object<PhoneInfo>({
  hashedNumber: s.optional(s.string()),
  lastFourDigits: s.optional(s.string()),
  number: s.optional(s.string()),
});
