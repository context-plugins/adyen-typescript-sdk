import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./phone-number1.js";

export type Support1 = {
  email?: string;
  phone?: PhoneNumber1;
};

export const support1Schema: Schema<Support1> = s.object<Support1>({
  email: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneNumber1Schema)),
});
