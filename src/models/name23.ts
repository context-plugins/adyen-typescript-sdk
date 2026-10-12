import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The individual's name. */
export type Name23 = {
  /** The individual's first name. Must not be blank. */
  firstName: string;
  /** The infix in the individual's name, if any. */
  infix?: string;
  /** The individual's last name. Must not be blank. */
  lastName: string;
};

export const name23Schema: Schema<Name23> = s.object<Name23>({
  firstName: s.string(),
  infix: s.optional(s.string()),
  lastName: s.string(),
});
