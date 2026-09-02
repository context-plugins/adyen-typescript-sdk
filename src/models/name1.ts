import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name1 = {
  firstName: string;
  lastName: string;
};

export const name1Schema: Schema<Name1> = s.object<Name1>({
  firstName: s.string(),
  lastName: s.string(),
});
