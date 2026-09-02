import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productType11Schema, type ProductType11 } from "./product-type11.js";
import { subType11Schema, type SubType11 } from "./sub-type11.js";

export type PatchableOtherInfo = {
  descriptionOfIssue?: string;
  subType?: SubType11;
  whatWasPurchased?: ProductType11;
};

export const patchableOtherInfoSchema: Schema<PatchableOtherInfo> = s.object<PatchableOtherInfo>({
  descriptionOfIssue: s.optional(s.string()),
  subType: s.optional(s.lazy(() => subType11Schema)),
  whatWasPurchased: s.optional(s.lazy(() => productType11Schema)),
});
