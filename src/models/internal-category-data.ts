import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type411, type411Schema } from "./type411.js";

export type InternalCategoryData = {
  /** The capture's merchant reference included in the transfer. */
  modificationMerchantReference?: string;
  /** The capture reference included in the transfer. */
  modificationPspReference?: string;
  /** **internal** @default Type411.Internal */
  type?: Type411;
};

export const internalCategoryDataSchema: Schema<InternalCategoryData> = s.object<InternalCategoryData>({
  modificationMerchantReference: s.optional(s.string()),
  modificationPspReference: s.optional(s.string()),
  type: s.defaulted(type411Schema, Type411.Internal),
});
