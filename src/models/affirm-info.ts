import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmInfo = {
  /**
   * Selected Affirm financing package. Choose from **core**, **standard**, or **signature**.
   * Defaults to **core** if no selection made.
   */
  pricePlan?: string;
  /** Merchant support email used to manage disputes. */
  supportEmail: string;
};

export const affirmInfoSchema: Schema<AffirmInfo> = s.object<AffirmInfo>({
  pricePlan: s.optional(s.string()),
  supportEmail: s.string(),
});
