import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./phone-number1.js";

export type Support = {
  email?: string;
  phone?: PhoneNumber1;
};

export const supportSchema: Schema<Support> = s.object<Support>({
  email: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneNumber1Schema)),
});
