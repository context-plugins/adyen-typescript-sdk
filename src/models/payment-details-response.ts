import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount26Schema, type Amount26 } from "./amount26.js";
import { checkoutOrderResponse1Schema, type CheckoutOrderResponse1 } from "./checkout-order-response1.js";
import { checkoutThreeDs2ActionSchema, type CheckoutThreeDs2Action } from "./checkout-three-ds2-action.js";
import { fraudResult1Schema, type FraudResult1 } from "./fraud-result1.js";
import { paymentResponse1Schema, type PaymentResponse1 } from "./payment-response1.js";
import { paymentResponse2Schema, type PaymentResponse2 } from "./payment-response2.js";
import { resultCode3Schema, type ResultCode3 } from "./result-code3.js";
import { threeDs2ResponseData1Schema, type ThreeDs2ResponseData1 } from "./three-ds2-response-data1.js";
import { threeDs2Result1Schema, type ThreeDs2Result1 } from "./three-ds2-result1.js";

export type PaymentDetailsResponse = {
  action?: CheckoutThreeDs2Action;
  additionalData?: Record<string, string>;
  amount?: Amount26;
  donationToken?: string;
  fraudResult?: FraudResult1;
  merchantReference?: string;
  order?: CheckoutOrderResponse1;
  paymentMethod?: PaymentResponse1;
  paymentValidations?: PaymentResponse2;
  pspReference?: string;
  refusalReason?: string;
  refusalReasonCode?: string;
  resultCode?: ResultCode3;
  shopperLocale?: string;
  threeDs2ResponseData?: ThreeDs2ResponseData1;
  threeDs2Result?: ThreeDs2Result1;
  threeDsPaymentData?: string;
};

export const paymentDetailsResponseSchema: Schema<PaymentDetailsResponse> = s.object<PaymentDetailsResponse>({
  action: s.optional(s.lazy(() => checkoutThreeDs2ActionSchema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: s.optional(s.lazy(() => amount26Schema)),
  donationToken: s.optional(s.string()),
  fraudResult: s.optional(s.lazy(() => fraudResult1Schema)),
  merchantReference: s.optional(s.string()),
  order: s.optional(s.lazy(() => checkoutOrderResponse1Schema)),
  paymentMethod: s.optional(s.lazy(() => paymentResponse1Schema)),
  paymentValidations: s.optional(s.lazy(() => paymentResponse2Schema)),
  pspReference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  refusalReasonCode: s.optional(s.string()),
  resultCode: s.optional(s.lazy(() => resultCode3Schema)),
  shopperLocale: s.optional(s.string()),
  threeDs2ResponseData: s.optional(s.lazy(() => threeDs2ResponseData1Schema)),
  threeDs2Result: s.optional(s.lazy(() => threeDs2Result1Schema)),
  threeDsPaymentData: s.optional(s.string()),
  _keysMap: {
    threeDs2ResponseData: "threeDS2ResponseData",
    threeDs2Result: "threeDS2Result",
    threeDsPaymentData: "threeDSPaymentData",
  },
});
