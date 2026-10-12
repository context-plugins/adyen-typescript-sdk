import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **affirm**. */
export type AffirmInfo1 = {
  /**
   * Selected Affirm financing package. Choose from **core**, **standard**, or **signature**.
   * Defaults to **core** if no selection made.
   */
  pricePlan?: string;
  /** Merchant support email used to manage disputes. */
  supportEmail: string;
};

export const affirmInfo1Schema: Schema<AffirmInfo1> = s.object<AffirmInfo1>({
  pricePlan: s.optional(s.string()),
  supportEmail: s.string(),
});
