import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name21 = {
  /** The first name. */
  firstName?: string;
  /** The last name. */
  lastName?: string;
};

export const name21Schema: Schema<Name21> = s.object<Name21>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
