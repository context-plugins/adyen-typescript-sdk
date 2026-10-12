import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **affirm**. */
export type AffirmUpdateInfo1 = {
  /**
   * Selected Affirm financing package. Choose from **core**, **standard**, or **signature**.
   * Defaults to **core** if no selection made.
   */
  pricePlan?: string;
};

export const affirmUpdateInfo1Schema: Schema<AffirmUpdateInfo1> = s.object<AffirmUpdateInfo1>({
  pricePlan: s.optional(s.string()),
});
