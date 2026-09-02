import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformPaymentConfiguration1Schema,
  type PlatformPaymentConfiguration1,
} from "./platform-payment-configuration1.js";

export type BalanceAccountInfo = {
  accountHolderId: string;
  defaultCurrencyCode?: string;
  description?: string;
  metadata?: Record<string, string>;
  migratedAccountCode?: string;
  platformPaymentConfiguration?: PlatformPaymentConfiguration1;
  reference?: string;
  timeZone?: string;
};

export const balanceAccountInfoSchema: Schema<BalanceAccountInfo> = s.object<BalanceAccountInfo>({
  accountHolderId: s.string(),
  defaultCurrencyCode: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  migratedAccountCode: s.optional(s.string()),
  platformPaymentConfiguration: s.optional(s.lazy(() => platformPaymentConfiguration1Schema)),
  reference: s.optional(s.string()),
  timeZone: s.optional(s.string()),
});
