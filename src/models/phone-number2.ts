import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumber2 = {
  number: string;
  phoneCountryCode?: string;
  type?: string;
};

export const phoneNumber2Schema: Schema<PhoneNumber2> = s.object<PhoneNumber2>({
  number: s.string(),
  phoneCountryCode: s.optional(s.string()),
  type: s.optional(s.string()),
});
