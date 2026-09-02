import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";
import {
  platformPaymentConfiguration1Schema,
  type PlatformPaymentConfiguration1,
} from "./platform-payment-configuration1.js";
import { status23Schema, type Status23 } from "./status23.js";

export type BalanceAccount = {
  accountHolderId: string;
  balances?: Balance[];
  defaultCurrencyCode?: string;
  description?: string;
  id: string;
  metadata?: Record<string, string>;
  migratedAccountCode?: string;
  platformPaymentConfiguration?: PlatformPaymentConfiguration1;
  reference?: string;
  status?: Status23;
  timeZone?: string;
};

export const balanceAccountSchema: Schema<BalanceAccount> = s.object<BalanceAccount>({
  accountHolderId: s.string(),
  balances: s.optional(s.array(s.lazy(() => balanceSchema))),
  defaultCurrencyCode: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
  migratedAccountCode: s.optional(s.string()),
  platformPaymentConfiguration: s.optional(s.lazy(() => platformPaymentConfiguration1Schema)),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status23Schema)),
  timeZone: s.optional(s.string()),
});
