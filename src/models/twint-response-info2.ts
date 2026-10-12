import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **twint** details */
export type TwintResponseInfo2 = {
  /** Twint logo. Format: Base64-encoded string. */
  logo?: string;
};

export const twintResponseInfo2Schema: Schema<TwintResponseInfo2> = s.object<TwintResponseInfo2>({
  logo: s.optional(s.string()),
});
