import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Contact = {
  /** The individual's email address. */
  email?: string;
  /** The individual's first name. */
  firstName?: string;
  /** The infix in the individual's name, if any. */
  infix?: string;
  /** The individual's last name. */
  lastName?: string;
  /** The individual's phone number, specified as 10-14 digits with an optional `+` prefix. */
  phoneNumber?: string;
};

export const contactSchema: Schema<Contact> = s.object<Contact>({
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  infix: s.optional(s.string()),
  lastName: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
});
