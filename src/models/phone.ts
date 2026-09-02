import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Phone = {
  cc?: string;
  subscriber?: string;
};

export const phoneSchema: Schema<Phone> = s.object<Phone>({
  cc: s.optional(s.string()),
  subscriber: s.optional(s.string()),
});
