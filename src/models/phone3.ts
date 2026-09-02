import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Phone3 = {
  cc?: string;
  subscriber?: string;
};

export const phone3Schema: Schema<Phone3> = s.object<Phone3>({
  cc: s.optional(s.string()),
  subscriber: s.optional(s.string()),
});
