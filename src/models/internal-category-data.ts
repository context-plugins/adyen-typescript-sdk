import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type213Schema, type Type213 } from "./type213.js";

export type InternalCategoryData = {
  modificationMerchantReference?: string;
  modificationPspReference?: string;
  type?: Type213;
};

export const internalCategoryDataSchema: Schema<InternalCategoryData> = s.object<InternalCategoryData>({
  modificationMerchantReference: s.optional(s.string()),
  modificationPspReference: s.optional(s.string()),
  type: s.optional(s.lazy(() => type213Schema)),
});
