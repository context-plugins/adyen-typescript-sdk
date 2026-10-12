import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmUpdateInfo = {
  /**
   * Selected Affirm financing package. Choose from **core**, **standard**, or **signature**.
   * Defaults to **core** if no selection made.
   */
  pricePlan?: string;
};

export const affirmUpdateInfoSchema: Schema<AffirmUpdateInfo> = s.object<AffirmUpdateInfo>({
  pricePlan: s.optional(s.string()),
});
