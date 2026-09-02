import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";

export type StandalonePaymentCancelRequest = {
  applicationInfo?: ApplicationInfo;
  merchantAccount: string;
  paymentReference: string;
  reference?: string;
};

export const standalonePaymentCancelRequestSchema: Schema<StandalonePaymentCancelRequest> =
  s.object<StandalonePaymentCancelRequest>({
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    merchantAccount: s.string(),
    paymentReference: s.string(),
    reference: s.optional(s.string()),
  });
