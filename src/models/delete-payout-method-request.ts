import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeletePayoutMethodRequest = {
  accountHolderCode: string;
  payoutMethodCodes: string[];
};

export const deletePayoutMethodRequestSchema: Schema<DeletePayoutMethodRequest> =
  s.object<DeletePayoutMethodRequest>({
    accountHolderCode: s.string(),
    payoutMethodCodes: s.array(s.string()),
  });
