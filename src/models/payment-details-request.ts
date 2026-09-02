import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  detailsRequestAuthenticationData1Schema,
  type DetailsRequestAuthenticationData1,
} from "./details-request-authentication-data1.js";
import {
  paymentCompletionDetails1Schema,
  type PaymentCompletionDetails1,
} from "./payment-completion-details1.js";

export type PaymentDetailsRequest = {
  authenticationData?: DetailsRequestAuthenticationData1;
  details: PaymentCompletionDetails1;
  paymentData?: string;
  threeDsAuthenticationOnly?: boolean;
};

export const paymentDetailsRequestSchema: Schema<PaymentDetailsRequest> = s.object<PaymentDetailsRequest>({
  authenticationData: s.optional(s.lazy(() => detailsRequestAuthenticationData1Schema)),
  details: paymentCompletionDetails1Schema,
  paymentData: s.optional(s.string()),
  threeDsAuthenticationOnly: s.optional(s.boolean()),
  _keysMap: {
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});
