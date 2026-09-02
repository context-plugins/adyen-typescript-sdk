import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name4 = {
  firstName: string;
  lastName: string;
};

export const name4Schema: Schema<Name4> = s.object<Name4>({
  firstName: s.string(),
  lastName: s.string(),
});
