import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The name of the person funding the money. */
export type Name1 = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const name1Schema: Schema<Name1> = s.object<Name1>({
  firstName: s.string(),
  lastName: s.string(),
});
