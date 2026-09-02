import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformPaymentConfiguration1Schema,
  type PlatformPaymentConfiguration1,
} from "./platform-payment-configuration1.js";
import { status43Schema, type Status43 } from "./status43.js";

export type BalanceAccountUpdateRequest = {
  accountHolderId?: string;
  description?: string;
  metadata?: Record<string, string>;
  platformPaymentConfiguration?: PlatformPaymentConfiguration1;
  reference?: string;
  status?: Status43;
  timeZone?: string;
};

export const balanceAccountUpdateRequestSchema: Schema<BalanceAccountUpdateRequest> =
  s.object<BalanceAccountUpdateRequest>({
    accountHolderId: s.optional(s.string()),
    description: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    platformPaymentConfiguration: s.optional(s.lazy(() => platformPaymentConfiguration1Schema)),
    reference: s.optional(s.string()),
    status: s.optional(s.lazy(() => status43Schema)),
    timeZone: s.optional(s.string()),
  });
