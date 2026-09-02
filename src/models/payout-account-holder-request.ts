import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { payoutSpeedSchema, type PayoutSpeed } from "./payout-speed.js";

export type PayoutAccountHolderRequest = {
  accountCode: string;
  accountHolderCode: string;
  amount?: Amount;
  bankAccountUuid?: string;
  description?: string;
  merchantReference?: string;
  payoutMethodCode?: string;
  payoutSpeed?: PayoutSpeed;
};

export const payoutAccountHolderRequestSchema: Schema<PayoutAccountHolderRequest> =
  s.object<PayoutAccountHolderRequest>({
    accountCode: s.string(),
    accountHolderCode: s.string(),
    amount: s.optional(s.lazy(() => amountSchema)),
    bankAccountUuid: s.optional(s.string()),
    description: s.optional(s.string()),
    merchantReference: s.optional(s.string()),
    payoutMethodCode: s.optional(s.string()),
    payoutSpeed: s.optional(s.lazy(() => payoutSpeedSchema)),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
