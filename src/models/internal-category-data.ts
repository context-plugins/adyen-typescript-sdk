import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type411Schema, type Type411 } from "./type411.js";

export type InternalCategoryData = {
  modificationMerchantReference?: string;
  modificationPspReference?: string;
  type?: Type411;
};

export const internalCategoryDataSchema: Schema<InternalCategoryData> = s.object<InternalCategoryData>({
  modificationMerchantReference: s.optional(s.string()),
  modificationPspReference: s.optional(s.string()),
  type: s.optional(s.lazy(() => type411Schema)),
});
