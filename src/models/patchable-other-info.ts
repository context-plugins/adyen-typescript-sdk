import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productType11Schema, type ProductType11 } from "./product-type11.js";
import { subType11Schema, type SubType11 } from "./sub-type11.js";

export type PatchableOtherInfo = {
  /** Your description of the issue for raising a dispute of `type` **other**. */
  descriptionOfIssue?: string;
  /**
   * The specific category of **other** dispute that you are raising.
   *
   * Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**,
   * **counterfeit**, **creditNotProcessed**, **notAsDescribed**.
   */
  subType?: SubType11;
  /**
   * The type of product that you purchased.
   *
   * Possible values: **goods**, **services**.
   */
  whatWasPurchased?: ProductType11;
};

export const patchableOtherInfoSchema: Schema<PatchableOtherInfo> = s.object<PatchableOtherInfo>({
  descriptionOfIssue: s.optional(s.string()),
  subType: s.optional(s.lazy(() => subType11Schema)),
  whatWasPurchased: s.optional(s.lazy(() => productType11Schema)),
});
