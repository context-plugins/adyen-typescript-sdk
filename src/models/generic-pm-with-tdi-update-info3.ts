import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/**
 * Details to provide if `type` is **diners**. For merchants operating in Japan, Diners payments are
 * processed through the JCB network. This means that you must include [JCB-specific
 * fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb)
 * in this object.
 */
export type GenericPmWithTdiUpdateInfo3 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo3Schema: Schema<GenericPmWithTdiUpdateInfo3> =
  s.object<GenericPmWithTdiUpdateInfo3>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
