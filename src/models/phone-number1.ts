import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumber1 = {
  number: string;
  phoneCountryCode?: string;
  type?: string;
};

export const phoneNumber1Schema: Schema<PhoneNumber1> = s.object<PhoneNumber1>({
  number: s.string(),
  phoneCountryCode: s.optional(s.string()),
  type: s.optional(s.string()),
});
