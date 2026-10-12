import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productType11Schema, type ProductType11 } from "./product-type11.js";
import { subType11Schema, type SubType11 } from "./sub-type11.js";

/**
 * Additional information for raising a dispute of `type` **other**. Required for disputes of `type`
 * **other**.
 *
 * **Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any
 * disputes for this dispute `type` at this time.
 */
export type OtherInfo3 = {
  /** Your description of the issue for raising a dispute of `type` **other**. */
  descriptionOfIssue: string;
  /**
   * The specific category of **other** dispute that you are raising.
   *
   * Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**,
   * **counterfeit**, **creditNotProcessed**, **notAsDescribed**.
   */
  subType: SubType11;
  /**
   * The type of product that you purchased.
   *
   * Possible values: **goods**, **services**.
   */
  whatWasPurchased: ProductType11;
};

export const otherInfo3Schema: Schema<OtherInfo3> = s.object<OtherInfo3>({
  descriptionOfIssue: s.string(),
  subType: subType11Schema,
  whatWasPurchased: productType11Schema,
});
