import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name23 = {
  firstName: string;
  infix?: string;
  lastName: string;
};

export const name23Schema: Schema<Name23> = s.object<Name23>({
  firstName: s.string(),
  infix: s.optional(s.string()),
  lastName: s.string(),
});
