import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's full name. */
export type Name22 = {
  /** The first name. */
  firstName?: string;
  /** The last name. */
  lastName?: string;
};

export const name22Schema: Schema<Name22> = s.object<Name22>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
