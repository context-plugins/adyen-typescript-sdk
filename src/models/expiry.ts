import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Expiry = {
  /** The month in which the card will expire. */
  month?: string;
  /** The year in which the card will expire. */
  year?: string;
};

export const expirySchema: Schema<Expiry> = s.object<Expiry>({
  month: s.optional(s.string()),
  year: s.optional(s.string()),
});
