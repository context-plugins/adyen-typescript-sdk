import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **twint**. */
export type TwintInfo2 = {
  /** Twint logo. Format: Base64-encoded string. */
  logo: string;
};

export const twintInfo2Schema: Schema<TwintInfo2> = s.object<TwintInfo2>({
  logo: s.string(),
});
