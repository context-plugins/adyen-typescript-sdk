import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Merchant developed software, such as cashier application, used to interact with the Adyen API.
 */
export type CommonField2 = {
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
};

export const commonField2Schema: Schema<CommonField2> = s.object<CommonField2>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
