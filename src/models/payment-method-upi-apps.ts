import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appIdentifierInfo1Schema, type AppIdentifierInfo1 } from "./app-identifier-info1.js";

export type PaymentMethodUpiApps = {
  /** The app identifier information containing iOS scheme and Android package ID. */
  appIdentifierInfo?: AppIdentifierInfo1;
  /** The unique identifier of this app, to submit in requests to /payments. */
  id: string;
  /** A localized name of the app. */
  name: string;
};

export const paymentMethodUpiAppsSchema: Schema<PaymentMethodUpiApps> = s.object<PaymentMethodUpiApps>({
  appIdentifierInfo: s.optional(s.lazy(() => appIdentifierInfo1Schema)),
  id: s.string(),
  name: s.string(),
});
