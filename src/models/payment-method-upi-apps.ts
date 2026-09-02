import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appIdentifierInfo1Schema, type AppIdentifierInfo1 } from "./app-identifier-info1.js";

export type PaymentMethodUpiApps = {
  appIdentifierInfo?: AppIdentifierInfo1;
  id: string;
  name: string;
};

export const paymentMethodUpiAppsSchema: Schema<PaymentMethodUpiApps> = s.object<PaymentMethodUpiApps>({
  appIdentifierInfo: s.optional(s.lazy(() => appIdentifierInfo1Schema)),
  id: s.string(),
  name: s.string(),
});
