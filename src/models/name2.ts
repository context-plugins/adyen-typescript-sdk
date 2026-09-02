import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name2 = {
  firstName: string;
  lastName: string;
};

export const name2Schema: Schema<Name2> = s.object<Name2>({
  firstName: s.string(),
  lastName: s.string(),
});
