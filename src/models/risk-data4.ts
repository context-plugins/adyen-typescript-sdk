import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains risk data, such as client-side data, used to identify risk for a transaction. */
export type RiskData4 = {
  /**
   * Contains client-side data, like the device fingerprint, cookies, and specific browser settings.
   */
  clientData?: string;
  /** Any custom fields used as part of the input to configured risk rules. */
  customFields?: Record<string, string>;
  /**
   * An integer value that is added to the normal fraud score. The value can be either positive or
   * negative.
   */
  fraudOffset?: number;
  /**
   * The risk profile to assign to this payment. When left empty, the merchant-level account's
   * default risk profile will be applied.
   */
  profileReference?: string;
};

export const riskData4Schema: Schema<RiskData4> = s.object<RiskData4>({
  clientData: s.optional(s.string()),
  customFields: s.optional(s.record(s.string(), s.string())),
  fraudOffset: s.optional(s.int()),
  profileReference: s.optional(s.string()),
});
