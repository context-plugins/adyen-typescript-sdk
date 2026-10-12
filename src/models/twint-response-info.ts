import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwintResponseInfo = {
  /** Twint logo. Format: Base64-encoded string. */
  logo?: string;
};

export const twintResponseInfoSchema: Schema<TwintResponseInfo> = s.object<TwintResponseInfo>({
  logo: s.optional(s.string()),
});
