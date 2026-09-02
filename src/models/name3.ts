import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name3 = {
  firstName: string;
  infix?: string;
  lastName: string;
};

export const name3Schema: Schema<Name3> = s.object<Name3>({
  firstName: s.string(),
  infix: s.optional(s.string()),
  lastName: s.string(),
});
