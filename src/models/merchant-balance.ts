import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type MerchantBalance = {
  availableFund?: Amount17;
  deposit?: Amount17;
  merchantAccount?: string;
  nextPayout?: Amount17;
  pendingBalance?: Amount17;
  reserve?: Amount17;
};

export const merchantBalanceSchema: Schema<MerchantBalance> = s.object<MerchantBalance>({
  availableFund: s.optional(s.lazy(() => amount17Schema)),
  deposit: s.optional(s.lazy(() => amount17Schema)),
  merchantAccount: s.optional(s.string()),
  nextPayout: s.optional(s.lazy(() => amount17Schema)),
  pendingBalance: s.optional(s.lazy(() => amount17Schema)),
  reserve: s.optional(s.lazy(() => amount17Schema)),
});
