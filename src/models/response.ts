import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the modification request has been received for processing. */
export const Response = {
  CaptureReceived: "[capture-received]",
  CancelReceived: "[cancel-received]",
  RefundReceived: "[refund-received]",
  CancelOrRefundReceived: "[cancelOrRefund-received]",
  AdjustAuthorisationReceived: "[adjustAuthorisation-received]",
  DonationReceived: "[donation-received]",
  TechnicalCancelReceived: "[technical-cancel-received]",
  VoidPendingRefundReceived: "[voidPendingRefund-received]",
  Authorised: "Authorised",
  Refused: "Refused",
  Error: "Error",
} as const;
export type Response = (typeof Response)[keyof typeof Response] | (string & {});

export const responseSchema: EnumSchema<Response> = s.enumOf<Response>(Response);
