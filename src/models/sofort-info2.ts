import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Sofort details. */
export type SofortInfo2 = {
  /** Sofort currency code. For example, **EUR**. */
  currencyCode: string;
  /** Sofort logo. Format: Base64-encoded string. */
  logo: string;
};

export const sofortInfo2Schema: Schema<SofortInfo2> = s.object<SofortInfo2>({
  currencyCode: s.string(),
  logo: s.string(),
});
