import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name7 = {
  firstName: string;
  lastName: string;
};

export const name7Schema: Schema<Name7> = s.object<Name7>({
  firstName: s.string(),
  lastName: s.string(),
});
