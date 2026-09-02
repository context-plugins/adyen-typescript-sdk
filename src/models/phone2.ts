import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Phone2 = {
  cc?: string;
  subscriber?: string;
};

export const phone2Schema: Schema<Phone2> = s.object<Phone2>({
  cc: s.optional(s.string()),
  subscriber: s.optional(s.string()),
});
