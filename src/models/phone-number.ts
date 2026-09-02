import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumber = {
  number: string;
  phoneCountryCode?: string;
  type?: string;
};

export const phoneNumberSchema: Schema<PhoneNumber> = s.object<PhoneNumber>({
  number: s.string(),
  phoneCountryCode: s.optional(s.string()),
  type: s.optional(s.string()),
});
