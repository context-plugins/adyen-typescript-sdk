import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The expiration date of the card. */
export type Expiry2 = {
  /** The month in which the card will expire. */
  month?: string;
  /** The year in which the card will expire. */
  year?: string;
};

export const expiry2Schema: Schema<Expiry2> = s.object<Expiry2>({
  month: s.optional(s.string()),
  year: s.optional(s.string()),
});
