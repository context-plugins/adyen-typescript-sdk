import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Contact = {
  email?: string;
  firstName?: string;
  infix?: string;
  lastName?: string;
  phoneNumber?: string;
};

export const contactSchema: Schema<Contact> = s.object<Contact>({
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
});
