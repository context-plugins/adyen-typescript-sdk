import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name3 = {
  /** The individual's first name. Must not be blank. */
  firstName: string;
  /** The infix in the individual's name, if any. */
  infix?: string;
  /** The individual's last name. Must not be blank. */
  lastName: string;
};

export const name3Schema: Schema<Name3> = s.object<Name3>({
  firstName: s.string(),
  infix: s.optional(s.string()),
  lastName: s.string(),
});
