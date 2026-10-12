import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The shopper's full name. */
export type Name7 = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const name7Schema: Schema<Name7> = s.object<Name7>({
  firstName: s.string(),
  lastName: s.string(),
});
