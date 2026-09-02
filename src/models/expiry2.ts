import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Expiry2 = {
  month?: string;
  year?: string;
};

export const expiry2Schema: Schema<Expiry2> = s.object<Expiry2>({
  month: s.optional(s.string()),
  year: s.optional(s.string()),
});
