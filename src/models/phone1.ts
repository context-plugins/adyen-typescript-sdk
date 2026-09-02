import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Phone1 = {
  cc?: string;
  subscriber?: string;
};

export const phone1Schema: Schema<Phone1> = s.object<Phone1>({
  cc: s.optional(s.string()),
  subscriber: s.optional(s.string()),
});
