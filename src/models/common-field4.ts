import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For
 * example, Magento plugin, Java API library, etc.
 */
export type CommonField4 = {
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
};

export const commonField4Schema: Schema<CommonField4> = s.object<CommonField4>({
  name: s.optional(s.string()),
  version: s.optional(s.string()),
});
