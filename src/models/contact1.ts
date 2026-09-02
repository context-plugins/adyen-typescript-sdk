import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Contact1 = {
  email?: string;
  firstName?: string;
  infix?: string;
  lastName?: string;
  phoneNumber?: string;
};

export const contact1Schema: Schema<Contact1> = s.object<Contact1>({
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
});
