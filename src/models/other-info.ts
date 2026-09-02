import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productType11Schema, type ProductType11 } from "./product-type11.js";
import { subType11Schema, type SubType11 } from "./sub-type11.js";

export type OtherInfo = {
  descriptionOfIssue: string;
  subType: SubType11;
  whatWasPurchased: ProductType11;
};

export const otherInfoSchema: Schema<OtherInfo> = s.object<OtherInfo>({
  descriptionOfIssue: s.string(),
  subType: subType11Schema,
  whatWasPurchased: productType11Schema,
});
