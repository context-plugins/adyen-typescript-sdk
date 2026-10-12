import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The name of the shopper. */
export type Name2 = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const name2Schema: Schema<Name2> = s.object<Name2>({
  firstName: s.string(),
  lastName: s.string(),
});
