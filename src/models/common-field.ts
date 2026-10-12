import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK,
 * etc., Merchant developed software, such as cashier application, used to interact with the Adyen
 * API., Adyen-developed software, such as libraries and plugins, used to interact with the Adyen
 * API. For example, Magento plugin, Java API library, etc.
 */
export type CommonField = {
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
};

export const commonFieldSchema: Schema<CommonField> = s.object<CommonField>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
