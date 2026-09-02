import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodToStore1Schema, type PaymentMethodToStore1 } from "./payment-method-to-store1.js";
import {
  recurringProcessingModel1Schema,
  type RecurringProcessingModel1,
} from "./recurring-processing-model1.js";

export type StoredPaymentMethodRequest = {
  merchantAccount: string;
  paymentMethod: PaymentMethodToStore1;
  recurringProcessingModel: RecurringProcessingModel1;
  shopperEmail?: string;
  shopperIp?: string;
  shopperReference: string;
};

export const storedPaymentMethodRequestSchema: Schema<StoredPaymentMethodRequest> =
  s.object<StoredPaymentMethodRequest>({
    merchantAccount: s.string(),
    paymentMethod: paymentMethodToStore1Schema,
    recurringProcessingModel: recurringProcessingModel1Schema,
    shopperEmail: s.optional(s.string()),
    shopperIp: s.optional(s.string()),
    shopperReference: s.string(),
    _keysMap: {
      shopperIp: "shopperIP",
    },
  });
