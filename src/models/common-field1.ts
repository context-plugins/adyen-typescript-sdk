import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK,
 * etc.
 */
export type CommonField1 = {
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
};

export const commonField1Schema: Schema<CommonField1> = s.object<CommonField1>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
