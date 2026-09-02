import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellingEntity1Schema, type CancellingEntity1 } from "./cancelling-entity1.js";
import { productType21Schema, type ProductType21 } from "./product-type21.js";

export type NotDeliveredInfo1 = {
  agreedDeliveryLocation?: string;
  dateOfCancellation?: string;
  deliveredToWrongLocation?: boolean;
  descriptionOfIssue: string;
  didCardholderReturn?: boolean;
  isDeliveryLate?: boolean;
  isMerchantBankrupt?: boolean;
  isNonFiatOrNft?: boolean;
  lastExpectedDate: string;
  whatWasNotDelivered: ProductType21;
  whoCancelled?: CancellingEntity1;
};

export const notDeliveredInfo1Schema: Schema<NotDeliveredInfo1> = s.object<NotDeliveredInfo1>({
  agreedDeliveryLocation: s.optional(s.string()),
  dateOfCancellation: s.optional(s.dateOnly()),
  deliveredToWrongLocation: s.optional(s.boolean()),
  descriptionOfIssue: s.string(),
  didCardholderReturn: s.optional(s.boolean()),
  isDeliveryLate: s.optional(s.boolean()),
  isMerchantBankrupt: s.optional(s.boolean()),
  isNonFiatOrNft: s.optional(s.boolean()),
  lastExpectedDate: s.dateOnly(),
  whatWasNotDelivered: productType21Schema,
  whoCancelled: s.optional(s.lazy(() => cancellingEntity1Schema)),
});
