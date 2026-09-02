import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type AccountPayoutState = {
  allowPayout?: boolean;
  disableReason?: string;
  disabled?: boolean;
  notAllowedReason?: string;
  payoutLimit?: Amount;
  tierNumber?: number;
};

export const accountPayoutStateSchema: Schema<AccountPayoutState> = s.object<AccountPayoutState>({
  allowPayout: s.optional(s.boolean()),
  disableReason: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  notAllowedReason: s.optional(s.string()),
  payoutLimit: s.optional(s.lazy(() => amountSchema)),
  tierNumber: s.optional(s.number()),
});
