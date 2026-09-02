import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";

export type PaymentCancelRequest = {
  applicationInfo?: ApplicationInfo;
  merchantAccount: string;
  reference?: string;
};

export const paymentCancelRequestSchema: Schema<PaymentCancelRequest> = s.object<PaymentCancelRequest>({
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  merchantAccount: s.string(),
  reference: s.optional(s.string()),
});
