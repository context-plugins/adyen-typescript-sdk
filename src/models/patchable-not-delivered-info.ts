import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellingEntitySchema, type CancellingEntity } from "./cancelling-entity.js";
import { productType21Schema, type ProductType21 } from "./product-type21.js";

export type PatchableNotDeliveredInfo = {
  agreedDeliveryLocation?: string | null;
  dateOfCancellation?: string | null;
  deliveredToWrongLocation?: boolean | null;
  descriptionOfIssue?: string;
  didCardholderReturn?: boolean | null;
  isDeliveryLate?: boolean | null;
  isMerchantBankrupt?: boolean | null;
  isNonFiatOrNft?: boolean | null;
  lastExpectedDate?: string;
  whatWasNotDelivered?: ProductType21;
  whoCancelled?: CancellingEntity | null;
};

export const patchableNotDeliveredInfoSchema: Schema<PatchableNotDeliveredInfo> =
  s.object<PatchableNotDeliveredInfo>({
    agreedDeliveryLocation: s.optionalNullable(s.string()),
    dateOfCancellation: s.optionalNullable(s.dateOnly()),
    deliveredToWrongLocation: s.optionalNullable(s.boolean()),
    descriptionOfIssue: s.optional(s.string()),
    didCardholderReturn: s.optionalNullable(s.boolean()),
    isDeliveryLate: s.optionalNullable(s.boolean()),
    isMerchantBankrupt: s.optionalNullable(s.boolean()),
    isNonFiatOrNft: s.optionalNullable(s.boolean()),
    lastExpectedDate: s.optional(s.dateOnly()),
    whatWasNotDelivered: s.optional(s.lazy(() => productType21Schema)),
    whoCancelled: s.optionalNullable(s.lazy(() => cancellingEntitySchema)),
  });
