import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwintInfo = {
  /** Twint logo. Format: Base64-encoded string. */
  logo: string;
};

export const twintInfoSchema: Schema<TwintInfo> = s.object<TwintInfo>({
  logo: s.string(),
});
