import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/**
 * Details to provide if `type` is **discover**. For merchants operating in Japan, request
 * [Diners](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-diners)
 * payment method instead. Discover is automatically requested, together with Diners.
 */
export type GenericPmWithTdiUpdateInfo4 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo4Schema: Schema<GenericPmWithTdiUpdateInfo4> =
  s.object<GenericPmWithTdiUpdateInfo4>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
