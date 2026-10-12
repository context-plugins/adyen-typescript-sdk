import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeletePayoutMethodRequest = {
  /** The code of the account holder, from which to delete the payout methods. */
  accountHolderCode: string;
  /** The codes of the payout methods to be deleted. */
  payoutMethodCodes: string[];
};

export const deletePayoutMethodRequestSchema: Schema<DeletePayoutMethodRequest> =
  s.object<DeletePayoutMethodRequest>({
    accountHolderCode: s.string(),
    payoutMethodCodes: s.array(s.string()),
  });
